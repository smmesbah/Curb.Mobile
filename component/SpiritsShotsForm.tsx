import {
  Dimensions,
  Keyboard,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useImperativeHandle, useState } from "react";
import RadioButtonRound from "./ui/RadioButtonRound";
import DropDownPicker from "react-native-dropdown-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useDispatch } from "react-redux";
import { addDrink } from "redux/actions/drinkActions";
import { useGlobalSearchParams } from "expo-router";
import MinusIcon from "components/icons/MinusIcon";
import PlusIcon from "components/icons/PlusIcon";

const { width, height } = Dimensions.get("screen");

const SpiritsShotsForm = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const { day } = useGlobalSearchParams();

  useImperativeHandle(ref, () => ({
    async handleAddDrinkPress(setAddingDrink: (arg0: null) => void) {
      if (spiritsShotsType === "" || value === "" || spiritsShotsCount === 0) {
        alert("Please fill all the fields");
      } else {
        setAddingDrink(null);
        const drink = {
          day: Array.isArray(day) || day === undefined ? "" : day,
          drinks: {
            drinkQuantity: spiritsShotsCount,
            drinkType: spiritsShotsType,
            drinkSize: value,
          },
        };
        dispatch(addDrink(drink));

        const token = await AsyncStorage.getItem("token");
        const weekly_drink = {
          token: token,
          day: day,
          drinkType: "WINE_FIZZ",
          drinkName: spiritsShotsType,
          drinkVolume: value,
          drinkQuantity: spiritsShotsCount,
        };
        const apiUrl = `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/onboarding/weekly-drink`;
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(weekly_drink),
        });
        const data = await response.json();
        if (!data.success) {
          alert(data.message);
        }
      }
    },
  }));

  const data = [
    { value: "Vodka" },
    { value: "Gin" },
    { value: "Tequilla" },
    { value: "Whisky" },
    { value: "Rum" },
    { value: "Other" },
  ];
  const [spiritsShotsType, setSpiritsShotsType] = React.useState<string>("");
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string>("");
  const [items, setItems] = React.useState([
    { label: "Single", value: "single" },
    { label: "Double", value: "double" },
  ]);
  const [spiritsShotsCount, setSpiritsShotsCount] = React.useState<number>(0);
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      () => {
        setKeyboardOpen(true);
        //   console.log('keyboard open');
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => {
        setKeyboardOpen(false);
        //   console.log('keyboard closed');
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <ScrollView
      style={{
        marginTop: keyboardOpen ? -200 : 0,
        flex: 1,
        height: height * 0.75,
        backgroundColor: "#f5f6f4",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "flex-start",
          marginHorizontal: width * 0.07,
          marginTop: height * 0.03,
        }}
      >
        <View
          style={{
            width: 12,
            height: 12,
            borderRadius: 12,
            backgroundColor: "#33ae9c",
            marginTop: 6,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 18,
              color: "#000",
              fontFamily: "Regular",
              marginBottom: 6,
            }}
          >
            What kind of drink would you
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "#000",
              fontFamily: "Regular",
              marginBottom: 6,
            }}
          >
            typically have on a {day}?
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 25 }}>
        <RadioButtonRound
          data={data}
          onSelect={(value) => setSpiritsShotsType(value)}
        />
      </View>

      <View
        style={{
          gap: 15,
          alignItems: "flex-start",
          marginTop: 40,
          marginHorizontal: width * 0.07,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: 12,
            height: 12,
            borderRadius: 12,
            backgroundColor: "#33ae9c",
            marginTop: 6,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "400",
            color: "#27284e",
            fontFamily: "Regular",
          }}
        >
          Which size?
        </Text>
      </View>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        listMode="SCROLLVIEW"
        placeholder="Select drink"
        showTickIcon={false}
        style={{
          width: width * 0.86,
          height: height * 0.05,
          borderWidth: 1,
          borderRadius: 12,
          borderColor: "#0D3F4A",
          marginHorizontal: width * 0.07,
          justifyContent: "center",
          marginTop: 20,
        }}
        textStyle={{
          fontSize: 17,
          fontWeight: "400",
          color: "#27284e",
          textAlign: "center",
          fontFamily: "Regular",
        }}
        dropDownContainerStyle={{
          width: width * 0.86,
          backgroundColor: "white",
          borderColor: "#0D3F4A",
          zIndex: 1000,
          shadowColor: "#52006A",
          elevation: 5,
          marginHorizontal: width * 0.07,
          marginTop: 20,
          borderRadius: 12,
        }}
      />

      <View
        style={{
          gap: 15,
          alignItems: "flex-start",
          marginTop: 40,
          marginHorizontal: width * 0.07,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: 12,
            height: 12,
            borderRadius: 12,
            backgroundColor: "#33ae9c",
            marginTop: 6,
          }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "400",
            color: "#27284e",
            fontFamily: "Regular",
          }}
        >
          How many?
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: width * 0.1,
          marginTop: 20,
        }}
      >
        <Pressable
          onPress={() =>
            spiritsShotsCount === 0
              ? setSpiritsShotsCount(0)
              : setSpiritsShotsCount(spiritsShotsCount - 1)
          }
        >
          <MinusIcon />
        </Pressable>
        <Text style={styles.drinkCount}>{spiritsShotsCount}</Text>
        <Pressable onPress={() => setSpiritsShotsCount(spiritsShotsCount + 1)}>
          <PlusIcon />
        </Pressable>
      </View>
    </ScrollView>
  );
});

export default SpiritsShotsForm;

const styles = StyleSheet.create({
  drinkCount: {
    color: "#080D09",
    fontSize: 24,
    fontFamily: "Regular",
  },
});
