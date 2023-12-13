import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import BackArrow from 'components/icons/BackArrow';
import EditComponent from 'components/EditComponent';
import DeleteIcon from 'components/icons/DeleteIcon';

const Width=Dimensions.get('screen').width;
const Height=Dimensions.get('screen').height;

const EditProfile = () => {
    const navigation = useNavigation();
    const [email, setEmail]=React.useState('');
    const [name, setName]=React.useState('');
  return (
    <SafeAreaView style={{backgroundColor: '#ecedea', height: '100%'}}>
        <ScrollView style={{backgroundColor: '#ecedea'}}>
            <View style={Styles.container}>
                <View style={Styles.header_container}>
                    <TouchableOpacity onPress={()=>navigation.navigate("MyProfile")}>
                        <BackArrow/>
                    </TouchableOpacity>
                    <Text style={Styles.header_text}>Edit Profile</Text>
                </View>
                <View style={[Styles.text_container, {marginTop: 50}]}>
                    <View style={[Styles.circle, {backgroundColor: '#33AE9C'}]}/>
                    <Text style={Styles.text_style1}>Full Name</Text>
                </View>
                <TextInput
                    style={Styles.text_input}
                    onChangeText={setName}
                    value={name}
                    placeholder='Rebecca Smith'
                    placeholderTextColor='#080D09'
                />
                <View style={[Styles.text_container, {marginTop: 30}]}>
                    <View style={[Styles.circle, {backgroundColor: '#33AE9C'}]}/>
                    <Text style={Styles.text_style1}>Email Address</Text>
                </View>
                <TextInput
                    style={Styles.text_input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder='RebeccaSmith@email.com'
                    placeholderTextColor='#080D09'
                />
            </View>
            <View style={Styles.edit_component}>
                <EditComponent text="your age" value="18 - 29" color="#FF445A"/>
                <EditComponent text="Your Gender" value="Female" color="#7844FF"/>
                <EditComponent text="First half of your postcode" value="NW1" color="#33AE9C"/>
            </View>
            <View style={Styles.delete_component}>
                <TouchableOpacity>
                    <View style={{flexDirection: 'row', gap: 10, justifyContent: 'center', alignItems: 'center'}}>
                        <DeleteIcon/>
                        <Text style={Styles.dlt_text}>Delete Account</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity>
                <View style={Styles.save_btn}>
                    <Text style={Styles.save_text}>Save</Text>
                </View>
            </TouchableOpacity>
            
        </ScrollView>
    </SafeAreaView>
  )
}

export default EditProfile

const Styles=StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItem: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        paddingBottom: 30,
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
    circle: {
        height: 15,
        width: 15,
        borderRadius: 15/2,
    }, 
    text_style1: {
        color: '#080D09',
        fontFamily: 'Regular',
        fontSize: 16
    }, 
    text_container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginLeft: 25,
    },
    text_input: {
        marginTop: 16,
        marginLeft: 25,
        width: Width*0.88,
        height: 52,
        padding: 15,
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 0.5,
        borderColor: '#B0B0B4',
        fontFamily: 'Regular',
        fontSize: 14,
        color: '#080D09'
    },
    edit_component: {
        marginTop: 45,
        flexDirection: 'column',
        gap: 33,
    },
    delete_component: {
        marginTop: 115,
        width: Width,
        alignItems: 'flex-end',
        paddingRight: 35,
    },
    dlt_text: {
        color: '#FF445A',
        fontFamily: 'Regular',
        fontSize: 14,
        textAlign: 'center',
        letterSpacing: -0.14
    }, 
    save_btn: {
        marginTop: 41.5,
        marginLeft: 25,
        backgroundColor: '#0D3F4A',
        width: Width*0.88,
        height: 52,
        paddingHorizontal: 6,
        paddingVertical: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 0.5,
        borderColor: '#33AE9C',
    },
    save_text: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Regular',
        fontSize: 14,
        letterSpacing: -0.14
    }
})