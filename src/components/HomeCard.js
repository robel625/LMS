import { StyleSheet, Text, View , TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, images } from "../constants"
// import { SharedElement } from 'react-navigation-shared-element'

const HomeCard = ({ category, containerStyle, onPress}) => {
  return (


    <TouchableOpacity
       onPress={onPress}
    >
            <ImageBackground
            source={category?.background}
            resize="cover"
            style={{
                //backgroundColor: '#fff', // Set a background color for proper shadow rendering
              borderRadius: SIZES.radius, // Add border radius (optional)
              elevation: 3, // Adjust to control shadow depth
              shadowColor: '#000', // Optional: Set shadow color
              shadowOffset: { width: 0, height: 2 }, // Optional: Adjust shadow offset
              shadowOpacity: 0.3, // Optional: Control shadow opacity
            

                height: 150,
                width: 200,
                // paddingVertical: SIZES.padding,
                // paddingHorizontal: SIZES.radius,
               //  justifyContent: 'flex-end',
            //    paddingTop: 10,
                alignItems: "center",
                justifyContent: "space-around",
                ...containerStyle

                

            }}
            imageStyle={{
                borderRadius: SIZES.radius
            }}
            >
               
              {category?.thumbnail && <Image
                      source={category?.thumbnail}
                      resizeMode= "contain"
                      style={{
                         width: "90%",
                         height: 50,
                        }}
                     />}
                <Text style={{
                    color: COLORS.white,
                    ...FONTS.h3,
                }}>
                    {category?.title}
                </Text>
            </ImageBackground>
    </TouchableOpacity>
  )
}

export default HomeCard

const styles = StyleSheet.create({})




