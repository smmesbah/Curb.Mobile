import React from 'react'
import {View,Text, StyleSheet} from 'react-native';
import { COLORS } from 'constants/Constants';
import Slider from 'components/ui/Slider';

const DrinkFreeDays = () => {
  return (
    <View style={{justifyContent: 'flex-start'}}>
        <View
            style={Styles.container}
        >
            <Text
                style={Styles.number_style}
            >
                14
            </Text>
            <Text
                style={Styles.text_style}
            >
                Drink -Free Days
            </Text>
        </View>
        <View style={{
            height: 15,
        }}>
        <Slider/>
        </View>
        
    </View>
  )
}

export default DrinkFreeDays

const Styles=StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 5
    },
    number_style: {
        fontSize: 60,
        fontFamily: 'Regular',
        lineHeight: 78.12,
        color: '#fff'
    }, 
    text_style: {
        fontSize: 18,
        fontFamily: 'Regular',
        lineHeight: 31.25,
        paddingTop: 10,
        color: '#fff'
    }
})