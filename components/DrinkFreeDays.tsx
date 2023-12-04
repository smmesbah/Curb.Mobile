import React from 'react'
import {View,Text} from 'react-native';
import { COLORS } from 'constants/Constants';
import Slider from 'components/ui/Slider';

const DrinkFreeDays = () => {
  return (
    <View>
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-end',
                gap: 10
            }}
        >
            <Text
                style={{
                    fontSize: 60,
                    fontWeight: '700',
                    lineHeight: 78.12,
                    color: COLORS.primary
                }}
            >
                14
            </Text>
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: '500',
                    lineHeight: 31.25,
                    paddingBottom: 10
                }}
            >
                Drink -Free Days
            </Text>
        </View>
        <View style={{
            height: 15,
        }}>
        <Slider/>
        </View>
        
    </View>
  )
}

export default DrinkFreeDays