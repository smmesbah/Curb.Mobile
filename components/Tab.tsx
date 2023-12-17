import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from 'app/homeScreen';
import { Image, TouchableOpacity, View, Text, Dimensions, Keyboard } from 'react-native';
import { HomeIcon } from './icons/HomeIcon';
import DailyTaskIcon from './icons/DailyTaskIcon';
import InsightsIcon from './icons/InsightsIcon';
import AchievementsIcon from './icons/AchievementsIcon';
import React from 'react';
import { CheckInPlusIcon } from './icons/CheckInPlusIcon';
import Feather from 'react-native-vector-icons/Feather';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import Achievements from 'app/achievementsScreen/Achievements';

const Tabs=createBottomTabNavigator();
const { width, height } = Dimensions.get("screen")

const Tab = () => {

    const [keyboardVisible, setKeyboardVisible] = React.useState(false);

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    // Clean up listeners when component unmounts
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

    return (
        // <View
        // style={{height,width}}>
        <Tabs.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    // display: keyboardVisible? 'none': 'flex',
                    position: 'absolute',
                    elevation: 0,
                    backgroundColor: 'transparent',
                    height: 81,
                    borderTopColor: 'transparent',
                    width: '100%',
                },
                tabBarBackground: () => {
                    return (
                        <Image
                            source={require('../assets/images/NavigationBar.png')}
                            resizeMode='cover'
                            style={{
                                top: -20,
                                width: '100%'
                            }}
                        />
                    )
                },
            }}
        >
            <Tabs.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={require('../assets/icons/Home.png')}
                                style={{tintColor: focused?"#12303B": "#B0B0B4"}}
                            />
                        </View>
                    )
                }}
            />
            {/* <Tabs.Screen name="DailyTasks" component={Tasks}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={require('../assets/icons/DailyTasks.png')}
                                style={{tintColor: focused?"#12303B": "#B0B0B4"}}
                            />
                        </View>
                    )
                }}
            /> */}
            <Tabs.Screen name="CheckIn" component={Home}
                options={{
                    tabBarShowLabel: true,
                    tabBarIcon: ({focused}) => (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity
                            activeOpacity={0.9}
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
                        </TouchableOpacity>
                        </View>
                    ),
                }}
            />
            {/* <Tabs.Screen name="Achievements" component={Achievements}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../assets/icons/Achievements.png')}
                                style={{tintColor: focused?"#12303B": "#B0B0B4"}}
                            />
                        </View>
                    )
                }}
            /> */}
            {/* <Tabs.Screen name="Insights" component={Insights}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={require('../assets/icons/Insights.png')}
                                style={{tintColor: focused?"#12303B": "#B0B0B4"}}
                            />
                        </View>
                    )
                }}
            /> */}
        </Tabs.Navigator>
        // </View>

    )
}

export default Tab;