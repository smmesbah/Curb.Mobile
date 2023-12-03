import { Dimensions, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import SubscriptionPlanCard from 'component/SubscrptionPlanCards/SubscriptionPlanCard';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import PressablePaymentMethodCard from 'component/PaymentMethodCards/PressablePaymentMethodCard';


const { width, height } = Dimensions.get('screen');

const SubscriptionPlan = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Link href='./Onbording4' style={{ justifyContent: 'center' }}>
                    <Text>
                        <AntDesign name="arrowleft" size={28} color="black" />
                    </Text>
                </Link >

                <View style={styles.curb}>
                    <Text style={styles.curbText}>curb</Text>
                    <View style={[styles.dot]} />
                </View>
            </View>

            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    marginTop: height * 0.05,
                    gap: 20,
                }}
            >
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: '500',
                        letterSpacing: 1,
                        marginBottom: 10

                    }}
                >Your Subscription Plan</Text>

                <View
                    style={{ backgroundColor: '#eae8e2', paddingHorizontal: 20, paddingVertical: 25, width: "100%" }}
                >
                    <SubscriptionPlanCard />
                </View>

                <View>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '500' }}>Payment Method</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            // justifyContent: 'space-evenly',
                            marginTop: 10,
                            width: "100%",
                            paddingHorizontal: 20,
                            gap: 10,
                        }}
                    >
                        <PressablePaymentMethodCard
                            redirect='./paywith-debitcard'
                            iconLibraryName='Feather'
                            iconName='credit-card'
                            text='Debit Card'
                        />
                        <PressablePaymentMethodCard
                            redirect='./paywith-paypal'
                            iconLibraryName='Foundation'
                            iconName='paypal'
                            text='Paypal'
                        />
                        <PressablePaymentMethodCard
                            redirect='./paywith-googlepay'
                            iconLibraryName='FontAwesome5Brands'
                            iconName='google-pay'
                            text='G-Pay'
                        />
                        <PressablePaymentMethodCard
                            redirect='./paywith-applepay'
                            iconLibraryName='FontAwesome5Brands'
                            iconName='apple-pay'
                            text='Apple Pay'
                        />
                    </View>
                </View>

                <View style={{gap: 5}}>
                    <Text style={{fontSize: 18}}>Already paid and subscribed?</Text>
                    <Text style={{fontSize: 18}}><Link href='./signup' style={{color: '#5c4aff'}}>Log out here</Link> and log back in.</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SubscriptionPlan

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingVertical: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    curb: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },
    curbText: {
        color: 'black',
        fontSize: 30,
        fontWeight: '500',
        letterSpacing: 5,
    },
    dot: {
        backgroundColor: '#000',
        width: 15,
        height: 15,
        borderRadius: 50,
        margin: 3,
    },
})