import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView, Animated } from 'react-native'
import React, { createRef, useCallback, useEffect, useRef, useState } from 'react'
import { COLORS, FONTS, SIZES, images, icons, dummyData, constants } from "../../../constants"
import {
    IconButton,
    LineDivider, TextButton, HorizontalCourseCard, IconLabel
} from '../../../components';

const UnitSection = ({navigation, progress = 100 }) => {

    const [fillWidth, setFillWidth] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(fillWidth, {
            toValue: progress,
            duration: 1000, // Adjust duration as needed (in milliseconds)
            useNativeDriver: false
        }).start();
    }, [progress]);


    function renderChapter() {
        return (
            <View>
                {dummyData?.UnitsCatagory.map((item, index) => {
                    return (
                        <TouchableOpacity
                    onPress={() => navigation.navigate("Exam", {category: item})}
                    >
                        <View
                            key={`units-${index}`}
                            style={{
                                alignItems: 'center',   
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    paddingLeft: SIZES.padding,
                                    paddingRight: SIZES.radius,
                                    // alignItems: 'center',
                                    paddingVertical: SIZES.radius
                                    //   height: 70
                                }}
                            >
                                <View
                                    style={{
                                        backgroundColor: COLORS.primary2,
                                        width: 50,
                                        height: 50,
                                        borderRadius: 25,
                                        alignItems: "center",
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Text
                                        style={{
                                            ...FONTS.h2,
                                            color: COLORS.white
                                        }}
                                    >{item.grade}</Text>
                                </View>

                                {/* Title $ duration */}
                                <View
                                    style={{
                                        flex: 1,
                                        marginLeft: SIZES.radius
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: COLORS.black,
                                            ...FONTS.h3
                                        }}
                                    >
                                        {item?.unit}
                                    </Text>
                                    <Text
                                        style={{
                                            color: COLORS.gray30,
                                            ...FONTS.body4
                                        }}
                                    >
                                        {item?.title}
                                    </Text>

                                    <View style={[styles.progressBar,{ marginTop: 5 }]}>
                                <Animated.View style={[styles.fill, { width: fillWidth }]} />
                                </View>

                                </View>

                                {/* Size & Status */}
                                <Text
                                    style={{
                                        color: COLORS.gray30,
                                        ...FONTS.body4
                                    }}
                                >
                                    {`${item?.questions} questions`}
                                </Text>


                            </View>
                            



                            <LineDivider
                                lineStyle={{
                                    height: 1,
                                    marginVertical: SIZES.radius
                                }}
                            />


                        </View>
                        </TouchableOpacity>
                    )
                })}

            </View>
        )
    }



    return (
        <ScrollView>
            <Text
             style={{
                marginTop: SIZES.padding,
                marginHorizontal: SIZES.padding,
                ...FONTS.h2,
                fontSize: 20,
                color: COLORS.black
             }}
          >
              Each unit covers the entire 2007-2016 UEE questions separated by units
          </Text>

            {renderChapter()}
        </ScrollView>
    )
}

export default UnitSection

const styles = StyleSheet.create({
    progressBar: {
        height: 12,
        backgroundColor: '#ddd',
        borderRadius: 6,
        overflow: 'hidden',
    },
    fill: {
        height: '100%',
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
})