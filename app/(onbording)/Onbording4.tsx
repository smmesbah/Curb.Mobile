import { View, Text, SafeAreaView, ImageBackground, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const Onbording4 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/Onbording/onbordingSlider3.jpg')} style={styles.image} imageStyle={{ borderRadius: 15, height: "100%", width: "100%" }}>
                <View style={styles.curb}>
                    <Text style={styles.curbText}>curb</Text>
                    <View style={styles.dot}></View>
                </View>

                <View style={styles.flex}>
                    <Text style={styles.text1}>Stay in control of your mental health and wellbeing 3</Text>
                </View>
            </ImageBackground>

            <Text style={styles.text2}>Alcohol disrupts the delicate balance of chemicals and processes in your brain, affecting your thoughts, feelings, actions and sometimes mental health.</Text>

            <View style={styles.dotPosition}>
                <View style={[styles.paginationDot,{backgroundColor: '#d9d9d9'}]}/>
                <View style={[styles.paginationDot,{backgroundColor: '#d9d9d9'}]}/>
                <View style={[styles.paginationDot,{backgroundColor: '#5a4fff'}]}/>
            </View>

            <View style={styles.button}>
                <Link href="/Onbording4"style={[styles.buttonText, {width: '100%'}]}>
                    Next
                </Link>
            </View>
        </SafeAreaView>
    )
}

export default Onbording4

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#11303c',
        paddingVertical: 15,
        paddingBottom: 25,
    },
    image: {
        resizeMode: 'contain',
        justifyContent: 'center',
        width: null,
        height: "70%",
        marginHorizontal: 15,
        marginTop: 30,
        position: 'relative',
    },
    text: {
        color: 'black',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    curb: {
        position: 'absolute',
        top: 20,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dot: {
        backgroundColor: '#000',
        width: 15,
        height: 15,
        borderRadius: 50,
        marginLeft: 10,
        color: '#000',
    },
    curbText: {
        color: 'black',
        fontSize: 42,
        // fontWeight: 'bold',
        letterSpacing: 5,
    },
    text1: {
        color: '#fff',
        fontSize: 42,
        lineHeight: 50,
    },
    text2: {
        color: 'white',
        fontSize: 18,
        margin: 20,
    },
    flex: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: 35,
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
        textAlign: 'center',
    },
    alreadyHaveAnAccount: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    dotPosition: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    paginationDot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginHorizontal: 5,
    }
});