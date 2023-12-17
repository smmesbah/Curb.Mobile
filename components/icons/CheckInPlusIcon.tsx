import React from 'react';
import { View } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

export const CheckInPlusIcon = () => {
    return (
        <View>
            <Svg
                width={40}
                height={40}
                fill="none"
            >
                <Path
                fill="#fff"
                d="M32.118 22.429h-9.643v9.642a1.928 1.928 0 1 1-3.857 0V22.43H8.975a1.929 1.929 0 0 1 0-3.858h9.643V8.93a1.929 1.929 0 0 1 3.857 0v9.642h9.643a1.929 1.929 0 0 1 0 3.858Z"
                />
            </Svg>
        </View>
    )
}

// xmlns="http://www.w3.org/2000/svg"