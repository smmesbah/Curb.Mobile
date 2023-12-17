import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const Drink = ({setAddingDrink}: {setAddingDrink: any}) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                marginHorizontal: 40,
                marginTop: 25,
                marginBottom: 15,
                backgroundColor: 'white',
                borderRadius: 15,
                paddingTop: 20,
                paddingHorizontal: 20,
                paddingBottom: 40,
                elevation: 5,
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
                Add another drink
            </Text>
            <View
                style={{
                    flex: 1,
                    gap: 15,
                }}
            >
                <TouchableOpacity
                    onPress={() => setAddingDrink('beer-cider')}
                >
                    <View style={styles.drinkChoosingBtn}>
                        <Image source={require('../assets/Beer.png')} style={{ height: 55, width: 25 }} />
                        <Text style={{ fontSize: 17, color: '#27284e', fontWeight: '400' }}> Beer & Cider </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setAddingDrink('wine-fizz')}
                >
                    <View style={styles.drinkChoosingBtn}>
                        <Image source={require('../assets/Wine.png')} style={{ height: 60, width: 25 }} />
                        <Text style={{ fontSize: 17, color: '#27284e', fontWeight: '400' }}> Wine & Fizz </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setAddingDrink('spirits-shots')}
                >
                    <View style={styles.drinkChoosingBtn}>
                        <Image source={require('../assets/Spirits.png')} style={{ height: 55, width: 25 }} />
                        <Text style={{ fontSize: 17, color: '#27284e', fontWeight: '400' }}> Spirits & Shots </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Drink

const styles = StyleSheet.create({
    drinkChoosingBtn: {
        flexDirection: 'row',
        gap: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#d9d9d9',
        backgroundColor: '#fff',
        paddingHorizontal: 75,
        paddingVertical: 20,
        borderRadius: 30,
    }
})