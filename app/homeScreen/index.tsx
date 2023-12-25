import { View, Text, Image, Keyboard, Platform, Dimensions, Modal, TouchableOpacity, Alert, ScrollView, SafeAreaView, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react'
import Styles from './Home.style';
import DrinkFreeDays from 'components/DrinkFreeDays';
import CaloriesAvoidedWidget from 'components/CaloriesAvoidedWidget';
import MotivationWidget from 'components/MotivationWidget';
import styles from './Home.style';
import TaskCard from 'components/TaskCard';
import CalenderModal from 'components/CalenderModal';
import { LinearGradient } from 'expo-linear-gradient';
import { Logo } from '../../components/icons/Logo';
import { CalendarIcon } from 'components/icons/CalendarIcon';
import MyProfile from 'app/myProfileScreen/MyProfile';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

interface taskMetaData {
  id: number,
  attributes: {
    taskTitle: string,
    taskType: string,
    taskDescription: string,
  }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const dummyValues = [
  {
    title: 'Play Basketball',
    Description: 'Play basketball with friends',
    imageUri: require('../../assets/images/BasketBall.webp'),
  }
]


const Home = () => {

  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [calandermodalOpen, setCalanderModalOpen] = useState(false);
  const [task, setTask] = useState<taskMetaData>();

  useEffect(() => {
    // const keyboardDidShowListener = Keyboard.addListener(
    //   Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
    //   () => {
    //     setKeyboardOpen(true);
    //     console.log('keyboard open');
    //   }
    // );
    // const keyboardDidHideListener = Keyboard.addListener(
    //   Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
    //   () => {
    //     setKeyboardOpen(false);
    //     console.log('keyboard closed');
    //   }
    // );
    fetchThisWeekTasks();


    // return () => {
    //   keyboardDidShowListener.remove();
    //   keyboardDidHideListener.remove();
    // };
    const token_verification=async()=>{
    const token=await AsyncStorage.getItem('token');
    // console.log("token",token)
    if(token===null){
      router.replace('/login')
    }
  }
  token_verification();
  }, []);

  // api call for today's task
  const fetchThisWeekTasks = async () => {
    try {
      const userId = 1
      const res = await axios.get(`${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/home/this-week-task/${userId}`)
      // console.log(res.data.data[0]);
      if (res.data.success) {
        setTask(res.data.data[0])
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView>
      <ScrollView style={{ backgroundColor: '#ecedea' }}
        automaticallyAdjustContentInsets={false}
        automaticallyAdjustKeyboardInsets={false}
      >
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: keyboardOpen ? -200 : 10 }}>
          <LinearGradient
            colors={['#377C8B', '#0D3F4A', '#0D3F4A']}
            locations={[0.0, 0.2, 0.6]}
            style={[Styles.container]}
          >
            <View style={[Styles.profile_container]}>
              <View style={Styles.curb_logo}>
                <Logo />
              </View>
              <View style={{
                flex: 1,
                justifyContent: 'flex-end',
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                marginTop: 20,
                gap: 10
              }}>
                <TouchableOpacity onPress={() => setCalanderModalOpen(true)}>
                  <CalendarIcon />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/myProfileScreen/MyProfile')}>
                  <View style={Styles.home_profile}>
                    <Text style={Styles.home_profile_text}>CJ</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={Styles.drinkFreeDays}>
              <DrinkFreeDays />
            </View>
            <View>
              <CaloriesAvoidedWidget />
            </View>
            <View>
              <View style={{ paddingHorizontal: 15 }}>
                <Text style={[styles.task_text, { backgroundColor: 'transparent' }]}>Today's task</Text>
                <View>
                  {/* {dummyValues.map((item, index)=> */}
                  {
                    task &&
                    <TaskCard
                      // key={index}
                      title={task?.attributes.taskTitle}
                      description={task.attributes.taskDescription}
                      imageUri={require('../../assets/images/BasketBall.webp')}
                      Width={0.83}
                      focus='home'
                    />
                  }
                  {/* )} */}
                </View>
              </View>
            </View>
            {keyboardOpen && (
              <View
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(3, 53, 64, 0.80)', // semi-transparent background
                }}
              />
            )}
          </LinearGradient>
        </View>

        <MotivationWidget />
        <Modal visible={calandermodalOpen} transparent>
          <CalenderModal calandermodalOpen={calandermodalOpen} setCalanderModalOpen={setCalanderModalOpen} />
        </Modal>
        <View style={{ height: windowHeight * 0.15 }}></View>
      </ScrollView>

    </SafeAreaView>

  )
}

export default Home

