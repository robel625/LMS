import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {COLORS, FONTS, SIZES, icons} from '../../constants';
import {FormInput, Header, IconButton, TextButton} from '../../components';

const SetupNewPassword = ({navigation}) => {
  // State
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  // Render

  function renderHeader() {
    return <Header />;
  }

  function renderTitleAndDescription() {
    return (
      <View>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.contentPrimary,
          }}>
          Setup new password
        </Text>

        <Text
          style={{
            ...FONTS.ps2,
            color: COLORS.contentSecondary,
          }}>
          Password must be 8 characters long and contain a number
        </Text>
      </View>
    );
  }

  function renderFormInputs() {
    return (
      <View>
        {/* Password */}
        <FormInput
          rootContainerStyle={{
            marginTop: SIZES.padding * 3,
          }}
          label="Password"
          placeholder={'Enter your password'}
          value={password}
          secureTextEntry={!isPasswordVisible}
          onChange={value => setPassword(value)}
          prependComponent={
            <Image
              source={icons.lock}
              style={{
                width: 25,
                height: 25,
                marginRight: SIZES.base,
              }}
            />
          }
          appendComponent={
            <IconButton
              containerStyle={{
                alignItems: 'flex-end',
              }}
              icon={isPasswordVisible ? icons.eye_off : icons.eye}
              iconStyle={{
                tintColor: COLORS.contentPrimary,
              }}
              onPress={() => {
                setIsPasswordVisible(!isPasswordVisible);
              }}
            />
          }
        />

        {/* Confirm Password */}
        <FormInput
          rootContainerStyle={{
            marginTop: SIZES.padding,
          }}
          label="Confirm Password"
          placeholder={'Enter your password'}
          value={confirmPassword}
          secureTextEntry={!isConfirmPasswordVisible}
          onChange={value => setConfirmPassword(value)}
          prependComponent={
            <Image
              source={icons.lock}
              style={{
                width: 25,
                height: 25,
                marginRight: SIZES.base,
              }}
            />
          }
          appendComponent={
            <IconButton
              containerStyle={{
                alignItems: 'flex-end',
              }}
              icon={isConfirmPasswordVisible ? icons.eye_off : icons.eye}
              iconStyle={{
                tintColor: COLORS.contentPrimary,
              }}
              onPress={() => {
                setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
              }}
            />
          }
        />
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          marginBottom: SIZES.padding,
        }}>
        <TextButton
          label={'Confirm'}
          contentContainerStyle={{
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
          }}
          onPress={() => {
            navigation.navigate('Success', {
              title: 'Your password was successfully changed!',
              description: 'You can now login with your new password.',
              btnLabel: 'Login',
              onPress: () => {
                navigation.navigate('Welcome');
              },
            });
          }}
        />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundPrimary,
      }}>
      {/* Header */}
      {renderHeader()}

      <KeyboardAwareScrollView
        enableOnAndroid={true}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding,
        }}>
        {/* Titke and Description */}
        {renderTitleAndDescription()}

        {/* Form Inputs */}
        {renderFormInputs()}
      </KeyboardAwareScrollView>

      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default SetupNewPassword;
