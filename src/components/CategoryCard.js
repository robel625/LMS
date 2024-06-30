import { StyleSheet, Text, View , TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from "../constants"
import { SharedElement } from 'react-navigation-shared-element'

const CategoryCard = ({sharedElementPrefix, category, containerStyle, onPress}) => {
  return (
       <TouchableOpacity
          style={{
            height: 150,
            width: 200,
            ...containerStyle
          }}
          onPress={onPress}
       >
        <SharedElement 
          id={`${sharedElementPrefix}-CategoryCard-Bg-${category?.id}`}
          style={[StyleSheet.absoluteFillObject]}
        >
            <Image
               source={category?.thumbnail}
               resizeMode= "cover"
               style={{
                 width: "100%",
                 height: "100%",
                 borderRadius: SIZES.radius
               }}
            />

        </SharedElement >

        <View
           style={{
            position: "absolute",
            bottom: 50,
            left:5
           }}
        >
             <SharedElement
                 id={`${sharedElementPrefix}-CategoryCard-Title-${category?.id}`}
                 style={[StyleSheet.absoluteFillObject]}
             >
                <Text
                   style={{
                    position: "absolute",
                    color: COLORS.white,
                    ...FONTS.h2
                   }}
                >
                    {category?.title}
                </Text>
             </SharedElement>
        </View>
       </TouchableOpacity>


    // <TouchableOpacity
    //    onPress={onPress}
    // >
    //         <ImageBackground
    //         source={category?.thumbnail}
    //         resize="cover"
    //         style={{
    //             height: 150,
    //             width: 200,
    //             paddingVertical: SIZES.padding,
    //             paddingHorizontal: SIZES.radius,
    //             justifyContent: 'flex-end',
    //             ...containerStyle

    //         }}
    //         imageStyle={{
    //             borderRadius: SIZES.radius
    //         }}
    //         >
    //             <Text style={{
    //                 color: COLORS.white,
    //                 ...FONTS.h2
    //             }}>
    //                 {category?.title}
    //             </Text>
    //         </ImageBackground>
    // </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({})