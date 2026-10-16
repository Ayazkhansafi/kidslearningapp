import Svg, {
  Circle,
  Ellipse,
  Path,
  Rect
} from "react-native-svg";

export const DidiExplorer = () => (
  <Svg width={190} height={190} viewBox="0 0 190 190">
    {/* Ground shadow */}
    <Ellipse cx="95" cy="176" rx="48" ry="7" fill="#DDEBCB" />

    {/* Trophy handles */}
    <Path
      d="M61 48 H43 Q35 48 35 60 Q35 81 65 84"
      fill="none"
      stroke="#E9A91F"
      strokeWidth="9"
      strokeLinecap="round"
    />
    <Path
      d="M129 48 H147 Q155 48 155 60 Q155 81 125 84"
      fill="none"
      stroke="#E9A91F"
      strokeWidth="9"
      strokeLinecap="round"
    />

    {/* Inner handle highlights */}
    <Path
      d="M49 55 Q46 70 63 75"
      fill="none"
      stroke="#FFE58A"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <Path
      d="M141 55 Q144 70 127 75"
      fill="none"
      stroke="#FFE58A"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Trophy cup */}
    <Path
      d="M56 34
         Q54 30 60 30
         H130
         Q136 30 134 36
         L128 78
         Q125 104 95 111
         Q65 104 62 78Z"
      fill="#FFC83D"
      stroke="#E4A11B"
      strokeWidth="2"
    />

    {/* Trophy shine */}
    <Path
      d="M66 40 Q65 65 72 78"
      fill="none"
      stroke="#FFF1A9"
      strokeWidth="7"
      strokeLinecap="round"
    />

    {/* Cup right-side shading */}
    <Path
      d="M113 39 Q124 59 117 80 Q113 91 104 96"
      fill="none"
      stroke="#F2B323"
      strokeWidth="5"
      strokeLinecap="round"
    />

    {/* Star badge */}
    <Circle cx="95" cy="67" r="23" fill="#F5A623" />
    <Circle cx="95" cy="67" r="19" fill="#FFE98B" />

    <Path
      d="M95 48
         L100 60
         L113 61
         L103 70
         L106 83
         L95 76
         L84 83
         L87 70
         L77 61
         L90 60Z"
      fill="#F2A51D"
      stroke="#E39A15"
      strokeWidth="1"
      strokeLinejoin="round"
    />

    {/* Stem */}
    <Path
      d="M83 108 H107 L111 133 H79Z"
      fill="#F4B72B"
    />
    <Rect x="80" y="113" width="30" height="5" rx="2" fill="#FFE58A" />

    {/* Base top */}
    <Path
      d="M72 132 Q72 128 78 128 H112 Q118 128 118 132
         L121 143 H69Z"
      fill="#E9A51B"
    />

    {/* Base bottom */}
    <Rect
      x="61"
      y="142"
      width="68"
      height="20"
      rx="5"
      fill="#F5B92F"
      stroke="#D99515"
      strokeWidth="2"
    />

    {/* Base highlight */}
    <Path
      d="M68 147 H122"
      stroke="#FFE58A"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Decorative stars */}
    <Path
      d="M36 30 L39 37 L46 40 L39 43 L36 50 L33 43 L26 40 L33 37Z"
      fill="#FFD34F"
    />
    <Path
      d="M151 94 L154 101 L161 104 L154 107 L151 114 L148 107 L141 104 L148 101Z"
      fill="#FFD34F"
    />
    <Path
      d="M48 112 L50 117 L55 119 L50 121 L48 126 L46 121 L41 119 L46 117Z"
      fill="#6FCB91"
    />
    <Circle cx="146" cy="28" r="4" fill="#F28AA7" />
    <Circle cx="35" cy="88" r="3" fill="#70C9C0" />
    <Circle cx="156" cy="52" r="3" fill="#F28AA7" />

    {/* Celebration sparkles */}
    <Path
      d="M135 18 L137 23 L142 25 L137 27 L135 32 L133 27 L128 25 L133 23Z"
      fill="#70C9C0"
    />
    <Path
      d="M58 17 L60 22 L65 24 L60 26 L58 31 L56 26 L51 24 L56 22Z"
      fill="#F28AA7"
    />
  </Svg>
);