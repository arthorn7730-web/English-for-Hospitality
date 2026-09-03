export type Screen =
  | 'home'
  | 'staff'
  | 'library'
  | 'brief'
  | 'run'
  | 'check'
  | 'verdict'
  | 'signoff';

export type Verdict = 'pass' | 'retest';

export interface ScriptLine {
  th: string;
  en: string;
  note: string;
}

export type CaseState = 'ผ่าน' | 'Retest' | 'ยังไม่ซ้อม';

export interface DrillCase {
  code: string;
  th: string;
  en: string;
  dept: string;
  state: CaseState;
}

export interface Department {
  id: string;
  label: string;
}
