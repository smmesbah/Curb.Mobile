import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface TopSectionProps {
    HeaderText: string,
    SubHeaderText?: string
}

const { width, height } = Dimensions.get('screen');

const TopSection: React.FC<TopSectionProps> = ({ HeaderText, SubHeaderText }) => {
    return (
        <View style={{gap: 30,}}>
            <Text style={styles.headerText}>{HeaderText}</Text>
            <Text style={styles.subheaderText}>{SubHeaderText}</Text>
        </View>
    )
}

export default TopSection

const styles = StyleSheet.create({
    headerText: {
        fontSize: 40,
        fontWeight: '500',
        lineHeight: 50,
        marginLeft: width * 0.45,
        fontFamily: "Regular"
    },
    subheaderText: {
        fontSize: 18,
        lineHeight: 25,
        marginLeft: width * 0.08,
        marginRight: width * 0.3,
        marginBottom: width * 0.06,
        fontFamily: "Regular"
    }
})