import React from 'react'
import {Text, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const width=Dimensions.get('screen').width;
const height=Dimensions.get('screen').height;

const DrinkScore = () => {
  return (
    <>
    <LinearGradient
        colors={['#0D3F4A','#196163' ]}
        locations={[0.3 ,1]}
        style={[Styles.container]}
    >
        <Text style={Styles.score_text_style}><Text style={Styles.highlighted_text}>15/</Text>40</Text>
        <Text style={Styles.text_style}>Your drinking score</Text>
        <TouchableOpacity>
            <View style={Styles.btn_style}>
                <Text style={Styles.btn_text}>Check your latest score</Text>
            </View>
        </TouchableOpacity>
    </LinearGradient>
    </>

  )
}

export default DrinkScore

const Styles=StyleSheet.create({
    container: {
        width: width*0.8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 25,
        borderRadius: 18
    },
    score_text_style: {
        marginTop: 10,
        color: '#fff',
        fontFamily: 'Regular',
        fontSize: 40
    },
    highlighted_text: {
        color: '#33AE9C'
    },
    text_style: {
        color: '#fff',
        fontFamily: 'Regular',
        fontSize: 14,
    },
    btn_style: {
        marginTop: 25,
        width: width*0.5,
        borderWidth: 0.5,
        borderColor: '#33AE9C',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 9,
        borderRadius: 12,
        backgroundColor: 'rgba(1, 127, 112, 0.10)'
    },
    btn_text: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Regular',
        fontSize: 14,
    }
})