import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const windowWidth=Dimensions.get('screen').width;
const windowHeight=Dimensions.get('screen').height;

const CaloriesAvoidedWidget = () => {
  return (
    <View style={styles.container}>
        <View style={styles.text_container}>
            <Text style={styles.text_number}>£56</Text>
            
            <Text style={styles.text_info}>Saved</Text>
            <Text style={styles.text_info}> </Text>
        </View>
        <View style={styles.text_container}>
            <Text style={styles.text_number}>1200</Text>
            <Text style={styles.text_info}>calories</Text>
            <Text style={styles.text_info}>avoided</Text>
        </View>
        <View style={styles.text_container}>
            <Text style={styles.text_number}>20</Text>
            <Text style={styles.text_info}>units</Text>
            <Text style={styles.text_info}>saved</Text>
        </View>
    </View>
  )
}

export default CaloriesAvoidedWidget

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 15,
        height: 'auto',
        backgroundColor: 'transparent',
        borderRadius: 15,
        marginTop: windowHeight*.11,
        // paddingTop: windowHeight*.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text_container: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    text_number: {
        fontSize: 28,
        fontFamily: 'Regular',
        color: '#fff'
    },
    text_info: {
        fontSize: 14,
        fontFamily: 'Regular',
        fontStyle: 'normal',
        lineHeight: 20,
        fontWeight: '400',
        color: '#fff',
        letterSpacing: 0.14,
    }
    }
)