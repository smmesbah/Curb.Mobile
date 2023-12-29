import React from 'react'
import {Text, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

const width=Dimensions.get('screen').width;
const height=Dimensions.get('screen').height;

const AvoidComponent = ({text}) => {
  return (
        <View style={[Styles.container]}>
            <Text style={Styles.avoid_text}>Avoid</Text>
            <Text style={Styles.text_style}>{text}</Text>
        </View>
  )
}

export default AvoidComponent

const Styles=StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 20,
        elevation: 5,
        marginBottom: 15,
        marginHorizontal: width*0.08
    },
    avoid_text: {
        color: '#27284e',
        fontFamily: 'Medium',
        fontSize: 22,
    },
    text_style: {
        color: '#7844ff',
        fontFamily: 'Medium',
        fontSize: 42,
    },
})