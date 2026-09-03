import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackButton } from '../components/BackButton';
import { PillButton } from '../components/PillButton';
import { SectionLabel } from '../components/SectionLabel';
import { StickyFooter } from '../components/StickyFooter';
import { colors, fontFamilyBold, fontFamilyExtraBold, fontFamilySemiBold, monoFont } from '../theme';

interface BriefScreenProps {
  onHome: () => void;
  onStartRun: () => void;
}

export function BriefScreen({ onHome, onStartRun }: BriefScreenProps) {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <BackButton onPress={onHome} />
          <Text style={styles.headerCode}>FO-02 · Readiness</Text>
        </View>

        <View style={styles.titleBlock}>
          <Text style={styles.title}>แขกมาถึงก่อนเวลา ห้องยังไม่พร้อม</Text>
          <Text style={styles.titleEn}>Early arrival, room not ready</Text>
        </View>

        <View style={styles.setupCard}>
          <Text style={styles.setupKicker}>จัดฉาก · trainer อ่านคนเดียว</Text>
          <Text style={styles.setupBody}>
            แขกมาถึง 10:30 น. check-in 14:00 ห้องยังไม่ clean และวันนั้น occupancy 100% trainer เล่นเป็นแขกที่เหนื่อยและเริ่มหงุดหงิด
          </Text>
        </View>

        <View style={styles.section}>
          <SectionLabel>กติกา</SectionLabel>
          <Text style={styles.rulesBody}>
            ให้พนักงานเล่นจริงตั้งแต่ต้นจนจบ ห้าม trainer แทรกกลางทาง · โยน curveball อย่างน้อย 1 อย่างเสมอ · ติ๊กเกณฑ์ตามที่เห็น ไม่ใช่ตามที่คิดว่าเขารู้
          </Text>
        </View>

        <View style={styles.section}>
          <SectionLabel>ใครซ้อม</SectionLabel>
          <View style={styles.whoRow}>
            <View style={[styles.whoChip, styles.whoChipSelected]}>
              <Text style={styles.whoTxtSelected}>อารีย์ · FO ✓</Text>
            </View>
            <View style={styles.whoChip}>
              <Text style={styles.whoTxt}>นัท</Text>
            </View>
            <View style={styles.whoChip}>
              <Text style={styles.whoTxt}>ก้อง</Text>
            </View>
          </View>
        </View>

        <View style={{ height: 90 }} />
      </ScrollView>

      <StickyFooter>
        <PillButton label="เริ่มจับเวลา · ซ้อม" onPress={onStartRun} bg={colors.accent} color="#fff" />
      </StickyFooter>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  scroll: { paddingBottom: 20 },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerCode: { fontSize: 12, color: colors.accent700, fontFamily: monoFont, fontWeight: '700' },
  titleBlock: { paddingHorizontal: 20, paddingTop: 16 },
  title: { fontSize: 24, lineHeight: 34, color: colors.text, fontFamily: fontFamilyExtraBold },
  titleEn: { fontSize: 13, color: colors.neutral600, marginTop: 5 },
  setupCard: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.neutral400,
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  setupKicker: { fontSize: 11.5, letterSpacing: 0.9, color: colors.accent700, fontFamily: fontFamilyBold },
  setupBody: { fontSize: 15, lineHeight: 27, marginTop: 8, color: colors.text },
  section: { paddingHorizontal: 20, paddingTop: 22 },
  rulesBody: { fontSize: 14.5, lineHeight: 27, marginTop: 10, color: colors.neutral800 },
  whoRow: { flexDirection: 'row', gap: 8, flexWrap: 'wrap', marginTop: 10 },
  whoChip: {
    backgroundColor: colors.neutral100,
    borderWidth: 1,
    borderColor: colors.neutral300,
    borderRadius: 999,
    paddingHorizontal: 15,
    paddingVertical: 9,
  },
  whoChipSelected: { backgroundColor: colors.neutral900, borderColor: colors.neutral900 },
  whoTxt: { fontSize: 13.5, color: colors.neutral700 },
  whoTxtSelected: { fontSize: 13.5, color: colors.neutral100, fontFamily: fontFamilySemiBold },
});
