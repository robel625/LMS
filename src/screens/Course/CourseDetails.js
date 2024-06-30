import { StyleSheet, Text, View , TouchableOpacity, Image, ImageBackground, Keyboard, Animated } from 'react-native'
import React, { createRef, useCallback, useEffect, useRef, useState } from 'react'
import { COLORS, FONTS, SIZES,images, icons, dummyData, constants } from "../../constants"
import {IconButton,
    LineDivider, 
  } from '../../components';
import Video from 'react-native-video';
import CourseChapters from './CourseTabs/CourseChapters';
import CourseFiles from './CourseTabs/CourseFiles';
import CourseDiscussions from './CourseTabs/CourseDiscussions';

const course_details_tabs = constants.course_details_tabs.map((course_details_tabs) =>({
    ...course_details_tabs,
    ref: createRef()
}))

const TabIndictor = ({measureLayout, scrollX }) => {
    const inputRange = course_details_tabs.map((_, i) => i * SIZES.width)

    const tabIndictorWidth = scrollX.interpolate({
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
            position: 'absolute',
            bottom: 0,
            height: 4,
            width: tabIndictorWidth,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
            transform: [{
                translateX
            }]
          }}
        />
    )
}

const Tabs = ({ scrollX, onTabPress }) => {
     const [measureLayout, setMeasureLayout] = useState([])
     const containerRef = useRef()

     console.log("[measureLayout", measureLayout,       measureLayout.length)

     useEffect(() => {
        let ml = []

        course_details_tabs.forEach(course_details_tab => {
            course_details_tab?.ref?.current?.measureLayout(
                containerRef.current,
                (x, y, width, height) => {
                    ml.push({
                        x, y, width, height
                    })
                    if(ml.length === course_details_tabs.length)
                        {
                            setMeasureLayout(ml)
                        }
                }
            )
        })
     }, [containerRef.current])

     return(
        <View
          ref={containerRef}
          style={{
            flex: 1,
            flexDirection: 'row'
          }}
        >
          {/* Tab Indicator  */}
          {measureLayout.length > 0 && 
          <TabIndictor
            measureLayout={measureLayout}
            scrollX = {scrollX}
          />}

          {/* Tabs */}
          {course_details_tabs.map((item, index) => {
            return (
                <TouchableOpacity
                  key={`Tab-${index}`}
                  ref={item.ref}
                  style={{
                    flex: 1,
                    paddingHorizontal: 15,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onPress={() => {
                    Keyboard.dismiss()
                    onTabPress(index)}}
                >
                <Text
                   style={{
                    ...FONTS.h3,
                    fontSize: SIZES.height > 800 ? 18 : 17,
                    color : COLORS.black 
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





const CourseDetails = ({ navigation, route }) => {

    const { selectedCourse } = route.params;

    const [playVideo, setPlayVideo] = useState(false)

    const flatListRef = useRef()
    const scrollX = useRef(new Animated.Value(0)).current

    const onTabPress = useCallback(tabIndex => {
        flatListRef?.current?.scrollToOffset({
            offset: tabIndex * SIZES.width
        })
    })

  function renderVideoSection() {
    return (
        <View
           style={{
            height: SIZES.height > 800 ? 220 : 200,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.gray90
           }}
        
        >
            <ImageBackground
               source={selectedCourse?.thumbnail}
               style={{
                width:"100%",
                height: "100%",
                alignItems : 'center',
                justifyContent : 'center'
               }}
            >
                <IconButton
                    icon={icons.play}
                    iconStyle={{
                        width: 25,
                        height: 25,
                        tinitColor: COLORS.white
                    }}
                    containerStyle={{
                        width: 55,
                        height: 55,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: 30,
                        backgroundColor: COLORS.primary
                    }}
                    onPress={() => setPlayVideo(true)}
                />

                {playVideo &&
                   <Video
                      source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/big_buck_bunny_1080p.mp4'}}
                      controls={true}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom:0,
                        right: 0,
                        backgroundColor: COLORS.black
                      }}
                   />
                
                }
               
            </ImageBackground>

        </View>
    )
  }

  function renderHeaderComponents() {
    return (
        <>
        <View
          style={{
            flex: 1
          }}
        >
           <IconButton
              icon={icons.back}
              iconStyle={{
                width: 25,
                height: 25,
                tintColor: COLORS.black
              }}
              containerStyle={{
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                backgroundColor: COLORS.white
              }}
              onPress={() => navigation.goBack()}
           />
        </View>

        <View
          style={{
            flexDirection: 'row'
          }}
        >
           <IconButton
              icon={icons.media}
              iconStyle={{
                tinitColor: COLORS.black
              }}
              containerStyle={{
                width: 50,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}
           />

            <IconButton
              icon={icons.favourite_outline}
              iconStyle={{
                tinitColor: COLORS.black
              }}
              containerStyle={{
                width: 50,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}
           />
        </View>
        </>
    )
  }

  function renderHeader() {
    if(playVideo) {
        return (
            <View 
              style={{
                flexDirection: "row",
                paddingHorizontal: SIZES.radius,
                paddingBottom: SIZES.base,
                height: 85,
                backgroundColor: COLORS.black,
                alignItems: 'flex-end'
              }}
            >
               {renderHeaderComponents()}
            </View>
        )
    }
    else { 
        return (
            <View
              style={{
                position: 'absolute',
                top: SIZES.height > 800 ? 40 : 20,
                left: 0,
                right: 0,
                flexDirection: 'row',
                paddingHorizontal: SIZES.padding,
                zIndex: 1
              }}
            >
                {renderHeaderComponents()}
            </View>
        )
    }
}

function renderContent() {
    return (
        <View
          style={{
            flex: 1
          }}
        >
            {/* Tabs */}
            <View
               style={{
                height: 60,
              }}
            >
                <Tabs
                   scrollX={scrollX}
                   onTabPress={onTabPress}
                />

            </View>


            {/* LineDivider */}
            <LineDivider
              lineStyle={{
                backgroundColor: COLORS.gray20
              }}
            />

            {/* Content */}
            <Animated.FlatList
               ref = {flatListRef}
               horizontal
               pagingEnabled
               snapToAlignment='center'
               snapToInterval={SIZES.width}
               decelerationRate='fast'
               keyboardDismissMode='on-drag'
               showsHorizontalScrollIndicator={false}
               data={constants.course_details_tabs}
               keyExtractor={item => `CourseDetailTabs-${item.id}`}
               onScroll={
                Animated.event([
                     { nativeEvent: { contentOffset: { x: scrollX}}}
               ],{
                    useNativeDriver: false
               })
              }
              renderItem={({ item, index}) => {
                return (
                    <View 
                      style={{
                        width: SIZES.width
                      }}
                    >
                        {index == 0 && <CourseChapters/>}
                        {index == 1 && <CourseFiles/>}
                        {index == 2 && <CourseDiscussions/>}
                </View>
                )
              }}
            />
            
        </View>
        )
    }


  return (
    <View style={{
        flex:1,
        backgroundColor: COLORS.white
    }}>
        {renderHeader()}

        {renderVideoSection()}

        {renderContent()}

    </View>
  )
}

export default CourseDetails

const styles = StyleSheet.create({})