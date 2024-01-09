import {
  Dimensions,
  Keyboard,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Pressable,
  StyleProp,
  ViewStyle
} from "react-native";
import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import RadioButtonRound from "./ui/RadioButtonRound";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { addDrink } from "redux/actions/drinkActions";
import { useGlobalSearchParams } from "expo-router";
import PlusIcon from "components/icons/PlusIcon";
import MinusIcon from "components/icons/MinusIcon";

const { width, height } = Dimensions.get("window");

const BeerCiderForm = React.forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    async handleAddDrinkPress(setAddingDrink: (arg0: null) => void) {
        if(beerCiderType === "" || value === "" || drinkCount === 0) {
            alert("Please fill all the fields")
        }
        else{
        setAddingDrink(null);
        const drink = {
          day: Array.isArray(day) || day === undefined ? "" : day,
          drinks: {
            drinkQuantity: drinkCount,
            drinkType: beerCiderType,
            drinkSize: value,
          },
        };
        dispatch(addDrink(drink));

        const token = await AsyncStorage.getItem("token");
        const weekly_drink = {
          token: token,
          day: day,
          drinkType: "BEER_CIDER",
          drinkName: beerCiderType,
          drinkVolume: value,
          drinkQuantity: drinkCount,
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
}
  }));

  const dispatch = useDispatch();
  const { day } = useGlobalSearchParams();
  const [beerCiderType, setBeerCiderType] = React.useState<string>("");
  const data = [{ value: "Lager" }, { value: "Ale" }, { value: "Stout" }];
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string>("");
  const [items, setItems] = React.useState([
    { label: "Pint", value: "Pint" },
    { label: "Half Pint", value: "Half" },
    { label: "Bottle", value: "Bottle" },
    { label: "Can", value: "Can" },
  ]);
  const [drinkCount, setDrinkCount] = React.useState<number>(0);
  return (
    <ScrollView
      style={{
        flex: 1,
        height: height*0.75,
        backgroundColor: '#f5f6f4'
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
      <View
        style={{
          flex: 1,
          alignItems: "center",
          marginHorizontal: 30,
          marginTop: 8,
          marginBottom: 15,
          padding: 20,
        }}
      >
        <View style={{ width: "100%" }}>
          <RadioButtonRound
            data={data}
            onSelect={(value) => setBeerCiderType(value)}
          />
        </View>
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
          backgroundColor: "#fff",
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
            drinkCount === 0 ? setDrinkCount(0) : setDrinkCount(drinkCount - 1)
          }
        >
          <MinusIcon />
        </Pressable>
        <Text style={styles.drinkCount}>{drinkCount}</Text>
        <Pressable onPress={() => setDrinkCount(drinkCount + 1)}>
          <PlusIcon />
        </Pressable>
      </View>
    </ScrollView>
  );
});

export default BeerCiderForm;

const styles = StyleSheet.create({
  drinkCount: {
    color: "#080D09",
    fontSize: 24,
    fontFamily: "Regular",
  },
});
