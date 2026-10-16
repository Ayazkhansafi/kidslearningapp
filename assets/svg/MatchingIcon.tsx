import Svg, { Circle, Path, Rect, Text as SvgText } from "react-native-svg";

export const MatchingIcon = () => (
  <Svg width={105} height={105} viewBox="0 0 100 100">
    {/* --- WORD TILE (Top Left: "CAT") --- */}
    <Rect
      x="8"
      y="12"
      width="38"
      height="28"
      rx="7"
      fill="#29B6F6"
      stroke="#FFFFFF"
      strokeWidth="5"
      strokeLinejoin="round"
    />
    <Rect
      x="8"
      y="12"
      width="38"
      height="28"
      rx="7"
      fill="#29B6F6"
      stroke="#01579B"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <SvgText
      x="27"
      y="31"
      fontSize="15"
      fontWeight="900"
      fontFamily="Arial"
      textAnchor="middle"
      fill="#FFFFFF"
    >
      CAT
    </SvgText>

    {/* --- CUTE CAT OBJECT (Bottom Right) --- */}
    {/* Cat Head Base with Thick White Outline */}
    <Path
      d="M58 52 L67 60 C73 57, 85 57, 91 60 L100 52 C104 64, 103 80, 91 88 C82 94, 74 94, 65 88 C53 80, 52 64, 58 52 Z"
      fill="#FF7043"
      stroke="#FFFFFF"
      strokeWidth="6"
      strokeLinejoin="round"
    />
    <Path
      d="M58 52 L67 60 C73 57, 85 57, 91 60 L100 52 C104 64, 103 80, 91 88 C82 94, 74 94, 65 88 C53 80, 52 64, 58 52 Z"
      fill="#FF7043"
      stroke="#C62828"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {/* Cat Eyes */}
    <Circle cx="70" cy="68" r="3.5" fill="#111111" />
    <Circle cx="88" cy="68" r="3.5" fill="#111111" />
    {/* Cat Nose & Whiskers */}
    <Path d="M77 75 L81 75 L79 78 Z" fill="#FF4081" />
    <Path
      d="M60 74 L68 76 M98 74 L90 76"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* --- DRAWN MATCHING LINE (Kid's Hand-Drawn Stroke) --- */}
    <Path
      d="M27 40 C 27 60, 48 45, 62 65"
      stroke="#FFC107"
      strokeWidth="5"
      strokeLinecap="round"
      strokeDasharray="2 0"
      fill="none"
    />

    {/* Target Match Dots */}
    <Circle
      cx="27"
      cy="40"
      r="4.5"
      fill="#E91E63"
      stroke="#FFFFFF"
      strokeWidth="2"
    />
    <Circle
      cx="62"
      cy="65"
      r="4.5"
      fill="#43A047"
      stroke="#FFFFFF"
      strokeWidth="2"
    />

    {/* --- CRAYON / PENCIL DRAWING THE LINE --- */}
    <Svg transform="translate(42, 42) rotate(-25)">
      {/* Pencil Body */}
      <Rect
        x="0"
        y="0"
        width="8"
        height="20"
        rx="2"
        fill="#FF8F00"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
      {/* Pencil Tip */}
      <Path
        d="M0 20 L4 27 L8 20 Z"
        fill="#FFF0C7"
        stroke="#FFFFFF"
        strokeWidth="1.5"
      />
      {/* Crayon Lead Tip */}
      <Path d="M2.5 24 L4 27 L5.5 24 Z" fill="#FFC107" />
    </Svg>

    {/* Small playful sparkles */}
    <Path
      d="M8 72 L10 76 L14 78 L10 80 L8 84 L6 80 L2 78 L6 76 Z"
      fill="#FFC107"
    />
    <Path
      d="M86 12 L88 16 L92 18 L88 20 L86 24 L84 20 L80 18 L84 16 Z"
      fill="#29B6F6"
    />
  </Svg>
);
