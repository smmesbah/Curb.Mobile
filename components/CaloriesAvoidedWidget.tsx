import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const windowWidth=Dimensions.get('window').width;

const CaloriesAvoidedWidget = () => {
  return (
    <View style={styles.container}>
        <View style={styles.text_container}>
            <Text style={styles.text_number}>$37</Text>
            <Text style={styles.text_info}>Money saved</Text>
        </View>
        <View style={styles.text_container}>
            <Text style={styles.text_number}>1200</Text>
            <Text style={styles.text_info}>Calories avoided</Text>
        </View>
        <View style={styles.text_container}>
            <Text style={styles.text_number}>20</Text>
            <Text style={styles.text_info}>Units saved</Text>
        </View>
    </View>
  )
}

export default CaloriesAvoidedWidget

const styles = StyleSheet.create({
    container: {
        width: windowWidth-40,
        height: 'auto',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        marginTop: 20,
        paddingTop: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text_container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_number: {
        fontSize: 27.82,
        fontWeight: '700',
    },
    text_info: {
        fontSize: 14,
        fontWeight: '400',
    }
    }
)