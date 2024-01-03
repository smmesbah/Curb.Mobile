import { Pressable, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Link, router } from 'expo-router'
import AntDesign from 'react-native-vector-icons/AntDesign'
import TouchableHighlightButton from 'component/ui/TouchableHighlightButton'
import { useSelector } from 'react-redux'

const WeekDays = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    // const selectedDays: string[]=[];
    const selectedDays = useSelector((state: any) => state.selecedDays.selectedDays);
    useEffect(() => {
        // console.log(selectedDays)
    })
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable
                    onPress={() => router.back()}
                    style={{ justifyContent: 'center', paddingVertical: 15, paddingHorizontal: 15 }}
                >
                    <Text>
                        <AntDesign name="arrowleft" size={28} color="black" />
                    </Text>
                </Pressable >

                <View style={styles.curb}>
                    <Text style={styles.curbText}>curb</Text>
                    <View style={[styles.dot]} />
                </View>
            </View>

            <View style={{
                gap: 25,
                marginHorizontal: 30,
                marginTop: 20,
                elevation: 5
            }}>
                <Text style={{ fontSize: 30, fontWeight: '400', fontFamily: "Regular"}}>Your Current Habits</Text>
                <Text style={{ fontSize: 18, fontWeight: '400', fontFamily: "Regular" }}>Share your typical drinking habits to receive more personalized insights.</Text>
            </View>

            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: '#f3f2ee',
                    marginTop: 20,
                }}
            >
                <View
                    style={{
                        marginHorizontal: 25,
                        marginTop: 20,
                        marginBottom: 10,
                        backgroundColor: 'white',
                        borderRadius: 15,
                        padding: 20,
                    }}
                >
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '400',
                        color: '#27284e',
                        textAlign: 'center',
                        marginHorizontal: 60,
                        marginTop: 10,
                        fontFamily: "Regular"
                    }}
                    >Tap the days you </Text>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '400',
                        color: '#27284e',
                        textAlign: 'center',
                        marginHorizontal: 60,
                        marginBottom: 30,
                        fontFamily: "Regular"
                    }}
                    >drink each week</Text>

                    <View
                        style={{
                            alignItems: 'center',
                            gap: 10,
                        }}
                    >
                        {
                            days.map((day) => (
                                <TouchableHighlightButton
                                    key={day}
                                    text={day}
                                    redirect={{
                                        pathname: '/post-payment-onboarding/[day]',
                                        params: { 
                                            day: day,
                                            // week: "Hello",
                                        }
                                    }}
                                    // selectedDays={selectedDays}
                                />
                            ))
                        }
                    </View>
                </View>

                <View style={styles.button}>
                    {
                        <Pressable onPress={()=>selectedDays.length>0?router.push(`/post-payment-onboarding/${selectedDays[0]}`): null}>
                            <Text style={[styles.buttonText, { width: '100%',}]}>
                                Next
                            </Text>
                        </Pressable>
                    }
                    
                </View>
                <View style={{height: 15}}/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default WeekDays

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingTop: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 15,
        marginHorizontal: 5,
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
        fontFamily: "Regular"
    },
    dot: {
        backgroundColor: '#000',
        width: 15,
        height: 15,
        borderRadius: 50,
        margin: 3,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 25,
        marginHorizontal: 45,
        padding: 10,
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        fontFamily: "Regular"
    },
})