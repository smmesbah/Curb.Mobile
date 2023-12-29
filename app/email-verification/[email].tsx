import { Dimensions, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Link, useGlobalSearchParams } from 'expo-router'
import OTPTextView from 'react-native-otp-textinput';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('screen');

const EmailVerification = () => {
    const [code, setCode] = React.useState('');
    const email=useGlobalSearchParams();

    const handleChange = (code: string) => {
        // console.log(code)
        setCode(code)
    }

    const handleResendCode = async() => {
        try{
            const apiUrl=`${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/auth/forget-password`;
            const response=await fetch(apiUrl, {method: 'POST',headers: {'content-type': 'application/json'}, body: JSON.stringify({email: email.email})});
            const data= await response.json();
            if(!data.success){
              alert(data.message)
            }
            else{
              alert("code resend successfully")
            }
          }catch(err) {
            console.log(err);
          }
    }

    useEffect(() => {
        // console.log(email);
    }, [])

    const handleSubmit = async() => {
        //console.log(code)
        try{
            const apiUrl=`${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/auth/verify-otp/${email.email}/${code}`;
            const response=await fetch(apiUrl, {method: 'GET'});
            const data= await response.json();
            if(!data.success){
                alert(data.message)
            }
            else{
                console.log(data.message);
            // const Data=[email,code]
            router.push(`/signup-with-password/${email.email}`)
            }
            
        }catch(err) {
            console.log(err);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={()=>router.back()}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text>
                            <AntDesign name="arrowleft" size={28} color="black" />
                        </Text>
                    </View >
                </Pressable>
                <View style={styles.curb}>
                    <Text style={styles.curbText}>curb</Text>
                    <View style={[styles.dot]} />
                </View>
            </View>

            <View style={styles.signupTextSection}>
                <Text style={{ fontSize: 42, fontWeight: '500', fontFamily: "Regular" }}>Verify your email</Text>
                <Text style={{ fontSize: 18, fontFamily: "Regular"}}>We sent a verification code to mesbah@recruit.so</Text>
            </View>

            <View style={{ backgroundColor: '#f3f2ee', gap: 20, marginVertical: 20, paddingHorizontal: width * 0.1, paddingVertical: 25 }}>
                <View style={{ flexDirection: 'row', gap: 20 }}>
                    <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: '#e64627',}} />
                    <Text style={{ fontSize: 18, fontFamily: "Regular"}}>Enter your unique code here</Text>
                </View>

                <OTPTextView
                    handleTextChange={handleChange}
                    inputCount={4}
                    keyboardType="numeric"
                    autoFocus={true}
                    inputCellLength={1}
                    textInputStyle={{
                        width: 50,
                        height: 60,
                        borderWidth: 1,
                        borderRadius: 8,
                        backgroundColor: '#fff',
                        borderColor: '#000',
                        borderBottomWidth: 1,
                        // @ts-ignore
                        fontFamily: 'Regular'
                    }}
                    // containerStyle={{ width: '80%', height: 200, paddingHorizontal: 32 }}
                    tintColor="#000"
                />
            </View>
            
            <Pressable onPress={handleSubmit}>
                <View style={styles.button}>
                    <Text style={[styles.buttonText, { width: '100%',fontFamily: "Regular" }]}>
                        Submit
                    </Text>
                </View>
            </Pressable>

            <View style={styles.alreadyHaveAnAccount}>
                <Text style={{ fontSize: 18,fontFamily: "Regular" }}>Don't have a code?</Text>
                <TouchableOpacity onPress={handleResendCode}>
                    <Text style={{ fontSize: 18, color: "#6d5eff",fontFamily: "Regular" }}>Resend code</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default EmailVerification

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingVertical: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    curb: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },
    curbText: {
        color: 'black',
        fontSize: 30,
        fontWeight: '500',
        letterSpacing: 5,
        fontFamily: 'Regular'
    },
    dot: {
        backgroundColor: '#000',
        width: 15,
        height: 15,
        borderRadius: 50,
        margin: 3,
    },
    signupTextSection: {
        marginTop: height * 0.05,
        marginLeft: width * 0.1,
        gap: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 25,
        marginHorizontal: 30,
        marginVertical: 15,
        padding: 10,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    },
    alreadyHaveAnAccount: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
})