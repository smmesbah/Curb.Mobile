import { Dimensions, FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import HideWithKeyboard from 'react-native-hide-with-keyboard'
import { useSelector } from 'react-redux'

const { width, height } = Dimensions.get('screen');

const WeeklyDrinkSummary = () => {
    const data = useSelector((state: any) => state.drink.drink);
    // const data = [
    //     {
    //         day: 'Monday',
    //         drinks: [
    //             {
    //                 drinkQuantity: 1,
    //                 drinkType: 'lager',
    //                 drinkSize: 'pint',
    //             },
    //             {
    //                 drinkQuantity: 2,
    //                 drinkType: 'Vodka',
    //                 drinkSize: 'pint',
    //             },
    //         ]
    //     },
    //     {
    //         day: 'Tuesday',
    //         drinks: [
    //             {
    //                 drinkQuantity: 1,
    //                 drinkType: 'lager',
    //                 drinkSize: 'pint',
    //             },
    //             {
    //                 drinkQuantity: 2,
    //                 drinkType: 'Vodka',
    //                 drinkSize: 'pint',
    //             },
    //         ]
    //     },
    //     {
    //         day: 'Wednesday',
    //         drinks: [
                
    //         ]
    //     },
    // ];

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

            <View
                style={{
                    marginRight: 20,
                }}
            >
                <View style={{ gap: 30 }}>
                    <Text style={styles.headerText}>Your week in drinking</Text>
                    <View>
                        <Text style={styles.subheaderText}>Here is your weekly summary.</Text>
                        <Text style={styles.subheaderText}>You can edit this at any stage.</Text>
                    </View>
                </View>
            </View>

            <FlatList
                style={{
                    marginTop: 25,
                    // gap: 50,
                }}
                data={data}
                renderItem={({ item }) => (
                    // const filteredData = data.filter()
                <View
                    style={{
                        height: 130,
                        position: 'relative',
                        backgroundColor: 'white',
                        paddingHorizontal: 50,
                        paddingVertical: 40,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginBottom: 15,
                    }}
                >
                    <Pressable
                        style={{
                            position: 'absolute',
                            top: 15,
                            right: 15,
                        }}
                    >
                        <Feather
                            name="edit-2"
                            size={20}
                            color="#7844ff"
                        />
                    </Pressable>
                    <Text
                        style={{
                            fontSize: 30,
                            fontWeight: '500',
                            width: '20%'
                        }}
                    >
                        {item.day.slice(0, 3)}
                    </Text>
                    <View
                        style={{
                            gap: 10,
                            marginLeft: 60,
                        }}
                    >
                        {
                            item.drinks.length === 0 && <Text style={{ fontSize: 17, }}>No alcohol</Text>
                        }
                        {
                            item.drinks.length !== 0 && item.drinks.map((drink: any, index: number) => (
                                <Text key={index} style={{ fontSize: 17, }}>{drink.drinkQuantity} {drink.drinkSize} of {drink.drinkType}</Text>
                            ))
                        }
                    </View>
                </View>
                )}
            />

            <HideWithKeyboard>
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
                        onPress={() => alert('Go to next day')}
                        // onPress={handleGoToNextDayPress}
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
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400' }}>Go to next day</Text>
                    </Pressable>

                </View>
            </HideWithKeyboard>

        </SafeAreaView>
    )
}

export default WeeklyDrinkSummary

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#668495',
        paddingTop: 20,
    },
    headerText: {
        color: 'white',
        fontSize: 40,
        fontWeight: '500',
        lineHeight: 50,
        marginLeft: width * 0.45,
    },
    subheaderText: {
        color: 'white',
        fontSize: 18,
        lineHeight: 25,
        marginLeft: width * 0.08,
        marginRight: width * 0.25,
    }
})