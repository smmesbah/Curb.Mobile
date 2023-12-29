import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Dimensions, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Link, router, useLocalSearchParams } from 'expo-router'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CheckedFilled } from 'components/icons/checkedFilled';
import ShowPasswordIcon from 'components/icons/ShowPasswordIcon';

const { width, height } = Dimensions.get('screen');

const ResetPassword = () => {
  const userEmail=useLocalSearchParams();
  const [email, setEmail] = React.useState('');
  const [newpassword, setNewPassword] = React.useState('');
  const [confirmpassword, setConfirmPassword] = React.useState('');
  const [optIn, setOptIn] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  React.useEffect(() => {
    console.log(userEmail);
  }, [])

  const handleResetPassword = async() => {
    if(newpassword===confirmpassword){
      try{
        const apiUrl=`${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/auth/reset-password`;
        const response=await fetch(apiUrl, {method: 'PUT',headers: {'content-type': 'application/json'}, body: JSON.stringify({email: userEmail.email, password: newpassword})});
        const data= await response.json();
        if(!data.success){
            alert(data.message)
        }
        else{
            // console.log(data.message);
            router.push('/login')
        }
        
    }catch(err) {
        console.log(err);
    }
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
          <Text style={{ fontSize: 42, fontWeight: '500', fontFamily: "Regular" }}>Reset Password</Text>
          <Text style={{ fontSize: 18, fontFamily: "Regular"}}>Create a new password for rebeccasmith@google.com</Text>
        </View>

        <View style={{ marginVertical: 20 }}>
          <View style={{ backgroundColor: '#f3f1ef', gap: 20, paddingHorizontal: width * 0.1, paddingVertical: 25 }}>
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: '#7844ff', }} />
              <Text style={{ fontSize: 18, fontFamily: "Regular" }}>New Password</Text>
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
              onChangeText={setNewPassword}
              value={newpassword}
              secureTextEntry={!showNewPassword}
              placeholder='Enter Password provided'
            />
            <Pressable onPress={()=>setShowNewPassword(!showNewPassword)}>
                <ShowPasswordIcon/>
            </Pressable>
            </View>
          </View>

          <View style={{ backgroundColor: '#eae8e2', gap: 20, paddingHorizontal: width * 0.1, paddingVertical: 25 }}>
            <View style={{ flexDirection: 'row', gap: 20 }}>
              <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: '#7844ff', }} />
              <Text style={{ fontSize: 18, fontFamily: "Regular" }}>Confirm password</Text>
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
              onChangeText={setConfirmPassword}
              value={confirmpassword}
              secureTextEntry={!showConfirmPassword}
              placeholder='Enter Password'
            />
            <Pressable onPress={()=>setShowConfirmPassword(!showConfirmPassword)}>
                <ShowPasswordIcon/>
            </Pressable>
            </View>
            
          </View>
        </View>
        
        <Pressable onPress={handleResetPassword}>
          <View style={styles.button}>
            <Text style={[styles.buttonText, { width: '100%', fontFamily: "Regular"}]}>
              Reset password
            </Text>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ResetPassword

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
    marginTop: height*0.08
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