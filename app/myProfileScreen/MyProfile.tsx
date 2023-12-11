import Tab from 'components/Tab'
import BackArrow from 'components/icons/BackArrow';
import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, Keyboard, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import ProfileEdit from 'components/icons/ProfileEdit';

const Width=Dimensions.get('screen').width;

const MyProfile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
        <ScrollView>
            <View style={Styles.container}>
                <View style={Styles.header_container}>
                    <TouchableOpacity onPress={()=>navigation.navigate("Tab")}>
                        <BackArrow/>
                    </TouchableOpacity>
                    <Text style={Styles.header_text}>My Profile</Text>
                </View>
                <View style={Styles.profile_container}>
                    <Text style={Styles.profile_text_style}>RJ</Text>
                </View>
                <TouchableOpacity>
                    <View style={Styles.profile_edit}>
                        <ProfileEdit/>
                    </View>
                </TouchableOpacity>
                <Text style={Styles.profile_name}>Rebecca Smith</Text>
            </View>
            <View>
                
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default MyProfile

const Styles=StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItem: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    header_container:{
        paddingTop: 25,
        paddingHorizontal: 20,
        width: Width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    header_text: {
        color: '#080D09',
        fontFamily: 'Regular',
        fontSize: 28
    },
    profile_container: {
        marginTop: 35,
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: '#0D3F4A',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#33AE9C'
    },
    profile_text_style: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Regular',
        fontSize: 45,
    },
    profile_edit: {
        width: 33,
        height: 33,
        borderRadius: 33,
        backgroundColor: '#33AE9C',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -28,
        marginRight: -55,
    },
    profile_name: {
        color: '#0D3F4A',
        fontFamily: 'Regular',
        fontSize: 24,
        textAlign: 'center',
        marginTop: 15
    }
})