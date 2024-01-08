import BackArrow from 'components/icons/BackArrow'
import React from 'react'
import { View, Text, SafeAreaView, Pressable, StyleSheet, ScrollView, Linking,Dimensions } from 'react-native'
import { Link, router } from "expo-router";
import AntDesign from "react-native-vector-icons/AntDesign";

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const index = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
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
          style={{ fontSize: 30, textAlign: "right", fontFamily: "Regular" }}
        >
          Sources
        </Text>
      </View>
      <ScrollView style={{height: height}}>
        <View style={styles.container2}>
          <Text>How we calculate the numbers and data</Text>
          <Text>Lorem ipsum dolor sit amet consectetur. Viverra sagittis velit aliquet condimentum cursus odio.</Text>
        </View>
      <View style={{ gap: 5, marginBottom: 10, marginHorizontal: width*0.05, marginTop: 15, backgroundColor: '#f5f6f4' }}>
          <Text style={styles.text_header}>Cost of alcohol</Text>
          <Text
            style={styles.link_text}
            onPress={() =>
              Linking.openURL(
                "https://beerandpub.com/data-statistics/beer-prices/"
              )
            }
          >
            https://beerandpub.com/data-statistics/beer-prices/
          </Text>
          <Text
            style={styles.link_text}
            onPress={() =>
              Linking.openURL(
                "https://www.ons.gov.uk/economy/inflationandpriceindices/timeseries/czms/mm23"
              )
            }
          >
            https://www.ons.gov.uk/economy/inflationandpriceindices/timeseries/czms/mm23 
          </Text>
          <Text style={styles.text_header}>Units in alcohol</Text>
          <Text
            style={styles.link_text}
            onPress={() =>
              Linking.openURL(
                "https://www.nhs.uk/live-well/alcohol-advice/calculating-alcohol-units/"
              )
            }
          >
            https://www.nhs.uk/live-well/alcohol-advice/calculating-alcohol-units/ 
          </Text>
          <Text style={styles.text_header}>Calories in alcohol</Text>
          <Text
            style={styles.link_text}
            onPress={() =>
              Linking.openURL(
                "https://www.nhs.uk/live-well/alcohol-advice/calories-in-alcohol/"
              )
            }
          >
            https://www.nhs.uk/live-well/alcohol-advice/calories-in-alcohol/ 
          </Text>
          <Text style={styles.text_header}>Breakdown of National Drinking Habits</Text>
          <Text
            style={styles.link_text}
            onPress={() =>
              Linking.openURL(
                "https://digital.nhs.uk/data-and-information/publications/statistical/health-survey-for-england"
              )
            }
          >
            https://digital.nhs.uk/data-and-information/publications/statistical/health-survey-for-england  
          </Text>
          <Text
            style={styles.link_text}
            onPress={() =>
              Linking.openURL(
                "https://www.ons.gov.uk/surveys/informationforhouseholdsandindividuals/householdandindividualsurveys/scottishhealthsurvey"
              )
            }
          >
            https://www.ons.gov.uk/surveys/informationforhouseholdsandindividuals/householdandindividualsurveys/scottishhealthsurvey 
          </Text>
          <Text
            style={styles.link_text}
            onPress={() =>
              Linking.openURL(
                "https://statswales.gov.wales/Catalogue/Health-and-Social-Care/Welsh-Health-Survey"
              )
            }
          >
            https://statswales.gov.wales/Catalogue/Health-and-Social-Care/Welsh-Health-Survey 
          </Text>
        </View>
        <Pressable onPress={()=>router.back()}>
          <View style={styles.btn_container}>
            <Text style={styles.btn_text}>Back</Text>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "white",
      paddingVertical: 15,
    },
    header: {
      padding: 15,
      backgroundColor: '#fff'
    },
    text_header: {
        fontFamily: 'Medium',
        fontSize: 18,
        textAlign: 'left',
        marginBottom: 15,
        marginTop: 10
    },
    link_text: {
        fontSize: 17, 
        textAlign: "left", 
        color: "#000",
        marginBottom: 6,
        textDecorationLine: 'underline'
    },
    container2: {
      paddingHorizontal: width*0.05,
      backgroundColor: '#fff',
      gap: 15,
      paddingBottom: 15,
      paddingTop: 10
    },
    btn_container: {
      alignSelf: 'center',
      width: width*0.9,
      backgroundColor: '#000',
      borderRadius: 100,
      paddingVertical: 15,
    },
    btn_text: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 20,
      fontFamily: 'Regular'
    }
  });
  