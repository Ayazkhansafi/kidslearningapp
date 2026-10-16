import Svg, { Path, Rect, Text as SvgText } from "react-native-svg";

export const MathIcon = () => (
  <Svg width={105} height={105} viewBox="0 0 100 100">
    {/* Background / Container elements for symbols to pop */}

    {/* Plus Symbol Tile (Top-Left) */}
    <Rect
      x="14"
      y="16"
      width="34"
      height="34"
      rx="10"
      fill="#3F51B5"
      stroke="#FFFFFF"
      strokeWidth="5"
      strokeLinejoin="round"
    />
    <Rect
      x="14"
      y="16"
      width="34"
      height="34"
      rx="10"
      fill="#3F51B5"
      stroke="#1A237E"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <SvgText
      x="31"
      y="41"
      fontSize="26"
      fontWeight="900"
      fontFamily="Arial"
      textAnchor="middle"
      fill="#FFFFFF"
    >
      +
    </SvgText>

    {/* Minus Symbol Tile (Top-Right) */}
    <Rect
      x="56"
      y="16"
      width="34"
      height="34"
      rx="10"
      fill="#E91E63"
      stroke="#FFFFFF"
      strokeWidth="5"
      strokeLinejoin="round"
    />
    <Rect
      x="56"
      y="16"
      width="34"
      height="34"
      rx="10"
      fill="#E91E63"
      stroke="#880E4F"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <SvgText
      x="73"
      y="39"
      fontSize="26"
      fontWeight="900"
      fontFamily="Arial"
      textAnchor="middle"
      fill="#FFFFFF"
    >
      −
    </SvgText>

    {/* Multiply Symbol Tile (Bottom-Left) */}
    <Rect
      x="14"
      y="58"
      width="34"
      height="34"
      rx="10"
      fill="#009688"
      stroke="#FFFFFF"
      strokeWidth="5"
      strokeLinejoin="round"
    />
    <Rect
      x="14"
      y="58"
      width="34"
      height="34"
      rx="10"
      fill="#009688"
      stroke="#004D40"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <SvgText
      x="31"
      y="84"
      fontSize="26"
      fontWeight="900"
      fontFamily="Arial"
      textAnchor="middle"
      fill="#FFFFFF"
    >
      ×
    </SvgText>

    {/* Divide Symbol Tile (Bottom-Right) */}
    <Rect
      x="56"
      y="58"
      width="34"
      height="34"
      rx="10"
      fill="#FF9800"
      stroke="#FFFFFF"
      strokeWidth="5"
      strokeLinejoin="round"
    />
    <Rect
      x="56"
      y="58"
      width="34"
      height="34"
      rx="10"
      fill="#FF9800"
      stroke="#E65100"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <SvgText
      x="73"
      y="83"
      fontSize="26"
      fontWeight="900"
      fontFamily="Arial"
      textAnchor="middle"
      fill="#FFFFFF"
    >
      ÷
    </SvgText>

    {/* Small playful sparkles */}
    <Path
      d="M4 6 L6 10 L10 12 L6 14 L4 18 L2 14 L-2 12 L2 10 Z"
      fill="#FFC107"
      transform="translate(4, 2)"
    />
    <Path
      d="M96 88 L98 92 L102 94 L98 96 L96 100 L94 96 L90 94 L94 92 Z"
      fill="#29B6F6"
    />
  </Svg>
);
