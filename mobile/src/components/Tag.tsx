import { StyleSheet, Text, View } from 'react-native';
import { fontFamilySemiBold } from '../theme';

export function Tag({ label, bg, color }: { label: string; bg: string; color: string }) {
  return (
    <View style={[styles.wrap, { backgroundColor: bg }]}>
      <Text style={[styles.txt, { color }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { borderRadius: 999, paddingVertical: 3, paddingHorizontal: 10 },
  txt: { fontSize: 11, fontFamily: fontFamilySemiBold },
});
