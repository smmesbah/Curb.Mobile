import Level1Tree from 'components/icons/Level1Tree';
import Level2Tree from 'components/icons/Level2Tree';
import Level3Tree from 'components/icons/Level3Tree';
import LevelTrees from 'components/ui/LevelTrees';
import React from 'react'
import { View, Text, StyleSheet, Animated, Dimensions, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import InfoIcon from 'components/icons/InfoIcon';
import ProgressCircleText from 'components/ui/ProgressCircleText';
import AchievementDoneIcon from 'components/icons/AchievementDoneIcon';
import DaysCheckedIn from 'components/ui/DaysCheckedIn';
import TaskCompleted from 'components/ui/TaskCompleted';
import { Tooltip } from 'react-native-elements';

const width=Dimensions.get('screen').width;
const height=Dimensions.get('screen').height;

const day=[1,3,5,7,9];
const currDay=1

const Achievements = () => {
  const [focused, setFocused]=React.useState('level1')
  const [progress, setProgress] = React.useState(.3);
  return (
    <SafeAreaView
        style={{
            // height: height * 0.9,
            width: width,
        }}
    >
        <View style={Styles.container2}>
            <Text style={Styles.achievement_text}>Achievements</Text>
        </View>
        <ScrollView style={{}}>
            <View style={{backgroundColor: '#ECEDE9'}}>
                <View style={Styles.container}>
                    {/* <Text style={Styles.achievement_text}>Achievements</Text> */}
                    <View style={Styles.total_badges_ellipse}>
                        <Text style={Styles.badge_no}>17</Text>
                        <Text style={Styles.badge_text}>Total Badges</Text>
                        <Text style={Styles.badge_text}>Earned</Text>
                    </View>
                    <Text style={Styles.level_text}>You've reached Level 1</Text>
                    <Text style={Styles.tree_text}>Like this sapling, you're at the begining of your journey</Text>
                    <View style={Styles.trees}>
                        <LevelTrees tree={'level1'} focused={focused}/>
                        <LevelTrees tree={'level2'} focused={focused}/>
                        <LevelTrees tree={'level3'} focused={focused}/>
                    </View>
                    <View style={Styles.progress_bar}>
                        <Progress.Bar progress={progress} width={width*.85} height={20} color={'#33AE9C'} style={Styles.progress_bar_style} />
                        <Text style={Styles.progress_bar_text_style}>You're just 5 badges away from branching out into Level 2 </Text>
                    </View>
                </View>
            </View>

            <View>
                <View style={Styles.streak_text_container}>
                    <Text style={Styles.streak_text}>Daily Streak</Text>
                    <Tooltip
                     popover={<View><Text style={Styles.popover_text}>This badge celebrates how many days </Text><Text style={Styles.popover_text}>you open the app in a row</Text></View>}
                     backgroundColor='#fff'
                     width={width*0.8}
                     >
                        <InfoIcon/>
                    </Tooltip>
                    {/* <TouchableOpacity>
                        <InfoIcon/>
                    </TouchableOpacity> */}
                </View>
                <View>
                    <FlatList
                        data={day}
                        renderItem={({item}) => 
                        <View style={Styles.achievements_done}>
                            <Progress.Circle 
                            progress={currDay/item} 
                            size={110} 
                            color={'#33AE9C'} 
                            unfilledColor={'#ECEDE9'} 
                            borderWidth={0}
                            thickness={7}
                            strokeCap='round'
                            showsText={true}
                            formatText={() => <ProgressCircleText day={item} fullfilled={currDay>=item?true:false}/>}
                            style={{marginLeft: item===1? 20: 0, marginRight: item===day.length? 20: 0}}/>

                            {currDay>=item?
                                <View style={{marginTop: -35, alignItems: 'flex-end'}}>
                                    <AchievementDoneIcon color="#33AE9C"/>
                                </View>
                            : <View style={{height: 7}}/>}
                            <Text style={[Styles.day_text, {color: currDay>=item? '#33AE9C' :'#9d9e9c',paddingLeft: currDay>=item? 10: 0 }]}>{item} Day</Text>
                        </View> 
                        }
                        keyExtractor={item => item.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{marginTop: 20, marginBottom: 20}}
                        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                        ItemSeparatorComponent={() => <View style={{width: 15}}/>}
                    />
                </View> 
            </View>
            <View>
                <View style={Styles.streak_text_container}>
                    <Text style={Styles.streak_text}>Days Checked In</Text>
                    <Tooltip
                     popover={<View><Text style={Styles.popover_text}>This badge celebrates how many days </Text><Text style={Styles.popover_text}>you check in over the month</Text></View>}
                     backgroundColor='#fff'
                     width={width*0.8}
                     >
                        <InfoIcon/>
                    </Tooltip>
                    {/* <TouchableOpacity>
                        <InfoIcon/>
                    </TouchableOpacity> */}
                </View>
                <View>
                    <FlatList
                        data={day}
                        renderItem={({item}) =>
                            <View style={Styles.achievements_done}>
                                <Progress.Circle 
                                progress={currDay/item} 
                                size={110} 
                                color={'#7844FF'} 
                                unfilledColor={'#ECEDE9'} 
                                borderWidth={0}
                                thickness={7}
                                strokeCap='round'
                                showsText={true}
                                formatText={() => <DaysCheckedIn day={item} fullfilled={currDay>=item?true:false}/>}
                                style={{marginLeft: item===1? 20: 0, marginRight: item===day.length? 20: 0}}/>

                                {currDay>=item?
                                    <View style={{marginTop: -35, alignItems: 'flex-end'}}>
                                        <AchievementDoneIcon color="#7844FF"/>
                                    </View>
                                : <View style={{height: 7}}/>}
                                <Text style={[Styles.day_text, {color: currDay>=item? '#7844FF' :'#9d9e9c',paddingLeft: currDay>=item? 10: 0 }]}>{item} Day</Text>
                            </View> 
                        }
                        keyExtractor={item => item.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{marginTop: 20, marginBottom: 20}}
                        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                        ItemSeparatorComponent={() => <View style={{width: 15}}/>}
                    />
                </View> 
            </View>
            <View>
                <View style={Styles.streak_text_container}>
                    <Text style={Styles.streak_text}>Tasks completed</Text>
                    <Tooltip
                     popover={<View><Text style={Styles.popover_text}>This badge celebrates how many tasks </Text><Text style={Styles.popover_text}>you completed</Text></View>}
                     backgroundColor='#fff'
                     width={width*0.8}
                     >
                        <InfoIcon/>
                    </Tooltip>
                    {/* <TouchableOpacity>
                        <InfoIcon/>
                    </TouchableOpacity> */}
                </View>
                <View>
                    <FlatList
                        data={day}
                        renderItem={({item}) => 
                        <View style={Styles.achievements_done}>
                            <Progress.Circle 
                            progress={currDay/item} 
                            size={110} 
                            color={'#E64528'} 
                            unfilledColor={'#ECEDE9'} 
                            borderWidth={0}
                            thickness={7}
                            strokeCap='round'
                            showsText={true}
                            formatText={() => <TaskCompleted day={item} fullfilled={currDay>=item?true:false}/>}
                            style={{marginLeft: item===1? 20: 0, marginRight: item===day.length? 20: 0}}/>

                            {currDay>=item?
                                <View style={{marginTop: -35, alignItems: 'flex-end'}}>
                                    <AchievementDoneIcon color="#E64528"/>
                                </View>
                            : <View style={{height: 7}}/>}
                            <Text style={[Styles.day_text, {color: currDay>=item? '#E64528' :'#9d9e9c',paddingLeft: currDay>=item? 10: 0 }]}>{item} Day</Text>
                        </View> 
                        }
                        keyExtractor={item => item.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{marginTop: 20, marginBottom: 20}}
                        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                        ItemSeparatorComponent={() => <View style={{width: 15}}/>}
                    />
                </View> 
            </View> 
            <View style={{height: height*0.19}}></View>           
        </ScrollView>
    </SafeAreaView>
  )
}

export default Achievements

const Styles=StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: ,
        backgroundColor: '#ECEDE9',
        borderBottomLeftRadius: 18,
        borderBottomRightRadius: 18
    },
    container2: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: height*.02,
        paddingBottom: 5,
        backgroundColor: '#ECEDE9',
    },
    achievement_text:{
        color: '#080D09',
        fontFamily: 'Regular',
        fontSize: 28,
        letterSpacing: 0.5,
    },
    total_badges_ellipse:{
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0D3F4A',
        height: 120,
        width: 120,
        borderRadius: 60,
        borderWidth: 4.92,
        borderColor: '#377C8B',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 10,
    },
    badge_no: {
        color: '#fff',
        fontFamily: 'Regular',
        textAlign: 'center',
        fontSize: 39.623,
        lineHeight: 49.548
    },
    badge_text: {
        color: '#fff',
        fontFamily: 'Regular',
        fontSize: 15.849,
    },
    level_text: {
        marginTop: 26.63,
        color: '#0D3F4A',
        fontFamily: 'Regular',
        fontSize: 24
    },
    tree_text: {
        marginTop: 16,
        color: '#4E4F4E',
        fontFamily: 'Regular',
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: width*.01,
    },
    trees: {
        marginTop: 27.35,
        flexDirection: 'row',
        gap: 32,
        alignItems: 'center'
    },
    progress_bar: {
        marginTop: 38,
        justifyContent:'center',
        alignItems: 'center',
        marginBottom: 26
    },
    progress_bar_style:{
        borderRadius: width*.85,
        borderWidth: 0,
        backgroundColor: '#fff'
    },
    progress_bar_text_style: {
        marginTop: 15,
        color: '#080D09',
        fontFamily: 'Regular',
        fontSize: 14,
        textAlign: 'center',
        letterSpacing: .19,
        marginHorizontal: width*.03,
    },
    streak_text_container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
        marginTop: 28
    },
    streak_text: {
        color: '#080D09',
        fontFamily: 'Regular',
        fontSize: 18,
        marginLeft: 25
    },
    achievements_done:{
        flexDirection: 'column',
        gap: 5,
    },
    day_text: {
        textAlign: 'center',
        fontFamily: 'Regular',
        fontSize: 18,
    },
    popover_text: {
        color: "#b0b0b4",
        fontFamily: 'Regular',
        fontSize: 14,
    }
})