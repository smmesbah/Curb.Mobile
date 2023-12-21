import { Dimensions, Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useGlobalSearchParams, useRouter } from 'expo-router'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux'


const { width, height } = Dimensions.get('screen');

const Day = () => {
    const router = useRouter();

    const selectedDays = useSelector((state: any) => state.selecedDays.selectedDays);
    const { day } = useGlobalSearchParams();
    const Day= selectedDays[0] === undefined ? day : selectedDays[0];
    // const selectedDays = useSelector((state: any) => state.selecedDays.selectedDays);
    console.log(selectedDays);
    return (
        <SafeAreaView style={styles.container}>
            <Pressable
                onPress={() => router.back()}
                style={{ justifyContent: 'center', marginTop: 25, marginLeft: 25 }}
            >
                <Text>
                    <AntDesign name="arrowleft" size={28} color="black" />
                </Text>
            </Pressable >

            <View style={{ marginTop: 15 }}>
                <View style={{ gap: 35, }}>
                    <Text style={styles.headerText}>{Day}</Text>
                    <Text style={styles.subheaderText}>What kind of drink would you typically have on a {Day}</Text>
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
                        <Text style={{ fontSize: 24, color: '#7844ff', fontFamily: "Regular" }}>Choose a drink</Text>
                    </View>

                    <View
                        style={{
                            gap: 15,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => router.push(`/post-payment-onboarding/adding-drink?day=${Day}&drink=beer-cider`)}
                        >
                            <View style={styles.drinkChoosingBtn}>
                                <Image source={require('../../../assets/Beer.png')} style={{ height: 55, width: 25 }} />
                                <Text style={{ fontSize: 17, color: '#27284e', fontWeight: '400', fontFamily: "Regular" }}> Beer & Cider </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            // onPress={() => router.push('/post-payment-onboarding/wine-fizz')}
                            onPress={() => router.push(`/post-payment-onboarding/adding-drink?day=${Day}&drink=wine-fizz`)}
                        >
                            <View style={styles.drinkChoosingBtn}>
                                <Image source={require('../../../assets/Wine.png')} style={{ height: 60, width: 25 }} />
                                <Text style={{ fontSize: 17, color: '#27284e', fontWeight: '400', fontFamily: "Regular" }}> Wine & Fizz </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            // onPress={() => router.push('/post-payment-onboarding/spirits-shots')}
                            onPress={() => router.push(`/post-payment-onboarding/adding-drink?day=${Day}&drink=spirits-shots`)}
                        >
                            <View style={styles.drinkChoosingBtn}>
                                <Image source={require('../../../assets/Spirits.png')} style={{ height: 55, width: 25 }} />
                                <Text style={{ fontSize: 17, color: '#27284e', fontWeight: '400', fontFamily: "Regular" }}> Spirits & Shots </Text>
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
        fontFamily: "Regular"
    },
    subheaderText: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'left',
        marginLeft: width * 0.09,
        marginRight: width * 0.3,
        fontFamily: "Regular"
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