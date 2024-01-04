import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useImperativeHandle } from 'react'
import RadioButtonRound from './ui/RadioButtonRound'
import DropDownPicker from 'react-native-dropdown-picker'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { useDispatch } from 'react-redux'
import { addDrink } from 'redux/actions/drinkActions'
import { useGlobalSearchParams } from 'expo-router'

const { width, height } = Dimensions.get('screen');

const WineFizzForm = React.forwardRef((props,ref) => {
    const dispatch = useDispatch();
    const { day } = useGlobalSearchParams();
    const data = [
        { value: 'Wine' },
        { value: 'Sparkling' },
    ]
    const [wineFizzType, setWineFizzType] = React.useState<string>('');
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState<string>('');
    const [items, setItems] = React.useState([
        { label: 'Small glass', value: '175ml' },
        { label: 'Large glass', value: '250ml' },
        { label: 'Bootle', value: '750ml' },
    ]);
    const [wineCount, setWineCount] = React.useState<number>(0);

    useImperativeHandle(ref, () => ({
        async handleAddDrinkPress() {
            const drink = {
                day: Array.isArray(day) || day === undefined ? '' : day,
                drinks: {
                    drinkQuantity: wineCount,
                    drinkType: wineFizzType,
                    drinkSize: value,
                }
            }
            dispatch(addDrink(drink));

            const token=await AsyncStorage.getItem('token');
            const weekly_drink={
                token: token,
                day: day,
                drinkType: "WINE_FIZZ",
                drinkName: wineFizzType,
                drinkVolume: value,
                drinkQuantity: wineCount
            }
            const apiUrl=`${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/onboarding/weekly-drink`
            const response=await fetch(apiUrl, {method: 'POST',headers: {'content-type': 'application/json'}, body: JSON.stringify(weekly_drink)}); 
            const data= await response.json();
                if(!data.success){
                    alert(data.message)
                }
        }
    }));

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
                What kind of wine or sparkling?
            </Text>

            <View>
                <RadioButtonRound
                    data={data}
                    onSelect={(value) => setWineFizzType(value)}
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
                    How much?
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
                        borderColor: '#d9d9d9',
                        backgroundColor: '#fff'
                    }}
                    textStyle={{
                        fontSize: 17,
                        fontWeight: '400',
                        color: '#27284e',
                        textAlign: 'center',
                        fontFamily: "Regular"
                    }}
                    dropDownContainerStyle={{
                        position: 'absolute',
                        width: width * 0.65,
                        backgroundColor: "#fff",
                        borderColor: '#d9d9d9',
                        zIndex: 9999,
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
                    onChangeText={(text) => setWineCount(Number(text))}
                    inputMode="numeric"
                    keyboardType="numeric"
                />
            </View>
        </View>
    )
});

export default WineFizzForm

const styles = StyleSheet.create({})