import React, {useRef, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

import {TextButton} from '../../components';
import {constants, COLORS, SIZES, FONTS} from '../../constants';

const Onboarding = ({navigation}) => {
  //  SVG
  const controlX = SIZES.width / 2; // Control center point's X coordinate

  // FlatList
  const currentIndex = useRef(0);
  const screenFlatListRef = useRef();
  const titleFlatListRef = useRef();

  const [isLastItem, setIsLastItem] = useState(false);

  const handleNextPress = () => {
    if (currentIndex.current < constants.onboarding_screens.length - 1) {
      currentIndex.current += 1;
      const nextIndex = currentIndex.current;
      const offset = nextIndex * SIZES.width;

      screenFlatListRef?.current?.scrollToOffset({
        offset,
        animated: true,
      });
      titleFlatListRef?.current?.scrollToOffset({
        offset,
        animated: true,
      });

      // Check if it's the last screen or item
      if (currentIndex.current === constants.onboarding_screens.length - 1) {
        setIsLastItem(true);
      }
    } else {
      navigation.navigate('Welcome');
    }
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      {/* Screenshot List */}
      <View style={{flex: 2, backgroundColor: COLORS.primary50}}>
        <FlatList
          ref={screenFlatListRef}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          data={constants.onboarding_screens}
          keyExtractor={item => `onboarding_screen_phone-${item.id}`}
          renderItem={({item, index}) => {
            return (
              <View style={{width: SIZES.width, alignItems: 'center'}}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={{
                    marginTop: SIZES.padding * 3,
                    width: SIZES.width * 0.8,
                    height: SIZES.height * 0.8,
                  }}
                />
              </View>
            );
          }}
        />
      </View>
      {/* Title & Description List */}
      <View style={{flex: 1, backgroundColor: COLORS.gray900}}>
        {/* Curve */}
        <Svg
          style={{position: 'absolute', top: -100}}
          width={SIZES.width}
          height={100}>
          <Path
            d={`M 0 20 Q ${controlX} 130 ${SIZES.width} 20 L ${SIZES.width} 100 L 0 100 Z`}
            fill={COLORS.gray900}
          />
        </Svg>

        {/* Title and Description */}
        <FlatList
          ref={titleFlatListRef}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          data={constants.onboarding_screens}
          keyExtractor={item => `onboarding_screen_title-${item.id}`}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  paddingHorizontal: SIZES.radius,
                  width: SIZES.width,
                  alignItems: 'center',
                }}>
                {/* Title */}
                <Text
                  style={{
                    ...FONTS.h1,
                    textAlign: 'center',
                    color: COLORS.primary100,
                  }}>
                  {item.title}
                </Text>

                {/* Description */}
                <Text
                  style={{
                    ...FONTS.pr2,
                    marginTop: SIZES.radius,
                    textAlign: 'center',
                    color: COLORS.primary100,
                  }}>
                  {item.desc}
                </Text>
              </View>
            );
          }}
        />

        {/* Text Button */}
        <TextButton
          label={isLastItem ? 'Get Started' : 'Next'}
          contentContainerStyle={{
            marginHorizontal: SIZES.padding,
            marginBottom: SIZES.padding,
          }}
          onPress={handleNextPress}
        />
      </View>
    </View>
  );
};

export default Onboarding;
