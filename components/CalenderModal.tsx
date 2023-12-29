import { Text, Animated, TouchableOpacity, View, StyleSheet, Image, ImageBackground, Dimensions } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
// import Animated from 'react-native-reanimated';

const windowWidth = Dimensions.get('screen').width;

interface CalenderModalProps {
  calandermodalOpen: boolean,
  setCalanderModalOpen: any

}

const CalenderModal: React.FC<CalenderModalProps> = ({ calandermodalOpen, setCalanderModalOpen }) => {
  const scaleValue = useRef(new Animated.Value(0)).current;
  // const [drinkDays, setDrinkDays] = useState(['2023-12-02', '2023-12-15']);
  const [drinkDays, setDrinkDays] = useState([]);

  useEffect(() => {
    getDrinkFreeDays();
    toggleModal();
  }, [calandermodalOpen, drinkDays]);


  const toggleModal = () => {
    if (calandermodalOpen) {
      setCalanderModalOpen(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        // @ts-ignore
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

  //api calls
  const getDrinkFreeDays = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const res = await axios.get(`${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/home/drink-free-days-calender/${token}`);
      if (res.data.success) {
        setDrinkDays(res.data.data.drinkFreeDates);
        // setDrinkDays(res.data.data.drinkFreeDays);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View
      style={Styles.modalBackground}>
      <Animated.View style={[Styles.modalContainer, { transform: [{ scale: scaleValue }] }]}>
        {/* <ImageBackground
          source={require('../assets/images/ModalBackground.png')}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', padding: 0, margin: 0}}
          resizeMode='cover'
        > */}
        <View style={Styles.shareThoughts}>
          <Text style={Styles.shareThoughtsText}>Review Your <Text style={Styles.thoughtsText}>progress</Text></Text>
          <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            <TouchableOpacity onPress={() => setCalanderModalOpen(false)}>
              <Text style={{ color: '#B0B0B4' }}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={Styles.checkIn}>Review your overall month</Text>
        <View style={Styles.DrinkDays_Drank}>
          <View style={Styles.DrinkDays}>
            <Image source={require('../assets/icons/DrinkDays.png')} />
            <Text>Drink-free Days</Text>
          </View>
          <View style={Styles.DrinkDays}>
            <Image source={require('../assets/icons/Drank.png')} />
            <Text>Drinking days</Text>
          </View>
        </View>
        <View
          style={Styles.horizontal_line}
        />
        <Calendar
          onDayPress={(day) => {
            // console.log('selected day', day);
            // setDrinkDays((prevDrinkDays) => [...prevDrinkDays, day.dateString]);
          }}
          markedDates={{
            ...drinkDays.reduce((obj, day) => {
              // @ts-ignore
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    // marginTop: 120,
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
  horizontal_line: {
    borderBottomColor: '#f5f5f5',
    borderBottomWidth: 2,
    width: '100%',
    marginTop: 25,
    marginBottom: 10
  },


})