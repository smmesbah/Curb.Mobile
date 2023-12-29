import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BackArrow = () => (
  <Svg
    width={40}
    height={40}
    fill="none"
  >
    <Path
      fill="#080D09"
      fillRule="evenodd"
      d="M18.04 11.293a1 1 0 0 1 0 1.414L11.745 19h18.92a1 1 0 0 1 0 2h-18.92l6.293 6.293a1 1 0 1 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414l8-8a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default BackArrow
