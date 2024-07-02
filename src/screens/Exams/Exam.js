import { StyleSheet, Text, View , TouchableOpacity, Image, ImageBackground, Keyboard, Animated, FlatList, Modal } from 'react-native'
import React, { createRef, useCallback, useEffect, useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ExplanationSwitch from '../../components/CustomSwitch/ExplanatonSwitch';
import { COLORS, FONTS, SIZES,images, icons, dummyData, constants } from "../../constants"
import {HorizontalCourseCard, IconButton,
    LineDivider, 
  } from '../../components';
import CountDown from 'react-native-countdown-fixed';

import English from '../../data/ministry/English';
import Maths from '../../data/ministry/Maths';
import SocialStudy from '../../data/model/SocialStudy';
import G6_English from '../../data/ministry/G6_English';
import GeneralScience from '../../data/model/GeneralScience';


const Exam = ({ navigation }) => {

  const [selectedValue, setSelectedValue] = useState(null);
   const exam = SocialStudy

   const targetDate = new Date(); // Get the current date and time
   targetDate.setHours(targetDate.getHours() + 1); // Add 1 hour to the current time

  // const allQuestions = exam;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0)
  const [showNextButton, setShowNextButton] = useState(false)
  const [showScoreModal, setShowScoreModal] = useState(false)
  const [showExplanationButton, setShowExplanationButton] = useState('')
  const [explanation, setexplanation] = useState(false)
  const [selectedQuestionId, setSelectedQuestionId] = useState('')
  const [timerOn, setTimerOn] = useState(false)

  const onSelect = (value) => {
    console.log('Selected:', value);
  };


  const validateAnswer = (correct_option, selectedOption, id) => {
    // let option = exam.filter((item) => item.id == id)
    // let correct_option = (option[0].correct_option)


    setCurrentOptionSelected(selectedOption.trim());
    setCorrectOption(correct_option.trim());
    setShowExplanationButton(id);
    setexplanation(false)
    setSelectedQuestionId(id)
    // setexplanation(false)
    // setIsOptionsDisabled(true);
    if (selectedOption == correct_option) {
      // Set Score
      setScore(score + 1)
    }
    // Show Next Button
    // setShowNextButton(true)
  }

  const handleExplanationToggle = () => {
    setexplanation(!explanation)
  }

  const ListFooter = () => {
    return (
      <View style={{ marginBottom: 20 }}>
        <TouchableOpacity  onPress={() => setShowScoreModal(!showScoreModal)}>
        <Text
          style={{
            ...FONTS.h1,
            color: COLORS.white,
            backgroundColor: COLORS.primary,
            padding: SIZES.padding,
            borderRadius: SIZES.radius,
            textAlign: 'center',
            margin:SIZES.padding
          }}
         > END</Text>
        </TouchableOpacity>
      </View>
    );
  };

    function renderOptions(item, option) {

      return (
        <TouchableOpacity
        onPress={() => validateAnswer(item.correct_option, option, item.id)}
        key={option}
        style={{
          borderWidth: (option == correctOption && item.id == selectedQuestionId)
            ? 3
            : (option == currentOptionSelected && item.id == selectedQuestionId)
              ? 3
              : null,
          borderColor: (option == correctOption && item.id == selectedQuestionId)
            ? COLORS.success
            : (option == currentOptionSelected && item.id == selectedQuestionId)
              ? COLORS.error
              : null,
          backgroundColor: (option == correctOption && item.id == selectedQuestionId)
            ? COLORS.success + '20'
            : (option == currentOptionSelected && item.id == selectedQuestionId)
              ? COLORS.error + '20'
              : null,
          minHeight: 10,
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          // paddingVertical: 5,
          marginVertical: 5
        }}
      >
        <View style={styles.radioButtonContainer}>
          <View style={[styles.radioButton,
          (option == currentOptionSelected && item.id == selectedQuestionId) ? styles.selected : null
          ]} />
          <Text style={{ fontSize: 17, color: 'black' }}>{option}</Text>

        </View>
        {
          (option == correctOption && item.id == selectedQuestionId) ? (
            <View style={{
              width: 20, height: 20, borderRadius: 20 / 2,
              backgroundColor: COLORS.success,
              justifyContent: 'center', alignItems: 'center'
            }}>
              <Icon name="check" style={{
                color: COLORS.white,
                fontSize: 18
              }} />
            </View>
          ) : (option == currentOptionSelected && item.id == selectedQuestionId) ? (
            <View style={{
              width: 20, height: 20, borderRadius: 20 / 2,
              backgroundColor: COLORS.error,
              justifyContent: 'center', alignItems: 'center'
            }}>
              <Icon name="close" style={{
                color: COLORS.white,
                fontSize: 17
              }} />
            </View>
          ) : null
        }
      </TouchableOpacity>
        
      )
    }

    function renderHeader() {
        return(
            <View
               style={{
                flexDirection: 'row',
                paddingHorizontal: SIZES.radius,
                justifyContent: "space-between",
                backgroundColor: COLORS.primary,
                height: 50,
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
                    setTimerOn(false)
                    navigation.goBack()
                }}
              />
             {!timerOn &&  <Text style={{
        ...FONTS.h2,
        color: COLORS.white
    }} >
        Biology
    </Text>}

    <CountDown
        size={timerOn ? 15 : 0}
        until={10000}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: 'transparent',}}
        digitTxtStyle={{color: 'white'}}
        timeLabelStyle={{color: 'white'}}
        separatorStyle={{color: 'white'}}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator
        running={timerOn ? true : false}
      />

      </View>

                {/* <IconButton
                     icon={icons.time}
                     iconStyle={{
                      width: 20,
                      height: 20,
                     tintColor: COLORS.white
                     }}
                    //  onPress={() => toggleThemeHandler()}
                /> */}
                <View
                   style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                   }}
                >
                <TouchableOpacity
                 onPress={() => setTimerOn(!timerOn)}
                >
                  <View
                     style={{
                      marginRight: 15,
                     }}
                  >
                {timerOn ? <Icon name= "timer-off-outline" style={{
                color: COLORS.white,
                fontSize: 25
              }} /> : <Icon name= "timer-outline" style={{
                color: COLORS.white,
                fontSize: 25
              }} />}
                </View>
              </TouchableOpacity>

              <TouchableOpacity  onPress={() => setShowScoreModal(!showScoreModal)}>
                 <Icon name="check" style={{
                color: COLORS.white,
                fontSize: 30
              }} />
              </TouchableOpacity>
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
      {renderHeader()}

              <FlatList
                data={exam}
                showsVerticalScrollIndicator = {false}
                listKey="Exam"
                keyExtractor={item => `Exam-${item.id}`}
                ListFooterComponent={ListFooter}
                contentContainerStyle={{
                  marginTop: SIZES.radius,
                //   paddingHorizontal: SIZES.radius
                }}
                renderItem={({item, index}) => (
                    <View
                    style={{
                    //  width: SIZES.width -(SIZES.padding * 2),
                    //   height: 200,
                      backgroundColor: '#fff', // Set a background color for proper shadow rendering
                      borderRadius: SIZES.radius, // Add border radius (optional)
                      elevation: 50, // Adjust to control shadow depth
                      shadowColor: '#000', // Optional: Set shadow color
                      shadowOffset: { width: 2, height: 2 }, // Optional: Adjust shadow offset
                      shadowOpacity: 0.8, // Optional: Control shadow opacity
                      margin: 5,
                    }}
                    >
                       
                        <Text style={{
                            paddingVertical: 5,
                            ...FONTS.h3,
                            color: COLORS.black,
                            paddingHorizontal: SIZES.radius
                        }}
                        
                        >{item.id}</Text>

                       <View
                              style={{
                                height: 2,
                                marginLeft: 10,
                                width: "95%",
                                backgroundColor: COLORS.gray20,
                              }}>
                             
                           </View>

                           {item.question && <Text style={{
                            paddingVertical: 5,
                            ...FONTS.h3,
                            color: COLORS.black,
                            paddingHorizontal: SIZES.radius
                        }}
                        
                        >{item.question}</Text>}

                                                                      

{item.question_image &&  <View
                           style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                           }}
                        >
                          <Image
                      source={item.question_image}
                      style={{
                         width: 100,
                         height: 100,
                        }}
                     />
                        </View>}

                        {item.header1 && <Text style={{
                            paddingVertical: 5,
                            ...FONTS.h1,
                            fontSize: 25,
                            color: COLORS.black,
                            paddingHorizontal: SIZES.radius,
                            textAlign: 'center'
                        }}>{item.header1}</Text>}

                        {item.header2 && <Text style={{
                            paddingVertical: 5,
                            ...FONTS.h2,
                            fontSize: 20,
                            color: COLORS.black,
                            paddingHorizontal: SIZES.radius
                        }} >{item.header2}</Text>}
                        
                        {item.passage && <Text style={{
                            paddingVertical: 5,
                            ...FONTS.body3,
                            color: COLORS.black,
                            paddingHorizontal: SIZES.radius
                        }}>{item.passage}</Text>}

               {
                item?.options?.map(option => (
                  <View>
                    {renderOptions(item, option.trim())}
                  </View>
                ))
              }

{(item.explanation || item.explanation_Image) && showExplanationButton == item.id && 
            <View>
            <ExplanationSwitch onToggle={handleExplanationToggle} value='false' />

            {(explanation && item.explanation) && <Text style={{ fontSize:16, padding:10, borderRadius: 6, borderWidth: 2,
                            }}>
                      {item.explanation}
                  </Text>}

            {(explanation &&item.explanation_Image) &&
                 <Image source={item.explanation_Image} style={{width: "100%", resizeMode: 'contain'}}/>   
                }
            </View>}

                       
                    </View>
                )}
                
        
               />

<Modal
               animationType="slide"
               transparent={true}
               visible={showScoreModal}
               >
                   <View style={{
                       flex: 1,
                       backgroundColor: COLORS.black,
                       opacity: 0.9,
                       alignItems: 'center',
                       justifyContent: 'center'
                   }}>
                       <View style={{
                           backgroundColor: COLORS.white,
                          
                           width: '90%',
                           borderRadius: 20,
                           padding: 20,
                           alignItems: 'center'
                       }}>
                           <Text style={{fontSize: 30, fontWeight: 'bold'}}>{ score> (exam[0]?.Number_of_Questions/2) ? 'Congratulations!' : 'Oops!' }</Text>

                           <View style={{
                               flexDirection: 'row',
                               justifyContent: 'flex-start',
                               alignItems: 'center',
                               marginVertical: 20
                           }}>
                               <Text style={{
                                   fontSize: 30,
                                   color: score> (exam[0]?.Number_of_Questions/2) ? COLORS.success : COLORS.error
                               }}>{score}</Text>
                                <Text style={{
                                    fontSize: 20, color: COLORS.black
                                }}>/ { exam[0]?.Number_of_Questions }</Text>
                           </View>
                           {/* Retry Quiz button */}
                           <TouchableOpacity
                           onPress={() => { setShowScoreModal(false); setScore(0);}}
                           style={{
                              //  backgroundColor: COLORS.accent,
                               padding: 20, width: '100%', borderRadius: 20
                           }}>
                               <Text style={{
                                   textAlign: 'center', color: COLORS.primary, fontSize: 20
                               }}>Retry Exam</Text>
                           </TouchableOpacity>

                       </View>

                   </View>
               </Modal>
     


    </View>
  )
}

export default Exam

const styles = StyleSheet.create({

  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 10,
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#777777',
    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 10,
  },
  selected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#444',
  },
  radioButtonText: {
    marginLeft: 16,
    fontSize: 16,
  },


  radioButtonContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%'
  }
})