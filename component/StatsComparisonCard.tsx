import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface StatsComparisonCardProps {
    headerText?: string;
    Status: string;
    SubheaderText: string;
}

const { width, height } = Dimensions.get('screen');

const StatsComparisonCard: React.FC<StatsComparisonCardProps> = ({ headerText, Status, SubheaderText }) => {
    let numericPart = Status.match(/\d+%?/)?.[0] || '';
    let suffixPart = Status.replace(/\d+%?/, '').replace(/%/, '') || '';
    return (
        <View
            style={{
                backgroundColor: '#eae8e2',
                width: width * 0.8,
                height: height * 0.2,
                paddingHorizontal: 50,
                paddingVertical: 20,
                gap: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
            }}
        >
            <Text
                style={{
                    fontSize: 17,
                    fontWeight: '400',
                }}
            >
                {headerText}
            </Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 60, fontWeight: '500' }}>{numericPart}</Text>
                <Text style={{ fontSize: 36, fontWeight: '500', textAlignVertical: 'top' }}>{suffixPart}</Text>
            </View>
            <Text
                style={{
                    fontSize: 17,
                    fontWeight: '400',
                    textAlign: 'center'
                }}
            >
                {SubheaderText}
            </Text>
        </View>
    )
}

export default StatsComparisonCard

const styles = StyleSheet.create({})