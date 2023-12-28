import * as React from "react"
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const DailyStreakIcon = () => (
  <Svg
    width={67}
    height={64}
    fill="none"
  >
    <G filter="url(#a)">
      <Path
        fill="url(#b)"
        d="m33.5 2 6.399 19.693h20.706L43.853 33.864l6.399 19.693L33.5 41.386 16.748 53.557l6.399-19.693L6.395 21.693H27.1L33.5 2Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={33.5}
        x2={33.5}
        y1={27.006}
        y2={59}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#33AE9C" />
        <Stop offset={1} stopColor="#0D3F4A" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default DailyStreakIcon
