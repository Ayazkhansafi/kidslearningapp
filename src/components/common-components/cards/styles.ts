import { theme } from "@/theme/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 180,
    borderWidth: 2,
    borderColor: theme.colors.cardBorder,
    borderRadius: 30,
    position: "relative",
    backgroundColor: theme.colors.white,
    overflow: "hidden",
    ...theme.shadows.card,
  },
  cardGradient: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 12,
    justifyContent: "space-between",
    overflow: "hidden",
  },
  cardPressed: {
    transform: [{ scale: 0.97 }],
  },
  cardHighlight: {
    position: "absolute",
    top: -35,
    right: -25,
    width: 115,
    height: 115,
    borderRadius: 60,
    backgroundColor: "rgba(255,255,255,0.13)",
  },
  cardIcon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    color: theme.colors.primary,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 3,
    marginTop: 10,
    textAlign: "center",
  },
  cardSubTitle: {
    fontSize: 14,
    color: theme.colors.textMuted,
    textAlign: "center",
    marginBottom: 10,
  },
  lockIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 2,
  },
});
