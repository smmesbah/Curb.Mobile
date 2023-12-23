import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Dimensions, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CheckedFilled } from 'components/icons/checkedFilled';
import ShowPasswordIcon from 'components/icons/ShowPasswordIcon';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('screen');

const ForgetPassword = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [optIn, setOptIn] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
          <Text style={{ fontSize: 37, fontWeight: '500', fontFamily: "Regular" }}>Forgot password?</Text>
          <Text style={{ fontSize: 18, fontFamily: "Regular"}}>Enter your email address and we will send you an email with a temporary password to reset. </Text>
        </View>

        <View style={{ marginVertical: 20 }}>
          <View style={{ backgroundColor: '#f3f1ef', gap: 20, paddingHorizontal: width * 0.1, paddingVertical: 25 }}>
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: '#7844ff', }} />
              <Text style={{ fontSize: 18, fontFamily: "Regular" }}>Email address</Text>
            </View>

            <TextInput
              style={
                {
                  height: 50,
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 8,
                  backgroundColor: '#fff',
                  fontFamily: "Regular"
                }
              }
              onChangeText={setEmail}
              value={email}
              placeholder='Enter Email Address'
            />
          </View>
        </View>

        

        <View style={styles.button}>
          <Link href="/forget-password-verification" style={[styles.buttonText, { width: '100%', fontFamily: "Regular"}]}>
              Send email
          </Link>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default ForgetPassword

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
    fontFamily: "Regular"
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
    marginHorizontal: width * 0.1,
    gap: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 8,
    gap: 20,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  radio: {
    width: 25,
    height: 25,
    borderColor: "#32ae9d",
    borderRadius: 50,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioBg: {
    backgroundColor: "#32ae9d",
    width: 20,
    height: 20,
    borderRadius: 50,
    margin: 3,
  },
  rememberMe: {
    // marginTop: 10,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rememberMeText: {
    fontSize: 14,
    fontFamily: "Regular"
  },
  dontHaveAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 5,
    gap: 10,
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
    marginTop: height*0.2
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: "Regular"
  },
  alreadyHaveAnAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10
  },
})