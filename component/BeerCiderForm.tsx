import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useImperativeHandle, useRef } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import RadioButtonRound from './ui/RadioButtonRound'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { addDrink } from 'redux/actions/drinkActions'
import { useGlobalSearchParams } from 'expo-router'

const { width, height } = Dimensions.get('screen');

const BeerCiderForm = React.forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
       async handleAddDrinkPress() {
            const drink = {
                day: Array.isArray(day) || day === undefined ? '' : day,
                drinks: {
                    drinkQuantity: drinkCount,
                    drinkType: beerCiderType,
                    drinkSize: value,
                }
            }
            dispatch(addDrink(drink));

            const token=await AsyncStorage.getItem('token');
            const weekly_drink={
                token: token,
                day: day,
                drinkType: "BEER_CIDER",
                drinkName: beerCiderType,
                drinkVolume: value,
                drinkQuantity: drinkCount
            }
            const apiUrl=`${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/onboarding/weekly-drink`
            const response=await fetch(apiUrl, {method: 'POST',headers: {'content-type': 'application/json'}, body: JSON.stringify(weekly_drink)}); 
            const data= await response.json();
                if(!data.success){
                    alert(data.message)
                }
        }
    }));

    const dispatch = useDispatch();
    const { day } = useGlobalSearchParams();
    const [beerCiderType, setBeerCiderType] = React.useState<string>('');
    const data = [
        { value: 'Lager' },
        { value: 'Beer' },
        { value: 'Stout' }
    ]
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState<string>('');
    const [items, setItems] = React.useState([
        { label: 'Pint', value: 'Pint' },
        { label: 'Half Pint', value: 'Half' },
        { label: 'Bottle', value: 'Bottle' },
        { label: 'Can', value: 'Can' }
    ]);
    const [drinkCount, setDrinkCount] = React.useState<number>(0);

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
                padding: 20,
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
                What kind of beer or cider?
            </Text>

            <View>
                <RadioButtonRound
                    data={data}
                    onSelect={(value) => setBeerCiderType(value)}
                />
            </View>

            <View
                style={{
                    gap: 30,
                    alignItems: 'center',
                    marginTop: 40,
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '400',
                        color: '#27284e',
                        fontFamily: "Regular"
                    }}
                >
                    Which size?
                </Text>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    listMode="SCROLLVIEW"
                    placeholder="Select drink"
                    showTickIcon={false}
                    style={{
                        width: width * 0.65,
                        height: height * 0.05,
                        borderWidth: 1,
                        borderColor: '#d9d9d9'
                    }}
                    textStyle={{
                        fontSize: 17,
                        fontWeight: '400',
                        color: '#27284e',
                        textAlign: 'center',
                        fontFamily: "Regular"
                    }}
                    dropDownContainerStyle={{
                        width: width * 0.65,
                        backgroundColor: "white",
                        borderColor: '#d9d9d9',
                        zIndex: 1000,
                        shadowColor: '#52006A',
                        elevation: 5,
                    }}
                />
            </View>

            <View
                style={{
                    gap: 18,
                    alignItems: 'center',
                    marginTop: 25,
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '400',
                        color: '#27284e',
                        fontFamily: "Regular"
                    }}
                >
                    How many?
                </Text>
                <View>
                    <TextInput
                        style={{
                            height: height * 0.1,
                            width: width * 0.2,
                            borderWidth: 1,
                            borderColor: '#d9d9d9',
                            borderRadius: 8,
                            paddingHorizontal: 25,
                            paddingVertical: 20,

                            fontSize: 40,
                            fontWeight: '400',
                            textAlign: 'center',
                            color: '#27284e', 
                            fontFamily: "Regular"
                        }}
                        onChangeText={(text) => setDrinkCount(Number(text))}
                        inputMode="numeric"
                        keyboardType="numeric"
                    />
                </View>
            </View>
            {/* <TouchableOpacity
                onPress={handleAddDrinkPress}
            >
                <Text>Click me.</Text>
            </TouchableOpacity> */}
        </View>
    )
});

export default BeerCiderForm;

const styles = StyleSheet.create({})