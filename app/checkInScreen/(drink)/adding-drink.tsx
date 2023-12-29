import { router, useGlobalSearchParams } from 'expo-router';
import React, { useRef } from 'react';
import { Dimensions, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import AntDesign from 'react-native-vector-icons/AntDesign';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addCheckinDrink } from 'redux/actions/checkinDrinkActions';
import { DrinkDetails } from 'redux/reducers/drinkReducer';
import CheckInBeerCiderForm from './(drinkForms)/CheckInBeerCiderForm';
import CheckInDrinkDetailsContainer from './(drinkForms)/CheckInDrinkDetailsContainer';
import CheckInSpiritsShotsForm from './(drinkForms)/CheckInSpiritsShotsForm';
import CheckInWineFizzForm from './(drinkForms)/CheckInWineFizzForm';
import ChooseCheckinDrink from './ChooseCheckinDrink';

const { width, height } = Dimensions.get('screen');

const BeerCider = ({ addDrink }: { addDrink: (drink: DrinkDetails) => void }) => {
    const dispatch = useDispatch();
    const checkinDrinks = useSelector((state: any) => state.checkinDrinks.drinks)
    const { drink } = useGlobalSearchParams();
    const [addingDrink, setAddingDrink] = React.useState<string | null>();

    React.useEffect(() => {
        // console.log(addingDrink);

        // setLength(selectedDays.length);
        // console.log(selectedDays.length);
        fetchAllCheckedInDrinks();

        if (drink === 'beer-cider') {
            setAddingDrink('beer-cider');
        }
        if (drink === 'spirits-shots') {
            setAddingDrink('spirits-shots');
        }
        if (drink === 'wine-fizz') {
            setAddingDrink('wine-fizz');
        }

    }, [drink])

    const beerCiderFormRef = useRef<any>();
    const spiritsShotsFormRef = useRef<any>();
    const wineFizzFormRef = useRef<any>();

    const handleAddDrinkPress = async () => {
        setAddingDrink(null);

        if (addingDrink === 'beer-cider') {
            beerCiderFormRef.current.handleAddDrinkPress()
        } else if (addingDrink === 'spirits-shots') {
            spiritsShotsFormRef.current.handleAddDrinkPress()
        } else if (addingDrink === 'wine-fizz') {
            wineFizzFormRef.current.handleAddDrinkPress()
        }
    }

    const handleNextPress = () => {
        setAddingDrink(null);
        router.push('/checkInScreen/Records')
    }

    // api calls
    // fetch all checkedin drinks
    const fetchAllCheckedInDrinks = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const res = await axios.get(`${process.env.EXPO_PUBLIC_BACKEND_URL}/api/v1/checkin/checkin-drink/${token}`)
            if (res.data.success) {
                // setCheckinDrinks(res.data.data);
                const checkinDrink = res.data.data;
                checkinDrink.map((drink: any) => {
                    const checkinDrink = {
                        id: drink.id,
                        drinkName: drink.drinkName,
                        drinkVolume: drink.drinkVolume,
                        drinkQuantity: drink.drinkQuantity,
                    }
                    dispatch(addCheckinDrink(checkinDrink));
                })
            } else {
                console.log(res.data.message);
            }
        } catch (error) {
            console.log(error)
        }
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
                    {/* <Text style={styles.headerText}>{drinks.drink[0].drinkType ? 'hello' : 'yes'}</Text> */}
                    <Text style={styles.headerText}>Choose Drink</Text>
                    {/* <Text style={styles.subheaderText}>What kind of beer & cider?</Text> */}
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
                        addingDrink === 'beer-cider' && <CheckInBeerCiderForm ref={beerCiderFormRef} />
                    }
                    {
                        addingDrink === 'spirits-shots' && <CheckInSpiritsShotsForm ref={spiritsShotsFormRef} />
                    }
                    {
                        addingDrink === 'wine-fizz' && <CheckInWineFizzForm ref={wineFizzFormRef} />
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
                           {checkinDrinks.length > 0 &&  <CheckInDrinkDetailsContainer />}
                            <ChooseCheckinDrink setAddingDrink={setAddingDrink} />
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
                                // onPress={() => alert('Go to next day')}
                                onPress={handleNextPress}
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
                                <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400', fontFamily: "Regular" }}>Next</Text>
                            </Pressable>
                        ) : (
                            <Pressable
                                onPress={handleAddDrinkPress}
                                // onPress={() => beerCiderFormRef.current.handleAddDrinkPress()}
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
                                <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400', fontFamily: "Regular" }}>Add drink</Text>
                            </Pressable>
                        )
                    }
                </View>
            </HideWithKeyboard>
        </SafeAreaView>
    )
}



export default BeerCider;

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
        fontFamily: "Regular"
    },
    subheaderText: {
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'left',
        marginLeft: width * 0.09,
        marginRight: width * 0.3,
        fontFamily: "Regular"
    },
})