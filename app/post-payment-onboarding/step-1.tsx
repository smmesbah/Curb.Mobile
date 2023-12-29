import {
  Dimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { Link, router } from "expo-router";
import AntDesign from "react-native-vector-icons/AntDesign";
import TopSection from "component/PostPaymentComponents/TopSection";
import { Slider } from "@miblanchard/react-native-slider";
import RadioButton from "component/ui/RadioButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("screen");

const CustomMarker = () => {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: "#e64627",
      }}
    />
  );
};

const PostPaymentStep1 = () => {
  const [gender, setGender] = React.useState<string | null>(null);
  const [postcode, setPostcode] = React.useState<string | undefined>("");
  const [value, setValue] = React.useState(0);
  const data = [
    {
      // id: 3,
      value: "Male",
    },
    {
      // id: 2,
      value: "Female",
    },
    {
      // id: 3,
      value: "Prefer not to say",
    },
  ];

  const handleNext = async () => {
    const token = await AsyncStorage.getItem("token");
    const ageRange =
      value === 0 ? "AGE_16_24" : value === 1 ? "AGE_25_34" : "AGE_35_44";
    const Gender =
      gender === "Male" ? "MALE" : gender === "Female" ? "FEMALE" : "OTHER";

    const user_metadata = {
      token: token,
      ageRange: ageRange,
      gender: Gender,
      postcode: postcode,
    };

    const apiUrl = "http://localhost:8000/api/v1/onboarding/user-metadata";
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user_metadata),
    });
    const data = await response.json();
    if (!data.success) {
      alert(data.message);
    } else {
      router.push("/post-payment-onboarding/step-2");
    }
  };

  useEffect(() => {
    console.log(value)
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => router.back()}
        style={{
          justifyContent: "center",
          paddingVertical: 15,
          paddingHorizontal: 15,
        }}
      >
        <Text>
          <AntDesign name="arrowleft" size={28} color="black" />
        </Text>
      </Pressable>
      <ScrollView
        style={{ marginTop: 15 }}
        automaticallyAdjustKeyboardInsets={true}
      >
        <TopSection
          HeaderText="Let’s Get Acquainted"
          SubHeaderText="Tell us a bit about yourself to tailor your Curb experience."
        />

        <View
          style={{
            backgroundColor: "#f3f2ee",
            gap: 20,
            paddingHorizontal: width * 0.08,
            paddingVertical: 20,
          }}
        >
          <View style={{ flexDirection: "row", gap: 20 }}>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 50,
                backgroundColor: "#e64627",
              }}
            />
            <Text style={{ fontSize: 18, fontFamily: "Regular" }}>
              Your age range
            </Text>
          </View>
          <View>
            <Slider
              minimumValue={0}
              maximumValue={2}
              step={1}
              minimumTrackStyle={{
                backgroundColor: "#e64627",
                height: 8,
                borderRadius: 10,
              }}
              maximumTrackStyle={{
                backgroundColor: "#efbdb1",
                height: 8,
                borderRadius: 10,
              }}
              thumbStyle={{
                backgroundColor: "#fff",
                height: 20,
                width: 20,
                borderWidth: 4,
                borderColor: "#e64627",
                borderRadius: 50,
              }}
              onValueChange={(value) => setValue(value[0])}
              value={value}

            />

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{ fontSize: 18, marginRight: 20, fontFamily: "Regular" }}
              >
                16-24
              </Text>
              <Text style={{ fontSize: 18, fontFamily: "Regular" }}>25-34</Text>
              <Text style={{ fontSize: 18, fontFamily: "Regular" }}>
                Over 35
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#eae8e2",
            gap: 20,
            paddingHorizontal: width * 0.08,
            paddingVertical: 30,
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
              Your gender
            </Text>
          </View>
          <RadioButton data={data} onSelect={(value) => setGender(value)} />
        </View>

        <View
          style={{
            backgroundColor: "#e1dfd7",
            gap: 20,
            paddingHorizontal: width * 0.08,
            paddingVertical: 20,
          }}
        >
          <View style={{ flexDirection: "row", gap: 20 }}>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 50,
                backgroundColor: "#32ae9d",
              }}
            />
            <Text style={{ fontSize: 18, fontFamily: "Regular" }}>
              First half of your postcode
            </Text>
          </View>

          <TextInput
            style={{
              height: 50,
              borderWidth: 1,
              borderColor: "#32ae9d",
              padding: 10,
              paddingLeft: 20,
              borderRadius: 8,
              backgroundColor: "#fff",
              fontFamily: "Regular",
            }}
            onChangeText={setPostcode}
            value={postcode}
            placeholder="e.g. NW1"
          />
        </View>
        <Pressable onPress={handleNext}>
          <View style={styles.button}>
            <Text
              style={[
                styles.buttonText,
                { width: "100%", fontFamily: "Regular" },
              ]}
            >
              Next
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => router.push("/source")}>
          <Text
            style={{ textAlign: "center", fontSize: 14, fontFamily: "Regular" }}
          >
            Why do you need this information?
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostPaymentStep1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    paddingVertical: 20,
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
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    fontFamily: "Regular",
  },
});
