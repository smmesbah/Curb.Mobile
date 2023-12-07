import { Dimensions, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import AntDesign from 'react-native-vector-icons/AntDesign'
import RadioButtonRound from 'component/ui/RadioButtonRound';
import DropDownPicker from 'react-native-dropdown-picker';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

const { width, height } = Dimensions.get('screen');

const SpiritsShots = () => {
    const { day } = useLocalSearchParams();
    const data = [
        { value: 'Vodka' },
        { value: 'Gin' },
        { value: 'Whisky' },
        { value: 'Rum' },
        { value: 'Tequilla' },
        { value: 'Other' },
    ]
    const [spiritsShotsType, setSpiritsShotsType] = React.useState<string | null>(null);
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState([
        { label: 'Single', value: 'single' },
        { label: 'Double', value: 'double' },
    ]);
    const [spiritsShotsCount, setSpiritsShotsCount] = React.useState<number>(0);
    return (
        <SafeAreaView style={styles.container}>
            <Pressable
                onPress={() => router.back()}
                style={{ justifyContent: 'center', marginTop: 25, marginLeft: 25 }}
            >
                <Text>
                    <AntDesign name="arrowleft" size={28} color="black" />
                </Text>
            </Pressable>

            <View style={{ marginTop: 15 }}>
                <View style={{ gap: 35, }}>
                    <Text style={styles.headerText}>{day}</Text>
                    <Text style={styles.subheaderText}>What kind of drink would you typically have on a {day}</Text>
                </View>
            </View>


            <ScrollView
                automaticallyAdjustKeyboardInsets={true}
                automaticallyAdjustContentInsets={true}
                style={{
                    backgroundColor: '#f3f2ee',
                    marginTop: 25,
                }}
            >
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
                        What kind of wine or sparkling?
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
                            onChangeText={(text) => setSpiritsShotsCount(Number(text))}
                            inputMode="numeric"
                            keyboardType="numeric"
                        />
                    </View>
                </View>
            </ScrollView>

            <HideWithKeyboard>
                <View
                    style={{
                        // position: 'absolute',
                        // bottom: 0,
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
                        <AntDesign name="plus" size={15} color="#fff" />
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400' }}>Add drink</Text>
                    </Pressable>
                </View>
            </HideWithKeyboard>
        </SafeAreaView>
    )
}

export default SpiritsShots

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingTop: 20,
    },
    headerText: {
        fontSize: 40,
        fontWeight: '400',
        textAlign: 'right',
        marginRight: width * 0.09,
    },
    subheaderText: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'left',
        marginLeft: width * 0.09,
        marginRight: width * 0.3,
    },
})