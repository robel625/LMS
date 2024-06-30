import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {FONTS, COLORS} from '../constants';

const TextButton = ({contentContainerStyle, label, labelStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        borderRadius: 30,
        backgroundColor: COLORS.primary500,
        ...contentContainerStyle,
      }}
      onPress={onPress}>
      <Text
        style={{
          color: COLORS.white,
          ...FONTS.l2,
          ...labelStyle,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
