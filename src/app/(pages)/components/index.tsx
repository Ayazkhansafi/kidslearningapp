// src/app/components.tsx
import { AppButton } from "@/components/common-components/buttons/button";
import { LearningCard } from "@/components/common-components/cards/cards";
import {
  AppInput,
  SearchBar,
} from "@/components/common-components/input/Input";
import { PopupModal } from "@/components/common-components/modals/PopupModal";
import {
  Container,
  ScrollContainer,
  VStack
} from "@/components/common-components/scroll/scroll";
import { AppText } from "@/components/common-components/typography/typography";
import { theme } from "@/theme/theme";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function ComponentsScreen() {
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Vertical grid items
  const verticalCards = [
    {
      title: "Math Level 1",
      subtitle: "Addition & Subtraction",
      gradient: ["#A1C4FD", "#C2E9FB"] as const,
      locked: false,
    },
    {
      title: "Science Lab",
      subtitle: "Plants & Animals",
      gradient: ["#FFECD2", "#FCB69F"] as const,
      locked: true,
    },
    {
      title: "Alphabet Fun",
      subtitle: "A to Z Writing",
      gradient: ["#8FD3F4", "#84FAB0"] as const,
      locked: false,
    },
    {
      title: "Color World",
      subtitle: "Art & Painting",
      gradient: ["#FCCB90", "#D57EEB"] as const,
      locked: true,
    },
  ];

  return (
    <Container>
      <ScrollContainer>
        <VStack spacing={24}>
          {/* Screen Title */}
          <VStack spacing={4}>
            <AppText variant="heading">Design System Showcase</AppText>
            <AppText variant="caption">
              Previewing all reusable components & layouts
            </AppText>
          </VStack>

          {/* THEME DOCUMENTATION & GUIDE SECTION */}
          <VStack spacing={12}>
            <AppText variant="subheading">
              🎨 Theme Documentation & Guide
            </AppText>

            <View
              style={{
                backgroundColor: theme.colors.white,
                padding: 16,
                borderRadius: theme.borderRadius.lg,
                borderWidth: 2,
                borderColor: theme.colors.cardBorder,
                ...theme.shadows.card,
              }}
            >
              <VStack spacing={10}>
                <AppText variant="bold" color={theme.colors.primary}>
                  What does the theme do?
                </AppText>
                <AppText
                  variant="body"
                  style={{ fontSize: 13, lineHeight: 18 }}
                >
                  The theme (`theme.ts`) acts as the single source of truth for
                  your app's design tokens. It standardizes colors, spacing
                  scales, border radii, and shadow elevations so your entire app
                  stays visually consistent without hardcoding values.
                </AppText>

                <AppText
                  variant="bold"
                  color={theme.colors.primary}
                  style={{ marginTop: 6 }}
                >
                  How to use it in your code:
                </AppText>
                <AppText
                  variant="caption"
                  style={{
                    backgroundColor: "#F4F6F3",
                    padding: 10,
                    borderRadius: 8,
                    fontFamily: "monospace",
                  }}
                >
                  {`import { theme } from '@/theme/theme';\n\n// Example usage:\nconst myStyle = {\n  backgroundColor: theme.colors.background,\n  padding: theme.spacing.base,\n  borderRadius: theme.borderRadius.lg\n};`}
                </AppText>
              </VStack>
            </View>
          </VStack>

          {/* 1. TYPOGRAPHY SECTION */}
          <VStack spacing={12}>
            <AppText variant="subheading">1. Typography Variants</AppText>
            <VStack spacing={6}>
              <AppText variant="heading">Heading Text (900)</AppText>
              <AppText variant="subheading">Subheading Text (700)</AppText>
              <AppText variant="bold">Bold Text (800)</AppText>
              <AppText variant="body">Body Text (600 standard)</AppText>
              <AppText variant="caption">
                Caption Text (Muted description)
              </AppText>
            </VStack>
          </VStack>

          {/* 2. BUTTONS SECTION */}
          <VStack spacing={12}>
            <AppText variant="subheading">2. Button Variants</AppText>
            <VStack spacing={10}>
              <AppButton
                title="Primary Button (Blue)"
                variant="primary"
                onPress={() => {}}
              />
              <AppButton
                title="Secondary Button (Orange)"
                variant="secondary"
                onPress={() => {}}
              />
              <AppButton
                title="Accent Button (Green)"
                variant="accent"
                onPress={() => {}}
              />
            </VStack>
          </VStack>

          {/* 3. INPUTS & SEARCH BAR SECTION */}
          <VStack spacing={12}>
            <AppText variant="subheading">3. Input Fields & Search</AppText>

            <SearchBar
              placeholder="Search courses or topics..."
              value={searchValue}
              onChangeText={setSearchValue}
            />

            <AppInput
              label="Standard Text Input"
              placeholder="Type something here..."
              value={inputValue}
              onChangeText={setInputValue}
            />
          </VStack>

          {/* 4. VERTICAL CARDS SECTION (Grid) */}
          <VStack spacing={12}>
            <AppText variant="subheading">4. Vertical Grid Cards</AppText>
            <View style={styles.cardsGrid}>
              {verticalCards.map((card, index) => (
                <View key={index} style={{ width: "47.8%" }}>
                  <LearningCard
                    title={card.title}
                    subtitle={card.subtitle}
                    gradient={card.gradient}
                    isLocked={card.locked}
                    onPress={() => console.log(`${card.title} pressed`)}
                  />
                </View>
              ))}
            </View>
          </VStack>

          {/* 5. HORIZONTAL SCROLLING CARDS SECTION */}
          <VStack spacing={12}>
            <AppText variant="subheading">
              5. Horizontal Scrolling Cards
            </AppText>
            <AppText variant="caption">
              Swipe horizontally to explore modules
            </AppText>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 15, paddingRight: 20 }}
            >
              <View style={styles.horizontalCardWrapper}>
                <LearningCard
                  title="Alphabet"
                  subtitle="A to Z Fun"
                  gradient={["#ff9a9e", "#fecfef"] as const}
                  onPress={() => console.log("Horizontal Card 1")}
                />
              </View>
              <View style={styles.horizontalCardWrapper}>
                <LearningCard
                  title="Numbers"
                  subtitle="Count 1-100"
                  gradient={["#a1c4fd", "#c2e9fb"] as const}
                  onPress={() => console.log("Horizontal Card 2")}
                />
              </View>
              <View style={styles.horizontalCardWrapper}>
                <LearningCard
                  title="Colors"
                  subtitle="Paint & Draw"
                  gradient={["#ffecd2", "#fcb69f"] as const}
                  onPress={() => console.log("Horizontal Card 3")}
                />
              </View>
            </ScrollView>
          </VStack>

          {/* 6. MODAL TRIGGER SECTION */}
          <VStack spacing={12}>
            <AppText variant="subheading">6. Modal Popup</AppText>
            <AppButton
              title="Open Popup Modal"
              variant="primary"
              onPress={() => setIsModalVisible(true)}
            />
          </VStack>
        </VStack>
      </ScrollContainer>

      {/* Interactive Modal Example */}
      <PopupModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      >
        <VStack spacing={16}>
          <AppText variant="heading" align="center">
            Awesome Modal!
          </AppText>
          <AppText variant="body" align="center">
            This popup adapts smoothly to your design system.
          </AppText>
          <AppButton
            title="Got it!"
            variant="accent"
            onPress={() => setIsModalVisible(false)}
          />
        </VStack>
      </PopupModal>
    </Container>
  );
}

const styles = StyleSheet.create({
  cardsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 20,
  },
  horizontalCardWrapper: {
    width: 175,
  },
});
