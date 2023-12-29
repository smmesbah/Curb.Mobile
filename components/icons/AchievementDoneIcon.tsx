import * as React from "react"
import Svg, { G, Circle, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */


const AchievementDoneIcon = ({color}:{color:string}) => (
  <Svg
    width={44}
    height={44}
    fill="none"
  >
    <G filter="url(#a)">
      <Circle cx={22} cy={18} r={16} fill={color} />
    </G>
    <Path
      fill="#fff"
      d="M21.923 4.462a13.462 13.462 0 1 0 0 26.923 13.462 13.462 0 0 0 0-26.923ZM20 23.299l-4.808-4.808 1.529-1.53L20 20.242l7.125-7.125 1.535 1.525L20 23.299Z"
    />
    <Defs></Defs>
  </Svg>
)
export default AchievementDoneIcon
