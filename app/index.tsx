import { View, Text, SafeAreaView, ImageBackground, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Link } from 'expo-router';

const image = { uri: "../assets/onbording1.jpg" };

const Index = () => {
  const [rememberMe, setRememberMe] = React.useState(false);
  const handleLoginWithHealthKeyPress = () => {
    alert('Login with Health Key');
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/onbording1.jpg')} style={styles.image} imageStyle={{ borderRadius: 15, height: "100%", width: "100%" }}>
        <View style={styles.curb}>
          <Text style={styles.curbText}>curb</Text>
          <View style={styles.dot}></View>
        </View>

        <View style={styles.flex}>
          <Text style={styles.text1}>Your path to a better relationship with alcohol.</Text>
          <Text style={styles.text2}>Curb helps people who want to change their relationshiop with alcohol.</Text>
        </View>
      </ImageBackground>

      <Pressable style={styles.button} onPress={handleLoginWithHealthKeyPress}>
        <Text style={styles.buttonText}>Log in with Health Key</Text>
      </Pressable>

      <Text style={styles.continueWith}>Continue with</Text>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => alert('Facebook')}>
          <Image source={require('../assets/facebook.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Google')}>
          <Image source={require('../assets/google.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} style={styles.rememberMe}>
        <View style={styles.radio}>
          {rememberMe ? <View style={styles.radioBg}></View> : null}
        </View>
        <Text style={styles.rememberMeText}>Remember me</Text>
      </TouchableOpacity>

      <View style={styles.dontHaveAccount}>
        <Text style={styles.rememberMeText}>Don't have an account? </Text>
        <TouchableOpacity>
          {/* <Link href="/Onbording1" style={[styles.rememberMeText, {fontWeight: '500'}]}>Sign Up here</Link> */}
          <Link href="/subscription-plan" style={[styles.rememberMeText, {fontWeight: '500'}]}>Sign Up here</Link>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingVertical: 15,
  },
  image: {
    resizeMode: 'contain',
    justifyContent: 'center',
    width: null,
    height: "70%",
    marginHorizontal: 15,
    marginTop: 30,
    position: 'relative',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: '#000000a0',
  },
  curb: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    backgroundColor: '#fff',
    width: 15,
    height: 15,
    borderRadius: 50,
    marginLeft: 10,
    color: '#fff',
  },
  curbText: {
    color: 'white',
    fontSize: 42,
    // fontWeight: 'bold',
    letterSpacing: 5,
  },
  text1: {
    color: 'white',
    fontSize: 42,
    lineHeight: 40,
  },
  text2: {
    color: 'white',
  },
  flex: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'column',
    gap: 20,
    padding: 10,
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
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 8,
    gap: 20,
  },
  continueWith: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
  },
  radio: {
    width: 30,
    height: 30,
    borderColor: "#32ae9d",
    borderRadius: 50,
    borderWidth: 2,
    // margin: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 5,
    gap: 10,
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
});

export default Index