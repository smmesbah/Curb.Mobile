import { Dimensions, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import AntDesign from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get('screen');

const PrivacyPolicy = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable
                    onPress={() => router.back()}
                    style={{ justifyContent: 'center' }}
                >
                    <Text>
                        <AntDesign name="arrowleft" size={28} color="black" />
                    </Text>
                </Pressable >
                <Text style={{ fontSize: 30, textAlign: 'center', fontFamily: "Regular" }}>Privacy Policy</Text>
            </View>

            <ScrollView
                style={{ marginHorizontal: width * 0.1, marginTop: height * 0.04, marginBottom: height * 0.02 }}
                showsVerticalScrollIndicator={false}
            >
                <Text style={{ fontSize: 18, lineHeight: 30, fontFamily: "Regular" }}>
                    Mind Health AI Limited (t/a Curb) has a responsibility to document how we will protect your personal data. This is a 
                    legal requirement of the Data Protection Act (2018), Part 2, within the UK GDPR ‘Right to be Informed’. This Privacy 
                    Notice will outline our responsibilities to you. This Privacy Notice was last updated in December 2023.
                </Text>
                <Text style={{ fontSize: 18, lineHeight: 30, fontFamily: "Medium", marginTop: 8  }}>
                    1.0 Key Terms
                </Text>
                <Text style={{ fontSize: 18, lineHeight: 30, fontFamily: "Regular", marginTop: 8  }}>
                    1.1 Whilst every effort has been made to outline our responsibilities to you in as clear, concise, and easy to 
                    understand manner as possible, we do need to use certain terms throughout this Privacy Notice. 
                </Text>
                <Text style={{ fontSize: 18, lineHeight: 30, fontFamily: "Regular", marginTop: 8 }}>
                    1.2 We will now provide an easy-to-understand definition of each term:
                </Text>
                    
                <Text style={{ fontSize: 18, lineHeight: 30, fontFamily: "Regular", marginTop: 8}}>
                    <Text style={{fontFamily: 'Medium'}}>  App: </Text>An abbreviated form of the word application. An application is a software program that is designed to 
                    perform a specific function directly for the user or, in some cases, for another software program. 
                </Text>
                <Text style={{ fontSize: 18, lineHeight: 30, fontFamily: "Regular", marginTop: 8}}>
                    <Text style={{fontFamily: 'Medium'}}>  App: </Text>An abbreviated form of the word application. An application is a software program that is designed to 
                    perform a specific function directly for the user or, in some cases, for another software program. 
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PrivacyPolicy

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingVertical: 15,
    },
    header: {
        padding: 15,
    },
})