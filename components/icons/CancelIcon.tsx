import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CancelIcon = () => (
  <Svg
    width={22}
    height={22}
    fill="none"
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M22 11c0 6.075-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0s11 4.925 11 11ZM7.667 7.667a.825.825 0 0 1 1.166 0L11 9.833l2.167-2.166a.825.825 0 1 1 1.166 1.166L12.167 11l2.166 2.167a.825.825 0 1 1-1.166 1.166L11 12.167l-2.167 2.166a.825.825 0 1 1-1.166-1.166L9.833 11 7.667 8.833a.825.825 0 0 1 0-1.166Z"
      clipRule="evenodd"
      opacity={0.3}
    />
  </Svg>
)
export default CancelIcon
