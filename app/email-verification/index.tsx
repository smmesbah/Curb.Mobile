import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import OTPTextView from 'react-native-otp-textinput';

const { width, height } = Dimensions.get('screen');

const EmailVerification = () => {
    const [code, setCode] = React.useState('');

    const handleChange = (code: string) => {
        // console.log(code)
        setCode(code)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Link href='./Onbording4' style={{ justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20 }}>Back</Text>
                </Link >

                <View style={styles.curb}>
                    <Text style={styles.curbText}>curb</Text>
                    <View style={[styles.dot]} />
                </View>
            </View>

            <View style={styles.signupTextSection}>
                <Text style={{ fontSize: 42, fontWeight: '500' }}>Verify your email</Text>
                <Text style={{ fontSize: 18, }}>We sent a verification code to mesbah@recruit.so</Text>
            </View>

            <View style={{ backgroundColor: '#f3f2ee', gap: 20, marginVertical: 20, paddingHorizontal: width * 0.1, paddingVertical: 25 }}>
                <View style={{ flexDirection: 'row', gap: 20 }}>
                    <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: '#e64627', }} />
                    <Text style={{ fontSize: 18 }}>Enter your unique code here</Text>
                </View>

                <OTPTextView
                    handleTextChange={handleChange}
                    inputCount={5}
                    keyboardType="numeric"
                    autoFocus={true}
                    inputCellLength={1}
                    textInputStyle={{
                        width: 50,
                        height: 50,
                        borderWidth: 1,
                        borderRadius: 8,
                        backgroundColor: '#fff',
                        borderColor: '#000',

                    }}
                    // containerStyle={{ width: '80%', height: 200, paddingHorizontal: 32 }}
                    tintColor="#000"
                />
            </View>

            <View style={styles.button}>
                <Link href="/subscription-plan" style={[styles.buttonText, { width: '100%' }]}>
                    Submit
                </Link>
            </View>

            <View style={styles.alreadyHaveAnAccount}>
                <Text style={{ fontSize: 18 }}>Don't have a code?</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 18, color: "#6d5eff" }}>Resend code</Text>
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