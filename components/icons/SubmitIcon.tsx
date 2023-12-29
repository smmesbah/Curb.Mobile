import React from 'react';
import { View } from 'react-native';
import Svg, { Path, G, Defs, ClipPath } from 'react-native-svg';

export const SubmitIcon = () => {
    return (
        <View>
            <Svg
                width={24}
                height={24}
                fill="none"
            >
                <Path
                    fill="#fff"
                    d="M10.938 0a10.937 10.937 0 1 0 0 21.875 10.937 10.937 0 0 0 0-21.875ZM9.374 15.305l-3.906-3.907 1.242-1.242 2.664 2.664 5.79-5.789 1.246 1.24-7.036 7.034Z"
                    opacity={0.6}
                />
            </Svg>
        </View>
    )
}

// xmlns="http://www.w3.org/2000/svg"