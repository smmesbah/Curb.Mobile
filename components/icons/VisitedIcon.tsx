import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
interface Props {
    color: string
}
const VisitedIcon: React.FC<Props> = ({color}) => (
  <Svg
    width={20}
    height={20}
    fill="none"
  >
    <Circle cx={10} cy={10} r={10} fill={color} />
    <Path
      fill="#fff"
      d="M9.953 1.54a8.413 8.413 0 1 0 0 16.826 8.413 8.413 0 0 0 0-16.827ZM8.75 13.311l-3.005-3.005.955-.955 2.05 2.049 4.453-4.453.959.953-5.412 5.41Z"
    />
  </Svg>
)
export default VisitedIcon
