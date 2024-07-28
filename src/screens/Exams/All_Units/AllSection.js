
import React, { useRef, useState } from 'react';
import { View, Text, ImageBackground, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue
} from 'react-native-reanimated';
import { COLORS, SIZES, FONTS, icons, images, dummyData } from '../../../constants';
import {
  IconButton, TextButton, VerticalCourseCard,
  LineDivider, CategoryCard, HorizontalCourseCard,
} from '../../../components';
import { useNavigation } from '@react-navigation/native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { Toast } from "react-native-toast-notifications";

const AllSection = ({ navigation, subject, years }) => {

  const [progress, setProgress] = useState(50);

  function renderExamDiscription(item) {
    return (
      <TouchableOpacity style={{
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
      }}
        onPress={() => navigation.navigate("Exam", { subject: subject, yearitem: item })}
      >
        <CircularProgress
          value={20}
          radius={50}
          inActiveStrokeColor={'#2ecc71'}
          inActiveStrokeOpacity={0.2}
          progressValueColor={'#000'}
          valueSuffix={'%'}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: "center",
            gap: 10,
            padding: 10
          }}
        >
          <View>
            <Text>Given Time:</Text>
            <Text>Last Practiced:</Text>
          </View>
          <View>
            <Text>1:30</Text>
            <Text>july/1</Text>
          </View>
        </View>
        <Text> This is a trial exam</Text>
        <Text>It only shows around 10 quaestion from 2016 Entrance exam.The rest are complete exams</Text>
      </TouchableOpacity>
    )
  }

  const handleError = (item) => {
    // Toast.show("Network error. Please try again.", { type: "danger" })
  };


  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',

        // paddingBottom: SIZES.height > 800 ? 20 : 5,
        // paddingHorizontal: SIZES.padding,
        // paddingVertical: SIZES.radius,

      }}
    >
      <FlatList
        data={years}
        showsVerticalScrollIndicator={false}
        listKey="BrowseYear"
        keyExtractor={item => `BrowseYear-${item.id}`}
        contentContainerStyle={{
          marginTop: SIZES.radius
        }}
        renderItem={({ item, index }) => (
          <View
            style={{
              width: SIZES.width - (SIZES.padding * 2),
              //   height: 200,
              backgroundColor: '#fff', // Set a background color for proper shadow rendering
              borderRadius: SIZES.radius, // Add border radius (optional)
              elevation: 5, // Adjust to control shadow depth
              shadowColor: '#000', // Optional: Set shadow color
              shadowOffset: { width: 0, height: 2 }, // Optional: Adjust shadow offset
              shadowOpacity: 0.8, // Optional: Control shadow opacity
              margin: SIZES.radius
            }}

          >
            <View style={{
              paddingHorizontal: SIZES.padding,
              backgroundColor: COLORS.primary,
              // height: 40,
              borderTopRightRadius: SIZES.radius,
              borderTopLeftRadius: SIZES.radius

            }}>
              <Text style={{
                paddingVertical: 5,
                ...FONTS.body2,
                color: COLORS.white
              }}

              >{item.year}</Text>

            </View>

            {renderExamDiscription(item)}

            {/* {item.open ?
              <View>
                {renderExamDiscription(item)}</View> :
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onPress={() => handleError(item)}
              >

                <Image
                  source={images.padlock}
                  style={{
                    width: 150,
                    height: 150,
                  }}
                />
              </TouchableOpacity>
            } */}

          </View>
        )}
      />
    </View>
  )
}

export default AllSection

const styles = StyleSheet.create({})

