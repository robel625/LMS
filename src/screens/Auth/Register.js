import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {COLORS, FONTS, SIZES, constants, icons} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FormInput, IconButton, TextButton} from '../../components';

const Register = ({setSelectedScreen, onRegister}) => {
  // State
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  //  Render
  function renderTitleAndDescription() {
    return (
      <View>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.contentPrimary,
          }}>
          Join us
        </Text>

        <Text
          style={{
            ...FONTS.ps2,
            color: COLORS.contentInverseSecondary,
          }}>
          All field are required unless otherwise noted
        </Text>
      </View>
    );
  }

  function renderFormInputs() {
    return (
      <View>
        {/* Phone Number */}
        <FormInput
          rootContainerStyle={{marginTop: SIZES.padding}}
          label="Phone Number"
          placeholder={'Enter your phone number'}
          value={phoneNumber}
          onChange={value => setPhoneNumber(value)}
          prependComponent={
            <Image
              source={icons.smartphone}
              style={{
                width: 25,
                height: 25,
                marginRight: SIZES.base,
              }}
            />
          }
        />

        {/* Email */}
        <FormInput
          rootContainerStyle={{marginTop: SIZES.padding}}
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

        {/* Password */}
        <FormInput
          rootContainerStyle={{marginTop: SIZES.padding}}
          label="Password"
          placeholder={'Enter your password'}
          value={password}
          secureTextEntry={!isVisible}
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
              icon={isVisible ? icons.eye_off : icons.eye}
              iconStyle={{tintColor: COLORS.contentPrimary}}
              onPress={() => setIsVisible(!isVisible)}
            />
          }
        />
      </View>
    );
  }

  function renderTermsAndPolicy() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          alignItems: 'center',
        }}>
        <Text
          style={{
            ...FONTS.ps2,
            color: COLORS.contentSecondary,
          }}>
          By registering, you agree to our
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <Text
              style={{
                ...FONTS.l2,
                color: COLORS.primary400,
              }}>
              Terms
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              ...FONTS.ps2,
              marginHorizontal: 4,
              color: COLORS.contentSecondary,
            }}>
            and
          </Text>

          <TouchableOpacity>
            <Text
              style={{
                ...FONTS.l2,
                color: COLORS.primary400,
              }}>
              Privacy Policy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderFooter() {
    return (
      <View>
        {/* Sign Up Label */}
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
            labelStyle={{color: COLORS.primary400}}
            onPress={() => setSelectedScreen(constants.login)}
          />
        </View>

        {/* Register Button */}
        <TextButton
          label={'Register'}
          contentContainerStyle={{
            marginTop: SIZES.padding,
            marginLeft: SIZES.base,
            borderRadius: SIZES.radius,
          }}
          onPress={() => {
            onRegister();
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
        keyboardShouldPersistTaps={'handled'}
        extraScrollHeight={-400}
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingBottom: SIZES.padding,
        }}>
        {/* Title and Description */}
        {renderTitleAndDescription()}

        {/* Form Inputs */}
        {renderFormInputs()}

        {/* Terms and Privacy Policy */}
        {renderTermsAndPolicy()}
      </KeyboardAwareScrollView>

      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default Register;
