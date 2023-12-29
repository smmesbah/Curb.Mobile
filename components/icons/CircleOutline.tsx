import React from 'react';
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

export const CircleOutline = () => {
    return (
        <View>
            <Svg width="25" height="25" viewBox="0 0 20 20" fill="none">
                <Circle opacity="0.8" cx="10" cy="10" r="9" stroke="#B0B0B4" stroke-width="2"/>
            </Svg>
        </View>
    )
}

// xmlns="http://www.w3.org/2000/svg"