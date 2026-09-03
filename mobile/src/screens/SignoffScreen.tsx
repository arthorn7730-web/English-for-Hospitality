import * as Clipboard from 'expo-clipboard';
import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PillButton } from '../components/PillButton';
import { CRIT } from '../data';
import { colors, fontFamilyBold, fontFamilyExtraBold } from '../theme';
import { Verdict } from '../types';
import { addDays, formatClock, formatThaiShortDate, formatTime24 } from '../utils';

interface SignoffScreenProps {
  ticks: boolean[];
  verdict: Verdict;
  note: string;
  runElapsedMs: number | null;
  onHome: () => void;
}

export function SignoffScreen({ ticks, verdict, note, runElapsedMs, onHome }: SignoffScreenProps) {
  const [copied, setCopied] = useState(false);
  const pass = verdict === 'pass';
  const today = useMemo(() => new Date(), []);
  const failedItems = CRIT.filter((_, i) => !ticks[i]);
  const elapsedLabel = runElapsedMs != null ? formatClock(runElapsedMs) : '—';
  const retestDate = useMemo(() => addDays(today, 1), [today]);

  const summaryText = useMemo(() => {
    const lines = [
      'ISLAND OPS — สรุปผลซ้อม',
      `${formatThaiShortDate(today)} · trainer: เมย์ · แผนก FO`,
      'FO-02 แขกมาถึงก่อนเวลา ห้องยังไม่พร้อม',
      `พนักงาน: อารีย์ · เวลา ${elapsedLabel}`,
      pass ? 'ผล: PASS — ผ่านครบทุกเกณฑ์' : `ผล: RETEST — ตก ${failedItems.length} ข้อ`,
    ];
    if (!pass && failedItems.length) lines.push(`ข้อที่ตก: ${failedItems.join(' · ')}`);
    if (!pass) lines.push(`นัดซ้อมซ้ำ: ${formatThaiShortDate(retestDate)} ${formatTime24(retestDate)} · trainer เมย์`);
    if (note.trim()) lines.push(`โน้ตถึงพนักงาน: ${note.trim()}`);
    return lines.join('\n');
  }, [today, elapsedLabel, pass, failedItems, retestDate, note]);

  async function handleCopy() {
    await Clipboard.setStringAsync(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.top}>
          <View style={styles.badge}>
            <Text style={styles.badgeTxt}>✓</Text>
          </View>
          <Text style={styles.title}>บันทึกลง Follow-Up Log แล้ว</Text>
          <Text style={styles.subtitle}>คัดลอกไปวางใน LINE กลุ่มหัวหน้ากะได้ทันที</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>ISLAND OPS — สรุปผลซ้อม</Text>
          <Text style={styles.cardMeta}>{formatThaiShortDate(today)} · trainer: เมย์ · แผนก FO</Text>
          <View style={styles.divider} />
          <Text style={styles.cardLine}>
            <Text style={styles.bold}>FO-02</Text> แขกมาถึงก่อนเวลา ห้องยังไม่พร้อม
          </Text>
          <Text style={styles.cardLine}>พนักงาน: อารีย์ · เวลา {elapsedLabel}</Text>
          <Text style={[styles.cardLine, styles.resultLine, { color: pass ? colors.accent2_700 : colors.accent700 }]}>
            {pass ? 'ผล: PASS — ผ่านครบทุกเกณฑ์' : `ผล: RETEST — ตก ${failedItems.length} ข้อ`}
          </Text>
          {!pass && failedItems.length > 0 && (
            <Text style={styles.cardLineMuted}>ข้อที่ตก: {failedItems.join(' · ')}</Text>
          )}
          {!pass && (
            <Text style={styles.cardLine}>
              นัดซ้อมซ้ำ: {formatThaiShortDate(retestDate)} {formatTime24(retestDate)} · trainer เมย์
            </Text>
          )}
        </View>

        <View style={styles.actions}>
          <PillButton
            label={copied ? 'คัดลอกแล้ว ✓' : 'คัดลอกสรุป'}
            onPress={handleCopy}
            bg={colors.accent}
            color="#fff"
            fontSize={16.5}
          />
          <PillButton
            label="กลับหน้าแรก"
            onPress={onHome}
            bg="transparent"
            color={colors.neutral700}
            borderColor={colors.neutral400}
            borderWidth={1}
            fontSize={16}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  scroll: { paddingBottom: 24 },
  top: { paddingHorizontal: 24, paddingTop: 24, alignItems: 'center' },
  badge: {
    width: 64,
    height: 64,
    borderRadius: 999,
    backgroundColor: colors.accent2_200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeTxt: { fontSize: 28, color: colors.accent2_700, fontFamily: fontFamilyExtraBold },
  title: { fontSize: 22, lineHeight: 31, marginTop: 14, color: colors.text, textAlign: 'center', fontFamily: fontFamilyExtraBold },
  subtitle: { fontSize: 13.5, lineHeight: 23, marginTop: 6, color: colors.neutral600, textAlign: 'center' },
  card: {
    marginHorizontal: 20,
    marginTop: 22,
    backgroundColor: colors.neutral100,
    borderWidth: 1,
    borderColor: colors.neutral300,
    borderRadius: 22,
    padding: 18,
  },
  cardTitle: { fontSize: 14.5, color: colors.text, fontFamily: fontFamilyExtraBold },
  cardMeta: { fontSize: 14.5, color: colors.neutral700, marginTop: 2 },
  divider: { height: 1, backgroundColor: colors.neutral300, marginVertical: 12 },
  cardLine: { fontSize: 14.5, lineHeight: 26, color: colors.text },
  cardLineMuted: { fontSize: 14.5, lineHeight: 26, color: colors.neutral700 },
  bold: { fontFamily: fontFamilyBold },
  resultLine: { fontFamily: fontFamilyBold },
  actions: { paddingHorizontal: 20, paddingTop: 18, gap: 10 },
});
