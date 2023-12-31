import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Dimensions, ScrollView, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { Link, router, useGlobalSearchParams } from 'expo-router'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CheckedFilled } from 'components/icons/checkedFilled';
import ShowPasswordIcon from 'components/icons/ShowPasswordIcon';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadLocalRawResourceAndroid } from 'react-native-svg/lib/typescript/LocalSvg';

const { width, height } = Dimensions.get('screen');

const Signup = () => {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [termsCondition, setTermsCondition] = React.useState(false);
  const [optIn, setOptIn] = React.useState(false);
  const [research, setResearch] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [password, setPassword] = React.useState('');
 

  const dispatch = useDispatch();
  const Data=useGlobalSearchParams();

  const handleSignup = async() => {
    // console.log("Helloooooooo");
    if(password.length>=8 && termsCondition && optIn && research){
      const user={
        name: fullName,
        email: Data.signup,
        password: password
      }
      // console.log(fullName, password)

      try{
        if(fullName && password) {
          // console.log(user)
        const apiUrl=`${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/auth/create-user`;
        const response=await fetch(apiUrl, {method: 'POST',headers: {'content-type': 'application/json'}, body: JSON.stringify(user)});
        const data= await response.json();
        if(!data.success){
          alert(data.message)
          console.log(data)
        }
        else{
          router.push('/login')
        }
        
        }
        else{
          alert('Please enter all the details');
        }
      }catch(err) {
        console.log(err);
      }
    }
    else if(password.length<8){
      alert('Password must be of 8 characters');
    }
    else if(!termsCondition || !optIn || !research){
      alert('Please agree to all the terms and conditions');
    }
  }


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
          <Text style={{ fontSize: 42, fontWeight: '500', fontFamily: "Regular" }}>Sign up</Text>
          <Text style={{ fontSize: 18, fontFamily: "Regular"}}>Please enter your details to continue.</Text>
        </View>

        <View style={{ marginVertical: 40 }}>
          <View style={{ backgroundColor: '#f9f8f7', gap: 20, paddingHorizontal: width * 0.1, paddingVertical: 25 }}>
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: '#7844ff', }} />
              <Text style={{ fontSize: 18, fontFamily: "Regular" }}>Full name</Text>
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
              onChangeText={setFullName}
              value={fullName}
              placeholder='Enter Full Name'
            />
          </View>

          <View style={{ backgroundColor: '#eae8e2', gap: 20, paddingHorizontal: width * 0.1, paddingVertical: 25 }}>
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: '#7844ff', }} />
              <Text style={{ fontSize: 18, fontFamily: "Regular" }}>Password</Text>
            </View>
            <View style={
                {
                  height: 50,
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 8,
                  backgroundColor: '#fff',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }
            }>
            <TextInput
              style={
                {
                  width: '90%',
                  fontFamily: "Regular"
                }
              }
              onChangeText={setPassword}
              value={password}
              secureTextEntry={!showPassword}
              placeholder='Enter Password'
            />
            <Pressable onPress={()=>setShowPassword(!showPassword)}>
                <ShowPasswordIcon/>
            </Pressable>
            </View>
            
          </View>
        </View>

        <View style={{ gap: 10, alignItems: 'flex-start', marginTop: 0, paddingHorizontal: 30, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => setTermsCondition(!termsCondition)} style={styles.rememberMe}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              {termsCondition ? <CheckedFilled/> : <View style={styles.radio}/>}
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.rememberMeText}>I agree to our <Link href='/terms-condition' style={{ color: "#6d5eff", fontFamily: "Regular"}}>Terms & Conditions</Link></Text> 
              <Text style={styles.rememberMeText}>and <Link href='/privacy-policy' style={{ color: "#6d5eff", fontFamily: "Regular"}}>Privacy Policy</Link></Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setOptIn(!optIn)} style={styles.rememberMe}>
            <View style={styles.radio}>
              {optIn ? <CheckedFilled/> : <View style={styles.radio}/>}
            </View>
            <Text style={styles.rememberMeText}>Opt-in to marketing emails</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setResearch(!research)} style={styles.rememberMe}>
            <View style={styles.radio}>
              {research ? <CheckedFilled/> : <View style={styles.radio}/>}
            </View>
            <Text style={styles.rememberMeText}>Join our research group <Link href='/involve' style={{color: '#5B4AFF'}}>(What does this involve?)</Link></Text>
          </TouchableOpacity>
        </View>

        

        <View style={styles.button}>
          <Pressable onPress={handleSignup}>
            <View style={[ { width: '100%'}]}>
              <Text style={styles.buttonText}>Create account </Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.alreadyHaveAnAccount}>
          <Text style={{ fontSize: 18, fontFamily: "Regular"}}>Already have an account?</Text>
          <TouchableOpacity onPress={()=>router.push('/login')}>
            <Text style={{ fontSize: 18, color: "#6d5eff", fontFamily: "Regular"}}>Log-in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    marginTop: height * 0.02,
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
    marginTop: 10,
    flexDirection: 'row',
    gap: 25,
  },
  rememberMeText: {
    fontSize: 18,
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
    marginTop: height*0.1
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
  },
})