import BackArrow from 'components/icons/BackArrow'
import React from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

const Width=Dimensions.get('screen').width;
const Height=Dimensions.get('screen').height;

const Records = () => {
  return (
    <SafeAreaView>
        <View style={Styles.header_container}>
            <BackArrow/>
            <Text style={Styles.header_text}>Mon 1st Jan</Text>
        </View>
        <ScrollView>
            <LinearGradient
                colors={['#377C8B', '#0D3F4A', '#0D3F4A' ]}
                locations={[0.0, 0.2, 0.6]}
            >
                <View style={Styles.container}>
                    <View style={Styles.container2}>
                        <Text style={Styles.text_style1}>£0</Text>
                        <Text style={Styles.text_style2}>Spent</Text>
                    </View>
                    <View style={Styles.container2}>
                        <Text style={Styles.text_style1}>0</Text>
                        <Text style={Styles.text_style2}>Calories</Text>
                    </View>
                    <View style={Styles.container2}>
                        <Text style={Styles.text_style1}>2</Text>
                        <Text style={Styles.text_style2}>Units</Text>
                    </View>
                </View>
                <View style={Styles.container3}>
                    <Text style={Styles.text_style3}>Based on your average weekly drinking behaviour</Text>
                </View>
            </LinearGradient>
            <View style={Styles.container4}>
                <Text style={Styles.tell_text}>Tell us more</Text>
                <Text style={Styles.tell_description}>Lorem ipsum dolor sit amet consectetur. Morbi
                    volutpat mollis eget viverra turpis.</Text>
            </View>
            <View style={Styles.container5}>
                <View style={Styles.text_container}>
                    <View style={[Styles.dot, {backgroundColor: '#33ae9c'}]}/>
                    <Text style={Styles.text_style4}>Your well being</Text>
                </View>
                <Pressable>
                    <View style={Styles.record_btn}>
                        <Feather name="plus" size={18} color="#fff" />
                        <Text style={Styles.btn_text}>Record all</Text>
                    </View>
                </Pressable>
            </View>
            <View style={Styles.container5}>
                <View style={{gap: 15}}>
                    <Text style={Styles.text_style5}>Sleep</Text>
                    <View style={Styles.btn_text2}>
                        <Feather name="plus" size={18} color="#4E4F4E" />
                    </View>
                </View>
                <View style={{gap: 15}}>
                    <Text style={Styles.text_style5}>Mood</Text>
                    <View style={Styles.btn_text2}>
                        <Feather name="plus" size={18} color="#4E4F4E" />
                    </View>
                </View>
            </View>
            <View style={Styles.container5}>
                <View style={{gap: 15}}>
                    <Text style={Styles.text_style5}>Energy</Text>
                    <View style={Styles.btn_text2}>
                        <Feather name="plus" size={18} color="#4E4F4E" />
                    </View>
                </View>
                <View style={{gap: 15}}>
                    <Text style={Styles.text_style5}>WillPower</Text>
                    <View style={Styles.btn_text2}>
                        <Feather name="plus" size={18} color="#4E4F4E" />
                    </View>
                </View>
            </View>
            <View style={Styles.container5}>
                <View style={Styles.text_container}>
                    <View style={[Styles.dot, {backgroundColor: '#7844ff'}]}/>
                    <Text style={Styles.text_style4}>Your habits</Text>
                </View>
                <Pressable>
                    <View style={Styles.record_btn}>
                        <Feather name="plus" size={18} color="#fff" />
                        <Text style={Styles.btn_text}>Record all</Text>
                    </View>
                </Pressable>
            </View>
            <View style={Styles.container5}>
                <View style={{gap: 15}}>
                    {/* <Text style={Styles.text_style5}>WillPower</Text> */}
                    <View style={Styles.btn_text2}>
                        <Feather name="plus" size={18} color="#4E4F4E" />
                        <Text style={Styles.text_style5}>Place</Text>
                    </View>
                </View>
                <View style={{gap: 15}}>
                    {/* <Text style={Styles.text_style5}>WillPower</Text> */}
                    <View style={Styles.btn_text2}>
                        <Feather name="plus" size={18} color="#4E4F4E" />
                        <Text style={Styles.text_style5}>People</Text>
                    </View>
                </View>
            </View>
            <View style={Styles.btn_text3}>
                <Feather name="plus" size={18} color="#4E4F4E" />
                <Text>Activity</Text>
            </View>
            <View style={{height: Width*.19}}></View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Records

const Styles=StyleSheet.create({
    header_container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 30,
        backgroundColor: '#fff'
    },
    header_text: {
        color: '#080D09',
        fontFamily: 'Regular',
        fontSize: 28,
        textAlign: 'right',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 25
        // paddingVertical: 25,
    },
    container2: {
        // marginTop: 25,
        width: Width*.25,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(51, 174, 156, 0.30)',
        // paddingHorizontal: 20,
        paddingVertical: 27,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#33ae9c'
    },
    text_style1: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Regular',
    },
    text_style2: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 17,
        fontFamily: 'Regular',
    },
    container3: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    text_style3: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'Regular',
    },
    container4: {
        flexDirection: 'column',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        paddingVertical: 25
    },
    tell_text: {
        color: '#080D09',
        fontFamily: 'Regular',
        fontSize: 20,
        marginBottom: 5
    },
    tell_description: {
        color: '#4E4F4E',
        fontFamily: 'Regular',
        fontSize: 16,
        lineHeight: 28
    }, 
    dot: {
        height: 12,
        width: 12,
        borderRadius: 6,
    },
    text_container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    container5: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 15,
        backgroundColor: '#f7f8f6'
    },
    text_style4: {
        color: '#080D09',
        fontFamily: 'Regular',
        fontSize: 20,
    },
    record_btn: {
        height: Height*.045,
        backgroundColor: '#33ae9c',
        flexDirection: 'row',
        paddingHorizontal: 16,
        borderRadius: 8,
        paddingVertical: 6,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn_text: {
        color: '#fff',
        fontFamily: 'Regular',
        fontSize: 16,
        letterSpacing: -.14
    },
    text_style5: {
        color: '#080D09',
        fontFamily: 'Regular',
        fontSize: 17,
    },
    btn_text2: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#33ae9c',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        width: Width*.42,
        height: Height*.05
    },
    btn_text3: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#33ae9c',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        width: Width*.9,
        height: Height*.05,
        marginHorizontal: 20
    }
})