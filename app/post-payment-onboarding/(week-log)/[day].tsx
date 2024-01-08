import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { useGlobalSearchParams, useRouter } from "expo-router";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useSelector } from "react-redux";
import BearIcon from "components/icons/BearIcon";
import WineIcon from "components/icons/WineIcon";
import ShotsIcon from "components/icons/ShotsIcon";

const { width, height } = Dimensions.get("screen");

const Day = () => {
  const router = useRouter();

  const selectedDays = useSelector(
    (state: any) => state.selecedDays.selectedDays
  );
  const { day } = useGlobalSearchParams();
  const Day = selectedDays[0] === undefined ? day : selectedDays[0];
  // const selectedDays = useSelector((state: any) => state.selecedDays.selectedDays);
  // console.log(selectedDays);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: height * 0.01,
            paddingBottom: 20,
          }}
        >
          <Pressable
            onPress={() => router.back()}
            style={{ justifyContent: "center", marginTop: 0, marginLeft: 25 }}
          >
            <Text>
              <AntDesign name="arrowleft" size={28} color="black" />
            </Text>
          </Pressable>

          <View style={{ marginTop: 0 }}>
            <Text style={styles.headerText}>{Day}</Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "#f6f5f4",
            marginTop: 0,
          }}
        >
          <View
            style={{
              marginHorizontal: width * 0.07,
              marginTop: height * 0.04,
              gap: 30,
              height: height,
            }}
          >
            <View>
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <View
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 12,
                    backgroundColor: "#33ae9c",
                  }}
                />
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
              </View>
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

            <View
              style={{
                gap: 15,
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  router.push(
                    `/post-payment-onboarding/adding-drink?day=${Day}&drink=beer-cider`
                  )
                }
              >
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

              <TouchableOpacity
                // onPress={() => router.push('/post-payment-onboarding/wine-fizz')}
                onPress={() =>
                  router.push(
                    `/post-payment-onboarding/adding-drink?day=${Day}&drink=wine-fizz`
                  )
                }
              >
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

              <TouchableOpacity
                // onPress={() => router.push('/post-payment-onboarding/spirits-shots')}
                onPress={() =>
                  router.push(
                    `/post-payment-onboarding/adding-drink?day=${Day}&drink=spirits-shots`
                  )
                }
              >
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
          <View style={{ height: 20 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Day;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    paddingTop: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "400",
    textAlign: "right",
    marginRight: width * 0.07,
    fontFamily: "Regular",
  },
  subheaderText: {
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    marginLeft: width * 0.09,
    marginRight: width * 0.3,
    fontFamily: "Regular",
  },
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
