import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  COLORS,
  FONTS,
  SIZES,
  images,
  icons,
  dummyData,
  constants,
} from '../../constants';

const ExplanationSwitch = ({onToggle, value}) => {
  const [isActive, setIsActive] = useState(value);

  const handleToggle = () => {
    setIsActive(!isActive);
    onToggle(!isActive); // Call the provided onToggle function with the new state
  };

  return (
    <TouchableOpacity
      style={[styles.container, isActive && styles.active]}
      onPress={handleToggle}>
      <View style={[styles.toggle, isActive && styles.toggleActive]}>
        {isActive ? (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="menu-down"
              style={{
                color: COLORS.gray,
                fontSize: 35,
              }}
            />
            <Text style={{fontSize: 16, color: 'green'}}>
              Explanation
            </Text>
          </View>
        ) : (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="menu-up"
              style={{
                color: COLORS.gray,
                fontSize: 35,
              }}
            />
            <Text style={{fontSize: 16, color:COLORS.gray}}>
              Explanation
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#ddd',
    // borderRadius: 20,
    // paddingHorizontal: 10,
    // paddingVertical: 5,
    margin: 10,
  },
  toggle: {
    backgroundColor: '#fff',
    // borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  active: {
    backgroundColor: '#4CAF50',
  },
  toggleActive: {
    backgroundColor: '#fff',
  },
});

export default ExplanationSwitch;
