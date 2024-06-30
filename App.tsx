import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

import {
  // Auth
  Onboarding,
  Otp,
  SetupNewPassword,
  Success,
  Welcome,
} from './src/screens';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={'Onboarding'}>
            {/* Auth */}
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Otp" component={Otp} />
            <Stack.Screen
              name="SetupNewPassword"
              component={SetupNewPassword}
            />

            {/* Misc */}
            <Stack.Screen name="Success" component={Success} />
          </Stack.Navigator>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
