import { Pressable, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { fontFamilyBold } from '../theme';

interface PillButtonProps {
  label: string;
  onPress: () => void;
  bg: string;
  color: string;
  borderColor?: string;
  borderWidth?: number;
  fontSize?: number;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function PillButton({
  label,
  onPress,
  bg,
  color,
  borderColor,
  borderWidth = 0,
  fontSize = 17,
  style,
  textStyle,
}: PillButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [
        styles.base,
        { backgroundColor: bg, borderColor: borderColor ?? 'transparent', borderWidth },
        pressed && styles.pressed,
        style,
      ]}
    >
      <Text style={[styles.txt, { color, fontSize }, textStyle]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 56,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  pressed: { opacity: 0.85 },
  txt: { fontFamily: fontFamilyBold },
});
