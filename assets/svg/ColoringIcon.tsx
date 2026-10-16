import Svg, { Path } from "react-native-svg";

export const ColoringIcon = () => (
  <Svg width={105} height={105} viewBox="0 0 100 100">
    {/* --- BIG STAR OBJECT TO COLOR --- */}
    {/* Thick white outline for the Star */}
    <Path
      d="M50 12 L61 35 L86 39 L68 57 L72 82 L50 70 L28 82 L32 57 L14 39 L39 35 Z"
      fill="#FFF0C7"
      stroke="#FFFFFF"
      strokeWidth="7"
      strokeLinejoin="round"
    />
    {/* Vibrant colored border for the Star */}
    <Path
      d="M50 12 L61 35 L86 39 L68 57 L72 82 L50 70 L28 82 L32 57 L14 39 L39 35 Z"
      fill="#FFF0C7"
      stroke="#E65100"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />

    {/* --- VIBRANT PAINT SWIPE ACROSS THE STAR --- */}
    <Path
      d="M25 50 C35 30, 65 30, 75 50 C85 70, 45 85, 25 50 Z"
      fill="#AB47BC"
      stroke="#FFFFFF"
      strokeWidth="3"
      strokeLinejoin="round"
    />

    {/* --- MASSIVE CHUNKY PAINTBRUSH --- */}
    {/* Brush Handle */}
    <Path
      d="M38 94 L90 26"
      stroke="#795548"
      strokeWidth="10"
      strokeLinecap="round"
    />
    <Path
      d="M38 94 L90 26"
      stroke="#3E2723"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    {/* Metal Ferrule */}
    <Path
      d="M76 40 L94 16"
      stroke="#B0BEC5"
      strokeWidth="10"
      strokeLinecap="round"
    />
    <Path
      d="M76 40 L94 16"
      stroke="#37474F"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    {/* Giant Colorful Brush Bristles / Tip */}
    <Path
      d="M86 28 L103 8 C107 3, 100 -3, 95 2 L75 22 Z"
      fill="#AB47BC"
      stroke="#FFFFFF"
      strokeWidth="3"
      strokeLinejoin="round"
    />

    {/* Small playful sparkles */}
    <Path
      d="M86 84 L89 89 L95 92 L89 95 L86 100 L83 95 L77 92 L83 89 Z"
      fill="#FFC107"
    />
    <Path
      d="M14 16 L17 21 L23 24 L17 27 L14 32 L11 27 L5 24 L11 21 Z"
      fill="#29B6F6"
    />
  </Svg>
);
