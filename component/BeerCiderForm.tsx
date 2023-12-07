import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import RadioButtonRound from './ui/RadioButtonRound'

const { width, height } = Dimensions.get('screen');

const BeerCiderForm = () => {
    const [beerCiderType, setBeerCiderType] = React.useState<string | null>(null);
    const data = [
        { value: 'Lager' },
        { value: 'Beer' },
        { value: 'Stout' }
    ]
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState([
        { label: 'Pint', value: 'pint' },
        { label: 'Half Pint', value: 'half-pint' },
        { label: 'Bottle', value: 'bottle' },
        { label: 'Can', value: 'can' }
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
                }}
            >
                What kind of beer & cider?
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
                            color: '#27284e'
                        }}
                        onChangeText={(text) => setDrinkCount(Number(text))}
                        inputMode="numeric"
                        keyboardType="numeric"
                    />
                </View>
            </View>
        </View>
    )
}

export default BeerCiderForm

const styles = StyleSheet.create({})