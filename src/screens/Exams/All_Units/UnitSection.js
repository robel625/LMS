import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView, Animated, Table, TableView, SectionList } from 'react-native'
import React, { createRef, useCallback, useEffect, useRef, useState } from 'react'
import { COLORS, FONTS, SIZES, images, icons, dummyData, constants } from "../../../constants"
import {
    IconButton,
    LineDivider, TextButton, HorizontalCourseCard, IconLabel
} from '../../../components';

const UnitSection = ({ navigation, progress = 100, subject, units }) => {

    const [fillWidth, setFillWidth] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(fillWidth, {
            toValue: progress,
            duration: 1000, // Adjust duration as needed (in milliseconds)
            useNativeDriver: false
        }).start();
    }, [progress]);

    function renderUnits() {
        return (
            <View>
                {Object.entries(units).map(([subject, grades]) => (
                    <View key={subject} style={styles.subjectContainer}>
                        {Object.entries(grades).map(([grade, units]) => (
                            <View key={grade}>
                                <Text style={styles.gradeTitle}>Grade {grade}</Text>
                                <View>
                                    {units.map((unit) => (
                                        <View key={`${subject}-${grade}-${unit.unit}`}
                                            style={{ alignItems: 'center' }}
                                        >
                                            <TouchableOpacity
                                                style={{
                                                    flexDirection: 'row',
                                                    paddingLeft: SIZES.padding,
                                                    paddingRight: SIZES.radius,
                                                    // paddingVertical: SIZES.radius
                                                }}
                                                onPress={() => navigation.navigate("UnitQuestions", { subject: subject, unit: unit, grade:grade })}
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
                                                    >{grade}</Text>
                                                </View>
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
                                                        Unit {unit.unit}
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            color: COLORS.gray30,
                                                            ...FONTS.body4
                                                        }}
                                                    >
                                                        {unit.title}
                                                    </Text>

                                                    <View style={[styles.progressBar, { marginTop: 5 }]}>
                                                        <Animated.View style={[styles.fill, { width: fillWidth }]} />
                                                    </View>
                                                </View>
                                                <Text
                                                    style={{
                                                        color: COLORS.gray30,
                                                        ...FONTS.body4
                                                    }}
                                                >
                                                    {unit.number_of_Questions || 'N/A'} Questions
                                                </Text>



                                            </TouchableOpacity>
                                            <LineDivider
                                                lineStyle={{
                                                    height: 1,
                                                    marginVertical: SIZES.radius
                                                }}
                                            />
                                        </View>
                                    ))}
                                </View>
                                {/* <TableView style={styles.table}>
                {units.map((unit) => (
                  <TableView.Row key={`${subject}-${grade}-${unit.unit}`}>
                    <TableView.Cell>Unit {unit.unit}</TableView.Cell>
                    <TableView.Cell>{unit.title}</TableView.Cell>
                    <TableView.Cell>{unit.number_of_Questions || 'N/A'}</TableView.Cell>
                  </TableView.Row>
                ))}
              </TableView> */}
                            </View>
                        ))}
                    </View>
                ))}
            </View>)
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
            
            {renderUnits()}
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


    subjectContainer: {
        margin: 5,
        padding: 10,
        backgroundColor: 'white',
    },
    gradeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#007bff',

    },
})