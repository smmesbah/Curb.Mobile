import * as React from "react"
import Svg, { G, Circle, Mask, Ellipse, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Level1Tree = () => (
  <Svg
    width={99}
    height={99}
    fill="none"
  >
    <G filter="url(#a)">
      <Circle cx={49.148} cy={45.148} r={42.648} fill="#fff" stroke="#0D3F4A" />
      <Mask
        id="b"
        width={87}
        height={86}
        x={6}
        y={3}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <Ellipse
          cx={49.148}
          cy={45.802}
          fill="#D9D9D9"
          rx={43.148}
          ry={42.494}
        />
      </Mask>
      <G mask="url(#b)">
        <Path
          fill="#66A400"
          d="M50.49 44.95s-2.08 3.269-3.278 6.445c-1.199 3.176-.645 8.586 4.43 11.783 0 0 2.882-3.108 3.032-7.455.136-4.352-4.184-10.773-4.184-10.773Z"
        />
        <Path
          fill="#537500"
          d="M50.631 49.373c.991 4.68 1.59 9.451 1.523 14.23.1 2.967-.976 5.855-.75 8.816 1.09 6.653.496 6.588-4.168 11.086-1.903 1.865-.383 4.134.905 5.894 3.38 4.413 2.81 9.435-1.499 12.912 4.758-4.794 3.79-9.047-.165-13.984-1.284-1.573-1.384-3.888.055-5.388 6.396-6.075 3.933-4.481 3.96-12.316 1.387-7 1.11-14.17.14-21.25Z"
        />
      </G>
    </G>
    <Defs></Defs>
  </Svg>
)
export default Level1Tree
