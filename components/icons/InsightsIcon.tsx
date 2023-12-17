import * as React from "react"
import Svg, { Path } from "react-native-svg"
const DailyTaskIcon = ({focused}) => (
    <Svg
    width={40}
    height={40}
    fill="none"
  >
    <Path
      fill={focused?"#12303B": "#B0B0B4"}
      fillRule="evenodd"
      d="M26.256 15.077c.68 0 1.231.551 1.231 1.23v12.309a1.23 1.23 0 0 1-2.461 0V16.308c0-.68.55-1.23 1.23-1.23Zm-12.308 3.077c.68 0 1.231.551 1.231 1.23v9.232a1.23 1.23 0 0 1-2.461 0v-9.231c0-.68.55-1.23 1.23-1.23Zm6.154 3.077c.68 0 1.231.551 1.231 1.23v6.155a1.23 1.23 0 0 1-2.461 0v-6.154c0-.68.55-1.231 1.23-1.231Z"
      clipRule="evenodd"
    />
    <Path
      fill={focused?"#12303B": "#B0B0B4"}
      fillRule="evenodd"
      d="M9.573 6.783c-.901 0-1.778.917-1.778 2.26v21.913c0 1.344.877 2.261 1.778 2.261h21.06c.9 0 1.777-.917 1.777-2.26V9.042c0-1.343-.877-2.26-1.778-2.26H9.572Zm-4.24 2.26C5.333 6.353 7.15 4 9.573 4h21.06c2.422 0 4.239 2.353 4.239 5.043v21.913c0 2.69-1.817 5.044-4.24 5.044H9.572c-2.422 0-4.239-2.353-4.239-5.044V9.043Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default DailyTaskIcon
