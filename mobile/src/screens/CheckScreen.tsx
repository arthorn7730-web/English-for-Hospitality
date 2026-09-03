import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackButton } from '../components/BackButton';
import { PillButton } from '../components/PillButton';
import { StickyFooter } from '../components/StickyFooter';
import { CRIT } from '../data';
import { colors, fontFamilyExtraBold, fontFamilyBold } from '../theme';

interface CheckScreenProps {
  ticks: boolean[];
  onBack: () => void;
  onToggle: (i: number) => void;
  onSummarize: () => void;
}

export function CheckScreen({ ticks, onBack, onToggle, onSummarize }: CheckScreenProps) {
  const tickedCount = ticks.filter(Boolean).length;

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <BackButton onPress={onBack} />
          <Text style={styles.title}>ติ๊กตามที่เห็น</Text>
        </View>
        <Text style={styles.subtitle}>ตกข้อไหนข้อหนึ่ง = Retest ภายใน 24 ชม.</Text>

        <View style={styles.list}>
          {CRIT.map((text, i) => {
            const on = ticks[i];
            return (
              <Pressable
                key={i}
                onPress={() => onToggle(i)}
                accessibilityRole="checkbox"
                accessibilityState={{ checked: on }}
                accessibilityLabel={text}
                style={[
                  styles.row,
                  {
                    backgroundColor: on ? colors.accent2_200 : colors.neutral100,
                    borderColor: on ? colors.accent2_400 : colors.neutral300,
                  },
                ]}
              >
                <View
                  style={[
                    styles.mark,
                    {
                      borderColor: on ? colors.accent2_500 : colors.neutral400,
                      backgroundColor: on ? colors.accent2_500 : 'transparent',
                    },
                  ]}
                >
                  {on && <Text style={styles.markGlyph}>✓</Text>}
                </View>
                <Text style={styles.rowTxt}>{text}</Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.exampleCard}>
          <Text style={styles.exampleKicker}>ตัวอย่างที่ถือว่าไม่ผ่าน</Text>
          <Text style={styles.exampleBody}>
            ให้เวลาลอย ๆ ว่า “ประมาณบ่ายโมง” แล้วไม่ตามต่อ ทำให้แขกต้องเดินกลับมาถามเอง
          </Text>
        </View>

        <View style={{ height: 110 }} />
      </ScrollView>

      <StickyFooter>
        <Text style={styles.footerCaption}>ติ๊กแล้ว {tickedCount} จาก {CRIT.length} ข้อ</Text>
        <PillButton label="สรุปผล" onPress={onSummarize} bg={colors.accent} color="#fff" />
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
  title: { fontSize: 19, color: colors.text, fontFamily: fontFamilyExtraBold },
  subtitle: { fontSize: 13.5, lineHeight: 22, color: colors.neutral600, paddingHorizontal: 20, paddingTop: 10 },
  list: { paddingHorizontal: 20, paddingTop: 16, gap: 9 },
  row: {
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 15,
    minHeight: 56,
    flexDirection: 'row',
    gap: 13,
    alignItems: 'flex-start',
  },
  mark: {
    width: 26,
    height: 26,
    borderRadius: 999,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  markGlyph: { color: '#fff', fontSize: 15, fontFamily: fontFamilyExtraBold },
  rowTxt: { flex: 1, fontSize: 15, lineHeight: 25, color: colors.text },
  exampleCard: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: colors.surface,
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  exampleKicker: { fontSize: 11.5, letterSpacing: 0.9, color: colors.accent700, fontFamily: fontFamilyBold },
  exampleBody: { fontSize: 14.5, lineHeight: 26, marginTop: 7, color: colors.neutral800 },
  footerCaption: { fontSize: 12.5, color: colors.neutral700, textAlign: 'center' },
});
