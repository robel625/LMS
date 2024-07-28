import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground} from 'react-native'
import React, { useEffect, useRef } from 'react'
import { COLORS, FONTS, SIZES, images, icons, dummyData } from "../../constants"
import Animated, {
    Extrapolation, interpolate, useAnimatedScrollHandler, useAnimatedStyle,
    useSharedValue, withDelay, withTiming, runOnJS
} from 'react-native-reanimated'
import {
    IconButton,
    LineDivider, HorizontalYoutubeCard,
} from '../../components';
import { FlatList } from 'react-native-gesture-handler';
import { getAllCourses } from '../../redux/actions/courseAction';
import { useSelector, useDispatch } from 'react-redux';


const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)
// const HEADER_HEIGHT = 250;

const YoutubeListing = ({ navigation, route  }) => {

    const { payment } = route.params;
    const dispatch = useDispatch();

    const flatListRef = useRef()
 
    function backHandler() {
        navigation.goBack()
    }

    const courses = useSelector((state) =>state.course.courses)

    const filteredCourses = courses?.filter((course) => {
        return course.payment === payment;
    })
    
    // const paiedCourses = courses?.filter((course) => {
    //   return course.name.toLowerCase().indexOf(filter.toLowerCase()) > -1 && course.payment === true;
    // })
      
    // console.log("courses CCCCCC", courses)
    useEffect(() => {
        dispatch(getAllCourses())
      }, [dispatch])

   

    function renderResults() {
        return (
            <View>
            {courses && <AnimatedFlatList
                ref={flatListRef}
                data={filteredCourses}
                keyExtractor={item => `Results-${item.id}`}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding
                }}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                keyboardDismissMode="on-drag"
                ListHeaderComponent={
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            // marginTop: 270,
                            marginTop: 10,
                            marginBottom: SIZES.base
                        }}
                    >
                        <Text
                            style={{
                                flex: 1,
                                ...FONTS.body3
                            }}
                        >
                            {courses.length} Result
                        </Text>

                        <IconButton
                            icon={icons.filter}
                            iconStyle={{
                                width: 20,
                                height: 20,
                            }}
                            containerStyle={{
                                width: 40,
                                height: 40,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10,
                                backgroundColor: COLORS.primary
                            }}
                        />
                    </View>
                }
                renderItem={({ item, index }) => (
                    <HorizontalYoutubeCard
                        course={item}
                        containerStyle={{
                            marginVertical: SIZES.padding,
                            marginTop: index == 0 ? SIZES.radius : SIZES.padding
                        }}
                        onPress={() => navigation.navigate("CourseDetails", {
                            selectedCourse: item,  lectureId: "first"
                        })}
                        paid={false}
                    />
                )}
                ItemSeparatorComponent={() => (
                    <LineDivider
                        lineStyle={{
                            backgroundColor: COLORS.gray20
                        }}

                    />
                )}

            />}
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
            {renderResults()}

            {/* {renderHeader()} */}
        </View>
    )
}


export default YoutubeListing





const styles = StyleSheet.create({})