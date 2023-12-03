import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const { width, height } = Dimensions.get('screen');

const Signup = () => {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [termsCondition, setTermsCondition] = React.useState(false);
  const [optIn, setOptIn] = React.useState(false);


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
        <Text style={{ fontSize: 42, fontWeight: '500' }}>Sign up</Text>
        <Text style={{ fontSize: 18, }}>Please enter your details to continue.</Text>
      </View>

      <View style={{ marginVertical: 20 }}>
        <View style={{ backgroundColor: '#f3f2ee', gap: 20, paddingHorizontal: width * 0.1, paddingVertical: 25 }}>
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: '#7844ff', }} />
            <Text style={{ fontSize: 18 }}>Full name</Text>
          </View>

          <TextInput
            style={
              {
                height: 50,
                borderWidth: 1,
                padding: 10,
                borderRadius: 8,
                backgroundColor: '#fff',

              }
            }
            onChangeText={setFullName}
            value={fullName}
            placeholder='Enter Full Name'
          />
        </View>

        <View style={{ backgroundColor: '#eae8e2', gap: 20, paddingHorizontal: width * 0.1, paddingVertical: 25 }}>
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: '#7844ff', }} />
            <Text style={{ fontSize: 18 }}>Email address</Text>
          </View>
          <TextInput
            style={
              {
                height: 50,
                borderWidth: 1,
                padding: 10,
                borderRadius: 8,
                backgroundColor: '#fff',

              }
            }
            onChangeText={setEmail}
            value={email}
            placeholder='Enter email address'
            autoComplete='email'
          />
        </View>
      </View>

      <Text style={{ fontSize: 18, textAlign: 'center' }}>Continue with</Text>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => alert('Facebook')}>
          <Image source={require('../../assets/facebook.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Google')}>
          <Image source={require('../../assets/google.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={{ gap: 10, alignItems: 'flex-start', marginTop: 20, paddingHorizontal: 30 }}>
        <TouchableOpacity onPress={() => setTermsCondition(!termsCondition)} style={styles.rememberMe}>
          <View style={styles.radio}>
            {termsCondition ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.rememberMeText}>I agree to our <Link href='./terms-condition' style={{ color: "#6d5eff" }}>Terms & Conditions</Link> and <Link href='./privacy-policy' style={{ color: "#6d5eff" }}>Privacy Policy</Link></Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setOptIn(!optIn)} style={styles.rememberMe}>
          <View style={styles.radio}>
            {optIn ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.rememberMeText}>Opt-in to marketing emails</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <Link href="/email-verification" style={[styles.buttonText, { width: '100%' }]}>
          Create account
        </Link>
      </View>

      <View style={styles.alreadyHaveAnAccount}>
        <Text style={{ fontSize: 18 }}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 18, color: "#6d5eff" }}>Log-in</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default Signup

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
    width: 30,
    height: 30,
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
    flexDirection: 'row',
    gap: 25,
  },
  rememberMeText: {
    fontSize: 18,
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
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  alreadyHaveAnAccount: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
})