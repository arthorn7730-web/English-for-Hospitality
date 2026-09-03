import { StyleSheet, Text, TextStyle } from 'react-native';
import { colors, fontFamilyBold } from '../theme';

export function SectionLabel({ children, style }: { children: React.ReactNode; style?: TextStyle }) {
  return <Text style={[styles.label, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    letterSpacing: 1.3,
    color: colors.neutral600,
    fontFamily: fontFamilyBold,
  },
});
