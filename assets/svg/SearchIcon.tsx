import Svg, { Circle, Path } from "react-native-svg";

export const SearchIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 28 28">
    {/* Bold outer magnifying glass */}
    <Circle
      cx={11.5}
      cy={11.5}
      r={9}
      fill="#A6A38D"
    />

    {/* Inner lens */}
    <Circle
      cx={11.5}
      cy={11.5}
      r={5.5}
      fill="#FFFFFF"
    />

    {/* Thick, rounded handle */}
    <Path
      d="M18 18L25 25"
      stroke="#A6A38D"
      strokeWidth={5}
      strokeLinecap="round"
    />
  </Svg>
);