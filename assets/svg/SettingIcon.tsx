import Svg, { Circle, Path } from "react-native-svg";

export const SettingsIcon = () => (
  <Svg width={28} height={28} viewBox="0 0 28 28">
    <Circle cx="14" cy="14" r="6" fill="#A6A38D" />
    <Path
      d="M14 2L16 5.2L20 4.5L21.5 8L25 10L23.5 13.5L25 17L21.5 19L20 23.5L16 22.5L14 26L12 22.5L8 23.5L6.5 20L3 18L4.5 14L3 10L6.5 8L8 4.5L12 5.5Z"
      fill="#B2B09C"
    />
    <Circle cx="14" cy="14" r="4" fill="white" />
  </Svg>
);