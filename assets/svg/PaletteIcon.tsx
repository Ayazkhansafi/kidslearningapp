import Svg, { Circle, Path } from "react-native-svg";

export const PaletteIcon = () => (
  <Svg width={105} height={105} viewBox="0 0 100 100">
    {/* Thick white outline for the palette base */}
    <Path
      d="M50 12C25 12 10 30 10 52C10 72 25 86 43 86C50 86 55 82 55 76C55 71 51 68 56 64C62 60 82 65 88 53C96 36 77 12 50 12Z"
      fill="#FFF0C7"
      stroke="#FFFFFF"
      strokeWidth="8"
      strokeLinejoin="round"
    />

    {/* Vibrant outer border for the palette */}
    <Path
      d="M50 12C25 12 10 30 10 52C10 72 25 86 43 86C50 86 55 82 55 76C55 71 51 68 56 64C62 60 82 65 88 53C96 36 77 12 50 12Z"
      fill="none"
      stroke="#E65100"
      strokeWidth="2"
      strokeLinejoin="round"
    />

    {/* Paint blobs with crisp white borders to make them pop */}
    <Circle
      cx="32"
      cy="39"
      r="7"
      fill="#F04444"
      stroke="#FFFFFF"
      strokeWidth="2"
    />
    <Circle
      cx="53"
      cy="29"
      r="7"
      fill="#59C4E5"
      stroke="#FFFFFF"
      strokeWidth="2"
    />
    <Circle
      cx="69"
      cy="39"
      r="7"
      fill="#76B957"
      stroke="#FFFFFF"
      strokeWidth="2"
    />
    <Circle
      cx="26"
      cy="59"
      r="7"
      fill="#F7B83B"
      stroke="#FFFFFF"
      strokeWidth="2"
    />
    <Circle
      cx="42"
      cy="69"
      r="9"
      fill="#F5A900"
      stroke="#FFFFFF"
      strokeWidth="2.5"
    />

    {/* Small playful sparkles (matching LetterIcon style) */}
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
