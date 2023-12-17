import * as React from "react"
import Svg, { Path } from "react-native-svg"
const QuestionIcon = () => (
  <Svg
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 16 16"
  >
    <Path
      stroke="#7844FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 14.667a6.666 6.666 0 1 0 .001-13.333 6.666 6.666 0 0 0 0 13.333Z"
    />
    <Path
      stroke="#7844FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 6c0-2.333 3.667-2.333 3.667 0C9.667 7.667 8 7.333 8 9.333m0 2.674.007-.008"
    />
  </Svg>
)
export default QuestionIcon
