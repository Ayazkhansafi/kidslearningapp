import { StyleSheet } from "react-native";
import Svg, {
  Circle,
  Path,
  Rect
} from "react-native-svg";

export const BackgroundSVG = () => (
  <Svg
    width="100%"
    height="100%"
    viewBox="0 0 400 850"
    preserveAspectRatio="none"
    style={StyleSheet.absoluteFill}
  >
    {/* Soft mint green base */}
    <Rect
      width="400"
      height="850"
      fill="#F2F9EE"
    />

    {/* Top green organic shape */}
    <Path
      d="M0 0H400V135
         C340 165 295 115 245 135
         C175 165 105 120 0 160Z"
      fill="#DCEFD5"
    />

    {/* Lighter top wave */}
    <Path
      d="M0 0H400V75
         C325 105 275 65 215 85
         C130 115 65 65 0 95Z"
      fill="#E8F5DF"
    />

    {/* Decorative top-left bubbles */}
    <Circle
      cx="35"
      cy="65"
      r="25"
      fill="#FFFFFF"
      opacity={0.55}
    />
    <Circle
      cx="72"
      cy="45"
      r="16"
      fill="#B8DDB0"
      opacity={0.65}
    />
    <Circle
      cx="105"
      cy="83"
      r="10"
      fill="#FFFFFF"
      opacity={0.8}
    />

    {/* Decorative top-right bubbles */}
    <Circle
      cx="340"
      cy="48"
      r="28"
      fill="#FFFFFF"
      opacity={0.55}
    />
    <Circle
      cx="375"
      cy="90"
      r="17"
      fill="#B8DDB0"
      opacity={0.6}
    />

    {/* Small floating leaf shapes */}
    <Path
      d="M300 145
         C280 125 285 105 310 100
         C320 120 316 137 300 145Z"
      fill="#B9DDB0"
      opacity={0.55}
    />
    <Path
      d="M310 140L300 115"
      stroke="#92C78A"
      strokeWidth={2}
      fill="none"
      opacity={0.6}
    />

    {/* Soft middle decorative circles */}
    <Circle
      cx="15"
      cy="360"
      r="38"
      fill="#E0F0D8"
      opacity={0.55}
    />
    <Circle
      cx="390"
      cy="420"
      r="32"
      fill="#E5F2D9"
      opacity={0.65}
    />

    {/* Tiny playful dots */}
    <Circle
      cx="28"
      cy="425"
      r="5"
      fill="#B7DCA9"
    />
    <Circle
      cx="370"
      cy="340"
      r="6"
      fill="#C5E4B9"
    />
    <Circle
      cx="365"
      cy="485"
      r="4"
      fill="#A8D49D"
    />

    {/* Bottom flowing sage-green wave */}
    <Path
      d="M0 735
         C55 700 105 755 160 730
         C220 705 275 755 330 725
         C360 710 385 720 400 710
         V850H0Z"
      fill="#E0F0D8"
    />

    {/* Secondary bottom wave */}
    <Path
      d="M0 785
         C70 750 125 810 195 780
         C265 750 320 805 400 765
         V850H0Z"
      fill="#D1E9C8"
    />

    {/* Bottom-left decorative circles */}
    <Circle
      cx="30"
      cy="740"
      r="48"
      fill="#C6E5BC"
      opacity={0.55}
    />
    <Circle
      cx="55"
      cy="775"
      r="22"
      fill="#B5DDA9"
      opacity={0.55}
    />

    {/* Bottom-right soft green bubble */}
    <Circle
      cx="375"
      cy="700"
      r="55"
      fill="#C5E4B9"
      opacity={0.6}
    />

    {/* Decorative bottom leaf */}
    <Path
      d="M330 800
         C310 780 320 755 345 752
         C355 775 348 792 330 800Z"
      fill="#A9D39D"
      opacity={0.65}
    />
    <Path
      d="M333 795L338 766"
      stroke="#83B978"
      strokeWidth={2}
      fill="none"
      opacity={0.7}
    />

    {/* Tiny white highlights */}
    <Circle
      cx="95"
      cy="805"
      r="5"
      fill="#FFFFFF"
      opacity={0.8}
    />
    <Circle
      cx="285"
      cy="760"
      r="7"
      fill="#FFFFFF"
      opacity={0.65}
    />
  </Svg>
);