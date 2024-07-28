import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, icons } from "../constants"
import IconLabel from './IconLabel'
import { BASE_URL } from '../utils/config'

const HorizontalLectureCard = ({ containerStyle, course, onPress, paid = false}) => {
  
   return (
    <TouchableOpacity
        style={{
            flexDirection: 'row',
            ...containerStyle
        }}
        onPress={onPress}
    >
      <ImageBackground
         source={{ uri: course.type=="video"? course.thumbnail.url : `${BASE_URL}/${course?.thumbnail}`}}
         resizeMode='cover'
         style={{
            width: 200,
            height: 115,
            marginBottom: SIZES.radius,
            }}
         imageStyle={{
            borderRadius: SIZES.radius
         }}
      >
         {/* <View style={{
            // backgroundColor: COLORS.secondary,
            postion: 'absolute',
            top: 10,
            right: 10,
            width: 30,
            height: 30,
            alignSelf: "flex-end",
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            backgroundColor: COLORS.white
         }}>
            <Image
               source={icons.favourite}
               resizeMode="contain"
               style={{
                width: 20,
                height: 20,
                tintColor: course.is_favourite ? COLORS.secondary :  COLORS.additionalColor4
               }}
            />
         </View> */}
      </ImageBackground>
            <View
              style={{
                flex: 1,
                marginLeft: SIZES.base
              }}
            >
               <Text
                  style={{
                    ...FONTS.h3,
                    fontSize: 18,
                    color: COLORS.black
                  }}
                >
                    {course.title}
               </Text>

               <View
                     style={{
                        flexDirection: 'row',
                        alignItems:'center',
                        marginTop: SIZES.base,
                     }}
               >
                  <Text
                     style={{
                        ...FONTS.body4
                     }}
                  >
                      {course.description}
                  </Text>

                  <IconLabel
                     icon={icons.time}
                     label={course.duration}
                     containerStyle={{
                        marginLeft: SIZES.base
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

               {/* Prise & Ratting  */}
               <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: SIZES.base
                  }}
               >
              {/* {paid && <Text
                   style={{
                    ...FONTS.h2,
                    color: COLORS.primary
                   }}
                >
                 {course.price.toFixed(2)}Birr
                </Text>} */}

                {/* <IconLabel
                   icon={icons.star}
                   label={course.ratings}
                   containerStyle={{
                    marginLeft: SIZES.base
                   }}
                   iconStyle={{
                    width: 15,
                    height: 15,
                    tintColor: COLORS.primary2
                   }}
                   labelStyle={{
                    marginLeft: 5,
                    color: COLORS.black,
                    ...FONTS.h3
                   }}
                /> */}
                

               </View>
            </View>

    </TouchableOpacity>
  )
}

export default HorizontalLectureCard

const styles = StyleSheet.create({})