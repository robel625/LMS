
import React, { useState } from 'react';
import {View, Text, ImageBackground, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS, SIZES, FONTS, icons, images, dummyData} from '../../constants';
import {IconButton, TextButton, VerticalCourseCard,
  LineDivider, CategoryCard, HorizontalCourseCard, ProgressBar, ProfileValue,  ProfileRadioButton
} from '../../components';

import { connect } from 'react-redux';
import { toggleTheme } from '../../stores/themeActions';
import appTheme from '../../constants/theme';

const Profile = ({ appTheme, toggleTheme}) => {

    const [newCourseNotfication, setNewCourseNotification] = useState(false)
    const [studyReminder, setStudyRemider] = useState(false)

    function toggleThemeHandler() {
        if (appTheme?.name == "light"){
            toggleTheme('dark')
        } else {
            toggleTheme('light')
        }
    }

    function renderHeader() {
        return(
            <View
               style={{
                flexDirection: 'row',
                marginTop: 50,
                paddingHorizontal: SIZES.padding,
                justifyContent: "space-between"
               }}
            >
                <Text style={{
                    ...FONTS.h1,
                    color: appTheme?.textColor
                }} >
                    Profile
                </Text>

                <IconButton
                     icon={icons.sun}
                     iconStyle={{
                        tintColor: appTheme?.tintColor
                     }}
                     onPress={() => toggleThemeHandler()}
                />

            </View>
        )
    }

    function renderProfileCard() {
        return(
            <View
               style={{
                flexDirection: 'row',
                marginTop: SIZES.padding,
                paddingHorizontal: SIZES.radius,
                paddingVertical: 20,
                borderRadius: SIZES.radius,
                backgroundColor: appTheme?.backgroundColor2,
               }}
            >
                <TouchableOpacity
                   style={{
                    width: 80,
                    height: 80
                   }}
                
                >
                    <Image
                       source={images.profile}
                       style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 40,
                        borderWidth: 1,
                        borderColor: COLORS.white
                       }}
                    />

                    <View
                      style={{
                        position: 'absolute',
                        width: "100%",
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                        <View
                           style={{
                            width: 30,
                            height: 30,
                            marginBottom: -15,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius:15,
                            backgroundColor: COLORS.primary
                           }}
                        >
                            <Image
                               source={icons.camera}
                               resizeMode='contain'
                               style={{
                                width:17,
                                height: 17
                               }}
                            />

                        </View>

                    </View>

                </TouchableOpacity>

                <View
                  style={{
                    flex: 1,
                    marginLeft: SIZES.radius,
                    alignItems: 'flex-start',
                  }}
                >
                    <Text 
                       style={{
                        color: COLORS.white,
                        ...FONTS.h2
                       }}
                    >
                       ByProgrammers
                    </Text>
                    <Text
                       style={{
                        color: COLORS.white,
                        ...FONTS.body4
                       }}
                    >
                        Full Stack Developer
                    </Text>

                    <ProgressBar
                       progress= "58%"
                       containerStyle={{
                        marginTop: SIZES.radius
                       }}
                    />

                    <View
                        style={{
                            flexDirection: "row"
                        }}
                    >
                         <Text
                             style={{
                                flex: 1,
                                color: COLORS.white,
                                ...FONTS.body4
                            }}
                         >
                            Overall Progress
                         </Text>
                         <Text 
                         style={{
                            color: COLORS.white,
                            ...FONTS.body4
                        }}
                        >
                            58%         
                         </Text>
                    </View>

                    <TextButton
                        label="+ Become Member"
                        contentContainerStyle={{
                            height: 35,
                            marginTop: SIZES.padding,
                            paddingHorizontal: SIZES.radius,
                            borderRadius: 20,
                            backgroundColor: appTheme?.backgroundColor4
                        }}
                        labelStyle={{
                            color: appTheme?.textColor2
                        }}
                    />

                </View>

            </View>
        )
    }

   
    function  renderProfileSection1() {
        return(
            <View
               style={styles.profileSectionContainer}
            >
            <ProfileValue
                icon={icons.profile}
                label="Name"
                value="ByProgrammers"
            />
            <LineDivider/>
            <ProfileValue
                icon={icons.email}
                label="Email"
                value="ByProgrammers@gmail.com"
            />
            <LineDivider/>
            <ProfileValue
                icon={icons.password}
                label="Password"
                value="updated 2 weeks ago"
            />
            <LineDivider/>
            <ProfileValue
                icon={icons.call}
                label="Contact Number"
                value="+0910111213"
            />
            </View>
        )
    }


    function  renderProfileSection2() {
        return(
            <View
               style={styles.profileSectionContainer}
            >
            <ProfileValue
                icon={icons.star_1}
                value="Pages"
                />
           <LineDivider/>

            <ProfileRadioButton
               icon={icons.new_icon}
               label= "New Course Notifications"
               isSelected={newCourseNotfication}
               onPress={() => {
                setNewCourseNotification(!newCourseNotfication)
               }}
            />
            <LineDivider/>

            <ProfileRadioButton
               icon={icons.reminder}
               label= "Study Reminder"
               isSelected={studyReminder}
               onPress={() => {
                setStudyRemider(!studyReminder)
               }}
            />
            <LineDivider/>

            </View>
        )
    }


    return (
        <View style={{
             flex: 1,
             backgroundColor: appTheme?.backgroundColor1
          }}>
            {renderHeader()}

            <ScrollView
               contentContainerStyle={{
                paddingHorizontal: SIZES.padding,
                paddingBottom: 150
                
               }}
            >
                {renderProfileCard()}

                {renderProfileSection1()}

                {renderProfileSection2()}
            </ScrollView>
        </View>
    )
}

export default connect(mapStateProps, mapDispatchToProps) (Profile);

function mapStateProps(state) {
    return {
        appTheme: state.appTheme,
        error: state.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleTheme: (themeType) => {
            return dispatch(toggleTheme(themeType))
        }
    }
}


const styles = StyleSheet.create({
    profileSectionContainer: {
        marginTop: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        borderWidth: 1,
        borderRadius: SIZES.radius,
        borderColor: COLORS.gray20
    }
})