import React from 'react';
import {Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {COLORS, FONTS, SIZES, constants} from '../../constants';
import {Header, TextButton} from '../../components';
import OTPInputView from '@hirbod/react-native-otp-input';

const Otp = ({navigation, route}) => {
  const {from} = route.params;

  // Action

  function onOtpSubmit() {
    if (from === constants.register) {
      navigation.navigate('Success', {
        title: 'Account Created',
        describtion: 'You have successfully created your account',
        btnLabel: 'Go to Home',
        onPress: () => {
          navigation.navigate('Welcome');
        },
      });
    } else if (from === constants.forgot_password) {
      navigation.navigate('SetupNewPassword');
    }
  }

  // Render

  function renderHeader() {
    return <Header />;
  }

  function renderTitleAndDescription() {
    return (
      <View>
        <Text style={{...FONTS.h2, color: COLORS.contentPrimary}}>
          Enter The OTP code
        </Text>

        <Text style={{...FONTS.ps2, color: COLORS.contentSecondary}}>
          To confirm the account, enter the 6-digit code we sent to your email
          address
        </Text>
      </View>
    );
  }

  function renderOtp() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        {/* OTP */}
        <OTPInputView
          pinCount={6}
          style={{
            height: SIZES.width / 8,
            marginTop: SIZES.padding * 2,
          }}
          codeInputFieldStyle={{
            width: SIZES.width / 8,
            height: SIZES.width / 8,
            borderWidth: 3,
            borderRadius: SIZES.radius,
            borderColor: COLORS.backgroundSecondary,
            ...FONTS.h3,
            color: COLORS.contentPrimary,
          }}
          codeInputHighlightStyle={{
            borderColor: COLORS.contentPrimary,
          }}
          onCodeFilled={code => {}}
        />

        {/* Resend Code */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              ...FONTS.ps2,
              color: COLORS.contentSecondary,
            }}>
            Don't receive the code?
          </Text>

          <TextButton
            label={'Resend'}
            contentContainerStyle={{
              height: 30,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary400,
            }}
          />
        </View>
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
          label={'Submit'}
          contentContainerStyle={{
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
          }}
          onPress={() => {
            onOtpSubmit();
          }}
        />
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: COLORS.backgroundPrimary}}>
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

        {renderOtp()}
      </KeyboardAwareScrollView>

      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default Otp;
