import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Linking,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useNavigation } from "expo-router";
import BackArrow from "components/icons/BackArrow";
import AvoidComponent from "components/AvoidComponent";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DailyCheckInIcon from "components/icons/DailyCheckInIcon";
import ToolsIcon from "components/icons/ToolsIcon";
import SupportIcon from "components/icons/SupportIcon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

// const Data = ["13 drinks", "39 units", "6000 calories", "£280"];

const WeekDrinking = () => {
  const navigation = useNavigation();
  const [spend, setSpend] = React.useState(0);
  const [calories, setCalories] = React.useState(0);
  const [units, setUnits] = React.useState(0);
  const [drinks, setDrinks] = React.useState(0);
  const [goals, setGoals] = React.useState([])
  React.useEffect(() => {
    getAvoidDrinkingInfo();
    getGoals();
  }, []);

  const getAvoidDrinkingInfo = async () => {
    // console.log("slkdfj");
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(
      `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/onboarding/user-drink-avoid-calculation/${token}`
    );
    if (response.data.success) {
    //   console.log(response.data.data);
      setSpend(response.data.data.spendPerMonth);
      setCalories(response.data.data.totalCaloriesConsumed);
      setUnits(response.data.data.totalDrinkUnitsConsumed);
      setDrinks(response.data.data.totalDrinkNumber);
    }
  };
  const getGoals = async () => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(
      `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/onboarding/user-goals/${token}`
    );
    if (response.data.success) {
        const goalData = response.data.data;
        const goalsArray = goalData.map((item: { goal: any; }) => item.goal);
        setGoals(goalsArray);
        // console.log(goals)
      }
  }  
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={Styles.header_container}>
        <TouchableOpacity onPress={() => router.back()}>
          <BackArrow />
        </TouchableOpacity>
        <View style={{ flexDirection: "column", paddingTop: 25 }}>
          <Text style={Styles.header_text}>Your week</Text>
          <Text style={Styles.header_text}>in drinking</Text>
        </View>
      </View>
      <ScrollView>
        <View style={Styles.container}>
          <Text style={Styles.goal_text}>Your goals</Text>
          <View style={Styles.text_portion}>
            {
                goals.map((item, index) => (
                    <Text style={Styles.text_style} key={index}>{index+1}. {item}</Text>
                ))
            }
          </View>
          <Text style={Styles.text_style2}>In 31 days we will help you</Text>
          <View style={Styles.avoid_portion}>
            {/* {Data.map((item, index) => (
              <View key={index}>
                <AvoidComponent text={item} />
              </View>
            ))} */}
             <View style={[Styles.avoid_container]}>
              <Text style={Styles.avoid_text}>Avoid</Text>
              <Text style={Styles.avoid_text_style}>{drinks} drinks</Text>
            </View>
            <View style={[Styles.avoid_container]}>
              <Text style={Styles.avoid_text}>Avoid</Text>
              <Text style={Styles.avoid_text_style}>{units} units</Text>
            </View>
            <View style={[Styles.avoid_container]}>
              <Text style={Styles.avoid_text}>Avoid</Text>
              <Text style={Styles.avoid_text_style}>{calories} calories</Text>
            </View>
            <View style={[Styles.avoid_container]}>
              <Text style={Styles.avoid_text}>Avoid</Text>
              <Text style={Styles.avoid_text_style}>€{spend}</Text>
            </View>
          </View>
          <Pressable onPress={()=>router.push('/source')}>
            <Text style={Styles.calculate_text}>How we calculate these numbers?</Text>
          </Pressable>
        </View>
        <View style={Styles.container2}>
          <Text style={Styles.text_style3}>How we'll get there</Text>
          <View style={Styles.container3}>
            <DailyCheckInIcon />
            <Text style={Styles.subtext1}>Daily check ins</Text>
            <Text style={Styles.subtext2}>
              Share your mood, be accountable to
            </Text>
            <Text style={Styles.subtext2}> yourself and your community.</Text>
          </View>
          <View style={Styles.container3}>
            <ToolsIcon />
            <Text style={Styles.subtext1}>Tools</Text>
            <Text style={Styles.subtext2}>
              Tools to improve self-awareness and
            </Text>
            <Text style={Styles.subtext2}>self-knowledge around your</Text>
            <Text style={Styles.subtext2}>drinking behaviour.</Text>
          </View>
          <View style={Styles.container3}>
            <SupportIcon />
            <Text style={Styles.subtext1}>Support</Text>
            <Text style={Styles.subtext2}>Phychological support for you</Text>
            <Text style={Styles.subtext2}>for challenging moments</Text>
            <Text style={Styles.subtext2}>on your journey</Text>
          </View>
        </View>
        <View style={Styles.container4}>
          <TouchableOpacity>
            <View style={Styles.btn_container}>
              <Text style={Styles.btn_text}>
                Tap to share your status on socials
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.btn_container}>
              <Text style={Styles.btn_text}>
                Tap to share your summary on socials
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <View style={Styles.container5}>
          <TouchableOpacity
            onPress={() => router.push("/post-payment-onboarding/Payment")}
          >
            <View style={Styles.btn_container2}>
              <Text style={Styles.btn_text}>Next</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WeekDrinking;

const Styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItem: "center",
    flexDirection: "column",
    backgroundColor: "#eae8e2",
    paddingBottom: 20,
  },
  header_container: {
    paddingTop: 25,
    paddingHorizontal: 20,
    width: Width,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
    backgroundColor: "#eae8e2",
  },
  header_text: {
    color: "#080D09",
    fontFamily: "Medium",
    fontSize: 40,
  },
  goal_text: {
    marginTop: 30,
    color: "#678596",
    fontSize: 18,
    lineHeight: 25,
    fontFamily: "Regular",
    marginLeft: Width * 0.08,
    marginRight: Width * 0.25,
  },
  text_portion: {
    marginTop: 30,
    flexDirection: "column",
    gap: 5,
  },
  text_style: {
    color: "#080D09",
    fontSize: 22,
    fontFamily: "Medium",
    marginLeft: Width * 0.08,
    marginRight: Width * 0.25,
  },
  text_style2: {
    marginTop: 30,
    color: "#678596",
    fontSize: 18,
    lineHeight: 25,
    fontFamily: "Regular",
    marginLeft: Width * 0.08,
    marginRight: Width * 0.25,
  },
  avoid_portion: {
    marginTop: 30,
    flexDirection: "column",
  },
  container2: {
    backgroundColor: "#e3e2e7",
    paddingBottom: 20,
  },
  text_style3: {
    marginTop: 30,
    color: "#080D09",
    textAlign: "center",
    fontSize: 30,
    fontFamily: "Medium",
    marginBottom: 20,
  },
  container3: {
    paddingTop: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    elevation: 5,
    marginBottom: 15,
    paddingBottom: 20,
    marginHorizontal: Width * 0.08,
  },
  subtext1: {
    marginTop: 5,
    color: "#080D09",
    fontFamily: "Medium",
    fontSize: 22,
    marginBottom: 10,
  },
  subtext2: {
    color: "#080D09",
    fontFamily: "Regular",
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  container4: {
    backgroundColor: "#668495",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  btn_container: {
    width: Width * 0.85,
    borderWidth: 1.5,
    borderRadius: 35,
    borderColor: "#fff",
    paddingVertical: 15,
  },
  btn_text: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Regular",
    fontSize: 18,
  },
  container5: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btn_container2: {
    width: Width * 0.85,
    borderRadius: 35,
    paddingVertical: 15,
    backgroundColor: "#000",
  },
  avoid_container: {
    backgroundColor: "#fff",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 20,
    elevation: 5,
    marginBottom: 15,
    marginHorizontal: Width * 0.08,
  },
  avoid_text: {
    color: "#27284e",
    fontFamily: "Medium",
    fontSize: 22,
  },
  avoid_text_style: {
    color: "#7844ff",
    fontFamily: "Medium",
    fontSize: 42,
  },
  calculate_text: {
    color: '#7844ff',
    fontFamily: 'Regular',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 10,
  }
});
