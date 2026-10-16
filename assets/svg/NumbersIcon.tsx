import Svg, { Path, Text as SvgText } from "react-native-svg";

export const NumbersIcon = () => (
  <Svg width={105} height={105} viewBox="0 0 100 100">
    {/* Thick white outline */}
    <SvgText
      x="50"
      y="65"
      fontSize="52"
      fontWeight="900"
      fontFamily="Arial"
      textAnchor="middle"
      fill="#43A047"
      stroke="#FFFFFF"
      strokeWidth="9"
      strokeLinejoin="round"
      textLength="88"
      lengthAdjust="spacingAndGlyphs"
    >
      123
    </SvgText>

    {/* Bold, vibrant numbers */}
    <SvgText
      x="50"
      y="65"
      fontSize="52"
      fontWeight="900"
      fontFamily="Arial"
      textAnchor="middle"
      fill="#43A047"
      stroke="#1B5E20"
      strokeWidth="1.5"
      strokeLinejoin="round"
      textLength="88"
      lengthAdjust="spacingAndGlyphs"
    >
      123
    </SvgText>

    {/* Bright underline (matching the vibe) */}
    <Path
      d="M14 76 Q50 84 86 76"
      stroke="#FF5722"
      strokeWidth="5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Small playful sparkles */}
    <Path
      d="M10 8 L13 15 L20 18 L13 21 L10 28 L7 21 L0 18 L7 15 Z"
      fill="#FFC107"
    />
    <Path
      d="M88 7 L91 13 L97 16 L91 19 L88 25 L85 19 L79 16 L85 13 Z"
      fill="#29B6F6"
    />
  </Svg>
);
