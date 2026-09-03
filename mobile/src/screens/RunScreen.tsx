import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackButton } from '../components/BackButton';
import { PillButton } from '../components/PillButton';
import { SectionLabel } from '../components/SectionLabel';
import { StickyFooter } from '../components/StickyFooter';
import { CURVEBALL_TEXT, SCRIPT } from '../data';
import { useElapsed } from '../hooks/useElapsed';
import { colors, fontFamilyBold, fontFamilySemiBold, monoFont } from '../theme';
import { formatClock } from '../utils';

interface RunScreenProps {
  line: number;
  curve: boolean;
  runStartedAt: number | null;
  onBack: () => void;
  onToggleCurve: () => void;
  onNextLine: () => void;
}

export function RunScreen({ line, curve, runStartedAt, onBack, onToggleCurve, onNextLine }: RunScreenProps) {
  const elapsedMs = useElapsed(runStartedAt);
  const current = SCRIPT[line];
  const isLast = line === SCRIPT.length - 1;

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <BackButton onPress={onBack} />
          <Text style={styles.clock}>{formatClock(elapsedMs)}</Text>
          <Text style={styles.stepLabel}>สคริปต์ {line + 1}/{SCRIPT.length}</Text>
        </View>

        <View style={styles.pipsRow}>
          {SCRIPT.map((_, i) => (
            <View key={i} style={[styles.pip, { backgroundColor: i <= line ? colors.accent : colors.neutral300 }]} />
          ))}
        </View>

        <View style={styles.section}>
          <SectionLabel>พนักงานต้องพูด</SectionLabel>
          <View style={styles.scriptCard}>
            <Text style={styles.scriptTh}>{current.th}</Text>
            <Text style={styles.scriptEn}>{current.en}</Text>
          </View>
          <View style={styles.note}>
            <Text style={styles.noteTxt}>{current.note}</Text>
          </View>
        </View>

        {curve && (
          <View style={styles.curveball}>
            <Text style={styles.curveballKicker}>CURVEBALL · โยนเดี๋ยวนี้</Text>
            <Text style={styles.curveballTxt}>{CURVEBALL_TEXT}</Text>
          </View>
        )}

        <View style={{ height: 100 }} />
      </ScrollView>

      <StickyFooter tight>
        <PillButton
          label="curve"
          onPress={onToggleCurve}
          bg="transparent"
          color={colors.accent700}
          borderColor={colors.accent}
          borderWidth={1}
          fontSize={14}
          style={{ flex: 0, minWidth: 56, paddingHorizontal: 18 }}
        />
        <PillButton
          label={isLast ? 'ไปติ๊กเกณฑ์' : 'ถัดไป'}
          onPress={onNextLine}
          bg={colors.neutral900}
          color={colors.bg}
          style={{ flex: 1 }}
        />
      </StickyFooter>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  scroll: { paddingBottom: 20 },
  header: {
    paddingHorizontal: 20,
    paddingTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  clock: { fontSize: 15, color: colors.accent700, fontFamily: monoFont, fontWeight: '700' },
  stepLabel: { fontSize: 12.5, color: colors.neutral600, fontFamily: fontFamilySemiBold },
  pipsRow: { flexDirection: 'row', gap: 5, paddingHorizontal: 20, paddingTop: 14 },
  pip: { flex: 1, height: 5, borderRadius: 999 },
  section: { paddingHorizontal: 20, paddingTop: 22 },
  scriptCard: {
    marginTop: 12,
    backgroundColor: colors.neutral100,
    borderWidth: 1,
    borderColor: colors.neutral300,
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 22,
    shadowColor: '#2e2b25',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  scriptTh: { fontSize: 20, lineHeight: 34, color: colors.text, fontFamily: fontFamilyBold },
  scriptEn: { fontSize: 14, lineHeight: 23, color: colors.neutral600, marginTop: 12 },
  note: { borderLeftWidth: 3, borderLeftColor: colors.accent2_400, paddingLeft: 14, marginTop: 14 },
  noteTxt: { fontSize: 14, lineHeight: 25, color: colors.neutral800 },
  curveball: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: colors.accent900,
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  curveballKicker: { fontSize: 11.5, letterSpacing: 0.9, color: colors.accent400, fontFamily: fontFamilyBold },
  curveballTxt: { fontSize: 17, lineHeight: 28, marginTop: 8, color: colors.accent200, fontFamily: fontFamilyBold },
});
