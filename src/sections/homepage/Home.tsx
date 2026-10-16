import { BackgroundSVG, LockIcon } from "@/assets/svg";
import HeaderSection from "@/components/headerSection";
import HeroSection from "@/components/HeroSection";
import { LinearGradient } from "expo-linear-gradient";
import { Component } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { continueLearningCards, recommendedCard } from "./data";
import { styles } from "./styles";

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={StyleSheet.absoluteFill}>
          <BackgroundSVG />
        </View>

        <View style={styles.safeArea}>
          <HeaderSection />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            <HeroSection />
            <View>
              <View>
                <Text style={styles.categoryText}>Continue Learning</Text>
              </View>
              <View style={styles.cardsGrid}>
                {continueLearningCards.map((card) => (
                  <Pressable
                    key={card.title}
                    style={({ pressed }) => [
                      styles.card,
                      pressed && styles.cardPressed,
                    ]}
                    disabled={card.locked ?? true}
                  >
                    <LinearGradient
                      colors={card.gradient}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={styles.cardGradient}
                    >
                      <View style={styles.cardHighlight} />

                      <View style={styles.cardIcon}>{card.icon}</View>

                      {card.locked && (
                        <View style={styles.lockIcon}>
                          <LockIcon />
                        </View>
                      )}
                    </LinearGradient>
                    <Text style={styles.cardTitle}>{card.title}</Text>
                    <Text style={styles.cardSubTitle}>12/26 modules</Text>
                  </Pressable>
                ))}
              </View>
            </View>
            <View>
              <View>
                <Text style={styles.categoryText}>Recommended For You</Text>
              </View>
              <View style={styles.cardsGrid}>
                {recommendedCard.map((card) => (
                  <Pressable
                    key={card.title}
                    style={({ pressed }) => [
                      styles.card,
                      pressed && styles.cardPressed,
                    ]}
                    disabled={card.locked ?? true}
                  >
                    <LinearGradient
                      colors={card.gradient}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={styles.cardGradient}
                    >
                      <View style={styles.cardHighlight} />

                      <View style={styles.cardIcon}>{card.icon}</View>

                      {card.locked && (
                        <View style={styles.lockIcon}>
                          <LockIcon />
                        </View>
                      )}
                    </LinearGradient>
                    <Text style={styles.cardTitle}>{card.title}</Text>
                    <Text style={styles.cardSubTitle}>26 modules</Text>
                  </Pressable>
                ))}
              </View>
            </View>
            {/* Quick actions */}
            {/* <View style={styles.quickActions}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollContainer}
            >
              <QuickAction type="brush" title={"Brushing\nteeth"} />
              <QuickAction type="clock" title={"Daily routine"} />
              <QuickAction type="moon" title={"Good night"} />
              <QuickAction type="bulb" title={"Blue light"} />
              <QuickAction type="moon" title={"Good night"} />
              <QuickAction type="bulb" title={"Blue light"} />
            </ScrollView>
          </View> */}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Home;
