import Tab from 'components/Tab'
import BackArrow from 'components/icons/BackArrow';
import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, Keyboard, ScrollView, TouchableOpacity, Modal } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import ProfileEdit from 'components/icons/ProfileEdit';
import DrinkScore from 'components/DrinkScore';
import OptionCard from 'components/ui/OptionCard';
import LogOutIcon from 'components/icons/LogOutIcon';
import LogOutModal from 'components/LogOutModal';

const Width=Dimensions.get('screen').width;

const MyProfile = () => {
  const navigation = useNavigation();
  const [logoutModal, setLogoutModal]=React.useState(false);
  return (
    // <SafeAreaView style={{backgroundColor: '#ecedea', height: '100%'}}>
        <ScrollView style={{backgroundColor: '#ecedea'}}>
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
                <TouchableOpacity onPress={()=>navigation.navigate("EditProfile")}>
                    <View style={Styles.profile_edit}>
                        <ProfileEdit color="#fff"/>
                    </View>
                </TouchableOpacity>
                <Text style={Styles.profile_name}>Rebecca Smith</Text>
            </View>
            <View style={Styles.drink_score}>
                <DrinkScore/>
            </View>
            <View style={Styles.option_card}>
                <OptionCard text='Your average drinking week before curb' toggle={false} nav=""/>
            </View>
            <View style={Styles.option_header}>
                <View style={[Styles.circle, {backgroundColor: "#33AE9C"}]}/>
                <Text style={Styles.option_text}>Permissions</Text>
            </View>
            <View style={Styles.option_card}>
                <OptionCard text='Marketing emails' toggle={true} nav=""/>
            </View>
            <View style={Styles.option_header}>
                <View style={[Styles.circle, {backgroundColor: "#7844FF"}]}/>
                <Text style={Styles.option_text}>Support</Text>
            </View>
            <View style={Styles.option_card}>
                <OptionCard text='Feedback and Support' toggle={false} nav="FeedbackAndSupport"/>
                <OptionCard text='Terms & Conditions' toggle={false} nav=""/>
                <OptionCard text='Privacy Policy' toggle={false} nav=""/>
            </View>
            <View style={Styles.log_out_container}>
                <TouchableOpacity onPress={()=>setLogoutModal(true)}>
                    <View style={Styles.log_out}>
                        <LogOutIcon/>
                        <Text style={Styles.log_out_text}>Log Out</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <Modal visible={logoutModal} transparent>
                <LogOutModal logOutModal={logoutModal} setLogoutModal={setLogoutModal}/>
            </Modal>
        </ScrollView>
    // </SafeAreaView>
  )
}

export default MyProfile

const Styles=StyleSheet.create({
    container: {
        paddingTop:30,
        justifyContent: 'center',
        alignItem: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingBottom: 110,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
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
        fontSize: 26,
        textAlign: 'center',
        marginTop: 15
    },
    drink_score: {
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: -75
    }, 
    option_card: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center', 
        gap: 15
    }, 
    circle: {
        height: 15,
        width: 15,
        borderRadius: 15/2,
    }, 
    option_header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 8,
        marginLeft: Width*.05, 
        marginTop: 30
    },
    option_text: {
        color: '#080D09',
        fontFamily: 'Regular',
        fontSize: 17
    }, 
    log_out_container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    log_out: {
        flexDirection: 'row',
        width: Width*0.9,
        height: 52,
        paddingHorizontal: 6,
        paddingVertical: 2,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderRadius: 12,
        borderWidth: 0.5,
        borderColor: '#FF445A',
        backgroundColor: 'rgba(255, 68, 90, 0.05)'
    }, 
    log_out_text: {
        color: '#FF445A',
        fontFamily: 'Regular',
        fontSize: 14,
        letterSpacing: -0.14
    }
})