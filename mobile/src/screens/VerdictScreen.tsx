import { KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PillButton } from '../components/PillButton';
import { SectionLabel } from '../components/SectionLabel';
import { StickyFooter } from '../components/StickyFooter';
import { CRIT } from '../data';
import { colors, fontFamilyExtraBold, monoFont } from '../theme';
import { Verdict } from '../types';
import { formatClockLong } from '../utils';

interface VerdictScreenProps {
  ticks: boolean[];
  verdict: Verdict;
  note: string;
  runElapsedMs: number | null;
  onSetVerdict: (v: Verdict) => void;
  onSetNote: (note: string) => void;
  onSave: () => void;
}

export function VerdictScreen({ ticks, verdict, note, runElapsedMs, onSetVerdict, onSetNote, onSave }: VerdictScreenProps) {
  const ticked = ticks.filter(Boolean).length;
  const pass = verdict === 'pass';
  const failedCount = CRIT.length - ticked;

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.header}>
            <Text style={styles.headerCode}>
              FO-02 · อารีย์ · {runElapsedMs != null ? formatClockLong(runElapsedMs) : '—'}
            </Text>
            <Text style={styles.title}>
              {pass ? 'ผ่าน — ทำได้ครบทุกเกณฑ์' : `ตก ${failedCount} ข้อ = Retest`}
            </Text>
            <Text style={styles.body}>
              {pass
                ? 'บันทึกผลและแจ้งในบรีฟเช้า ไม่ต้องนัดซ้อมซ้ำ'
                : 'กติกาเดียวกันทุกเคส: ตกข้อไหนข้อหนึ่งต้องซ้อมซ้ำภายใน 24 ชม. กับ trainer คนเดิม'}
            </Text>
          </View>

          <View style={styles.choices}>
            <Pressable
              onPress={() => onSetVerdict('pass')}
              style={[
                styles.choice,
                {
                  backgroundColor: pass ? colors.accent2_200 : colors.neutral100,
                  borderColor: pass ? colors.accent2_500 : colors.neutral300,
                },
              ]}
            >
              <Text style={styles.choicePassTitle}>ผ่าน · Pass</Text>
              <Text style={styles.choicePassBody}>ทำได้ครบทุกเกณฑ์ต่อหน้า trainer</Text>
            </Pressable>
            <Pressable
              onPress={() => onSetVerdict('retest')}
              style={[
                styles.choice,
                {
                  backgroundColor: pass ? colors.neutral100 : colors.accent200,
                  borderColor: pass ? colors.neutral300 : colors.accent,
                },
              ]}
            >
              <Text style={styles.choiceRetestTitle}>ต้องซ้อมซ้ำ · Retest</Text>
              <Text style={styles.choiceRetestBody}>นัดใหม่ภายใน 24 ชม. กับ trainer คนเดิม</Text>
            </Pressable>
          </View>

          <View style={styles.section}>
            <SectionLabel>โน้ตให้พนักงาน · ไม่บังคับ</SectionLabel>
            <TextInput
              value={note}
              onChangeText={onSetNote}
              placeholder="ให้เวลาเป็นนาทีที่ทำได้จริง แล้วโทรกลับเองเมื่อห้องพร้อม"
              placeholderTextColor={colors.neutral500}
              multiline
              style={styles.noteInput}
            />
          </View>

          <View style={{ height: 90 }} />
        </ScrollView>

        <StickyFooter>
          <PillButton label="บันทึกและสร้างสรุป" onPress={onSave} bg={colors.neutral900} color={colors.bg} />
        </StickyFooter>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  scroll: { paddingBottom: 20 },
  header: { paddingHorizontal: 20, paddingTop: 22 },
  headerCode: { fontSize: 12, color: colors.accent700, fontFamily: monoFont, fontWeight: '700' },
  title: { fontSize: 25, lineHeight: 34, marginTop: 10, color: colors.text, fontFamily: fontFamilyExtraBold },
  body: { fontSize: 14.5, lineHeight: 26, marginTop: 8, color: colors.neutral800 },
  choices: { paddingHorizontal: 20, paddingTop: 22, gap: 10 },
  choice: {
    borderWidth: 2,
    borderRadius: 22,
    padding: 18,
    minHeight: 56,
  },
  choicePassTitle: { fontSize: 18, color: colors.accent2_800, fontFamily: fontFamilyExtraBold },
  choicePassBody: { fontSize: 13, lineHeight: 21, marginTop: 4, color: colors.accent2_700 },
  choiceRetestTitle: { fontSize: 18, color: colors.accent700, fontFamily: fontFamilyExtraBold },
  choiceRetestBody: { fontSize: 13, lineHeight: 21, marginTop: 4, color: colors.accent600 },
  section: { paddingHorizontal: 20, paddingTop: 22 },
  noteInput: {
    marginTop: 10,
    backgroundColor: colors.neutral100,
    borderWidth: 1,
    borderColor: colors.neutral300,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 15,
    fontSize: 14.5,
    lineHeight: 24,
    color: colors.text,
    minHeight: 56,
  },
});
