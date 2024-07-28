import { StyleSheet, Text, View , TouchableOpacity, Image, ImageBackground, Keyboard, Animated } from 'react-native'
import React, { createRef, useCallback, useEffect, useRef, useState } from 'react'
import { COLORS, FONTS, SIZES,images, icons, dummyData, constants } from "../../constants"
import {IconButton,
    LineDivider, 
  } from '../../components';
import AllSection from './All_Units/AllSection';
import UnitSection from './All_Units/UnitSection';
import { useSelector, useDispatch } from 'react-redux';
import { getYear } from '../../redux/actions/questionAction';
import { useRealm, useQuery , useWrite } from '@realm/react';
import {Realm } from 'realm';
import { realmConfig, UnitSchema, Year, YearSchema } from '../../realm/models/exam';

const ALL_Units_Option = constants.ALL_Units_Option.map((ALL_Units_Option) =>({
    ...ALL_Units_Option,
    ref: createRef()
}))

const TabIndictor = ({measureLayout, scrollX }) => {
    const inputRange = ALL_Units_Option.map((_, i) => i * SIZES.width)

    const tabIndictorWidth = scrollX.interpolate({
        inputRange,
        outputRange: measureLayout.map(measure => measure.width)
    })

    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: measureLayout.map(measure => measure.x)
    })

    return (
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 0,
            height: 4,
            width: tabIndictorWidth,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
            transform: [{
                translateX
            }]
          }}
        />
    )
}

const Tabs = ({ scrollX, onTabPress }) => {
     const [measureLayout, setMeasureLayout] = useState([])
     const containerRef = useRef()


     useEffect(() => {
        let ml = []

        ALL_Units_Option.forEach(course_details_tab => {
            course_details_tab?.ref?.current?.measureLayout(
                containerRef.current,
                (x, y, width, height) => {
                    ml.push({
                        x, y, width, height
                    })
                    if(ml.length === ALL_Units_Option.length)
                        {
                            setMeasureLayout(ml)
                        }
                }
            )
        })
     }, [containerRef.current])

     return(
        <View
          ref={containerRef}
          style={{
            flex: 1,
            flexDirection: 'row'
          }}
        >
          {/* Tab Indicator  */}
          {measureLayout.length > 0 && 
          <TabIndictor
            measureLayout={measureLayout}
            scrollX = {scrollX}
          />}

          {/* Tabs */}
          {ALL_Units_Option.map((item, index) => {
            return (
                <TouchableOpacity
                  key={`Tab-${index}`}
                  ref={item.ref}
                  style={{
                    flex: 1,
                    paddingHorizontal: 15,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onPress={() => {
                    Keyboard.dismiss()
                    onTabPress(index)}}
                >
                <Text
                   style={{
                    ...FONTS.h3,
                    fontSize: SIZES.height > 800 ? 18 : 17,
                    color : COLORS.black 
                   }}
                >
                    {item.label}
                </Text>
                </TouchableOpacity>
            )
          })}
        </View>
     )
}




const YearListing = ({ navigation, route }) => {

  const {subject} = route.params;
  //console.log("subject router RRRRRRRRRRRRRRRRRRRRRRRRRR", subject)
  const auth = useSelector((state) => state.auth);
  const exam = useSelector((state) => state.exam);
  const dispatch = useDispatch();
  const realm = useRealm();

  let YearSchema1 = useQuery(Year);
  const Yearfiltered = YearSchema1.filtered(`subject == "${subject.id}"`);
  //console.log("YearSchema1 provider jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj", YearSchema1)
  let UnitSchema1 = useQuery('Unit');
  // console.log("unitSchema uuuuuuuuuuuuuuuuuuuuu", UnitSchema1 )

   const processData = () => {
      const transformedData = {};
    
      UnitSchema1.forEach(item => {
        if (item.subject.toLowerCase() === subject.title.toLowerCase()) {
          const { subject, grade } = item;
      
          if (!transformedData[subject]) {
            transformedData[subject] = {};
          }
      
          if (!transformedData[subject][grade]) {
            transformedData[subject][grade] = [];
          }
      
          transformedData[subject][grade].push({
            "id": item.id,
            "unit": item.unit,
            "title": item.title,
            "number_of_Questions": item.number_of_Questions
          });
        }
       });
       
       console.log("transformedData DDDDDDDDDDDDDDDDDDDDDD",transformedData);
       return transformedData
    }

  const [years, setYears] = useState("")
  const [units, setUnits] = useState("")

   useEffect(() => {
    setYears(Yearfiltered)
    setUnits(processData())
    // setYears(exam.years)
    //setUnits(exam.units)
   
    const year1 = exam.allYears
    const unit1 = exam.allUnits
    createRealmData(year1, unit1)
    // let realm;

    const fetchData = async () => {
      try {
        // const realm = useRealm();
        // realm.write(() => {
        //   realm.create('Year', {id: "9", year:"jnj1678",
        //     subject: "KKKKKKKKKKKKKKKKKK",
        //     number_of_Questions: '78',
        //     time_Allowed: '60'})
        //   });
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        // if (realm) {
        //   realm.close();
        // }
      }
    };

    fetchData();
  }, [exam]);

  const createRealmData = (year1, unit1) => {
    // console.log('year1111111111111111111', YearSchema1)
    const foundYear = YearSchema1.find(year => year.subject === String(year1[0]?.subject));
    // console.log('foundYear222222222222222', foundYear)
    if (!foundYear) {
        realm.write(() => {
            year1?.forEach(year => {
              realm.create('Year', {id: String(year.id), year: year.year,
                  subject: String(year.subject),
                  number_of_Questions: String(year.number_of_Questions),
                  time_Allowed: String(year.time_Allowed)});
            });
            unit1.forEach(unit => {
              realm.create('Unit', {
                id: unit.id,
                subject: unit.subject,
                grade: unit.grade,
                unit: unit.unit,
                title: unit.title,
                number_of_Questions: unit.number_of_Questions
              });
            });
          });
        }

          // realm.write(() => {
          //   realm.delete(YearSchema1);
          // });
  
};
 
  useEffect(() => {
    const foundYear = YearSchema1.find(year => year.subject === String(subject.id));
    if (!foundYear) {
      dispatch(getYear(subject.title, auth));
    }
  }, []);


    

    const flatListRef = useRef()
    const scrollX = useRef(new Animated.Value(0)).current

    const onTabPress = useCallback(tabIndex => {
        flatListRef?.current?.scrollToOffset({
            offset: tabIndex * SIZES.width
        })
    })

    function renderHeader() {
        return(
            <View
               style={{
                flexDirection: 'row',
                paddingHorizontal: SIZES.padding,
                justifyContent: "space-between",
                backgroundColor: COLORS.primary,
                height: 70,
                alignItems: 'center'
               }}
            >
            <View
               style={{
                flexDirection: 'row',
                alignItems: 'center'
                // justifyContent: "space-between"
               }}
            >
                <IconButton
                icon={icons.angle_arrow_left}
                containerStyle={{
              width: 40,
              height: 40,
              justifyContent: 'center',
            }}
            iconStyle={{
                  width: 25,
                  height: 25,
                  tintColor: COLORS.white
              }}
                onPress={() => {
                    navigation.goBack()
                }}
              />
                <Text style={{
                    ...FONTS.h2,
                    color: COLORS.white
                }} >
                    {subject.title}
                </Text>
                </View>

                {/* <IconButton
                     icon={icons.sun}
                     iconStyle={{
                     tintColor: COLORS.white
                     }}
                    //  onPress={() => toggleThemeHandler()}
                /> */}

            </View>
        )
    }


    function renderContent() {
        return (
            <View
              style={{
                flex: 1
              }}
            >
                {/* Tabs */}
                <View
                   style={{
                    height: 60,
                  }}
                >
                    <Tabs
                       scrollX={scrollX}
                       onTabPress={onTabPress}
                    />
    
                </View>
    
    
                {/* LineDivider */}
                <LineDivider
                  lineStyle={{
                    backgroundColor: COLORS.gray20
                  }}
                />
    
                {/* Content */}
                <Animated.FlatList
                   ref = {flatListRef}
                   horizontal
                   pagingEnabled
                   snapToAlignment='center'
                   snapToInterval={SIZES.width}
                   decelerationRate='fast'
                   keyboardDismissMode='on-drag'
                   showsHorizontalScrollIndicator={false}
                   data={constants.ALL_Units_Option}
                   keyExtractor={item => `YearListingTabs-${item.id}`}
                   onScroll={
                    Animated.event([
                         { nativeEvent: { contentOffset: { x: scrollX}}}
                   ],{
                        useNativeDriver: false
                   })
                  }
                  renderItem={({ item, index}) => {
                    return (
                        <View 
                          style={{
                            width: SIZES.width
                          }}
                        >
                            {index == 0 && <AllSection navigation={navigation} subject={subject.title} years={years}/>}
                            {index == 1 && <UnitSection navigation={navigation} subject={subject.title} units={units}/>}
                    </View>
                    )
                  }}
                />
                
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
   {renderHeader()}

   {renderContent()}

 </View>
  )
}

export default YearListing

const styles = StyleSheet.create({})