import { SearchIcon } from "@/assets/svg";
import { Component } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export class HeaderSection extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.profileRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarEmoji}>👦🏻</Text>
          </View>

          <View>
            <Text style={styles.greeting}>Hi, Ahmed!</Text>
            <Text style={styles.welcome}>Nursury</Text>
          </View>
        </View>

        <Pressable style={styles.searchBtn}>
          <SearchIcon />
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 65,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 9,
  },

  avatar: {
    width: 43,
    height: 43,
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#8BCF72",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  avatarEmoji: {
    fontSize: 27,
  },

  avatarImage: {
    width: "100%",
    height: "100%",
    borderRadius: 22,
  },

  greeting: {
    fontSize: 19,
    fontWeight: "900",
    color: "#245C35",
  },

  welcome: {
    fontSize: 11,
    fontWeight: "600",
    color: "#65856A",
    marginTop: 2,
  },

  searchBtn: {
    width: 40,
    height: 40,
    marginBottom: 10,
    borderRadius: 27,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 4,
  },
});

export default HeaderSection;
