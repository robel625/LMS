import React, {useState} from 'react';
import {Image, Keyboard, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {CheckBox, FormInput, IconButton, TextButton} from '../../components';
import {COLORS, FONTS, SIZES, constants, icons} from '../../constants';

const Login = ({setSelectedScreen, onLogin, alert}) => {
  // State
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [rememberMeChecked, setRememberMeChecked] = useState(false);

  console.log("alert inside login", alert)

  const handleSubmit = () =>{
    Keyboard.dismiss();
    const userData = {
      email,
      password,
    }
    onLogin(userData);
  }

  // Render
   

  function renderTitleAndDescription() {
    return (
      <View>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.contentPrimary,
          }}>
          Welcome back
        </Text>

        <Text
          style={{
            ...FONTS.ps2,
            color: COLORS.contentInverseSecondary,
          }}>
          Enter your phone number to login
        </Text>
      </View>
    );
  }

  function renderRememberMenAndForgotPassword() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: SIZES.radius,
        }}>
        {/* Remember Me Checkbox */}
        <CheckBox
          label={'Remember me'}
          isSelected={rememberMeChecked}
          onPress={() => setRememberMeChecked(!rememberMeChecked)}
        />

        {/* Forgot Password */}
        <TextButton
          label={'Forgot Password'}
          contentContainerStyle={{
            height: 30,
            backgroundColor: null,
          }}
          labelStyle={{
            color: COLORS.primary400,
          }}
          onPress={() => setSelectedScreen(constants.forgot_password)}
        />
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
          <Text style={{...FONTS.pr2, color: COLORS.contentSecondary}}>
            {"If you don't have an account"}
          </Text>

          <TextButton
            label={'Sign Up'}
            contentContainerStyle={{
              height: null,
              marginLeft: SIZES.base,
              backgroundColor: null,
            }}
            labelStyle={{color: COLORS.primary400}}
            onPress={() => setSelectedScreen(constants.register)}
          />
        </View>

        {/* Sign In Button */}
        <TextButton
          label={'Sign In'}
          contentContainerStyle={{
            marginTop: SIZES.padding,
            marginLeft: SIZES.base,
            borderRadius: SIZES.radius,
            height: 55,
          }}
          onPress={handleSubmit}
        />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
      }}>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={'handled'}
        extraScrollHeight={-300}
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingBottom: SIZES.padding,
        }}>
        {/* Title and Description */}
        {renderTitleAndDescription()}

        {/* Form Inputs */}
        {/* Phone Number */}
        {/* <FormInput
          rootContainerStyle={{
            marginTop: SIZES.padding * 2,
          }}
          label="Phone Number"
          placeholder={'Enter your phone number'}
          value={phoneNumber}
          onChange={text => setPhoneNumber(text)}
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
        /> */}
        {/* email */}
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
        {alert.email && <Text style={{ color: "#fd2d6a"}} >{alert.email}</Text>}

        {/* Password */}
        <FormInput
          rootContainerStyle={{
            marginTop: SIZES.padding,
          }}
          label={'Password'}
          placeholder={'Enter your password'}
          value={password}
          secureTextEntry={!isVisible}
          onChange={text => setPassword(text)}
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
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItem: 'flex-end',
              }}
              iconStyle={{
                    width: 25,
                    height: 25,
                    tintColor: COLORS.contentPrimary
                }}
              icon={isVisible ? icons.eye_off : icons.eye}
              onPress={() => setIsVisible(!isVisible)}
            />
          }
        />
        {alert.password && <Text style={{ color: "#fd2d6a"}} >{alert.password}</Text>}

        {/* Remember me and Forgot Password */}
        {renderRememberMenAndForgotPassword()}
      

      {/* Footer */}
      {renderFooter()}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;
