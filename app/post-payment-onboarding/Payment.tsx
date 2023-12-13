import React from 'react'
import {Text, View, StyleSheet, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import BackArrow from 'components/icons/BackArrow';
import { useNavigation } from 'expo-router';

const Width=Dimensions.get('screen').width;
const Height=Dimensions.get('screen').height;
const Payment = () => {

    const navigation = useNavigation();
  return (
    <ScrollView>
        <View style={Styles.container}>
            <View style={Styles.header_container}>
                <TouchableOpacity onPress={()=>navigation.navigate("WeekDrinking")}>
                    <BackArrow/>
                </TouchableOpacity>
                <Text style={Styles.header_text}>Payment</Text>
            </View>
            <Text style={Styles.header_subtext}>Enter your promo code to get free membership from curb team</Text>
        </View>
    </ScrollView>
  )
}

export default Payment

const Styles=StyleSheet.create({
    container: {
        // marginTop: 30,
        justifyContent: 'center',
        alignItem: 'center',
        flexDirection: 'column',
        backgroundColor: '#eae8e2',
        paddingBottom: 20,
    },
    header_container:{
        marginTop: 30,
        paddingTop: 25,
        paddingHorizontal: 20,
        width: Width,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    header_text: {
        color: '#080D09',
        fontFamily: 'Medium',
        fontSize: 28
    },
    header_subtext: {
        marginTop: 36,
        marginBottom: 40,
        color: '#4E4F4E',
        fontFamily: 'Regular',
        fontSize: 18,
        lineHeight: 28,
        marginLeft: 20,
        marginRight: 20,
    }
})