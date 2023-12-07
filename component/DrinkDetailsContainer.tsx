import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const { width, height } = Dimensions.get('screen');
const DrinkDetailsContainer = () => {
    const data = [
        {
            id: 1,
            quantity: 1,
            drinkSize: 'pint',
            drinkType: 'lager',
        },
        {
            id: 2,
            quantity: 2,
            drinkSize: 'small glass',
            drinkType: 'wine',
        }
    ]
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
                    data.map((drink) => (
                        <View
                            key={drink.id}
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
                                <Text style={{ fontSize: 17, fontWeight: '400', color: '#27284e', width: '70%', textAlign: 'center' }}>{drink.quantity} {drink.drinkSize} {drink.drinkType}</Text>
                                <TouchableOpacity style={{ position: 'absolute', right: 0, }}>
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