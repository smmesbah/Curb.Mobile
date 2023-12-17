import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Lock = () => (
  <Svg
    width={60}
    height={60}
    fill="none"
  >
    <Path
      fill="#33AE9C"
      fillRule="evenodd"
      d="M16.5 26.11V22c0-7.456 6.044-13.5 13.5-13.5S43.5 14.544 43.5 22v4.11c2.23.166 3.681.586 4.743 1.647C50 29.515 50 32.343 50 38s0 8.485-1.757 10.243C46.485 50 43.657 50 38 50H22c-5.657 0-8.485 0-10.243-1.757C10 46.485 10 43.657 10 38s0-8.485 1.757-10.243c1.062-1.06 2.514-1.481 4.743-1.648Zm3-4.11c0-5.799 4.701-10.5 10.5-10.5S40.5 16.201 40.5 22v4.007C39.734 26 38.903 26 38 26H22c-.903 0-1.734 0-2.5.007V22Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Lock
