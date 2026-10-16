// src/components/common-components/cards/cards.tsx
import { NumbersIcon } from "@/assets/svg";
import { AppText } from "@/components/common-components/typography/typography";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, View, ViewStyle } from "react-native";
import { styles } from "./styles";

interface LearningCardProps {
  title: string;
  subtitle?: string;
  gradient?: readonly [string, string, ...string[]];
  icon?: React.ReactNode;
  SvgIcon?: React.FC<{ width?: number; height?: number }>; // Added SVG component support
  lockIcon?: React.ReactNode;
  isLocked?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}

export const LearningCard: React.FC<LearningCardProps> = ({
  title,
  subtitle = "26 modules",
  gradient = ["#E8F5E9", "#C8E6C9"],
  icon,
  SvgIcon = NumbersIcon,
  lockIcon,
  isLocked = false,
  onPress,
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={isLocked}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
        style,
      ]}
    >
      <LinearGradient
        colors={gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.cardGradient}
      >
        <View style={styles.cardHighlight} />

        <View style={styles.cardIcon}>{SvgIcon ? <SvgIcon /> : icon}</View>

        {isLocked && lockIcon && (
          <View style={styles.lockIcon}>{lockIcon}</View>
        )}
      </LinearGradient>

      <AppText variant="subheading" style={styles.cardTitle}>
        {title}
      </AppText>
      <AppText variant="caption" style={styles.cardSubTitle}>
        {subtitle}
      </AppText>
    </Pressable>
  );
};
