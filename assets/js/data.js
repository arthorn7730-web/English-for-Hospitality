/* ==========================================================================
   English for Hospitality — Curriculum Data
   Native-teacher-designed content covering 5 hotel departments x 3 levels.
   ========================================================================== */

window.CURRICULUM = {
  departments: [
    // ============================================================ FRONT OFFICE
    {
      id: "front-office",
      icon: "🛎️",
      name: { en: "Front Office", th: "แผนกต้อนรับส่วนหน้า", zh: "前台部", ja: "フロントオフィス", ko: "프런트 오피스" },
      levels: [
        {
          id: "beginner",
          objectives: [
            { en: "Greet and welcome guests professionally", th: "ทักทายและต้อนรับแขกอย่างมืออาชีพ" },
            { en: "Complete a basic check-in conversation", th: "ทำบทสนทนาเช็คอินขั้นพื้นฐานได้" },
            { en: "Use key front office vocabulary correctly", th: "ใช้คำศัพท์แผนกต้อนรับที่สำคัญได้อย่างถูกต้อง" }
          ],
          vocabulary: [
            { word: "welcome", phonetic: "WEL-kuhm", meaning: { en: "to greet someone warmly", th: "ยินดีต้อนรับ", zh: "欢迎", ja: "ようこそ", ko: "환영합니다" } },
            { word: "reservation", phonetic: "rez-er-VAY-shun", meaning: { en: "a booking made in advance", th: "การจอง", zh: "预订", ja: "予約", ko: "예약" } },
            { word: "check-in", phonetic: "CHEK-in", meaning: { en: "registering your arrival at a hotel", th: "เช็คอิน", zh: "入住登记", ja: "チェックイン", ko: "체크인" } },
            { word: "room key", phonetic: "ROOM kee", meaning: { en: "a card that opens a guest room", th: "กุญแจห้อง", zh: "房间钥匙", ja: "ルームキー", ko: "객실 열쇠" } },
            { word: "passport", phonetic: "PASS-port", meaning: { en: "an official travel identity document", th: "หนังสือเดินทาง", zh: "护照", ja: "パスポート", ko: "여권" } },
            { word: "luggage", phonetic: "LUG-ij", meaning: { en: "bags and suitcases", th: "กระเป๋าเดินทาง", zh: "行李", ja: "荷物", ko: "짐" } }
          ],
          dialogue: [
            { speaker: "staff", en: "Good afternoon! Welcome to Birmingham Grand Hotel.", th: "สวัสดีค่ะ ยินดีต้อนรับสู่โรงแรมเบอร์มิงแฮม แกรนด์" },
            { speaker: "guest", en: "Hi, I have a reservation under the name Smith.", th: "สวัสดีค่ะ ฉันมีการจองในชื่อสมิธ" },
            { speaker: "staff", en: "One moment, please. May I see your passport?", th: "กรุณารอสักครู่ค่ะ ขอดูหนังสือเดินทางของท่านได้ไหมคะ" },
            { speaker: "guest", en: "Sure, here you go.", th: "ได้ค่ะ นี่ค่ะ" },
            { speaker: "staff", en: "Thank you. Here is your room key. Your room is on the fifth floor.", th: "ขอบคุณค่ะ นี่คือกุญแจห้องของท่าน ห้องอยู่ชั้นห้าค่ะ" },
            { speaker: "guest", en: "Thank you very much.", th: "ขอบคุณมากค่ะ" }
          ],
          preTest: [
            { q: { en: "What do you say to greet a guest arriving at the hotel?", th: "คุณจะพูดอะไรเพื่อทักทายแขกที่มาถึงโรงแรม" }, options: ["Welcome!", "Goodbye!", "Sorry!", "Wait!"], answer: 0 },
            { q: { en: "What is a \"reservation\"?", th: "\"Reservation\" คืออะไร" }, options: ["A booking made in advance", "A type of food", "A hotel room number", "A payment method"], answer: 0 },
            { q: { en: "What do guests show at check-in to prove identity?", th: "แขกต้องแสดงอะไรตอนเช็คอินเพื่อยืนยันตัวตน" }, options: ["Passport", "Umbrella", "Menu", "Towel"], answer: 0 },
            { q: { en: "What do you give a guest to open their room?", th: "คุณให้อะไรแขกเพื่อเปิดห้อง" }, options: ["Room key", "Bill", "Ticket", "Map"], answer: 0 }
          ],
          postTest: [
            { q: { en: "In the dialogue, what did the guest say when arriving?", th: "ในบทสนทนา แขกพูดอะไรตอนมาถึง" }, options: ["I have a reservation under the name Smith.", "I want to check out.", "Where is the bar?", "Can I get a taxi?"], answer: 0 },
            { q: { en: "What did the staff ask to see?", th: "พนักงานขอดูอะไร" }, options: ["Passport", "Ticket", "Menu", "Suitcase"], answer: 0 },
            { q: { en: "Which floor was the guest's room on?", th: "ห้องของแขกอยู่ชั้นไหน" }, options: ["Fifth floor", "First floor", "Third floor", "Tenth floor"], answer: 0 },
            { q: { en: "Complete: \"Here is your room ___.\"", th: "เติมคำ: \"Here is your room ___.\"" }, options: ["key", "bill", "menu", "ticket"], answer: 0 }
          ]
        },
        {
          id: "intermediate",
          objectives: [
            { en: "Handle a guest check-out and present a bill", th: "จัดการเช็คเอาท์และแจ้งบิลให้แขก" },
            { en: "Explain hotel charges and complimentary services", th: "อธิบายค่าใช้จ่ายและบริการฟรีของโรงแรม" },
            { en: "Offer upgrades and additional services politely", th: "เสนอการอัปเกรดและบริการเสริมอย่างสุภาพ" }
          ],
          vocabulary: [
            { word: "check-out", phonetic: "CHEK-owt", meaning: { en: "leaving the hotel and settling the bill", th: "เช็คเอาท์", zh: "退房", ja: "チェックアウト", ko: "체크아웃" } },
            { word: "invoice", phonetic: "IN-voys", meaning: { en: "a detailed bill of charges", th: "ใบแจ้งหนี้", zh: "发票", ja: "請求書", ko: "청구서" } },
            { word: "deposit", phonetic: "dih-PAH-zit", meaning: { en: "money paid in advance as security", th: "เงินมัดจำ", zh: "押金", ja: "保証金", ko: "보증금" } },
            { word: "wake-up call", phonetic: "WAYK-up kawl", meaning: { en: "a call to wake a guest at a set time", th: "บริการปลุก", zh: "叫醒服务", ja: "モーニングコール", ko: "모닝콜" } },
            { word: "upgrade", phonetic: "UP-grayd", meaning: { en: "moving a guest to a better room", th: "การอัปเกรด", zh: "升级", ja: "アップグレード", ko: "업그레이드" } },
            { word: "complimentary", phonetic: "kom-plih-MEN-tuh-ree", meaning: { en: "free of charge", th: "ฟรี ไม่มีค่าใช้จ่าย", zh: "免费赠送", ja: "無料サービス", ko: "무료 제공" } }
          ],
          dialogue: [
            { speaker: "guest", en: "Good morning, I'd like to check out, please.", th: "สวัสดีค่ะ ฉันต้องการเช็คเอาท์ค่ะ" },
            { speaker: "staff", en: "Certainly. May I have your room number?", th: "ได้ค่ะ ขอทราบหมายเลขห้องด้วยค่ะ" },
            { speaker: "guest", en: "Room 512.", th: "ห้อง 512 ค่ะ" },
            { speaker: "staff", en: "Thank you. Here is your invoice. Would you like a late check-out or an upgrade next time?", th: "ขอบคุณค่ะ นี่คือใบแจ้งหนี้ของท่าน ครั้งหน้าท่านสนใจเช็คเอาท์ล่าช้าหรืออัปเกรดห้องพักไหมคะ" },
            { speaker: "guest", en: "Actually, is breakfast complimentary?", th: "จริงๆ แล้ว อาหารเช้าฟรีไหมคะ" },
            { speaker: "staff", en: "Yes, breakfast was included in your rate.", th: "ค่ะ อาหารเช้ารวมอยู่ในราคาห้องพักแล้วค่ะ" }
          ],
          preTest: [
            { q: { en: "What is \"check-out\"?", th: "\"Check-out\" คืออะไร" }, options: ["Leaving the hotel and settling the bill", "Arriving at the hotel", "Ordering food", "Booking a room"], answer: 0 },
            { q: { en: "What is an \"invoice\"?", th: "\"Invoice\" คืออะไร" }, options: ["A detailed bill", "A room key", "A passport", "A menu"], answer: 0 },
            { q: { en: "What is a \"deposit\"?", th: "\"Deposit\" คืออะไร" }, options: ["Money paid in advance as security", "A free gift", "A hotel department", "A type of room"], answer: 0 },
            { q: { en: "What does \"complimentary\" mean?", th: "\"Complimentary\" หมายความว่าอะไร" }, options: ["Free of charge", "Very expensive", "Late", "Broken"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What did the guest ask about?", th: "แขกถามเรื่องอะไร" }, options: ["Whether breakfast was complimentary", "The Wi-Fi password", "The swimming pool hours", "The gym location"], answer: 0 },
            { q: { en: "What did staff give the guest at check-out?", th: "พนักงานให้อะไรแขกตอนเช็คเอาท์" }, options: ["An invoice", "A room key", "A map", "A menu"], answer: 0 },
            { q: { en: "What two things did the staff offer for next time?", th: "พนักงานเสนออะไรสองอย่างสำหรับครั้งหน้า" }, options: ["Late check-out or an upgrade", "A free dinner", "A taxi", "A city tour"], answer: 0 },
            { q: { en: "Complete: \"Breakfast was ___ in your rate.\"", th: "เติมคำ: \"Breakfast was ___ in your rate.\"" }, options: ["included", "excluded", "broken", "late"], answer: 0 }
          ]
        },
        {
          id: "advanced",
          objectives: [
            { en: "Manage overbooking situations diplomatically", th: "จัดการสถานการณ์จองเกินอย่างมีชั้นเชิง" },
            { en: "Explain itemized bills and incidental charges", th: "อธิบายใบเสร็จแบบแยกรายการและค่าใช้จ่ายเพิ่มเติม" },
            { en: "Resolve guest complaints with professionalism", th: "แก้ไขข้อร้องเรียนของแขกอย่างมืออาชีพ" }
          ],
          vocabulary: [
            { word: "overbooking", phonetic: "OH-ver-BUK-ing", meaning: { en: "selling more rooms than are available", th: "การจองเกิน", zh: "超额预订", ja: "オーバーブッキング", ko: "초과 예약" } },
            { word: "itemized bill", phonetic: "EYE-tuh-myzd bil", meaning: { en: "a bill listing each charge separately", th: "ใบเสร็จแบบแยกรายการ", zh: "明细账单", ja: "明細付き請求書", ko: "항목별 청구서" } },
            { word: "late check-out", phonetic: "layt CHEK-owt", meaning: { en: "leaving later than the standard time", th: "เช็คเอาท์ล่าช้า", zh: "延迟退房", ja: "レイトチェックアウト", ko: "레이트 체크아웃" } },
            { word: "loyalty program", phonetic: "LOY-uhl-tee PROH-gram", meaning: { en: "a rewards program for repeat guests", th: "โปรแกรมสมาชิกสะสมแต้ม", zh: "忠诚度计划", ja: "ロイヤルティプログラム", ko: "로열티 프로그램" } },
            { word: "escort", phonetic: "ES-kort", meaning: { en: "to accompany someone somewhere", th: "นำทาง พาไปส่ง", zh: "陪同引导", ja: "案内する", ko: "안내하다" } },
            { word: "incidental charges", phonetic: "in-sih-DEN-tuhl CHAR-jiz", meaning: { en: "extra charges for additional services", th: "ค่าใช้จ่ายเพิ่มเติม", zh: "杂项费用", ja: "追加料金", ko: "부대 비용" } }
          ],
          dialogue: [
            { speaker: "staff", en: "I'm sorry, sir. Due to overbooking, we need to arrange an alternative room for you.", th: "ขออภัยค่ะท่าน เนื่องจากมีการจองเกิน เราต้องจัดห้องพักทางเลือกให้ท่าน" },
            { speaker: "guest", en: "That's disappointing. I'm a loyalty program member.", th: "น่าผิดหวังนะครับ ผมเป็นสมาชิกโปรแกรมสะสมแต้มด้วย" },
            { speaker: "staff", en: "I understand, and I apologize sincerely. We will upgrade you to a suite at no extra cost.", th: "เข้าใจค่ะ และต้องขออภัยอย่างจริงใจ เราจะอัปเกรดท่านเป็นห้องสวีทโดยไม่มีค่าใช้จ่ายเพิ่มเติม" },
            { speaker: "guest", en: "I appreciate that. What about the incidental charges from last night?", th: "ขอบคุณครับ แล้วค่าใช้จ่ายเพิ่มเติมจากเมื่อคืนล่ะครับ" },
            { speaker: "staff", en: "I will provide an itemized bill and waive the incidental charges as compensation.", th: "ดิฉันจะจัดใบเสร็จแบบแยกรายการและยกเว้นค่าใช้จ่ายเพิ่มเติมเพื่อชดเชยให้ค่ะ" },
            { speaker: "guest", en: "Thank you for resolving this so professionally.", th: "ขอบคุณที่จัดการเรื่องนี้อย่างมืออาชีพครับ" }
          ],
          preTest: [
            { q: { en: "What is \"overbooking\"?", th: "\"Overbooking\" คืออะไร" }, options: ["Selling more rooms than available", "Booking a room online", "Cancelling a reservation", "Upgrading a room"], answer: 0 },
            { q: { en: "What is an \"itemized bill\"?", th: "\"Itemized bill\" คืออะไร" }, options: ["A bill listing each charge separately", "A free bill", "A verbal bill", "A room key"], answer: 0 },
            { q: { en: "What are \"incidental charges\"?", th: "\"Incidental charges\" คืออะไร" }, options: ["Extra charges for additional services", "The room rate", "A discount", "A tax refund"], answer: 0 },
            { q: { en: "What is a \"loyalty program\"?", th: "\"Loyalty program\" คืออะไร" }, options: ["A rewards program for repeat guests", "A staff training course", "A type of insurance", "A cleaning schedule"], answer: 0 }
          ],
          postTest: [
            { q: { en: "Why did the staff apologize?", th: "ทำไมพนักงานถึงขอโทษ" }, options: ["Because of overbooking", "Because the room was dirty", "Because the guest lost their key", "Because dinner was late"], answer: 0 },
            { q: { en: "What did the hotel offer as compensation?", th: "โรงแรมเสนอชดเชยอะไร" }, options: ["A free suite upgrade and waived incidental charges", "A free flight", "A discount voucher", "Nothing"], answer: 0 },
            { q: { en: "What kind of bill did staff promise to provide?", th: "พนักงานสัญญาว่าจะให้บิลแบบไหน" }, options: ["An itemized bill", "A verbal estimate", "No bill at all", "A handwritten note"], answer: 0 },
            { q: { en: "What type of guest was mentioned?", th: "แขกในบทสนทนาเป็นสมาชิกประเภทไหน" }, options: ["A loyalty program member", "A new guest", "A staff member", "A tour guide"], answer: 0 }
          ]
        }
      ]
    },

    // ============================================================ HOUSEKEEPING
    {
      id: "housekeeping",
      icon: "🧹",
      name: { en: "Housekeeping", th: "แผนกแม่บ้าน", zh: "客房部", ja: "ハウスキーピング", ko: "하우스키핑" },
      levels: [
        {
          id: "beginner",
          objectives: [
            { en: "Ask permission to enter and clean a room", th: "ขออนุญาตเข้าไปทำความสะอาดห้อง" },
            { en: "Identify basic cleaning items and tools", th: "ระบุอุปกรณ์และเครื่องมือทำความสะอาดพื้นฐาน" },
            { en: "Respond politely to simple guest requests", th: "ตอบสนองคำของ่ายๆ ของแขกอย่างสุภาพ" }
          ],
          vocabulary: [
            { word: "clean", phonetic: "kleen", meaning: { en: "to remove dirt from something", th: "ทำความสะอาด", zh: "打扫", ja: "掃除する", ko: "청소하다" } },
            { word: "towel", phonetic: "TOW-uhl", meaning: { en: "cloth used for drying", th: "ผ้าเช็ดตัว", zh: "毛巾", ja: "タオル", ko: "수건" } },
            { word: "bed sheet", phonetic: "BED sheet", meaning: { en: "cloth that covers a mattress", th: "ผ้าปูที่นอน", zh: "床单", ja: "シーツ", ko: "침대 시트" } },
            { word: "vacuum", phonetic: "VAK-yoom", meaning: { en: "a machine that sucks up dust", th: "เครื่องดูดฝุ่น", zh: "吸尘器", ja: "掃除機", ko: "진공청소기" } },
            { word: "trash", phonetic: "trash", meaning: { en: "waste material", th: "ขยะ", zh: "垃圾", ja: "ゴミ", ko: "쓰레기" } },
            { word: "soap", phonetic: "sohp", meaning: { en: "a substance used for washing", th: "สบู่", zh: "肥皂", ja: "石鹸", ko: "비누" } }
          ],
          dialogue: [
            { speaker: "staff", en: "Housekeeping! May I clean your room now?", th: "แม่บ้านค่ะ ขออนุญาตทำความสะอาดห้องตอนนี้ได้ไหมคะ" },
            { speaker: "guest", en: "Yes, please come in.", th: "ได้ค่ะ เชิญเข้ามาได้เลย" },
            { speaker: "staff", en: "I'll change the towels and the bed sheets.", th: "ดิฉันจะเปลี่ยนผ้าเช็ดตัวและผ้าปูที่นอนให้ค่ะ" },
            { speaker: "guest", en: "Could I also get more soap, please?", th: "ขอสบู่เพิ่มด้วยได้ไหมคะ" },
            { speaker: "staff", en: "Of course, I'll bring some right away.", th: "ได้เลยค่ะ ดิฉันจะนำมาให้ทันที" },
            { speaker: "guest", en: "Thank you so much.", th: "ขอบคุณมากค่ะ" }
          ],
          preTest: [
            { q: { en: "What does a housekeeper use to clean floors?", th: "แม่บ้านใช้อะไรทำความสะอาดพื้น" }, options: ["Vacuum", "Menu", "Passport", "Key"], answer: 0 },
            { q: { en: "What do guests dry themselves with?", th: "แขกใช้อะไรเช็ดตัว" }, options: ["Towel", "Soap", "Trash bag", "Bed sheet"], answer: 0 },
            { q: { en: "What covers the bed?", th: "อะไรปูอยู่บนเตียง" }, options: ["Bed sheet", "Towel", "Soap", "Vacuum"], answer: 0 },
            { q: { en: "Where do you throw waste?", th: "คุณทิ้งของเสียที่ไหน" }, options: ["Trash", "Bed", "Bathtub", "Menu"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What did the staff offer to change?", th: "พนักงานเสนอเปลี่ยนอะไร" }, options: ["Towels and bed sheets", "The TV", "The furniture", "The windows"], answer: 0 },
            { q: { en: "What extra item did the guest request?", th: "แขกขอของเพิ่มอะไร" }, options: ["More soap", "More towels", "A new bed", "A vacuum"], answer: 0 },
            { q: { en: "Complete: \"May I ___ your room now?\"", th: "เติมคำ: \"May I ___ your room now?\"" }, options: ["clean", "break", "sell", "paint"], answer: 0 },
            { q: { en: "What did staff say they would do right away?", th: "พนักงานบอกว่าจะทำอะไรทันที" }, options: ["Bring more soap", "Call a taxi", "Serve dinner", "Fix the TV"], answer: 0 }
          ]
        },
        {
          id: "intermediate",
          objectives: [
            { en: "Arrange turndown service and manage timing", th: "จัดบริการจัดเตียงตอนเย็นและบริหารเวลา" },
            { en: "Report and resolve room issues like stains", th: "รายงานและแก้ไขปัญหาห้องพัก เช่น คราบสกปรก" },
            { en: "Restock amenities and describe hygiene practices", th: "เติมสิ่งอำนวยความสะดวกและอธิบายแนวปฏิบัติด้านสุขอนามัย" }
          ],
          vocabulary: [
            { word: "turndown service", phonetic: "TURN-down SUR-vis", meaning: { en: "preparing the room for the night", th: "บริการจัดเตียงตอนเย็น", zh: "夜床服务", ja: "ターンダウンサービス", ko: "턴다운 서비스" } },
            { word: "laundry", phonetic: "LAWN-dree", meaning: { en: "washing clothes and linens", th: "ซักรีด", zh: "洗衣", ja: "ランドリー", ko: "세탁" } },
            { word: "stain", phonetic: "stayn", meaning: { en: "a mark of dirt on fabric", th: "คราบสกปรก", zh: "污渍", ja: "染み", ko: "얼룩" } },
            { word: "amenities", phonetic: "uh-MEN-ih-teez", meaning: { en: "complimentary items provided for guests", th: "สิ่งอำนวยความสะดวก", zh: "洗漱用品", ja: "アメニティ", ko: "어메니티" } },
            { word: "disinfect", phonetic: "dis-in-FEKT", meaning: { en: "to clean using germ-killing products", th: "ฆ่าเชื้อ", zh: "消毒", ja: "消毒する", ko: "소독하다" } },
            { word: "restock", phonetic: "ree-STOK", meaning: { en: "to refill supplies", th: "เติมของ", zh: "补充库存", ja: "補充する", ko: "재입고하다" } }
          ],
          dialogue: [
            { speaker: "guest", en: "Excuse me, could you do the turndown service tonight?", th: "ขอโทษนะคะ คืนนี้ขอบริการจัดเตียงตอนเย็นได้ไหมคะ" },
            { speaker: "staff", en: "Of course. What time would you like it?", th: "ได้ค่ะ ท่านต้องการเวลาไหนคะ" },
            { speaker: "guest", en: "Around 8 PM, please. Also, there's a stain on the carpet.", th: "ประมาณสองทุ่มค่ะ แล้วก็มีคราบบนพรมด้วยค่ะ" },
            { speaker: "staff", en: "I'll send someone to disinfect and clean it before then.", th: "ดิฉันจะส่งพนักงานมาฆ่าเชื้อและทำความสะอาดก่อนเวลานั้นค่ะ" },
            { speaker: "guest", en: "Great, and could you restock the amenities too?", th: "เยี่ยมเลยค่ะ แล้วช่วยเติมสิ่งอำนวยความสะดวกด้วยได้ไหมคะ" },
            { speaker: "staff", en: "Certainly, I'll take care of everything.", th: "ได้ค่ะ ดิฉันจะจัดการให้ทั้งหมดเลยค่ะ" }
          ],
          preTest: [
            { q: { en: "What is \"turndown service\"?", th: "\"Turndown service\" คืออะไร" }, options: ["Preparing the room for the night", "Cleaning in the morning", "Checking guests out", "Serving breakfast"], answer: 0 },
            { q: { en: "What is \"laundry\"?", th: "\"Laundry\" คืออะไร" }, options: ["Washing clothes and linens", "Cooking food", "Cleaning windows", "Fixing electronics"], answer: 0 },
            { q: { en: "What is a \"stain\"?", th: "\"Stain\" คืออะไร" }, options: ["A mark of dirt on fabric", "A type of soap", "A cleaning tool", "A room type"], answer: 0 },
            { q: { en: "What are \"amenities\"?", th: "\"Amenities\" คืออะไร" }, options: ["Complimentary items provided for guests", "Staff uniforms", "Hotel bills", "Room numbers"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What time did the guest want turndown service?", th: "แขกต้องการบริการจัดเตียงตอนเย็นเวลาไหน" }, options: ["Around 8 PM", "Around 8 AM", "At noon", "At midnight"], answer: 0 },
            { q: { en: "What problem did the guest mention?", th: "แขกแจ้งปัญหาอะไร" }, options: ["A stain on the carpet", "A broken TV", "A leaking faucet", "A noisy neighbor"], answer: 0 },
            { q: { en: "What did staff promise to do about the stain?", th: "พนักงานสัญญาว่าจะทำอะไรกับคราบ" }, options: ["Disinfect and clean it", "Ignore it", "Replace the carpet", "Charge a fee"], answer: 0 },
            { q: { en: "What else did the guest ask to be restocked?", th: "แขกขอให้เติมอะไรอีก" }, options: ["Amenities", "Furniture", "Curtains", "Light bulbs"], answer: 0 }
          ]
        },
        {
          id: "advanced",
          objectives: [
            { en: "Conduct and report on room inspections", th: "ดำเนินการและรายงานผลการตรวจสอบห้องพัก" },
            { en: "Submit maintenance requests and manage inventory", th: "แจ้งคำขอซ่อมบำรุงและบริหารสินค้าคงคลัง" },
            { en: "Handle lost and found and safety incidents", th: "จัดการของหายและเหตุการณ์ด้านความปลอดภัย" }
          ],
          vocabulary: [
            { word: "inspection", phonetic: "in-SPEK-shun", meaning: { en: "a detailed check of a room's condition", th: "การตรวจสอบ", zh: "检查", ja: "検査", ko: "점검" } },
            { word: "maintenance request", phonetic: "MAYN-tuh-nuhns rih-KWEST", meaning: { en: "a request to repair something", th: "คำขอซ่อมบำรุง", zh: "维修请求", ja: "メンテナンス依頼", ko: "유지보수 요청" } },
            { word: "lost and found", phonetic: "lawst and fownd", meaning: { en: "a place for items guests leave behind", th: "ของหาย", zh: "失物招领", ja: "遺失物取扱所", ko: "분실물 보관소" } },
            { word: "biohazard", phonetic: "BY-oh-HAZ-erd", meaning: { en: "a dangerous biological substance", th: "วัตถุอันตรายทางชีวภาพ", zh: "生物危害物", ja: "生物学的危険物", ko: "생물학적 위험물" } },
            { word: "inventory", phonetic: "IN-vuhn-tor-ee", meaning: { en: "a list or stock of supplies", th: "บัญชีสินค้าคงคลัง", zh: "库存", ja: "在庫", ko: "재고" } },
            { word: "deep cleaning", phonetic: "deep KLEEN-ing", meaning: { en: "a thorough, intensive cleaning", th: "การทำความสะอาดแบบล้ำลึก", zh: "深度清洁", ja: "徹底清掃", ko: "심층 청소" } }
          ],
          dialogue: [
            { speaker: "staff", en: "We found an item during the room inspection. Please log it in lost and found.", th: "เราพบของชิ้นหนึ่งระหว่างตรวจสอบห้อง กรุณาบันทึกไว้ในของหายด้วย" },
            { speaker: "guest", en: "Understood. Also, the air conditioner needs a maintenance request.", th: "เข้าใจแล้วค่ะ นอกจากนี้แอร์ต้องแจ้งคำขอซ่อมบำรุงด้วยค่ะ" },
            { speaker: "staff", en: "Please submit it immediately, and check the inventory of cleaning supplies too.", th: "กรุณาส่งคำขอทันที และตรวจสอบบัญชีสินค้าคงคลังของอุปกรณ์ทำความสะอาดด้วย" },
            { speaker: "guest", en: "There was a small biohazard spill in room 302, I already handled it with proper protocol.", th: "มีของเสียอันตรายทางชีวภาพหกเล็กน้อยในห้อง 302 ดิฉันจัดการตามขั้นตอนที่ถูกต้องแล้วค่ะ" },
            { speaker: "staff", en: "Good work. Schedule that room for deep cleaning tomorrow.", th: "ทำได้ดีมาก จัดตารางทำความสะอาดแบบล้ำลึกสำหรับห้องนั้นพรุ่งนี้ด้วย" },
            { speaker: "guest", en: "Yes, I'll arrange it right away.", th: "ค่ะ ดิฉันจะจัดการทันทีเลยค่ะ" }
          ],
          preTest: [
            { q: { en: "What is an \"inspection\"?", th: "\"Inspection\" คืออะไร" }, options: ["A detailed check of the room's condition", "A guest complaint", "A cleaning product", "A billing process"], answer: 0 },
            { q: { en: "What is \"lost and found\"?", th: "\"Lost and found\" คืออะไร" }, options: ["A place for items guests leave behind", "A restaurant section", "A laundry service", "A type of amenity"], answer: 0 },
            { q: { en: "What is a \"biohazard\"?", th: "\"Biohazard\" คืออะไร" }, options: ["A dangerous biological substance", "A cleaning schedule", "A room upgrade", "A type of towel"], answer: 0 },
            { q: { en: "What is \"inventory\"?", th: "\"Inventory\" คืออะไร" }, options: ["A list or stock of supplies", "A guest's bill", "A staff schedule", "A repair request"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What did the supervisor ask the staff to log?", th: "หัวหน้าให้พนักงานบันทึกอะไร" }, options: ["An item found during inspection", "A guest complaint", "A broken light", "A missing key"], answer: 0 },
            { q: { en: "What needed a maintenance request?", th: "อะไรต้องแจ้งคำขอซ่อมบำรุง" }, options: ["The air conditioner", "The towels", "The soap", "The bed sheets"], answer: 0 },
            { q: { en: "What happened in room 302?", th: "เกิดอะไรขึ้นในห้อง 302" }, options: ["A small biohazard spill", "A fire", "A theft", "A flood"], answer: 0 },
            { q: { en: "What was scheduled for the next day?", th: "มีการจัดตารางอะไรสำหรับวันถัดไป" }, options: ["Deep cleaning", "A guest checkout", "A staff meeting", "A menu tasting"], answer: 0 }
          ]
        }
      ]
    },

    // ============================================================ FOOD & BEVERAGE
    {
      id: "fnb",
      icon: "🍽️",
      name: { en: "Food & Beverage", th: "แผนกอาหารและเครื่องดื่ม", zh: "餐饮部", ja: "料飲部門", ko: "식음료부" },
      levels: [
        {
          id: "beginner",
          objectives: [
            { en: "Present a menu and take a food order", th: "นำเสนอเมนูและรับออเดอร์อาหาร" },
            { en: "Serve drinks and respond to simple requests", th: "เสิร์ฟเครื่องดื่มและตอบสนองคำของ่ายๆ" },
            { en: "Present the bill at the end of a meal", th: "แจ้งบิลเมื่อสิ้นสุดมื้ออาหาร" }
          ],
          vocabulary: [
            { word: "menu", phonetic: "MEN-yoo", meaning: { en: "a list of food and drinks available", th: "เมนู", zh: "菜单", ja: "メニュー", ko: "메뉴" } },
            { word: "order", phonetic: "OR-der", meaning: { en: "to request food or drink", th: "สั่งอาหาร", zh: "点餐", ja: "注文する", ko: "주문하다" } },
            { word: "table", phonetic: "TAY-buhl", meaning: { en: "furniture where guests sit to eat", th: "โต๊ะ", zh: "桌子", ja: "テーブル", ko: "테이블" } },
            { word: "water", phonetic: "WAW-ter", meaning: { en: "a clear drink", th: "น้ำ", zh: "水", ja: "お水", ko: "물" } },
            { word: "bill", phonetic: "bil", meaning: { en: "the amount to be paid", th: "บิล ใบเช็ค", zh: "账单", ja: "会計", ko: "계산서" } },
            { word: "waiter", phonetic: "WAY-ter", meaning: { en: "a person who serves food", th: "พนักงานเสิร์ฟ", zh: "服务员", ja: "ウェイター", ko: "웨이터" } }
          ],
          dialogue: [
            { speaker: "staff", en: "Good evening! Here is the menu.", th: "สวัสดีตอนเย็นค่ะ นี่คือเมนูค่ะ" },
            { speaker: "guest", en: "Thank you. I'd like to order the grilled chicken, please.", th: "ขอบคุณค่ะ ฉันขอสั่งไก่ย่างค่ะ" },
            { speaker: "staff", en: "Excellent choice. Anything to drink?", th: "เลือกได้ดีมากค่ะ รับเครื่องดื่มอะไรไหมคะ" },
            { speaker: "guest", en: "Just water, please.", th: "ขอแค่น้ำเปล่าค่ะ" },
            { speaker: "staff", en: "Right away.", th: "รับทราบค่ะ" },
            { speaker: "guest", en: "Could we have the bill, please?", th: "ขอบิลด้วยค่ะ" }
          ],
          preTest: [
            { q: { en: "What do you give a guest to choose their food?", th: "คุณให้อะไรแขกเพื่อเลือกอาหาร" }, options: ["Menu", "Bill", "Key", "Towel"], answer: 0 },
            { q: { en: "What does a guest do to request food?", th: "แขกทำอะไรเพื่อขอสั่งอาหาร" }, options: ["Order", "Clean", "Check-in", "Escort"], answer: 0 },
            { q: { en: "What do you serve in a glass, clear and plain?", th: "คุณเสิร์ฟอะไรในแก้ว ใสและธรรมดา" }, options: ["Water", "Menu", "Soap", "Bill"], answer: 0 },
            { q: { en: "What do you give at the end of the meal to show cost?", th: "คุณให้อะไรตอนจบมื้ออาหารเพื่อแสดงราคา" }, options: ["Bill", "Passport", "Key", "Towel"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What did the guest order?", th: "แขกสั่งอะไร" }, options: ["Grilled chicken", "Steak", "Fish", "Pasta"], answer: 0 },
            { q: { en: "What drink did the guest choose?", th: "แขกเลือกเครื่องดื่มอะไร" }, options: ["Water", "Wine", "Coffee", "Juice"], answer: 0 },
            { q: { en: "What did the guest ask for at the end?", th: "แขกขออะไรตอนท้าย" }, options: ["The bill", "The menu", "A taxi", "A room key"], answer: 0 },
            { q: { en: "Complete: \"Here is the ___.\"", th: "เติมคำ: \"Here is the ___.\"" }, options: ["menu", "key", "towel", "map"], answer: 0 }
          ]
        },
        {
          id: "intermediate",
          objectives: [
            { en: "Recommend appetizers, mains, and desserts", th: "แนะนำอาหารเรียกน้ำย่อย จานหลัก และของหวาน" },
            { en: "Ask about food allergies professionally", th: "สอบถามเรื่องอาการแพ้อาหารอย่างมืออาชีพ" },
            { en: "Take a table reservation over the phone", th: "รับจองโต๊ะทางโทรศัพท์" }
          ],
          vocabulary: [
            { word: "appetizer", phonetic: "AP-uh-ty-zer", meaning: { en: "a small dish served before the main course", th: "อาหารเรียกน้ำย่อย", zh: "开胃菜", ja: "前菜", ko: "애피타이저" } },
            { word: "main course", phonetic: "mayn kors", meaning: { en: "the primary dish of the meal", th: "อาหารจานหลัก", zh: "主菜", ja: "メインコース", ko: "메인 요리" } },
            { word: "dessert", phonetic: "dih-ZURT", meaning: { en: "a sweet dish served after the meal", th: "ของหวาน", zh: "甜点", ja: "デザート", ko: "디저트" } },
            { word: "table reservation", phonetic: "TAY-buhl rez-er-VAY-shun", meaning: { en: "booking a table in advance", th: "การจองโต๊ะ", zh: "订座", ja: "テーブル予約", ko: "테이블 예약" } },
            { word: "allergy", phonetic: "AL-er-jee", meaning: { en: "a bad reaction to certain foods", th: "อาการแพ้อาหาร", zh: "过敏", ja: "アレルギー", ko: "알레르기" } },
            { word: "recommend", phonetic: "rek-uh-MEND", meaning: { en: "to suggest something good", th: "แนะนำ", zh: "推荐", ja: "おすすめする", ko: "추천하다" } }
          ],
          dialogue: [
            { speaker: "staff", en: "Would you like an appetizer before the main course?", th: "รับอาหารเรียกน้ำย่อยก่อนอาหารจานหลักไหมคะ" },
            { speaker: "guest", en: "Yes, what do you recommend?", th: "ค่ะ มีอะไรแนะนำไหมคะ" },
            { speaker: "staff", en: "Our tom yum soup is very popular. Do you have any food allergies?", th: "ต้มยำของเราได้รับความนิยมมากค่ะ ท่านมีอาการแพ้อาหารอะไรไหมคะ" },
            { speaker: "guest", en: "No allergies, that sounds great.", th: "ไม่มีค่ะ ฟังดูดีเลย" },
            { speaker: "staff", en: "And for dessert, we have mango sticky rice.", th: "สำหรับของหวาน เรามีข้าวเหนียวมะม่วงค่ะ" },
            { speaker: "guest", en: "Perfect, I'll have that too.", th: "เยี่ยมเลยค่ะ ขอสั่งอันนั้นด้วย" }
          ],
          preTest: [
            { q: { en: "What is an \"appetizer\"?", th: "\"Appetizer\" คืออะไร" }, options: ["A small dish served before the main course", "The final dish", "A drink", "A dessert"], answer: 0 },
            { q: { en: "What is the \"main course\"?", th: "\"Main course\" คืออะไร" }, options: ["The primary dish of the meal", "A drink", "A snack", "A dessert"], answer: 0 },
            { q: { en: "What should you always ask about for guest safety?", th: "คุณควรถามอะไรเสมอเพื่อความปลอดภัยของแขก" }, options: ["Food allergies", "Room number", "Passport", "Luggage"], answer: 0 },
            { q: { en: "What comes after the main course?", th: "อะไรมาหลังจากอาหารจานหลัก" }, options: ["Dessert", "Appetizer", "Reservation", "Menu"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What did the waiter recommend?", th: "พนักงานเสิร์ฟแนะนำอะไร" }, options: ["Tom yum soup", "Grilled chicken", "Steak", "Salad"], answer: 0 },
            { q: { en: "Did the guest have any allergies?", th: "แขกมีอาการแพ้อาหารไหม" }, options: ["No allergies", "Nut allergy", "Seafood allergy", "Dairy allergy"], answer: 0 },
            { q: { en: "What dessert was suggested?", th: "ของหวานที่แนะนำคืออะไร" }, options: ["Mango sticky rice", "Ice cream", "Cake", "Fruit salad"], answer: 0 },
            { q: { en: "Complete: \"Would you like an ___ before the main course?\"", th: "เติมคำ: \"Would you like an ___ before the main course?\"" }, options: ["appetizer", "invoice", "reservation", "upgrade"], answer: 0 }
          ]
        },
        {
          id: "advanced",
          objectives: [
            { en: "Recommend wine pairings for a meal", th: "แนะนำไวน์ที่เข้ากับมื้ออาหาร" },
            { en: "Manage dietary restrictions and substitutions", th: "จัดการข้อจำกัดด้านอาหารและการเปลี่ยนวัตถุดิบ" },
            { en: "Handle guest complaints in a restaurant setting", th: "จัดการข้อร้องเรียนของแขกในร้านอาหาร" }
          ],
          vocabulary: [
            { word: "wine pairing", phonetic: "wyn PAIR-ing", meaning: { en: "matching wine with food for the best taste", th: "การจับคู่ไวน์กับอาหาร", zh: "葡萄酒搭配", ja: "ワインペアリング", ko: "와인 페어링" } },
            { word: "dietary restriction", phonetic: "DY-uh-ter-ee rih-STRIK-shun", meaning: { en: "a limitation on what someone can eat", th: "ข้อจำกัดด้านอาหาร", zh: "饮食限制", ja: "食事制限", ko: "식이 제한" } },
            { word: "complaint", phonetic: "kuhm-PLAYNT", meaning: { en: "an expression of dissatisfaction", th: "ข้อร้องเรียน", zh: "投诉", ja: "苦情", ko: "불만" } },
            { word: "substitution", phonetic: "sub-stih-TOO-shun", meaning: { en: "replacing one ingredient with another", th: "การเปลี่ยนวัตถุดิบ", zh: "替换", ja: "代替", ko: "대체" } },
            { word: "garnish", phonetic: "GAR-nish", meaning: { en: "a decorative addition to a dish", th: "การตกแต่งจาน", zh: "装饰配菜", ja: "ガーニッシュ", ko: "가니시" } },
            { word: "sommelier", phonetic: "sum-uhl-YAY", meaning: { en: "a trained wine expert", th: "ผู้เชี่ยวชาญไวน์", zh: "侍酒师", ja: "ソムリエ", ko: "소믈리에" } }
          ],
          dialogue: [
            { speaker: "guest", en: "Could you suggest a wine pairing for the steak?", th: "ช่วยแนะนำไวน์ที่เข้ากับสเต็กได้ไหมคะ" },
            { speaker: "staff", en: "Certainly. A full-bodied red wine would complement it well. Do you have any dietary restrictions?", th: "ได้ค่ะ ไวน์แดงรสเข้มข้นจะเข้ากันได้ดี ท่านมีข้อจำกัดด้านอาหารไหมคะ" },
            { speaker: "guest", en: "I'm gluten-free.", th: "ฉันแพ้กลูเตนค่ะ" },
            { speaker: "staff", en: "Understood, I'll note a substitution for the sauce as well.", th: "เข้าใจค่ะ ดิฉันจะบันทึกการเปลี่ยนวัตถุดิบสำหรับซอสด้วยค่ะ" },
            { speaker: "guest", en: "I have a complaint about the garnish, it has nuts in it.", th: "ฉันมีข้อร้องเรียนเรื่องเครื่องตกแต่งจาน มันมีถั่วอยู่ด้วยค่ะ" },
            { speaker: "staff", en: "I apologize sincerely, I'll have the kitchen remake it immediately without nuts.", th: "ต้องขออภัยอย่างจริงใจค่ะ ดิฉันจะให้ครัวทำใหม่ทันทีโดยไม่ใส่ถั่ว" }
          ],
          preTest: [
            { q: { en: "What is \"wine pairing\"?", th: "\"Wine pairing\" คืออะไร" }, options: ["Matching wine with food for the best taste", "A type of dessert", "A cooking method", "A billing process"], answer: 0 },
            { q: { en: "What is a \"dietary restriction\"?", th: "\"Dietary restriction\" คืออะไร" }, options: ["A limitation on what someone can eat", "A type of wine", "A table type", "A menu size"], answer: 0 },
            { q: { en: "Who is a \"sommelier\"?", th: "\"Sommelier\" คือใคร" }, options: ["A wine expert", "A head chef", "A hotel manager", "A waiter"], answer: 0 },
            { q: { en: "What is a \"garnish\"?", th: "\"Garnish\" คืออะไร" }, options: ["A decorative addition to a dish", "The main ingredient", "A type of plate", "A cooking tool"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What did the guest ask for?", th: "แขกขออะไร" }, options: ["A wine pairing for the steak", "A dessert menu", "A children's menu", "A vegetarian dish"], answer: 0 },
            { q: { en: "What dietary restriction did the guest have?", th: "แขกมีข้อจำกัดด้านอาหารอะไร" }, options: ["Gluten-free", "Nut allergy", "Vegan", "Halal"], answer: 0 },
            { q: { en: "What was the guest's complaint about?", th: "แขกร้องเรียนเรื่องอะไร" }, options: ["Nuts in the garnish", "Cold food", "Slow service", "Wrong bill"], answer: 0 },
            { q: { en: "What did the staff promise?", th: "พนักงานสัญญาว่าจะทำอะไร" }, options: ["To remake the dish without nuts", "To give a discount", "To cancel the order", "To call the manager"], answer: 0 }
          ]
        }
      ]
    },

    // ============================================================ CONCIERGE & BELL SERVICE
    {
      id: "concierge",
      icon: "🧳",
      name: { en: "Concierge & Bell Service", th: "แผนกอำนวยความสะดวกและเบลล์บอย", zh: "礼宾及行李服务部", ja: "コンシェルジュ・ベルサービス", ko: "컨시어지 및 벨 서비스" },
      levels: [
        {
          id: "beginner",
          objectives: [
            { en: "Assist guests with luggage and directions", th: "ช่วยเหลือแขกเรื่องกระเป๋าเดินทางและเส้นทาง" },
            { en: "Give simple directions around the hotel", th: "บอกทางง่ายๆ ภายในโรงแรม" },
            { en: "Arrange a taxi for a guest", th: "จัดการเรียกแท็กซี่ให้แขก" }
          ],
          vocabulary: [
            { word: "luggage cart", phonetic: "LUG-ij kart", meaning: { en: "a trolley for carrying bags", th: "รถเข็นกระเป๋า", zh: "行李车", ja: "荷物カート", ko: "짐 카트" } },
            { word: "directions", phonetic: "dih-REK-shuns", meaning: { en: "instructions on how to get somewhere", th: "เส้นทาง", zh: "方向指引", ja: "道案内", ko: "길 안내" } },
            { word: "taxi", phonetic: "TAK-see", meaning: { en: "a car for hire with a driver", th: "แท็กซี่", zh: "出租车", ja: "タクシー", ko: "택시" } },
            { word: "map", phonetic: "map", meaning: { en: "a drawing showing an area", th: "แผนที่", zh: "地图", ja: "地図", ko: "지도" } },
            { word: "elevator", phonetic: "EL-uh-vay-ter", meaning: { en: "a lift that moves between floors", th: "ลิฟต์", zh: "电梯", ja: "エレベーター", ko: "엘리베이터" } },
            { word: "lobby", phonetic: "LOB-ee", meaning: { en: "the entrance hall of a hotel", th: "ล็อบบี้", zh: "大堂", ja: "ロビー", ko: "로비" } }
          ],
          dialogue: [
            { speaker: "guest", en: "Excuse me, could you help with my luggage?", th: "ขอโทษนะคะ ช่วยเรื่องกระเป๋าเดินทางได้ไหมคะ" },
            { speaker: "staff", en: "Of course, I'll bring a luggage cart right away.", th: "ได้เลยครับ ผมจะนำรถเข็นกระเป๋ามาให้ทันที" },
            { speaker: "guest", en: "Thank you. Also, where is the elevator?", th: "ขอบคุณค่ะ แล้วลิฟต์อยู่ตรงไหนคะ" },
            { speaker: "staff", en: "It's right past the lobby, on your left.", th: "อยู่เลยล็อบบี้ไปทางซ้ายมือครับ" },
            { speaker: "guest", en: "Could you call a taxi for me too?", th: "ช่วยเรียกแท็กซี่ให้ด้วยได้ไหมคะ" },
            { speaker: "staff", en: "Certainly, I'll arrange one immediately.", th: "ได้เลยครับ ผมจะจัดการให้ทันที" }
          ],
          preTest: [
            { q: { en: "What helps carry heavy bags?", th: "อะไรช่วยขนกระเป๋าหนักๆ" }, options: ["Luggage cart", "Menu", "Bill", "Key"], answer: 0 },
            { q: { en: "What do you ask for to find your way?", th: "คุณขออะไรเพื่อหาทาง" }, options: ["Directions", "Bill", "Menu", "Towel"], answer: 0 },
            { q: { en: "What vehicle takes guests around the city?", th: "พาหนะอะไรพาแขกไปรอบเมือง" }, options: ["Taxi", "Elevator", "Cart", "Bed"], answer: 0 },
            { q: { en: "Where do guests usually arrive first in a hotel?", th: "แขกมักมาถึงที่ไหนก่อนในโรงแรม" }, options: ["Lobby", "Bathroom", "Kitchen", "Laundry room"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What did the bellman bring?", th: "เบลล์บอยนำอะไรมา" }, options: ["A luggage cart", "A menu", "A bill", "A towel"], answer: 0 },
            { q: { en: "Where is the elevator located?", th: "ลิฟต์อยู่ตรงไหน" }, options: ["Past the lobby, on the left", "In the kitchen", "On the roof", "Outside the hotel"], answer: 0 },
            { q: { en: "What did the guest ask the staff to call?", th: "แขกขอให้พนักงานเรียกอะไร" }, options: ["A taxi", "A doctor", "A waiter", "A manager"], answer: 0 },
            { q: { en: "Complete: \"Could you help with my ___?\"", th: "เติมคำ: \"Could you help with my ___?\"" }, options: ["luggage", "bill", "menu", "key"], answer: 0 }
          ]
        },
        {
          id: "intermediate",
          objectives: [
            { en: "Recommend sightseeing spots and activities", th: "แนะนำสถานที่ท่องเที่ยวและกิจกรรม" },
            { en: "Arrange transportation and restaurant reservations", th: "จัดการเรื่องขนส่งและจองร้านอาหาร" },
            { en: "Prepare a simple travel itinerary", th: "จัดทำกำหนดการเดินทางอย่างง่าย" }
          ],
          vocabulary: [
            { word: "sightseeing", phonetic: "SYT-see-ing", meaning: { en: "visiting interesting places as a tourist", th: "การท่องเที่ยวชมสถานที่", zh: "观光", ja: "観光", ko: "관광" } },
            { word: "restaurant reservation", phonetic: "RES-tuh-rahnt rez-er-VAY-shun", meaning: { en: "booking a table at a restaurant", th: "การจองร้านอาหาร", zh: "餐厅预订", ja: "レストラン予約", ko: "레스토랑 예약" } },
            { word: "transportation", phonetic: "trans-por-TAY-shun", meaning: { en: "a way of traveling from place to place", th: "การขนส่ง", zh: "交通", ja: "交通手段", ko: "교통편" } },
            { word: "itinerary", phonetic: "eye-TIN-uh-rair-ee", meaning: { en: "a planned schedule for a trip", th: "กำหนดการเดินทาง", zh: "行程安排", ja: "旅程表", ko: "여행 일정" } },
            { word: "recommend", phonetic: "rek-uh-MEND", meaning: { en: "to suggest something good", th: "แนะนำ", zh: "推荐", ja: "おすすめする", ko: "추천하다" } },
            { word: "ticket", phonetic: "TIK-it", meaning: { en: "a pass for entry or travel", th: "ตั๋ว", zh: "票", ja: "チケット", ko: "티켓" } }
          ],
          dialogue: [
            { speaker: "guest", en: "We'd like to go sightseeing tomorrow. Any recommendations?", th: "พรุ่งนี้เราอยากไปเที่ยวชมสถานที่ มีอะไรแนะนำไหมคะ" },
            { speaker: "staff", en: "I recommend the old temple district. I can arrange transportation for you.", th: "ผมแนะนำย่านวัดเก่านะครับ ผมสามารถจัดการขนส่งให้ได้ครับ" },
            { speaker: "guest", en: "That would be great. Could you also book a restaurant reservation for dinner?", th: "ดีเลยค่ะ ช่วยจองร้านอาหารสำหรับมื้อเย็นด้วยได้ไหมคะ" },
            { speaker: "staff", en: "Absolutely. I'll prepare a full itinerary for your trip.", th: "ได้แน่นอนครับ ผมจะเตรียมกำหนดการเดินทางแบบเต็มให้ครับ" },
            { speaker: "guest", en: "Do we need tickets for the temple?", th: "เราต้องใช้ตั๋วเข้าวัดไหมคะ" },
            { speaker: "staff", en: "Yes, I'll arrange those for you as well.", th: "ครับ ผมจะจัดการเรื่องนั้นให้ด้วยครับ" }
          ],
          preTest: [
            { q: { en: "What is \"sightseeing\"?", th: "\"Sightseeing\" คืออะไร" }, options: ["Visiting interesting places as a tourist", "Cleaning a room", "Ordering food", "Checking in"], answer: 0 },
            { q: { en: "What is an \"itinerary\"?", th: "\"Itinerary\" คืออะไร" }, options: ["A planned schedule for a trip", "A hotel bill", "A room key", "A menu"], answer: 0 },
            { q: { en: "What do you need to enter some attractions?", th: "คุณต้องใช้อะไรเพื่อเข้าสถานที่ท่องเที่ยวบางแห่ง" }, options: ["Tickets", "Towels", "Soap", "Keys"], answer: 0 },
            { q: { en: "What does \"transportation\" mean?", th: "\"Transportation\" หมายความว่าอะไร" }, options: ["A way of traveling from one place to another", "A type of food", "A hotel room", "A cleaning tool"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What did the concierge recommend?", th: "คอนเซียร์จแนะนำอะไร" }, options: ["The old temple district", "The beach", "The shopping mall", "The airport"], answer: 0 },
            { q: { en: "What did the guest ask to be booked for dinner?", th: "แขกขอให้จองอะไรสำหรับมื้อเย็น" }, options: ["A restaurant reservation", "A spa appointment", "A taxi", "A tour guide"], answer: 0 },
            { q: { en: "What will the concierge prepare?", th: "คอนเซียร์จจะเตรียมอะไร" }, options: ["A full itinerary", "A menu", "An invoice", "A luggage cart"], answer: 0 },
            { q: { en: "What did the guest need for the temple?", th: "แขกต้องใช้อะไรสำหรับวัด" }, options: ["Tickets", "A map", "A passport", "A key"], answer: 0 }
          ]
        },
        {
          id: "advanced",
          objectives: [
            { en: "Arrange VIP and exclusive guest experiences", th: "จัดประสบการณ์พิเศษและ VIP ให้แขก" },
            { en: "Coordinate translators and emergency assistance", th: "ประสานงานล่ามและความช่วยเหลือฉุกเฉิน" },
            { en: "Deliver highly personalized guest service", th: "มอบบริการเฉพาะบุคคลระดับสูงให้แขก" }
          ],
          vocabulary: [
            { word: "exclusive access", phonetic: "ik-SKLOO-siv AK-ses", meaning: { en: "special entry not available to everyone", th: "สิทธิ์เข้าถึงพิเศษ", zh: "专属通道", ja: "特別アクセス", ko: "독점 이용권" } },
            { word: "VIP arrangement", phonetic: "vee-eye-pee uh-RAYNJ-ment", meaning: { en: "special services for important guests", th: "การจัดการสำหรับแขกวีไอพี", zh: "VIP接待安排", ja: "VIP対応手配", ko: "VIP 준비" } },
            { word: "translator", phonetic: "TRANS-lay-ter", meaning: { en: "someone who converts speech between languages", th: "ล่าม", zh: "翻译人员", ja: "通訳者", ko: "통역사" } },
            { word: "emergency assistance", phonetic: "ih-MUR-jen-see uh-SIS-tuhns", meaning: { en: "urgent help in a crisis", th: "ความช่วยเหลือฉุกเฉิน", zh: "紧急援助", ja: "緊急支援", ko: "긴급 지원" } },
            { word: "logistics", phonetic: "loh-JIS-tiks", meaning: { en: "the detailed coordination of an event", th: "การจัดการด้านโลจิสติกส์", zh: "后勤安排", ja: "ロジスティクス", ko: "물류 및 일정 조율" } },
            { word: "personalized service", phonetic: "PUR-suh-nuh-lyzd SUR-vis", meaning: { en: "service tailored to an individual guest", th: "บริการเฉพาะบุคคล", zh: "个性化服务", ja: "パーソナライズされたサービス", ko: "맞춤형 서비스" } }
          ],
          dialogue: [
            { speaker: "guest", en: "We're celebrating our anniversary. Is there any exclusive access available?", th: "เราจะฉลองครบรอบแต่งงาน มีสิทธิ์เข้าถึงพิเศษอะไรไหมคะ" },
            { speaker: "staff", en: "I can arrange a VIP arrangement, including a private dinner on the rooftop.", th: "ผมสามารถจัดการแบบ VIP ให้ได้ครับ รวมถึงมื้อค่ำส่วนตัวบนดาดฟ้าด้วย" },
            { speaker: "guest", en: "Wonderful. We'll also need a translator for a business meeting.", th: "เยี่ยมมากค่ะ เราต้องการล่ามสำหรับการประชุมธุรกิจด้วย" },
            { speaker: "staff", en: "I'll arrange one immediately, and provide emergency assistance contacts just in case.", th: "ผมจะจัดหาให้ทันทีครับ และให้ช่องทางติดต่อความช่วยเหลือฉุกเฉินไว้ด้วยเผื่อจำเป็น" },
            { speaker: "guest", en: "Thank you for handling all the logistics.", th: "ขอบคุณที่จัดการเรื่องโลจิสติกส์ทั้งหมดค่ะ" },
            { speaker: "staff", en: "It's my pleasure to provide personalized service for you.", th: "ยินดีให้บริการเฉพาะบุคคลแก่ท่านครับ" }
          ],
          preTest: [
            { q: { en: "What does \"exclusive access\" mean?", th: "\"Exclusive access\" หมายความว่าอะไร" }, options: ["Special entry not available to everyone", "A public event", "A discount code", "A regular service"], answer: 0 },
            { q: { en: "What is a \"VIP arrangement\"?", th: "\"VIP arrangement\" คืออะไร" }, options: ["Special services for important guests", "A standard room booking", "A staff meeting", "A cleaning schedule"], answer: 0 },
            { q: { en: "Who helps with language barriers?", th: "ใครช่วยเรื่องอุปสรรคทางภาษา" }, options: ["A translator", "A sommelier", "A bellman", "A housekeeper"], answer: 0 },
            { q: { en: "What is \"personalized service\"?", th: "\"Personalized service\" คืออะไร" }, options: ["Service tailored to an individual guest's needs", "A fixed hotel policy", "A group tour", "A standard menu"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What were the guests celebrating?", th: "แขกกำลังฉลองอะไร" }, options: ["Their anniversary", "A birthday", "A business deal", "A graduation"], answer: 0 },
            { q: { en: "What VIP arrangement was offered?", th: "มีการเสนอ VIP arrangement อะไร" }, options: ["A private dinner on the rooftop", "A free room", "A spa day", "A shopping trip"], answer: 0 },
            { q: { en: "What did the guests need for their business meeting?", th: "แขกต้องการอะไรสำหรับการประชุมธุรกิจ" }, options: ["A translator", "A taxi", "A menu", "A luggage cart"], answer: 0 },
            { q: { en: "What did the concierge provide in case of emergency?", th: "คอนเซียร์จให้อะไรในกรณีฉุกเฉิน" }, options: ["Emergency assistance contacts", "A first aid kit", "A doctor", "Nothing"], answer: 0 }
          ]
        }
      ]
    },

    // ============================================================ BAR & LOUNGE
    {
      id: "bar",
      icon: "🍸",
      name: { en: "Bar & Lounge", th: "แผนกบาร์และเลาจ์", zh: "酒吧部", ja: "バー・ラウンジ", ko: "바 & 라운지" },
      levels: [
        {
          id: "beginner",
          objectives: [
            { en: "Take a simple drink order at the bar", th: "รับออเดอร์เครื่องดื่มง่ายๆ ที่บาร์" },
            { en: "Describe basic bar items and drinks", th: "อธิบายอุปกรณ์และเครื่องดื่มพื้นฐานของบาร์" },
            { en: "Present a bar bill correctly", th: "แจ้งบิลบาร์อย่างถูกต้อง" }
          ],
          vocabulary: [
            { word: "drink", phonetic: "drink", meaning: { en: "a liquid you consume", th: "เครื่องดื่ม", zh: "饮料", ja: "飲み物", ko: "음료" } },
            { word: "ice", phonetic: "eyes", meaning: { en: "frozen water", th: "น้ำแข็ง", zh: "冰", ja: "氷", ko: "얼음" } },
            { word: "glass", phonetic: "glas", meaning: { en: "a container for drinks", th: "แก้ว", zh: "玻璃杯", ja: "グラス", ko: "잔" } },
            { word: "menu", phonetic: "MEN-yoo", meaning: { en: "a list of available drinks", th: "เมนู", zh: "菜单", ja: "メニュー", ko: "메뉴" } },
            { word: "cocktail", phonetic: "KOK-tayl", meaning: { en: "a mixed alcoholic drink", th: "ค็อกเทล", zh: "鸡尾酒", ja: "カクテル", ko: "칵테일" } },
            { word: "bill", phonetic: "bil", meaning: { en: "the amount to be paid", th: "บิล", zh: "账单", ja: "会計", ko: "계산서" } }
          ],
          dialogue: [
            { speaker: "staff", en: "Good evening! What would you like to drink?", th: "สวัสดีตอนเย็นค่ะ รับเครื่องดื่มอะไรดีคะ" },
            { speaker: "guest", en: "Can I see the menu, please?", th: "ขอดูเมนูได้ไหมคะ" },
            { speaker: "staff", en: "Here you go.", th: "นี่ค่ะ" },
            { speaker: "guest", en: "I'll have a cocktail with extra ice.", th: "ขอค็อกเทลใส่น้ำแข็งเพิ่มค่ะ" },
            { speaker: "staff", en: "Coming right up.", th: "รอสักครู่นะคะ" },
            { speaker: "guest", en: "Could I get the bill after this?", th: "ขอบิลหลังจากนี้ด้วยค่ะ" }
          ],
          preTest: [
            { q: { en: "What do you serve a drink in?", th: "คุณเสิร์ฟเครื่องดื่มในอะไร" }, options: ["Glass", "Plate", "Towel", "Bag"], answer: 0 },
            { q: { en: "What keeps a drink cold?", th: "อะไรทำให้เครื่องดื่มเย็น" }, options: ["Ice", "Soap", "Sugar", "Salt"], answer: 0 },
            { q: { en: "What is a \"cocktail\"?", th: "\"Cocktail\" คืออะไร" }, options: ["A mixed alcoholic drink", "A type of food", "A hot beverage", "A dessert"], answer: 0 },
            { q: { en: "What shows how much a guest must pay?", th: "อะไรแสดงจำนวนเงินที่แขกต้องจ่าย" }, options: ["Bill", "Menu", "Key", "Map"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What did the guest order?", th: "แขกสั่งอะไร" }, options: ["A cocktail with extra ice", "A glass of water", "Coffee", "Tea"], answer: 0 },
            { q: { en: "What did the guest ask to see first?", th: "แขกขอดูอะไรก่อน" }, options: ["The menu", "The bill", "The kitchen", "The lobby"], answer: 0 },
            { q: { en: "What did the guest request after the drink?", th: "แขกขออะไรหลังจากได้เครื่องดื่ม" }, options: ["The bill", "A taxi", "A refill", "A menu"], answer: 0 },
            { q: { en: "Complete: \"What would you like to ___?\"", th: "เติมคำ: \"What would you like to ___?\"" }, options: ["drink", "clean", "book", "pay"], answer: 0 }
          ]
        },
        {
          id: "intermediate",
          objectives: [
            { en: "Recommend cocktails and describe garnishes", th: "แนะนำค็อกเทลและอธิบายเครื่องตกแต่ง" },
            { en: "Explain happy hour promotions", th: "อธิบายโปรโมชั่นช่วงเวลาแฮปปี้อาวร์" },
            { en: "Manage a guest's tab and refills", th: "บริหารบัญชีค้างจ่ายและการเติมเครื่องดื่มของแขก" }
          ],
          vocabulary: [
            { word: "garnish", phonetic: "GAR-nish", meaning: { en: "a decorative addition like fruit or herbs", th: "เครื่องตกแต่งแก้ว", zh: "装饰物", ja: "ガーニッシュ", ko: "가니시" } },
            { word: "mixer", phonetic: "MIKS-er", meaning: { en: "a non-alcoholic drink mixed into a cocktail", th: "เครื่องดื่มผสม", zh: "调酒辅料", ja: "ミキサー", ko: "믹서" } },
            { word: "recommend", phonetic: "rek-uh-MEND", meaning: { en: "to suggest something good", th: "แนะนำ", zh: "推荐", ja: "おすすめする", ko: "추천하다" } },
            { word: "happy hour", phonetic: "HAP-ee OW-er", meaning: { en: "a time with discounted drinks", th: "ช่วงเวลาโปรโมชั่นเครื่องดื่ม", zh: "欢乐时光", ja: "ハッピーアワー", ko: "해피아워" } },
            { word: "tab", phonetic: "tab", meaning: { en: "an open account to pay later", th: "บัญชีค้างจ่าย", zh: "挂账", ja: "ツケ払い", ko: "외상 계산" } },
            { word: "refill", phonetic: "REE-fil", meaning: { en: "to fill a drink again", th: "เติมเครื่องดื่ม", zh: "续杯", ja: "おかわり", ko: "리필" } }
          ],
          dialogue: [
            { speaker: "guest", en: "What do you recommend from the menu?", th: "มีอะไรแนะนำจากเมนูไหมคะ" },
            { speaker: "staff", en: "Our mojito is popular, with a lime garnish and fresh mint mixer.", th: "โมฮิโตของเราได้รับความนิยม ตกแต่งด้วยมะนาวและผสมมินต์สดค่ะ" },
            { speaker: "guest", en: "Sounds great. Is it happy hour right now?", th: "ฟังดูดีเลยค่ะ ตอนนี้เป็นช่วงโปรโมชั่นไหมคะ" },
            { speaker: "staff", en: "Yes, until 8 PM. Would you like to open a tab?", th: "ใช่ค่ะ ถึงสองทุ่ม ท่านต้องการเปิดบัญชีค้างจ่ายไหมคะ" },
            { speaker: "guest", en: "Yes, please. Can I get a refill later?", th: "ค่ะ แล้วขอเติมเครื่องดื่มทีหลังได้ไหมคะ" },
            { speaker: "staff", en: "Of course, just let me know.", th: "ได้แน่นอนค่ะ แจ้งดิฉันได้เลยค่ะ" }
          ],
          preTest: [
            { q: { en: "What is a \"garnish\" on a drink?", th: "\"Garnish\" บนเครื่องดื่มคืออะไร" }, options: ["A decorative addition like fruit or herbs", "The alcohol itself", "The glass type", "The price"], answer: 0 },
            { q: { en: "What is \"happy hour\"?", th: "\"Happy hour\" คืออะไร" }, options: ["A time with discounted drinks", "A time for cleaning", "A staff break", "A closing time"], answer: 0 },
            { q: { en: "What is a \"tab\"?", th: "\"Tab\" คืออะไร" }, options: ["An open account to pay later", "A type of glass", "A menu item", "A discount"], answer: 0 },
            { q: { en: "What does \"refill\" mean?", th: "\"Refill\" หมายความว่าอะไร" }, options: ["To fill a drink again", "To empty a glass", "To clean a glass", "To order food"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What cocktail did the bartender recommend?", th: "บาร์เทนเดอร์แนะนำค็อกเทลอะไร" }, options: ["Mojito", "Martini", "Margarita", "Old fashioned"], answer: 0 },
            { q: { en: "Was it happy hour?", th: "ตอนนั้นเป็นช่วงแฮปปี้อาวร์ไหม" }, options: ["Yes, until 8 PM", "No", "Yes, all day", "Only on weekends"], answer: 0 },
            { q: { en: "What did the guest open?", th: "แขกเปิดอะไร" }, options: ["A tab", "A bill", "A menu", "An account online"], answer: 0 },
            { q: { en: "What did the guest ask for later?", th: "แขกขออะไรทีหลัง" }, options: ["A refill", "The bill", "A taxi", "A menu"], answer: 0 }
          ]
        },
        {
          id: "advanced",
          objectives: [
            { en: "Discuss mixology and premium spirits", th: "พูดคุยเรื่องศาสตร์การผสมเครื่องดื่มและสุราพรีเมียม" },
            { en: "Recommend a signature cocktail with confidence", th: "แนะนำค็อกเทลซิกเนเจอร์อย่างมั่นใจ" },
            { en: "Apply responsible alcohol service practices", th: "ปฏิบัติตามแนวทางการให้บริการแอลกอฮอล์อย่างมีความรับผิดชอบ" }
          ],
          vocabulary: [
            { word: "mixology", phonetic: "miks-OL-uh-jee", meaning: { en: "the art and skill of mixing cocktails", th: "ศาสตร์การผสมเครื่องดื่ม", zh: "调酒艺术", ja: "ミクソロジー", ko: "믹솔로지" } },
            { word: "premium spirits", phonetic: "PREE-mee-uhm SPEER-its", meaning: { en: "high-quality, top-shelf alcohol", th: "สุราพรีเมียม", zh: "高级烈酒", ja: "プレミアム蒸留酒", ko: "프리미엄 주류" } },
            { word: "pairing", phonetic: "PAIR-ing", meaning: { en: "matching flavors together", th: "การจับคู่รสชาติ", zh: "搭配", ja: "ペアリング", ko: "페어링" } },
            { word: "last call", phonetic: "last kawl", meaning: { en: "the final chance to order before closing", th: "การแจ้งสั่งเครื่องดื่มครั้งสุดท้าย", zh: "最后点单", ja: "ラストオーダー", ko: "마지막 주문" } },
            { word: "signature cocktail", phonetic: "SIG-nuh-cher KOK-tayl", meaning: { en: "a house's unique specialty drink", th: "ค็อกเทลซิกเนเจอร์", zh: "招牌鸡尾酒", ja: "シグネチャーカクテル", ko: "시그니처 칵테일" } },
            { word: "responsible service", phonetic: "rih-SPON-sih-buhl SUR-vis", meaning: { en: "serving alcohol safely and legally", th: "การให้บริการแอลกอฮอล์อย่างมีความรับผิดชอบ", zh: "负责任的酒精服务", ja: "責任ある提供", ko: "책임감 있는 주류 제공" } }
          ],
          dialogue: [
            { speaker: "guest", en: "I'm interested in mixology. What's your signature cocktail?", th: "ฉันสนใจศาสตร์การผสมเครื่องดื่ม ค็อกเทลซิกเนเจอร์ของที่นี่คืออะไรคะ" },
            { speaker: "staff", en: "We use premium spirits for a smoky old-fashioned with a unique pairing of flavors.", th: "เราใช้สุราพรีเมียมทำโอลด์แฟชั่นรสควันไฟ พร้อมการจับคู่รสชาติที่เป็นเอกลักษณ์ค่ะ" },
            { speaker: "guest", en: "That sounds fantastic. What time is last call?", th: "ฟังดูยอดเยี่ยมเลยค่ะ ออร์เดอร์สุดท้ายกี่โมงคะ" },
            { speaker: "staff", en: "Last call is at 1 AM, as part of our responsible service policy.", th: "ออร์เดอร์สุดท้ายตอนตีหนึ่งค่ะ ตามนโยบายการให้บริการอย่างมีความรับผิดชอบของเรา" },
            { speaker: "guest", en: "Understood. I'll take one signature cocktail then.", th: "เข้าใจแล้วค่ะ ขอค็อกเทลซิกเนเจอร์หนึ่งแก้ว" },
            { speaker: "staff", en: "Excellent choice, coming right up.", th: "เลือกได้เยี่ยมมากค่ะ รอสักครู่นะคะ" }
          ],
          preTest: [
            { q: { en: "What is \"mixology\"?", th: "\"Mixology\" คืออะไร" }, options: ["The art and skill of mixing cocktails", "A type of wine", "A cleaning method", "A hotel department"], answer: 0 },
            { q: { en: "What are \"premium spirits\"?", th: "\"Premium spirits\" คืออะไร" }, options: ["High-quality, top-shelf alcohol", "Cheap alcohol", "Non-alcoholic drinks", "Soft drinks"], answer: 0 },
            { q: { en: "What is \"last call\"?", th: "\"Last call\" คืออะไร" }, options: ["The final chance to order drinks before closing", "The first drink of the night", "A type of cocktail", "A discount time"], answer: 0 },
            { q: { en: "What does \"responsible service\" of alcohol mean?", th: "\"Responsible service\" ของแอลกอฮอล์หมายความว่าอะไร" }, options: ["Serving alcohol safely and legally", "Serving as much as possible", "Free drinks for everyone", "Serving only beer"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What did the guest ask about?", th: "แขกถามเรื่องอะไร" }, options: ["Mixology and the signature cocktail", "The wine list", "The dinner menu", "Room service"], answer: 0 },
            { q: { en: "What type of spirits did the bartender mention?", th: "บาร์เทนเดอร์พูดถึงสุราประเภทไหน" }, options: ["Premium spirits", "Cheap spirits", "No alcohol", "Beer only"], answer: 0 },
            { q: { en: "What time was last call?", th: "ออร์เดอร์สุดท้ายกี่โมง" }, options: ["1 AM", "Midnight", "10 PM", "2 AM"], answer: 0 },
            { q: { en: "What policy was last call part of?", th: "ออร์เดอร์สุดท้ายเป็นส่วนหนึ่งของนโยบายอะไร" }, options: ["Responsible service", "Happy hour", "Loyalty program", "Room service"], answer: 0 }
          ]
        }
      ]
    },

    // ============================================================ SPA & WELLNESS
    {
      id: "spa",
      icon: "💆",
      name: { en: "Spa & Wellness", th: "แผนกสปาและเวลเนส", zh: "水疗养生部", ja: "スパ・ウェルネス", ko: "스파 & 웰니스" },
      levels: [
        {
          id: "beginner",
          objectives: [
            { en: "Book a spa appointment and welcome a guest", th: "จองนัดหมายสปาและต้อนรับแขก" },
            { en: "Explain basic spa etiquette (robes, relaxation)", th: "อธิบายมารยาทพื้นฐานของสปา" },
            { en: "Use essential spa vocabulary", th: "ใช้คำศัพท์สปาที่สำคัญ" }
          ],
          vocabulary: [
            { word: "massage", phonetic: "muh-SAHZH", meaning: { en: "a treatment that relaxes the muscles", th: "นวด", zh: "按摩", ja: "マッサージ", ko: "마사지" } },
            { word: "appointment", phonetic: "uh-POYNT-ment", meaning: { en: "a scheduled time for a treatment", th: "การนัดหมาย", zh: "预约", ja: "予約", ko: "예약" } },
            { word: "relax", phonetic: "rih-LAKS", meaning: { en: "to rest and reduce stress", th: "ผ่อนคลาย", zh: "放松", ja: "リラックスする", ko: "휴식하다" } },
            { word: "robe", phonetic: "rohb", meaning: { en: "a soft garment worn at a spa", th: "เสื้อคลุมอาบน้ำ", zh: "浴袍", ja: "バスローブ", ko: "가운" } },
            { word: "spa menu", phonetic: "spah MEN-yoo", meaning: { en: "a list of spa treatments available", th: "เมนูสปา", zh: "水疗菜单", ja: "スパメニュー", ko: "스파 메뉴" } },
            { word: "therapist", phonetic: "THER-uh-pist", meaning: { en: "a trained person who gives treatments", th: "นักบำบัด", zh: "理疗师", ja: "セラピスト", ko: "테라피스트" } }
          ],
          dialogue: [
            { speaker: "guest", en: "Hi, I'd like to book a massage, please.", th: "สวัสดีค่ะ ฉันอยากจองคิวนวดค่ะ" },
            { speaker: "staff", en: "Of course. What time would you like your appointment?", th: "ได้เลยค่ะ ท่านต้องการนัดหมายเวลาไหนคะ" },
            { speaker: "guest", en: "Two o'clock, if possible.", th: "บ่ายสองโมงถ้าเป็นไปได้ค่ะ" },
            { speaker: "staff", en: "Perfect. Please put on this robe and relax in the lounge.", th: "เรียบร้อยค่ะ กรุณาสวมเสื้อคลุมนี้และพักผ่อนที่ห้องรับรองนะคะ" },
            { speaker: "guest", en: "Thank you. Could I see the spa menu first?", th: "ขอบคุณค่ะ ขอดูเมนูสปาก่อนได้ไหมคะ" },
            { speaker: "staff", en: "Of course, here is our therapist's recommendation too.", th: "ได้เลยค่ะ นี่คือคำแนะนำจากนักบำบัดของเราด้วยค่ะ" }
          ],
          preTest: [
            { q: { en: "What is a \"massage\"?", th: "\"Massage\" คืออะไร" }, options: ["A treatment that relaxes the muscles", "Cutting hair", "A type of food", "A swimming activity"], answer: 0 },
            { q: { en: "What do you make to reserve a spa time?", th: "คุณทำอะไรเพื่อจองเวลาที่สปา" }, options: ["Appointment", "Invoice", "Menu", "Ticket"], answer: 0 },
            { q: { en: "What do you wear at the spa before treatment?", th: "คุณสวมอะไรที่สปาก่อนทรีตเมนต์" }, options: ["Robe", "Suit", "Uniform", "Passport"], answer: 0 },
            { q: { en: "Who gives you the treatment?", th: "ใครเป็นคนทำทรีตเมนต์ให้คุณ" }, options: ["Therapist", "Waiter", "Bellman", "Concierge"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What did the guest want to book?", th: "แขกต้องการจองอะไร" }, options: ["A massage", "A haircut", "A dinner table", "A taxi"], answer: 0 },
            { q: { en: "What time did the guest request?", th: "แขกขอเวลาไหน" }, options: ["Two o'clock", "Ten o'clock", "Noon", "Midnight"], answer: 0 },
            { q: { en: "What did staff ask the guest to wear?", th: "พนักงานขอให้แขกสวมอะไร" }, options: ["A robe", "A suit", "A swimsuit", "A uniform"], answer: 0 },
            { q: { en: "What did the guest ask to see?", th: "แขกขอดูอะไร" }, options: ["The spa menu", "The wine list", "The room bill", "The map"], answer: 0 }
          ]
        },
        {
          id: "intermediate",
          objectives: [
            { en: "Discuss treatment preferences and pressure levels", th: "พูดคุยเรื่องความต้องการทรีตเมนต์และระดับแรงกด" },
            { en: "Ask about skin sensitivities professionally", th: "สอบถามเรื่องผิวแพ้ง่ายอย่างมืออาชีพ" },
            { en: "Handle appointment rescheduling", th: "จัดการการเลื่อนนัดหมาย" }
          ],
          vocabulary: [
            { word: "treatment", phonetic: "TREET-ment", meaning: { en: "a spa or medical procedure", th: "การบำบัด ทรีตเมนต์", zh: "疗程", ja: "トリートメント", ko: "트리트먼트" } },
            { word: "aromatherapy", phonetic: "uh-ROH-muh-THER-uh-pee", meaning: { en: "therapy using scented oils", th: "สุคนธบำบัด", zh: "芳香疗法", ja: "アロマセラピー", ko: "아로마테라피" } },
            { word: "pressure", phonetic: "PRESH-er", meaning: { en: "the firmness applied during a massage", th: "แรงกด", zh: "力度", ja: "圧力", ko: "압력" } },
            { word: "essential oil", phonetic: "ih-SEN-shuhl oyl", meaning: { en: "concentrated plant oil used in treatments", th: "น้ำมันหอมระเหย", zh: "精油", ja: "エッセンシャルオイル", ko: "에센셜 오일" } },
            { word: "skin sensitivity", phonetic: "skin sen-sih-TIV-ih-tee", meaning: { en: "how easily the skin reacts", th: "ผิวแพ้ง่าย", zh: "皮肤敏感", ja: "肌の敏感さ", ko: "피부 민감도" } },
            { word: "reschedule", phonetic: "ree-SKED-yool", meaning: { en: "to change to a different time", th: "เลื่อนนัด", zh: "重新安排", ja: "予定を変更する", ko: "일정을 변경하다" } }
          ],
          dialogue: [
            { speaker: "staff", en: "Welcome. Would you like a treatment with aromatherapy oils?", th: "ยินดีต้อนรับค่ะ ท่านต้องการทรีตเมนต์พร้อมน้ำมันหอมระเหยไหมคะ" },
            { speaker: "guest", en: "Yes, please. Could you use light pressure? My back is sore.", th: "ค่ะ ช่วยใช้แรงกดเบาๆ ได้ไหมคะ หลังฉันเจ็บอยู่" },
            { speaker: "staff", en: "Certainly. Do you have any skin sensitivity to essential oils?", th: "ได้ค่ะ ท่านมีผิวแพ้ง่ายต่อน้ำมันหอมระเหยไหมคะ" },
            { speaker: "guest", en: "No, I should be fine.", th: "ไม่มีค่ะ น่าจะไม่มีปัญหา" },
            { speaker: "guest", en: "Actually, could we reschedule to tomorrow instead?", th: "จริงๆ แล้ว ขอเลื่อนนัดเป็นพรุ่งนี้แทนได้ไหมคะ" },
            { speaker: "staff", en: "Of course, I'll arrange that for you right away.", th: "ได้ค่ะ ดิฉันจะจัดการให้ทันทีค่ะ" }
          ],
          preTest: [
            { q: { en: "What is \"aromatherapy\"?", th: "\"Aromatherapy\" คืออะไร" }, options: ["Therapy using scented oils", "A type of massage tool", "A skin condition", "A hotel department"], answer: 0 },
            { q: { en: "What does \"pressure\" mean in a massage?", th: "\"Pressure\" ในการนวดหมายถึงอะไร" }, options: ["The firmness applied", "The temperature", "The price", "The duration"], answer: 0 },
            { q: { en: "What is an \"essential oil\"?", th: "\"Essential oil\" คืออะไร" }, options: ["Concentrated plant oil used in treatments", "A cooking oil", "A cleaning product", "A perfume brand"], answer: 0 },
            { q: { en: "What does \"reschedule\" mean?", th: "\"Reschedule\" หมายความว่าอะไร" }, options: ["To change to a different time", "To cancel completely", "To pay extra", "To upgrade"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What did the guest request during the massage?", th: "แขกขออะไรระหว่างการนวด" }, options: ["Light pressure", "Deep pressure", "No oil", "Extra time"], answer: 0 },
            { q: { en: "What did the therapist ask about?", th: "นักบำบัดถามเรื่องอะไร" }, options: ["Skin sensitivity to essential oils", "Food allergies", "Payment method", "Room number"], answer: 0 },
            { q: { en: "What did the guest ask to change?", th: "แขกขอเปลี่ยนอะไร" }, options: ["Reschedule to tomorrow", "Cancel the appointment", "Add another treatment", "Change the therapist"], answer: 0 },
            { q: { en: "Complete: \"Would you like a treatment with aromatherapy ___?\"", th: "เติมคำ: \"Would you like a treatment with aromatherapy ___?\"" }, options: ["oils", "cars", "engines", "books"], answer: 0 }
          ]
        },
        {
          id: "advanced",
          objectives: [
            { en: "Conduct a pre-treatment consultation", th: "ดำเนินการให้คำปรึกษาก่อนทรีตเมนต์" },
            { en: "Explain contraindications and adjust treatments safely", th: "อธิบายข้อห้ามและปรับทรีตเมนต์อย่างปลอดภัย" },
            { en: "Describe wellness packages and gratuity policy", th: "อธิบายแพ็กเกจสุขภาพและนโยบายค่าทิป" }
          ],
          vocabulary: [
            { word: "contraindication", phonetic: "kon-truh-in-dih-KAY-shun", meaning: { en: "a reason a treatment should be avoided", th: "ข้อห้ามในการรักษา", zh: "禁忌症", ja: "禁忌事項", ko: "금기 사항" } },
            { word: "exfoliation", phonetic: "eks-foh-lee-AY-shun", meaning: { en: "removing dead skin cells", th: "การขัดผิว", zh: "去角质", ja: "角質除去", ko: "각질 제거" } },
            { word: "wellness package", phonetic: "WEL-nes PAK-ij", meaning: { en: "a bundled set of spa services", th: "แพ็กเกจสุขภาพ", zh: "养生套餐", ja: "ウェルネスパッケージ", ko: "웰니스 패키지" } },
            { word: "hydrotherapy", phonetic: "hy-droh-THER-uh-pee", meaning: { en: "therapy using water", th: "การบำบัดด้วยน้ำ", zh: "水疗", ja: "水治療法", ko: "수치료" } },
            { word: "consultation", phonetic: "kon-suhl-TAY-shun", meaning: { en: "a discussion to assess needs", th: "การให้คำปรึกษา", zh: "咨询", ja: "カウンセリング", ko: "상담" } },
            { word: "gratuity", phonetic: "gruh-TOO-ih-tee", meaning: { en: "a tip for good service", th: "ค่าทิป", zh: "小费", ja: "チップ", ko: "팁" } }
          ],
          dialogue: [
            { speaker: "staff", en: "Before we begin, may I ask about any medical contraindications?", th: "ก่อนเริ่ม ขอสอบถามข้อห้ามทางการแพทย์ได้ไหมคะ" },
            { speaker: "guest", en: "I'm pregnant, actually.", th: "จริงๆ แล้วฉันกำลังตั้งครรภ์ค่ะ" },
            { speaker: "staff", en: "Thank you for telling me. I'll adjust the treatment and avoid exfoliation on the abdomen.", th: "ขอบคุณที่แจ้งให้ทราบค่ะ ดิฉันจะปรับทรีตเมนต์และหลีกเลี่ยงการขัดผิวบริเวณหน้าท้อง" },
            { speaker: "guest", en: "I appreciate that. What's included in the wellness package?", th: "ขอบคุณค่ะ แพ็กเกจสุขภาพมีอะไรบ้างคะ" },
            { speaker: "staff", en: "It includes a full consultation, hydrotherapy, and a facial.", th: "รวมการให้คำปรึกษาแบบเต็มรูปแบบ การบำบัดด้วยน้ำ และทรีตเมนต์หน้าค่ะ" },
            { speaker: "guest", en: "Wonderful, and is gratuity included?", th: "เยี่ยมเลยค่ะ แล้วรวมค่าทิปด้วยไหมคะ" }
          ],
          preTest: [
            { q: { en: "What is a \"contraindication\"?", th: "\"Contraindication\" คืออะไร" }, options: ["A reason a treatment should be avoided", "A type of massage", "A spa discount", "A skin type"], answer: 0 },
            { q: { en: "What is \"exfoliation\"?", th: "\"Exfoliation\" คืออะไร" }, options: ["Removing dead skin cells", "Adding moisture", "Cutting hair", "Applying makeup"], answer: 0 },
            { q: { en: "What is a \"wellness package\"?", th: "\"Wellness package\" คืออะไร" }, options: ["A bundled set of spa services", "A single treatment", "A hotel room type", "A staff schedule"], answer: 0 },
            { q: { en: "What is \"hydrotherapy\"?", th: "\"Hydrotherapy\" คืออะไร" }, options: ["Therapy using water", "Therapy using heat", "Therapy using sound", "Therapy using light"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What did the therapist ask about before starting?", th: "นักบำบัดถามเรื่องอะไรก่อนเริ่ม" }, options: ["Medical contraindications", "Payment method", "Room number", "Dietary restrictions"], answer: 0 },
            { q: { en: "What did the guest reveal?", th: "แขกเปิดเผยเรื่องอะไร" }, options: ["She is pregnant", "She has a nut allergy", "She is in a hurry", "She wants a refund"], answer: 0 },
            { q: { en: "What did the therapist avoid?", th: "นักบำบัดหลีกเลี่ยงอะไร" }, options: ["Exfoliation on the abdomen", "All oils", "Hot water", "Loud music"], answer: 0 },
            { q: { en: "What was included in the wellness package?", th: "แพ็กเกจสุขภาพรวมอะไรบ้าง" }, options: ["A full consultation, hydrotherapy, and a facial", "Only a massage", "A haircut and manicure", "A gym session"], answer: 0 }
          ]
        }
      ]
    },

    // ============================================================ POOL & RECREATION
    {
      id: "pool",
      icon: "🏖️",
      name: { en: "Pool & Recreation", th: "แผนกสระว่ายน้ำและนันทนาการ", zh: "泳池与休闲部", ja: "プール・レクリエーション", ko: "수영장 & 레크리에이션" },
      levels: [
        {
          id: "beginner",
          objectives: [
            { en: "Assist guests with sunbeds and pool essentials", th: "ช่วยเหลือแขกเรื่องเตียงอาบแดดและสิ่งจำเป็นที่สระ" },
            { en: "Explain basic pool and beach safety", th: "อธิบายความปลอดภัยพื้นฐานของสระและชายหาด" },
            { en: "Use essential pool vocabulary", th: "ใช้คำศัพท์เกี่ยวกับสระว่ายน้ำที่สำคัญ" }
          ],
          vocabulary: [
            { word: "swimming pool", phonetic: "SWIM-ing pool", meaning: { en: "a pool for swimming", th: "สระว่ายน้ำ", zh: "游泳池", ja: "プール", ko: "수영장" } },
            { word: "sunbed", phonetic: "SUN-bed", meaning: { en: "a lounge chair for sunbathing", th: "เตียงอาบแดด", zh: "躺椅", ja: "サンベッド", ko: "선베드" } },
            { word: "pool towel", phonetic: "pool TOW-uhl", meaning: { en: "a towel used at the pool", th: "ผ้าเช็ดตัวสระว่ายน้ำ", zh: "泳池毛巾", ja: "プールタオル", ko: "수영장 수건" } },
            { word: "sunscreen", phonetic: "SUN-skreen", meaning: { en: "lotion that protects skin from the sun", th: "ครีมกันแดด", zh: "防晒霜", ja: "日焼け止め", ko: "자외선 차단제" } },
            { word: "lifeguard", phonetic: "LYF-gard", meaning: { en: "a person who watches over swimmers' safety", th: "เจ้าหน้าที่ช่วยชีวิต", zh: "救生员", ja: "ライフガード", ko: "안전요원" } },
            { word: "beach", phonetic: "beech", meaning: { en: "the sandy area by the sea", th: "ชายหาด", zh: "海滩", ja: "ビーチ", ko: "해변" } }
          ],
          dialogue: [
            { speaker: "guest", en: "Excuse me, is this sunbed available?", th: "ขอโทษนะคะ เตียงอาบแดดตัวนี้ว่างไหมคะ" },
            { speaker: "staff", en: "Yes, it is. Would you like a pool towel as well?", th: "ว่างค่ะ ท่านต้องการผ้าเช็ดตัวสระว่ายน้ำด้วยไหมคะ" },
            { speaker: "guest", en: "Yes, please. Also, do you sell sunscreen here?", th: "ค่ะ แล้วที่นี่มีขายครีมกันแดดไหมคะ" },
            { speaker: "staff", en: "Yes, at the pool bar. The lifeguard is also there if you need help.", th: "มีค่ะ ที่บาร์ริมสระ และมีเจ้าหน้าที่ช่วยชีวิตอยู่ที่นั่นด้วยหากท่านต้องการความช่วยเหลือ" },
            { speaker: "guest", en: "Great, thank you. Is the beach nearby too?", th: "เยี่ยมเลยค่ะ ขอบคุณค่ะ ชายหาดอยู่ใกล้ๆ ด้วยไหมคะ" },
            { speaker: "staff", en: "Yes, just a short walk from the pool.", th: "ค่ะ เดินจากสระไม่ไกลเลยค่ะ" }
          ],
          preTest: [
            { q: { en: "What do you sit on to sunbathe?", th: "คุณนั่งบนอะไรเพื่ออาบแดด" }, options: ["Sunbed", "Kayak", "Menu", "Bill"], answer: 0 },
            { q: { en: "What protects your skin from the sun?", th: "อะไรปกป้องผิวคุณจากแดด" }, options: ["Sunscreen", "Soap", "Towel", "Ice"], answer: 0 },
            { q: { en: "Who watches over swimmers for safety?", th: "ใครดูแลความปลอดภัยของนักว่ายน้ำ" }, options: ["Lifeguard", "Waiter", "Concierge", "Housekeeper"], answer: 0 },
            { q: { en: "Where is the sandy area by the sea?", th: "พื้นที่ทรายริมทะเลอยู่ที่ไหน" }, options: ["Beach", "Lobby", "Kitchen", "Spa"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What did the guest ask about first?", th: "แขกถามเรื่องอะไรก่อน" }, options: ["A sunbed", "A cocktail", "A taxi", "A massage"], answer: 0 },
            { q: { en: "What did staff offer along with the sunbed?", th: "พนักงานเสนออะไรพร้อมกับเตียงอาบแดด" }, options: ["A pool towel", "A menu", "A key", "A map"], answer: 0 },
            { q: { en: "Where can guests buy sunscreen?", th: "แขกซื้อครีมกันแดดได้ที่ไหน" }, options: ["At the pool bar", "At the spa", "At the front desk", "At the gift shop"], answer: 0 },
            { q: { en: "What is near the pool?", th: "อะไรอยู่ใกล้สระว่ายน้ำ" }, options: ["The beach", "The airport", "The kitchen", "The gym"], answer: 0 }
          ]
        },
        {
          id: "intermediate",
          objectives: [
            { en: "Recommend water sports and activities", th: "แนะนำกีฬาทางน้ำและกิจกรรม" },
            { en: "Manage sunbed reservations", th: "จัดการการจองเตียงอาบแดด" },
            { en: "Explain pool and beach safety rules", th: "อธิบายกฎความปลอดภัยของสระและชายหาด" }
          ],
          vocabulary: [
            { word: "water sports", phonetic: "WAW-ter sports", meaning: { en: "sports played on or in water", th: "กีฬาทางน้ำ", zh: "水上运动", ja: "ウォータースポーツ", ko: "수상 스포츠" } },
            { word: "snorkeling", phonetic: "SNOR-kuhl-ing", meaning: { en: "swimming underwater with a breathing tube", th: "ดำน้ำตื้น", zh: "浮潜", ja: "シュノーケリング", ko: "스노클링" } },
            { word: "pool bar", phonetic: "pool bar", meaning: { en: "a bar located by the pool", th: "บาร์ริมสระ", zh: "泳池酒吧", ja: "プールバー", ko: "풀 바" } },
            { word: "sunbed reservation", phonetic: "SUN-bed rez-er-VAY-shun", meaning: { en: "booking a sunbed in advance", th: "การจองเตียงอาบแดด", zh: "预订躺椅", ja: "サンベッドの予約", ko: "선베드 예약" } },
            { word: "safety rules", phonetic: "SAYF-tee roolz", meaning: { en: "rules that keep guests safe", th: "กฎความปลอดภัย", zh: "安全规则", ja: "安全規則", ko: "안전 수칙" } },
            { word: "kayak", phonetic: "KY-ak", meaning: { en: "a small narrow boat paddled by hand", th: "เรือคายัค", zh: "皮划艇", ja: "カヤック", ko: "카약" } }
          ],
          dialogue: [
            { speaker: "guest", en: "We'd like to try some water sports today.", th: "วันนี้เราอยากลองเล่นกีฬาทางน้ำค่ะ" },
            { speaker: "staff", en: "Wonderful. We offer snorkeling and kayak rentals.", th: "ยินดีมากค่ะ เรามีบริการดำน้ำตื้นและเช่าเรือคายัคค่ะ" },
            { speaker: "guest", en: "Snorkeling sounds fun. Do we need a sunbed reservation for later?", th: "ดำน้ำตื้นฟังดูสนุกดีค่ะ แล้วเราต้องจองเตียงอาบแดดไว้สำหรับทีหลังไหมคะ" },
            { speaker: "staff", en: "I recommend it, sunbeds fill up quickly.", th: "แนะนำให้จองไว้ค่ะ เตียงอาบแดดมักเต็มเร็ว" },
            { speaker: "guest", en: "Understood. Are there any safety rules we should know?", th: "เข้าใจแล้วค่ะ มีกฎความปลอดภัยอะไรที่เราควรรู้ไหมคะ" },
            { speaker: "staff", en: "Yes, please always swim near the lifeguard station.", th: "ค่ะ กรุณาว่ายน้ำใกล้จุดของเจ้าหน้าที่ช่วยชีวิตเสมอ" }
          ],
          preTest: [
            { q: { en: "What are \"water sports\"?", th: "\"Water sports\" คืออะไร" }, options: ["Sports played on or in water", "Sports played indoors", "Sports played on grass", "Sports played on ice"], answer: 0 },
            { q: { en: "What is \"snorkeling\"?", th: "\"Snorkeling\" คืออะไร" }, options: ["Swimming underwater with a breathing tube", "Fishing from a boat", "Sunbathing", "Playing volleyball"], answer: 0 },
            { q: { en: "What is a \"kayak\"?", th: "\"Kayak\" คืออะไร" }, options: ["A small narrow boat paddled by hand", "A large yacht", "A type of raft", "A fishing net"], answer: 0 },
            { q: { en: "Why book a \"sunbed reservation\"?", th: "ทำไมต้อง \"book a sunbed reservation\"" }, options: ["To guarantee a sunbed in advance", "To rent snorkeling gear", "To join a tour", "To order food"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What activities did staff recommend?", th: "พนักงานแนะนำกิจกรรมอะไร" }, options: ["Snorkeling and kayak rentals", "Golf and tennis", "Spa treatments", "Shopping tours"], answer: 0 },
            { q: { en: "Why did staff recommend a sunbed reservation?", th: "ทำไมพนักงานแนะนำให้จองเตียงอาบแดด" }, options: ["Sunbeds fill up quickly", "Sunbeds are expensive", "Sunbeds need cleaning", "Sunbeds are broken"], answer: 0 },
            { q: { en: "What safety rule was mentioned?", th: "มีการพูดถึงกฎความปลอดภัยอะไร" }, options: ["Swim near the lifeguard station", "Never swim after breakfast", "Always swim alone", "Swim only at night"], answer: 0 },
            { q: { en: "Complete: \"We'd like to try some ___ today.\"", th: "เติมคำ: \"We'd like to try some ___ today.\"" }, options: ["water sports", "room service", "dry cleaning", "spa treatments"], answer: 0 }
          ]
        },
        {
          id: "advanced",
          objectives: [
            { en: "Verify certifications and safety documents", th: "ตรวจสอบใบรับรองและเอกสารความปลอดภัย" },
            { en: "Describe conditions like tides and marine life", th: "อธิบายสภาพอากาศ เช่น น้ำขึ้นน้ำลงและสิ่งมีชีวิตในทะเล" },
            { en: "Explain emergency evacuation procedures", th: "อธิบายขั้นตอนการอพยพฉุกเฉิน" }
          ],
          vocabulary: [
            { word: "scuba certification", phonetic: "SKOO-buh sur-tif-ih-KAY-shun", meaning: { en: "official proof of diving training", th: "ใบรับรองการดำน้ำสกูบา", zh: "潜水证书", ja: "スキューバ認定", ko: "스쿠버 자격증" } },
            { word: "liability waiver", phonetic: "ly-uh-BIL-ih-tee WAY-ver", meaning: { en: "a form releasing the resort from responsibility", th: "หนังสือสละสิทธิ์เรียกร้องความรับผิด", zh: "免责声明", ja: "免責同意書", ko: "책임 면제 각서" } },
            { word: "tide", phonetic: "tyd", meaning: { en: "the rise and fall of the sea", th: "น้ำขึ้นน้ำลง", zh: "潮汐", ja: "潮の満ち引き", ko: "조수" } },
            { word: "marine life", phonetic: "muh-REEN lyf", meaning: { en: "animals and plants living in the sea", th: "สิ่งมีชีวิตในทะเล", zh: "海洋生物", ja: "海洋生物", ko: "해양 생물" } },
            { word: "equipment rental", phonetic: "ih-KWIP-ment REN-tuhl", meaning: { en: "renting gear for an activity", th: "การเช่าอุปกรณ์", zh: "设备租赁", ja: "器材レンタル", ko: "장비 대여" } },
            { word: "emergency evacuation", phonetic: "ih-MUR-jen-see ee-vak-yoo-AY-shun", meaning: { en: "leaving quickly during a dangerous situation", th: "การอพยพฉุกเฉิน", zh: "紧急疏散", ja: "緊急避難", ko: "비상 대피" } }
          ],
          dialogue: [
            { speaker: "guest", en: "We'd like to go scuba diving. Do we need certification?", th: "เราอยากไปดำน้ำสกูบาค่ะ ต้องมีใบรับรองไหมคะ" },
            { speaker: "staff", en: "Yes, please show your scuba certification, and sign this liability waiver.", th: "ค่ะ กรุณาแสดงใบรับรองการดำน้ำ และเซ็นหนังสือสละสิทธิ์นี้ด้วยค่ะ" },
            { speaker: "guest", en: "Of course. Is the tide safe for diving today?", th: "ได้เลยค่ะ วันนี้น้ำขึ้นน้ำลงปลอดภัยสำหรับการดำน้ำไหมคะ" },
            { speaker: "staff", en: "Yes, conditions are good, and you'll see wonderful marine life.", th: "ค่ะ สภาพวันนี้ดีมาก และท่านจะได้เห็นสิ่งมีชีวิตในทะเลที่สวยงามด้วยค่ะ" },
            { speaker: "guest", en: "Excellent. Is equipment rental included?", th: "ยอดเยี่ยมเลยค่ะ รวมค่าเช่าอุปกรณ์ด้วยไหมคะ" },
            { speaker: "staff", en: "Yes, and please review the emergency evacuation procedure before we start.", th: "รวมค่ะ และกรุณาทบทวนขั้นตอนการอพยพฉุกเฉินก่อนเริ่มด้วยค่ะ" }
          ],
          preTest: [
            { q: { en: "What is required before scuba diving?", th: "ต้องมีอะไรก่อนดำน้ำสกูบา" }, options: ["A scuba certification", "A passport only", "A hotel key", "A room reservation"], answer: 0 },
            { q: { en: "What is a \"liability waiver\"?", th: "\"Liability waiver\" คืออะไร" }, options: ["A form releasing the resort from responsibility", "A discount coupon", "A safety helmet", "A dive log"], answer: 0 },
            { q: { en: "What is the \"tide\"?", th: "\"Tide\" คืออะไร" }, options: ["The rise and fall of the sea", "A type of fish", "A diving technique", "A boat type"], answer: 0 },
            { q: { en: "What is \"marine life\"?", th: "\"Marine life\" คืออะไร" }, options: ["Animals and plants living in the sea", "Hotel staff", "Beach equipment", "Weather patterns"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What did staff ask the guest to show?", th: "พนักงานขอให้แขกแสดงอะไร" }, options: ["Scuba certification", "A passport", "A room key", "A boarding pass"], answer: 0 },
            { q: { en: "What did staff ask the guest to sign?", th: "พนักงานขอให้แขกเซ็นอะไร" }, options: ["A liability waiver", "A room bill", "A menu", "A guest book"], answer: 0 },
            { q: { en: "What did staff say guests would see while diving?", th: "พนักงานบอกว่าแขกจะได้เห็นอะไรระหว่างดำน้ำ" }, options: ["Wonderful marine life", "A shipwreck", "Other tourists", "Fish markets"], answer: 0 },
            { q: { en: "What should be reviewed before starting?", th: "ควรทบทวนอะไรก่อนเริ่ม" }, options: ["The emergency evacuation procedure", "The hotel menu", "The spa price list", "The Wi-Fi password"], answer: 0 }
          ]
        }
      ]
    },

    // ============================================================ KIDS CLUB
    {
      id: "kids-club",
      icon: "🧸",
      name: { en: "Kids Club", th: "แผนกคิดส์คลับ", zh: "儿童俱乐部", ja: "キッズクラブ", ko: "키즈 클럽" },
      levels: [
        {
          id: "beginner",
          objectives: [
            { en: "Welcome children and parents to the kids club", th: "ต้อนรับเด็กและผู้ปกครองสู่คิดส์คลับ" },
            { en: "Describe toys, playground, and daily activities", th: "อธิบายของเล่น สนามเด็กเล่น และกิจกรรมประจำวัน" },
            { en: "Explain snack time and supervision", th: "อธิบายเวลาทานขนมและการดูแล" }
          ],
          vocabulary: [
            { word: "kids club", phonetic: "kidz klub", meaning: { en: "a supervised play area for children", th: "คิดส์คลับ", zh: "儿童俱乐部", ja: "キッズクラブ", ko: "키즈 클럽" } },
            { word: "toy", phonetic: "toy", meaning: { en: "an object for children to play with", th: "ของเล่น", zh: "玩具", ja: "おもちゃ", ko: "장난감" } },
            { word: "playground", phonetic: "PLAY-grownd", meaning: { en: "an outdoor area for children to play", th: "สนามเด็กเล่น", zh: "游乐场", ja: "遊び場", ko: "놀이터" } },
            { word: "snack", phonetic: "snak", meaning: { en: "a small amount of food", th: "ขนมว่าง", zh: "零食", ja: "おやつ", ko: "간식" } },
            { word: "supervision", phonetic: "soo-per-VIZH-uhn", meaning: { en: "watching over children for safety", th: "การดูแล", zh: "监督看护", ja: "見守り", ko: "감독 보호" } },
            { word: "activity", phonetic: "ak-TIV-ih-tee", meaning: { en: "a planned fun task or game", th: "กิจกรรม", zh: "活动", ja: "アクティビティ", ko: "활동" } }
          ],
          dialogue: [
            { speaker: "guest", en: "Hi, is the kids club open now?", th: "สวัสดีค่ะ ตอนนี้คิดส์คลับเปิดอยู่ไหมคะ" },
            { speaker: "staff", en: "Yes! Your child can play with our toys or on the playground.", th: "เปิดค่ะ! ลูกของท่านสามารถเล่นของเล่นหรือที่สนามเด็กเล่นของเราได้ค่ะ" },
            { speaker: "guest", en: "Great. Will there be a snack later?", th: "ดีเลยค่ะ แล้วจะมีขนมว่างทีหลังไหมคะ" },
            { speaker: "staff", en: "Yes, at 3 PM, with full supervision.", th: "มีค่ะ ตอนบ่ายสามโมง พร้อมการดูแลอย่างใกล้ชิดค่ะ" },
            { speaker: "guest", en: "Perfect. What activity is planned today?", th: "เยี่ยมเลยค่ะ วันนี้มีกิจกรรมอะไรบ้างคะ" },
            { speaker: "staff", en: "We have painting and games this afternoon.", th: "บ่ายนี้เรามีกิจกรรมวาดภาพและเกมค่ะ" }
          ],
          preTest: [
            { q: { en: "Where do children play under supervision at a resort?", th: "เด็กๆ เล่นภายใต้การดูแลที่ไหนในรีสอร์ท" }, options: ["Kids club", "Bar", "Spa", "Business center"], answer: 0 },
            { q: { en: "What is a \"toy\"?", th: "\"Toy\" คืออะไร" }, options: ["An object for children to play with", "A type of food", "A cleaning tool", "A hotel bill"], answer: 0 },
            { q: { en: "Where do children play outdoors?", th: "เด็กๆ เล่นกลางแจ้งที่ไหน" }, options: ["Playground", "Kitchen", "Laundry room", "Meeting room"], answer: 0 },
            { q: { en: "What is a small amount of food called?", th: "อาหารปริมาณน้อยเรียกว่าอะไร" }, options: ["Snack", "Invoice", "Menu", "Bill"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What can the child do at kids club?", th: "เด็กทำอะไรได้ที่คิดส์คลับ" }, options: ["Play with toys or on the playground", "Cook dinner", "Clean rooms", "Serve drinks"], answer: 0 },
            { q: { en: "What time is the snack?", th: "ขนมว่างเวลาไหน" }, options: ["3 PM", "9 AM", "Noon", "Midnight"], answer: 0 },
            { q: { en: "What activity was planned that afternoon?", th: "บ่ายนั้นมีกิจกรรมอะไร" }, options: ["Painting and games", "Swimming", "Cooking class", "Movie night"], answer: 0 },
            { q: { en: "Complete: \"Will there be a ___ later?\"", th: "เติมคำ: \"Will there be a ___ later?\"" }, options: ["snack", "bill", "key", "passport"], answer: 0 }
          ]
        },
        {
          id: "intermediate",
          objectives: [
            { en: "Explain age groups and craft activities", th: "อธิบายกลุ่มอายุและกิจกรรมงานฝีมือ" },
            { en: "Handle permission slips and schedules", th: "จัดการใบขออนุญาตและตารางเวลา" },
            { en: "Communicate about food allergies safely", th: "สื่อสารเรื่องอาการแพ้อาหารอย่างปลอดภัย" }
          ],
          vocabulary: [
            { word: "age group", phonetic: "ayj groop", meaning: { en: "children grouped by age", th: "กลุ่มอายุ", zh: "年龄组", ja: "年齢グループ", ko: "연령대" } },
            { word: "craft", phonetic: "kraft", meaning: { en: "a creative hands-on activity", th: "งานฝีมือ", zh: "手工艺", ja: "クラフト", ko: "공예" } },
            { word: "schedule", phonetic: "SKED-yool", meaning: { en: "a plan of times for activities", th: "ตารางเวลา", zh: "时间表", ja: "スケジュール", ko: "일정" } },
            { word: "permission slip", phonetic: "per-MISH-uhn slip", meaning: { en: "a form parents sign to allow an activity", th: "ใบขออนุญาตผู้ปกครอง", zh: "许可条", ja: "許可書", ko: "허가서" } },
            { word: "food allergy", phonetic: "food AL-er-jee", meaning: { en: "a bad reaction to certain foods", th: "อาการแพ้อาหาร", zh: "食物过敏", ja: "食物アレルギー", ko: "음식 알레르기" } },
            { word: "babysitter", phonetic: "BAY-bee-sit-er", meaning: { en: "someone who looks after children", th: "พี่เลี้ยงเด็ก", zh: "保姆", ja: "ベビーシッター", ko: "베이비시터" } }
          ],
          dialogue: [
            { speaker: "guest", en: "What age group is this activity for?", th: "กิจกรรมนี้เหมาะกับกลุ่มอายุไหนคะ" },
            { speaker: "staff", en: "It's for children 6 to 10, doing a craft session.", th: "สำหรับเด็กอายุ 6 ถึง 10 ปีค่ะ เป็นกิจกรรมงานฝีมือ" },
            { speaker: "guest", en: "Sounds fun. Can I see the schedule for the week?", th: "ฟังดูสนุกค่ะ ขอดูตารางเวลาสำหรับสัปดาห์นี้ได้ไหมคะ" },
            { speaker: "staff", en: "Of course. Please also sign this permission slip.", th: "ได้เลยค่ะ กรุณาเซ็นใบขออนุญาตนี้ด้วยนะคะ" },
            { speaker: "guest", en: "Sure. My daughter has a food allergy to peanuts.", th: "ได้ค่ะ ลูกสาวฉันแพ้อาหารประเภทถั่วลิสงค่ะ" },
            { speaker: "staff", en: "Thank you for letting us know, we'll inform our babysitter on duty.", th: "ขอบคุณที่แจ้งให้ทราบค่ะ ดิฉันจะแจ้งพี่เลี้ยงเด็กที่ดูแลอยู่ค่ะ" }
          ],
          preTest: [
            { q: { en: "What is an \"age group\"?", th: "\"Age group\" คืออะไร" }, options: ["Children grouped by age", "A type of toy", "A school grade", "A staff title"], answer: 0 },
            { q: { en: "What is a \"craft\"?", th: "\"Craft\" คืออะไร" }, options: ["A creative hands-on activity", "A cooking technique", "A cleaning task", "A sport"], answer: 0 },
            { q: { en: "What is a \"permission slip\"?", th: "\"Permission slip\" คืออะไร" }, options: ["A form parents sign to allow an activity", "A hotel bill", "A menu", "A ticket"], answer: 0 },
            { q: { en: "What is a \"babysitter\"?", th: "\"Babysitter\" คืออะไร" }, options: ["Someone who looks after children", "A hotel manager", "A tour guide", "A chef"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What age group was the craft session for?", th: "กิจกรรมงานฝีมือเหมาะกับกลุ่มอายุไหน" }, options: ["6 to 10 years old", "1 to 3 years old", "Teenagers only", "Adults"], answer: 0 },
            { q: { en: "What did staff ask the parent to sign?", th: "พนักงานขอให้ผู้ปกครองเซ็นอะไร" }, options: ["A permission slip", "A room bill", "A menu", "A contract"], answer: 0 },
            { q: { en: "What allergy did the child have?", th: "เด็กแพ้อะไร" }, options: ["Peanuts", "Dairy", "Shellfish", "Gluten"], answer: 0 },
            { q: { en: "Who will be informed about the allergy?", th: "ใครจะได้รับแจ้งเรื่องอาการแพ้" }, options: ["The babysitter on duty", "The chef", "The manager", "The lifeguard"], answer: 0 }
          ]
        },
        {
          id: "advanced",
          objectives: [
            { en: "Process registration and emergency contact forms", th: "ดำเนินการแบบฟอร์มลงทะเบียนและผู้ติดต่อฉุกเฉิน" },
            { en: "Explain behavior policy and pick-up authorization", th: "อธิบายนโยบายพฤติกรรมและการอนุญาตให้รับเด็ก" },
            { en: "Handle special needs and incident reporting", th: "จัดการความต้องการพิเศษและการรายงานเหตุการณ์" }
          ],
          vocabulary: [
            { word: "registration form", phonetic: "rej-ih-STRAY-shun form", meaning: { en: "a form to enroll a child in activities", th: "แบบฟอร์มลงทะเบียน", zh: "登记表", ja: "登録用紙", ko: "등록 양식" } },
            { word: "emergency contact", phonetic: "ih-MUR-jen-see KON-takt", meaning: { en: "a person to call in an emergency", th: "ผู้ติดต่อฉุกเฉิน", zh: "紧急联系人", ja: "緊急連絡先", ko: "비상 연락처" } },
            { word: "behavior policy", phonetic: "bih-HAYV-yer PAH-lih-see", meaning: { en: "rules about acceptable behavior", th: "นโยบายพฤติกรรม", zh: "行为规范", ja: "行動方針", ko: "행동 방침" } },
            { word: "pick-up authorization", phonetic: "PIK-up aw-thor-ih-ZAY-shun", meaning: { en: "permission for who may collect a child", th: "การอนุญาตให้รับเด็ก", zh: "接送授权", ja: "お迎えの許可", ko: "하원 승인" } },
            { word: "special needs", phonetic: "SPESH-uhl needz", meaning: { en: "additional support requirements", th: "ความต้องการพิเศษ", zh: "特殊需求", ja: "特別な配慮", ko: "특별한 요구" } },
            { word: "incident report", phonetic: "IN-sih-dent rih-PORT", meaning: { en: "a written record of an unusual event", th: "รายงานเหตุการณ์", zh: "事故报告", ja: "インシデント報告書", ko: "사고 보고서" } }
          ],
          dialogue: [
            { speaker: "staff", en: "Before we begin, please complete this registration form.", th: "ก่อนเริ่ม กรุณากรอกแบบฟอร์มลงทะเบียนนี้ด้วยค่ะ" },
            { speaker: "guest", en: "Sure. Here's my emergency contact number too.", th: "ได้ค่ะ นี่คือเบอร์ติดต่อฉุกเฉินของฉันด้วยค่ะ" },
            { speaker: "staff", en: "Thank you. Please also review our behavior policy and sign the pick-up authorization.", th: "ขอบคุณค่ะ กรุณาทบทวนนโยบายพฤติกรรมของเราและเซ็นการอนุญาตให้รับเด็กด้วยค่ะ" },
            { speaker: "guest", en: "Of course. My son has special needs — he needs extra attention.", th: "ได้ค่ะ ลูกชายฉันมีความต้องการพิเศษ เขาต้องการการดูแลเป็นพิเศษค่ะ" },
            { speaker: "staff", en: "Thank you for telling us, we'll assign a dedicated staff member.", th: "ขอบคุณที่แจ้งให้ทราบค่ะ ดิฉันจะมอบหมายพนักงานดูแลเป็นพิเศษให้ค่ะ" },
            { speaker: "staff", en: "If anything happens, we will file an incident report and contact you immediately.", th: "หากมีเหตุการณ์ใดเกิดขึ้น เราจะจัดทำรายงานเหตุการณ์และติดต่อท่านทันทีค่ะ" }
          ],
          preTest: [
            { q: { en: "What is a \"registration form\"?", th: "\"Registration form\" คืออะไร" }, options: ["A form to enroll a child in activities", "A hotel bill", "A safety waiver", "A menu"], answer: 0 },
            { q: { en: "What is an \"emergency contact\"?", th: "\"Emergency contact\" คืออะไร" }, options: ["A person to call in an emergency", "A staff member", "A doctor", "A hotel manager"], answer: 0 },
            { q: { en: "What is \"pick-up authorization\"?", th: "\"Pick-up authorization\" คืออะไร" }, options: ["Permission for who may collect a child", "A parking permit", "A hotel checkout form", "A gift voucher"], answer: 0 },
            { q: { en: "What does \"special needs\" mean?", th: "\"Special needs\" หมายความว่าอะไร" }, options: ["Additional support requirements", "Extra food requests", "VIP status", "A discount"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What did staff ask the parent to complete first?", th: "พนักงานขอให้ผู้ปกครองกรอกอะไรก่อน" }, options: ["A registration form", "A menu order", "A spa booking", "A tour ticket"], answer: 0 },
            { q: { en: "What did the parent provide besides the form?", th: "ผู้ปกครองให้อะไรนอกจากแบบฟอร์ม" }, options: ["An emergency contact number", "A credit card", "A passport copy", "A hotel key"], answer: 0 },
            { q: { en: "What did the parent disclose about their son?", th: "ผู้ปกครองแจ้งอะไรเกี่ยวกับลูกชาย" }, options: ["He has special needs", "He is allergic to nuts", "He cannot swim", "He is shy"], answer: 0 },
            { q: { en: "What will happen if something occurs?", th: "จะเกิดอะไรขึ้นหากมีเหตุการณ์" }, options: ["Staff will file an incident report and contact the parent", "Nothing will happen", "The child will be sent home", "The activity will stop for everyone"], answer: 0 }
          ]
        }
      ]
    },

    // ============================================================ GOLF & SPORTS
    {
      id: "golf",
      icon: "⛳",
      name: { en: "Golf & Sports", th: "แผนกกอล์ฟและกีฬา", zh: "高尔夫与运动部", ja: "ゴルフ・スポーツ", ko: "골프 & 스포츠" },
      levels: [
        {
          id: "beginner",
          objectives: [
            { en: "Book a tee time and explain golf basics", th: "จองเวลาตีกอล์ฟและอธิบายพื้นฐานกอล์ฟ" },
            { en: "Describe golf equipment and clubhouse services", th: "อธิบายอุปกรณ์กอล์ฟและบริการคลับเฮาส์" },
            { en: "Use essential golf vocabulary", th: "ใช้คำศัพท์กอล์ฟที่สำคัญ" }
          ],
          vocabulary: [
            { word: "golf club", phonetic: "golf klub", meaning: { en: "the stick used to hit a golf ball", th: "ไม้กอล์ฟ", zh: "高尔夫球杆", ja: "ゴルフクラブ", ko: "골프채" } },
            { word: "tee time", phonetic: "tee tym", meaning: { en: "the scheduled start time for a round of golf", th: "เวลาตีกอล์ฟ", zh: "开球时间", ja: "ティータイム", ko: "티타임" } },
            { word: "golf cart", phonetic: "golf kart", meaning: { en: "a small vehicle that carries golfers", th: "รถกอล์ฟ", zh: "高尔夫球车", ja: "ゴルフカート", ko: "골프 카트" } },
            { word: "scorecard", phonetic: "SKOR-kard", meaning: { en: "a card for recording golf scores", th: "ใบบันทึกคะแนน", zh: "记分卡", ja: "スコアカード", ko: "스코어카드" } },
            { word: "caddie", phonetic: "KAD-ee", meaning: { en: "a person who carries golf clubs for a player", th: "แคดดี้", zh: "球童", ja: "キャディー", ko: "캐디" } },
            { word: "clubhouse", phonetic: "KLUB-hows", meaning: { en: "the main building at a golf course", th: "คลับเฮาส์", zh: "会所", ja: "クラブハウス", ko: "클럽하우스" } }
          ],
          dialogue: [
            { speaker: "guest", en: "Hi, I'd like to book a tee time for tomorrow.", th: "สวัสดีครับ ผมอยากจองเวลาตีกอล์ฟสำหรับพรุ่งนี้ครับ" },
            { speaker: "staff", en: "Certainly, sir. What time would you prefer?", th: "ได้เลยค่ะ ท่านต้องการเวลาไหนคะ" },
            { speaker: "guest", en: "8 AM, please. Do you rent golf clubs?", th: "แปดโมงเช้าครับ แล้วที่นี่มีให้เช่าไม้กอล์ฟไหมครับ" },
            { speaker: "staff", en: "Yes, and we'll also provide a golf cart and a scorecard.", th: "มีค่ะ และเราจะจัดรถกอล์ฟกับใบบันทึกคะแนนให้ด้วยค่ะ" },
            { speaker: "guest", en: "Wonderful. Is a caddie available too?", th: "ยอดเยี่ยมเลยครับ มีแคดดี้ด้วยไหมครับ" },
            { speaker: "staff", en: "Of course. Please check in at the clubhouse before your round.", th: "ได้ค่ะ กรุณาเช็คอินที่คลับเฮาส์ก่อนเริ่มรอบด้วยนะคะ" }
          ],
          preTest: [
            { q: { en: "What do you hit a golf ball with?", th: "คุณตีลูกกอล์ฟด้วยอะไร" }, options: ["Golf club", "Tennis racket", "Kayak paddle", "Fishing rod"], answer: 0 },
            { q: { en: "What is a \"tee time\"?", th: "\"Tee time\" คืออะไร" }, options: ["The scheduled start time for golf", "A type of drink", "A hotel check-in time", "A spa appointment"], answer: 0 },
            { q: { en: "What vehicle carries golfers around the course?", th: "พาหนะอะไรพานักกอล์ฟไปรอบสนาม" }, options: ["Golf cart", "Taxi", "Bicycle", "Bus"], answer: 0 },
            { q: { en: "Where do golfers check in before playing?", th: "นักกอล์ฟเช็คอินที่ไหนก่อนเล่น" }, options: ["Clubhouse", "Lobby", "Kitchen", "Spa"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What did the guest book?", th: "แขกจองอะไร" }, options: ["A tee time", "A massage", "A dinner table", "A taxi"], answer: 0 },
            { q: { en: "What time did the guest request?", th: "แขกขอเวลาไหน" }, options: ["8 AM", "Noon", "8 PM", "Midnight"], answer: 0 },
            { q: { en: "What did staff provide besides golf clubs?", th: "พนักงานจัดหาอะไรนอกจากไม้กอล์ฟ" }, options: ["A golf cart and a scorecard", "A menu and a bill", "A towel and soap", "A map and a ticket"], answer: 0 },
            { q: { en: "Where should the guest check in?", th: "แขกควรเช็คอินที่ไหน" }, options: ["The clubhouse", "The spa", "The pool", "The kids club"], answer: 0 }
          ]
        },
        {
          id: "intermediate",
          objectives: [
            { en: "Discuss golf lessons and skill levels", th: "พูดคุยเรื่องบทเรียนกอล์ฟและระดับทักษะ" },
            { en: "Recommend sports facilities like tennis and fitness", th: "แนะนำสิ่งอำนวยความสะดวกด้านกีฬา เช่น เทนนิสและฟิตเนส" },
            { en: "Handle equipment rental requests", th: "จัดการคำขอเช่าอุปกรณ์" }
          ],
          vocabulary: [
            { word: "handicap", phonetic: "HAN-dee-kap", meaning: { en: "a number showing a golfer's skill level", th: "แต้มต่อ", zh: "差点", ja: "ハンディキャップ", ko: "핸디캡" } },
            { word: "driving range", phonetic: "DRY-ving raynj", meaning: { en: "a place to practice long golf shots", th: "สนามฝึกซ้อมกอล์ฟ", zh: "练习场", ja: "打ちっぱなし練習場", ko: "드라이빙 레인지" } },
            { word: "golf lesson", phonetic: "golf LES-uhn", meaning: { en: "a class to learn or improve golf skills", th: "บทเรียนกอล์ฟ", zh: "高尔夫课程", ja: "ゴルフレッスン", ko: "골프 레슨" } },
            { word: "equipment rental", phonetic: "ih-KWIP-ment REN-tuhl", meaning: { en: "renting sports gear", th: "การเช่าอุปกรณ์", zh: "设备租赁", ja: "器材レンタル", ko: "장비 대여" } },
            { word: "tennis court", phonetic: "TEN-is kort", meaning: { en: "the area where tennis is played", th: "สนามเทนนิส", zh: "网球场", ja: "テニスコート", ko: "테니스 코트" } },
            { word: "fitness center", phonetic: "FIT-nes SEN-ter", meaning: { en: "a gym for exercise", th: "ศูนย์ออกกำลังกาย", zh: "健身中心", ja: "フィットネスセンター", ko: "피트니스 센터" } }
          ],
          dialogue: [
            { speaker: "guest", en: "I'm not sure of my handicap. Could I get a golf lesson first?", th: "ผมไม่แน่ใจแต้มต่อของตัวเอง ขอเรียนบทเรียนกอล์ฟก่อนได้ไหมครับ" },
            { speaker: "staff", en: "Of course. We can start at the driving range this afternoon.", th: "ได้เลยค่ะ เราสามารถเริ่มที่สนามฝึกซ้อมกอล์ฟบ่ายนี้ได้ค่ะ" },
            { speaker: "guest", en: "Great. Also, do you have equipment rental for tennis?", th: "ดีเลยครับ แล้วมีให้เช่าอุปกรณ์เทนนิสไหมครับ" },
            { speaker: "staff", en: "Yes, and we also have an available tennis court this evening.", th: "มีค่ะ และมีสนามเทนนิสว่างในเย็นนี้ด้วยค่ะ" },
            { speaker: "guest", en: "Perfect. Is the fitness center open now?", th: "เยี่ยมเลยครับ ตอนนี้ศูนย์ออกกำลังกายเปิดอยู่ไหมครับ" },
            { speaker: "staff", en: "Yes, it's open 24 hours for our guests.", th: "เปิดค่ะ เปิดตลอด 24 ชั่วโมงสำหรับแขกของเราค่ะ" }
          ],
          preTest: [
            { q: { en: "What is a \"handicap\" in golf?", th: "\"Handicap\" ในกอล์ฟคืออะไร" }, options: ["A number showing a golfer's skill level", "A type of golf club", "A penalty", "A trophy"], answer: 0 },
            { q: { en: "What is a \"driving range\"?", th: "\"Driving range\" คืออะไร" }, options: ["A place to practice long golf shots", "A parking area", "A tennis court", "A swimming pool"], answer: 0 },
            { q: { en: "What is \"equipment rental\"?", th: "\"Equipment rental\" คืออะไร" }, options: ["Renting sports gear", "Buying sports gear", "Repairing sports gear", "Selling sports gear"], answer: 0 },
            { q: { en: "What is a \"fitness center\"?", th: "\"Fitness center\" คืออะไร" }, options: ["A gym for exercise", "A golf course", "A swimming pool", "A spa"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What did the guest want before playing?", th: "แขกต้องการอะไรก่อนเล่น" }, options: ["A golf lesson", "A massage", "A meal", "A room upgrade"], answer: 0 },
            { q: { en: "Where would the lesson start?", th: "บทเรียนจะเริ่มที่ไหน" }, options: ["The driving range", "The clubhouse", "The pool", "The tennis court"], answer: 0 },
            { q: { en: "What did the guest ask to rent?", th: "แขกขอเช่าอะไร" }, options: ["Tennis equipment", "Golf clubs", "A kayak", "A bicycle"], answer: 0 },
            { q: { en: "When is the fitness center open?", th: "ศูนย์ออกกำลังกายเปิดเมื่อไหร่" }, options: ["24 hours", "9 AM to 5 PM", "Only in the morning", "Only on weekends"], answer: 0 }
          ]
        },
        {
          id: "advanced",
          objectives: [
            { en: "Explain tournaments and membership access", th: "อธิบายการแข่งขันและสิทธิ์สมาชิก" },
            { en: "Arrange private coaching sessions", th: "จัดคาบสอนส่วนตัว" },
            { en: "Manage court reservations and sports facility bookings", th: "จัดการการจองสนามและสิ่งอำนวยความสะดวกด้านกีฬา" }
          ],
          vocabulary: [
            { word: "tournament", phonetic: "TOOR-nuh-ment", meaning: { en: "a competitive sporting event", th: "การแข่งขัน", zh: "锦标赛", ja: "トーナメント", ko: "토너먼트" } },
            { word: "membership", phonetic: "MEM-ber-ship", meaning: { en: "formal enrollment giving access to facilities", th: "สมาชิกภาพ", zh: "会员资格", ja: "会員資格", ko: "회원권" } },
            { word: "pro shop", phonetic: "proh shop", meaning: { en: "a shop selling sports equipment at a club", th: "ร้านขายอุปกรณ์กีฬา", zh: "专业用品店", ja: "プロショップ", ko: "프로숍" } },
            { word: "coaching session", phonetic: "KOH-ching SESH-uhn", meaning: { en: "a private training session with an instructor", th: "คาบสอนส่วนตัว", zh: "教练课程", ja: "コーチングセッション", ko: "코칭 세션" } },
            { word: "court reservation", phonetic: "kort rez-er-VAY-shun", meaning: { en: "booking a sports court in advance", th: "การจองสนาม", zh: "场地预订", ja: "コート予約", ko: "코트 예약" } },
            { word: "sports facility", phonetic: "sports fuh-SIL-ih-tee", meaning: { en: "a place equipped for sports activities", th: "สิ่งอำนวยความสะดวกด้านกีฬา", zh: "体育设施", ja: "スポーツ施設", ko: "스포츠 시설" } }
          ],
          dialogue: [
            { speaker: "guest", en: "I heard there's a golf tournament this weekend. Can guests join?", th: "ผมได้ยินว่ามีการแข่งขันกอล์ฟสุดสัปดาห์นี้ แขกเข้าร่วมได้ไหมครับ" },
            { speaker: "staff", en: "Yes, with a resort membership or a special pass.", th: "ได้ค่ะ หากมีสมาชิกภาพของรีสอร์ทหรือบัตรผ่านพิเศษ" },
            { speaker: "guest", en: "I'll check the pro shop for equipment then.", th: "งั้นผมจะไปดูอุปกรณ์ที่ร้านขายอุปกรณ์กีฬาครับ" },
            { speaker: "staff", en: "Good idea. Would you also like a private coaching session before the tournament?", th: "ความคิดดีค่ะ ท่านต้องการคาบสอนส่วนตัวก่อนการแข่งขันไหมคะ" },
            { speaker: "guest", en: "Yes, please. And could you make a court reservation for tennis afterward?", th: "ครับ แล้วช่วยจองสนามเทนนิสไว้สำหรับหลังจบด้วยได้ไหมครับ" },
            { speaker: "staff", en: "Absolutely, I'll arrange both sports facility bookings for you.", th: "ได้แน่นอนค่ะ ดิฉันจะจัดการจองสิ่งอำนวยความสะดวกด้านกีฬาทั้งสองอย่างให้ค่ะ" }
          ],
          preTest: [
            { q: { en: "What is a \"tournament\"?", th: "\"Tournament\" คืออะไร" }, options: ["A competitive sporting event", "A type of golf club", "A practice session", "A golf lesson"], answer: 0 },
            { q: { en: "What is a \"membership\"?", th: "\"Membership\" คืออะไร" }, options: ["Formal enrollment giving access to facilities", "A one-time entry ticket", "A discount coupon", "A staff title"], answer: 0 },
            { q: { en: "What is a \"pro shop\"?", th: "\"Pro shop\" คืออะไร" }, options: ["A shop selling sports equipment at a club", "A restaurant", "A spa", "A kids club"], answer: 0 },
            { q: { en: "What is a \"coaching session\"?", th: "\"Coaching session\" คืออะไร" }, options: ["A private training session with an instructor", "A group tournament", "A staff meeting", "A safety briefing"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What event did the guest ask about?", th: "แขกถามเรื่องงานอะไร" }, options: ["A golf tournament", "A cooking class", "A wedding", "A concert"], answer: 0 },
            { q: { en: "What is needed to join?", th: "ต้องมีอะไรเพื่อเข้าร่วม" }, options: ["A resort membership or special pass", "A passport", "A room key", "A boarding pass"], answer: 0 },
            { q: { en: "What did the guest plan to visit?", th: "แขกวางแผนจะไปที่ไหน" }, options: ["The pro shop", "The spa", "The kids club", "The bar"], answer: 0 },
            { q: { en: "What did staff offer before the tournament?", th: "พนักงานเสนออะไรก่อนการแข่งขัน" }, options: ["A private coaching session", "A free meal", "A room upgrade", "A massage"], answer: 0 }
          ]
        }
      ]
    },

    // ============================================================ SECURITY & SAFETY
    {
      id: "security",
      icon: "🛡️",
      name: { en: "Security & Safety", th: "แผนกรักษาความปลอดภัย", zh: "安保部", ja: "セキュリティ・安全管理", ko: "보안 & 안전" },
      levels: [
        {
          id: "beginner",
          objectives: [
            { en: "Assist guests with lost items and ID checks", th: "ช่วยเหลือแขกเรื่องของหายและการตรวจบัตรประจำตัว" },
            { en: "Give directions to emergency exits", th: "บอกทางไปยังทางออกฉุกเฉิน" },
            { en: "Use essential security vocabulary", th: "ใช้คำศัพท์ด้านความปลอดภัยที่สำคัญ" }
          ],
          vocabulary: [
            { word: "security guard", phonetic: "sih-KYOOR-ih-tee gard", meaning: { en: "a person who protects people and property", th: "เจ้าหน้าที่รักษาความปลอดภัย", zh: "保安", ja: "警備員", ko: "경비원" } },
            { word: "ID card", phonetic: "eye-dee kard", meaning: { en: "a card that proves identity", th: "บัตรประจำตัว", zh: "身份证", ja: "身分証明書", ko: "신분증" } },
            { word: "emergency exit", phonetic: "ih-MUR-jen-see EG-zit", meaning: { en: "a door used to leave quickly during danger", th: "ทางออกฉุกเฉิน", zh: "紧急出口", ja: "非常口", ko: "비상구" } },
            { word: "fire alarm", phonetic: "fyr uh-LARM", meaning: { en: "a device that warns of fire", th: "สัญญาณเตือนไฟไหม้", zh: "火警警报", ja: "火災警報", ko: "화재 경보" } },
            { word: "lost item", phonetic: "lawst EYE-tem", meaning: { en: "something a guest cannot find", th: "ของหาย", zh: "遗失物品", ja: "紛失物", ko: "분실물" } },
            { word: "help", phonetic: "help", meaning: { en: "assistance in a difficult situation", th: "ความช่วยเหลือ", zh: "帮助", ja: "助け", ko: "도움" } }
          ],
          dialogue: [
            { speaker: "guest", en: "Excuse me, I think I lost my wallet.", th: "ขอโทษนะคะ ฉันคิดว่ากระเป๋าสตางค์หายค่ะ" },
            { speaker: "staff", en: "I'm sorry to hear that. Let me help you look for the lost item.", th: "เสียใจด้วยนะครับ ให้ผมช่วยหาของหายให้ครับ" },
            { speaker: "guest", en: "Thank you. Do I need to show my ID card?", th: "ขอบคุณค่ะ ฉันต้องแสดงบัตรประจำตัวไหมคะ" },
            { speaker: "staff", en: "Yes, please, just to confirm your room.", th: "ครับ กรุณาแสดงเพื่อยืนยันห้องพักของท่านครับ" },
            { speaker: "guest", en: "Here it is. Also, where is the emergency exit on this floor?", th: "นี่ค่ะ แล้วทางออกฉุกเฉินของชั้นนี้อยู่ตรงไหนคะ" },
            { speaker: "staff", en: "It's at the end of the hallway, next to the fire alarm.", th: "อยู่ปลายทางเดิน ข้างสัญญาณเตือนไฟไหม้ครับ" }
          ],
          preTest: [
            { q: { en: "Who protects people and property at a resort?", th: "ใครดูแลปกป้องคนและทรัพย์สินในรีสอร์ท" }, options: ["Security guard", "Waiter", "Bellman", "Therapist"], answer: 0 },
            { q: { en: "What proves your identity?", th: "อะไรพิสูจน์ตัวตนของคุณ" }, options: ["ID card", "Menu", "Towel", "Map"], answer: 0 },
            { q: { en: "What door do you use to leave quickly during danger?", th: "คุณใช้ประตูไหนเพื่อออกไปอย่างรวดเร็วเมื่อมีอันตราย" }, options: ["Emergency exit", "Elevator", "Kitchen door", "Pool gate"], answer: 0 },
            { q: { en: "What warns people of a fire?", th: "อะไรเตือนคนเมื่อเกิดไฟไหม้" }, options: ["Fire alarm", "Doorbell", "Telephone", "Music"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What did the guest lose?", th: "แขกทำอะไรหาย" }, options: ["A wallet", "A passport", "A phone", "A key"], answer: 0 },
            { q: { en: "What did the guard ask the guest to show?", th: "เจ้าหน้าที่ขอให้แขกแสดงอะไร" }, options: ["An ID card", "A boarding pass", "A credit card", "A receipt"], answer: 0 },
            { q: { en: "Where is the emergency exit?", th: "ทางออกฉุกเฉินอยู่ที่ไหน" }, options: ["At the end of the hallway", "In the lobby", "In the kitchen", "At the pool"], answer: 0 },
            { q: { en: "What is the emergency exit next to?", th: "ทางออกฉุกเฉินอยู่ข้างอะไร" }, options: ["The fire alarm", "The elevator", "The bar", "The kids club"], answer: 0 }
          ]
        },
        {
          id: "intermediate",
          objectives: [
            { en: "Report suspicious activity and file incident reports", th: "รายงานพฤติกรรมน่าสงสัยและจัดทำรายงานเหตุการณ์" },
            { en: "Explain patrol routines and surveillance", th: "อธิบายการลาดตระเวนและการเฝ้าระวัง" },
            { en: "Direct guests to first aid and evacuation areas", th: "นำแขกไปยังจุดปฐมพยาบาลและพื้นที่อพยพ" }
          ],
          vocabulary: [
            { word: "surveillance camera", phonetic: "sur-VAY-luhns KAM-ruh", meaning: { en: "a camera that monitors an area", th: "กล้องวงจรปิด", zh: "监控摄像头", ja: "監視カメラ", ko: "감시 카메라" } },
            { word: "incident report", phonetic: "IN-sih-dent rih-PORT", meaning: { en: "a written record of an event", th: "รายงานเหตุการณ์", zh: "事故报告", ja: "インシデント報告書", ko: "사고 보고서" } },
            { word: "evacuation plan", phonetic: "ee-vak-yoo-AY-shun plan", meaning: { en: "a plan for leaving a building safely", th: "แผนอพยพ", zh: "疏散计划", ja: "避難計画", ko: "대피 계획" } },
            { word: "first aid", phonetic: "furst ayd", meaning: { en: "basic emergency medical treatment", th: "การปฐมพยาบาล", zh: "急救", ja: "応急処置", ko: "응급처치" } },
            { word: "suspicious activity", phonetic: "suh-SPISH-us ak-TIV-ih-tee", meaning: { en: "behavior that seems wrong or dangerous", th: "พฤติกรรมน่าสงสัย", zh: "可疑活动", ja: "不審な行動", ko: "수상한 행동" } },
            { word: "patrol", phonetic: "puh-TROHL", meaning: { en: "to walk or drive around checking for safety", th: "การลาดตระเวน", zh: "巡逻", ja: "巡回", ko: "순찰" } }
          ],
          dialogue: [
            { speaker: "guest", en: "I noticed some suspicious activity near the parking lot.", th: "ฉันสังเกตเห็นพฤติกรรมน่าสงสัยใกล้ลานจอดรถค่ะ" },
            { speaker: "staff", en: "Thank you for telling me. I'll patrol the area immediately.", th: "ขอบคุณที่แจ้งให้ทราบครับ ผมจะไปลาดตระเวนบริเวณนั้นทันที" },
            { speaker: "guest", en: "I also saw the surveillance camera wasn't working there.", th: "ฉันยังเห็นด้วยว่ากล้องวงจรปิดตรงนั้นไม่ทำงานค่ะ" },
            { speaker: "staff", en: "I'll report that and file an incident report right away.", th: "ผมจะแจ้งเรื่องนี้และจัดทำรายงานเหตุการณ์ทันทีครับ" },
            { speaker: "guest", en: "Thank you. Is there a first aid station nearby too?", th: "ขอบคุณค่ะ แล้วมีจุดปฐมพยาบาลอยู่ใกล้ๆ ไหมคะ" },
            { speaker: "staff", en: "Yes, it's next to the front desk, part of our evacuation plan area.", th: "มีครับ อยู่ข้างเคาน์เตอร์ต้อนรับ ซึ่งเป็นส่วนหนึ่งของพื้นที่ตามแผนอพยพของเราครับ" }
          ],
          preTest: [
            { q: { en: "What is a \"surveillance camera\"?", th: "\"Surveillance camera\" คืออะไร" }, options: ["A camera that monitors an area", "A camera for guests to use", "A phone camera", "A security badge"], answer: 0 },
            { q: { en: "What is an \"incident report\"?", th: "\"Incident report\" คืออะไร" }, options: ["A written record of an event", "A hotel bill", "A guest complaint form", "A menu"], answer: 0 },
            { q: { en: "What is \"first aid\"?", th: "\"First aid\" คืออะไร" }, options: ["Basic emergency medical treatment", "A type of insurance", "A safety camera", "A fire alarm"], answer: 0 },
            { q: { en: "What does \"patrol\" mean?", th: "\"Patrol\" หมายความว่าอะไร" }, options: ["To walk or drive around checking for safety", "To clean a room", "To serve food", "To check in guests"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What did the guest report?", th: "แขกรายงานเรื่องอะไร" }, options: ["Suspicious activity near the parking lot", "A noisy neighbor", "A broken TV", "A billing error"], answer: 0 },
            { q: { en: "What did the guard say he would do?", th: "เจ้าหน้าที่บอกว่าจะทำอะไร" }, options: ["Patrol the area immediately", "Ignore the report", "Call the police only", "Close the parking lot"], answer: 0 },
            { q: { en: "What problem did the guest notice with the camera?", th: "แขกสังเกตเห็นปัญหาอะไรกับกล้อง" }, options: ["It wasn't working", "It was too bright", "It was too loud", "It was missing"], answer: 0 },
            { q: { en: "Where is the first aid station?", th: "จุดปฐมพยาบาลอยู่ที่ไหน" }, options: ["Next to the front desk", "In the kitchen", "At the pool", "In the parking lot"], answer: 0 }
          ]
        },
        {
          id: "advanced",
          objectives: [
            { en: "Explain emergency protocols and risk assessments", th: "อธิบายขั้นตอนปฏิบัติฉุกเฉินและการประเมินความเสี่ยง" },
            { en: "Coordinate crowd and access control for events", th: "ประสานงานการควบคุมฝูงชนและการเข้าถึงสำหรับงานอีเวนต์" },
            { en: "Manage investigations and liability documentation", th: "จัดการการสืบสวนและเอกสารความรับผิดชอบทางกฎหมาย" }
          ],
          vocabulary: [
            { word: "emergency protocol", phonetic: "ih-MUR-jen-see PROH-tuh-kol", meaning: { en: "official steps to follow in an emergency", th: "ขั้นตอนปฏิบัติฉุกเฉิน", zh: "应急预案", ja: "緊急時対応手順", ko: "비상 대응 절차" } },
            { word: "risk assessment", phonetic: "risk uh-SES-ment", meaning: { en: "evaluating potential dangers", th: "การประเมินความเสี่ยง", zh: "风险评估", ja: "リスク評価", ko: "위험 평가" } },
            { word: "crowd control", phonetic: "krowd kon-TROHL", meaning: { en: "managing large groups of people safely", th: "การควบคุมฝูงชน", zh: "人群管控", ja: "群衆整理", ko: "군중 통제" } },
            { word: "access control", phonetic: "AK-ses kon-TROHL", meaning: { en: "restricting entry to authorized people", th: "การควบคุมการเข้าถึง", zh: "门禁管理", ja: "アクセス管理", ko: "출입 통제" } },
            { word: "investigation", phonetic: "in-ves-tih-GAY-shun", meaning: { en: "a formal inquiry into an incident", th: "การสืบสวน", zh: "调查", ja: "調査", ko: "조사" } },
            { word: "liability", phonetic: "ly-uh-BIL-ih-tee", meaning: { en: "legal responsibility for damage or injury", th: "ความรับผิดชอบทางกฎหมาย", zh: "责任", ja: "法的責任", ko: "법적 책임" } }
          ],
          dialogue: [
            { speaker: "staff", en: "We need to review our emergency protocol before the festival event.", th: "เราต้องทบทวนขั้นตอนปฏิบัติฉุกเฉินก่อนงานเทศกาลนี้ครับ" },
            { speaker: "staff", en: "Understood. I'll complete a risk assessment for the crowd areas today.", th: "เข้าใจแล้วครับ ผมจะทำการประเมินความเสี่ยงสำหรับพื้นที่ฝูงชนวันนี้เลย" },
            { speaker: "staff", en: "Good. We'll also need extra crowd control near the main stage.", th: "ดีครับ เราจะต้องมีการควบคุมฝูงชนเพิ่มเติมใกล้เวทีหลักด้วย" },
            { speaker: "staff", en: "I'll set up access control points at each entrance.", th: "ผมจะตั้งจุดควบคุมการเข้าถึงที่ทางเข้าแต่ละจุดครับ" },
            { speaker: "staff", en: "If any incident occurs, start an investigation immediately.", th: "หากมีเหตุการณ์ใดเกิดขึ้น ให้เริ่มการสืบสวนทันที" },
            { speaker: "staff", en: "Understood. I'll also make sure we're covered on liability documentation.", th: "เข้าใจแล้วครับ ผมจะตรวจสอบให้แน่ใจว่าเอกสารด้านความรับผิดชอบทางกฎหมายครบถ้วนด้วยครับ" }
          ],
          preTest: [
            { q: { en: "What is an \"emergency protocol\"?", th: "\"Emergency protocol\" คืออะไร" }, options: ["Official steps to follow in an emergency", "A hotel policy on tipping", "A type of insurance", "A guest complaint form"], answer: 0 },
            { q: { en: "What is a \"risk assessment\"?", th: "\"Risk assessment\" คืออะไร" }, options: ["Evaluating potential dangers", "A financial audit", "A staff performance review", "A guest satisfaction survey"], answer: 0 },
            { q: { en: "What is \"crowd control\"?", th: "\"Crowd control\" คืออะไร" }, options: ["Managing large groups of people safely", "Cleaning a crowded room", "Serving many guests food", "Selling event tickets"], answer: 0 },
            { q: { en: "What is \"access control\"?", th: "\"Access control\" คืออะไร" }, options: ["Restricting entry to authorized people", "Opening all doors", "Selling tickets", "Providing free Wi-Fi"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What did the manager want to review?", th: "ผู้จัดการต้องการทบทวนอะไร" }, options: ["The emergency protocol", "The hotel menu", "The staff schedule", "The guest list"], answer: 0 },
            { q: { en: "What did the guard need to complete?", th: "เจ้าหน้าที่ต้องดำเนินการอะไรให้เสร็จ" }, options: ["A risk assessment", "A guest survey", "A menu update", "A billing report"], answer: 0 },
            { q: { en: "Where would extra crowd control be needed?", th: "ต้องมีการควบคุมฝูงชนเพิ่มเติมที่ไหน" }, options: ["Near the main stage", "In the kitchen", "At the spa", "In the kids club"], answer: 0 },
            { q: { en: "What did the guard set up at each entrance?", th: "เจ้าหน้าที่ตั้งอะไรที่ทางเข้าแต่ละจุด" }, options: ["Access control points", "Food stations", "Ticket booths", "Photo booths"], answer: 0 }
          ]
        }
      ]
    },

    // ============================================================ BANQUET & EVENTS
    {
      id: "banquet",
      icon: "🎉",
      name: { en: "Banquet & Events", th: "แผนกจัดเลี้ยงและอีเวนต์", zh: "宴会与活动部", ja: "宴会・イベント", ko: "연회 & 이벤트" },
      levels: [
        {
          id: "beginner",
          objectives: [
            { en: "Welcome guests planning an event", th: "ต้อนรับแขกที่วางแผนจัดงาน" },
            { en: "Describe banquet halls, seating, and catering", th: "อธิบายห้องจัดเลี้ยง การจัดที่นั่ง และบริการจัดเลี้ยง" },
            { en: "Use essential event-planning vocabulary", th: "ใช้คำศัพท์การวางแผนงานอีเวนต์ที่สำคัญ" }
          ],
          vocabulary: [
            { word: "event", phonetic: "ih-VENT", meaning: { en: "an organized occasion or celebration", th: "งานอีเวนต์", zh: "活动", ja: "イベント", ko: "행사" } },
            { word: "banquet hall", phonetic: "BAN-kwit hawl", meaning: { en: "a large room for formal events", th: "ห้องจัดเลี้ยง", zh: "宴会厅", ja: "宴会場", ko: "연회장" } },
            { word: "guest list", phonetic: "gest list", meaning: { en: "a list of invited attendees", th: "รายชื่อแขก", zh: "宾客名单", ja: "ゲストリスト", ko: "게스트 명단" } },
            { word: "seating", phonetic: "SEE-ting", meaning: { en: "the arrangement of chairs and tables", th: "การจัดที่นั่ง", zh: "座位安排", ja: "座席配置", ko: "좌석 배치" } },
            { word: "decoration", phonetic: "dek-uh-RAY-shun", meaning: { en: "items used to make a place look attractive", th: "การตกแต่ง", zh: "装饰", ja: "装飾", ko: "장식" } },
            { word: "catering", phonetic: "KAY-ter-ing", meaning: { en: "providing food and drinks for an event", th: "บริการจัดเลี้ยง", zh: "餐饮服务", ja: "ケータリング", ko: "케이터링" } }
          ],
          dialogue: [
            { speaker: "guest", en: "Hi, we're planning a birthday event here.", th: "สวัสดีค่ะ เราวางแผนจัดงานวันเกิดที่นี่ค่ะ" },
            { speaker: "staff", en: "Wonderful! We have a beautiful banquet hall available.", th: "ยอดเยี่ยมเลยค่ะ เรามีห้องจัดเลี้ยงที่สวยงามว่างอยู่ค่ะ" },
            { speaker: "guest", en: "Great. How many people can it hold? Our guest list has 80 people.", th: "ดีเลยค่ะ จุคนได้กี่คนคะ รายชื่อแขกของเรามี 80 คน" },
            { speaker: "staff", en: "It can fit up to 100, with flexible seating arrangements.", th: "จุได้ถึง 100 คนค่ะ พร้อมการจัดที่นั่งที่ยืดหยุ่นได้" },
            { speaker: "guest", en: "Perfect. Can you help with decoration too?", th: "เยี่ยมเลยค่ะ ช่วยเรื่องการตกแต่งด้วยได้ไหมคะ" },
            { speaker: "staff", en: "Of course, and we also offer full catering service.", th: "ได้เลยค่ะ และเรายังมีบริการจัดเลี้ยงแบบครบวงจรด้วยค่ะ" }
          ],
          preTest: [
            { q: { en: "What is an \"event\"?", th: "\"Event\" คืออะไร" }, options: ["An organized occasion or celebration", "A hotel room", "A type of food", "A staff title"], answer: 0 },
            { q: { en: "What is a \"banquet hall\"?", th: "\"Banquet hall\" คืออะไร" }, options: ["A large room for formal events", "A guest room", "A kitchen", "A gym"], answer: 0 },
            { q: { en: "What lists invited attendees?", th: "อะไรระบุรายชื่อผู้ได้รับเชิญ" }, options: ["Guest list", "Menu", "Bill", "Scorecard"], answer: 0 },
            { q: { en: "What provides food and drinks for an event?", th: "อะไรจัดหาอาหารและเครื่องดื่มสำหรับงานอีเวนต์" }, options: ["Catering", "Housekeeping", "Security", "Concierge"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What event was the guest planning?", th: "แขกวางแผนจัดงานอะไร" }, options: ["A birthday event", "A wedding", "A conference", "A sports tournament"], answer: 0 },
            { q: { en: "How many people were on the guest list?", th: "รายชื่อแขกมีกี่คน" }, options: ["80", "100", "50", "150"], answer: 0 },
            { q: { en: "How many people can the banquet hall fit?", th: "ห้องจัดเลี้ยงจุคนได้กี่คน" }, options: ["Up to 100", "Up to 50", "Up to 200", "Up to 20"], answer: 0 },
            { q: { en: "What did staff offer besides decoration help?", th: "พนักงานเสนออะไรนอกจากช่วยเรื่องการตกแต่ง" }, options: ["Full catering service", "A free room upgrade", "A spa discount", "A golf lesson"], answer: 0 }
          ]
        },
        {
          id: "intermediate",
          objectives: [
            { en: "Discuss wedding receptions and equipment needs", th: "พูดคุยเรื่องงานเลี้ยงฉลองแต่งงานและความต้องการอุปกรณ์" },
            { en: "Explain buffet vs. plated service and RSVP deadlines", th: "อธิบายบริการแบบบุฟเฟต์กับอาหารจัดจานและกำหนดตอบรับคำเชิญ" },
            { en: "Coordinate with an event coordinator", th: "ประสานงานกับผู้ประสานงานอีเวนต์" }
          ],
          vocabulary: [
            { word: "wedding reception", phonetic: "WED-ing rih-SEP-shun", meaning: { en: "a celebration party after a wedding", th: "งานเลี้ยงฉลองแต่งงาน", zh: "婚宴", ja: "結婚披露宴", ko: "결혼 피로연" } },
            { word: "conference room", phonetic: "KON-fer-uhns room", meaning: { en: "a room used for meetings", th: "ห้องประชุม", zh: "会议室", ja: "会議室", ko: "회의실" } },
            { word: "audio-visual equipment", phonetic: "AW-dee-oh VIZH-oo-uhl ih-KWIP-ment", meaning: { en: "equipment for sound and video", th: "อุปกรณ์โสตทัศน์", zh: "视听设备", ja: "視聴覚機器", ko: "시청각 장비" } },
            { word: "buffet", phonetic: "buh-FAY", meaning: { en: "a meal where guests serve themselves", th: "บุฟเฟต์", zh: "自助餐", ja: "ビュッフェ", ko: "뷔페" } },
            { word: "RSVP", phonetic: "ar-es-vee-pee", meaning: { en: "a request to confirm attendance", th: "การตอบรับคำเชิญ", zh: "回复邀请", ja: "出欠確認", ko: "참석 여부 회신" } },
            { word: "event coordinator", phonetic: "ih-VENT koh-OR-dih-nay-ter", meaning: { en: "a person who plans and manages events", th: "ผู้ประสานงานอีเวนต์", zh: "活动统筹", ja: "イベントコーディネーター", ko: "이벤트 코디네이터" } }
          ],
          dialogue: [
            { speaker: "guest", en: "We're organizing a wedding reception for 150 guests.", th: "เรากำลังจัดงานเลี้ยงฉลองแต่งงานสำหรับแขก 150 คนค่ะ" },
            { speaker: "staff", en: "Congratulations! We'll also need to know if you require a conference room for any speeches.", th: "ขอแสดงความยินดีด้วยค่ะ! เราต้องทราบด้วยว่าท่านต้องการห้องประชุมสำหรับกล่าวสุนทรพจน์ไหมคะ" },
            { speaker: "guest", en: "Yes, and we'll need audio-visual equipment for the presentation.", th: "ค่ะ และเราต้องการอุปกรณ์โสตทัศน์สำหรับการนำเสนอด้วยค่ะ" },
            { speaker: "staff", en: "Understood. Would you prefer a buffet or a plated dinner?", th: "เข้าใจแล้วค่ะ ท่านต้องการแบบบุฟเฟต์หรืออาหารจัดจานคะ" },
            { speaker: "guest", en: "A buffet, please. When is the RSVP deadline for us to confirm numbers?", th: "บุฟเฟต์ค่ะ แล้วกำหนดตอบรับคำเชิญเพื่อยืนยันจำนวนคือเมื่อไหร่คะ" },
            { speaker: "staff", en: "One week before the event. Our event coordinator will guide you through everything.", th: "หนึ่งสัปดาห์ก่อนงานค่ะ ผู้ประสานงานอีเวนต์ของเราจะดูแลทุกอย่างให้ท่านค่ะ" }
          ],
          preTest: [
            { q: { en: "What is a \"wedding reception\"?", th: "\"Wedding reception\" คืออะไร" }, options: ["A celebration party after a wedding", "A business meeting", "A sports event", "A cooking class"], answer: 0 },
            { q: { en: "What is a \"buffet\"?", th: "\"Buffet\" คืออะไร" }, options: ["A meal where guests serve themselves", "A formal seated dinner", "A type of dessert", "A drink menu"], answer: 0 },
            { q: { en: "What does \"RSVP\" mean?", th: "\"RSVP\" หมายความว่าอะไร" }, options: ["A request to confirm attendance", "A type of invitation card", "A seating chart", "A menu choice"], answer: 0 },
            { q: { en: "Who plans and manages events?", th: "ใครเป็นคนวางแผนและจัดการงานอีเวนต์" }, options: ["Event coordinator", "Lifeguard", "Caddie", "Babysitter"], answer: 0 }
          ],
          postTest: [
            { q: { en: "How many guests was the wedding reception for?", th: "งานเลี้ยงฉลองแต่งงานมีแขกกี่คน" }, options: ["150", "80", "100", "50"], answer: 0 },
            { q: { en: "What equipment did the client need?", th: "ลูกค้าต้องการอุปกรณ์อะไร" }, options: ["Audio-visual equipment", "Golf clubs", "Spa robes", "Kayaks"], answer: 0 },
            { q: { en: "What meal style did the guest choose?", th: "แขกเลือกรูปแบบอาหารแบบไหน" }, options: ["A buffet", "A plated dinner", "A tea party", "A cocktail hour"], answer: 0 },
            { q: { en: "When is the RSVP deadline?", th: "กำหนดตอบรับคำเชิญคือเมื่อไหร่" }, options: ["One week before the event", "One day before", "One month before", "The day of the event"], answer: 0 }
          ]
        },
        {
          id: "advanced",
          objectives: [
            { en: "Lead contract negotiations and proposals", th: "นำการเจรจาสัญญาและข้อเสนองาน" },
            { en: "Manage vendors and event logistics", th: "จัดการผู้ขายและโลจิสติกส์ของงาน" },
            { en: "Conduct post-event reviews with clients", th: "ดำเนินการประเมินผลหลังงานอีเวนต์กับลูกค้า" }
          ],
          vocabulary: [
            { word: "contract negotiation", phonetic: "KON-trakt nih-goh-shee-AY-shun", meaning: { en: "discussing terms of an agreement", th: "การเจรจาสัญญา", zh: "合同谈判", ja: "契約交渉", ko: "계약 협상" } },
            { word: "event proposal", phonetic: "ih-VENT pruh-POH-zuhl", meaning: { en: "a detailed plan presented for approval", th: "ข้อเสนองานอีเวนต์", zh: "活动提案", ja: "イベント提案書", ko: "행사 제안서" } },
            { word: "vendor management", phonetic: "VEN-der MAN-ij-ment", meaning: { en: "coordinating outside suppliers", th: "การจัดการผู้ขาย", zh: "供应商管理", ja: "ベンダー管理", ko: "업체 관리" } },
            { word: "logistics", phonetic: "loh-JIS-tiks", meaning: { en: "the detailed coordination of an event", th: "การจัดการด้านโลจิสติกส์", zh: "后勤安排", ja: "ロジスティクス", ko: "물류 및 일정 조율" } },
            { word: "client brief", phonetic: "KLY-ent breef", meaning: { en: "a summary of a client's requirements", th: "สรุปความต้องการของลูกค้า", zh: "客户简报", ja: "クライアントブリーフ", ko: "클라이언트 브리핑" } },
            { word: "post-event review", phonetic: "pohst-ih-VENT rih-VYOO", meaning: { en: "an evaluation after an event ends", th: "การประเมินผลหลังงานอีเวนต์", zh: "活动后总结", ja: "イベント後の振り返り", ko: "행사 후 리뷰" } }
          ],
          dialogue: [
            { speaker: "guest", en: "We'd like to begin contract negotiation for our annual conference.", th: "เราอยากเริ่มการเจรจาสัญญาสำหรับการประชุมประจำปีของเราค่ะ" },
            { speaker: "staff", en: "Certainly. I'll prepare a detailed event proposal by Friday.", th: "ได้เลยค่ะ ดิฉันจะเตรียมข้อเสนองานอีเวนต์แบบละเอียดให้ภายในวันศุกร์" },
            { speaker: "guest", en: "Thank you. We'll also need help with vendor management for décor and entertainment.", th: "ขอบคุณค่ะ เราต้องการความช่วยเหลือเรื่องการจัดการผู้ขายสำหรับการตกแต่งและความบันเทิงด้วยค่ะ" },
            { speaker: "staff", en: "Understood. I'll handle all the logistics based on your client brief.", th: "เข้าใจแล้วค่ะ ดิฉันจะจัดการเรื่องโลจิสติกส์ทั้งหมดตามสรุปความต้องการของท่าน" },
            { speaker: "guest", en: "Perfect. Could we schedule a post-event review afterward too?", th: "เยี่ยมเลยค่ะ แล้วขอจัดตารางประเมินผลหลังงานอีเวนต์ด้วยได้ไหมคะ" },
            { speaker: "staff", en: "Absolutely, that will help us improve for your next event.", th: "ได้แน่นอนค่ะ นั่นจะช่วยให้เราพัฒนาสำหรับงานครั้งต่อไปของท่านค่ะ" }
          ],
          preTest: [
            { q: { en: "What is \"contract negotiation\"?", th: "\"Contract negotiation\" คืออะไร" }, options: ["Discussing terms of an agreement", "Signing a menu", "Booking a room", "Confirming a guest list"], answer: 0 },
            { q: { en: "What is an \"event proposal\"?", th: "\"Event proposal\" คืออะไร" }, options: ["A detailed plan presented for approval", "A guest list", "A seating chart", "A menu"], answer: 0 },
            { q: { en: "What is \"vendor management\"?", th: "\"Vendor management\" คืออะไร" }, options: ["Coordinating outside suppliers", "Managing hotel staff", "Managing room bookings", "Managing guest complaints"], answer: 0 },
            { q: { en: "What is a \"client brief\"?", th: "\"Client brief\" คืออะไร" }, options: ["A summary of a client's requirements", "A hotel policy", "A menu", "A contract"], answer: 0 }
          ],
          postTest: [
            { q: { en: "What did the client want to begin?", th: "ลูกค้าต้องการเริ่มอะไร" }, options: ["Contract negotiation", "A tour", "A spa treatment", "A golf game"], answer: 0 },
            { q: { en: "What will the coordinator prepare by Friday?", th: "ผู้ประสานงานจะเตรียมอะไรให้เสร็จภายในวันศุกร์" }, options: ["A detailed event proposal", "A guest list", "A menu", "A seating chart"], answer: 0 },
            { q: { en: "What did the client need help managing?", th: "ลูกค้าต้องการความช่วยเหลือในการจัดการอะไร" }, options: ["Vendors for décor and entertainment", "Hotel staff", "Room bookings", "Security"], answer: 0 },
            { q: { en: "What was scheduled after the event?", th: "มีการจัดตารางอะไรหลังจบงาน" }, options: ["A post-event review", "A second event", "A refund", "A staff party"], answer: 0 }
          ]
        }
      ]
    }
  ]
};
