import React, { useEffect, useState } from 'react';
import {
  useWindowDimensions,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { COLORS } from '../../constants';
// import COLORS from '../conts/colors';

const Loading = ({visible = true}) => {
  const {width, height} = useWindowDimensions();

  const [isVisible, setIsVisible] = useState(visible); // Manage visibility state

  useEffect(() => {
    if (isVisible) {
      const timeoutId = setTimeout(() => setIsVisible(false), 20000); // Timeout in milliseconds

      // Cleanup function to clear the timeout when the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [isVisible]);


  return (
    isVisible && (
      <View style={[style.container, {height, width}]}>
        <View style={style.loader}>
          <ActivityIndicator size="large" color={COLORS.blue} />
          <Text style={{marginLeft: 10, fontSize: 16}}>Loading...</Text>
        </View>
      </View>
    )
  );
};

const style = StyleSheet.create({
  loader: {
    height: 70,
    backgroundColor: COLORS.white,
    marginHorizontal: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
});

export default Loading;
