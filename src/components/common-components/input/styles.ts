import { theme } from "@/theme/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    marginBottom: 6,
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    borderWidth: 2,
    borderColor: theme.colors.cardBorder,
    borderRadius: theme.borderRadius.lg,
    paddingHorizontal: 14,
    height: 52,
    ...theme.shadows.card,
  },
  inputFocused: {
    borderColor: theme.colors.accentBlue,
  },
  inputError: {
    borderColor: "#FF5252",
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontWeight: "600",
    color: theme.colors.primary,
    paddingVertical: 0,
  },
  iconLeft: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: 10,
  },
  errorText: {
    marginTop: 4,
    fontSize: 12,
  },
  searchContainer: {
    width: "100%",
    height: 48,
    backgroundColor: theme.colors.white,
    borderRadius: 27,
    paddingHorizontal: 18,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: theme.colors.cardBorder,
    ...theme.shadows.card,
  },
  searchInput: {
    fontSize: 14,
    fontWeight: "600",
    color: theme.colors.primary,
  },
});
