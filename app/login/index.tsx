import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import AntDesign from "react-native-vector-icons/AntDesign";
import { CheckedFilled } from "components/icons/checkedFilled";
import ShowPasswordIcon from "components/icons/ShowPasswordIcon";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const { width, height } = Dimensions.get("screen");

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleLogin = async () => {
    if (email === "" && password === "") {
      Alert.alert(
        "Email and Password",
        "Please enter your Email and Password.",
        [{ text: "OK" }],
        { cancelable: false }
      )
      return;
    }
    else if (email === "") {
      Alert.alert(
        "Email is required",
        "Please enter your email address",
        [{ text: "OK" }],
        { cancelable: false }
      )
      return;
    }
    else if (password === "") {
      Alert.alert(
        "Password is required",
        "Please enter your password",
        [{ text: "OK" }],
        { cancelable: false }
      )
      return;
    }
    const user = {
      email: email,
      password: password,
      rememberMe: rememberMe,
    };
    try {
      // console.log(user)
      const apiUrl = `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/auth/login`;
      const response = await axios.post(apiUrl, user);
      const data = response.data;
      if (!data.success) {
        alert(data.message);
      } else {
        await AsyncStorage.setItem("token", data.token);
        // console.log(data.user.userLoginCount);
        if (data.user.userLoginCount === 0) {
          // check the onboarding steps
          const onboardingSteps = await axios.get(`${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/onboarding//onboarding-steps/${data.token}`);
          // console.log(onboardingSteps.data)
          //if the onboarding steps = 0 then redirect to the onboarding step 1
          if (onboardingSteps.data.data.stepCompleted === 0) {
            while (router.canGoBack()) {
              router.back();
            }
            router.replace("/post-payment-onboarding/step-1");
            return;
          } else if (onboardingSteps.data.data.stepCompleted === 1) {
            while (router.canGoBack()) {
              router.back();
            }
            router.replace("/post-payment-onboarding/step-2");
            return;
          } else if (onboardingSteps.data.data.stepCompleted === 2) {
            while (router.canGoBack()) {
              router.back();
            }
            router.replace("/post-payment-onboarding/step-3");
            return;
          } else if (onboardingSteps.data.data.stepCompleted === 3) {
            while (router.canGoBack()) {
              router.back();
            }
            router.replace("/post-payment-onboarding/weekly-drink-summary");
            return;
          } else if (onboardingSteps.data.data.stepCompleted === 4) {
            while (router.canGoBack()) {
              router.back();
            }
            router.replace("/post-payment-onboarding/comparison-stat");
            return;
          } else if (onboardingSteps.data.data.stepCompleted === 5) {
            while (router.canGoBack()) {
              router.back();
            }
            router.replace("/post-payment-onboarding/WeekDrinking");
            return;
          } else if (onboardingSteps.data.data.stepCompleted === 6) {
            while (router.canGoBack()) {
              router.back();
            }
            router.replace("/post-payment-onboarding/Payment");
            return;
          } else {
            while (router.canGoBack()) {
              router.back();
            }
            router.replace("/homeScreen");
            return;
          }
          // const apiUrl = `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/auth/update-login-count/${data.token}`;
          // const res = await axios.put(apiUrl);
          // const resData = res.data;
          // while (router.canGoBack()) {
          //   router.back();
          // }
          // router.replace("/post-payment-onboarding/step-1");
        } else {
          const apiUrl = `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/auth/update-login-count/${data.token}`;
          const res = await axios.put(apiUrl);
          while (router.canGoBack()) {
            router.back();
          }
          router.replace("/homeScreen");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoBack = async () => {
    const token = await AsyncStorage.getItem("token");
    // if(token===null){
    //   router.replace('/')
    // }
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Pressable
            style={{ justifyContent: "center" }}
            onPress={handleGoBack}
          >
            <Text>
              <AntDesign name="arrowleft" size={28} color="black" />
            </Text>
          </Pressable>

          <View style={styles.curb}>
            <Text style={styles.curbText}>curb</Text>
            <View style={[styles.dot]} />
          </View>
        </View>

        <View style={styles.signupTextSection}>
          <Text
            style={{ fontSize: 42, fontWeight: "500", fontFamily: "Regular" }}
          >
            Log in
          </Text>
          {/* <Text style={{ fontSize: 18, fontFamily: "Regular" }}>
            Please enter your details to continue.
          </Text> */}
        </View>

        <View style={{ marginVertical: 20 }}>
          <View
            style={{
              backgroundColor: "#f3f1ef",
              gap: 20,
              paddingHorizontal: width * 0.1,
              paddingVertical: 25,
            }}
          >
            <View style={{ flexDirection: "row", gap: 20 }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 50,
                  backgroundColor: "#7844ff",
                }}
              />
              <Text style={{ fontSize: 18, fontFamily: "Regular" }}>
                Email address
              </Text>
            </View>

            <TextInput
              style={{
                height: 50,
                borderWidth: 1,
                padding: 10,
                borderRadius: 8,
                backgroundColor: "#fff",
                fontFamily: "Regular",
              }}
              onChangeText={(text) => setEmail(text.toLowerCase())}
              value={email}
              placeholder="Enter Email Address"
              autoComplete="email"
            />
          </View>

          <View
            style={{
              backgroundColor: "#eae8e2",
              gap: 20,
              paddingHorizontal: width * 0.1,
              paddingVertical: 25,
            }}
          >
            <View style={{ flexDirection: "row", gap: 20 }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 50,
                  backgroundColor: "#7844ff",
                }}
              />
              <Text style={{ fontSize: 18, fontFamily: "Regular" }}>
                Password
              </Text>
            </View>
            <View
              style={{
                height: 50,
                borderWidth: 1,
                padding: 10,
                borderRadius: 8,
                backgroundColor: "#fff",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TextInput
                style={{
                  width: "90%",
                  fontFamily: "Regular",
                }}
                onChangeText={setPassword}
                value={password}
                secureTextEntry={!showPassword}
                placeholder="Enter Password"
              />
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <ShowPasswordIcon />
              </Pressable>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            marginTop: 0,
            paddingHorizontal: 30,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => setRememberMe(!rememberMe)}
            style={styles.rememberMe}
          >
            <View style={styles.radio}>
              {rememberMe ? <CheckedFilled /> : <View style={styles.radio} />}
            </View>
            <Text style={styles.rememberMeText}>Remember me</Text>
          </TouchableOpacity>

          <Link href="/forget-password">
            <Text style={[styles.rememberMeText, { color: "#7844FF" }]}>
              Forget password?
            </Text>
          </Link>
        </View>

        <Pressable onPress={handleLogin} style={styles.button}>
          <View >
            <Text
              style={[
                styles.buttonText,
                { width: "100%", fontFamily: "Regular" },
              ]}
            >
              Log in
            </Text>
          </View>
        </Pressable>

        <View style={styles.alreadyHaveAnAccount}>
          <Text style={{ fontSize: 18, fontFamily: "Regular" }}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text
              style={{ fontSize: 18, color: "#6d5eff", fontFamily: "Regular" }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    paddingVertical: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  curb: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  curbText: {
    color: "black",
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 5,
    fontFamily: "Regular",
  },
  dot: {
    backgroundColor: "#000",
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 8,
    gap: 20,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: "contain",
  },
  radio: {
    width: 25,
    height: 25,
    borderColor: "#32ae9d",
    borderRadius: 50,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
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
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  rememberMeText: {
    fontSize: 14,
    fontFamily: "Regular",
  },
  dontHaveAccount: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
    marginVertical: 5,
    gap: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 25,
    marginHorizontal: 30,
    marginVertical: 15,
    padding: 10,
    marginTop: height * 0.04,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    fontFamily: "Regular",
  },
  alreadyHaveAnAccount: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
});
