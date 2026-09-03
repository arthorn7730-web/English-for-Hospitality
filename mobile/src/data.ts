// Content transcribed from the FO-02 drill authored in
// project/Island Ops Drills.dc.html (variant 1a) — the only case in the
// design bundle with a full script + pass criteria. Other cases in the
// library only carry a title/state, same as in the source mock.
import { Department, DrillCase, ScriptLine } from './types';

export const SCRIPT: ScriptLine[] = [
  {
    th: 'ห้องกำลังจัดอยู่ครับ ผมขอเวลาถึง 12:30 น. และจะโทรแจ้งคุณทันทีที่พร้อม',
    en: "Your room is being prepared. I need until 12:30 and I'll call you the moment it's ready.",
    note: 'เช็ก HK status จริงก่อนให้คำตอบ ห้ามเดาเวลา',
  },
  {
    th: 'ระหว่างนี้ผมเก็บกระเป๋าให้ และเชิญรับเครื่องดื่มต้อนรับที่ริมสระได้เลยครับ',
    en: "In the meantime I'll store your luggage — please enjoy a welcome drink by the pool.",
    note: 'เสนอทางเลือกระหว่างรออย่างน้อย 2 อย่าง',
  },
  {
    th: 'ถ้าต้องการเปลี่ยนชุด ผมมีห้องน้ำสำหรับแขกให้ใช้ได้ครับ',
    en: "If you'd like to change, we have a guest shower room available.",
    note: 'บันทึกเบอร์แขก และโทรตามจริงเมื่อห้องพร้อม',
  },
];

export const CURVEBALL_TEXT =
  'trainer เล่นเป็นแขกที่เหนื่อยและเริ่มหงุดหงิด — ขึ้นเสียงถามว่าต้องรอถึงบ่ายจริงหรือ';

export const CRIT: string[] = [
  'ไม่พูดคำว่า “ไม่รู้” หรือ “แล้วแต่แม่บ้าน”',
  'ให้เวลาที่ระบุชัดเจน ไม่ใช่ “สักครู่นะคะ”',
  'เสนอทางเลือกอย่างน้อย 2 อย่าง',
  'จดเบอร์แขก และยืนยันว่าจะโทรกลับ',
  'แจ้ง HK จริงต่อหน้า trainer',
];

export const CASES: DrillCase[] = [
  { code: 'FO-01', th: 'Check-in ปกติ ห้องพร้อม', en: 'Standard check-in, room ready', dept: 'FO', state: 'ผ่าน' },
  { code: 'FO-02', th: 'แขกมาถึงก่อนเวลา ห้องยังไม่พร้อม', en: 'Early arrival, room not ready', dept: 'FO', state: 'Retest' },
  { code: 'FO-03', th: 'Key card ใช้ไม่ได้ / ประตูไม่เปิด', en: 'Key card failure', dept: 'FO', state: 'ยังไม่ซ้อม' },
  { code: 'FB-02', th: 'แขกแพ้อาหาร / ข้อจำกัดทางศาสนา', en: 'Food allergy or dietary restriction', dept: 'FB', state: 'Retest' },
  { code: 'HK-02', th: 'เข้าห้องขณะแขกอยู่ / ป้าย DND', en: 'Entering an occupied room and DND', dept: 'HK', state: 'ผ่าน' },
  { code: 'SC-01', th: 'บุคคลภายนอกขอขึ้นไปหาแขก', en: 'Visitor asking to go up to a guest room', dept: 'SC', state: 'ยังไม่ซ้อม' },
  { code: 'IS-03', th: 'แขกบาดเจ็บ / เหตุฉุกเฉินทางการแพทย์', en: 'Guest injury or medical emergency', dept: 'IS', state: 'ยังไม่ซ้อม' },
];

export const DEPTS: Department[] = [
  { id: 'all', label: 'ทั้งหมด' },
  { id: 'FO', label: 'ต้อนรับ' },
  { id: 'FB', label: 'F&B' },
  { id: 'HK', label: 'แม่บ้าน' },
  { id: 'SC', label: 'Security' },
  { id: 'IS', label: 'เกาะ' },
];

export const ACTIVE_CASE = CASES.find((c) => c.code === 'FO-02')!;
