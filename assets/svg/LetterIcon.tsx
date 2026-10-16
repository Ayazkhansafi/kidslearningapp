import Svg, { Path, Text as SvgText } from "react-native-svg";

export const LetterIcon = () => (
  <Svg width={105} height={105} viewBox="0 0 100 100">
    {/* Thick white outline */}
    <SvgText
      x="50"
      y="65"
      fontSize="53"
      fontWeight="900"
      fontFamily="Arial"
      textAnchor="middle"
      fill="#FF5722"
      stroke="#FFFFFF"
      strokeWidth="9"
      strokeLinejoin="round"
      textLength="94"
      lengthAdjust="spacingAndGlyphs"
    >
      ABC
    </SvgText>

    {/* Bold, vibrant letters */}
    <SvgText
      x="50"
      y="65"
      fontSize="53"
      fontWeight="900"
      fontFamily="Arial"
      textAnchor="middle"
      fill="#FF5722"
      stroke="#C62828"
      strokeWidth="1.5"
      strokeLinejoin="round"
      textLength="94"
      lengthAdjust="spacingAndGlyphs"
    >
      ABC
    </SvgText>

    {/* Bright underline */}
    <Path
      d="M12 76 Q50 84 88 76"
      stroke="#43A047"
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
