import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { router, useGlobalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, Alert, Dimensions, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Mixpanel } from 'mixpanel-react-native';

const { width, height } = Dimensions.get('screen');

const trackAutomaticEvents = true;
const mixpanel = new Mixpanel(`${process.env.EXPO_PUBLIC_MIXPANEL_TOKEN}`, trackAutomaticEvents);
mixpanel.init();

const EmailVerification = () => {
    const [code, setCode] = React.useState('');
    const [isLoadingSubmit, setIsLoadingSubmit] = React.useState(false);
    const [isLoadingResend, setIsLoadingResend] = React.useState(false);
    const params = useGlobalSearchParams();
    const handleChange = (code: string) => {
        // console.log(code)
        setCode(code)
    }

    const handleResendCode = async () => {
        try {
            setIsLoadingResend(true);
            // const apiUrl = `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/auth/forget-password`;
            // const response = await fetch(apiUrl, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ email: params.email }) });
            // const data = await response.json();
            const res = await axios.post(`${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/auth/resend-otp`, {
                email: params.email
            })
            const data = res.data;
            if (!data.success) {
                alert(data.message)
                setIsLoadingResend(false);
            }
            else {
                alert("Code resend successfully.")
                setIsLoadingResend(false);
            }
        } catch (err) {
            console.log(err);
            setIsLoadingResend(false);
        }
    }

    useEffect(() => {
        // console.log(email);
    }, [])

    const handleSubmit = async () => {
        //console.log(code)
        try {
            setIsLoadingSubmit(true);
            // const apiUrl=`${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/auth/verify-otp/${params.email}/${code}`;
            // const response=await fetch(apiUrl, {method: 'GET'});
            const res = await axios.post(`${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/auth/verify-otp-and-create-user`, {
                fullName: params.fullName,
                email: params.email,
                password: params.password,
                otp: code
            })
            // const data= await response.json();
            const data = res.data;
            if (!data.success) {
                alert(data.message)
                setIsLoadingSubmit(false);
            }
            else {
                AsyncStorage.setItem('CurbUser', "true")
                Alert.alert(
                    'Registration Successful',
                    `User registration successful. Redirecting to the login page in 5 seconds`,
                    // [{text: 'OK', onPress: () => {
                    //     while(router.canGoBack()){
                    //         router.back();
                    //     }
                    //     router.replace('/login');
                    // }}],
                    // {cancelable: false}
                );

                //automatic redirect to the login page if the user not press the ok button
                setTimeout(() => {
                    while (router.canGoBack()) {
                        router.back();
                    }
                    setIsLoadingSubmit(false);
                    router.replace('/login');
                }, 5000);
            }

        } catch (err) {
            console.log(err);
            setIsLoadingSubmit(false);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()}>
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
                <Text style={{ fontSize: 18, fontFamily: "Regular" }}>We sent a verification code to {params.email}</Text>
            </View>

            <View style={{ backgroundColor: '#f3f2ee', gap: 20, marginVertical: 20, paddingHorizontal: width * 0.1, paddingVertical: 25 }}>
                <View style={{ flexDirection: 'row', gap: 20 }}>
                    <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: '#e64627', }} />
                    <Text style={{ fontSize: 18, fontFamily: "Regular" }}>Enter your unique code here</Text>
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
                    // containedrStyle={{ width: '80%', height: 200, paddingHorizontal: 32 }}
                    tintColor="#000"
                />
            </View>

            <Pressable onPress={handleSubmit} style={styles.button}>
                {
                    isLoadingSubmit ?
                        <ActivityIndicator color='black' animating={isLoadingSubmit} />
                        :
                        (
                            <View>
                                <Text style={[styles.buttonText, { width: '100%', fontFamily: "Regular" }]}>
                                    Submit
                                </Text>
                            </View>
                        )
                }

            </Pressable>

            <View style={styles.alreadyHaveAnAccount}>
                <Text style={{ fontSize: 18, fontFamily: "Regular" }}>Don't have a code?</Text>
                <TouchableOpacity onPress={handleResendCode}>
                    {
                        isLoadingResend ?
                            <ActivityIndicator color='black' animating={isLoadingResend} />
                            :
                            (
                                <Text style={{ fontSize: 18, color: "#6d5eff", fontFamily: "Regular" }}>Resend code</Text>
                            )
                    }
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