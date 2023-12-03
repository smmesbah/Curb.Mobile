import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SubscriptionPlanCard = () => {

    const data = [
        "Access to latest articles and exercises.",
        "Support tools to help you change your relationship with alcohol."
    ]

    return (
        <View
            style={{
                backgroundColor: 'white',
                alignItems: 'center',
                shadowColor: '#52006A',
                elevation: 20,
                borderRadius: 15,
                overflow: 'hidden',
                gap: 20,
            }}
        >
            <Text
                style={{
                    fontSize: 18,
                    paddingVertical: 10,
                    backgroundColor: '#5c4aff',
                    width: '100%',
                    textAlign: 'center',
                    color: 'white',
                }}
            >Save 50%</Text>
            <Text
                style={{
                    fontSize: 22,
                    fontWeight: '500',
                }}
            >Access to Curb</Text>
            <View
                style={{
                    alignItems: 'center',
                    gap: 15,
                }}
            >
                <Text style={{ fontSize: 28, fontWeight: '500', textDecorationLine: 'line-through', }}>€8</Text>
                <View
                    style={{
                        alignItems: 'center',
                        gap: 5,
                    }}
                >
                    <Text style={{ fontSize: 42, fontWeight: '500' }}>€4</Text>
                    <Text style={{ fontSize: 18 }}>Per month</Text>
                </View>
            </View>

            <FlatList
                style={{ flexGrow: 0, width: '100%', paddingHorizontal: 25, }}
                contentContainerStyle={{ gap: 5 }}
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{
                                flexDirection: 'row',
                                // alignItems: 'center',
                                // justifyContent: 'center'
                            }}
                        >
                            <View style={{
                                width: 10, 
                                height: 10, 
                                borderRadius: 5, 
                                backgroundColor: 'black',
                                marginRight: 8,
                                marginTop: 6,
                            }} />
                            <Text style={{ fontSize: 18, }}>{item}</Text>
                        </View>
                    )
                }}
            />


            <View
                style={{
                    paddingHorizontal: 25,
                    gap: 5,
                    alignSelf: 'flex-start',
                    marginBottom: 30,
                }}
            >
            <Text style={{fontSize: 18}}>No minimum contract.</Text>
            <Link href='./terms-condition'
                style={{
                    color: 'blue',
                    fontSize: 18,
                }}
            >Terms and Conditions apply.</Link>
            </View>
        </View>
    )
}

export default SubscriptionPlanCard