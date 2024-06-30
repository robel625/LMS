import { StyleSheet, Text, View, TouchableOpacity, Image, Animated } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS, FONTS, SIZES, icons } from "../constants"
import { connect } from 'react-redux';

const ProfileRadioButton = ({appTheme, icon, label, isSelected, onPress}) => {

   const radioAnimate = React.useRef(new Animated.Value(0)).current;
   const circleColorAnimated = radioAnimate.interpolate({
      inputRange: [0, 17],
      outputRange: [COLORS.gray40, COLORS.primary]
   })
   const lineColorAnimated = radioAnimate.interpolate({
    inputRange: [0, 17],
    outputRange: [COLORS.additionalColor4, COLORS.additionalColor13]
 })

  useEffect(() => {
    if(isSelected){
        Animated.timing(radioAnimate,{
            toValue: 17,
            duration: 300,
            useNativeDriver: false
        }).start();
    }
    else{
        Animated.timing(radioAnimate,{
            toValue: 0,
            duration: 300,
            useNativeDriver: false
        }).start();
    }
  },[isSelected]
)


  return (
    <View
       style={{
        flexDirection: "row",
        height: 80,
        alignItems: 'center'
       }}
       onPress={onPress}
    >
        <View
          style={{
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: "center",
            borderRadius: 20,
            backgroundColor: appTheme?.backgroundColor3
          }}
        >
            <Image
               source={icon}
               resizeMode='contain'
               style={{
                width: 25,
                height: 25,
                tintColor: COLORS.primary
               }}
            />
    </View>
       <View
         style={{
            flex:1,
            marginLeft: SIZES.radius
         }}
       >
            <Text
               style={{
                ...FONTS.h3,
                color: appTheme?.textColor,
               }}
            >
               {label}
            </Text>
       </View>

       <TouchableOpacity
               style={{
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center'
             }}
             onPress={onPress}
       >
        <Animated.View
             style={{
                width: "100%",
                height: 5,
                borderRadius: 3,
                backgroundColor: lineColorAnimated
             }}
        />

       <Animated.View
             style={{
                position: 'absolute',
                left: radioAnimate,
                width: 25,
                height: 25,
                borderRadius: 15,
                borderWidth:5,
                borderColor: circleColorAnimated,
                backgroundColor: appTheme?.backgroundColor1
             }}
        />

       </TouchableOpacity>
    </View>
  )
}

export default connect(mapStateProps, mapDispatchToProps) (ProfileRadioButton);

function mapStateProps(state) {
  return {
      appTheme: state.appTheme,
  }
}

function mapDispatchToProps(dispatch) {
  return {
      }
}

const styles = StyleSheet.create({})