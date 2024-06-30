import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {FONTS, COLORS} from '../constants';

const TextButton = ({contentContainerStyle,disabled, label, labelStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        // height: 55,
        // borderRadius: 30,
        backgroundColor: COLORS.primary500,
        ...contentContainerStyle,
      }}
      disabled={disabled}
      onPress={onPress}>
      <Text
        style={{
          color: COLORS.white,
          ...FONTS.h3,
          ...labelStyle,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
