import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const ProgressCircleText = ({day, fullfilled}) => {
  return (
        <View style={[Styles.container, {backgroundColor: fullfilled? '#0D3F4A': 'transparent'}]}>
            <Text style={[Styles.text_style, {color: fullfilled? '#fff' : '#9D9E9C'}]}>{day}</Text>
            <Text style={[Styles.text_style, {color: fullfilled? '#fff' : '#9D9E9C'}]}>Day</Text>
        </View>
  )
}

export default ProgressCircleText

const Styles = StyleSheet.create({
    container: {
        height: 90,
        width: 90,
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_style: {
        marginTop: -5,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Regular',
        fontSize: 25
    }
})