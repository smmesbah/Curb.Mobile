import { ActivityIndicator, Dimensions, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import AntDesign from 'react-native-vector-icons/AntDesign'
import TopSection from 'component/PostPaymentComponents/TopSection'
import CustomSelect from 'component/ui/CustomSelect'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { Mixpanel } from 'mixpanel-react-native'

const { width, height } = Dimensions.get('screen');

const trackAutomaticEvents = true;
const mixpanel = new Mixpanel(`${process.env.EXPO_PUBLIC_MIXPANEL_TOKEN}`, trackAutomaticEvents);
mixpanel.init();

interface Goal {
    id: number,
    value: string,
}

const Goals = () => {
    const goals: Goal[] = [
        { id: 1, value: 'Feel healthier' },
        { id: 2, value: 'Save money' },
        { id: 3, value: 'Improve my relationships' },
        { id: 4, value: 'Increase productivity' },
        { id: 5, value: 'Live longer' },
        { id: 6, value: 'Sleep better' },
        { id: 7, value: 'Improve how I look' },
        { id: 8, value: 'Reduce anxiety' },
        { id: 9, value: 'Improve my mood' },
        { id: 10, value: 'Avoid hangovers' },
        { id: 11, value: 'Prefer not to say' },
    ]

    const [selectedItems, setSelectedItems] = React.useState<Goal[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);

    const toggleItemSelection = (item: Goal): void => {
        const alreadySelected = selectedItems.some(selectedItem => selectedItem.id === item.id);

        if (alreadySelected) {
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem.id !== item.id));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    const handleNext = async () => {
        setIsLoading(true);
        const token = await AsyncStorage.getItem('token');

        const userGoals = {
            token: token,
            goals: selectedItems.map(item => item.value)
        }
        // console.log(userGoals)
        const apiUrl = `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/onboarding/user-goals`
        const response = await fetch(apiUrl, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(userGoals) });
        const data = await response.json();
        if (!data.success) {
            alert(data.message)
            setIsLoading(false);
        }
        else {
            const updatedOnboardingSteps = await axios.patch(`${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/onboarding/update-onboarding-steps`, {
                token: token,
                onboardingSteps: 2
            })
            setIsLoading(false);
            router.push('/post-payment-onboarding/step-3')
        }
    }

    React.useEffect(() => {
        // console.log('Selected Items:', selectedItems.map(item => item.value));
    }, [selectedItems]);

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

            <View style={{ marginTop: 15, flex: 1, }}>
                <TopSection
                    HeaderText='Your Goals'
                    SubHeaderText='Why do you want to improve your relationship with alcohol?'
                />

                <ScrollView style={{
                    flex: 1,
                    backgroundColor: '#f3f2ee',

                }}>
                    <View
                        style={{
                            padding: width * 0.03,
                        }}
                    >
                        <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                            <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: '#7844ff', }} />
                            <Text style={{ fontSize: 24, color: '#7844ff', fontFamily: "Regular" }}>I want to</Text>
                        </View>

                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 7, marginTop: width * 0.08 }}>
                            {goals.map((goal) => (
                                <CustomSelect
                                    key={goal.id}
                                    text={goal.value}
                                    selected={selectedItems.some(item => item.id === goal.id)}
                                    onPress={() => toggleItemSelection(goal)}
                                />
                            ))}
                        </View>
                    </View>
                    <Pressable onPress={handleNext} style={styles.button}>
                        {
                            isLoading ?
                                <ActivityIndicator color='black' animating={isLoading} />
                                :
                                (
                                    <View>
                                        <Text style={[styles.buttonText, { width: '100%', fontFamily: "Regular" }]}>
                                            Next
                                        </Text>
                                    </View>
                                )
                        }

                    </Pressable>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Goals

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingTop: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 25,
        marginHorizontal: 30,
        marginVertical: 15,
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