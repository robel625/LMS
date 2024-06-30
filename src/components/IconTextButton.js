import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

import {FONTS, COLORS, SIZES} from '../constants';

const IconTextButton = ({containerStyle, icon, label, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        borderWidth: 1,
        borderRadius: 30,
        borderColor: COLORS.gray500,
        ...containerStyle,
      }}
      onPress={onPress}>
      {/* Icon */}
      <Image
        source={icon}
        resizeMode="contain"
        style={{width: 30, height: 30, borderRadius: 15}}
      />

      {/* Label */}
      <Text
        style={{
          ...FONTS.l2,
          marginLeft: SIZES.radius,
          color: COLORS.gray50,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default IconTextButton;
