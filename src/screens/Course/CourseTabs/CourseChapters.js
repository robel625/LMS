import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React, { createRef, useCallback, useEffect, useRef, useState } from 'react'
import { COLORS, FONTS, SIZES, images, icons, dummyData, constants } from "../../../constants"
import {
  IconButton,
  LineDivider, TextButton, HorizontalCourseCard, IconLabel,
  HorizontalLectureCard,
} from '../../../components';

const truncateDescription = (description, maxLength) => {
  return description.length > maxLength ? `${description.substring(0, maxLength)}...` : description;
};

const CourseChapters = ({lectures, selectedLecture, chooseLecture}) => {

  const [showFullDescription, setShowFullDescription] = useState(false);

  const maxLength = 100; // Adjust the maximum length as needed

  let truncatedDescription = ""
  if (selectedLecture?.youtubeDescription){
    truncatedDescription = truncateDescription(selectedLecture.youtubeDescription, maxLength);
  }

  function renderHeader() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.radius
        }}
      >
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.black,
            marginLeft: SIZES.radius,
          }}
        >
          {selectedLecture?.title}
        </Text>

        

        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.base,
          }}
        >
          <Text
            style={{
              color: COLORS.gray30,
              ...FONTS.body4
            }}
          >
            {selectedLecture?.publishedAt}
          </Text>
          
          <IconLabel
            icon={icons.time}
            label={selectedLecture?.duration}
            containerStyle={{
              marginLeft: SIZES.radius
            }}
            iconStyle={{
              width: 15,
              height: 15
            }}
            labelStyle={{
              ...FONTS.body4
            }}
          />
          


        </View>

        {/* <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            alignItems: 'center'
          }}
        >
          <Image
            source={images.profile}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25
            }}
          />

          <View
            style={{
              flex: 1,
              marginLeft: SIZES.base,
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                ...FONTS.h3,
                color: COLORS.black,
              }}
            >
              {dummyData?.course_details?.instructor.name}
              
            </Text>

            <Text
              style={{
                ...FONTS.body3
              }}
            >
              {dummyData?.course_details?.instructor?.title}
            </Text>
          </View>

          <TextButton
            label="Follow +"
            contentContainerStyle={{
              width: 80,
              height: 35,
              borderRadius: 20
            }}
            labelStyle={{
              ...FONTS.h3
            }}

          />

        </View> */}

{selectedLecture?.youtubeDescription &&
      <>
          <Text style={{ color: COLORS.gray30, ...FONTS.body4 }}>
        {showFullDescription ? selectedLecture.youtubeDescription : truncatedDescription}
      </Text>
      {selectedLecture.youtubeDescription.length > maxLength && (
        <TouchableOpacity onPress={() => setShowFullDescription(!showFullDescription)}>
          <Text style={{ color: "blue", ...FONTS.body4 }}>{showFullDescription ? 'Less' : 'More'}</Text>
        </TouchableOpacity>
      )}
    </>}

      </View>
    )
  }

  function renderChapter() {
    return (
      <View>
        {dummyData?.course_details?.videos.map((item, index) =>{
           return (
            <TouchableOpacity
               key={`Videos-${index}`}
               style={{
                alignItems: 'center',
                height: 70,
                backgroundColor: item?.is_playing ? COLORS.additionalColor11 : null
               }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: SIZES.padding,
                  alignItems: 'center',
                  height: 70,
                }}
              >
                {/* IconButton */}
                 <Image
                    source={item?.is_complete ? icons.completed : item?.is_playing ? icons.play_1 : icons.lock}
                    style={{
                      width: 40,
                      height: 40,
                    }}
                 />

                {/* Title $ duration */}
                <View
                   style={{
                    flex: 1,
                    marginLeft: SIZES.radius
                   }}
                >
                  <Text
                     style={{
                      color: COLORS.black,
                       ...FONTS.h3
                     }}
                   >
                     {item?.title}
                   </Text>
                   <Text
                     style={{
                       color: COLORS.gray30,
                       ...FONTS.body4
                     }}
                   >
                     {item?.duration}
                   </Text>
                  
                </View>

                {/* Size & Status */}
                <View
                  style={{
                    flexDirection: 'row'
                  }}
                >
                    <Text
                       style={{
                        color: COLORS.gray30,
                        ...FONTS.body4
                       }}
                    >
                      {item?.size}
                    </Text>

                    <Image
                     source={item?.is_downloaded ? icons. completed: icons.download}
                     style={{
                      marginLeft: SIZES.base,
                      width: 25,
                      height: 25,
                      tintColor: item?.is_lock ? COLORS.additionalColor11 : null
                     }}
                    />
                </View>

              </View>
              

               {/* progress Bar */}
               { item?.is_playing &&
                <View
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      height: 5,
                      width: item?.progress,
                      backgroundColor: COLORS.primary
                    }}
                >
                  
                  

                </View>

               }
                <LineDivider
                                lineStyle={{
                                    height: 1,
                                    marginVertical: SIZES.radius
                                }}
                            />

            </TouchableOpacity>
           )
        })}
        
      </View>
    )
  }

  function renderPopularCourses() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
         {/* Section headerFadeAnimatedStyle */}
         <View
           style={{
            flexDirection: 'row',
            paddingHorizontal: SIZES.padding
           }}
         >
          <Text
            style={{
                 flex: 1,
                 ...FONTS.h2,
                 color: COLORS.black
            }}
          >
             Courses
          </Text>
          <TextButton
             contentContainerStyle={{
              width: 80,
              borderRadius: 30,
              backgroundColor: COLORS.primary
             }}
             label="see All"
          >
          </TextButton>

         </View>

         {/* Popular Course List */}
         <FlatList
                data={lectures}
                listKey="PopularCourses"
                scrollEnabled={false}
                keyExtractor={item => `PopularCourses-${item.id}`}
                showsHorizontalScrollIndicator = {false}
                contentContainerStyle={{
                  marginTop: SIZES.radius,
                  // paddingHorizontal: SIZES.padding
                }}
                renderItem={({ item, index }) => (
                  <HorizontalLectureCard
                      course={item}
                      containerStyle={{
                          // marginVertical: SIZES.padding,
                          paddingTop: selectedLecture?.id == item.id  ? SIZES.radius : 5,
                          backgroundColor: selectedLecture?.id == item.id ? '#fcf5d2' : null,
                          paddingHorizontal: SIZES.padding
                      }}
                      onPress={() => chooseLecture(item.id)}
                      paid={false}
                  />
              )}
              ItemSeparatorComponent={() => (
                <LineDivider/>
              )}
         />
        </View>
    )}


  return (
    <ScrollView>
      {/* headerFadeAnimatedStyle */}
      {renderHeader()}

      {/* LineDivider */}
      <LineDivider
        lineStyle={{
          height: 1,
          marginVertical: SIZES.radius
        }}
      />

      {/* Chapter */}
      {/* {renderChapter()} */}

      {/* Popular Courses */}
      {renderPopularCourses()}
    </ScrollView>
  )
}

export default CourseChapters

const styles = StyleSheet.create({})