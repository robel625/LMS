import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native'
import React, { createRef, useCallback, useEffect, useRef, useState } from 'react'
import { COLORS, FONTS, SIZES, icons, dummyData, } from "../../../constants"
import {
  IconButton,
 TextButton
} from '../../../components';

const CourseFiles = () => {

    function renderStudens() {
      let students = []

      if (dummyData?.course_details?.students.length > 3) {
        students = dummyData?.course_details?.students.slice(0, 3)
      }
      else {
        students = dummyData?.course_details?.students
      }


        return (
          <View>
          <Text
             style={{
                ...FONTS.h2,
                fontSize: 25,
                color: COLORS.black
             }}
          >
              Students
          </Text>

          {/* Students */}
          <View
             style={{
                flexDirection: 'row',
                marginTop: SIZES.radius,
                alignItems: 'center' 
             }}
          >
              {students.map((item, index) => {
                return (
                    <View
                      key={`students-${index}`}
                      style={{
                        marginLeft: index > 0 ? SIZES.radius : 0
                      }}
                    >
                        <Image
                           source={item?.thumbnail}
                           style={{
                            width: 80,
                            height: 80
                           }}
                        />

                    </View>
                )
              })}

              {dummyData?.course_details?.students.length > 3 && 
                 <TextButton
                   label='View All'
                   labelStyle={{
                    color: COLORS.primary,
                    ...FONTS.h3
                   }}
                   contentContainerStyle={{
                    marginLeft: SIZES.base,
                    backgroundColor: null
                   }}
                 >

                 </TextButton>
              }
          </View>
      </View>
        )
    }

 function renderFiles() {
    return (
        <View
        style={{
            marginTop: SIZES.padding
        }}
        >
            {/* Section Title */}
            <Text
             style={{
                ...FONTS.h2,
                fontSize: 25,
                color: COLORS.black
             }}
          >
              Files
          </Text>

          {dummyData?.course_details?.files.map((item, index) => {
            return (
                <View
                  key={`Files-${index}`}
                  style={{
                    flexDirection: 'row',
                    marginTop: SIZES.radius
                  }}
                >
                    {/* thumbnail */}
                     <Image
                      source={item?.thumbnail}
                      style={{
                         width: 80,
                         height: 80,
                        }}
                     />
                
                    {/* Name, author & date */}
                    <View
                       style={{
                        flex: 1,
                        marginLeft: SIZES.radius
                       }}
                    >
                         <Text
                              style={{
                                 ...FONTS.h2,
                                 color: COLORS.black
                              }}
                           >
                               {item?.name}
                           </Text>
                           <Text
                              style={{
                                 ...FONTS.body3,
                                 color: COLORS.gray30
                              }}
                           >
                               {item?.author}
                           </Text>
                           <Text
                              style={{
                                 ...FONTS.body4,
                              }}
                           >
                               {item?.upload_date}
                           </Text>
                    </View>

                    {/* Menu */}
                    <IconButton
                       icon={icons.menu}
                       iconStyle={{
                        width:25,
                        height: 25,
                        tint: COLORS.black
                       }}
                       containerStyle={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 25
                       }}
                    />

                </View>
            )
          })}

         


        </View>
    )
 }

  return (
    <ScrollView
        contentContainerStyle = {{
            padding: SIZES.padding
        }}
    >
        {/* students */}
        {renderStudens()}

        {/* Files */}
        {renderFiles()}

    </ScrollView>
  )
}

export default CourseFiles

const styles = StyleSheet.create({})