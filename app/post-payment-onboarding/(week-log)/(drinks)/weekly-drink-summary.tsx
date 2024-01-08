import {
  Dimensions,
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { router } from "expo-router";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import HideWithKeyboard from "react-native-hide-with-keyboard";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { EditIcon } from "components/icons/EditIcon";
import WeekEditIcon from "components/icons/WeekEditIcon";
import HighRiskIcon from "components/icons/HighRiskIcon";

const { width, height } = Dimensions.get("screen");

interface WeeklyDrinkSummaryProps {
  day: string;
  drinks: {
    drinkQuantity: number;
    drinkType: string;
    drinkSize: string;
  }[];
}

const WeeklyDrinkSummary = () => {
  const Data = useSelector((state: any) => state.drink.drink);
  //   let weekly_drink: WeeklyDrinkSummaryProps[] = [];
  const [weekly_drink, setWeekly_drink] = React.useState<
    WeeklyDrinkSummaryProps[]
  >([]);
  const [drinkCount, setDrinkCount] = React.useState<number>(0);
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  useLayoutEffect(() => {
    showData();
    getUserGender();
  }, []);
  useEffect(() => {
    getUserGender();
  }, [drinkCount]);

  const getUserGender = async () => {
    const token = await AsyncStorage.getItem("token");
    const apiUrl = `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/onboarding/user-metadata/${token}`;
    const response = await axios.get(apiUrl);
    const data = response.data.data;
    if (
      (data.gender === "FEMALE" && drinkCount > 35) ||
      (data.gender === "MALE" && drinkCount > 50)
    ) {
      setModalOpen(true);
    }
  };
  const showData = async () => {
    const token = await AsyncStorage.getItem("token");
    const apiUrl = `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/onboarding/weekly-drink/${token}`;
    const response = await fetch(apiUrl, { method: "GET" });
    const data = await response.json();
    // console.log(data)
    if (!data.success) {
      alert(data.message);
    }
    // const res = data.data;
    const res = data.data;

    setWeekly_drink((prevWeeklyDrink) => {
      const updatedWeeklyDrink = [...prevWeeklyDrink];

      res.forEach((item: any) => {
        const existingDayIndex = updatedWeeklyDrink.findIndex(
          (d) => d.day === item.day
        );

        if (existingDayIndex !== -1) {
          // If the day exists, update the existing day's drinks array
          setDrinkCount(
            (prevDrinkCount) => prevDrinkCount + item.drinkQuantity
          );
          updatedWeeklyDrink[existingDayIndex] = {
            ...updatedWeeklyDrink[existingDayIndex],
            drinks: [
              ...updatedWeeklyDrink[existingDayIndex].drinks,
              {
                drinkQuantity: item.drinkQuantity,
                drinkType: item.drinkName,
                drinkSize: item.drinkVolume,
              },
            ],
          };
        } else {
          setDrinkCount(
            (prevDrinkCount) => prevDrinkCount + item.drinkQuantity
          );
          // If the day doesn't exist, create a new entry for the day with the drink details
          const newWeeklyDrink: WeeklyDrinkSummaryProps = {
            day: item.day,
            drinks: [
              {
                drinkQuantity: item.drinkQuantity,
                drinkType: item.drinkName,
                drinkSize: item.drinkVolume,
              },
            ],
          };

          updatedWeeklyDrink.push(newWeeklyDrink);
        }
      });

      return updatedWeeklyDrink;
    });
  };

  const handleNextPress = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const updatedOnboardingSteps = await axios.patch(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/onboarding/update-onboarding-steps`,
        {
          token: token,
          onboardingSteps: 4,
        }
      );
      router.push("post-payment-onboarding/comparison-stat");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 15,
        }}
      >
        <Pressable
          onPress={() => router.back()}
          style={{ justifyContent: "flex-start", marginLeft: width * 0.05 }}
        >
          <Text>
            <AntDesign name="arrowleft" size={28} color="#080D09" />
          </Text>
        </Pressable>
        <View>
          <Text style={styles.headerText}>Your week</Text>
          <Text style={styles.headerText}>in drinking</Text>
        </View>
      </View>

      <View style={{ gap: 15 }}>
        <View style={{ marginTop: 15, gap: 5 }}>
          <Text style={styles.subheaderText}>Here is your weekly summary.</Text>
          <Text style={styles.subheaderText}>
            You can edit this at any stage.
          </Text>
        </View>
      </View>
      {/* {
                <Pressable onPress={()=>console.log(weekly_drink[0])}>
                    <Text>asdkf</Text>
                </Pressable>
            } */}
      {/* {
                weekly_drink.map((item: any, index: number) => (
                    <Text>sdfkj</Text>
                ))
            } */}
      <FlatList
        style={{
          marginTop: 25,
          // gap: 50,
        }}
        data={weekly_drink}
        renderItem={({ item, index }) => (
          // const filteredData = data.filter()
          <View
            key={index}
            style={{
              width: width * 0.9,
              marginHorizontal: width * 0.05,
              // height: 130,
              position: "relative",
              backgroundColor: "#f6f5f4",
              paddingHorizontal: 20,
              paddingVertical: 10,
              justifyContent: "flex-start",
              marginBottom: 15,
              borderRadius: 12,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Regular",
              }}
            >
              {item.day.slice(0, 3)}
            </Text>
            <View
              style={{
                backgroundColor: "#fff",
                borderWidth: 1,
                borderColor: "#0D3F4A",
                paddingHorizontal: 20,
                borderRadius: 12,
                marginTop: 15,
                paddingVertical: 10,
              }}
            >
              <View
                style={{
                  gap: 10,
                  // marginLeft: 20,
                }}
              >
                {/* <Text>sldkfjsd</Text> */}
                {item.drinks.length === 0 && (
                  <Text style={{ fontSize: 17, fontFamily: "Regular" }}>
                    No alcohol
                  </Text>
                )}
                {item.drinks.length !== 0 &&
                  item.drinks.map((drink: any, index: number) => (
                    <View key={index}>
                      {drink.drinkQuantity > 1 ? (
                        <Text
                          key={index}
                          style={{ fontSize: 17, fontFamily: "Regular" }}
                        >
                          {drink.drinkQuantity}x {drink.drinkSize}{" "}
                          {drink.drinkType === "Lager" ||
                          drink.drinkType === "Ale" ||
                          drink.drinkType === "Stout" ||
                          drink.drinkType === "Wine" ||
                          drink.drinkType === "Sparkling"
                            ? "of "
                            : ""}
                          {drink.drinkType}{" "}
                          {drink.drinkType === "Sparkling" ? "wine" : ""}
                        </Text>
                      ) : (
                        <Text
                          key={index}
                          style={{ fontSize: 17, fontFamily: "Regular" }}
                        >
                          {drink.drinkSize} of {drink.drinkType}
                        </Text>
                      )}
                    </View>
                  ))}
              </View>
              <Pressable
                style={{
                  position: "absolute",
                  top: 15,
                  right: 15,
                }}
                onPress={() => {
                  // router.push(`/post-payment-onboarding/${item.day}`);
                  console.log(drinkCount);
                }}
              >
                <WeekEditIcon />
              </Pressable>
            </View>
          </View>
        )}
      />

      <HideWithKeyboard>
        <View
          style={{
            width: "100%",
            backgroundColor: "white",
            // borderWidth: 1,
            // borderColor: "#d9d9d9",
            height: height * 0.12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={handleNextPress}
            // onPress={handleGoToNextDayPress}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#0D3F4A",
              borderRadius: 30,
              height: height * 0.06,
              width: width * 0.8,
              gap: 10,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                fontWeight: "400",
                fontFamily: "Regular",
              }}
            >
              Next
            </Text>
          </Pressable>
        </View>
      </HideWithKeyboard>
      <Modal visible={modalOpen} transparent>
        <View style={styles.modal_background}>
          <View style={styles.modal_container2}>
            <HighRiskIcon />
            <Text style={styles.modal_text}>You are in a high risk level </Text>
            <Text style={styles.modal_text2}>
              Your answers suggest that you may have significant difficulties
              with alcohol and wellbeing. This programme can help you change
              unwanted drinking however{" "}
              <Text style={styles.highlight_text}>
                we strongly advise that you speak to your doctor for further
                support before suddenly stopping drinking.
              </Text>
            </Text>
            <Pressable onPress={() => setModalOpen(false)}>
              <View style={styles.modal_btn}>
                <Text style={styles.btn_text}>Ok, I understand</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default WeeklyDrinkSummary;

const styles = StyleSheet.create({
  modal_background: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  headerText: {
    color: "#080D09",
    fontSize: 28,
    marginRight: width * 0.05,
    fontFamily: "Regular",
    textAlign: "right",
  },
  subheaderText: {
    color: "#080D09",
    fontSize: 18,
    lineHeight: 25,
    marginLeft: width * 0.08,
    // marginRight: width * 0.25,
    fontFamily: "Regular",
  },
  modal_container2: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: width * 0.9,
    borderRadius: 20,
    padding: 20,
    gap: 10,
    // marginTop: height * 0.3,
  },
  modal_text: {
    color: "#080D09",
    fontFamily: "Medium",
    fontSize: 20,
    lineHeight: 27,
  },
  modal_text2: {
    color: "#080D09",
    fontFamily: "Regular",
    fontSize: 16,
    lineHeight: 29.5,
    // marginTop: 10,
    textAlign: "left",
    paddingHorizontal: 5,
  },
  highlight_text: {
    color: "#E64627",
    fontFamily: "Medium",
  },
  modal_btn: {
    width: width * 0.75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#0D3F4A",
    marginTop: 5,
  },
  btn_text: {
    color: "#fff",
    fontFamily: "Regular",
    fontSize: 14,
    paddingVertical: 15,
  },
});
