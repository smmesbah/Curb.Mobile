import { Text, Animated, TouchableOpacity, View, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Calendar } from 'react-native-calendars';
// import Animated from 'react-native-reanimated';

const windowWidth=Dimensions.get('screen').width;

const CalenderModal = ({calandermodalOpen, setCalanderModalOpen}) => {
    const scaleValue = useRef(new Animated.Value(0)).current;
    const [drinkDays, setDrinkDays] = useState(['2023-12-01','2023-12-15']);

    useEffect(() => {
        toggleModal();
      }, [calandermodalOpen,drinkDays]);
      const toggleModal = () => {
        if (calandermodalOpen) {
          setCalanderModalOpen(true);
          Animated.spring(scaleValue, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }).start();
        } else {
          setTimeout(() => setCalanderModalOpen(false), 200);
          Animated.timing(scaleValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }
      };
  return (
    <View
    style={Styles.modalBackground}>
    <Animated.View style={[Styles.modalContainer,{transform: [{scale: scaleValue}]}]}>
    {/* <ImageBackground
          source={require('../assets/images/ModalBackground.png')}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', padding: 0, margin: 0}}
          resizeMode='cover'
        > */}
        <View style={Styles.shareThoughts}>
            <Text style={Styles.shareThoughtsText}>Share Your <Text style={Styles.thoughtsText}>Thoughts</Text></Text>
            <View style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
            <TouchableOpacity onPress={()=>setCalanderModalOpen(false)}>
                <Text style={{color: '#B0B0B4'}}>X</Text>
            </TouchableOpacity>
            </View>
        </View>
        <Text style={Styles.checkIn}>Select a day to review your overall check in</Text>
        <View style={Styles.DrinkDays_Drank}>
            <View style={Styles.DrinkDays}>
                <Image source={require('../assets/icons/DrinkDays.png')}/>
                <Text>Drink Days</Text>
            </View>
            <View style={Styles.DrinkDays}>
                <Image source={require('../assets/icons/Drank.png')}/>
                <Text>Drank</Text>
            </View>
        </View>
        <View
                style={Styles.horizontal_line}
        />
        <Calendar
        onDayPress={(day) => {
            console.log('selected day', day);
            setDrinkDays((prevDrinkDays) => [...prevDrinkDays, day.dateString]);
        }}
        markedDates={{
            ...drinkDays.reduce((obj, day) => {
                obj[day] = { selected: true, selectedColor: '#302151' };
                return obj;
              }, {}),
        }}
        renderArrow={(direction) => {
            return (
              <Image
                source={
                  direction === 'left'
                    ? require('../assets/icons/ArrowLeft.png')
                    : require('../assets/icons/ArrowRight.png')
                }
                style={{
                    tintColor: '#302151',
                }}
              />
            );
          }}
        // markingType='custom'
        // markedDates={{
        //     '2023-12-01': {
        //         customStyles: {
        //           container: {
        //             backgroundColor: 'green',
        //             borderRadius: 0,
        //           },
        //           text: {
        //             color: 'black',
        //             fontWeight: 'bold'
        //           }
        //         }
        //       },
        //       '2023-12-15': {
        //         customStyles: {
        //           container: {
        //             backgroundColor: 'white',
        //             elevation: 2
        //           },
        //           text: {
        //             color: 'blue'
        //           }
        //         }
        //       }
        // }}
        />
        {/* </ImageBackground> */}
    </Animated.View>

    </View>
  )
}

export default CalenderModal

const Styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    modalContainer: {
        marginTop: 120,
        width: '80%',
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
        paddingTop: 10,
        paddingBottom: 30,
        borderRadius: 20,
        elevation: 20,
    }, 
    shareThoughts: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    shareThoughtsText: {
        paddingTop: 30,
        fontSize: 20,
        fontWeight: '400',
        color: '#302151',
    },
    thoughtsText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#5F38B2'
    },
    checkIn: {
        fontSize: 14,
        fontWeight: '400',
        color: '#B0B0B4',
        marginTop: 10,
    },
    DrinkDays_Drank: {
        marginTop: 15,
        flexDirection: 'row',
        gap: 30
    },
    DrinkDays: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        justifyContent: 'center'
    },
    horizontal_line:{
        borderBottomColor: '#f5f5f5',
        borderBottomWidth: 2,
        width: '100%',
        marginTop: 25,
        marginBottom: 10
    },


})