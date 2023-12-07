import { Dimensions, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { router, useGlobalSearchParams, useLocalSearchParams, useRouter } from 'expo-router';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import BeerCiderForm from 'component/BeerCiderForm';
import Drink from 'component/Drink';
import DrinkDetailsContainer from 'component/DrinkDetailsContainer';
import SpiritsShotsForm from 'component/SpiritsShotsForm';
import WineFizzForm from 'component/WineFizzForm';

const { width, height } = Dimensions.get('screen');

const BeerCider = () => {
    const { day, drink } = useLocalSearchParams();
    const [addingDrink, setAddingDrink] = React.useState<string | null>();

    React.useEffect(() => {
        if (drink === 'beer-cider') {
            setAddingDrink('beer-cider');
        }
        if (drink === 'spirits-shots') {
            setAddingDrink('spirits-shots');
        }
        if (drink === 'wine-fizz') {
            setAddingDrink('wine-fizz');
        }
    }, [])

    const handleAddDrinkPress = () => {
        setAddingDrink(null);
    }

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
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <View>
                    {
                        addingDrink === 'beer-cider' && <BeerCiderForm />
                    }
                    {
                        addingDrink === 'spirits-shots' && <SpiritsShotsForm />
                    }
                    {
                        addingDrink === 'wine-fizz' && <WineFizzForm />
                    }
                </View>
                {
                    addingDrink === null && (
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 25,
                            }}
                        >
                            <DrinkDetailsContainer />
                            <Drink />
                        </View>
                    )
                }
            </ScrollView>

            <HideWithKeyboard>
                <View
                    style={{
                        width: '100%',
                        backgroundColor: 'white',
                        borderWidth: 1,
                        borderColor: '#d9d9d9',
                        height: height * 0.12,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {
                        addingDrink === null ? (
                            <Pressable
                                onPress={() => alert('Go to next day')}
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
                                <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400' }}>Go to next day</Text>
                            </Pressable>
                        ) : (
                            <Pressable
                                onPress={handleAddDrinkPress}
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
                        )
                    }

                </View>
            </HideWithKeyboard>
        </SafeAreaView>
    )
}

export default BeerCider

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