const EXCHANGE_RATE = 531;
const TRIP_DAYS = 9;

const FLIGHTS = {
  depart: {
    airline: "China Airlines",
    flight: "CI771",
    route: "TPE → DPS",
    time: "09:10 → 14:35",
    duration: "5h 25m"
  },
  return: {
    airline: "China Airlines",
    flight: "CI9761 / CI762",
    route: "YIA → CGK → TPE",
    time: "09:45 → 21:05",
    duration: "Multi-city"
  }
};

const BUDGET = {
  paid: [
    { key: "flight", twd: 15000 },
    { key: "hotel", twd: 9202 },
    { key: "volcanoDeposit", twd: 3935 }
  ],
  open: [
    { key: "volcanoBalance", twd: 6065 },
    { key: "templeTour", twd: 2000 },
    { key: "train", twd: 1000 },
    { key: "dailySpend", twdRange: [6000, 10000] }
  ]
};

const content = {
  "zh-Hant": {
    heroKicker: "Indonesia travel handbook",
    heroTitle: "Bali × Java",
    heroSubtitle: "海島放鬆、火山晨光、神廟收尾",
    heroDates: "2026 / 06 / 13 - 2026 / 06 / 21",
    heroDestinations: "Seminyak • Ijen • Tumpak Sewu • Bromo • Malang • Yogyakarta",
    navOverview: "總覽",
    navItinerary: "行程",
    navBudget: "預算",
    navVisa: "簽證",
    overviewLabel: "Journey Overview",
    overviewTitle: "一趟完整、舒服、而且很會安排情緒節奏的印尼經典路線",
    overviewLead:
      "前段用峇里島放鬆，中段用火山與瀑布拉高記憶點，最後在日惹用文化與城市質感收尾，是非常適合做成旅遊手冊的一條線。",
    routeLabel: "Flight & Route",
    routeTitle: "航班與移動路線",
    departTag: "去程",
    departTitle: "台北飛峇里島",
    returnTag: "回程",
    returnTitle: "日惹經雅加達回台北",
    tripFlowLabel: "Trip Flow",
    tripFlowValue: "台北 → 峇里島 → Ijen → Sewu → Bromo → Malang → 日惹",
    stayLabel: "Stay Plan",
    stayTitle: "住宿安排",
    transportTitle: "交通與時間安排",
    packingTitle: "穿著與安全",
    itineraryLabel: "Day by Day",
    itineraryTitle: "每日行程",
    itineraryLead: "點開每一天就可以直接看重點，做成比較接近旅遊手冊的閱讀方式。",
    budgetLabel: "Budget Overview",
    budgetTitle: "預算整理",
    budgetLead: "以下印尼盾換算以 NT$1 ≈ Rp531 粗估，方便旅行規劃，不代表即時換匯價格。",
    paidTitle: "已支付",
    openTitle: "尚未支付",
    totalBudgetLabel: "總預算",
    budgetRateNote: "匯率參考：NT$1 ≈ Rp531",
    dailyAverageLabel: "日均預算",
    budgetStyleNote: "高品質自由行，非奢華，但體驗非常完整",
    visaLabel: "Visa & Entry",
    visaTitle: "簽證與入境提醒",
    visaPanelTitle: "印尼旅遊簽證",
    arrivalPanelTitle: "峇里島入境附加事項",
    visaLinkOne: "印尼官方 eVisa",
    visaLinkTwo: "Love Bali 官方網站",
    overviewStats: [
      ["旅人", "Yung Wen Cheng"],
      ["天數", "9天8夜"],
      ["旅程定位", "高品質自由行"],
      ["一句話", "有體驗、有放鬆、有文化"]
    ],
    flightLabels: {
      airline: "航空",
      flight: "航班",
      route: "路線",
      time: "時間",
      duration: "飛行時間"
    },
    stays: [
      ["6/13 - 6/15", "Seminyak, Bali", "Courtyard by Marriott Bali Seminyak Resort", "用舒服的度假感把旅程開場。"],
      ["6/15 - 6/17", "Java volcano region", "Tour provided", "火山段的住宿與接送由 tour 安排。"],
      ["6/18", "Malang", "The Shalimar Boutique Hotel", "火山段後安排一晚比較精緻的休息點。"],
      ["6/19 - 6/21", "Yogyakarta", "Aveta Hotel Malioboro", "方便串神廟與回程交通。"]
    ],
    transportNotes: [
      ["火山順序", "Ijen → Sewu → Bromo，並確認最後 drop 在 Malang。"],
      ["YIA 機場鐵路", "抓 06:00 左右班次是偏穩的安排，約 35 到 40 分鐘。"],
      ["機場緩衝", "回程至少提早 2 小時到機場。"]
    ],
    packingNotes: [
      ["鞋子", "火山與瀑布段請穿有抓地力的運動鞋或登山鞋。"],
      ["保暖", "Ijen 與 Bromo 凌晨真的會冷，外套要帶。"],
      ["行李", "目前整理為去程 23kg ×2、回程 23kg ×1。"]
    ],
    itinerary: [
      ["Day 1", "抵達峇里島", "搭乘 CI771 由台北直飛 DPS，抵達後以 check-in、晚餐與休息為主。", ["抵達 + 入住", "輕鬆晚餐", "調時差"], [["節奏", "第一天不建議排太滿，讓身體先適應濕熱氣候與移動疲勞。"], ["建議安排", "入住後可在 Seminyak 周邊簡單散步、吃飯，早點休息。"]]],
      ["Day 2", "Bali 放鬆日", "安排 beach club、按摩與自由活動，讓旅程先從舒服開始。", ["Seminyak", "按摩", "自由活動"], [["玩法", "這天最適合把行程壓鬆，重點不是跑點，而是把度假感做滿。"], ["小提醒", "海邊日照強，記得防曬，也可以順便補買後面火山段需要的小物。"]]],
      ["Day 3", "進入火山段", "開始東爪哇移動，重點順序是 Ijen → Sewu → Bromo。", ["跟團移動", "進入火山區", "確認 Malang drop"], [["關鍵確認", "和 tour 再次確認行程順序與最後 drop-off 是否在 Malang。"], ["體力準備", "從這天開始睡眠會比較破碎，建議提前整理好小背包與保暖層。"]]],
      ["Day 4", "Ijen Crater", "藍火與火山口是這段的代表亮點，通常需要凌晨出發。", ["藍火", "夜間健行", "火山體驗"], [["看點", "藍火與天亮後的火山湖是 Ijen 最有記憶點的兩個畫面。"], ["裝備", "頭燈、抓地鞋、薄外套與口罩都很重要。"]]],
      ["Day 5", "Tumpak Sewu", "瀑布地形壯觀但偏體力型，鞋子與換洗衣物很重要。", ["瀑布", "防滑鞋", "體力日"], [["地形", "這天通常有濕滑路段、上下坡與水氣，整體最吃體力。"], ["準備", "建議多帶一套可替換衣物與防水袋，手機也最好先做防護。"]]],
      ["Day 6", "Mount Bromo Sunrise", "經典火山日出收尾，清晨會冷，也可能有火山灰。", ["日出", "外套", "口罩或 Buff"], [["看點", "Bromo 是整段火山行程最經典的收尾，視野與光線都很有戲。"], ["小提醒", "凌晨風大且冷，保暖與遮塵用品都很值得帶。"]]],
      ["Day 7", "Malang → Yogyakarta", "搭火車前往日惹，這天可以當作比較放鬆的轉場日。", ["火車移動", "休息", "城市切換"], [["節奏", "火山段結束後，這天很適合補眠、整理照片與重新回到比較舒服的旅行狀態。"], ["交通", "火車時間建議預留緩衝，並注意行李上下車的節奏。"]]],
      ["Day 8", "Borobudur + Prambanan", "佛教與印度教兩座重量級神廟會讓整趟旅程收得非常完整。", ["婆羅浮屠", "普蘭巴南", "文化核心"], [["文化重點", "Borobudur 與 Prambanan 分別代表不同宗教與建築氣質，很值得完整保留一天。"], ["安排建議", "如果有導覽或包車，這天的體驗感會更好也更省力。"]]],
      ["Day 9", "回程日", "搭早班機場鐵路前往 YIA，預留至少 2 小時緩衝再銜接班機。", ["機場鐵路", "提早出發", "回台灣"], [["時間安排", "06:00 左右的機場鐵路是偏穩的選擇，能把風險壓低。"], ["收尾提醒", "前一晚先把護照、車票、航班資訊與退稅或付款憑證整理好。"]]]
    ],
    budgetLabels: {
      flight: ["機票", "華航往返"],
      hotel: ["住宿", "Seminyak、Malang、Yogyakarta"],
      volcanoDeposit: ["火山訂金", "Ijen / Sewu / Bromo tour"],
      volcanoBalance: ["火山尾款", "尚未支付部分"],
      templeTour: ["神廟團", "Borobudur + Prambanan"],
      train: ["火車", "Malang → Yogyakarta"],
      dailySpend: ["生活費", "餐飲、按摩、零用"]
    },
    visaPoints: [
      ["30 天旅遊方案", "印尼官方 eVisa FAQ 常見旅遊方案為停留 30 天，可延長一次 30 天，費用 IDR 500,000。"],
      ["台灣旅客", "目前查到的資料顯示台灣旅客通常可走 e-VOA / VOA 路線，但出發前仍建議在官方系統再次確認。"],
      ["基本文件", "護照效期至少 6 個月，並準備離境機票與足夠旅費。"],
      ["建議作法", "如果不想在現場排隊，建議先申請 e-VOA 並把憑證存到手機裡。"]
    ],
    arrivalPoints: [
      ["Bali 旅遊稅", "外國旅客前往峇里島需支付一次性旅遊稅 Rp150,000，可線上或現場付款。"],
      ["憑證保留", "Love Bali 付款後會有 QR code，建議截圖備份。"],
      ["與簽證費分開", "這筆費用不是簽證費，要分開準備。"],
      ["出發前再確認", "接近 2026/06/13 時，建議再檢查官方 eVisa 與 Love Bali 網站。"]
    ]
  },
  en: {
    heroKicker: "Indonesia travel handbook",
    heroTitle: "Bali × Java",
    heroSubtitle: "Island ease, volcano dawns, temple endings",
    heroDates: "2026 / 06 / 13 - 2026 / 06 / 21",
    heroDestinations: "Seminyak • Ijen • Tumpak Sewu • Bromo • Malang • Yogyakarta",
    navOverview: "Overview",
    navItinerary: "Itinerary",
    navBudget: "Budget",
    navVisa: "Visa",
    overviewLabel: "Journey Overview",
    overviewTitle: "A very complete Indonesia classic route with rest, drama, and culture in the right order",
    overviewLead: "The trip starts with Bali softness, rises into East Java volcano intensity, then ends in Yogyakarta with temples and city comfort.",
    routeLabel: "Flight & Route",
    routeTitle: "Flights and route",
    departTag: "Outbound",
    departTitle: "Taipei to Bali",
    returnTag: "Return",
    returnTitle: "Yogyakarta to Taipei via Jakarta",
    tripFlowLabel: "Trip Flow",
    tripFlowValue: "Taipei → Bali → Ijen → Sewu → Bromo → Malang → Yogyakarta",
    stayLabel: "Stay Plan",
    stayTitle: "Where you stay",
    transportTitle: "Transport and timing",
    packingTitle: "Packing and safety",
    itineraryLabel: "Day by Day",
    itineraryTitle: "Daily itinerary",
    itineraryLead: "Each day opens like a handbook card so it is easier to scan during the trip.",
    budgetLabel: "Budget Overview",
    budgetTitle: "Budget breakdown",
    budgetLead: "IDR conversions below use a rough planning rate of NT$1 ≈ Rp531, meant for planning only.",
    paidTitle: "Already paid",
    openTitle: "Still open",
    totalBudgetLabel: "Total budget",
    budgetRateNote: "Planning rate: NT$1 ≈ Rp531",
    dailyAverageLabel: "Daily average",
    budgetStyleNote: "High-quality DIY trip, not luxury, but very complete",
    visaLabel: "Visa & Entry",
    visaTitle: "Visa and entry notes",
    visaPanelTitle: "Indonesia tourist visa",
    arrivalPanelTitle: "Bali arrival extras",
    visaLinkOne: "Official Indonesia eVisa",
    visaLinkTwo: "Official Love Bali site",
    overviewStats: [
      ["Traveler", "Yung Wen Cheng"],
      ["Length", "9 days / 8 nights"],
      ["Trip type", "High-quality DIY"],
      ["Summary", "Experience, rest, culture"]
    ],
    flightLabels: {
      airline: "Airline",
      flight: "Flight",
      route: "Route",
      time: "Time",
      duration: "Duration"
    },
    stays: [
      ["Jun 13 - Jun 15", "Seminyak, Bali", "Courtyard by Marriott Bali Seminyak Resort", "A relaxed resort opening."],
      ["Jun 15 - Jun 17", "Java volcano region", "Tour provided", "The volcano leg is handled by the tour."],
      ["Jun 18", "Malang", "The Shalimar Boutique Hotel", "A polished recovery night after the rugged segment."],
      ["Jun 19 - Jun 21", "Yogyakarta", "Aveta Hotel Malioboro", "Good for temples and airport flow."]
    ],
    transportNotes: [
      ["Volcano order", "Keep the order Ijen → Sewu → Bromo, and confirm drop-off in Malang."],
      ["YIA airport rail", "Around 06:00 is a safe train plan, usually about 35 to 40 minutes."],
      ["Airport buffer", "Aim to reach the airport at least 2 hours early."]
    ],
    packingNotes: [
      ["Shoes", "Wear shoes with good grip for the volcano and waterfall days."],
      ["Warm layer", "Ijen and Bromo can feel cold before sunrise."],
      ["Baggage", "Current note: 23kg ×2 outbound, 23kg ×1 inbound."]
    ],
    itinerary: [
      ["Day 1", "Arrive in Bali", "Fly CI771 from Taipei to DPS, then keep the first day easy with check-in, dinner, and rest.", ["Arrival", "Easy dinner", "Rest"], [["Pacing", "Keep the first day intentionally light so the trip opens in a calm way."], ["Suggested plan", "Check in, walk nearby, have dinner, and sleep early."]]],
      ["Day 2", "Slow Bali day", "Use this day for beach clubs, massage, and free time in Seminyak.", ["Seminyak", "Massage", "Free time"], [["Style", "This day works best as a mood-setting leisure day rather than a packed sightseeing run."], ["Reminder", "Strong sun, beach time, and last-minute shopping make this a good prep day too."]]],
      ["Day 3", "Enter the volcano segment", "The East Java route begins here, with the key order Ijen → Sewu → Bromo.", ["Tour transfer", "Volcano region", "Malang drop"], [["Key check", "Reconfirm the tour order and whether the final drop-off is in Malang."], ["Prep", "Sleep may get fragmented from here, so keep warm layers and essentials ready."]]],
      ["Day 4", "Ijen Crater", "Blue fire and crater views make this one of the signature highlights.", ["Blue fire", "Night hike", "Volcano"], [["Highlight", "The blue fire and daylight crater lake are the defining visuals here."], ["Gear", "A headlamp, grip shoes, light jacket, and mask all help."]]],
      ["Day 5", "Tumpak Sewu", "A dramatic waterfall day with physical terrain and slippery paths.", ["Waterfall", "Grip shoes", "High-energy day"], [["Terrain", "Expect wet steps, descents, and one of the most physical days of the trip."], ["Pack note", "A change of clothes and waterproof protection for phones are worth bringing."]]],
      ["Day 6", "Mount Bromo Sunrise", "The classic sunrise finale with cold air and possible volcanic dust.", ["Sunrise", "Jacket", "Mask or buff"], [["Highlight", "Bromo is the iconic finale of the volcano sequence."], ["Reminder", "It can be windy, cold, and dusty before sunrise."]]],
      ["Day 7", "Malang → Yogyakarta", "Take the train to Yogyakarta and use this as a softer transition day.", ["Train", "Rest", "City switch"], [["Pacing", "This is a good recovery day after the high-intensity volcano stretch."], ["Transport", "Leave enough buffer for the train and keep luggage handling easy."]]],
      ["Day 8", "Borobudur + Prambanan", "A full culture day built around two major temple landmarks.", ["Borobudur", "Prambanan", "Culture"], [["Culture note", "The two temple sites give the trip a much deeper finish beyond nature and adventure."], ["Suggested setup", "A driver or guided tour can make the day smoother and more rewarding."]]],
      ["Day 9", "Departure day", "Take the early airport rail to YIA and keep at least a 2-hour buffer.", ["Airport rail", "Early start", "Fly home"], [["Timing", "The 06:00-ish airport rail remains the safer low-stress option."], ["Final reminder", "Prepare passport, tickets, and payment proofs the night before."]]]
    ],
    budgetLabels: {
      flight: ["Flights", "China Airlines round trip"],
      hotel: ["Hotels", "Seminyak, Malang, Yogyakarta"],
      volcanoDeposit: ["Volcano deposit", "Ijen / Sewu / Bromo tour"],
      volcanoBalance: ["Volcano balance", "Remaining tour payment"],
      templeTour: ["Temple tour", "Borobudur + Prambanan"],
      train: ["Train", "Malang → Yogyakarta"],
      dailySpend: ["Daily spend", "Food, massage, incidentals"]
    },
    visaPoints: [
      ["30-day tourist option", "Indonesia's official eVisa FAQ shows a common 30-day tourist stay, extendable once, with a fee of IDR 500,000."],
      ["Taiwan passport holders", "Current travel information suggests Taiwan travelers can usually use e-VOA / VOA, but the official system should still be checked before departure."],
      ["Core documents", "Passport valid for at least 6 months, onward ticket, and enough funds."],
      ["Best move", "Apply in advance if you want a smoother arrival process."]
    ],
    arrivalPoints: [
      ["Bali tourist levy", "Foreign visitors to Bali pay a one-time levy of Rp150,000, online or on arrival."],
      ["Keep proof", "Love Bali provides a QR code payment proof worth saving."],
      ["Separate from visa fee", "This is not the same as your visa cost."],
      ["Final check", "Re-check the official eVisa and Love Bali sites close to June 13, 2026."]
    ]
  },
  id: {
    heroKicker: "Indonesia travel handbook",
    heroTitle: "Bali × Jawa",
    heroSubtitle: "Santai di pulau, fajar gunung api, dan penutup candi",
    heroDates: "2026 / 06 / 13 - 2026 / 06 / 21",
    heroDestinations: "Seminyak • Ijen • Tumpak Sewu • Bromo • Malang • Yogyakarta",
    navOverview: "Ringkasan",
    navItinerary: "Itinerary",
    navBudget: "Budget",
    navVisa: "Visa",
    overviewLabel: "Journey Overview",
    overviewTitle: "Rute klasik Indonesia yang lengkap, nyaman, dan punya ritme emosi yang rapi",
    overviewLead: "Awalnya santai di Bali, lalu masuk ke dramanya gunung api Jawa Timur, lalu ditutup dengan budaya dan kenyamanan kota di Yogyakarta.",
    routeLabel: "Flight & Route",
    routeTitle: "Penerbangan dan rute",
    departTag: "Pergi",
    departTitle: "Taipei ke Bali",
    returnTag: "Pulang",
    returnTitle: "Yogyakarta ke Taipei via Jakarta",
    tripFlowLabel: "Trip Flow",
    tripFlowValue: "Taipei → Bali → Ijen → Sewu → Bromo → Malang → Yogyakarta",
    stayLabel: "Stay Plan",
    stayTitle: "Rencana menginap",
    transportTitle: "Transportasi dan waktu",
    packingTitle: "Pakaian dan keamanan",
    itineraryLabel: "Day by Day",
    itineraryTitle: "Rencana harian",
    itineraryLead: "Setiap hari bisa dibuka seperti kartu panduan perjalanan agar lebih nyaman dibaca saat sedang jalan.",
    budgetLabel: "Budget Overview",
    budgetTitle: "Ringkasan budget",
    budgetLead: "Konversi IDR di bawah memakai kurs perkiraan NT$1 ≈ Rp531, untuk planning saja.",
    paidTitle: "Sudah dibayar",
    openTitle: "Belum dibayar",
    totalBudgetLabel: "Total budget",
    budgetRateNote: "Kurs perkiraan: NT$1 ≈ Rp531",
    dailyAverageLabel: "Rata-rata harian",
    budgetStyleNote: "Trip mandiri berkualitas, bukan mewah, tapi sangat lengkap",
    visaLabel: "Visa & Entry",
    visaTitle: "Catatan visa dan masuk",
    visaPanelTitle: "Visa wisata Indonesia",
    arrivalPanelTitle: "Tambahan saat tiba di Bali",
    visaLinkOne: "eVisa resmi Indonesia",
    visaLinkTwo: "Situs resmi Love Bali",
    overviewStats: [
      ["Traveler", "Yung Wen Cheng"],
      ["Durasi", "9 hari / 8 malam"],
      ["Jenis trip", "Mandiri berkualitas"],
      ["Ringkas", "Pengalaman, santai, budaya"]
    ],
    flightLabels: {
      airline: "Maskapai",
      flight: "Penerbangan",
      route: "Rute",
      time: "Waktu",
      duration: "Durasi"
    },
    stays: [
      ["13 Jun - 15 Jun", "Seminyak, Bali", "Courtyard by Marriott Bali Seminyak Resort", "Pembukaan yang santai dengan resort nyaman."],
      ["15 Jun - 17 Jun", "Area gunung api Jawa", "Tour provided", "Segmen gunung api diatur oleh tour."],
      ["18 Jun", "Malang", "The Shalimar Boutique Hotel", "Malam istirahat yang lebih rapi setelah bagian petualangan."],
      ["19 Jun - 21 Jun", "Yogyakarta", "Aveta Hotel Malioboro", "Praktis untuk candi dan alur pulang."]
    ],
    transportNotes: [
      ["Urutan gunung api", "Pertahankan urutan Ijen → Sewu → Bromo, lalu pastikan drop-off di Malang."],
      ["Kereta YIA", "Sekitar jam 06.00 adalah rencana yang aman, biasanya 35 sampai 40 menit."],
      ["Buffer bandara", "Usahakan tiba di bandara minimal 2 jam lebih awal."]
    ],
    packingNotes: [
      ["Sepatu", "Gunakan sepatu dengan grip bagus untuk hari gunung api dan air terjun."],
      ["Pakaian hangat", "Ijen dan Bromo bisa terasa dingin sebelum sunrise."],
      ["Bagasi", "Catatan sekarang: 23kg ×2 saat pergi, 23kg ×1 saat pulang."]
    ],
    itinerary: [
      ["Hari 1", "Tiba di Bali", "Naik CI771 dari Taipei ke DPS, lalu jalani hari pertama dengan check-in, makan malam, dan istirahat.", ["Tiba", "Makan malam", "Istirahat"], [["Ritme", "Hari pertama paling enak dibuat ringan supaya tubuh menyesuaikan dulu."], ["Saran", "Check-in, jalan sebentar di sekitar hotel, makan malam, lalu istirahat lebih awal."]]],
      ["Hari 2", "Hari santai di Bali", "Gunakan hari ini untuk beach club, pijat, dan waktu bebas di Seminyak.", ["Seminyak", "Pijat", "Waktu bebas"], [["Gaya hari", "Hari ini paling bagus dipakai untuk suasana santai, bukan lari ke terlalu banyak spot."], ["Pengingat", "Cocok juga untuk beli kebutuhan kecil sebelum masuk segmen gunung api."]]],
      ["Hari 3", "Masuk segmen gunung api", "Rute Jawa Timur dimulai di sini dengan urutan Ijen → Sewu → Bromo.", ["Transfer tour", "Area gunung api", "Drop Malang"], [["Cek penting", "Pastikan lagi urutan tour dan drop-off terakhir di Malang."], ["Persiapan", "Dari sini ritme tidur bisa berantakan, jadi perlengkapan penting sebaiknya sudah rapi."]]],
      ["Hari 4", "Kawah Ijen", "Blue fire dan pemandangan kawah jadi salah satu sorotan utama.", ["Blue fire", "Hiking malam", "Gunung api"], [["Sorotan", "Blue fire dan danau kawah saat terang adalah dua visual paling kuat di sini."], ["Perlengkapan", "Headlamp, sepatu grip, jaket ringan, dan masker sangat membantu."]]],
      ["Hari 5", "Tumpak Sewu", "Hari air terjun yang dramatis dengan jalur fisik dan cukup licin.", ["Air terjun", "Sepatu grip", "Hari aktif"], [["Medan", "Hari ini biasanya paling berat secara fisik dengan jalur turun, basah, dan licin."], ["Catatan", "Baju ganti dan pelindung untuk HP sangat layak dibawa."]]],
      ["Hari 6", "Sunrise Bromo", "Penutup klasik dengan udara dingin dan kemungkinan debu vulkanik.", ["Sunrise", "Jaket", "Masker atau buff"], [["Sorotan", "Bromo adalah penutup paling ikonik untuk segmen gunung api."], ["Pengingat", "Sebelum matahari terbit bisa berangin, dingin, dan berdebu."]]],
      ["Hari 7", "Malang → Yogyakarta", "Naik kereta ke Yogyakarta dan jadikan ini hari transisi yang lebih lembut.", ["Kereta", "Istirahat", "Ganti kota"], [["Ritme", "Hari ini pas untuk recovery setelah rangkaian petualangan yang berat."], ["Transportasi", "Sisakan buffer waktu dan buat urusan bagasi tetap ringan."]]],
      ["Hari 8", "Borobudur + Prambanan", "Hari budaya penuh dengan dua landmark candi besar.", ["Borobudur", "Prambanan", "Budaya"], [["Catatan budaya", "Dua candi ini memberi penutup yang jauh lebih dalam daripada sekadar petualangan alam."], ["Saran", "Driver atau tur lokal bisa membuat hari ini jauh lebih nyaman."]]],
      ["Hari 9", "Hari pulang", "Naik kereta bandara pagi ke YIA dan sisakan buffer minimal 2 jam.", ["Kereta bandara", "Berangkat pagi", "Pulang"], [["Waktu", "Kereta sekitar jam 06.00 tetap pilihan yang paling aman."], ["Pengingat akhir", "Siapkan paspor, tiket, dan bukti pembayaran sejak malam sebelumnya."]]]
    ],
    budgetLabels: {
      flight: ["Tiket pesawat", "China Airlines pulang pergi"],
      hotel: ["Hotel", "Seminyak, Malang, Yogyakarta"],
      volcanoDeposit: ["Deposit gunung api", "Tour Ijen / Sewu / Bromo"],
      volcanoBalance: ["Sisa gunung api", "Sisa pembayaran tour"],
      templeTour: ["Tur candi", "Borobudur + Prambanan"],
      train: ["Kereta", "Malang → Yogyakarta"],
      dailySpend: ["Biaya harian", "Makan, pijat, pengeluaran kecil"]
    },
    visaPoints: [
      ["Opsi wisata 30 hari", "FAQ resmi eVisa Indonesia menunjukkan opsi wisata umum 30 hari, bisa diperpanjang sekali, dengan biaya IDR 500.000."],
      ["Pemegang paspor Taiwan", "Info yang saya cek menunjukkan pemegang paspor Taiwan umumnya bisa memakai e-VOA / VOA, tapi sistem resmi tetap perlu dicek lagi."],
      ["Dokumen inti", "Paspor minimal 6 bulan, tiket keluar, dan dana yang cukup."],
      ["Saran", "Ajukan lebih awal kalau ingin proses kedatangan lebih mulus."]
    ],
    arrivalPoints: [
      ["Levy wisata Bali", "Wisatawan asing ke Bali membayar levy satu kali Rp150.000, bisa online atau saat tiba."],
      ["Simpan bukti", "Love Bali memberikan bukti pembayaran QR code yang sebaiknya disimpan."],
      ["Terpisah dari visa", "Biaya ini berbeda dari biaya visa."],
      ["Cek akhir", "Cek lagi situs resmi eVisa dan Love Bali mendekati 13 Juni 2026."]
    ]
  }
};

const state = {
  lang: localStorage.getItem("bali-java-lang") || "zh-Hant"
};

function formatNumber(value) {
  return new Intl.NumberFormat().format(value);
}

function twd(value) {
  return `NT$ ${formatNumber(value)}`;
}

function idr(value) {
  return `Rp ${formatNumber(value)}`;
}

function formatBudget(item) {
  if (item.twdRange) {
    const [min, max] = item.twdRange;
    return `${twd(min)} - ${formatNumber(max)} / ${idr(min * EXCHANGE_RATE)} - ${formatNumber(max * EXCHANGE_RATE)}`;
  }
  return `${twd(item.twd)} / ${idr(item.twd * EXCHANGE_RATE)}`;
}

function sumRange(items) {
  return items.reduce(
    (acc, item) => {
      if (item.twdRange) {
        acc.min += item.twdRange[0];
        acc.max += item.twdRange[1];
      } else {
        acc.min += item.twd;
        acc.max += item.twd;
      }
      return acc;
    },
    { min: 0, max: 0 }
  );
}

function renderInfo(labels, flight) {
  return Object.entries(flight)
    .map(
      ([key, value]) => `
        <div class="info-line">
          <div class="info-line-label">${labels[key]}</div>
          <div class="info-line-value">${value}</div>
        </div>
      `
    )
    .join("");
}

function renderLanguage() {
  const copy = content[state.lang];

  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = copy[node.dataset.i18n];
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });

  document.getElementById("overview-stats").innerHTML = copy.overviewStats
    .map(
      ([label, value]) => `
        <article class="overview-stat">
          <div class="overview-stat-label">${label}</div>
          <div class="overview-stat-value">${value}</div>
        </article>
      `
    )
    .join("");

  document.getElementById("depart-flight").innerHTML = renderInfo(copy.flightLabels, FLIGHTS.depart);
  document.getElementById("return-flight").innerHTML = renderInfo(copy.flightLabels, FLIGHTS.return);

  document.getElementById("stay-list").innerHTML = copy.stays
    .map(
      ([dates, place, hotel, note]) => `
        <div class="stay-item">
          <div>
            <div class="stay-title">${hotel}</div>
            <div class="stay-desc">${place} · ${note}</div>
          </div>
          <div class="stay-meta">${dates}</div>
        </div>
      `
    )
    .join("");

  document.getElementById("transport-notes").innerHTML = copy.transportNotes
    .map(
      ([title, desc]) => `
        <div class="note-item">
          <div>
            <div class="bullet-title">${title}</div>
            <div class="note-desc">${desc}</div>
          </div>
        </div>
      `
    )
    .join("");

  document.getElementById("packing-notes").innerHTML = copy.packingNotes
    .map(
      ([title, desc]) => `
        <div class="note-item">
          <div>
            <div class="bullet-title">${title}</div>
            <div class="note-desc">${desc}</div>
          </div>
        </div>
      `
    )
    .join("");

  document.getElementById("itinerary-list").innerHTML = copy.itinerary
    .map(
      ([day, title, desc, tags, details]) => `
        <article class="day-card">
          <button class="day-header" type="button">
            <div>
              <div class="day-index">${day}</div>
              <div class="day-title">${title}</div>
              <div class="day-summary">${desc}</div>
            </div>
            <div class="toggle-icon">⌄</div>
          </button>
          <div class="day-content">
            <div class="day-content-inner">
              <div class="day-summary">${desc}</div>
              <div class="day-detail-list">
                ${details
                  .map(
                    ([detailTitle, detailDesc]) => `
                      <div class="day-detail-item">
                        <div class="day-detail-title">${detailTitle}</div>
                        <div class="day-detail-desc">${detailDesc}</div>
                      </div>
                    `
                  )
                  .join("")}
              </div>
              <div class="highlight-tags">
                ${tags.map((tag) => `<span>${tag}</span>`).join("")}
              </div>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  document.getElementById("paid-list").innerHTML = BUDGET.paid
    .map((item) => {
      const [title, desc] = copy.budgetLabels[item.key];
      return `
        <div class="budget-list-item">
          <div>
            <div class="budget-list-title">${title}</div>
            <div class="budget-list-desc">${desc}</div>
          </div>
          <div class="budget-list-amount-main">${formatBudget(item)}</div>
        </div>
      `;
    })
    .join("");

  document.getElementById("open-list").innerHTML = BUDGET.open
    .map((item) => {
      const [title, desc] = copy.budgetLabels[item.key];
      return `
        <div class="budget-list-item">
          <div>
            <div class="budget-list-title">${title}</div>
            <div class="budget-list-desc">${desc}</div>
          </div>
          <div class="budget-list-amount-main">${formatBudget(item)}</div>
        </div>
      `;
    })
    .join("");

  const paid = sumRange(BUDGET.paid);
  const open = sumRange(BUDGET.open);
  const totalMin = paid.min + open.min;
  const totalMax = paid.max + open.max;
  const avgMin = Math.round(totalMin / TRIP_DAYS);
  const avgMax = Math.round(totalMax / TRIP_DAYS);

  document.getElementById("budget-total").textContent =
    `${twd(totalMin)} - ${formatNumber(totalMax)} / ${idr(totalMin * EXCHANGE_RATE)} - ${formatNumber(totalMax * EXCHANGE_RATE)}`;
  document.getElementById("daily-average").textContent =
    `${twd(avgMin)} - ${formatNumber(avgMax)} / ${idr(avgMin * EXCHANGE_RATE)} - ${formatNumber(avgMax * EXCHANGE_RATE)}`;

  document.getElementById("visa-points").innerHTML = copy.visaPoints
    .map(
      ([title, desc]) => `
        <div class="bullet-item">
          <div>
            <div class="bullet-title">${title}</div>
            <div class="bullet-desc">${desc}</div>
          </div>
        </div>
      `
    )
    .join("");

  document.getElementById("arrival-points").innerHTML = copy.arrivalPoints
    .map(
      ([title, desc]) => `
        <div class="bullet-item">
          <div>
            <div class="bullet-title">${title}</div>
            <div class="bullet-desc">${desc}</div>
          </div>
        </div>
      `
    )
    .join("");

  bindDayCards();
}

function bindDayCards() {
  document.querySelectorAll(".day-header").forEach((button) => {
    button.onclick = () => {
      const card = button.closest(".day-card");
      const content = card.querySelector(".day-content");
      const isExpanded = card.classList.contains("expanded");

      document.querySelectorAll(".day-card").forEach((item) => {
        item.classList.remove("expanded");
        item.querySelector(".day-content").style.maxHeight = "0px";
      });

      if (!isExpanded) {
        card.classList.add("expanded");
        content.style.maxHeight = `${content.scrollHeight}px`;
      }
    };
  });
}

function bindLanguageButtons() {
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      localStorage.setItem("bali-java-lang", state.lang);
      renderLanguage();
    });
  });
}

function bindNav() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
      document.querySelectorAll(".page-section").forEach((section) => section.classList.remove("active"));
      button.classList.add("active");
      document.getElementById(button.dataset.target).classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

window.addEventListener("scroll", () => {
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  document.getElementById("pageProgress").style.width = `${scrolled}%`;
});

bindLanguageButtons();
bindNav();
renderLanguage();
