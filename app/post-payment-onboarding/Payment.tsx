import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
  Animated,
  Easing,
} from "react-native";
import BackArrow from "components/icons/BackArrow";
import { router, useNavigation } from "expo-router";
import NotValidIcon from "components/icons/NotValidIcon";
import * as Progress from "react-native-progress";
import ProcessingIcon from "components/icons/ProcessingIcon";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Mixpanel } from "mixpanel-react-native";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const trackAutomaticEvents = true;
const mixpanel = new Mixpanel(`${process.env.EXPO_PUBLIC_MIXPANEL_TOKEN}`, trackAutomaticEvents);
mixpanel.init();

const codes = ["FREECURBNHS", "FREECURBFRIEND", "FREECURB", "FREECURBHEALTH"];
const Payment = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");
  const [processModal, setProcessModal] = React.useState(false);
  const [hkuser, setHkuser] = React.useState(false);
  const [nonhkuser, setNonhkuser] = React.useState(false);
  const [curbFriend, setCurbFriend] = React.useState(false);
  const [freeCurb, setFreeCurb] = React.useState(false);

  const rotation = React.useRef(new Animated.Value(0)).current;
  const handleApplyCode = async () => {
    let hkUserToUpdate = false;
    let nonHkUserToUpdate = false;
    let curbFriendToUpdate = false;
    let freeCurbToUpdate = false;

    if (text === "FREECURBNHS") nonHkUserToUpdate = true;
    else if (text === "FREECURBFRIEND") curbFriendToUpdate = true;
    else if (text === "FREECURB") freeCurbToUpdate = true;
    else hkUserToUpdate = true;
    try {
      const token = await AsyncStorage.getItem("token");
      const res = await axios.post(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/onboarding/user-referrel-code`,
        {
          token: token,
          HKUser: hkUserToUpdate,
          NonHKUser: nonHkUserToUpdate,
          CurbFriend: curbFriendToUpdate,
          UsingFreeCurb: freeCurbToUpdate,
        }
      );
      if (res.data.success) {
        setProcessModal(true);
        await axios.put(`${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/auth/update-login-count/${token}`)
        const updatedOnboardingSteps = await axios.patch(`${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/onboarding/update-onboarding-steps`, {
          token: token,
          onboardingSteps: 7
        })
        setTimeout(() => {
          setProcessModal(false);
          mixpanel.track('Submit Access Code', {'Access Code': text})
          router.push("/post-payment-onboarding/success-page");
        }, 2000);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const rotateImage = () => {
    Animated.timing(rotation, {
      toValue: 360,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      rotation.setValue(0);
      rotateImage();
    });
  };

  React.useEffect(() => {
    rotateImage();
  }, []);

  const rotateStyle = {
    transform: [
      {
        rotate: rotation.interpolate({
          inputRange: [0, 360],
          outputRange: ["0deg", "360deg"],
        }),
      },
    ],
  };

  return (
    <ScrollView style={{ backgroundColor: "#f5f6f4" }}>
      <View style={Styles.container}>
        <View style={Styles.header_container}>
          <TouchableOpacity onPress={() => router.back()}>
            <BackArrow />
          </TouchableOpacity>
          <Text style={Styles.header_text}>Access Code</Text>
        </View>
        <Text style={Styles.header_subtext}>
          Enter your promo code to claim your free access from the Curb team
        </Text>
      </View>
      <View style={Styles.container2}>
        <Text style={Styles.promo_code}>Enter your code for FREE access</Text>
        <TextInput
          style={[
            Styles.text_input,
            {
              backgroundColor:
                text === ""
                  ? "#fff"
                  : codes.find((item) => item === text)
                    ? "rgba(51, 174, 156, 0.05)"
                    : "rgba(230, 69, 40, 0.05)",
              borderColor:
                text === ""
                  ? "#b0b0b4"
                  : codes.find((item) => item === text)
                    ? "#33AE9C"
                    : "#E64528",
            },
          ]}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter your promo code"
          placeholderTextColor="#b0b0b4"
          textAlign="center"
        />
        {/* {
                    text === code ? <Text style={[Styles.text_style, { color: '#33AE9C' }]}>Code is valid</Text> :
                        text === "" ? null :
                            <View style={Styles.invalid}>
                                <NotValidIcon />
                                <Text style={[Styles.text_style, { color: '#E64528' }]}>Code not valid, please try again.</Text>
                            </View>

                } */}
        {codes.find((item) => item === text) ? (
          <Text style={[Styles.text_style, { color: "#33AE9C" }]}>
            Code is valid
          </Text>
        ) : text === "" ? null : (
          <View style={Styles.invalid}>
            <NotValidIcon />
            <Text style={[Styles.text_style, { color: "#E64528" }]}>
              Code not valid, please try again.
            </Text>
          </View>
        )}
        <TouchableOpacity
          onPress={handleApplyCode}
          disabled={!codes.find((item) => item === text)}
        >
          <View
            style={[
              Styles.btn_container,
              {
                backgroundColor: codes.find((item) => item === text)
                  ? "#0D3F4A"
                  : "#bfcccd",
                borderColor: codes.find((item) => item === text)
                  ? "#33AE9C"
                  : "#fff",
              },
            ]}
          >
            <Text style={Styles.btn_text}>Apply code</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal visible={processModal} transparent>
        <View style={Styles.modal_style}>
          <Animated.View style={[rotateStyle]}>
            <ProcessingIcon />
          </Animated.View>
          <Text style={Styles.modal_text}>Processing...</Text>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Payment;

const Styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItem: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  header_container: {
    marginTop: 30,
    paddingTop: 25,
    paddingHorizontal: 20,
    width: Width,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header_text: {
    color: "#080D09",
    fontFamily: "Medium",
    fontSize: 28,
  },
  header_subtext: {
    marginTop: 36,
    marginBottom: 40,
    color: "#4E4F4E",
    fontFamily: "Regular",
    fontSize: 18,
    lineHeight: 28,
    marginLeft: 20,
    marginRight: 20,
  },
  promo_code: {
    marginTop: 30,
    color: "#080D09",
    fontSize: 18,
    fontFamily: "Medium",
    textAlign: "center",
  },
  text_input: {
    width: Width * 0.84,
    height: 52,
    paddingVertical: 12,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 12312,
    borderWidth: 0.5,
    borderColor: "#b0b0b4",
    fontFamily: "Regular",
    fontSize: 16,
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#f5f6f4",
  },
  btn_container: {
    width: Width * 0.84,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12312,
    // backgroundColor: '#0D3F4A',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 0.5,
    // borderColor: '#33AE9C',
  },
  btn_text: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Regular",
    fontSize: 16,
    letterSpacing: -0.14,
  },
  text_style: {
    fontFamily: "Regular",
    fontSize: 14,
  },
  invalid: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  modal_style: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    height: "100%",
  },
  modal_text: {
    marginTop: 16,
    color: "#080D09",
    fontFamily: "Regular",
    fontSize: 20,
  },
});
