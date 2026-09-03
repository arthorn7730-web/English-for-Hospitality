import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PillButton } from '../components/PillButton';
import { RolePill } from '../components/RolePill';
import { SectionLabel } from '../components/SectionLabel';
import { StickyFooter } from '../components/StickyFooter';
import { Tag } from '../components/Tag';
import { colors, fontFamilyBold, fontFamilyExtraBold, fontFamilySemiBold, monoFont, shadow } from '../theme';

interface HomeScreenProps {
  onStaff: () => void;
  onOpenCase: () => void;
  onLibrary: () => void;
}

export function HomeScreen({ onStaff, onOpenCase, onLibrary }: HomeScreenProps) {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.kicker}>ISLAND OPS · เช้าวันพฤหัส</Text>
            <Text style={styles.greeting}>สวัสดีครับ คุณเมย์</Text>
          </View>
          <RolePill label="Trainer ▾" onPress={onStaff} />
        </View>

        <View style={styles.heroCard}>
          <View style={styles.heroTopRow}>
            <Text style={styles.heroKicker}>ความพร้อมทีม FO</Text>
            <Text style={styles.heroCaseCount}>8 เคส</Text>
          </View>
          <View style={styles.heroPctRow}>
            <Text style={styles.heroPct}>
              62<Text style={styles.heroPctSign}>%</Text>
            </Text>
            <Text style={styles.heroSummary}>ผ่านแล้ว 5 · ต้องซ้อมซ้ำ 2 · ยังไม่ซ้อม 1</Text>
          </View>
          <View style={styles.heroBar}>
            <View style={[styles.heroBarSeg, { width: '62%', backgroundColor: colors.accent2_400 }]} />
            <View style={[styles.heroBarSeg, { width: '25%', backgroundColor: colors.accent400 }]} />
          </View>
        </View>

        <View style={styles.section}>
          <SectionLabel>ค้างอยู่ · ต้องซ้อมซ้ำวันนี้</SectionLabel>

          <Pressable
            onPress={onOpenCase}
            style={({ pressed }) => [styles.pendingCard, shadow.sm, pressed && styles.pressedCard, { marginTop: 12 }]}
          >
            <Text style={styles.pendingCode}>FO-02</Text>
            <View style={styles.pendingBody}>
              <Text style={styles.pendingTitle}>แขกมาถึงก่อนเวลา ห้องยังไม่พร้อม</Text>
              <Text style={styles.pendingMeta}>อารีย์ · ตก 1 ข้อเมื่อวาน · ครบกำหนดภายใน 24 ชม.</Text>
              <View style={styles.pendingTags}>
                <Tag label="Retest" bg={colors.accent200} color={colors.accent700} />
                <Tag label="Readiness" bg={colors.accent2_200} color={colors.accent2_700} />
              </View>
            </View>
          </Pressable>

          <Pressable
            onPress={onOpenCase}
            style={({ pressed }) => [styles.pendingCard, pressed && styles.pressedCard, { marginTop: 10 }]}
          >
            <Text style={styles.pendingCode}>FB-02</Text>
            <View style={styles.pendingBody}>
              <Text style={styles.pendingTitle}>แขกแพ้อาหาร / ข้อจำกัดทางศาสนา</Text>
              <Text style={styles.pendingMeta}>นัท · ตก curveball · ครบกำหนดพรุ่งนี้</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.section}>
          <SectionLabel>ยังไม่เคยซ้อม</SectionLabel>
          <Pressable
            onPress={onLibrary}
            style={({ pressed }) => [styles.unpracticedBtn, pressed && styles.pressedCard, { marginTop: 12 }]}
          >
            <Text style={styles.unpracticedTxt}>SC-01 · IS-03 · KT-02 — เปิดคลังเคสทั้ง 34 เคส →</Text>
          </Pressable>
        </View>

        <View style={{ height: 90 }} />
      </ScrollView>

      <StickyFooter>
        <PillButton label="เริ่มซ้อมเคสถัดไป" onPress={onOpenCase} bg={colors.accent} color="#fff" />
      </StickyFooter>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  scroll: { paddingBottom: 20 },
  headerRow: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  kicker: { fontSize: 11, letterSpacing: 1.7, color: colors.neutral600, fontFamily: fontFamilyBold },
  greeting: { fontSize: 23, marginTop: 4, color: colors.text, fontFamily: fontFamilyExtraBold },
  heroCard: {
    marginHorizontal: 20,
    marginTop: 14,
    backgroundColor: colors.neutral900,
    borderRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 18,
  },
  heroTopRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' },
  heroKicker: { fontSize: 12, letterSpacing: 1.1, color: colors.accent2_400, fontFamily: fontFamilyBold },
  heroCaseCount: { fontSize: 12, color: colors.neutral400 },
  heroPctRow: { flexDirection: 'row', alignItems: 'baseline', gap: 8, marginTop: 8 },
  heroPct: { fontSize: 44, lineHeight: 46, color: colors.neutral100, fontFamily: fontFamilyExtraBold },
  heroPctSign: { fontSize: 20 },
  heroSummary: { fontSize: 12.5, lineHeight: 19, color: colors.accent2_300, flex: 1 },
  heroBar: {
    flexDirection: 'row',
    height: 9,
    borderRadius: 999,
    overflow: 'hidden',
    marginTop: 14,
    backgroundColor: 'rgba(245,234,216,0.18)',
  },
  heroBarSeg: { height: '100%' },
  section: { paddingHorizontal: 20, paddingTop: 26 },
  pendingCard: {
    backgroundColor: colors.neutral100,
    borderWidth: 1,
    borderColor: colors.neutral300,
    borderLeftWidth: 6,
    borderLeftColor: colors.accent,
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 16,
    flexDirection: 'row',
    gap: 14,
  },
  pressedCard: { opacity: 0.85 },
  pendingCode: { fontSize: 11.5, color: colors.accent700, fontFamily: monoFont, fontWeight: '700', paddingTop: 3 },
  pendingBody: { flex: 1 },
  pendingTitle: { fontSize: 16.5, lineHeight: 24, color: colors.text, fontFamily: fontFamilyBold },
  pendingMeta: { fontSize: 12.5, lineHeight: 18, color: colors.neutral600, marginTop: 3 },
  pendingTags: { flexDirection: 'row', gap: 6, marginTop: 10 },
  unpracticedBtn: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.neutral400,
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 15,
  },
  unpracticedTxt: { fontSize: 14, lineHeight: 22, color: colors.neutral700, fontFamily: fontFamilySemiBold },
});
