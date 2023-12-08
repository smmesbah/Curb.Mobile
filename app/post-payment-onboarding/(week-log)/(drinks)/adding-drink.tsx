import { Dimensions, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef } from 'react'
import { router, useGlobalSearchParams, useLocalSearchParams, useRouter } from 'expo-router';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import BeerCiderForm from 'component/BeerCiderForm';
import Drink from 'component/Drink';
import DrinkDetailsContainer from 'component/DrinkDetailsContainer';
import SpiritsShotsForm from 'component/SpiritsShotsForm';
import WineFizzForm from 'component/WineFizzForm';

import { DrinkInformation } from 'redux/reducers/drinkReducer';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

const { width, height } = Dimensions.get('screen');

const BeerCider = ({addDrink }: {addDrink: (drink: DrinkInformation) => void })  => {
    const drinks = useSelector((state: any) => state.drink);
    // console.log(drinks.drink[0]);
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

    const beerCiderFormRef = useRef<any>();
    const spiritsShotsFormRef = useRef<any>();
    const wineFizzFormRef = useRef<any>();

    const handleAddDrinkPress = () => {
        setAddingDrink(null);

        if(addingDrink === 'beer-cider') {
            beerCiderFormRef.current.handleAddDrinkPress()
        }else if(addingDrink === 'spirits-shots') {
            spiritsShotsFormRef.current.handleAddDrinkPress()
        }else if(addingDrink === 'wine-fizz') {
            wineFizzFormRef.current.handleAddDrinkPress()
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
                        addingDrink === 'beer-cider' && <BeerCiderForm ref={beerCiderFormRef} />
                    }
                    {
                        addingDrink === 'spirits-shots' && <SpiritsShotsForm ref={spiritsShotsFormRef}/>
                    }
                    {
                        addingDrink === 'wine-fizz' && <WineFizzForm ref={wineFizzFormRef}/>
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
                            <Drink setAddingDrink={setAddingDrink} />
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
                                <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400' }}>Add drink</Text>
                            </Pressable>
                        )
                    }
                </View>
            </HideWithKeyboard>
        </SafeAreaView>
    )
}

const mapStateToProps = (state: any) => ({
    drinks: state.drink,
})

export default connect(mapStateToProps, null) (BeerCider)

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