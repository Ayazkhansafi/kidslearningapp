// components/Button.tsx
import { theme } from "@/theme/theme";
import React from "react";
import {
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "accent";
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
}

export const AppButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
  style,
  textStyle,
  icon,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.base, styles[variant], style]}
    >
      {icon}
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: theme.borderRadius.lg,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    ...theme.shadows.button,
  },
  primary: {
    backgroundColor: theme.colors.accentBlue,
  },
  secondary: {
    backgroundColor: theme.colors.accentOrange,
  },
  accent: {
    backgroundColor: theme.colors.success,
  },
  text: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: "700",
  },
});
