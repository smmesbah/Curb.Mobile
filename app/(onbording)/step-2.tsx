import { View, Text, SafeAreaView, ImageBackground, StyleSheet, Pressable, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const Width=Dimensions.get('window').width
const Height=Dimensions.get('window').height

const Onbording2 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ImageBackground source={require('../../assets/Onbording/onbordingSlider1.jpg')} style={styles.image} imageStyle={{ borderRadius: 15, height: "100%", width: "100%" }}>
                    <View style={styles.curb}>
                        <Text style={styles.curbText}>curb</Text>
                        <View style={styles.dot}></View>
                    </View>

                    <View style={styles.flex}>
                        <Text style={styles.text1}>Stay in control of your mental health and wellbeing.</Text>
                    </View>
                </ImageBackground>

                <Text style={styles.text2}>Alcohol disrupts the delicate balance of chemicals and processes in your brain, affecting your thoughts, feelings, actions and sometimes mental health.</Text>

                <View style={styles.dotPosition}>
                    <View style={[styles.paginationDot,{backgroundColor: '#5a4fff'}]}/>
                    <View style={[styles.paginationDot,{backgroundColor: '#fff'}]}/>
                    <View style={[styles.paginationDot,{backgroundColor: '#fff'}]}/>
                </View>

                {/* <Pressable style={styles.button} onPress={handleGetStartedPress}> */}
                <View style={styles.button}>
                    <Link href="/step-3"style={[styles.buttonText, {width: '100%', fontFamily: "Regular"}]}>
                        Next
                    </Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Onbording2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        paddingVertical: 15,
        paddingBottom: 25,
    },
    image: {
        resizeMode: 'contain',
        justifyContent: 'center',
        width: null,
        height: Height*0.65,
        marginHorizontal: 15,
        marginTop: 30,
        position: 'relative',
    },
    text: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        // backgroundColor: '#000000a0',
        fontFamily: "Regular"
    },
    curb: {
        position: 'absolute',
        top: 20,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dot: {
        backgroundColor: '#fff',
        width: 15,
        height: 15,
        borderRadius: 50,
        marginLeft: 10,
        color: '#fff',
    },
    curbText: {
        color: 'white',
        fontSize: 42,
        // fontWeight: 'bold',
        letterSpacing: 5,
        fontFamily: "Regular"
    },
    text1: {
        color: 'white',
        fontSize: 42,
        lineHeight: 50,
        fontFamily: "Regular"
    },
    text2: {
        color: 'white',
        fontSize: 18,
        margin: 20,
        fontFamily: "Regular"
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
        fontFamily: "Regular"
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