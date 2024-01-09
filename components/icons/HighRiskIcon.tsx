import * as React from "react"
import Svg, { Path } from "react-native-svg"
const HighRiskIcon = () => (
  <Svg
    width={85}
    height={85}
    fill="none"
  >
    <Path
      fill="#0D3F4A"
      d="M70.833 42.5c0-15.648-12.686-28.334-28.334-28.334S14.166 26.852 14.166 42.5s12.685 28.333 28.333 28.333c15.648 0 28.334-12.685 28.334-28.333Z"
    />
    <Path
      fill="#fff"
      d="M42.5 26.209c1.173 0 2.124.95 2.124 2.125v17a2.125 2.125 0 1 1-4.25 0v-17c0-1.174.952-2.125 2.125-2.125ZM42.5 56.667a2.833 2.833 0 1 0 0-5.667 2.833 2.833 0 0 0 0 5.667Z"
    />
  </Svg>
)
export default HighRiskIcon
