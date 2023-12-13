import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native'
import XClose from './icons/XClose';
import LogOutModalIcon from './icons/LogOutModalIcon';

const width=Dimensions.get('screen').width;
const height=Dimensions.get('screen').height;

const LogOutModal = ({logOutModal, setLogoutModal}) => {
    const scaleValue = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        toggleModal();
      }, [logOutModal]);
      const toggleModal = () => {
        if (logOutModal) {
          setLogoutModal(true);
          Animated.spring(scaleValue, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }).start();
        } else {
          setTimeout(() => setLogoutModal(false), 200);
          Animated.timing(scaleValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }
      };

  return (
    <View style={Styles.modal_background}>
        <Animated.View style={[Styles.modal_container,{transform: [{scale: scaleValue}]}]}>
            <View style={Styles.cross_btn}>
                <TouchableOpacity onPress={()=>setLogoutModal(false)}>
                    <XClose/>
                </TouchableOpacity>
            </View>
            <View style={Styles.inner_container}>
                <View style={Styles.logout_icon}>
                    <LogOutModalIcon/>
                </View>
                <View style={{marginTop: 16}}>
                    <Text style={Styles.text_style1}>Are you sure you want to</Text>
                    <Text style={Styles.text_style1}>log out of your account?</Text>
                </View>
                <Text style={Styles.text_style2}>You can log back in at anytime.</Text>
                <TouchableOpacity onPress={()=>setLogoutModal(false)}>
                    <View style={[Styles.btn,Styles.btn_no]}>
                        <Text style={Styles.btn_text}>No</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setLogoutModal(true)}>
                    <View style={[Styles.btn, Styles.btn_yes]}>
                        <Text style={Styles.btn_text}>Yes</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Animated.View>

    </View>
   
  )
}

export default LogOutModal

const Styles=StyleSheet.create({
    modal_background: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal_container: {
        width: width*0.8,
        backgroundColor: '#658495',
        elevation: 20,
        padding: 20,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16, 
        borderRadius: 20
    },
    cross_btn: {
        width: '100%',
        alignItems: 'flex-end',
        marginTop: -5,
        marginRight: -25,
    }, 
    logout_icon: {
        width: 89,
        height: 89,
        backgroundColor: '#E9E7E1',
        borderRadius: 89,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    inner_container: {
        marginTop: -40,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    text_style1: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Regular',
        fontSize: 18,
        lineHeight: 27
    },
    text_style2: {
        marginTop: 8,
        color: '#FDFDFD',
        textAlign: 'center',
        fontFamily: 'Regular',
        fontSize: 14,
        lineHeight: 22
    },
    btn: {
        marginTop: 20,
        borderRadius: 15,
        padding: 13,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
        width: width*0.6
    },
    btn_no: {
        backgroundColor: '#27284E',
    },
    btn_yes: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff'
    },
    btn_text: {
        color: '#fff',
        fontFamily: 'Regular',
        fontSize: 14,
    }
})