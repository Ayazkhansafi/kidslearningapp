// components/Input.tsx
import React, { useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";

import { theme } from "@/theme/theme";
import { AppText } from "../typography/typography";
import { styles } from "./styles";

interface AppInputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const AppInput: React.FC<AppInputProps> = ({
  label,
  error,
  leftIcon,
  rightIcon,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {label && (
        <AppText
          variant="bold"
          color={theme.colors.primary}
          style={styles.label}
        >
          {label}
        </AppText>
      )}
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputFocused,
          error && styles.inputError,
        ]}
      >
        {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
        <TextInput
          style={styles.input}
          placeholderTextColor={theme.colors.textMuted}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
      </View>
      {error && (
        <AppText variant="caption" color="#FF5252" style={styles.errorText}>
          {error}
        </AppText>
      )}
    </View>
  );
};

interface SearchBarProps extends TextInputProps {
  onClear?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ ...props }) => {
  return (
    <View style={[styles.searchContainer]}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        placeholderTextColor={theme.colors.textMuted}
        {...props}
      />
    </View>
  );
};
