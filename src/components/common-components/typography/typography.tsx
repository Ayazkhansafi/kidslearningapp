// components/Typography.tsx

import React from "react";
import { Text, TextProps } from "react-native";

import { theme } from "@/theme/theme";
import { styles } from "./styles";

interface CustomTextProps extends TextProps {
  variant?: "body" | "heading" | "subheading" | "caption" | "bold";
  color?: string;
  align?: "auto" | "left" | "right" | "center" | "justify";
}

export const AppText: React.FC<CustomTextProps> = ({
  variant = "body",
  color = theme.colors.primary,
  align = "left",
  style,
  children,
  ...props
}) => {
  return (
    <Text
      style={[styles[variant], { color, textAlign: align }, style]}
      {...props}
    >
      {children}
    </Text>
  );
};
