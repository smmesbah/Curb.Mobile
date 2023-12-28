import React from 'react'
import { View,StyleSheet, Dimensions,Text } from 'react-native'
const windowWidth=Dimensions.get('screen').width;
const windowHeight=Dimensions.get('screen').height;
const Slider = () => {
    
    const current_date= new Date();
    const days_in_month= new Date(current_date.getFullYear(), current_date.getMonth()+1, 0).getDate();
    const percentage= current_date.getDate()/31*100;
    const drinking_days=[2,5,6]
    const monthNames = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
      ];

  return (
    <>
    
    <View
        style={styles.outer_view}
    >
        <View style={[styles.inner_view, { width: `${percentage}%` }]}>
            {drinking_days.map((day,index)=>(
                <View
                key={index}
                style={[styles.drinking_days, {width: 5.5, left: (329/31)*day}]}>
                </View>
            ))}   
        </View>
        <View
        style={styles.days}
    >
        <Text style={styles.days_text}>1</Text>
        <Text style={styles.days_text}>{monthNames[current_date.getMonth()]}</Text>
        <Text style={styles.days_text}>{days_in_month}</Text>
    </View>

    </View>
    </>
  )
}

export default Slider

const styles = StyleSheet.create({
    outer_view:{
        marginTop: windowHeight*.02,
        width: windowWidth*.81,
        height: windowHeight*.023,
        backgroundColor: '#27535d',
        borderRadius: 18.5,

        borderBlockColor: '#cecdc9',
        borderLeftColor: '#cecdc9',
        borderRightColor: '#cecdc9',
        borderWidth: 1,
    },
    inner_view:{
        height: '100%',
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: '#33AE9C'
    },
    drinking_days: {
        height: '100%',
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: '#ffffff'

    },
    days:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        // width: windowWidth-40,
        marginTop: 12,
        marginBottom: 9,
        height: '100%',
    },
    days_text: {
        color: '#fff',
        fontFamily: 'Regular',
    }
    
})