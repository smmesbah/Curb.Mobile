import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Dimensions, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CheckedFilled } from 'components/icons/checkedFilled';
import ShowPasswordIcon from 'components/icons/ShowPasswordIcon';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('screen');

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [optIn, setOptIn] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleLogin = async() => {
    const user={
      email: email,
      password: password
    }
    try{
      const apiUrl='http://localhost:8000/api/v1/auth/login';
      const response=await fetch(apiUrl, {method: 'POST',headers: {'content-type': 'application/json'}, body: JSON.stringify(user)});
      const data= await response.json();
      if(!data.success){
        console.log(data.message)
        alert(data.message)
      }
      else{
        console.log("jwt token",data.token)
        await AsyncStorage.setItem('token', data.token);
        // const value=await AsyncStorage.getItem('token');
        // console.log("jwt token",value)
        // console.log("decoded",data.decoded);
        while(router.canGoBack()){
          router.back();
        }
        router.replace(`/homeScreen`)
      }
    }catch(err) {
      console.log(err);
    }
  }

  const handleGoBack = async() => {
    const token = await AsyncStorage.getItem('token');
    // if(token===null){
    //   router.replace('/')
    // }
    router.back();
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Pressable style={{ justifyContent: 'center' }} onPress={handleGoBack}>
            <Text>
              <AntDesign name="arrowleft" size={28} color="black" />
            </Text>
          </Pressable >

          <View style={styles.curb}>
            <Text style={styles.curbText}>curb</Text>
            <View style={[styles.dot]} />
          </View>
        </View>

        <View style={styles.signupTextSection}>
          <Text style={{ fontSize: 42, fontWeight: '500', fontFamily: "Regular" }}>Login</Text>
          <Text style={{ fontSize: 18, fontFamily: "Regular"}}>Please enter your details to continue.</Text>
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
              onChangeText={(text)=>setEmail(text.toLowerCase())}
              value={email}
              placeholder='Enter Email Address'
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

        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center', marginTop: 0, paddingHorizontal: 30, justifyContent: 'space-between' }}>

          <TouchableOpacity onPress={() => setOptIn(!optIn)} style={styles.rememberMe}>
            <View style={styles.radio}>
              {optIn ? <CheckedFilled/> : <View style={styles.radio}/>}
            </View>
            <Text style={styles.rememberMeText}>Remember me</Text>
          </TouchableOpacity>

          <Link href='/forget-password'><Text style={[styles.rememberMeText, {color: '#7844FF'}]}>Forget password?</Text></Link>

        </View>

        
        <Pressable onPress={handleLogin}>
          <View style={styles.button}>
            
              <Text style={[styles.buttonText, { width: '100%', fontFamily: "Regular"}]}>
                Login
              </Text>
            
          </View>
        </Pressable>

        <View style={styles.alreadyHaveAnAccount}>
          <Text style={{ fontSize: 18, fontFamily: "Regular"}}>Don't have an account?</Text>
          <TouchableOpacity onPress={()=>router.push('/signup')}>
            <Text style={{ fontSize: 18, color: "#6d5eff", fontFamily: "Regular"}}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login

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
    marginTop: height*0.09
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