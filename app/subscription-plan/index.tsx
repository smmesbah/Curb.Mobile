import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import SubscriptionPlanCard from 'component/SubscrptionPlanCards/SubscriptionPlanCard';

const { width, height } = Dimensions.get('screen');

const SubscriptionPlan = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Link href='./Onbording4' style={{ justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20 }}>Back</Text>
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
                    style={{ backgroundColor: '#eae8e2', paddingHorizontal: 20, paddingVertical: 25 }}
                >
                    <SubscriptionPlanCard />
                </View>

                    <View>
                        <Text>Payment Method</Text>
                        
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