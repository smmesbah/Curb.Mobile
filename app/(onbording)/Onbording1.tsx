import { View, Text, SafeAreaView, ImageBackground, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const Onbording1 = () => {
    const handleGetStartedPress = () => {
        alert('Get started');
    }
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/onbording1.jpg')} style={styles.image} imageStyle={{ borderRadius: 15, height: "100%", width: "100%" }}>
                <View style={styles.curb}>
                    <Text style={styles.curbText}>curb</Text>
                    <View style={styles.dot}></View>
                </View>

                <View style={styles.flex}>
                    <Text style={styles.text1}>Your path to a better relationship with alcohol.</Text>
                    <Text style={styles.text2}>Curb helps people who want to change their relationshiop with alcohol.</Text>
                </View>
            </ImageBackground>

            {/* <Pressable style={styles.button} onPress={handleGetStartedPress}> */}
            <View style={styles.button}>
                <Link href="/Onbording-2"style={[styles.buttonText, {width: '100%'}]}>
                    Get Started
                </Link>
            </View>

            <View style={styles.alreadyHaveAnAccount}>
                <Text style={{ fontSize: 18 }}>Already have an account?</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 18, color: "#6d5eff" }}>Log-in</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingVertical: 15,
    },
    image: {
        resizeMode: 'contain',
        justifyContent: 'center',
        width: null,
        height: "80%",
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
    },
    text1: {
        color: 'white',
        fontSize: 42,
        lineHeight: 40,
    },
    text2: {
        color: 'white',
    },
    flex: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        flexDirection: 'column',
        gap: 20,
        padding: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 25,
        marginHorizontal: 30,
        marginVertical: 15,
        padding: 10,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    },
    alreadyHaveAnAccount: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
});

export default Onbording1