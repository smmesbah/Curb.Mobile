import { useGlobalSearchParams } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { removeCheckinDrink } from 'redux/actions/checkinDrinkActions';

const { width, height } = Dimensions.get('screen');
const CheckInDrinkDetailsContainer = () => {
    const dispatch = useDispatch();
    const { day } = useGlobalSearchParams();
    const checkinDrinks = useSelector((state: any) => state?.checkinDrinks?.drinks);


    const handleRemoveDrinkPress = async (drink: any) => {
        // console.log(drink);
        try {
            const removedDrink = await axios.delete(`${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/checkin/checkin-drink/${drink.id}`)

            console.log(removedDrink.data.success)
            if (removedDrink.data.success) {
                const removeDrinkFromRedux = {
                    id: removedDrink.data.data.id,
                    drinkName: removedDrink.data.data.drinkName,
                    drinkVolume: removedDrink.data.data.drinkVolume,
                    drinkQuantity: removedDrink.data.data.drinkQuantity,
                }
                dispatch(removeCheckinDrink(removeDrinkFromRedux));
            } else {
                console.log(removedDrink.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View
            style={{
                width: width * 0.8,
                backgroundColor: 'white',
                borderRadius: 15,
                paddingTop: 20,
                paddingHorizontal: 20,
                paddingBottom: 40,
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: '400',
                    color: '#27284e',
                    textAlign: 'center',
                    marginHorizontal: 30,
                    marginTop: 10,
                    marginBottom: 30,
                    fontFamily: "Regular"
                }}
            >
                Your drinks
            </Text>

            {
                checkinDrinks &&
                <View
                    style={{
                        gap: 10,
                        alignItems: 'center',
                    }}
                >
                    {
                        checkinDrinks?.map((item: any, index: number) => (
                            <View
                                key={index}
                                style={{
                                    width: '100%',
                                    paddingVertical: 22,
                                    borderWidth: 1,
                                    borderRadius: 30,
                                    borderColor: '#d9d9d9',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '80%',
                                        position: 'relative'
                                    }}
                                >
                                    <Text style={{ fontSize: 17, fontWeight: '400', color: '#27284e', width: '70%', textAlign: 'center', fontFamily: "Regular" }}>{item.drinkQuantity} {item.drinkVolume} {item.drinkName}</Text>
                                    <TouchableOpacity
                                        // onPress={() => dispatch(removeDrink({
                                        //     day: Array.isArray(day) ? day[0] : day || '',
                                        //     drinks: {
                                        //         drinkQuantity: item.drinkQuantity,
                                        //         drinkType: item.drinkType,
                                        //         drinkSize: item.drinkSize,
                                        //     }
                                        // }))}
                                        onPress={() => { handleRemoveDrinkPress(item) }}
                                        style={{ position: 'absolute', right: 0, }}
                                    >
                                        <AntDesign name='delete' size={20} color='#a2a2a2' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))
                    }
                </View>
            }
        </View>
    )
}

export default CheckInDrinkDetailsContainer

const styles = StyleSheet.create({})