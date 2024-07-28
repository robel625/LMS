import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import SplashScreen from 'react-native-splash-screen';

import DataProvider from './src/redux/store'
import Alert from './src/components/alert/Alert';
import { ToastProvider } from "react-native-toast-notifications";

import { configureStore, current } from '@reduxjs/toolkit';
// import { createStore, applyMiddleware }  from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import themeReducer from "./src/stores/themeReducer";
import SplashScreen from './src/components/SplashScreen';


import {
  ForgotPassword,
  Login,
  MainLayout,
  // Auth
  Onboarding,
  Otp,
  SetupNewPassword,
  SignUp,
  Success,
  UnitQuestions,
  Welcome,
} from './src/screens';
import CourseListing from './src/screens/Course/CourseListing';
import CourseDetails from './src/screens/Course/CourseDetails';
import SubjectListing from './src/screens/Exams/SubjectListing';
import YearListing from './src/screens/Exams/YearListing';
import Exam from './src/screens/Exams/Exam';
import { getUserData } from './src/utils/utils';
import { saveUserData } from './src/redux/actions/authAction';
import YoutubeListing from './src/screens/Course/YoutubeListing';
import RealmCustomProvider from './src/realm/providers/Realm';


const Stack = createNativeStackNavigator();


const App = () => {

  const [initialRouteName, setInitialRouteName] = React.useState('');

  useEffect(() => {
    authUser();
  }, []);

  const authUser = async () => {
    try {
      // setInitialRouteName("Login");
      
      const userData = await getUserData()
      // console.log("user data App.js",userData)
      if (userData) {
        // setInitialRouteName('Dashboard');
        if (userData?.msg == "login successful.") {
          setInitialRouteName('Dashboard');
        } else {
          setInitialRouteName("Login");
        }
      } else {
        setInitialRouteName('Onboarding');
      }
    } catch (error) {
      setInitialRouteName('Onboarding');
    }
  };


  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
       <RealmCustomProvider>
      <DataProvider>
      <ToastProvider>
         <Alert />
        <NavigationContainer>
        {!initialRouteName ? (
            <SplashScreen/>
          ) :
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={initialRouteName}
            // initialRouteName={'Dashboard'}
            >
            {/* Auth */}
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            
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
                <Stack.Screen
                    name="UnitQuestions"
                    component={UnitQuestions}
                />
                <Stack.Screen
                    name="YoutubeListing"
                    component={YoutubeListing}
                />
              </Stack.Navigator>
           }
        </NavigationContainer>
        </ToastProvider>
        </DataProvider>
        </RealmCustomProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
