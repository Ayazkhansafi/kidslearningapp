import { theme } from "@/theme/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContainer: {
    width: "100%",
    maxWidth: 340,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.xl,
    padding: 24,
    ...theme.shadows.card,
  },
});
