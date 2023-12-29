import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  TextInput,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import BackArrow from "components/icons/BackArrow";
import EditComponent from "components/EditComponent";
import DeleteIcon from "components/icons/DeleteIcon";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import ProfileEdit from "components/icons/ProfileEdit";
import { Slider } from "@miblanchard/react-native-slider";

const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

const EditProfile = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [ageRange, setAgeRange] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [postcode, setPostcode] = React.useState("");
  const [changedAgeRange, setChangedAgeRange] = React.useState("");
  const [changedGender, setChangedGender] = React.useState("");
  const [changedPostcode, setChangedPostcode] = React.useState("");
  const [ageEdit, setAgeEdit] = React.useState(false);
  const [genderEdit, setGenderEdit] = React.useState(false);
  const [postcodeEdit, setPostcodeEdit] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [userOption, setUserOption] = React.useState<string | null>(null);
  const selectHandler = (value: string) => {
    if (value === "Male") setChangedGender("MALE");
    else if (value === "Female") setChangedGender("FEMALE");
    else setChangedGender("OTHER");
    setUserOption(value);
  };
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

  React.useEffect(() => {
    fetchNameEmail();
    fetchProfileInfo();
  }, []);

  const fetchNameEmail = async () => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(
      `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/profile/myprofile/${token}`
    );
    if (response.data.success) {
      setName(response.data.data.name);
      setEmail(response.data.data.email);
      // console.log(name)
      // console.log(email)
    }
  };
  const fetchProfileInfo = async () => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.get(
      `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/profile/profile-info/${token}`
    );
    if (response.data.success) {
        setAgeRange(response.data.data.ageRange);
        setValue(response.data.data.ageRange === "AGE_16_24"? 0: response.data.data.ageRange === "AGE_25_34"? 1: 2)

      if (response.data.data.gender === "MALE") {
        setGender("Male");
      } else if (response.data.data.gender === "FEMALE") {
        setGender("Female");
      } else setGender("Prefer not to say");
      setPostcode(response.data.data.postcode);
    }
  };
  const handleSave = async () => {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.put(
      `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/profile/update-name-email/${token}`,
      {
        name: name,
        email: email,
      }
    );
    if (!response.data.success) {
      alert(response.data.message);
    }
    if (changedAgeRange !== ageRange && changedAgeRange!=="") {
        console.log(changedAgeRange,ageRange)
      const response2 = await axios.put(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/profile/update-age-range/${token}`,
        { ageRange: changedAgeRange }
      );
      if (!response2.data.success) {
        alert(response2.data.message);
      }
    }
    if (changedGender !== gender && changedGender!=="") {
        console.log("2")
      const response3 = await axios.put(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/profile/update-gender/${token}`,
        { gender: changedGender }
      );
      if (!response3.data.success) {
        alert(response3.data.message);
      }
    }
    if (changedPostcode !== postcode && changedPostcode!=="") {
        console.log("3")
      const response4 = await axios.put(
        `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/profile/update-postcode/${token}`,
        { postcode: changedPostcode }
      );
      if (!response4.data.success) {
        alert(response4.data.message);
      }
    }
    
    router.back();
    router.replace('/myProfileScreen/MyProfile')
    
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#ecedea", height: "100%" }}>
      <View style={Styles.header_container}>
        <TouchableOpacity onPress={() => router.back()}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={Styles.header_text}>Edit Profile</Text>
      </View>
      <ScrollView style={{ backgroundColor: "#ecedea" }}>
        <View style={Styles.container}>
          <View style={[Styles.text_container, { marginTop: 50 }]}>
            <View style={[Styles.circle, { backgroundColor: "#33AE9C" }]} />
            <Text style={Styles.text_style1}>Full Name</Text>
          </View>
          <TextInput
            style={Styles.text_input}
            onChangeText={setName}
            value={name}
            placeholder={name}
            placeholderTextColor="#333533"
          />
          <View style={[Styles.text_container, { marginTop: 30 }]}>
            <View style={[Styles.circle, { backgroundColor: "#33AE9C" }]} />
            <Text style={Styles.text_style1}>Email Address</Text>
          </View>
          <TextInput
            style={Styles.text_input}
            onChangeText={setEmail}
            value={email}
            placeholder={email}
            placeholderTextColor="#333533"
            editable={false}
          />
        </View>
        <View style={Styles.edit_component}>
          <View style={Styles.container2}>
            <View style={[Styles.circle2, { backgroundColor: "#FF445A" }]} />
            <Text style={Styles.text_style3}>Your age</Text>
            <Text style={Styles.text_style2}>{ageRange==='AGE_16_24'? "16-24": ageRange==="AGE_25_34"? "25-34": "over 35"}</Text>
            <Pressable onPress={() => setAgeEdit(!ageEdit)}>
              <View style={{ marginLeft: 2 }}>
                <ProfileEdit color="#000" />
              </View>
            </Pressable>
          </View>

          {ageEdit && (
            <View
              style={{ width: Width * 0.9, marginHorizontal: Width * 0.05 }}
            >
              <Slider
                minimumValue={0}
                maximumValue={2}
                step={1}
                minimumTrackStyle={{
                  backgroundColor: "#e64627",
                  height: 8,
                  borderRadius: 10,
                  //   width: Width * 0.85,
                }}
                maximumTrackStyle={{
                  backgroundColor: "#efbdb1",
                  height: 8,
                  borderRadius: 10,
                  //   width: Width * 0.85,
                }}
                thumbStyle={{
                  backgroundColor: "#fff",
                  height: 20,
                  width: 20,
                  borderWidth: 4,
                  borderColor: "#e64627",
                  borderRadius: 50,
                }}
                onValueChange={(value) => {
                  setValue(value[0]);
                  if (value[0] === 0) setChangedAgeRange("AGE_16_24");
                  else if (value[0] === 1) setChangedAgeRange("AGE_25_34");
                  else setChangedAgeRange("AGE_35_44");
                }}
                value={value}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    marginRight: 20,
                    fontFamily: "Regular",
                  }}
                >
                  16-24
                </Text>
                <Text style={{ fontSize: 18, fontFamily: "Regular" }}>
                  25-34
                </Text>
                <Text style={{ fontSize: 18, fontFamily: "Regular" }}>
                  Over 35
                </Text>
              </View>
            </View>
          )}

          <View style={Styles.container2}>
            <View style={[Styles.circle2, { backgroundColor: "#7844ff" }]} />
            <Text style={Styles.text_style3}>Your Gender</Text>
            <Text style={Styles.text_style2}>{gender}</Text>
            <Pressable onPress={() => setGenderEdit(!genderEdit)}>
              <View style={{ marginLeft: 2 }}>
                <ProfileEdit color="#000" />
              </View>
            </Pressable>
          </View>
          {genderEdit && (
            <View
              style={{
                flexDirection: "row",
                gap: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {data.map((item) => {
                return (
                  <Pressable
                    key={item.value}
                    style={
                      item.value === userOption
                        ? Styles.selected
                        : Styles.unselected
                    }
                    onPress={() => selectHandler(item.value)}
                  >
                    <Text
                      style={[
                        { textAlign: "center", fontFamily: "Regular" },
                        item.value === userOption
                          ? { color: "#fff" }
                          : { color: "#000" },
                      ]}
                    >
                      {item.value}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          )}
          <View style={Styles.container2}>
            <View style={[Styles.circle2, { backgroundColor: "#33ae9c" }]} />
            <Text style={Styles.text_style3}>First half of your poscode</Text>
            <Text style={Styles.text_style2}>{postcode}</Text>
            <Pressable onPress={() => setPostcodeEdit(!postcodeEdit)}>
              <View style={{ marginLeft: 2 }}>
                <ProfileEdit color="#000" />
              </View>
            </Pressable>
          </View>
          {postcodeEdit && (
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
                width: Width * 0.9,
                marginHorizontal: Width * 0.05,
              }}
              onChangeText={setChangedPostcode}
              value={changedPostcode}
              placeholder={postcode}
            />
          )}
        </View>

        <View style={Styles.delete_component}>
          <TouchableOpacity disabled={true}>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DeleteIcon />
              <Text style={Styles.dlt_text}>Delete Account</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleSave}>
          <View style={Styles.save_btn}>
            <Text style={Styles.save_text}>Save</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;

const Styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: "center",
    alignItem: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingBottom: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header_container: {
    paddingTop: 25,
    // paddingBottom: 15,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    width: Width,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header_text: {
    color: "#080D09",
    fontFamily: "Regular",
    fontSize: 28,
  },
  circle: {
    height: 15,
    width: 15,
    borderRadius: 15 / 2,
  },
  text_style1: {
    color: "#080D09",
    fontFamily: "Regular",
    fontSize: 18,
  },
  text_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginLeft: 25,
  },
  text_input: {
    marginTop: 16,
    marginLeft: 25,
    width: Width * 0.88,
    height: 52,
    padding: 15,
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: "#B0B0B4",
    fontFamily: "Regular",
    fontSize: 16,
    color: "#080D09",
    letterSpacing: 0.18,
  },
  edit_component: {
    marginTop: 45,
    flexDirection: "column",
    gap: 33,
  },
  delete_component: {
    marginTop: 115,
    width: Width,
    alignItems: "flex-end",
    paddingRight: 35,
  },
  dlt_text: {
    color: "#FF445A",
    fontFamily: "Regular",
    fontSize: 16,
    textAlign: "center",
    letterSpacing: -0.14,
  },
  save_btn: {
    marginTop: 41.5,
    marginLeft: 25,
    backgroundColor: "#0D3F4A",
    width: Width * 0.88,
    height: 52,
    paddingHorizontal: 6,
    paddingVertical: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: "#33AE9C",
  },
  save_text: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Regular",
    fontSize: 16,
    letterSpacing: -0.14,
  },
  container2: {
    flexDirection: "row",
    gap: 8,
    marginLeft: 25,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  circle2: {
    height: 15,
    width: 15,
    borderRadius: 15 / 2,
  },
  text_style3: {
    color: "#080D09",
    fontFamily: "Regular",
    fontSize: 18,
  },
  text_style2: {
    color: "#080D09",
    fontFamily: "Medium",
    fontSize: 20,
    marginLeft: 6,
  },
  unselected: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#7844ff",
    borderRadius: 25,
    width: Width * 0.25,
    height: Height * 0.13,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  selected: {
    backgroundColor: "#7844ff",
    borderWidth: 2,
    borderColor: "#7844ff",
    borderRadius: 25,
    width: Width * 0.25,
    height: Height * 0.13,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
