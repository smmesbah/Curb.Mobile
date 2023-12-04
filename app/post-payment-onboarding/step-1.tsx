import { Dimensions, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import AntDesign from 'react-native-vector-icons/AntDesign'
import TopSection from 'component/PostPaymentComponents/TopSection'
import { Slider } from '@miblanchard/react-native-slider'
import RadioButton from 'component/ui/RadioButton'


const { width, height } = Dimensions.get('screen');

const CustomMarker = () => {
    return (
        <View style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: '#e64627', }} />
    )
}

const PostPaymentStep1 = () => {
    const [gender, setGender] = React.useState<string | null>(null);
    const [postcode, setPostcode] = React.useState<string | undefined>('');
    const data = [
        {
            // id: 3,
            value: 'Male'
        },
        {
            // id: 2,
            value: 'Female'
        },
        {
            // id: 3,
            value: 'Prefer not to say'
        }
    ]

    return (
        <SafeAreaView style={styles.container}>
            <Pressable
                onPress={() => router.back()}
                style={{ justifyContent: 'center', paddingVertical: 15, paddingHorizontal: 15 }}
            >
                <Text>
                    <AntDesign name="arrowleft" size={28} color="black" />
                </Text>
            </Pressable >
            <ScrollView style={{ marginTop: 15 }} automaticallyAdjustKeyboardInsets={true}>
                <TopSection
                    HeaderText='Let’s Get Acquainted'
                    SubHeaderText='Tell us a bit about yourself to tailor your Curb experience.'
                />

                <View
                    style={{
                        backgroundColor: '#f3f2ee',
                        gap: 20,
                        paddingHorizontal: width * 0.08,
                        paddingVertical: 20,
                    }}
                >
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: '#e64627', }} />
                        <Text style={{ fontSize: 18 }}>Your age range</Text>
                    </View>
                    <View>

                        <Slider
                            minimumValue={0}
                            maximumValue={2}
                            step={1}
                            minimumTrackStyle={{
                                backgroundColor: '#e64627',
                                height: 8,
                                borderRadius: 10,
                            }}
                            maximumTrackStyle={{
                                backgroundColor: '#efbdb1',
                                height: 8,
                                borderRadius: 10,
                            }}
                            thumbStyle={{
                                backgroundColor: '#fff',
                                height: 20,
                                width: 20,
                                borderWidth: 4,
                                borderColor: '#e64627',
                                borderRadius: 50,
                            }}
                        />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 20, }}>18-29</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>30-49</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Over 50</Text>
                        </View>
                    </View>
                </View>

                <View
                    style={{
                        backgroundColor: '#eae8e2',
                        gap: 20,
                        paddingHorizontal: width * 0.08,
                        paddingVertical: 30,
                    }}
                >
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: '#7844ff', }} />
                        <Text style={{ fontSize: 18 }}>Your gender</Text>
                    </View>
                    <RadioButton
                        data={data}
                        onSelect={(value) => setGender(value)}
                    />
                </View>

                <View
                    style={{
                        backgroundColor: '#e1dfd7',
                        gap: 20,
                        paddingHorizontal: width * 0.08,
                        paddingVertical: 20,
                    }}
                >
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: '#32ae9d', }} />
                        <Text style={{ fontSize: 18 }}>First half of your postcode</Text>
                    </View>

                    <TextInput
                        style={
                            {
                                height: 50,
                                borderWidth: 1,
                                borderColor: '#32ae9d',
                                padding: 10,
                                paddingLeft: 20,
                                borderRadius: 8,
                                backgroundColor: '#fff',

                            }
                        }
                        onChangeText={setPostcode}
                        value={postcode}
                        placeholder='e.g. NW1'
                    />
                </View>

                <View style={styles.button}>
                    <Link href="/step-3" style={[styles.buttonText, { width: '100%' }]}>
                        Next
                    </Link>
                </View>

                <Link href='./' style={{textAlign: 'center', fontSize: 14}}>Why do you need this information?</Link>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PostPaymentStep1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingVertical: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 25,
        marginHorizontal: 30,
        marginVertical: 15,
        padding: 10,
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
    },
})