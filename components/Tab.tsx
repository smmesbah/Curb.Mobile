import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from 'app/homeScreen/Home';
import { Image, TouchableOpacity, View, Text, Dimensions } from 'react-native';

const Tabs=createBottomTabNavigator();
const { width, height } = Dimensions.get("screen")

const Tab = () => {
    return (
        <View style={{
            width,
            height,
        }}>
        <Tabs.Navigator
            screenOptions={{
                // tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
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
                            height={100}
                            style={{
                                top: -20,
                                width: '100%'
                            }}
                        />
                    )
                }
            }}
        >
            <Tabs.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            source={require('../assets/icons/Home.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused? '#7844ff' : '#9fa0ac'
                            }}
                            
                        />
                        <Text 
                            style={{
                                color: focused? '#7844ff' : '#9fa0ac', 
                                fontSize: 12,
                            }}
                        >
                            Home
                        </Text>
                        </View>
                    )
                }}
            />
            <Tabs.Screen name="DailyTasks" component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            source={require('../assets/icons/DailyTasks.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused? '#7844ff' : '#9fa0ac'
                            }}
                        />
                        <Text style={{color: focused? '#7844ff' : '#9fa0ac', fontSize: 12}} numberOfLines={1}>Daily Tasks</Text>
                        </View>
                    )
                }}
            />
            <Tabs.Screen name="CheckIn" component={Home}
                options={{
                    tabBarShowLabel: true,
                    tabBarIcon: ({focused}) => (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={{
                                top: -24,
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 55,
                                width: 55,
                            }}
                        >
                            <View
                                style={{
                                    width: 57.91,
                                    height: 57.91,
                                    borderRadius: 55/2,
                                    backgroundColor: '#7844ff',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Text style={{
                                    fontSize: 45,
                                    color: '#ffffff',
                                }}>+</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={{color: focused? '#7844ff' : '#9fa0ac', fontSize: 12, top: -13}}>Check In</Text>
                        </View>
                    ),
                }}
            />
            <Tabs.Screen name="Achievements" component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            source={require('../assets/icons/Achievements.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused? '#7844ff' : '#9fa0ac'
                            }}
                        />
                        <Text style={{color: focused? '#7844ff' : '#9fa0ac', fontSize: 12}}>Achievements</Text>
                        </View>
                    )
                }}
            />
            <Tabs.Screen name="Insights" component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            source={require('../assets/icons/Insights.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused? '#7844ff' : '#9fa0ac'
                            }}
                        />
                        <Text style={{color: focused? '#7844ff' : '#9fa0ac', fontSize: 12}}>Insights</Text>
                        </View>
                    )
                }}
            />
        </Tabs.Navigator>
        </View>
    )
}

export default Tab;