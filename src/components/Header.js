import React from 'react';
import {View} from 'react-native';
import {IconButton} from '.';
import {COLORS, SIZES, icons} from '../constants';
import {useNavigation} from '@react-navigation/native';

const Header = ({containerStyle}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding,
        ...containerStyle,
      }}>
      {/* Back Button */}
      <IconButton
        icon={icons.angle_arrow_left}
        onPress={() => navigation.goBack()}
        containerStyle={{
          width: 40,
          height: 40,
          justifyContent: 'center',
        }}
        iconStyle={{
              width: 25,
              height: 25,
              tinitColor: COLORS.white
          }}
      />
    </View>
  );
};

export default Header;
