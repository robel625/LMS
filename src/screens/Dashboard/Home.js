import React, { useEffect } from 'react';
import {View, Text, ImageBackground, Image, ScrollView, StyleSheet} from 'react-native';
import {FlatList,  GestureHandlerRootView } from 'react-native-gesture-handler';
import {COLORS, SIZES, FONTS, icons, images, dummyData} from '../../constants';
import {IconButton, TextButton, VerticalCourseCard,
  LineDivider, CategoryCard, HorizontalCourseCard, HomeCard
} from '../../components';
import { useNavigation } from '@react-navigation/native';
import { saveUserData } from '../../redux/actions/authAction';
import { getUserData } from '../../utils/utils';
import { useSelector, useDispatch } from 'react-redux';


const Section = ({containerStyle, title, onPress, children})=> {
  return (
    <View style={{
      ...containerStyle
    }}>
      <View
         style={{
          flexDirection: "row",
          paddingHorizontal: SIZES.padding
         }}>
          <Text style={{
            flex:1,
            ...FONTS.h2
          }}>
            {title}
          </Text>
          <TextButton
             contentContainerStyle={{
              width: 80,
              borderRadius: 30,
              backgroundColor: COLORS.primary
             }}
             label="See All"
             onPress={onPress}
             />

      </View>
         {children}
    </View>
  )
}

const Home = () => {

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();


  useEffect(() => {
    (async()=>{
      const userData = await getUserData()
      // console.log("user data App.js",userData)
      if(!!userData){
        dispatch(saveUserData(userData))
      }  
    })();
  }, []);


 const navigation = useNavigation();

  function renderHeader() {
    return (
      // <View
      //   style={{
      //     flexDirection: 'row',
      //     marginTop: 10,
      //     marginBottom: 10,
      //     paddingHorizontal: SIZES.padding,
      //     alignItems: 'center',
      //   }}>
      //   <View
      //     style={{
      //       flex: 1,
      //     }}>
      //     <Text style={{...FONTS.h2}}>Hello,{user?.email}</Text>
      //     {/* <Text style={{...FONTS.body3, color: COLORS.gray}}>
      //       {' '}
      //       Thursday, 9th sept 2021
      //     </Text> */}
      //   </View>

      //   <IconButton
      //     icon={icons.notification}
      //     iconStyle={{
      //       tintColor: COLORS.black,
      //       width: 20,
      //       height: 20,
      //     }}
      //   />
      // </View>
      <View style={styles.headerContainer}>
                <Text style={{...FONTS.h2, color: COLORS.white}}>Hello,{user?.email}</Text>
                <Text style={{...FONTS.h2, color: COLORS.white}}>
                    Welcome to the Z secret!
                </Text>
            </View>
    );
  }

  function renderStartLearning() {
    return (
      <ImageBackground
         source= {images.featured_bg_image}
         style={{
            alignItems: 'flex-start',
            marginTop: SIZES.padding,
            marginHorizontal: SIZES.padding,
            padding: 15
         }}
         imageStyle={{
            borderRadius: SIZES.radius
         }}
      >
        {/* <View>
            <Text style={{ color: COLORS.white,
                           ...FONTS.body2
            }}>
                 How To
            </Text>
            <Text style={{ color: COLORS.white,
                           ...FONTS.h2
            }}>Make Your brand more visible with our checklist</Text>
            <Text style={{ marginTop: SIZES.radius, color: COLORS.white,
                           ...FONTS.body4
            }}>By Scott Harris</Text>
        </View> */}

        <View>
            <Text style={{ color: COLORS.white,
                           ...FONTS.h2
            }}>university entrance exam </Text>
            {/* <Text style={{ color: COLORS.white,
                           ...FONTS.body3
            }}>
                 questions & answer from 2007 - 2016
            </Text>
            <Text style={{ color: COLORS.white,
                           ...FONTS.body3
            }}>
                 with explanation
            </Text> */}
            {/* <Text style={{ marginTop: SIZES.radius, color: COLORS.white,
                           ...FONTS.body4
            }}>By Z Secret Training</Text> */}
        </View>

        <Image
           source={images.start_learning}
           style={{
            width: "100%",
            height: 110,
            marginTop: SIZES.padding
           }}
        />

        {/* <TextButton
            label="start Exams"
            contentContainerStyle={{
                height: 40,
                paddingHorizontal: SIZES.padding,
                borderRadius: 20,
                backgroundColor: COLORS.white
            }}
            labelStyle={{
                color: COLORS.black
            }}
            onPress={() => navigation.navigate('SubjectListing')}
        /> */}

      </ImageBackground>
    );
  }

  function renderCourses() {
    return (
        <FlatList
           horizontal
           data={dummyData.courses_list_1}
           listKey="Courses"
           keyExtractor={item => `Courses-${item.id}`}
           showsHorizontalScrollIndicator={false}
           contentContainerStyle={{
            marginTop: SIZES.padding
           }}
           renderItem={({item, index}) => (
                <VerticalCourseCard
                    containerStyle={{
                        marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                        marginRight: index == dummyData.courses_list_1.length -1 ? SIZES.padding: 0
                    }}
                    course={item}
                />
           )}
           />
    )}

  function  renderCategories() {
    return (
      <Section
         title="Paid Courses"
      >
         <GestureHandlerRootView>
        <FlatList
            horizontal
            data={dummyData.categories}
            listKey="Categories"
            keyExtractor={item => `Categories-${item.id}`}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginTop: SIZES.radius
            }}
            renderItem={({item, index}) => (
               <CategoryCard 
                   sharedElementPrefix="Home"
                   category={item}
                   containerStyle={{
                    marginLeft: index == 0 ? SIZES.padding : SIZES.base,
                    marginRight: index == dummyData.categories.length - 1 ? SIZES.padding : 0
                   }}
                   onPress={() => navigation.navigate("CourseListing",{category: item, sharedElementPrefix: "Home"})}
                 />
            )}
           />
           </GestureHandlerRootView>

      </Section>
    )
  }

  function renderPopularCourses() {
    return (
      <Section
         title="Free Courses"
         containerStyle={{
          marginTop: 30
         }}
      >
          <GestureHandlerRootView>
        <FlatList
            data={dummyData.courses_list_2}
            listKey="PopularCourses"
            scrollEnabled={false}
            keyExtractor={item => `PopularCourses-${item.id}`}
            contentContainerStyle={{
              marginTop: SIZES.radius,
              paddingHorizontal: SIZES.padding
            }}
            renderItem={({item, index}) => (
                 <HorizontalCourseCard
                    course={item}
                    containerStyle={{
                      marginVertical: SIZES.padding,
                      marginTop: index == 0 ? SIZES.radius : SIZES.padding
                    }}
                 />
            )}
            ItemSeparatorComponent={() =>(
              <LineDivider
                  lineStyle={{
                    backgroundColor: COLORS.gray20
                  }}
              
              />
           )}
           />
           </GestureHandlerRootView>
      </Section>
    )
  }

  function renderHomeCategories(){
    return(
      <View
              style={{
              //  marginTop: SIZES.padding
              }}
           >
            {/* <Text
              style={{
                marginHorizontal: SIZES.padding,
                ...FONTS.h2,
                color: COLORS.black
              }}
            >
              Subject Categories
            </Text> */}
    
            <FlatList
                data={dummyData.HomeCatagory}
                numColumns={3}
                scrollEnabled={false}
                listKey="BrowseSubjects"
                keyExtractor={item => `BrowseSubjects-${item.id}`}
                contentContainerStyle={{
                  margin: SIZES.radius
                }}
                renderItem={({item, index}) => (
                  <View
                  style={{
                    flex: 1,
                    justifyContent: 'Center',
                    alignItems: 'center',
                }}
                  >
                   <HomeCard
                      //  sharedElementPrefix="Search"
                       category={item}
                       containerStyle={{
                        height: 100,
                        width: 120,
                        marginTop: SIZES.radius,
                        //marginLeft: (index + 1) % 2 == 0 ? SIZES.radius : SIZES.padding
                       }}
                      onPress={() => navigation.navigate(item.navigate, {
                         payment: item?.payment,
                      })}
                     />
                      </View>
                )}
               />
              
    
           </View>
    )
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      {renderHeader()}

      {/* {renderHomeCategories()} */}

      <ScrollView
       contentContainerStyle={{
        paddingBottom: 150
       }}
       showsVerticalScrollIndicator= {false}
      >
        {renderStartLearning()}

         {renderHomeCategories()}

        

        {renderCourses()}

        <LineDivider
           lineStyle={{
            marginVertical: SIZES.padding
           }}
        /> 

        {renderCategories()}

        {renderPopularCourses()}

      </ScrollView>
    </View>
  );
};

export default Home;


const styles = StyleSheet.create({
headerContainer: {
    backgroundColor: COLORS.primary,
    padding: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 5,
},
})
