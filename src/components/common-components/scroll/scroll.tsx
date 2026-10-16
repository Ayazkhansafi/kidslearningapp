// components/Layout.tsx
import React from "react";
import { ScrollView, ScrollViewProps, View, ViewStyle } from "react-native";
import { theme } from "../../../theme/theme";

interface LayoutProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const Container: React.FC<LayoutProps> = ({ children, style }) => (
  <View style={[{ flex: 1, backgroundColor: theme.colors.background }, style]}>
    {children}
  </View>
);

export const VStack: React.FC<LayoutProps & { spacing?: number }> = ({
  children,
  spacing = 10,
  style,
}) => (
  <View style={[{ flexDirection: "column", gap: spacing }, style]}>
    {children}
  </View>
);

export const HStack: React.FC<
  LayoutProps & { spacing?: number; justify?: ViewStyle["justifyContent"] }
> = ({ children, spacing = 10, justify = "space-between", style }) => (
  <View
    style={[
      {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: justify,
        gap: spacing,
      },
      style,
    ]}
  >
    {children}
  </View>
);

export const ScrollContainer: React.FC<
  ScrollViewProps & { horizontal?: boolean }
> = ({ children, horizontal, style, contentContainerStyle, ...props }) => (
  <ScrollView
    horizontal={horizontal}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={[
      { paddingHorizontal: 20, paddingBottom: 40 },
      contentContainerStyle,
    ]}
    style={style}
    {...props}
  >
    {children}
  </ScrollView>
);
