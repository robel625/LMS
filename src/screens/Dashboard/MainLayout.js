import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image, 
    Animated
} from 'react-native';
// import { Shadow } from 'react-native-shadow-2';
import { Home, Profile, Search} from "../../screens"
import { COLORS, SIZES , FONTS, constants } from "../../constants";
import { useSelector, useDispatch } from 'react-redux';


const bottom_tabs = constants.bottom_tabs.map((bottom_tabs) => ({
    ...bottom_tabs,
    ref: React.createRef()
}))

const TabIndicator =({ measureLayout, scrollX}) => {

     const inputRange = bottom_tabs.map((_, i) => i * SIZES.width)

     const TabIndicatorwidth = scrollX.interpolate({
        inputRange,
        outputRange: measureLayout.map(measure => measure.width)
     })

     const translateX = scrollX.interpolate({
        inputRange,
        outputRange: measureLayout.map(measure => measure.x)
     })

    return (
        <Animated.View
         style={{
            position: "absolute",
            left: 0,
            height: "100%",
            width: TabIndicatorwidth,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
            transform: [{
                    translateX
            }]
         }}
         />
    )
}

const Tabs = ({scrollX, onBottomTabPress}) => {

    const containerRef = useRef()
    const [measureLayout, setMeasureLayout] = useState([])

    useEffect(() => {
        let ml = []

        bottom_tabs.forEach((bottom_tab) => {
            bottom_tab?.ref?.current?.measureLayout(
                containerRef.current,
                (x, y, width, height) => {
                    ml.push({
                        x, y, width, height
                    })
                    if(ml.length === bottom_tabs.length){
                        setMeasureLayout(ml)
                    }
                }
            )
        })


    }, [containerRef.current])

    return (
        <View
        ref={containerRef}
         style={{
            flex: 1,
            flexDirection: "row"
         }}
        >
            {measureLayout.length > 0 && 
              <TabIndicator measureLayout= {measureLayout} scrollX={scrollX} />}


             {bottom_tabs.map((item, index) => {
                return (
                    <TouchableOpacity
                      key={`BottomTab-${index}`}
                      ref={item.ref}
                      style={{
                        flex: 1,
                        paddingHorizontal: 15,
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                      onPress={()=> onBottomTabPress(index)}
                    >
                        <Image
                           source={item.icon}
                           resizeMode= 'cover'
                           style={{
                            width: 15,
                            height: 15
                           }}
                        />
                        <Text
                         style={{
                            marginTop: 2,
                            color: COLORS.white,
                            ...FONTS.h4
                         }}
                        >
                            {item.label}
                        </Text>

                    </TouchableOpacity>
                )
             })}

        </View>
    )
}

const MainLayout = () => {

    const { auth, themeReducer } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [appTheme, setAppTheme] = useState(false)

    useEffect(()=> {
        setAppTheme(themeReducer.appTheme)
    }, [themeReducer])

    const flatListRef = React.useRef()
    const scrollX = React.useRef(new Animated.Value(0)).current;

    const onBottomTabPress = useCallback(bottomTabIndex => 
        {
            flatListRef?.current?.scrollToOffset({
                offset: bottomTabIndex * SIZES.width
            })
        }
    )

   function renderContent() {
    return (
        <View 
            style={{
                flex: 1,
            }}
        >
         <Animated.FlatList
            ref={flatListRef}
            horizontal
            scrollEnabled={false}
            pagingEnabled
            snapToAlignment='center'
            snapToInterval={SIZES.width}
            decelerationRate='fast'
            showsHorizontalScrollIndicator={false}
            data={constants.bottom_tabs}
            keyExtractor={item => `Main-${item.id}`}
            onScroll={
                Animated.event([
                  {nativeEvent: {  contentOffset: { x: scrollX } }}
            ],{
                useNativeDriver: false
            })
            }
            renderItem={({item, index}) => {
                return (
                    <View
                    style={{
                        height: SIZES.height,
                        width: SIZES.width
                    }}
                    >
                      {item.label == constants.screens.home && <Home/>}
                      {item.label == constants.screens.search && <Search/>}
                      {item.label == constants.screens.profile && <Profile/>}
                    </View>
                )
            }}
         />
        </View>
    )
   }


   function renderBottomTab() {
    return (
        <View 
            style={{
                // paddingBottom: SIZES.height > 800 ? 20 : 5,
                paddingHorizontal: SIZES.padding,
                paddingVertical: SIZES.radius,
                backgroundColor: appTheme?.backgroundColor1
            }}
            >
            {/* <Shadow  size={[SIZES.width -(SIZES.padding * 2), 85]}> */}
            <View 
            style={{
              width: SIZES.width -(SIZES.padding * 2),
              height: 55,
              backgroundColor: '#fff', // Set a background color for proper shadow rendering
              borderRadius: SIZES.radius, // Add border radius (optional)
              elevation: 5, // Adjust to control shadow depth
              shadowColor: '#000', // Optional: Set shadow color
              shadowOffset: { width: 0, height: 2 }, // Optional: Adjust shadow offset
              shadowOpacity: 0.2, // Optional: Control shadow opacity
              backgroundColor: appTheme?.backgroundColor2
            }}
            >
            {/* <View> */}
                <View style={{
                flex: 1,
                borderRadius: 12,
                
            }}>
                <Tabs 
                  scrollX={scrollX}
                  onBottomTabPress= {onBottomTabPress}
                />

                </View>
            {/* </Shadow> */}
            </View>
        </View>

    )
}

    return (
        <View 
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
           {renderContent()}

           {renderBottomTab()}
        </View>
    )
}

export default MainLayout;

// function mapStateProps(state) {
//   return {
//       appTheme: state.appTheme,
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//       }
// }