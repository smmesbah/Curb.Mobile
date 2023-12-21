import { Pressable, StyleSheet, Text, View, Image, ImageBackground, Dimensions, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { Slot, router } from 'expo-router'
import Feather from 'react-native-vector-icons/Feather';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;

const Layout = () => {
  const[focused, setFocused]=React.useState('home');
  return (
    <>
      <Slot/>
      <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
      {/* @ts-ignore */}
      <HideWithKeyboard style={{flex: 1}}>
      <ImageBackground 
          source={require('../../assets/images/NavigationBar.png')}
          style={{ width: '100%',height: windowHeight*.1}}
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
            onPress={() => {
                router.push('/homeScreen')
                setFocused('home')
            }}
        >
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image source={require('../../assets/icons/Home.png')} style={{width: 33, height: 33}}  tintColor={focused==='home'?'#12303B': '#B0B0B4'}/>
            </View>
        </Pressable>
        <Pressable
            onPress={() => {
                router.push('/homeScreen/tasks')
                setFocused('tasks')
            }}
        >
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../../assets/icons/DailyTasks.png')} style={{width: 33, height: 33}} tintColor={focused==='tasks'?'#12303B': '#B0B0B4'}/>
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
            onPress={() => {
                router.push('/homeScreen/achievement')
                setFocused('achievement')
            }}
        >
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../../assets/icons/Achievements.png')} style={{width: 33, height: 33}}  tintColor={focused==='achievement'?'#12303B': '#B0B0B4'}/>

            </View>
        </Pressable>
        <Pressable
            onPress={() => {
                router.push('/homeScreen/insights')
                setFocused('insights')
        }}
        >
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../../assets/icons/Insights.png')} style={{width: 33, height: 33}}  tintColor={focused==='insights'?'#12303B': '#B0B0B4'}/>
            </View>
        </Pressable>
        
        </View>
        </ImageBackground>
        </HideWithKeyboard>
        </View>
    </>
  )
}

export default Layout

const styles = StyleSheet.create({})