import {
  Dimensions,
  FlatList,
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
  const [weekly_drink, setWeekly_drink] = React.useState<WeeklyDrinkSummaryProps[]> ([]);
  // const data = [
  //     {
  //         day: 'Monday',
  //         drinks: [
  //             {
  //                 drinkQuantity: 1,
  //                 drinkType: 'lager',
  //                 drinkSize: 'pint',
  //             },
  //             {
  //                 drinkQuantity: 2,
  //                 drinkType: 'Vodka',
  //                 drinkSize: 'pint',
  //             },
  //         ]
  //     },
  //     {
  //         day: 'Tuesday',
  //         drinks: [
  //             {
  //                 drinkQuantity: 1,
  //                 drinkType: 'lager',
  //                 drinkSize: 'pint',
  //             },
  //             {
  //                 drinkQuantity: 2,
  //                 drinkType: 'Vodka',
  //                 drinkSize: 'pint',
  //             },
  //         ]
  //     },
  //     {
  //         day: 'Wednesday',
  //         drinks: [

  //         ]
  //     },
  // ];

//   useEffect(() => {
    
//     showData();
//   }, []);

  useLayoutEffect(() => {
    showData();
  },[])

  //
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

    // console.log(res)

  setWeekly_drink((prevWeeklyDrink) => {
    const updatedWeeklyDrink = [...prevWeeklyDrink];

    res.forEach((item: any) => {
      const existingDayIndex = updatedWeeklyDrink.findIndex(
        (d) => d.day === item.day
      );

      if (existingDayIndex !== -1) {
        // If the day exists, update the existing day's drinks array
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

    // console.log(weekly_drink);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => router.back()}
        style={{ justifyContent: "center", marginTop: 25, marginLeft: 25 }}
      >
        <Text>
          <AntDesign name="arrowleft" size={28} color="white" />
        </Text>
      </Pressable>

      <View
        style={{
          marginRight: 20,
        }}
      >
        <View style={{ gap: 15 }}>
          <Text style={styles.headerText}>Your week in drinking</Text>
          <View>
            <Text style={styles.subheaderText}>
              Here is your weekly summary.
            </Text>
            <Text style={styles.subheaderText}>
            You can update this any time in your Profile section on the app.
            </Text>
          </View>
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
        renderItem={({ item,index }) => (
          // const filteredData = data.filter()
          <View
          key={index}
            style={{
              // height: 130,
              position: "relative",
              backgroundColor: "white",
              paddingHorizontal: 50,
              paddingVertical: 10,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <Pressable
              style={{
                position: "absolute",
                top: 15,
                right: 15,
              }}
              onPress={() => {
                router.push(`/post-payment-onboarding/${item.day}`);
                // console.log(item)
              }}
            >
              <Feather name="edit-2" size={20} color="#7844ff" />
            </Pressable>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "500",
                width: "22%",
                fontFamily: "Regular",
              }}
            >
              {item.day.slice(0, 3)}
            </Text>
            <View
              style={{
                gap: 10,
                marginLeft: 60,
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
                  {drink.drinkQuantity > 1?
                  <Text
                    key={index}
                    style={{ fontSize: 17, fontFamily: "Regular" }}
                  >
                    {drink.drinkQuantity}x {drink.drinkSize} of {drink.drinkType} {drink.drinkType==='Sparkling'?'wine':''}
                  </Text>
                  : <Text
                  key={index}
                  style={{ fontSize: 17, fontFamily: "Regular" }}
                >
                  {drink.drinkSize} of {drink.drinkType}
                </Text>}
                  </View>
                ))}
            </View>
          </View>
        )}
      />

      <HideWithKeyboard>
        <View
          style={{
            width: "100%",
            backgroundColor: "white",
            borderWidth: 1,
            borderColor: "#d9d9d9",
            height: height * 0.12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() =>
              router.push("post-payment-onboarding/comparison-stat")
            }
            // onPress={handleGoToNextDayPress}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#000",
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
    </SafeAreaView>
  );
};

export default WeeklyDrinkSummary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#668495",
    paddingTop: 20,
  },
  headerText: {
    color: "white",
    fontSize: 40,
    fontWeight: "500",
    lineHeight: 50,
    marginLeft: width * 0.45,
    fontFamily: "Regular",
  },
  subheaderText: {
    color: "white",
    fontSize: 18,
    lineHeight: 25,
    marginLeft: width * 0.08,
    // marginRight: width * 0.25,
    fontFamily: "Regular",
  },
});
