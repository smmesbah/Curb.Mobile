import { View, Text, SafeAreaView, ImageBackground, StyleSheet, Pressable, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';

const Width=Dimensions.get('window').width
const Height=Dimensions.get('window').height

const Onbording1 = () => {
    const handleGetStartedPress = () => {
        alert('Get started');
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ImageBackground source={require('../../assets/onbording1.jpg')} style={styles.image} imageStyle={{ borderRadius: 15, height: "100%", width: "100%" }}>
                    <View style={styles.curb}>
                        <Text style={styles.curbText}>curb</Text>
                        <View style={styles.dot}></View>
                    </View>

                    <View style={styles.flex}>
                        <Text style={styles.text1}>Your path to a better relationship with alcohol.</Text>
                        <Text style={styles.text2}>Curb helps people who want to make healthier choices about their drinking</Text>
                    </View>
                </ImageBackground>

                {/* <Pressable style={styles.button} onPress={handleGetStartedPress}> */}
                <View style={styles.button}>
                    <Link href="/login"style={[styles.buttonText, {width: '100%', fontFamily: "Regular"}]}>
                        Log in with email
                    </Link>
                </View>

                <View style={styles.alreadyHaveAnAccount}>
                    <Text style={{ fontSize: 18, fontFamily: "Regular" }}>Don't have an account?</Text>
                    <TouchableOpacity onPress={()=>router.push('/signup')}>
                        <Text style={{ fontSize: 18, color: "#6d5eff", fontFamily: "Regular" }}>Sign up here</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        height: Height*.7,
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
        lineHeight: 40,
        fontFamily: "Regular"
    },
    text2: {
        color: 'white',
        fontFamily: "Regular"
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
        marginBottom: 15,
        marginTop: 25,
        padding: 10,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: "Regular"
    },
    alreadyHaveAnAccount: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginBottom: 10,
        flexDirection: 'row'
    },
});

export default Onbording1