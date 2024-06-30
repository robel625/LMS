import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, icons } from "../constants"
import { connect } from 'react-redux';

const ProfileValue = ({ appTheme, icon, label, value, onPress}) => {
  return (
    <TouchableOpacity
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
            flex: 1,
            marginLeft: SIZES.radius
           }}
        >
            {label && 
              <Text
              style={{
                color: COLORS.gray30,
                ...FONTS.body3
               }}
              >
                 {label}
              </Text>
            }

            <Text
               style={{
                ...FONTS.h3,
                color: appTheme?.textColor,
               }}
            >
             {value}
            </Text>
        </View>

        <Image
            source={icons.right_arrow}
            style={{
                width: 15,
                height: 15,
                tintColor: appTheme?.tintColor
            }}
        />
    </TouchableOpacity>
  )
}

export default connect(mapStateProps, mapDispatchToProps) (ProfileValue);

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