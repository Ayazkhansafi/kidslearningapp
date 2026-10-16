import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";

const QuickIcon = ({ type }: { type: string }) => {
  if (type === "brush") {
    return (
      <Svg width={42} height={42} viewBox="0 0 42 42">
        <Circle cx="21" cy="21" r="19" fill="#E9F6FF" />
        <Path
          d="M13 29Q19 20 29 12"
          stroke="#258CD8"
          strokeWidth={7}
          strokeLinecap="round"
        />
        <Circle cx="13" cy="29" r="5" fill="#5EBAED" />
      </Svg>
    );
  }

  if (type === "clock") {
    return (
      <Svg width={42} height={42} viewBox="0 0 42 42">
        <Circle cx="21" cy="21" r="18" fill="#FFF4D0" />
        <Circle
          cx="21"
          cy="21"
          r="12"
          fill="white"
          stroke="#D7B967"
          strokeWidth={2}
        />
        <Path
          d="M21 13V21L27 24"
          stroke="#555"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </Svg>
    );
  }

  if (type === "moon") {
    return (
      <Svg width={42} height={42} viewBox="0 0 42 42">
        <Circle cx="21" cy="21" r="18" fill="#E8F9FF" />
        <Path
          d="M28 12C19 13 16 25 23 30C25 32 28 32 31 30C27 36 17 34 13 27C8 18 17 9 28 12Z"
          fill="#27B8D2"
        />
      </Svg>
    );
  }

  return (
    <Svg width={42} height={42} viewBox="0 0 42 42">
      <Circle cx="21" cy="21" r="18" fill="#FFF6D4" />
      <Circle cx="21" cy="20" r="9" fill="#F4C84E" />
      <Path d="M15 31H27" stroke="#80672B" strokeWidth={3} />
    </Svg>
  );
};

const QuickAction = ({ type, title }: { type: string; title: string }) => (
  <Pressable style={styles.quickItem}>
    <View style={styles.quickCircle}>
      <QuickIcon type={type} />
    </View>

    <Text style={styles.quickTitle}>{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  quickItem: {
    width: 90,
    marginRight: 12,
    alignItems: "center",
  },

  quickCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    elevation: 3,
  },

  quickTitle: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 17,
    textAlign: "center",
    color: "#55575C",
    fontWeight: "700",
  },
});

export default QuickAction;
