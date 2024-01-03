import { Dimensions, Linking, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { router } from 'expo-router'
import StatsComparisonCard from 'component/StatsComparisonCard';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';

const { width, height } = Dimensions.get('screen');

const Comparison = () => {

    const [spendPerWeek, setSpendPerWeek] = React.useState(0);
    const [spendPerMonth, setSpendPerMonth] = React.useState(0);
    const [spendPerYear, setSpendPerYear] = React.useState(0);
    const [insights, setInsights] = React.useState("");
    const [calories, setCalories] = React.useState(0);


    React.useEffect(() => {
        const showData = async () => {
            console.log("Hello")
            const token = await AsyncStorage.getItem('token');
            const apiUrl = `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/onboarding/user-drinking-insights/${token}`
            const response = await axios.get(apiUrl);
            // console.log(response)
            const res = await response.data;
            if (!res.success) {
                alert(res.message)
            }
            const data = (res.data)
            // console.log(data)
            setSpendPerWeek(parseFloat(data.spendPerWeek))
            setSpendPerMonth(parseFloat(data.spendPerMonth))
            setSpendPerYear(parseFloat(data.spendPerYear))
            setInsights(data.insight)
            setCalories(data.totalCaloriesConsumed)
            // console.log(spendPerWeek)
        }
        showData();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Pressable
                onPress={() => router.back()}
                style={{ justifyContent: 'center', marginTop: 25, marginLeft: 25 }}
            >
                <Text>
                    <AntDesign name="arrowleft" size={28} color="white" />
                </Text>
            </Pressable>
            <View style={{ gap: 30, paddingRight: 20, paddingBottom: 15 }}>
                <View>
                    <Text style={styles.headerText}>How do</Text>
                    <Text style={styles.headerText}>you compare?</Text>
                </View>
                <View>
                    <Text style={styles.subheaderText}>This is how you compare</Text>
                    <Text style={styles.subheaderText}>with other people your age.</Text>
                </View>
            </View>
            <ScrollView
                style={{
                    paddingBottom: 30,
                }}
            >
                <View
                    style={{
                        marginRight: 20,
                    }}
                >

                </View>

                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 30,
                        gap: 20,
                    }}
                >
                    <StatsComparisonCard
                        // headerText="You're in the top"
                        Status={insights.slice(0, 4)}
                        SubheaderText={insights.slice(4, insights.length)}
                    />
                    <StatsComparisonCard
                        headerText="You're in the top"
                        Status="10th"
                        SubheaderText="Percentile of drink"
                    />

                    <StatsComparisonCard
                        // headerText="You're in the top"
                        Status={calories.toString()}
                        SubheaderText="of women your age drink less alcohol than you."
                    />
                </View>

                <View
                    style={{
                        marginTop: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 20,
                    }}
                >
                    <Text style={{ fontSize: 24, color: '#fff', fontWeight: '500', fontFamily: "Regular" }}>How much you spend</Text>
                    <View
                        style={{
                            width: width * 0.8,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 20,
                            gap: 20,
                            paddingVertical: 20,
                            paddingHorizontal: 40,
                        }}
                    >
                        <Text style={{ fontSize: 17, textAlign: 'center', fontFamily: "Regular" }}>Based on your typical week, this is how much you spend on alcohol</Text>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 10,
                            }}
                        >
                            <Text style={{ fontSize: 60, color: '#71b5b8', fontWeight: '500', fontFamily: "Regular" }}>€{spendPerWeek}</Text>
                            <Text style={{ fontSize: 17, fontFamily: "Regular" }}>Per week</Text>
                        </View>
                        <View
                            style={{
                                width: '100%',
                                height: 1,
                                backgroundColor: '#707070',
                            }}
                        />
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 10,
                            }}
                        >
                            <Text style={{ fontSize: 60, color: '#71b5b8', fontWeight: '500', fontFamily: "Regular" }}>€{spendPerMonth}</Text>
                            <Text style={{ fontSize: 17, fontFamily: "Regular" }}>Per month</Text>
                        </View>

                        <View
                            style={{
                                width: '100%',
                                height: 1,
                                backgroundColor: '#707070',
                            }}
                        />

                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 10,
                            }}
                        >
                            <Text style={{ fontSize: 60, color: '#71b5b8', fontWeight: '500', fontFamily: "Regular" }}>€{spendPerYear}</Text>
                            <Text style={{ fontSize: 17, fontFamily: "Regular" }}>Per year</Text>
                        </View>
                    </View>
                </View>
                <View style={{gap: 5}}>
                    <Text style={{ fontSize: 17, textAlign: 'center', color: 'white', marginTop: 20, fontFamily: "Regular", marginBottom: 5 }}>Sources</Text>
                    <Text style={{fontSize: 17, textAlign: 'center', color: '#5B4AFF'}} onPress={() => Linking.openURL('https://beerandpub.com/data-statistics/beer-prices/')}>Cost of alcohol</Text>
                    <Text style={{fontSize: 17, textAlign: 'center', color: '#5B4AFF'}} onPress={() => Linking.openURL('https://www.nhs.uk/live-well/alcohol-advice/calculating-alcohol-units/')}>Units in alcohol</Text>
                    <Text style={{fontSize: 17, textAlign: 'center', color: '#5B4AFF'}} onPress={() => Linking.openURL('https://www.nhs.uk/live-well/alcohol-advice/calories-in-alcohol/')}>Calories in alcohol</Text>
                </View>
            </ScrollView>
            <View
                style={{
                    width: '100%',
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: '#d9d9d9',
                    height: height * 0.12,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Pressable
                    onPress={() => router.push('post-payment-onboarding/WeekDrinking')}
                    // onPress={()=>console.log(data.spendPerWeek)}

                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#000',
                        borderRadius: 30,
                        height: height * 0.06,
                        width: width * 0.8,
                        gap: 10
                    }}
                >
                    {/* <AntDesign name="plus" size={15} color="#fff" /> */}
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400', fontFamily: "Regular" }}>Next</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Comparison

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#11303c',
        paddingTop: 20,
    },
    headerText: {
        color: 'white',
        fontSize: 40,
        fontWeight: '500',
        textAlign: 'right',
        lineHeight: 50,
        // marginLeft: width * 0.45,
        fontFamily: "Regular"
    },
    subheaderText: {
        color: 'white',
        fontSize: 18,
        lineHeight: 25,
        marginLeft: width * 0.08,
        marginRight: width * 0.25,
        fontFamily: "Regular"
    }
})