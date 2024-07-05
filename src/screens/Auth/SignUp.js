import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {COLORS, FONTS, SIZES, constants, icons} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FormInput, IconButton, TextButton} from '../../components';
import { useSelector, useDispatch } from 'react-redux';


const SignUp = () => {

  const { auth, alert } = useSelector((state) => state);
  const dispatch = useDispatch();

  // State
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  console.log("alert inside register", alert)

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
          All field are required unless
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
          value={phone}
          onChange={value => setPhone(value)}
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
          // inputContainerStyle ={{
          //   borderColor: `${alert.email ? '#fd2d6a': ''}`, 
          //   borderWidth: 1
          // }}
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
          rootContainerStyle={{marginTop: SIZES.padding}}
          label="Password"
          placeholder={'Enter your password'}
          value={password}
          secureTextEntry={!isVisible}
          onChange={value => setPassword(value)}
          // inputContainerStyle ={{
          //   borderColor: `${alert.password ? '#fd2d6a': ''}`, 
          //   borderWidth: 1
          // }}
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
                alignItems: 'flex-end',
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
            // onPress={() => setSelectedScreen(constants.login)}
          />
        </View>

        {/* Register Button */}
        <TextButton
          label={'Register'}
          contentContainerStyle={{
            marginTop: SIZES.padding,
            marginLeft: SIZES.base,
            borderRadius: SIZES.radius,
            height: 55,
          }}
        //   onPress={() => {
        //     const userData = {
        //       phone,
        //       email,
        //       password,
        //     }
        //     onRegister(userData);
        //   }}
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

export default SignUp;
