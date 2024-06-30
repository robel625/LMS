import React from 'react';
import {Text, TextInput, View} from 'react-native';

import {COLORS, FONTS, SIZES} from '../constants';

const FormInput = ({
  rootContainerStyle,
  containerStyle,
  inputContainerStyle,
  placeholder,
  inputStyle,
  label = '',
  value = '',
  prependComponent,
  appendComponent,
  onChange,
  onPress,
  editable,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  maxLength,
  placeholderTextColor = COLORS.contentTertiary,
}) => {
  return (
    <View style={{...rootContainerStyle}}>
      {/* Form Label */}
      {label !== '' && (
        <Text
          style={{
            ...FONTS.l3,
            color: COLORS.contentPrimary,
          }}>
          {label}
        </Text>
      )}

      {/* Input */}
      <View
        style={{
          marginTop: SIZES.base,
          ...containerStyle,
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            paddingHorizontal: SIZES.radius,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            backgroundColor: COLORS.backgroundSecondary,
            ...inputContainerStyle,
          }}>
          {prependComponent}

          <TextInput
            style={{
              flex: 1,
              paddingVertical: 0,
              color: COLORS.contentPrimary,
              ...FONTS.pr2,
              ...inputStyle,
            }}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCompleteType={autoCompleteType}
            autoCapitalize={autoCapitalize}
            maxLength={maxLength}
            onChangeText={text => onChange(text)}
            onPressIn={onPress}
            editable={editable}
          />

          {appendComponent}
        </View>
      </View>
    </View>
  );
};

export default FormInput;
