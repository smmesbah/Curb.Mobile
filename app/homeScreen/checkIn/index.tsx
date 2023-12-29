import React from 'react'
import {Text, SafeAreaView, ScrollView, View, StyleSheet, Dimensions, TouchableOpacity, FlatList, Animated, Pressable} from 'react-native'
import InsightCurbLogo from '../../../components/icons/InsightCurbLogo';
import { router } from 'expo-router';

const windowHeight=Dimensions.get('screen').height;
const windowWidth=Dimensions.get('screen').width;

const index = () => {

    const handleBackToHomePress = () => {
        while(router.canGoBack()){
            router.back();
        }
        router.replace('/homeScreen')
    }
  return (
    <SafeAreaView
        style={{
            // height: windowHeight * 0.9,
            width: windowWidth,
            height: windowHeight
        }}
    >
      <View style={Styles.container}>
        <Text style={Styles.title}>Thank you for checking in</Text>
        <Text style={Styles.subheader}>Thanks for checking in and stay with curb</Text>
      </View>
        <ScrollView style={{height: windowHeight}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={Styles.container2}>
                <View style={Styles.logo_style}>
                    <Text style={Styles.text_style2}>Top tip</Text>
                    <InsightCurbLogo/>
                </View>
                <Text style={Styles.text_style}>
                    The exercises are to
                    only be completed
                    once. A summary
                    email will be sent to
                    you to review your
                    answers/results.
                </Text>
                    <Pressable onPress={handleBackToHomePress}>
                        <View style={Styles.btn}>
                            <Text style={Styles.btn_text}>Back to home</Text>
                        </View>
                    </Pressable>
            </View>
            
        </View>
        <View style={{height: windowHeight*0.15}}></View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default index

const Styles=StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        paddingBottom: 5
    },
    title:{
        marginTop: windowHeight*.05,
        fontFamily: 'Regular',
        fontSize: 28,
        color: '#080D09',
        textAlign: 'right',
        marginRight: windowWidth*.055,
    },
    subheader: {
        color: '#4e4f4e',
        fontFamily: 'Regular',
        fontSize: 16, 
        lineHeight: 25,
        marginLeft: windowWidth*0.05,
        marginTop: 25,
    },
    container2: {

        marginTop: 28,
        width: windowWidth*.9,
        // height: windowHeight*.62,
        borderRadius: 18,
        backgroundColor: '#0D3F4A', 
        paddingRight: 18,
        alignItems: 'flex-end',
        marginBottom: 10
    }, 
    text_style: {
        // marginLeft: width*0.03,
        // marginTop: height*0.015,
        color: '#fff', 
        textAlign: 'right',
        fontFamily: 'Regular',
        fontSize: 32,
        marginTop: windowHeight*.1
        // letterSpacing: 1
    },
    logo_style: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        width: '100%'
    },
    text_style2: {
        color: '#fff',
        textAlign: 'right',
        fontFamily: 'Regular',
        fontSize: 24,

    },
    highlight: {
        color: "#33AE9C"
    },
    btn: {
        // marginHorizontal: windowWidth*0.1,
        marginBottom: 10,
        width: windowWidth*0.8,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        backgroundColor: '#33AE9C',
        marginTop: windowHeight*0.1
    },
    btn_text: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Regular',
        fontSize: 14, 
    }
})