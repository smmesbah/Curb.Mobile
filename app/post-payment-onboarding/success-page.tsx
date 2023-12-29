import SuccessIcon from "components/icons/SuccessIcon";
import { router } from "expo-router";
import React from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Animated,
  Pressable,
} from "react-native";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const Success = () => {
  return (
    <SafeAreaView>
      <View style={Styles.container}>
        <SuccessIcon />

        <Text style={Styles.success_text}>Success</Text>
      </View>
      <View style={Styles.container2}>
        <Text style={Styles.curb_text}>Curb has given you</Text>
        <Text style={Styles.curb_text}>
          <Text style={Styles.highlighted_text}>FREE</Text> membership
        </Text>
      </View>
      <View style={Styles.container3}>
        <Text style={Styles.subtext}>
          Please continue to finish creating your
        </Text>
        <Text style={Styles.subtext}>account and start using the app.</Text>
      </View>
      <Pressable onPress={() => router.push("/homeScreen")}>
        <View style={Styles.btn_container}>
          <Text style={Styles.btn_text}>Continue</Text>
          <Text style={Styles.btn_text}>{">"}</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default Success;

const Styles = StyleSheet.create({
  container: {
    width: Width,
    height: Height * 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  success_text: {
    fontFamily: "Medium",
    fontSize: 24,
    color: "#080D09",
  },
  container2: {
    width: Width,
    justifyContent: "center",
    alignItems: "center",
  },
  curb_text: {
    fontFamily: "Regular",
    fontSize: 20,
    color: "#080D09",
    marginBottom: 5,
    textAlign: "center",
  },
  highlighted_text: {
    color: "#33AE9C",
    fontFamily: "Medium",
  },
  subtext: {
    color: "#4e4f4e",
    textAlign: "center",
    fontFamily: "Regular",
    fontSize: 16,
    lineHeight: 22,
  },
  container3: {
    width: Width,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  btn_container: {
    width: Width * 0.8,
    height: 52,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    alignSelf: "center",
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#0d3f4a",
    flexDirection: "row",
    gap: 15,
  },
  btn_text: {
    color: "#080D09",
    fontFamily: "Regular",
    fontSize: 16,
  },
});
