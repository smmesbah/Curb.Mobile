import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import AntDesign from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get('screen');

const CardDetails = () => {
    const [nameOnAccount, setNameOnAccount] = React.useState('');
    const [cardNumber, setCardNumber] = React.useState('');
    const [expiryDate, setExpiryDate] = React.useState('');
    const [cvv, setCvv] = React.useState('');

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Link href='./subscription-plan' style={{ justifyContent: 'center' }}>
                    <Text>
                        <AntDesign name="arrowleft" size={28} color="black" />
                    </Text>
                </Link >

                <View style={styles.curb}>
                    <Text style={styles.curbText}>curb</Text>
                    <View style={[styles.dot]} />
                </View>
            </View>

            <View style={styles.signupTextSection}>
                <Text style={{ fontSize: 42, fontWeight: '500' }}>Enter card details</Text>
            </View>

            <View style={{
                flexDirection: 'row',
                gap: 20,
                alignItems: 'center',
                marginLeft: width * 0.1,
                marginTop: height * 0.05,
            }}>
                <Text>We accept: </Text>
                <View style={{ flexDirection: 'row', gap: 15, }}>
                    <Image source={require('../../assets/visa.png')} style={{ width: 50, height: 40, resizeMode: 'contain' }} />
                    <Image source={require('../../assets/mastercard.png')} style={{ width: 50, height: 40, resizeMode: 'contain' }} />
                    <Image source={require('../../assets/american-express.png')} style={{ width: 50, height: 40, resizeMode: 'contain' }} />
                </View>
            </View>

            <View style={{ marginVertical: 20 }}>
                <View style={{ backgroundColor: '#f3f2ee', gap: 20, paddingHorizontal: width * 0.1, paddingVertical: 25 }}>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: '#7844ff', }} />
                        <Text style={{ fontSize: 18 }}>Name on account</Text>
                    </View>

                    <TextInput
                        style={
                            {
                                height: 50,
                                borderWidth: 1,
                                padding: 10,
                                borderRadius: 8,
                                backgroundColor: '#fff',

                            }
                        }
                        onChangeText={setNameOnAccount}
                        value={nameOnAccount}
                        placeholder='Enter Full Name'
                    />
                </View>

                <View style={{ backgroundColor: '#eae8e2', gap: 20, paddingHorizontal: width * 0.1, paddingVertical: 25 }}>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: '#7844ff', }} />
                        <Text style={{ fontSize: 18 }}>Card Number</Text>
                    </View>
                    <TextInput
                        style={
                            {
                                height: 50,
                                borderWidth: 1,
                                padding: 10,
                                borderRadius: 8,
                                backgroundColor: '#fff',

                            }
                        }
                        onChangeText={setCardNumber}
                        value={cardNumber}
                        placeholder='Enter long card number'
                        autoComplete='email'
                    />
                </View>

                <View style={{ flexDirection: 'row', backgroundColor: '#e1dfd7', gap: 15, paddingHorizontal: width * 0.1, paddingVertical: 25 }}>
                    <View style={{ flex: .5, gap: 15 }}>
                        <View style={{ flexDirection: 'row', gap: 20 }}>
                            <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: '#7844ff', }} />
                            <Text style={{ fontSize: 18 }}>Expires on</Text>
                        </View>
                        <TextInput
                            style={
                                {
                                    height: 50,
                                    borderWidth: 1,
                                    padding: 10,
                                    borderRadius: 8,
                                    backgroundColor: '#fff',

                                }
                            }
                            onChangeText={setExpiryDate}
                            value={expiryDate}
                            placeholder='MM/YY'
                        />
                    </View>
                    <View style={{ flex: .5, gap: 15 }}>
                        <View style={{ flexDirection: 'row', gap: 20 }}>
                            <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: '#7844ff', }} />
                            <Text style={{ fontSize: 18 }}>CVV</Text>
                        </View>
                        <TextInput
                            style={
                                {
                                    height: 50,
                                    borderWidth: 1,
                                    padding: 10,
                                    borderRadius: 8,
                                    backgroundColor: '#fff',

                                }
                            }
                            onChangeText={setCvv}
                            value={cvv}
                            placeholder='XXX'
                        />
                    </View>
                </View>
            </View>

            <View style={styles.button}>
                <Link href="/step-last" style={[styles.buttonText, { width: '100%' }]}>
                    Start your €4/month membership
                </Link>
            </View>
            
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
            }}>
                <Link href='./terms-condition' style={{fontSize: 14}}>Terms and Conditions</Link>
            </View>
        </SafeAreaView>
    )
}

export default CardDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingVertical: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    curb: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },
    curbText: {
        color: 'black',
        fontSize: 30,
        fontWeight: '500',
        letterSpacing: 5,
    },
    dot: {
        backgroundColor: '#000',
        width: 15,
        height: 15,
        borderRadius: 50,
        margin: 3,
    },
    signupTextSection: {
        marginTop: height * 0.05,
        marginLeft: width * 0.1,
        gap: 20,
    },
    button: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 25,
        marginHorizontal: 35,
        marginVertical: 15,
        padding: 12,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    },
})