import { theme } from "@/theme/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  body: {
    fontSize: 15,
    fontWeight: "600",
  },
  heading: {
    fontSize: 23,
    lineHeight: 28,
    fontWeight: "900",
  },
  subheading: {
    fontSize: 18,
    fontWeight: "700",
  },
  caption: {
    fontSize: 12,
    color: theme.colors.textMuted,
  },
  bold: {
    fontSize: 14,
    fontWeight: "800",
  },
});
