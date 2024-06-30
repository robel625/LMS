import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView, Keyboard } from 'react-native'
import React, { createRef, useCallback, useEffect, useRef, useState } from 'react'
import { COLORS, FONTS, SIZES, images, icons, dummyData, constants } from "../../../constants"
import {
    IconButton,
    LineDivider, TextButton, HorizontalCourseCard, IconLabel,
    IconLabelButton
} from '../../../components';
import { TextInput } from 'react-native-gesture-handler';

const CommentSection = ({ commentItem, commentOption, replies }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                marginTop: SIZES.padding
            }}
        >
            {/* Profile Photo */}
            <Image
                source={commentItem?.profile}
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20
                }}
            />

            <View
                style={{
                    flex: 1,
                    marginTop: 3,
                    marginLeft: SIZES.radius
                }}
            >
                {/* Name */}
                <Text
                    style={{ ...FONTS.h3, color: COLORS.black }}
                >
                    {commentItem?.name}
                </Text>

                {/* Comment */}
                <Text
                    style={{ ...FONTS.body4 }}
                >
                    {commentItem?.comment}
                </Text>

                {/* comment Options */}
                {commentOption}

                {/* replies Section */}
                {replies}

            </View>
        </View>
    )
}


const CourseDiscussions = () => {

     const [footerPosition, setFooterPosition] = useState(0)
     const [footerHeight, sefFooterHeight] = useState(60)

     useEffect(() => {
        // Listen to keyboard
        const showSubscription = Keyboard.addListener("keyboardWillShow", (e) => {
            setFooterPosition(e.endCoordinates.height)
        })

        const hideSubscription = Keyboard.addListener("keyboardWillHide",(e) => {
            setFooterPosition(0)
        })

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        }
     }, [])


    function renderDiscussions() {
        return (
            <View
                style={{
                    flex: 1
                }}
            >
                <FlatList
                    data={dummyData?.course_details?.discussions}
                    keyExtractor={item => `Discussions-main-${item.id}`}
                    contentContainerStyle={{
                        paddingHorizontal: SIZES.padding,
                        paddingBottm: 70
                    }}
                    renderItem={({ item, index }) => (
                        <CommentSection
                            commentItem={item}
                            commentOption={
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginTop: SIZES.radius,
                                        paddingVertical: SIZES.base,
                                        borderTopWidth: 1,
                                        borderBottomWidth: 1,
                                        borderColor: COLORS.gray20
                                    }}
                                >
                                    {/* comment */}
                                    <IconLabelButton
                                        icon={icons.comment}
                                        label={item?.no_of_comments}
                                        iconStyle={{
                                            tint: COLORS.black
                                        }}
                                        labelStyle={{
                                            marginLeft: 3,
                                            color: COLORS.black,
                                            ...FONTS.h4
                                        }}
                                    />

                                    {/* like */}
                                    <IconLabelButton
                                        icon={icons.heart}
                                        label={item?.no_of_likes}
                                        containerStyle={{
                                            marginLeft: SIZES.radius
                                        }}
                                        labelStyle={{
                                            marginLeft: 3,
                                            color: COLORS.black,
                                            ...FONTS.h4
                                        }}
                                    />

                                    {/* Date */}
                                    <Text
                                        style={{
                                            flex: 1,
                                            textAlign: 'right',
                                            ...FONTS.h4
                                        }}
                                    >
                                        {item?.posted_on}
                                    </Text>

                                </View>
                            }
                            replies={
                                <FlatList
                                    data={item?.replies}
                                    scrollEnabled={false}
                                    keyExtractor={item => `Discussions-replies-${item.id}`}
                                    renderItem={({ item, index }) => (
                                        <CommentSection
                                            commentItem={item}
                                            commentOption={
                                                <View
                                                    style={{
                                                        flexDirection: 'row',
                                                        marginTop: SIZES.radius,
                                                        paddingVertical: SIZES.base,
                                                        borderTopWidth: 1,
                                                        borderBottomWidth: 1,
                                                        borderColor: COLORS.gray20
                                                    }}
                                                >
                                                    {/* Reply */}
                                                    <IconLabelButton
                                                        icon={icons.reply}
                                                        label='Reply'
                                                        labelStyle={{
                                                            marginLeft: 3,
                                                            color: COLORS.black,
                                                            ...FONTS.h4
                                                        }}
                                                    />

                                                    {/* like */}
                                                    <IconLabelButton
                                                        icon={icons.heart_off}
                                                        label="Like"
                                                        containerStyle={{
                                                            marginLeft: SIZES.radius
                                                        }}
                                                        labelStyle={{
                                                            marginLeft: 3,
                                                            color: COLORS.black,
                                                            ...FONTS.h4
                                                        }}
                                                    />

                                                    {/* Date */}
                                                    <Text
                                                        style={{
                                                            flex: 1,
                                                            textAlign: 'right',
                                                            ...FONTS.h4
                                                        }}
                                                    >
                                                        {item?.posted_on}
                                                    </Text>

                                                </View>
                                            }
                                        />
                                    )}
                                />
                            }
                        />
                    )}
                />
            </View>
        )
    }

    function renderFooterTextInput() {
        return (
            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                bottom: footerPosition,
                left: 0,
                right: 0,
                height: footerHeight,
                paddingHorizontal: SIZES.padding,
                // paddingVertical: SIZES.radius,
                backgroundColor: COLORS.gray10
              }}
            >
                <TextInput
                 style={{
                    flex: 1,
                    marginRight: SIZES.base,
                    ...FONTS.body3
                 }}
                 multiline
                 placeholder='Type Something'
                 placeholderTextColor={COLORS.gray80}
                 onContentSizeChange={(event) => {
                    const height = event.nativeEvent.contentSize.height

                    if (height <= 60){
                        sefFooterHeight(60)
                    }
                    else if (height > 60 && height <= 100){
                        sefFooterHeight(height)
                    }
                    else if (height > 100){
                        sefFooterHeight(100)
                    }
                 }}
                />

                <View
                   style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                   }}
                >

                <IconButton
                   icon={icons.send}
                   iconStyle={{
                    height: 25,
                    width: 25,
                    tintColor: COLORS.primary
                   }}
                />
                </View>

            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {renderDiscussions()}

            {renderFooterTextInput()}
        </View>
    )
}

export default CourseDiscussions

const styles = StyleSheet.create({})