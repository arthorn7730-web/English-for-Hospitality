import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RolePill } from '../components/RolePill';
import { SectionLabel } from '../components/SectionLabel';
import { colors, fontFamilyBold, fontFamilyExtraBold } from '../theme';

export function StaffScreen({ onHome }: { onHome: () => void }) {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <RolePill label="พนักงาน ▾ · กลับไปมุมมอง Trainer" onPress={onHome} />
          <Text style={styles.name}>อารีย์ · แผนกต้อนรับ</Text>
          <Text style={styles.blurb}>
            มุมมองพนักงานเห็นเฉพาะผลของตัวเอง ไม่เห็นสคริปต์และ curveball ก่อนซ้อม
          </Text>
        </View>

        <View style={styles.cards}>
          <View style={styles.card}>
            <Text style={styles.cardKickerAccent}>นัดซ้อมซ้ำ · พฤหัส 10:00</Text>
            <Text style={styles.cardTitle}>FO-02 แขกมาถึงก่อนเวลา ห้องยังไม่พร้อม</Text>
            <Text style={styles.cardMeta}>กับ trainer คนเดิม (คุณเมย์)</Text>
          </View>
          <View style={[styles.card, styles.cardGreen]}>
            <Text style={styles.cardKickerGreen}>ผ่านแล้ว 5 เคส</Text>
            <Text style={styles.cardBodyGreen}>FO-01 · FO-05 · FO-06 · HK-02 · SC-06</Text>
          </View>
        </View>

        <View style={styles.section}>
          <SectionLabel>อ่านก่อนซ้อม · 2 นาที</SectionLabel>
          <View style={styles.readCard}>
            <Text style={styles.readEyebrow}>เส้นทางสายหัวหน้า · ตอนที่ 3</Text>
            <Text style={styles.readTitle}>“เข้าใจไหม?” เปลี่ยนเป็น “ลองทำให้ผมดู”</Text>
            <View style={styles.readQuote}>
              <Text style={styles.readQuoteTxt}>
                ทุกเคสไม่ผ่านด้วยการฟัง แต่ผ่านด้วยการแสดงให้ดูต่อหน้า trainer พร้อม curveball
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  scroll: { paddingBottom: 24 },
  header: { paddingHorizontal: 20, paddingTop: 22 },
  name: { fontSize: 23, marginTop: 18, color: colors.text, fontFamily: fontFamilyExtraBold },
  blurb: { fontSize: 13.5, lineHeight: 22, color: colors.neutral600, marginTop: 6 },
  cards: { paddingHorizontal: 20, paddingTop: 22, gap: 10 },
  card: {
    backgroundColor: colors.neutral100,
    borderWidth: 1,
    borderColor: colors.neutral300,
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  cardKickerAccent: { fontSize: 11.5, letterSpacing: 0.9, color: colors.accent700, fontFamily: fontFamilyBold },
  cardTitle: { fontSize: 16.5, lineHeight: 24, marginTop: 5, color: colors.text, fontFamily: fontFamilyBold },
  cardMeta: { fontSize: 12.5, color: colors.neutral600, marginTop: 4 },
  cardGreen: { backgroundColor: colors.accent2_200, borderColor: colors.accent2_300 },
  cardKickerGreen: { fontSize: 11.5, letterSpacing: 0.9, color: colors.accent2_700, fontFamily: fontFamilyBold },
  cardBodyGreen: { fontSize: 13.5, lineHeight: 22, color: colors.accent2_800, marginTop: 5 },
  section: { paddingHorizontal: 20, paddingTop: 26, paddingBottom: 24 },
  readCard: {
    marginTop: 12,
    backgroundColor: colors.neutral100,
    borderWidth: 1,
    borderColor: colors.neutral300,
    borderRadius: 20,
    padding: 18,
  },
  readEyebrow: { fontSize: 12, color: colors.neutral600 },
  readTitle: { fontSize: 18, lineHeight: 26, marginTop: 6, color: colors.text, fontFamily: fontFamilyBold },
  readQuote: {
    borderLeftWidth: 3,
    borderLeftColor: colors.accent2_400,
    paddingLeft: 14,
    marginTop: 14,
  },
  readQuoteTxt: { fontSize: 14.5, lineHeight: 25, color: colors.neutral800 },
});
