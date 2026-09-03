import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../theme';

/** Bottom action bar pinned over the scroll content, fading in from transparent. */
export function StickyFooter({ children, tight = false }: { children: ReactNode; tight?: boolean }) {
  return (
    <View style={styles.wrap} pointerEvents="box-none">
      <LinearGradient
        colors={['rgba(245,234,216,0)', colors.bg, colors.bg]}
        locations={[0, tight ? 0.32 : 0.38, 1]}
        style={StyleSheet.absoluteFill}
        pointerEvents="none"
      />
      <View style={[styles.inner, tight && styles.innerTight]}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { position: 'absolute', left: 0, right: 0, bottom: 0 },
  inner: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 20, gap: 10 },
  innerTight: { paddingTop: 14, flexDirection: 'row' },
});
