import {
  Dimensions,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import AntDesign from "react-native-vector-icons/AntDesign";

const { width, height } = Dimensions.get("screen");

const Involve = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={{ justifyContent: "center" }}
        >
          <Text>
            <AntDesign name="arrowleft" size={28} color="black" />
          </Text>
        </Pressable>
        <Text
          style={{ fontSize: 30, textAlign: "center", fontFamily: "Regular" }}
        >
          What does this involve?
        </Text>
      </View>

      <ScrollView
        style={{
          marginHorizontal: width * 0.1,
          marginTop: height * 0.04,
          marginBottom: height * 0.02,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.text_style3}>Introduction</Text>
        <Text style={styles.text_style}>
          Thank you for considering participating in research as a user of the
          Curb app. This document outlines what your participation involves, how
          your data will be used, and the measures we take to ensure your
          privacy and confidentiality, so that you can give informed consent,
          should you chose to do so.
        </Text>
        <Text style={styles.text_style3}>What Does Participation Involve?</Text>
        <Text style={styles.text_style}>
          <Text style={styles.text_style2}>Surveys: </Text>You will receive
          surveys related to your drinking habits. These are designed to help us
          understand and improve the effectiveness of Curb.
        </Text>
        <Text style={styles.text_style}>
          <Text style={styles.text_style2}>Direct Communication: </Text>
          Occasionally, the Curb team may contact you directly to invite you to
          provide feedback or participate in interviews about new product
          features.
        </Text>
        <Text style={styles.text_style}>
          <Text style={styles.text_style2}>Anonymised Data Sharing: </Text>
          Your data may be shared in an anonymised form with our academic
          research partners. This means your personal identifiers like name and
          contact information will be removed to ensure your privacy.
        </Text>
        <Text style={styles.text_style}>
          <Text style={styles.text_style2}>
            Inclusion in Aggregate Reports:
          </Text>
          Your data may be included in anonymous aggregate reports that analyse
          how the app supports users in managing their alcohol habits.
        </Text>
        <Text style={styles.text_style3}>Confidentiality and Privacy</Text>
        <Text style={styles.text_style}>
          Your participation in this research is voluntary, and you have the
          right to withdraw at any time without any consequences.
        </Text>
        <Text style={styles.text_style}>
          All personal information will be kept confidential. Only aggregate,
          anonymized data will be used for research purposes.
        </Text>
        <Text style={styles.text_style}>
          Additional consent will be sought for any research activities beyond
          the scope of this consent form.
        </Text>
        <Text style={styles.text_style3}>Further Information and Consent</Text>
        <Text style={styles.text_style}>
          Participation in research is completely voluntary, and you can choose
          to opt out at any time by emailing team@curb.health .
        </Text>
        <Text style={styles.text_style}>
          By continuing to use the app and participating in the research
          activities, you are giving your informed consent.
        </Text>
        <Text style={styles.text_style}>
          Should there be any need to share your data beyond the scope mentioned
          above, we will provide you with more information and seek additional
          consent.
        </Text>
        <Text style={styles.text_style3}>Questions?</Text>
        <Text style={styles.text_style}>
          If you have any questions about your participation in this research,
          please feel free to contact us at team@curb.health .
        </Text>
        <Text style={styles.text_style}>
          By continuing with the research activities within the Curb app, you
          acknowledge that you have read, understood, and agreed to this
          informed consent.
        </Text>
        <Text style={styles.text_style}>
          Thank you for helping us make a difference in understanding and
          supporting healthy alcohol habits.F
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Involve;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    paddingVertical: 15,
  },
  header: {
    padding: 15,
  },
  text_style: {
    marginVertical: 5,
    fontSize: 18,
    lineHeight: 30,
    fontFamily: "Regular",
  },
  text_style2: {
    fontSize: 18,
    lineHeight: 30,
    fontFamily: "Medium",
  },
  text_style3: {
    fontSize: 18,
    lineHeight: 30,
    fontFamily: "Medium",
    marginVertical: 10,
  },
});
