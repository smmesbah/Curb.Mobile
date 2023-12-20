import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from 'app/homeScreen';
import { Image, TouchableOpacity, View, Text, Dimensions, Keyboard, Pressable, ImageBackground } from 'react-native';
import { HomeIcon } from './icons/HomeIcon';
import DailyTaskIcon from './icons/DailyTaskIcon';
import InsightsIcon from './icons/InsightsIcon';
import AchievementsIcon from './icons/AchievementsIcon';
import React from 'react';
import { CheckInPlusIcon } from './icons/CheckInPlusIcon';
import Feather from 'react-native-vector-icons/Feather';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import Achievements from 'app/achievementsScreen/Achievements';
import { router } from 'expo-router';

const Tabs=createBottomTabNavigator();
const windowWidth=Dimensions.get('screen').width;
const windowHeight=Dimensions.get('screen').height;

const Tab = () => {
    <ImageBackground 
          source={require('../assets/images/NavigationBar.png')}
          style={{position: 'absolute', width: '100%',height: windowHeight*.1, top: windowHeight*0.9}}
          resizeMode='cover'
        >
      <View
        style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            top: windowHeight*0.1-75
        }}
      >
        
        <Pressable
            onPress={() => router.push('/homeScreen')}
        >
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('../assets/icons/Home.png')} style={{width: 30, height: 30}}  tintColor={'#12303B'}/>
            </View>
        </Pressable>
        <Pressable
            onPress={() => router.push('/homeScreen/tasks')}
        >
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../assets/icons/DailyTasks.png')} style={{width: 30, height: 30}} tintColor={'#12303B'}/>
            </View>
        </Pressable>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Pressable
            style={{
                top: -20,
                justifyContent: 'center',
                alignItems: 'center',
                height: 70,
                width: 70,
            }}
        >
            <View
                style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    backgroundColor: '#1C3D48',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Feather name="plus" size={35} color="#fff" />
            </View>
        </Pressable>
        </View>
        <Pressable
            onPress={() => router.push('/homeScreen/achievement')}
        >
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../assets/icons/Achievements.png')} style={{width: 30, height: 30}}  tintColor={'#12303B'}/>

            </View>
        </Pressable>
        <Pressable
            onPress={() => router.push('/homeScreen/insights')}
        >
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../assets/icons/Insights.png')} style={{width: 30, height: 30}}  tintColor={'#12303B'}/>
            </View>
        </Pressable>
        
      </View>
      </ImageBackground>
    

}

export default Tab;