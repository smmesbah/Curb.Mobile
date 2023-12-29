import * as React from "react"
import Svg, { Rect, G, Circle, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const ToggleIcon = () => (
  <Svg
    width={42}
    height={30}
    fill="none"
  >
    <Rect width={40} height={24} fill="#33AE9C" rx={12} />
    <G filter="url(#a)">
      <Circle cx={28} cy={12} r={10} fill="#fff" />
    </G>
    <Defs></Defs>
  </Svg>
)
export default ToggleIcon
