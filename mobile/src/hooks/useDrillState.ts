import { useCallback, useState } from 'react';
import { CRIT, SCRIPT } from '../data';
import { Screen, Verdict } from '../types';

export interface DrillState {
  screen: Screen;
  dept: string;
  line: number;
  curve: boolean;
  ticks: boolean[];
  verdict: Verdict;
  note: string;
  runStartedAt: number | null;
  runElapsedMs: number | null;
}

const initialState: DrillState = {
  screen: 'home',
  dept: 'all',
  line: 0,
  curve: false,
  ticks: CRIT.map(() => false),
  verdict: 'retest',
  note: '',
  runStartedAt: null,
  runElapsedMs: null,
};

export function useDrillState() {
  const [state, setState] = useState<DrillState>(initialState);

  const goHome = useCallback(() => setState((s) => ({ ...s, screen: 'home' })), []);
  const goStaff = useCallback(() => setState((s) => ({ ...s, screen: 'staff' })), []);
  const goLibrary = useCallback(() => setState((s) => ({ ...s, screen: 'library' })), []);

  const setDept = useCallback(
    (dept: string) => setState((s) => ({ ...s, dept })),
    [],
  );

  /** Opens the brief for a case, clearing any progress left over from a previous drill. */
  const openCase = useCallback(
    () =>
      setState((s) => ({
        ...s,
        screen: 'brief',
        line: 0,
        curve: false,
        ticks: CRIT.map(() => false),
        verdict: 'retest',
        note: '',
        runStartedAt: null,
        runElapsedMs: null,
      })),
    [],
  );

  const backToBrief = useCallback(() => setState((s) => ({ ...s, screen: 'brief' })), []);

  const startRun = useCallback(
    () =>
      setState((s) => ({
        ...s,
        screen: 'run',
        line: 0,
        curve: false,
        runStartedAt: Date.now(),
      })),
    [],
  );

  const backToRun = useCallback(() => setState((s) => ({ ...s, screen: 'run' })), []);

  const toggleCurve = useCallback(
    () => setState((s) => ({ ...s, curve: !s.curve })),
    [],
  );

  const nextLine = useCallback(
    () =>
      setState((s) =>
        s.line < SCRIPT.length - 1
          ? { ...s, line: s.line + 1, curve: false }
          : { ...s, screen: 'check' },
      ),
    [],
  );

  const toggleCriterion = useCallback(
    (i: number) =>
      setState((s) => {
        const ticks = s.ticks.slice();
        ticks[i] = !ticks[i];
        return { ...s, ticks };
      }),
    [],
  );

  const toVerdict = useCallback(
    () =>
      setState((s) => {
        const ticked = s.ticks.filter(Boolean).length;
        const runElapsedMs = s.runStartedAt != null ? Date.now() - s.runStartedAt : null;
        return {
          ...s,
          screen: 'verdict',
          verdict: ticked === s.ticks.length ? 'pass' : 'retest',
          runElapsedMs,
        };
      }),
    [],
  );

  const setVerdict = useCallback(
    (verdict: Verdict) => setState((s) => ({ ...s, verdict })),
    [],
  );

  const setNote = useCallback((note: string) => setState((s) => ({ ...s, note })), []);

  const toSignoff = useCallback(() => setState((s) => ({ ...s, screen: 'signoff' })), []);

  return {
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
  };
}

export type DrillActions = Omit<ReturnType<typeof useDrillState>, 'state'>;
