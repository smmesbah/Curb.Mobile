import { Dimensions, Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useGlobalSearchParams, useRouter } from 'expo-router'
import AntDesign from 'react-native-vector-icons/AntDesign';


const { width, height } = Dimensions.get('screen');

const Day = () => {
    const router = useRouter();

    const { day } = useGlobalSearchParams();
    console.log(day);
    return (
        <SafeAreaView style={styles.container}>
            <Pressable
                onPress={() => router.back()}
                style={{ justifyContent: 'center', paddingVertical: 15, paddingHorizontal: 15 }}
            >
                <Text>
                    <AntDesign name="arrowleft" size={28} color="black" />
                </Text>
            </Pressable >

            <View style={{ marginTop: 15 }}>
                <View style={{ gap: 35, }}>
                    <Text style={styles.headerText}>{day}</Text>
                    <Text style={styles.subheaderText}>What kind of drink would you typically have on a {day}</Text>
                </View>
            </View>

            <View
                style={{
                    flex: 1,
                    backgroundColor: '#f3f2ee',
                    marginTop: 25,
                }}
            >
                <View
                    style={{
                        marginHorizontal: width * 0.1,
                        marginTop: height * 0.05,
                        gap: 30,
                    }}
                >
                    <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                        <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: '#7844ff', }} />
                        <Text style={{ fontSize: 24, color: '#7844ff' }}>Choose a drink</Text>
                    </View>

                    <View
                        style={{
                            gap: 15,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => router.push(`/post-payment-onboarding/beer-cider?day=${day}`)}
                        >
                            <View style={styles.drinkChoosingBtn}>
                                <Image source={require('../../../assets/Beer.png')} style={{ height: 55, width: 25 }} />
                                <Text style={{ fontSize: 17, color: '#27284e', fontWeight: '400' }}> Beer & Cider </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            // onPress={() => router.push('/post-payment-onboarding/wine-fizz')}
                            onPress={() => router.push(`/post-payment-onboarding/wine-fizz?day=${day}`)}
                        >
                            <View style={styles.drinkChoosingBtn}>
                                <Image source={require('../../../assets/Wine.png')} style={{ height: 60, width: 25 }} />
                                <Text style={{ fontSize: 17, color: '#27284e', fontWeight: '400' }}> Wine & Fizz </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            // onPress={() => router.push('/post-payment-onboarding/spirits-shots')}
                            onPress={() => router.push(`/post-payment-onboarding/spirits-shots?day=${day}`)}
                        >
                            <View style={styles.drinkChoosingBtn}>
                                <Image source={require('../../../assets/Spirits.png')} style={{ height: 55, width: 25 }} />
                                <Text style={{ fontSize: 17, color: '#27284e', fontWeight: '400' }}> Spirits & Shots </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Day

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingTop: 20,
    },
    headerText: {
        fontSize: 40,
        fontWeight: '400',
        textAlign: 'right',
        marginRight: width * 0.09,
    },
    subheaderText: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'left',
        marginLeft: width * 0.09,
        marginRight: width * 0.3,
    },
    drinkChoosingBtn: {
        flexDirection: 'row',
        gap: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#d9d9d9',
        backgroundColor: '#fff',
        paddingHorizontal: 85,
        paddingVertical: 20,
        borderRadius: 30,
    }
})