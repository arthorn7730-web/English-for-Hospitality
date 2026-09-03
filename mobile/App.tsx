import {
  NotoSansThai_400Regular,
  NotoSansThai_500Medium,
  NotoSansThai_600SemiBold,
  NotoSansThai_700Bold,
  NotoSansThai_800ExtraBold,
  useFonts,
} from '@expo-google-fonts/noto-sans-thai';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BriefScreen } from './src/screens/BriefScreen';
import { CheckScreen } from './src/screens/CheckScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { LibraryScreen } from './src/screens/LibraryScreen';
import { RunScreen } from './src/screens/RunScreen';
import { SignoffScreen } from './src/screens/SignoffScreen';
import { StaffScreen } from './src/screens/StaffScreen';
import { VerdictScreen } from './src/screens/VerdictScreen';
import { useDrillState } from './src/hooks/useDrillState';
import { colors } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    NotoSansThai_400Regular,
    NotoSansThai_500Medium,
    NotoSansThai_600SemiBold,
    NotoSansThai_700Bold,
    NotoSansThai_800ExtraBold,
  });

  const {
    state,
    goHome,
    goStaff,
    goLibrary,
    setDept,
    openCase,
    backToBrief,
    startRun,
    backToRun,
    toggleCurve,
    nextLine,
    toggleCriterion,
    toVerdict,
    setVerdict,
    setNote,
    toSignoff,
  } = useDrillState();

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.bg }}>
        <ActivityIndicator color={colors.accent} />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      {state.screen === 'home' && (
        <HomeScreen onStaff={goStaff} onOpenCase={openCase} onLibrary={goLibrary} />
      )}
      {state.screen === 'staff' && <StaffScreen onHome={goHome} />}
      {state.screen === 'library' && (
        <LibraryScreen dept={state.dept} onHome={goHome} onSelectDept={setDept} onOpenCase={openCase} />
      )}
      {state.screen === 'brief' && <BriefScreen onHome={goHome} onStartRun={startRun} />}
      {state.screen === 'run' && (
        <RunScreen
          line={state.line}
          curve={state.curve}
          runStartedAt={state.runStartedAt}
          onBack={backToBrief}
          onToggleCurve={toggleCurve}
          onNextLine={nextLine}
        />
      )}
      {state.screen === 'check' && (
        <CheckScreen
          ticks={state.ticks}
          onBack={backToRun}
          onToggle={toggleCriterion}
          onSummarize={toVerdict}
        />
      )}
      {state.screen === 'verdict' && (
        <VerdictScreen
          ticks={state.ticks}
          verdict={state.verdict}
          note={state.note}
          runElapsedMs={state.runElapsedMs}
          onSetVerdict={setVerdict}
          onSetNote={setNote}
          onSave={toSignoff}
        />
      )}
      {state.screen === 'signoff' && (
        <SignoffScreen
          ticks={state.ticks}
          verdict={state.verdict}
          note={state.note}
          runElapsedMs={state.runElapsedMs}
          onHome={goHome}
        />
      )}
    </SafeAreaProvider>
  );
}
