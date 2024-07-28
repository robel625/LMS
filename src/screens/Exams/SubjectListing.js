import React, { useRef } from 'react';
import {View, Text, ImageBackground, Image, ScrollView, TextInput, StyleSheet} from 'react-native';
import {FlatList,  GestureHandlerRootView} from 'react-native-gesture-handler';
import Animated, { 
     Extrapolation,
     interpolate,
     useAnimatedScrollHandler,
     useAnimatedStyle,
     useSharedValue
} from 'react-native-reanimated';
import {COLORS, SIZES, FONTS, icons, images, dummyData} from '../../constants';
import {IconButton, TextButton, VerticalCourseCard,
  LineDivider, CategoryCard, HorizontalCourseCard,
} from '../../components';

const SubjectListing = ({ navigation }) => {

    const scrollViewRef = useRef()

    const scrollY = useSharedValue(0)
    const onScroll = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y
    })


    function renderHeader() {
        return(
            <View
               style={{
                flexDirection: 'row',
                paddingHorizontal: SIZES.padding,
                justifyContent: "space-between",
                backgroundColor: COLORS.primary,
                height: 70,
                alignItems: 'center'
               }}
            >
            <View
               style={{
                flexDirection: 'row',
                alignItems: 'center'
                // justifyContent: "space-between"
               }}
            >
                <IconButton
                icon={icons.angle_arrow_left}
                containerStyle={{
              width: 40,
              height: 40,
              justifyContent: 'center',
            }}
            iconStyle={{
                  width: 25,
                  height: 25,
                  tintColor: COLORS.white
              }}
                onPress={() => {
                    navigation.goBack()
                }}
              />
                <Text style={{
                    ...FONTS.h2,
                    color: COLORS.white
                }} >
                    Grade 9 to 12
                </Text>
                </View>

                {/* <IconButton
                     icon={icons.sun}
                     iconStyle={{
                     tintColor: COLORS.white
                     }}
                    //  onPress={() => toggleThemeHandler()}
                /> */}
                 <Image
                      source={images?.telegram}
                      resizeMode= "contain"
                      style={{
                         width: 40,
                         height: 40,
                        }}
                     />

            </View>
        )
    }


    function  renderBrowseCategories() {
        return (
           <View
              style={{
              //  marginTop: SIZES.padding
              }}
           >
            {/* <Text
              style={{
                marginHorizontal: SIZES.padding,
                ...FONTS.h2,
                color: COLORS.black
              }}
            >
              Subject Categories
            </Text> */}
    
            <FlatList
                data={dummyData.SubjectCatagory}
                numColumns={2}
                scrollEnabled={false}
                listKey="BrowseSubjects"
                keyExtractor={item => `BrowseSubjects-${item.id}`}
                contentContainerStyle={{
                  marginTop: SIZES.radius
                }}
                renderItem={({item, index}) => (
                   <CategoryCard
                       sharedElementPrefix="Search"
                       category={item}
                       containerStyle={{
                        height: 180,
                        width: (SIZES.width -(SIZES.padding * 2)) / 2,
                        marginTop: SIZES.radius,
                        marginLeft: (index + 1) % 2 == 0 ? SIZES.radius : SIZES.padding
                       }}
                       onPress={() => navigation.navigate("YearListing", {subject: item.title})}
                     />
                )}
               />
    
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
      {renderHeader()}
      <Animated.ScrollView
              ref={scrollViewRef}
              contentContainerStyle ={{
                // marginTop: 100,
                paddingBottom: 100
              }}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
              keyboardDismissMode="on-drag"
              onScroll = {onScroll}
              onScrollEndDrag = {(event) =>{
                if (event.nativeEvent.contentOffset.y > 10 &&  event.nativeEvent.contentOffset.y < 50){
                    scrollViewRef.current?.scrollTo({
                        x: 0,
                        y: 60,
                        animated: true
                    })
                }
              } }
            >

      {renderBrowseCategories()}
      </Animated.ScrollView>
    </View>
  )
}

export default SubjectListing

const styles = StyleSheet.create({})