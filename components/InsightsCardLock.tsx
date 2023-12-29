import React from 'react'
import {Text, Dimensions, View, StyleSheet} from 'react-native'
import InsightCurbLogo from './icons/InsightCurbLogo';
import Lock from './icons/Lock';

const [width, height] = [Dimensions.get('screen').width, Dimensions.get('screen').height];

const InsightsCard = () => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
    <View style={Styles.container}>
        <View style={Styles.logo_style}>
            <InsightCurbLogo/>
        </View>
        <View style={Styles.lock_icon}>
            <Lock/>
        </View>
        <Text style={Styles.text_style}>Check in <Text style={Styles.highlight}>three more</Text></Text>
        <Text style={Styles.text_style}><Text style={Styles.highlight}>times</Text> to unlock</Text>
        <Text style={Styles.text_style}>patterns of</Text>
        <Text style={Styles.text_style}>behaviour</Text>
    </View>
    </View>
  )
}

export default InsightsCard

const Styles=StyleSheet.create({
    container: {
        marginTop: 28,
        width: width*.9,
        height: height*.6,
        borderRadius: 18,
        backgroundColor: '#0D3F4A', 
        paddingRight: 18,
        alignItems: 'flex-end',
        marginBottom: 10
    }, 
    text_style: {
        // marginLeft: width*0.03,
        // marginTop: height*0.015,
        color: '#fff', 
        textAlign: 'right',
        fontFamily: 'Regular',
        fontSize: 32,
        letterSpacing: 1.5
    },
    logo_style: {
        marginTop: 25,
    },
    lock_icon: {
        marginTop: width*0.23,
        marginBottom: height*0.015
    }, 
    highlight: {
        color: "#33AE9C"
    }

})


