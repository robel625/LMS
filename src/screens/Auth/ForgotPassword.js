import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {COLORS, FONTS, SIZES, icons} from '../../constants';
import {FormInput, TextButton} from '../../components';

const ForgotPassword = ({setSelectedScreen, onForgotPasswordSubmit}) => {
  // State

  const [email, setEmail] = useState('');

  // Render

  function renderTitleAndDescription() {
    return (
      <View>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.contentPrimary,
          }}>
          Forgot Password
        </Text>

        <Text
          style={{
            ...FONTS.ps2,
            color: COLORS.contentInverseSecondary,
          }}>
          Please enter your email address to get verification code
        </Text>
      </View>
    );
  }

  function renderFormInputs() {
    return (
      <View style={{marginTop: SIZES.padding * 3}}>
        {/* Email Address */}
        <FormInput
          rootContainerStyle={{
            marginTop: SIZES.padding * 3,
          }}
          label="Email Address"
          placeholder={'Enter your email address'}
          value={email}
          onChange={value => setEmail(value)}
          prependComponent={
            <Image
              source={icons.mail}
              style={{
                width: 25,
                height: 25,
                marginRight: SIZES.base,
              }}
            />
          }
        />
      </View>
    );
  }

  function renderFooter() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              ...FONTS.pr2,
              color: COLORS.contentSecondary,
            }}>
            Already have an account?
          </Text>

          <TextButton
            label={'Login'}
            contentContainerStyle={{
              height: null,
              marginLeft: SIZES.base,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary400,
            }}
          />
        </View>

        {/* Submit Button */}
        <TextButton
          label={'Submit'}
          contentContainerStyle={{
            marginTop: SIZES.padding,
            marginLeft: SIZES.base,
            borderRadius: SIZES.radius,
          }}
          onPress={() => {
            onForgotPasswordSubmit();
          }}
        />
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="always"
        extraScrollHeight={-300}
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingBottom: SIZES.padding,
        }}>
        {/* Title and Description */}
        {renderTitleAndDescription()}

        {/* Form Inputs */}
        {renderFormInputs()}
      </KeyboardAwareScrollView>

      {/* Button */}
      {renderFooter()}
    </View>
  );
};

export default ForgotPassword;
