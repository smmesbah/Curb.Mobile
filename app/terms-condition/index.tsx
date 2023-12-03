import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const { width, height } = Dimensions.get('screen');

const TermsNdCondition = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Link href='./signup' style={{ justifyContent: 'center' }}>
                    <Text style={{ fontSize: 20 }}>Back</Text>
                </Link >
                <Text style={{ fontSize: 30, textAlign: 'center' }}>Terms & Condition</Text>
            </View>

            <ScrollView
                style={{ marginHorizontal: width * 0.1, marginTop: height * 0.04, marginBottom: height * 0.02 }}
                showsVerticalScrollIndicator={false}
            >
                <Text style={{ fontSize: 18, lineHeight: 30 }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TermsNdCondition

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingVertical: 15,
    },
    header: {
        padding: 15,
    },
})