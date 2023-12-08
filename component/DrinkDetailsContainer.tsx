import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useGlobalSearchParams } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';

import { removeDrink } from 'redux/actions/drinkActions';

const { width, height } = Dimensions.get('screen');
const DrinkDetailsContainer = () => {
    const dispatch = useDispatch();
    const { day } = useGlobalSearchParams();
    const drink = useSelector((state: any) => state.drink.drink);
    // console.log(drink);
    const data = drink.filter((item: any) => item.day === day);

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
                }}
            >
                Your Monday drinks
            </Text>

            <View
                style={{
                    gap: 10,
                    alignItems: 'center',
                }}
            >
                {
                    data.map((item: any, index: number) => (
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
                                <Text style={{ fontSize: 17, fontWeight: '400', color: '#27284e', width: '70%', textAlign: 'center' }}>{item.drinkQuantity} {item.drinkSize} {item.drinkType}</Text>
                                <TouchableOpacity
                                    onPress={() => dispatch(removeDrink(item))}
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