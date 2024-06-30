import React from 'react';

import {COLORS, FONTS, SIZES, images} from '../../constants';
import {Image, Text, View} from 'react-native';
import {TextButton} from '../../components';

const Success = ({route}) => {
  const {title, description, btnLabel, onPress} = route.params;

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.backgroundPrimary,
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* Success Image */}
        <Image
          source={images.success}
          resizeMode="contain"
          style={{
            width: 150,
            height: 150,
          }}
        />

        {/* Title */}
        <Text
          style={{
            ...FONTS.h2,
            textAlign: 'center',
            marginTop: SIZES.padding,
            color: COLORS.contentPrimary,
          }}>
          {title}
        </Text>

        {/* Description */}
        <Text
          style={{
            ...FONTS.ps2,
            textAlign: 'center',
            marginTop: SIZES.radius,
            color: COLORS.contentSecondary,
          }}>
          {description}
        </Text>
      </View>

      {/* Footer */}
      <View>
        <TextButton
          label={btnLabel}
          contentContainerStyle={{
            marginBottom: SIZES.padding,
            borderRadius: SIZES.radius,
          }}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default Success;
