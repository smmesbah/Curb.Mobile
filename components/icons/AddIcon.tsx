import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export const AddIcon = () => {
    return (
        <View>
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <Path d="M10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0ZM15 11H11V15H9V11H5V9H9V5H11V9H15V11Z" fill="#B0B0B4"/>
            </Svg>
        </View>
    )
}

// xmlns="http://www.w3.org/2000/svg"