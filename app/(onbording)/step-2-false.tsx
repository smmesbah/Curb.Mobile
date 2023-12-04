import { View, Text, SafeAreaView, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Slider from 'component/Slider'

const Onbording2 = () => {
    const handleNextPress = () => {
        alert('Next');
    }
    return (
        <SafeAreaView style={styles.container}>
            <Slider />

            <Text style={styles.text}>
                Alcohol disrupts the delicate balance of chemicals and processes in your brain, affecting your thoughts, feelings, actions and sometimes mental health.
            </Text>

            <Pressable style={styles.button} onPress={handleNextPress}>
                <Text style={styles.buttonText}>Next</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        paddingVertical: 15,
        gap: 20,
    },
    text: {
        color: 'white',
        fontSize: 18,
        textAlign: 'left',
        marginHorizontal: 20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 25,
        marginHorizontal: 30,
        marginVertical: 15,
        padding: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
    },
})
export default Onbording2