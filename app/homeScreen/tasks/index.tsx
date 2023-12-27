import axios from 'axios';
import TaskCard from 'components/TaskCard';
import { CheckedFilled } from 'components/icons/checkedFilled';
import React, { useEffect } from 'react'
import {View, Text, ScrollView, SafeAreaView, StyleSheet, Dimensions, Image, Touchable, Button, Pressable, TouchableOpacity} from 'react-native'


interface tasks{
    id: number,
    title: string,
    date: string,
    imageUri: any,
}

const windowWidth=Dimensions.get('screen').width;
const windowHeight=Dimensions.get('screen').height;

// const dummyValues=[
//     {
//         title: 'Play Basketball',
//         Description: 'Fri 25th, 2024',
//         imageUri: require('../../../assets/images/BasketBall.webp'),
//     },
//     {
//         title: 'Play Basketball',
//         Description: 'Fri 25th, 2024',
//         imageUri: require('../../../assets/images/BasketBall.webp'),
//     },
//     {
//         title: 'Play Basketball',
//         Description: 'Fri 25th, 2024',
//         imageUri: require('../../../assets/images/BasketBall.webp'),
//     },
//     {
//         title: 'Play Basketball',
//         Description: 'Fri 25th, 2024',
//         imageUri: require('../../../assets/images/BasketBall.webp'),
//     },
//     {
//         title: 'Play Basketball',
//         Description: 'Fri 25th, 2024',
//         imageUri: require('../../../assets/images/BasketBall.webp'),
//     }
// ]

const Tasks = () => {
    const [focused, setFocused]=React.useState('previous');
    const [previousTasks, setPreviousTasks]=React.useState<tasks[]>([]);
    const [upcomingTasks, setUpcomingTasks]=React.useState<tasks[]>([]);
    const [todaysTasks, setTodaysTasks]=React.useState<tasks[]>([]);

    useEffect(() => {
        fetchTasks();
    },[])

    //fetch tasks from backend
    const fetchTasks = async () => {
        try {
            const res = await axios.get(`${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/home/all-tasks/10`);
            const formattedTasks = res.data.data.map((taskItem: any) => {
                return {
                    id: taskItem.id,
                    title: taskItem.attributes.taskTitle,
                    date: taskItem.date, // Use the date format you have
                    imageUri: require('../../../assets/images/BasketBall.webp'), // Replace 'null' with the correct image URL
                };
            });
    
            const todayDate = new Date().toLocaleDateString();
            const previous = formattedTasks.filter((task:tasks) => new Date(task.date).toLocaleDateString() < todayDate);
            const today = formattedTasks.filter((task:tasks) => new Date(task.date).toLocaleDateString() === todayDate);
            const upcoming = formattedTasks.filter((task:tasks) => new Date(task.date).toLocaleDateString() > todayDate);
            
            // console.log("Previous", previous)
            // console.log("Today", today)
            // console.log("Upcoming", upcoming)
            setPreviousTasks(previous);
            setTodaysTasks(today);
            setUpcomingTasks(upcoming);
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <SafeAreaView
        style={{
            // height: windowHeight * 0.9,
            width: windowWidth,
        }}
    >
    <View style={[Styles.header_container, {backgroundColor: '#ecedea', paddingTop: windowHeight*.05,paddingBottom: 5}]}>
            <Text style={Styles.title}>Tasks</Text>
            
    </View>
    <ScrollView style={{backgroundColor: '#ecedea',}}>
        <View style={[Styles.header_container, {marginTop: 20}]}>
            <Text style={Styles.description}>Daily bitesize educational content built by top
            psychologists to help you understand yourself
            and your habits better</Text>
        </View>
        <View style={Styles.today_task_container}>
            <Image source={require('../../../assets/images/TasksImage.png')} style={Styles.image}/>
            <View style={Styles.today_task_right}>
                <View style={Styles.today_task_texts}>
                    <Text style={Styles.today_task_text}>Today's Task</Text>
                    <Text style={Styles.today_task_description}>{todaysTasks[0]?.title}</Text>
                </View>
                <View style={Styles.task_checked}>
                    <CheckedFilled/>
                </View>
            </View>
        </View>
        <View style={Styles.button_container}>
            
                <TouchableOpacity onPress={()=>setFocused('previous')}>
                    <View style={[Styles.previous, {backgroundColor: focused==='previous'? '#00053F': '#fff'}]}>
                        <Text style={[Styles.button_style, {color: focused==='previous'? '#fff': '#716E68'}]}>Previous</Text>
                    </View>
                </TouchableOpacity>
            
                <TouchableOpacity onPress={()=>setFocused('upcoming')}>
                    <View style={[Styles.upcoming, {backgroundColor: focused==='upcoming'? '#00053F': '#fff'}]}>
                        <Text style={[Styles.button_style, {color: focused==='upcoming'? '#fff': '#716E68'}]}>Upcoming</Text>
                    </View>
                </TouchableOpacity>
        </View>

        {focused==='previous' && 
            <View style={Styles.task_cards}>
                {previousTasks.map((item: tasks, index: any)=>
                    <View key={index}>
                    <TaskCard 
                        title={item.title}
                        description={item.date}
                        imageUri={item.imageUri}
                        Width={0.89}
                        focus='previous'
                    />
                    <View style={{height: 20}}/>
                    </View>
                )}
            </View>
        }
        {focused==='upcoming' && 
            <View style={Styles.task_cards}>
                {upcomingTasks.map((item, index)=>
                    <View key={index}>
                    <TaskCard 
                        title={item.title}
                        description={item.date}
                        imageUri={item.imageUri}
                        Width={0.89}
                        focus='upcoming'
                    />
                    <View style={{height: 20}}/>
                    </View>
                )}
            </View>
        }
        <View style={{height: windowHeight*0.19}}></View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Tasks

const Styles=StyleSheet.create({
    header_container:{
        flexDirection: 'column',
    }, 
    title:{
        fontFamily: 'Regular',
        fontSize: 28,
        color: '#080D09',
        textAlign: 'right',
        marginRight: windowWidth*.055,
    },
    description: {
        color: '#4E4F4E',
        fontFamily: 'Regular',
        fontSize: 17,
        paddingLeft: windowWidth*.09,
        paddingRight: windowWidth*.09, 
        lineHeight: 28,
        marginTop: 28,
        // letterSpacing: 1
    },
    image:{
        width: windowWidth*.35,
        height: windowHeight*.18,
        alignSelf: 'center',
        marginTop: windowHeight*.05,
        marginBottom: windowHeight*.05,
    },
    today_task_container: {
        flexDirection: 'row',
        width: windowWidth,
        height: windowHeight*.18,
        marginTop: 28
    },
    today_task_right: {
        backgroundColor: '#00053F',
        width: '100%',
        flexDirection: 'row',
    },
    today_task_text: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'Regular',
        letterSpacing: 0.5
    },
    today_task_description: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Regular',
        letterSpacing: 1,
    }, 
    today_task_texts: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 20,
    }, 
    task_checked: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 20, 
    }, 
    previous: {
        height: 45,
        width: windowWidth*0.445,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12
    },
    upcoming: {
        height: 45,
        width: windowWidth*0.445,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12
    }, 
    button_style: {
        fontSize: 17,
        fontFamily: 'Regular',
        letterSpacing: 1
    }, 
    task_cards: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

})