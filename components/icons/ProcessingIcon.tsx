import * as React from "react"
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg"
const ProcessingIcon= () => (
  <Svg
    width={124}
    height={124}
    fill="none"
  >
    <Circle
      cx={62}
      cy={62}
      r={56.5}
      fill="transparent"
      stroke="url(#a)"
      strokeWidth={11}
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={117.8}
        x2={99.2}
        y1={74.4}
        y2={12.4}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#33AE9C" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default ProcessingIcon