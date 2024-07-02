import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

import { configureStore, current } from '@reduxjs/toolkit';
// import { createStore, applyMiddleware }  from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import themeReducer from "./src/stores/themeReducer";

import {
  MainLayout,
  // Auth
  Onboarding,
  Otp,
  SetupNewPassword,
  Success,
  Welcome,
} from './src/screens';
import CourseListing from './src/screens/Course/CourseListing';
import CourseDetails from './src/screens/Course/CourseDetails';
import SubjectListing from './src/screens/Exams/SubjectListing';
import YearListing from './src/screens/Exams/YearListing';
import Exam from './src/screens/Exams/Exam';

const Stack = createNativeStackNavigator();

const store = configureStore({
  reducer: themeReducer, // Add your reducer(s)
  //middleware: [thunk], // Add middleware (e.g., thunk)
});

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={'Onboarding'}
            // initialRouteName={'Dashboard'}
            >
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
            {/* LMS */}
            <Stack.Screen
                    name="Dashboard"
                    component={MainLayout}
                />
              <Stack.Screen
                    name="CourseListing"
                    component={CourseListing}
                />
                <Stack.Screen
                    name="CourseDetails"
                    component={CourseDetails}
                />
                <Stack.Screen
                    name="SubjectListing"
                    component={SubjectListing}
                />
                <Stack.Screen
                    name="YearListing"
                    component={YearListing}
                />
                <Stack.Screen
                    name="Exam"
                    component={Exam}
                />
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
