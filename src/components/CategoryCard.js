import { StyleSheet, Text, View , TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, images } from "../constants"
// import { SharedElement } from 'react-navigation-shared-element'

const CategoryCard = ({ category, containerStyle, onPress}) => {
  return (
      //  <TouchableOpacity
      //     style={{
      //       height: 150,
      //       width: 200,
      //       ...containerStyle
      //     }}
      //     onPress={onPress}
      //  >
      //   <View>
      //       <Image
      //          source={category?.thumbnail}
      //          resizeMode= "cover"
      //          style={{
      //            width: "100%",
      //            height: "100%",
      //            borderRadius: SIZES.radius
      //          }}
      //       />

      //   </View>

      //   <View
      //      style={{
      //       position: "absolute",
      //       bottom: 50,
      //       left:5
      //      }}
      //   >
      //        <View
      //        >
      //           <Text
      //              style={{
      //               position: "absolute",
      //               color: COLORS.white,
      //               ...FONTS.h2
      //              }}
      //           >
      //               {category?.title}
      //           </Text>
      //        </View>
      //   </View>
      //  </TouchableOpacity>


    <TouchableOpacity
       onPress={onPress}
    >
            <ImageBackground
            source={category?.background}
            resize="cover"
            style={{
                height: 150,
                width: 200,
                paddingVertical: SIZES.padding,
                paddingHorizontal: SIZES.radius,
               //  justifyContent: 'flex-end',
               //  alignItems: "center",
                ...containerStyle

            }}
            imageStyle={{
                borderRadius: SIZES.radius
            }}
            >
               <View
                  style={{
                      flex: 1,
                      justifyContent: 'Center',
                      alignItems: 'center',
                  }}
               >
              {category?.thumbnail && <Image
                      source={category?.thumbnail}
                      resizeMode= "contain"
                      style={{
                         width: "90%",
                         height: 100,
                        }}
                     />}
                     </View>
               <View
                  style={{
                      flex: 1,
                      justifyContent: 'flex-end',
                  }}
               >
                <Text style={{
                    color: COLORS.white,
                    ...FONTS.h2,
                }}>
                    {category?.title}
                </Text>
                </View>
            </ImageBackground>
    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({})




