import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import BearIcon from "components/icons/BearIcon";
import WineIcon from "components/icons/WineIcon";
import ShotsIcon from "components/icons/ShotsIcon";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const Drink = ({ setAddingDrink }: { setAddingDrink: any }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        marginHorizontal: 40,
        marginTop: 25,
        marginBottom: 15,
        backgroundColor: "#f6f5f4",
        borderRadius: 15,
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 40,
        elevation: 5,
        width: width * 0.9,
      }}
    >
      <View
        style={{
          gap: 15,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
          marginHorizontal: width * 0.07,
          flexDirection: "row",
          marginBottom: 20,
        }}
      >
        <View
          style={{
            width: 12,
            height: 12,
            borderRadius: 12,
            backgroundColor: "#33ae9c",
            marginTop: 0,
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
          Add another drink?
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          gap: 15,
        }}
      >
        <TouchableOpacity onPress={() => setAddingDrink("beer-cider")}>
          <View style={styles.drinkChoosingBtn}>
            <BearIcon />
            <Text
              style={{
                fontSize: 14,
                color: "#27284e",
                fontWeight: "400",
                fontFamily: "Regular",
              }}
            >
              {" "}
              Beer & Cider{" "}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setAddingDrink("wine-fizz")}>
          <View style={styles.drinkChoosingBtn}>
            <WineIcon />
            <Text
              style={{
                fontSize: 14,
                color: "#27284e",
                fontWeight: "400",
                fontFamily: "Regular",
              }}
            >
              {" "}
              Wine & Fizz{" "}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setAddingDrink("spirits-shots")}>
          <View style={styles.drinkChoosingBtn}>
            <ShotsIcon />
            <Text
              style={{
                fontSize: 14,
                color: "#27284e",
                fontWeight: "400",
                fontFamily: "Regular",
              }}
            >
              {" "}
              Spirits & Shots{" "}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Drink;

const styles = StyleSheet.create({
  drinkChoosingBtn: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#0D3F4A",
    backgroundColor: "#fff",
    paddingHorizontal: 85,
    paddingVertical: 13,
    borderRadius: 30,
  },
});
