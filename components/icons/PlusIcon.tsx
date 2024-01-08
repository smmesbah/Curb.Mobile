import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PlusIcon = () => (
  <Svg
    width={30}
    height={30}
  >
    <Path
      stroke="#080D09"
      strokeLinecap="round"
      strokeWidth={2}
      d="M23 14.5h-7.5m0 0H8m7.5 0V7m0 7.5V22"
    />
  </Svg>
)
export default PlusIcon
