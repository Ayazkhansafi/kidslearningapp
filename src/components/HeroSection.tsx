import { StyleSheet, Text, View } from "react-native";

export default function HeroSection() {
  return (
    <View style={styles.hero}>
      {/* Left Content */}
      <View style={styles.heroContent}>
        <View style={styles.scoreHeader}>
          <View>
            <Text style={styles.heroTitle}>Super Star! 🌟</Text>
            <Text style={styles.subtitle}>You're doing amazing!</Text>
          </View>
        </View>
        <View>
          <View style={styles.progressInfo}>
            <Text style={styles.progressText}>Learning Progress</Text>
            <Text style={styles.progressPercent}>75%</Text>
          </View>

          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>

          <Text style={styles.motivationText}>
            ⭐ 6 modules completed! Keep shining!
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    borderRadius: 28,
    backgroundColor: "#ffffff",
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    borderWidth: 2,
    borderColor: "#D0EDBE",
  },

  heroContent: {
    flex: 1,
    zIndex: 2,
    justifyContent: "center",
  },

  heroTitle: {
    fontSize: 23,
    lineHeight: 28,
    fontWeight: "900",
    color: "#245c35",
  },

  highlight: {
    color: "#F08B35",
  },

  askButton: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F49A3F",
    paddingHorizontal: 17,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 13,
    elevation: 2,
  },

  askText: {
    fontSize: 13,
    fontWeight: "900",
    color: "#FFFFFF",
  },

  buttonEmoji: {
    fontSize: 14,
  },

  didiPosition: {
    width: "42%",
    height: 190,
    alignItems: "center",
    justifyContent: "flex-end",
    position: "absolute",
    right: -4,
    bottom: 0,
  },

  helloBubble: {
    position: "absolute",
    top: 18,
    right: 10,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 9,
    paddingVertical: 7,
    borderRadius: 14,
    borderBottomRightRadius: 3,
    elevation: 2,
  },

  helloText: {
    color: "#397448",
    fontSize: 9,
    fontWeight: "900",
  },
  scoreHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  subtitle: {
    fontSize: 14,
    color: "#82917C",
    marginTop: 5,
  },

  trophyEmoji: {
    fontSize: 42,
  },

  progressInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  progressText: {
    fontSize: 14,
    fontWeight: "800",
    color: "#355D3B",
  },

  progressPercent: {
    fontSize: 20,
    fontWeight: "900",
    color: "#68B84D",
  },

  progressBar: {
    height: 12,
    backgroundColor: "#DCECCF",
    borderRadius: 10,
    overflow: "hidden",
  },

  progressFill: {
    width: "75%",
    height: "100%",
    backgroundColor: "#83C95B",
    borderRadius: 10,
  },

  motivationText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#658052",
    marginTop: 12,
  },
});
