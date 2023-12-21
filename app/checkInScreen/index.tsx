import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, Pressable } from 'react-native'
import { router } from 'expo-router'
import BackArrow from 'components/icons/BackArrow';

const Width=Dimensions.get('window').width;
const Height=Dimensions.get('window').height;

const index = () => {
  return (
    <SafeAreaView style={{height: '100%'}}>
        <View style={Styles.container}>
            <View style={Styles.header_container}>
                <TouchableOpacity onPress={()=>router.back()}>
                    <BackArrow/>
                </TouchableOpacity>
                <Text style={Styles.header_text}>Check In</Text>
            </View>
            <Text style={Styles.header_description}>Lorem ipsum dolor sit amet consectetur. Morbi
                    volutpat mollis eget viverra turpis.</Text>
        </View>
        <View style={{backgroundColor: '#f5f6f4', height: '100%'}}>
            <View style={Styles.container2}>
                <View style={Styles.dot}/>
                <Text style={Styles.drink_free_text}>Did you have a drink-free day?</Text>
            </View>
            <Text style={Styles.drink_free_description}>
                Lorem ipsum dolor sit amet consectetur. Morbi
                volutpat mollis eget viverra turpis.
            </Text>
            <View style={Styles.btn_container}>
                <Pressable onPress={()=>{console.log(Width)}}>
                    <View style={Styles.btn}>
                        <Text style={Styles.btn_text}>Yes</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={Styles.btn}>
                        <Text style={Styles.btn_text}>No</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default index

const Styles=StyleSheet.create({
    header_container:{
        paddingTop: Height*0.055,
        paddingHorizontal: 20,
        width: Width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10, 
        backgroundColor: '#fff'
    },
    header_text: {
        color: '#080D09',
        fontFamily: 'Regular',
        fontSize: 40, 
    },
    container: {
        justifyContent: 'center',
        alignItem: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingBottom: 20,
    }, 
    header_description: {
        color: '#4e4f4e',
        fontFamily: 'Regular',
        fontSize: 18,
        lineHeight: 28,
        marginTop: 35,
        marginHorizontal: Width*0.045,
        marginBottom: Height*0.04
    }, 
    container2: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: Width*0.045,
    },
    dot: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#33ae9c'
    },
    drink_free_text: {
        color: '#080D09',
        fontFamily: 'Regular',
        fontSize: 20,
        marginLeft: 10
    },
    drink_free_description: {
        color: '#4e4f4e',
        fontFamily: 'Regular',
        fontSize: 18,
        lineHeight: 28,
        marginTop: 12,
        marginHorizontal: 25,
        marginBottom: Height*0.04
    },
    btn_container: {
        flexDirection: 'row',
        marginHorizontal: 25,
        gap: Width*0.025,
    },
    btn: {
        width: Width*0.43,
        height: Height*0.06,
        paddingHorizontal: 6,
        paddingVertical: 2,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#0d3f4a',
        backgroundColor: '#fff',
    },
    btn_text: {
        color: '#080D09',
        textAlign: 'center',
        fontFamily: 'Medium',
        fontSize: 16,
        letterSpacing: -0.14
    }
})