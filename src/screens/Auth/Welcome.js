import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {MotiView, useAnimationState} from 'moti';

import {COLORS, FONTS, SIZES, icons, images, constants} from '../../constants';
import {AuthModal, IconTextButton, TextButton} from '../../components';

import { login, register } from '../../redux/actions/authAction';
import { useSelector, useDispatch } from 'react-redux';
import { Toast } from "react-native-toast-notifications";


const Welcome = ({navigation}) => {

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.token) {
        navigation.navigate('Dashboard', {
            from: constants.register,
          });
    }
  }, [auth.token ]);

  // Moti
  const scaleAnimationState = useAnimationState({
    normal: {
      transform: [{scale: 1}],
    },
    scaleDown: {
      transform: [{scale: 0.9}],
      borderRadius: 20,
    },
  });

  // useEffect
  useEffect(() => {
    scaleAnimationState.transitionTo('normal');
  }, []);

 

  // Render

  function renderHeaderImage() {
    return (
      <View>
        <Image
          source={images.Z_Secret_Training}
          resizeMode= 'contain'
          style={{width: SIZES.width, height: 250}}
        />
      </View>
    );
  }

  function renderLoginDetails() {
    return (
      <View
        style={{
          flex: 1,
          padding: SIZES.padding,
          justifyContent: 'space-between',
        }}>
        {/* Title and Description */}
        <View>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.gray50,
            }}>
            Log In
          </Text>

          <Text
            style={{
              ...FONTS.ps3,
              color: COLORS.gray50,
            }}>
            Please choose how you would like to log in.
          </Text>
        </View>

        {/* Login Buttons */}
        <View>
          {/* Phone Number */}
          <IconTextButton
            icon={icons.mail}
            label={'Continue with Email'}
            containerStyle={{
              borderColor: COLORS.primary500,
              backgroundColor: COLORS.primary500,
            }}
            onPress={() => {
              // setTimeout(() => {
              //   scaleAnimationState.transitionTo('scaleDown');
              // }, 100);
              // showModal(constants.login);
              navigation.navigate('Login')
            }}
          />

          {/* Apple */}
          {/* <IconTextButton
            icon={icons.apple_logo}
            label={'Continue with Apple'}
            containerStyle={{
              marginTop: SIZES.padding,
            }}
          /> */}

          {/* Google */}
          <IconTextButton
            icon={icons.google_logo}
            label={'Continue with Google'}
            containerStyle={{marginTop: SIZES.padding}}
          />

          {/* Facebook */}
          <IconTextButton
            icon={icons.fb_logo}
            label={'Continue with Facebook'}
            containerStyle={{marginTop: SIZES.padding}}
          />
        </View>

        {/* Sign Up */}
        <View>
          <Text
            style={{
              ...FONTS.l3,
              textAlign: 'center',
              color: COLORS.gray400,
            }}>
            Don't have an account
          </Text>

          <TextButton
            label={'Create an Account'}
            contentContainerStyle={{
              marginTop: SIZES.padding,
              height: 55,
              borderRadius: 30,
            }}
            onPress={() => {
              // showModal(constants.register);
              navigation.navigate('SignUp')
            }}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: COLORS.gray400}}>
      <MotiView
        state={scaleAnimationState}
        style={{flex: 1, backgroundColor: COLORS.gray900, overflow: 'hidden'}}>
        {/* Header Image */}
        {renderHeaderImage()}

        {/* Login Details */}
        {renderLoginDetails()}

      
        {/* <AuthModal
          bottomSheetModalRef={bottomSheetModalRef}
          hideModal={hideModal}
          selectedScreen={selectedScreen}
          setSelectedScreen={setSelectedScreen}
          onRegister={onRegister}
          onLogin={onLogin}
          onForgotPasswordSubmit={onForgotPasswordSubmit}
          alert={alert}
        /> */}
      </MotiView>
      
    </View>
  );
};

export default Welcome;
