import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BearIcon = () => (
  <Svg
    width={28}
    height={28}
    fill="none"
  >
    <Path
      stroke="#080D09"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.8}
      d="M14.876 11.084h4.375c.644 0 1.166.522 1.166 1.167v13.416H7.584V12.251c0-.645.522-1.167 1.167-1.167h1.458"
    />
    <Path
      fill="#FFD12F"
      stroke="#080D09"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.8}
      d="M9.917 4.667H8.458a3.208 3.208 0 1 0 0 6.417h2.625v6.125a1.458 1.458 0 0 0 2.917 0v-6.125h5.542a3.208 3.208 0 0 0 0-6.417h-2.625s-.584-2.333-3.5-2.333c-2.917 0-3.5 2.333-3.5 2.333Z"
    />
    <Path
      stroke="#080D09"
      strokeLinecap="round"
      strokeWidth={0.8}
      d="M20.416 12.25h2.917c.644 0 1.166.522 1.166 1.167v2.916a2.333 2.333 0 0 1-2.333 2.334h-1.75"
    />
  </Svg>
)
export default BearIcon
