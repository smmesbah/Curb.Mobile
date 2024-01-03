import { ImageBackground, SafeAreaView, StyleSheet, Text, View, Dimensions} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { ScrollView } from 'react-native-gesture-handler'

const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;

const WeekLogStart = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ImageBackground source={require('../../../assets/week-log/starting-photo.jpg')} style={styles.image} imageStyle={{ borderRadius: 15, height: "100%", width: "100%" }}>
                    <View style={styles.curb}>
                        <Text style={styles.curbText}>curb</Text>
                        <View style={styles.dot}></View>
                    </View>

                    <View style={styles.flex}>
                        <Text style={styles.text1}>Let's log your week</Text>
                    </View>
                </ImageBackground>


                <View style={{ marginTop: 25, marginLeft: 25, gap: 10, }}>
                    <Text style={{ fontSize: 18,fontFamily: "Regular" }}>We’re going to ask you to fill in everything you might drink during a typical week. Try to be as accurate as possible - we will use this information to calculate and share where you rank among your peers for alcohol consumption. </Text>
                    {/* <Text style={{ fontSize: 18, fontFamily: "Regular"}}>Description why we are asking this</Text>
                    <Text style={{ fontSize: 18, fontFamily: "Regular"}}>Description why we are asking this</Text> */}
                </View>

                <View style={styles.button}>
                    <Link href="/post-payment-onboarding/week-days" style={[styles.buttonText, { width: '100%', fontFamily: "Regular" }]}>
                        Let's get started
                    </Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default WeekLogStart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingBottom: 25,
    },
    image: {
        resizeMode: 'contain',
        justifyContent: 'center',
        width: null,
        height: windowHeight * .53,
        marginHorizontal: 15,
        marginTop: 30,
        position: 'relative',
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
        color: '#000',
    },
    curbText: {
        color: 'white',
        fontSize: 42,
        // fontWeight: 'bold',
        letterSpacing: 5,
        fontFamily: "Regular"
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
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 25,
        marginHorizontal: 30,
        marginTop: windowHeight * .03,
        padding: 10,
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: "Regular"
    },
})