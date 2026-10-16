import Svg, { Path, Polygon, Rect } from "react-native-svg";

export const ShapesIcon = () => (
  <Svg width={105} height={105} viewBox="0 0 100 100">
    {/* Square (top-left) */}
    <Rect
      x="14"
      y="18"
      width="32"
      height="32"
      rx="6"
      fill="#E95462"
      stroke="#FFFFFF"
      strokeWidth="6"
      strokeLinejoin="round"
    />
    <Rect
      x="14"
      y="18"
      width="32"
      height="32"
      rx="6"
      fill="#E95462"
      stroke="#9C27B0"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />

    {/* Rectangle (top-right) */}
    <Rect
      x="54"
      y="22"
      width="38"
      height="24"
      rx="6"
      fill="#42C5DF"
      stroke="#FFFFFF"
      strokeWidth="6"
      strokeLinejoin="round"
    />
    <Rect
      x="54"
      y="22"
      width="38"
      height="24"
      rx="6"
      fill="#42C5DF"
      stroke="#01579B"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />

    {/* Triangle (centered at the bottom) */}
    <Polygon
      points="50,56 78,86 22,86"
      fill="#F8C644"
      stroke="#FFFFFF"
      strokeWidth="6"
      strokeLinejoin="round"
    />
    <Polygon
      points="50,56 78,86 22,86"
      fill="#F8C644"
      stroke="#E65100"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />

    {/* Small playful sparkles */}
    <Path
      d="M86 8 L89 13 L95 16 L89 19 L86 24 L83 19 L77 16 L83 13 Z"
      fill="#FFC107"
    />
    <Path
      d="M12 68 L15 73 L21 76 L15 79 L12 84 L9 79 L3 76 L9 73 Z"
      fill="#29B6F6"
    />
  </Svg>
);
