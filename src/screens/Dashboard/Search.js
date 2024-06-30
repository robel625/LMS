import React, { useRef } from 'react';
import {View, Text, ImageBackground, Image, ScrollView, TextInput} from 'react-native';
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
import { useNavigation } from '@react-navigation/native';

const Search = () => {

  const navigation = useNavigation();

    const scrollViewRef = useRef()

    const scrollY = useSharedValue(0)
    const onScroll = useAnimatedScrollHandler((event) => {
        scrollY.value = event.contentOffset.y
    })

   function  renderTopSearches() {
     return (
        <View
           style={{
            marginTop: SIZES.padding
           }}
        >
            <Text
              style={{
                marginHorizontal: SIZES.padding,
                ...FONTS.h2,
                color: COLORS.black
              }}
            >
               Top Searches
            </Text>

            <GestureHandlerRootView>
        <FlatList
            horizontal
            data={dummyData.top_searches}
            listKey="TopSearches"
            keyExtractor={item => `TopSearches-${item.id}`}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginTop: SIZES.radius
            }}
            renderItem={({item, index}) => (
               <TextButton
                   label={item.label}
                   contentContainerStyle={{
                    paddingVertical: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                    marginRight: index == dummyData.top_searches.length - 1 ? SIZES.padding : 0,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.gray10
                   }}
                   labelStyle={{
                      color: COLORS.gray50,
                      ...FONTS.h3
                   }}
                 />
            )}
           />
           </GestureHandlerRootView>

        </View>
     )
   }

   function  renderBrowseCategories() {
    return (
       <View
          style={{
           marginTop: SIZES.padding
          }}
       >
        <Text
          style={{
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
            color: COLORS.black
          }}
        >
          Browse Categories
        </Text>

        <GestureHandlerRootView>
        <FlatList
            data={dummyData.categories}
            numColumns={2}
            scrollEnabled={false}
            listKey="BrowseCategries"
            keyExtractor={item => `BrowseCategries-${item.id}`}
            contentContainerStyle={{
              marginTop: SIZES.radius
            }}
            renderItem={({item, index}) => (
               <CategoryCard
                   sharedElementPrefix="Search"
                   category={item}
                   containerStyle={{
                    height: 130,
                    width: (SIZES.width -(SIZES.padding * 2) - SIZES.radius) / 2,
                    marginTop: SIZES.radius,
                    marginLeft: (index + 1) % 2 == 0 ? SIZES.radius : SIZES.padding
                   }}
                   onPress={() => navigation.navigate("CourseListing", {category: item, sharedElementPrefix: "Search"})}
                 />
            )}
           />
           </GestureHandlerRootView>

       </View>
        )
    }

    function  renderSearchBar() {

       const inputRange = [0, 35];

       const searchBarAnimatedStyle = useAnimatedStyle(() => {
        return {
            height: interpolate(scrollY.value, inputRange,
                [55, 0], Extrapolation.CLAMP),
            opacity: interpolate(scrollY.value, inputRange,
                [1,0], Extrapolation.CLAMP)
        }
       })

        return (
           <Animated.View
              style={[{
               position: 'absolute',
               top: 50,
               left: 0,
               right: 0,
               paddingHorizontal: SIZES.padding,
               height: 50,
              }, searchBarAnimatedStyle]}
           >
            <View 
            style={{
            //   width: SIZES.width -(SIZES.padding * 2),
              height: 55,
              backgroundColor: '#fff', // Set a background color for proper shadow rendering
              borderRadius: SIZES.radius, // Add border radius (optional)
              elevation: 5, // Adjust to control shadow depth
              shadowColor: '#000', // Optional: Set shadow color
              shadowOffset: { width: 0, height: 2 }, // Optional: Adjust shadow offset
              shadowOpacity: 0.2, // Optional: Control shadow opacity
            }}
            >
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: "center",
                    width: SIZES.width - (SIZES.padding * 2),
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.white
                }}
            >
                <Image
                  source={icons.search}
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.gray40
                  }}
                />
                <TextInput
                  style={{
                    flex: 1,
                    marginLeft: SIZES.base,
                    ...FONTS.h4
                  }}
                  value=''
                  placeholder='Search for Topic, Courses & Educators'
                  placeholderTextColor={COLORS.gray30}
                />

            </View>
            </View>
            </Animated.View>
        )
    }

    return (
        <View
        style={{
            flex: 1,
            backgroundColor: COLORS.white
           }}
        >
            <Animated.ScrollView
              ref={scrollViewRef}
              contentContainerStyle ={{
                marginTop: 100,
                paddingBottom: 300
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
             {renderTopSearches()}

             {renderBrowseCategories()}

            </Animated.ScrollView>

            {renderSearchBar()}
            
        </View>
    )
}

export default Search;