import React from 'react'
import { View,StyleSheet, Dimensions,Text } from 'react-native'
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const Slider = () => {
    
    const current_date= new Date();
    const days_in_month= new Date(current_date.getFullYear(), current_date.getMonth()+1, 0).getDate();
    const percentage= current_date.getDate()/31*100;
    const drinking_days=[2,5,9,14]
    const monthNames = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
      ];

  return (
    <>
    <View
        style={styles.days}
    >
        <Text>1</Text>
        <Text>{monthNames[current_date.getMonth()]}</Text>
        <Text>{days_in_month}</Text>
    </View>
    <View
        style={styles.outer_view}
    >
        <View style={[styles.inner_view, { width: `${percentage}%` }]}>
            {drinking_days.map((day,index)=>(
                <View
                key={index}
                style={[styles.drinking_days, {width: (windowWidth-40)/31, left: (329/31)*day}]}>
                </View>
            ))}   
        </View>

    </View>
    </>
  )
}

export default Slider

const styles = StyleSheet.create({
    outer_view:{
        width: windowWidth-40,
        height: 15,
        // backgroundColor: '#cbc6d2',
        borderRadius: 10,

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
        backgroundColor: '#cbc6d2'
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
        width: windowWidth-40,
        marginTop: 5,
        marginBottom: 9,
        height: '100%'
    }
    
})