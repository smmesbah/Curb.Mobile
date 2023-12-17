import { Dimensions, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { router } from 'expo-router'
import StatsComparisonCard from 'component/StatsComparisonCard';

const { width, height } = Dimensions.get('screen');

const Comparison = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Pressable
                onPress={() => router.back()}
                style={{ justifyContent: 'center', marginTop: 25, marginLeft: 25 }}
            >
                <Text>
                    <AntDesign name="arrowleft" size={28} color="white" />
                </Text>
            </Pressable>
            <ScrollView
                style={{
                    paddingBottom: 30,
                }}
            >
                <View
                    style={{
                        marginRight: 20,
                    }}
                >
                    <View style={{ gap: 30 }}>
                        <Text style={styles.headerText}>How do you compare?</Text>
                        <View>
                            <Text style={styles.subheaderText}>This is how you compare</Text>
                            <Text style={styles.subheaderText}>with other people your age.</Text>
                        </View>
                    </View>
                </View>

                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 30,
                        gap: 20,
                    }}
                >
                    <StatsComparisonCard
                        headerText="You're in the top"
                        Status="10th"
                        SubheaderText="Percentile of drink"
                    />
                    <StatsComparisonCard
                        // headerText="You're in the top"
                        Status="78%"
                        SubheaderText="of women your age drink less alcohol than you."
                    />
                    <StatsComparisonCard
                        // headerText="You're in the top"
                        Status="8915"
                        SubheaderText="of women your age drink less alcohol than you."
                    />
                </View>

                <View
                    style={{
                        marginTop: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 20,
                    }}
                >
                    <Text style={{ fontSize: 24, color: '#fff', fontWeight: '500' }}>How much you spend</Text>
                    <View
                        style={{
                            width: width * 0.8,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 20,
                            gap: 20,
                            paddingVertical: 20,
                            paddingHorizontal: 40,
                        }}
                    >
                        <Text style={{ fontSize: 17, textAlign: 'center' }}>Based on your typical week, this is how much you spend on alcohol</Text>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 10,
                            }}
                        >
                            <Text style={{ fontSize: 60, color: '#71b5b8', fontWeight: '500' }}>€27</Text>
                            <Text style={{ fontSize: 17 }}>Per week</Text>
                        </View>
                        <View
                            style={{
                                width: '100%',
                                height: 1,
                                backgroundColor: '#707070',
                            }}
                        />
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 10,
                            }}
                        >
                            <Text style={{ fontSize: 60, color: '#71b5b8', fontWeight: '500' }}>€108</Text>
                            <Text style={{ fontSize: 17 }}>Per month</Text>
                        </View>

                        <View
                            style={{
                                width: '100%',
                                height: 1,
                                backgroundColor: '#707070',
                            }}
                        />

                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: 10,
                            }}
                        >
                            <Text style={{ fontSize: 60, color: '#71b5b8', fontWeight: '500' }}>€1296</Text>
                            <Text style={{ fontSize: 17 }}>Per year</Text>
                        </View>
                    </View>
                </View>

                <Text style={{fontSize: 17, textAlign: 'center', color: 'white', marginTop: 20}}>Sources: Curb</Text>
            </ScrollView>
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
                <Pressable
                    // onPress={handleAddDrinkPress}
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
                    {/* <AntDesign name="plus" size={15} color="#fff" /> */}
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400' }}>Next</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Comparison

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#11303c',
        paddingTop: 20,
    },
    headerText: {
        color: 'white',
        fontSize: 40,
        fontWeight: '500',
        textAlign: 'right',
        lineHeight: 50,
        marginLeft: width * 0.45,
    },
    subheaderText: {
        color: 'white',
        fontSize: 18,
        lineHeight: 25,
        marginLeft: width * 0.08,
        marginRight: width * 0.25,
    }
})