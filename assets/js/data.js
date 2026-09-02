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
    }
  ]
};
