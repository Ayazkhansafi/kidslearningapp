import { StyleSheet } from "react-native";

// Styles
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#abee74",
  },

  safeArea: {
    flex: 1,
    paddingTop: 45,
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  // Hero
  hero: {
    height: 245,
    borderRadius: 34,
    overflow: "hidden",
    backgroundColor: "#8BD9D7",
    marginBottom: 28,
    position: "relative",
  },

  heroTextContainer: {
    position: "absolute",
    top: 18,
    left: 125,
    right: 15,
    zIndex: 5,
  },

  nameBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#FFF6D0",
    paddingHorizontal: 22,
    paddingVertical: 9,
    borderRadius: 15,
  },

  nameText: {
    fontSize: 19,
    lineHeight: 21,
    fontWeight: "800",
    color: "#5EABC0",
    textAlign: "center",
  },

  askButton: {
    marginTop: 10,
    alignSelf: "flex-end",
    width: 190,
    height: 70,
    borderRadius: 28,
    backgroundColor: "#159BEA",
    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#1779B5",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 7,
    },

    elevation: 5,
  },

  askText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
  },

  categoryText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
    fontWeight: "700",
    color: "#245c35",
  },

  didiPosition: {
    position: "absolute",
    left: 0,
    bottom: -2,
  },

  // Learning cards grid
  cardsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 20,
  },

  card: {
    width: "47.8%",
    height: 180,
    borderWidth: 2,
    borderColor: "#D0EDBE",
    borderRadius: 30,
    position: "relative",
    backgroundColor: "#fff",
    elevation: 4,
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
    color: "#245c35",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 3,
    marginTop: 10,
    textShadowColor: "rgba(0,0,0,0.12)",
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 2,
    textAlign: "center",
  },

  lockIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 2,
  },

  // Quick actions
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 35,
    paddingHorizontal: 3,
  },

  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 5,
  },

  cardSubTitle: {
    fontSize: 14,
    color: "#82917C",
    textAlign: "center",
    marginBottom: 10,
  },
});
