import React, {useCallback, useMemo} from 'react';
import {Platform, View} from 'react-native';
import {BottomSheetBackdrop, BottomSheetModal} from '@gorhom/bottom-sheet';

import {COLORS, SIZES, constants, icons} from '../../constants';
import {IconButton} from '../../components';
import {ForgotPassword, Login, Register} from '../../screens';
import {MotiView} from 'moti';

const AuthModal = ({
  bottomSheetModalRef,
  hideModal,
  selectedScreen,
  setSelectedScreen,
  onRegister,
  onForgotPasswordSubmit,
}) => {
  // Bottom Sheet

  const snapPoints = useMemo(() => {
    if (Platform.OS === 'ios') {
      return ['93%'];
    } else {
      return ['83%'];
    }
  });

  // Render

  const renderBackdrop = useCallback(props => (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      opacity={0.3}
      pressBehavior={'none'}
    />
  ));

  function renderHeader() {
    return (
      <View>
        {/* Back */}
        <View>
          <IconButton
            icon={icons.angle_arrow_left}
            onPress={() => {
              hideModal();
            }}
          />
        </View>
      </View>
    );
  }
  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      backgroundStyle={{
        borderRadius: 0,
        backgroundColor: 'transparent',
      }}
      handleComponent={() => {
        return <View />;
      }}
      enablePanDownToClose={false}>
      <View
        style={{
          flex: 1,
          padding: SIZES.padding,
          backgroundColor: COLORS.backgroundPrimary,
          borderTopLeftRadius: SIZES.radius * 2,
          borderTopRightRadius: SIZES.radius * 2,
        }}>
        {/* Header */}
        {renderHeader()}

        {/* Screens - Login, Sugnup and Forgot Password */}
        <View style={{flex: 1}}>
          {/* Login */}
          <MotiView
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: selectedScreen === constants.login ? 2 : 1,
            }}
            animate={{
              left: selectedScreen === constants.login ? 0 : -100,
              opacity: selectedScreen === constants.login ? 1 : 0,
            }}
            transition={{
              type: 'timing',
              duration: 500,
            }}>
            <Login setSelectedScreen={setSelectedScreen} />
          </MotiView>

          {/* Register */}
          <MotiView
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: selectedScreen === constants.register ? 2 : 1,
            }}
            animate={{
              left: selectedScreen === constants.register ? 0 : 100,
              opacity: selectedScreen === constants.register ? 1 : 0,
            }}
            transition={{
              type: 'timing',
              duration: 500,
            }}>
            <Register
              setSelectedScreen={setSelectedScreen}
              onRegister={onRegister}
            />
          </MotiView>

          {/* Forgot Password */}
          <MotiView
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: selectedScreen === constants.forgot_password ? 2 : 1,
            }}
            animate={{
              left: selectedScreen === constants.forgot_password ? 0 : 100,
              opacity: selectedScreen === constants.forgot_password ? 1 : 0,
            }}
            transition={{
              type: 'timing',
              duration: 500,
            }}>
            <ForgotPassword
              setSelectedScreen={setSelectedScreen}
              onForgotPasswordSubmit={onForgotPasswordSubmit}
            />
          </MotiView>
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default AuthModal;
