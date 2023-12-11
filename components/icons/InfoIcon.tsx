import * as React from "react"
import Svg, { Path } from "react-native-svg"
const InfoIcon = () => (
  <Svg
    width={30}
    height={30}
    fill="none"
  >
    <Path
      fill="#9D9E9C"
      d="M15 20.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75ZM15 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
    />
    <Path
      fill="#9D9E9C"
      fillRule="evenodd"
      d="M4.25 15C4.25 9.063 9.063 4.25 15 4.25S25.75 9.063 25.75 15 20.937 25.75 15 25.75 4.25 20.937 4.25 15ZM15 5.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default InfoIcon
