import Svg, { Circle, Path, Rect } from "react-native-svg";

export const LockIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24">
    {/* Lock Body */}
    <Rect x="5" y="10" width="14" height="11" rx="3" fill="#B6B39E" />

    {/* Lock Shackle */}
    <Path
      d="M8 10V7C8 3.5 16 3.5 16 7V10"
      stroke="#B6B39E"
      strokeWidth={3}
      fill="none"
      strokeLinecap="round"
    />

    {/* Keyhole */}
    <Circle cx="12" cy="15.5" r="1.5" fill="#FFFFFF" />
  </Svg>
);
