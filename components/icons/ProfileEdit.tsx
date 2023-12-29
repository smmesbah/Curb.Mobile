import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ProfileEdit = ({color}) => (
  <Svg
    width={20}
    height={20}
    fill="none"
  >
    <Path
      fill={color}
      fillRule="evenodd"
      d="M11.836 3.746a3.122 3.122 0 1 1 4.415 4.415l-6.323 6.324c-.362.36-.574.574-.811.758-.279.217-.58.404-.9.556-.27.13-.556.224-1.04.386l-2.222.74-.534.178a1.207 1.207 0 0 1-1.527-1.526l.918-2.756c.162-.485.257-.77.386-1.04a4.87 4.87 0 0 1 .556-.9c.185-.237.398-.45.759-.811l6.323-6.324ZM4.932 15.88l1.895-.632c.527-.175.751-.251.96-.35.254-.122.493-.27.715-.443.182-.142.35-.308.743-.701l5.046-5.047a4.906 4.906 0 0 1-1.837-1.163 4.907 4.907 0 0 1-1.163-1.837l-5.046 5.046c-.393.393-.56.561-.702.743a3.87 3.87 0 0 0-.442.716c-.1.208-.175.432-.35.96l-.632 1.894.813.814Zm7.17-10.984c.023.116.062.275.126.46.145.418.418.966.934 1.48a3.904 3.904 0 0 0 1.48.934c.186.065.344.103.46.126l.442-.441a2.122 2.122 0 0 0-3-3l-.442.44Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default ProfileEdit
