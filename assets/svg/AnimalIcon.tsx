import Svg, { Circle, Path } from "react-native-svg";

export const AnimalIcon = () => (
  <Svg width={105} height={105} viewBox="0 0 100 100">
    {/* Thick white outline for the cat head */}
    <Path
      d="M20 32 L34 44 C42 40, 58 40, 66 44 L80 32 C86 50, 84 72, 68 84 C56 93, 44 93, 32 84 C16 72, 14 50, 20 32 Z"
      fill="#FF7043"
      stroke="#FFFFFF"
      strokeWidth="7"
      strokeLinejoin="round"
    />

    {/* Vibrant colored border */}
    <Path
      d="M20 32 L34 44 C42 40, 58 40, 66 44 L80 32 C86 50, 84 72, 68 84 C56 93, 44 93, 32 84 C16 72, 14 50, 20 32 Z"
      fill="#FF7043"
      stroke="#C62828"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />

    {/* Inner Left Ear */}
    <Path d="M26 34 L34 45 L22 47 Z" fill="#FFD54F" />

    {/* Inner Right Ear */}
    <Path d="M74 34 L66 45 L78 47 Z" fill="#FFD54F" />

    {/* Big expressive cat eyes */}
    <Circle cx="37" cy="53" r="6" fill="#111111" />
    <Circle cx="35.5" cy="51.5" r="2" fill="#FFFFFF" />

    <Circle cx="63" cy="53" r="6" fill="#111111" />
    <Circle cx="61.5" cy="51.5" r="2" fill="#FFFFFF" />

    {/* Cute pink nose & sweet smile */}
    <Path d="M47 62 L53 62 L50 66 Z" fill="#FF4081" />
    <Path
      d="M50 66 Q45 72 40 68 M50 66 Q55 72 60 68"
      fill="none"
      stroke="#111111"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* Whiskers */}
    <Path
      d="M22 61 L36 63 M20 68 L35 68"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <Path
      d="M78 61 L64 63 M80 68 L65 68"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Small playful sparkles */}
    <Path
      d="M10 12 L13 18 L19 21 L13 24 L10 30 L7 24 L1 21 L7 18 Z"
      fill="#FFC107"
    />
    <Path
      d="M90 14 L93 19 L99 22 L93 25 L90 30 L87 25 L81 22 L87 19 Z"
      fill="#29B6F6"
    />
  </Svg>
);
