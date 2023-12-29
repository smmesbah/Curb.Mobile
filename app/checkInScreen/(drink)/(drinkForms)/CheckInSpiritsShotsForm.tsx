import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useImperativeHandle } from 'react'
// import RadioButtonRound from './ui/RadioButtonRound';
import RadioButtonRound from 'component/ui/RadioButtonRound';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { useDispatch } from 'react-redux';
import { addDrink } from 'redux/actions/drinkActions';
import { useGlobalSearchParams } from 'expo-router';
import axios from 'axios';
import { addCheckinDrink } from 'redux/actions/checkinDrinkActions';

const { width, height } = Dimensions.get('screen');

const CheckInSpiritsShotsForm = React.forwardRef((props, ref) => {

    useImperativeHandle(ref, () => ({
        async handleAddDrinkPress() {
            const token = await AsyncStorage.getItem('token');
            const res = await axios.post(`${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/checkin/checkin-drink`, {
                token: token,
                drinkType: "SPIRITS_SHOTS",
                drinkName: spiritsShotsType,
                drinkVolume: value,
                drinkQuantity: spiritsShotsCount
            })

            if(res.data.success){
                const checkinDrink = {
                    drinkName: res.data.data.drinkName,
                    drinkVolume: res.data.data.drinkVolume,
                    drinkQuantity: res.data.data.drinkQuantity,
                }
                dispatch(addCheckinDrink(checkinDrink));
                console.log(res.data.message);
            }else{
                console.log(res.data.message);
            }
        }
    }));
    const dispatch = useDispatch();
    const data = [
        { value: 'Vodka' },
        { value: 'Gin' },
        { value: 'Tequilla' },
        { value: 'Whisky' },
        { value: 'Rum' },
        { value: 'Other' },
    ]
    const [spiritsShotsType, setSpiritsShotsType] = React.useState<string>('');
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState<string>('');
    const [items, setItems] = React.useState([
        { label: 'Single', value: 'single' },
        { label: 'Double', value: 'double' },
    ]);
    const [spiritsShotsCount, setSpiritsShotsCount] = React.useState<number>(0);
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
                What kind of spirit?
            </Text>

            <View>
                <RadioButtonRound
                    data={data}
                    onSelect={(value) => setSpiritsShotsType(value)}
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
                    onChangeText={(text) => setSpiritsShotsCount(Number(text))}
                    inputMode="numeric"
                    keyboardType="numeric"
                />
            </View>
        </View>
    )
});

export default CheckInSpiritsShotsForm

const styles = StyleSheet.create({})