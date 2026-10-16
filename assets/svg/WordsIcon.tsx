import Svg, { Circle, Path, Rect, Text as SvgText } from "react-native-svg";

export const WordsIcon = () => (
  <Svg width={105} height={105} viewBox="0 0 100 100">
    {/* --- CUTE APPLE OBJECT (Left Center) --- */}
    {/* Leaf */}
    <Path
      d="M30 18 C30 12, 38 12, 38 18 C38 24, 30 24, 30 18 Z"
      fill="#43A047"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    {/* Stem */}
    <Path
      d="M27 22 Q29 17 31 15"
      stroke="#795548"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Apple Body */}
    <Path
      d="M27 22 C18 22, 12 30, 16 42 C20 52, 27 50, 27 45 C27 50, 34 52, 38 42 C42 30, 36 22, 27 22 Z"
      fill="#E53935"
      stroke="#FFFFFF"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <Path
      d="M27 22 C18 22, 12 30, 16 42 C20 52, 27 50, 27 45 C27 50, 34 52, 38 42 C42 30, 36 22, 27 22 Z"
      fill="#E53935"
      stroke="#B71C1C"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    {/* Apple Shine Highlight */}
    <Circle cx="20" cy="28" r="2" fill="#FFFFFF" opacity={0.7} />

    {/* --- OPEN BOOK BASE --- */}
    {/* Left Page */}
    <Path
      d="M50 88 C35 86, 12 90, 8 73 L8 52 C12 58, 35 56, 50 60 Z"
      fill="#FFF0C7"
      stroke="#FFFFFF"
      strokeWidth="6"
      strokeLinejoin="round"
    />
    <Path
      d="M50 88 C35 86, 12 90, 8 73 L8 52 C12 58, 35 56, 50 60 Z"
      fill="#FFF0C7"
      stroke="#1976D2"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />

    {/* Right Page */}
    <Path
      d="M50 88 C65 86, 88 90, 92 73 L92 52 C88 58, 65 56, 50 60 Z"
      fill="#FFF0C7"
      stroke="#FFFFFF"
      strokeWidth="6"
      strokeLinejoin="round"
    />
    <Path
      d="M50 88 C65 86, 88 90, 92 73 L92 52 C88 58, 65 56, 50 60 Z"
      fill="#FFF0C7"
      stroke="#1976D2"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />

    {/* Book Spine Center */}
    <Path
      d="M50 60 L50 88"
      stroke="#1976D2"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* --- SPELLOUT LETTER TILES "APPLE" --- */}
    {/* Tile 1: A */}
    <Rect
      x="44"
      y="8"
      width="13"
      height="16"
      rx="3.5"
      fill="#E95462"
      stroke="#FFFFFF"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <SvgText
      x="50.5"
      y="20"
      fontSize="10"
      fontWeight="900"
      fontFamily="Arial"
      textAnchor="middle"
      fill="#FFFFFF"
    >
      A
    </SvgText>

    {/* Tile 2: P */}
    <Rect
      x="54"
      y="20"
      width="13"
      height="16"
      rx="3.5"
      fill="#FF9800"
      stroke="#FFFFFF"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <SvgText
      x="60.5"
      y="32"
      fontSize="10"
      fontWeight="900"
      fontFamily="Arial"
      textAnchor="middle"
      fill="#FFFFFF"
    >
      P
    </SvgText>

    {/* Tile 3: P */}
    <Rect
      x="64"
      y="32"
      width="13"
      height="16"
      rx="3.5"
      fill="#FFC107"
      stroke="#FFFFFF"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <SvgText
      x="70.5"
      y="44"
      fontSize="10"
      fontWeight="900"
      fontFamily="Arial"
      textAnchor="middle"
      fill="#FFFFFF"
    >
      P
    </SvgText>

    {/* Tile 4: L */}
    <Rect
      x="74"
      y="20"
      width="13"
      height="16"
      rx="3.5"
      fill="#43A047"
      stroke="#FFFFFF"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <SvgText
      x="80.5"
      y="32"
      fontSize="10"
      fontWeight="900"
      fontFamily="Arial"
      textAnchor="middle"
      fill="#FFFFFF"
    >
      L
    </SvgText>

    {/* Tile 5: E */}
    <Rect
      x="84"
      y="8"
      width="13"
      height="16"
      rx="3.5"
      fill="#29B6F6"
      stroke="#FFFFFF"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <SvgText
      x="90.5"
      y="20"
      fontSize="10"
      fontWeight="900"
      fontFamily="Arial"
      textAnchor="middle"
      fill="#FFFFFF"
    >
      E
    </SvgText>

    {/* Small playful sparkles */}
    <Path
      d="M10 8 L13 14 L18 16 L13 18 L10 24 L7 18 L2 16 L7 14 Z"
      fill="#FFC107"
    />
    <Path
      d="M92 78 L94 82 L98 84 L94 86 L92 90 L90 86 L86 84 L90 82 Z"
      fill="#29B6F6"
    />
  </Svg>
);
