import DailyCheckInIcon from 'components/icons/DailyCheckInIcon'
import DailyStreakIcon from 'components/icons/DailyStreakIcon'
import DailyStreakNotFullfilled from 'components/icons/DailyStreakNotFullfilled'
import DayCheckedIn from 'components/icons/DaysCheckedIn'
import DaysNotCheckedIn from 'components/icons/DaysNotCheckedIn'
import TaskCompleteIcon from 'components/icons/TaskCompleteIcon'
import TaskIncompleteIcon from 'components/icons/TaskIncompleteIcon'
import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

interface ProgressCircleTextProps {
    day: number,
    fullfilled: boolean,
}

const TaskCompleted: React.FC<ProgressCircleTextProps> = ({day, fullfilled}) => {
  return (
        <View style={{marginTop: -7}}>
            <View style={[Styles.container, {backgroundColor: fullfilled? '#2E0A04': 'transparent'}]}>
                {/* <Text style={[Styles.text_style, {color: fullfilled? '#fff' : '#9D9E9C'}]}>{day}</Text>
                <Text style={[Styles.text_style, {color: fullfilled? '#fff' : '#9D9E9C'}]}>Day</Text> */}
                {fullfilled?<TaskCompleteIcon/>:<TaskIncompleteIcon/>}
                
            </View>
        </View>
  )
}

export default TaskCompleted

const Styles = StyleSheet.create({
    container: {
        height: 90,
        width: 90,
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_style: {
        marginTop: -5,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Regular',
        fontSize: 25
    }
})