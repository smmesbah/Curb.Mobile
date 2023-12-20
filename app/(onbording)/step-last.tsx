import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const { width, height } = Dimensions.get('screen');

const OnbordingEnd = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/Onbording/onboardingEnd.jpg')} style={styles.image} imageStyle={{ borderRadius: 15, height: "100%", width: "100%" }}>
                <View style={styles.flex}>
                    <Text style={styles.text1}>Thank you for your Payment. Processing....</Text>
                </View>
            </ImageBackground>

            <View style={{ marginLeft: width * 0.1, marginTop: 35, gap: 8 }}>
                <Text style={{ fontSize: 18, color: '#fff', fontFamily: "Regular"}}>Please log back in again to continue.</Text>
                <View style={styles.curb}>
                    <Text style={styles.curbText}>curb</Text>
                    <View style={styles.dot}></View>
                </View>
            </View>

            <View style={styles.button}>
                <Link href="/post-payment-onboarding/step-1" style={[styles.buttonText, { width: '100%', fontFamily: "Regular"}]}>
                    Log in
                </Link>
            </View>
        </SafeAreaView>
    )
}

export default OnbordingEnd

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
    text1: {
        color: '#fff',
        fontSize: 42,
        lineHeight: 50,
        fontFamily: "Regular"
    },
    flex: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: 35,
    },
    curb: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dot: {
        backgroundColor: '#fff',
        width: 15,
        height: 15,
        borderRadius: 50,
        marginLeft: 10,
        marginTop: 10,
        color: '#000',
    },
    curbText: {
        color: 'white',
        fontSize: 42,
        // fontWeight: 'bold',
        letterSpacing: 5,
        fontFamily: "Regular"
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 25,
        marginHorizontal: 30,
        marginTop: 50,
        padding: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: "Regular"
    },
})