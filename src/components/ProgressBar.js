import { StyleSheet, Text, View , TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from "../constants"

const ProgressBar = ({ containerStyle, progress}) => {
  return (
    <View
       style={{
        width: "100%",
        height: 13,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        ...containerStyle
       }}
    >
        <View
           style={{
            position: "absolute",
            left: 0,
            height: "100%",
            width: progress,
            borderRadius: 10,
            backgroundColor: COLORS.primary
           }}
        >

        </View>
    </View>
  )
}

export default ProgressBar

const styles = StyleSheet.create({})