import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackButton } from '../components/BackButton';
import { CASES, DEPTS } from '../data';
import { colors, fontFamilyBold, fontFamilyExtraBold, fontFamilySemiBold, monoFont } from '../theme';
import { CaseState } from '../types';

function stateColor(state: CaseState): string {
  if (state === 'ผ่าน') return colors.accent2_500;
  if (state === 'Retest') return colors.accent;
  return colors.neutral400;
}

interface LibraryScreenProps {
  dept: string;
  onHome: () => void;
  onSelectDept: (id: string) => void;
  onOpenCase: () => void;
}

export function LibraryScreen({ dept, onHome, onSelectDept, onOpenCase }: LibraryScreenProps) {
  const cases = dept === 'all' ? CASES : CASES.filter((c) => c.dept === dept);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <BackButton onPress={onHome} />
        <Text style={styles.title}>คลังเคส</Text>
      </View>

      <FlatList
        horizontal
        data={DEPTS}
        keyExtractor={(d) => d.id}
        showsHorizontalScrollIndicator={false}
        style={styles.deptRow}
        contentContainerStyle={styles.deptRowContent}
        renderItem={({ item }) => {
          const selected = dept === item.id;
          return (
            <Pressable
              onPress={() => onSelectDept(item.id)}
              accessibilityRole="button"
              accessibilityState={{ selected }}
              accessibilityLabel={item.label}
              style={[
                styles.deptChip,
                { backgroundColor: selected ? colors.chipSelected : colors.neutral100 },
              ]}
            >
              <Text style={[styles.deptChipTxt, { color: selected ? colors.bg : colors.neutral700 }]}>
                {item.label}
              </Text>
            </Pressable>
          );
        }}
      />

      <ScrollView contentContainerStyle={styles.list}>
        {cases.map((c) => (
          <Pressable
            key={c.code}
            onPress={onOpenCase}
            style={({ pressed }) => [
              styles.caseCard,
              { borderLeftColor: stateColor(c.state) },
              pressed && styles.pressedCard,
            ]}
          >
            <Text style={styles.caseCode}>{c.code}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.caseTh}>{c.th}</Text>
              <Text style={styles.caseEn}>{c.en}</Text>
            </View>
            <Text style={styles.caseState}>{c.state}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  title: { fontSize: 19, color: colors.text, fontFamily: fontFamilyExtraBold },
  deptRow: { flexGrow: 0, marginTop: 16 },
  deptRowContent: { paddingHorizontal: 20, gap: 8 },
  deptChip: {
    borderWidth: 1,
    borderColor: colors.neutral300,
    borderRadius: 999,
    paddingHorizontal: 15,
    paddingVertical: 9,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deptChipTxt: { fontSize: 13, fontFamily: fontFamilySemiBold },
  list: { paddingHorizontal: 20, paddingTop: 14, paddingBottom: 24, gap: 9 },
  caseCard: {
    backgroundColor: colors.neutral100,
    borderWidth: 1,
    borderColor: colors.neutral300,
    borderLeftWidth: 6,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  pressedCard: { opacity: 0.85 },
  caseCode: { fontSize: 11, color: colors.neutral600, fontFamily: monoFont, fontWeight: '700', paddingTop: 3, minWidth: 44 },
  caseTh: { fontSize: 15, lineHeight: 22, color: colors.text, fontFamily: fontFamilyBold },
  caseEn: { fontSize: 12, lineHeight: 17, color: colors.neutral600, marginTop: 2 },
  caseState: { fontSize: 11, color: colors.neutral700, fontFamily: fontFamilySemiBold, paddingTop: 3 },
});
