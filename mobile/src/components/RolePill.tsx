import { Pressable, StyleSheet, Text } from 'react-native';
import { colors, fontFamilySemiBold } from '../theme';

export function RolePill({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [styles.btn, pressed && styles.pressed]}
    >
      <Text style={styles.txt}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    minHeight: 44,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.neutral300,
    backgroundColor: colors.neutral100,
    paddingHorizontal: 14,
    paddingVertical: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  pressed: { backgroundColor: colors.neutral200 },
  txt: { fontSize: 12, color: colors.neutral700, fontFamily: fontFamilySemiBold },
});
