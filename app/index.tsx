import { View, Text, SafeAreaView, ImageBackground, StyleSheet, Image, Pressable, TouchableOpacity, Dimensions, ScrollView} from 'react-native'
import React from 'react'
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Link, router } from 'expo-router';
import { CheckedFilled } from 'components/icons/checkedFilled';

const image = { uri: "../assets/onbording1.jpg" };

const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;

const Index = () => {
  const [rememberMe, setRememberMe] = React.useState(false);
  const handleLoginWithHealthKeyPress = () => {
    alert('Login with Health Key');
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{backgroundColor: 'white'}}>
      <ImageBackground source={require('../assets/onbording1.jpg')} style={styles.image} imageStyle={{ borderRadius: 15, height: "100%", width: "100%" }}>
        <View style={styles.curb}>
          <Text style={styles.curbText}>curb</Text>
          <View style={styles.dot}></View>
        </View>

        <View style={styles.flex}>
          <Text style={styles.text1}>Welcome to Curb</Text>
          <Text style={styles.text2}>You've taken your first step towards better habits</Text>
        </View>
      </ImageBackground>

      <Pressable style={styles.button} onPress={()=>router.push('/step-2')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>


      <View style={styles.dontHaveAccount}>
        <Text style={styles.rememberMeText}>Already have an account?</Text>
        <TouchableOpacity>
          <Link href="step-1" style={[styles.rememberMeText, {color: '#5B4AFF'}]}>Log in</Link>
          {/* <Link href="/login" style={[styles.rememberMeText, {fontWeight: '500'}]}>Sign Up here</Link> */}
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingVertical: 15,
    // height: windowHeight*.9
  },
  image: {
    resizeMode: 'contain',
    justifyContent: 'center',
    width: null,
    height: windowHeight*.7,
    marginHorizontal: 15,
    marginTop: 30,
    position: 'relative',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: "Regular"
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
    fontFamily: "Regular"
  },
  text1: {
    color: 'white',
    fontSize: 42,
    lineHeight: 40,
    fontFamily: "Regular"
  },
  text2: {
    color: 'white',
    fontFamily: "Regular"
  },
  flex: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'column',
    gap: 10,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 25,
    marginHorizontal: 30,
    marginTop: 25,
    // marginBottom: 5,
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: "Regular"
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
    fontFamily: "Regular"
  },
  radio: {
    width: 25,
    height: 25,
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
    marginTop: 15,
    gap: 10,
  },
  rememberMeText: {
    fontSize: 18,
    fontFamily: "Regular", 
  },
  dontHaveAccount: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 15,
    gap: 10,
    marginBottom:15
  },
});

export default Index;


{/* <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Tab" component={Tab}/>
            <Stack.Screen name="MyProfile" component={MyProfile}/>
            <Stack.Screen name="EditProfile" component={EditProfile}/>
            <Stack.Screen name="FeedbackAndSupport" component={FeedbackAndSupport}/>
            <Stack.Screen name="WeekDrinking" component={WeekDrinking}/>
            <Stack.Screen name="Payment" component={Payment}/>
        </Stack.Navigator>
    </NavigationContainer> */}