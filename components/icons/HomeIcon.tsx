import React from 'react';
import { View } from 'react-native';
import Svg, { Path, G, Rect, Defs, ClipPath, SvgUri } from 'react-native-svg';

export const HomeIcon = ({focused}) => {
    return (
        <View>
            <Svg
    width={40}
    height={40}
    fill="none"
  >
    <Path fill="#D7DBE7" d="M0 0h40v40H0z" />
    <G clipPath="url(#a)">
      <Path fill="#ECEDE9" d="M-22-872h390V60H-22z" />
      <G filter="url(#b)">
        <Path
          fill="#fff"
          d="M-23-21h151.401a16.68 16.68 0 0 1 14.422 8.3c13.105 22.546 45.844 22.342 59.234-.038C205.098-17.82 210.626-21 216.55-21H369v81H-23v-81Z"
        />
      </G>
      <Path
        fill={focused?"#12303B": "#B0B0B4"}
        fillRule="evenodd"
        d="M5.753 14.443C5 15.818 5 17.477 5 20.796V23c0 5.656 0 8.485 1.699 10.242C8.398 35 11.132 35 16.6 35h5.8c5.468 0 8.202 0 9.901-1.757C34 31.486 34 28.657 34 23v-2.205c0-3.319 0-4.978-.753-6.353s-2.128-2.229-4.879-3.936l-2.9-1.8C22.56 6.902 21.107 6 19.5 6c-1.607 0-3.06.902-5.968 2.707l-2.9 1.8c-2.75 1.707-4.126 2.56-4.88 3.936Zm9.397 13.67a1.088 1.088 0 0 0 0 2.175h8.7a1.088 1.088 0 0 0 0-2.175h-8.7Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M-22-872h390V60H-22z" />
      </ClipPath>
    </Defs>
  </Svg>

        </View>
    )
}

// xmlns="http://www.w3.org/2000/svg"