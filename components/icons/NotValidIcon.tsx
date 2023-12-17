import * as React from "react"
import Svg, { Path } from "react-native-svg"
const NotValidIcon = () => (
  <Svg
    width={30}
    height={30}
    fill="none"
  >
    <Path
      fill="#E64528"
      d="M13.03 11.97a.75.75 0 0 0-1.06 1.06L13.94 15l-1.97 1.97a.75.75 0 1 0 1.06 1.06L15 16.06l1.97 1.97a.75.75 0 0 0 1.06-1.06L16.06 15l1.97-1.97a.75.75 0 1 0-1.06-1.06L15 13.94l-1.97-1.97Z"
    />
    <Path
      fill="#E64528"
      fillRule="evenodd"
      d="M15 4.25C9.063 4.25 4.25 9.063 4.25 15S9.063 25.75 15 25.75 25.75 20.937 25.75 15 20.937 4.25 15 4.25ZM5.75 15a9.25 9.25 0 1 1 18.5 0 9.25 9.25 0 0 1-18.5 0Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default NotValidIcon
