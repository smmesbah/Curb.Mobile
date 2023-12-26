import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useGlobalSearchParams } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { removeDrink } from 'redux/actions/drinkActions';

const { width, height } = Dimensions.get('screen');
const DrinkDetailsContainer = () => {
    const dispatch = useDispatch();
    const { day } = useGlobalSearchParams();
    const drink = useSelector((state: any) => state.drink.drink);
    const data = drink.filter((item: any) => item.day === day);
    console.log(data[0]);


    const handleRemoveDrinkPress = async(drink: any) => {
        const removeableDrink = {
            day: Array.isArray(day) ? day[0] : day || '',
            drinks: {
                drinkQuantity: drink.drinkQuantity,
                drinkType: drink.drinkType,
                drinkSize: drink.drinkSize,
            }
        }

        const token=await AsyncStorage.getItem('token');
            const weekly_drink={
                token: token,
                day: day,
                drinkName: drink.drinkType,
                drinkVolume: drink.drinkSize,
                drinkQuantity: drink.drinkQuantity
            }
            const apiUrl="http://localhost:8000/api/v1/onboarding/weekly-drink"
            const response=await fetch(apiUrl, {method: 'DELETE',headers: {'content-type': 'application/json'}, body: JSON.stringify(weekly_drink)}); 
            const data= await response.json();
                if(!data.success){
                    alert(data.message)
                }
        dispatch(removeDrink(removeableDrink));
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
                Your {day} drinks
            </Text>

            <View
                style={{
                    gap: 10,
                    alignItems: 'center',
                }}
            >
                {
                    data[0]?.drinks.map((item: any, index: number) => (
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
                                <Text style={{ fontSize: 17, fontWeight: '400', color: '#27284e', width: '70%', textAlign: 'center', fontFamily: "Regular" }}>{item.drinkQuantity} {item.drinkSize} {item.drinkType}</Text>
                                <TouchableOpacity
                                    // onPress={() => dispatch(removeDrink({
                                    //     day: Array.isArray(day) ? day[0] : day || '',
                                    //     drinks: {
                                    //         drinkQuantity: item.drinkQuantity,
                                    //         drinkType: item.drinkType,
                                    //         drinkSize: item.drinkSize,
                                    //     }
                                    // }))}
                                    onPress={() => {handleRemoveDrinkPress(item)}}
                                    style={{ position: 'absolute', right: 0, }}
                                >
                                    <AntDesign name='delete' size={20} color='#a2a2a2' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

export default DrinkDetailsContainer

const styles = StyleSheet.create({})