const EXCHANGE_RATE = 531;
const TRIP_DAYS = 9;

const LOCALES = {
  "zh-Hant": "zh-TW",
  en: "en-US",
  id: "id-ID"
};

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
    duration: "Multi-city return"
  }
};

const BUDGET = {
  paid: [
    { id: "flight", twd: 15000 },
    { id: "hotel", twd: 9202 },
    { id: "volcanoDeposit", twd: 3935 }
  ],
  open: [
    { id: "volcanoBalance", twd: 6065 },
    { id: "templeTour", twd: 2000 },
    { id: "train", twd: 1000 },
    { id: "dailySpend", twdRange: [6000, 10000] }
  ]
};

const translations = {
  "zh-Hant": {
    pageTitle: "峇里島 × 爪哇 2026 | 印尼旅遊手冊",
    pageDescription: "三語版印尼旅遊網站，整理峇里島、火山、日惹路線、住宿、預算與簽證提醒。",
    siteTag: "旅遊手冊",
    siteTitle: "峇里島 × 爪哇 2026",
    navOverview: "總覽",
    navHighlights: "亮點",
    navRoute: "路線",
    navStay: "住宿",
    navBudget: "預算",
    navVisa: "簽證",
    heroKicker: "海風、火山、神廟餘暉",
    heroTitle: "一趟把放鬆、冒險與文化都收進來的印尼旅程。",
    heroSummary:
      "9天8夜，從峇里島的度假感出發，穿過東爪哇的火山與瀑布，最後在日惹收尾，是一版真的可以直接帶出門看的旅遊手冊。",
    heroChipOne: "9天8夜",
    heroChipTwo: "峇里島 + 東爪哇 + 日惹",
    heroChipThree: "高級感手機旅遊版",
    heroPrimaryAction: "看每日行程",
    heroSecondaryAction: "看入境提醒",
    heroPanelTag: "旅程定位",
    heroPanelTitle: "高品質自由行，不走浮誇奢華",
    heroPanelBody: "前段放鬆、中段震撼、尾段文化完整，整體是很高 CP 但不廉價的經典路線。",
    routeRibbonLabel: "路線流動",
    routeRibbonValue: "台北 → 峇里島 → Ijen → Sewu → Bromo → Malang → Yogyakarta",
    showcaseKicker: "風格核心",
    showcaseTitle: "先柔，再烈，再沉靜。",
    showcaseIntro: "這趟最迷人的地方不是只有景點，而是情緒很順地一路推進：海邊、熔岩晨光、最後回到神廟石紋與城市節奏。",
    routeKicker: "移動方式",
    routeTitle: "航班與整體路線",
    routeIntro: "先從峇里島輕鬆落地，接著進入火山段的重點路線，最後在日惹用文化景點與城市住宿收得很完整。",
    departTag: "去程",
    departTitle: "台北飛峇里島",
    returnTag: "回程",
    returnTitle: "日惹經雅加達回台北",
    stayKicker: "住宿節奏",
    stayTitle: "每一段住在哪裡",
    stayIntro: "前段是度假感飯店，中段交給火山團安排，後段則是城市中比較有質感的收尾住宿。",
    itineraryKicker: "每日安排",
    itineraryTitle: "日程總覽",
    itineraryIntro: "整體節奏很平衡，有休息、有自然震撼、有跨城移動，也有日惹最值得看的文化核心。",
    budgetKicker: "財務地圖",
    budgetTitle: "預算一眼看懂",
    budgetIntro: "大筆費用已經先鎖住，所以現在最重要的是把尾款、交通與生活費抓得舒服而穩。以下印尼盾換算以 NT$1 約等於 Rp531 粗估。",
    budgetPaidTag: "已支付",
    budgetPaidTitle: "已經鎖定的支出",
    budgetOpenTag: "尚未支付",
    budgetOpenTitle: "還要補的項目",
    exchangeTag: "預估匯率",
    exchangeBody: "這裡是旅遊規劃用的估算倍率，真正換匯或刷卡前還是要再看當天匯率。",
    visaKicker: "入境重點",
    visaTitle: "簽證與入境清單",
    visaIntro: "這裡補上 2026 年旅遊前最需要注意的印尼入境資訊，並保留官方網站連結方便最後再次確認。",
    visaCardTag: "台灣護照適用",
    visaCardTitle: "印尼旅遊簽證",
    arrivalCardTag: "一起記得",
    arrivalCardTitle: "峇里島入境附加事項",
    visaPrimaryLink: "印尼官方 eVisa",
    visaSecondaryLink: "Bali 官方 Love Bali",
    notesKicker: "實戰提醒",
    notesTitle: "最值得先釘住的提醒",
    notesIntro: "這些通常是最容易在旅途中出錯、但其實提前看到就會很順的細節。",
    transportTitle: "交通與時間安排",
    packingTitle: "穿著與安全",
    footerLine: "以峇里島海岸、火山日出與爪哇文化日為靈感製作的口袋旅遊手冊。",
    footerCredit: "頁面上的雙幣值換算為規劃估算，不等於刷卡或換匯即時報價。",
    footerRepo: "查看 GitHub repo",
    dockOverview: "總覽",
    dockItinerary: "行程",
    dockBudget: "預算",
    dockVisa: "簽證",
    stats: [
      ["旅人", "Yung Wen Cheng"],
      ["旅行日期", "2026/06/13 - 2026/06/21"],
      ["旅程定位", "高品質自由行，非奢華"],
      ["一句話", "有體驗、有放鬆、有文化"]
    ],
    flightLabels: {
      airline: "航空",
      flight: "航班",
      route: "路線",
      time: "時間",
      duration: "飛行時間"
    },
    showcaseCards: [
      {
        title: "Bali calm",
        body: "Seminyak 的安排不是多餘，而是整趟旅程的呼吸點，讓後面的火山段更有對比。"
      },
      {
        title: "Volcano drama",
        body: "Ijen 藍火、Sewu 瀑布、Bromo 日出，這三段把自然景觀的情緒張力直接拉滿。"
      },
      {
        title: "Temple finish",
        body: "最後留給日惹，讓這趟不只熱血，也有文化與建築的收束感。"
      }
    ],
    journeyStops: [
      ["Bali", "Seminyak 緩慢開場，海邊、按摩、度假感拉滿。"],
      ["Ijen", "藍火與夜行火山，是這趟最戲劇化的段落。"],
      ["Sewu", "瀑布地形壯觀，行程節奏會偏體力型。"],
      ["Bromo", "清晨日出是招牌場景，保暖很重要。"],
      ["Malang", "轉場休息點，讓身體從火山段回神。"],
      ["Yogyakarta", "神廟與城市文化收尾，層次完整。"]
    ],
    stays: [
      {
        dates: "6/13 - 6/15",
        place: "Seminyak, Bali",
        hotel: "Courtyard by Marriott Bali Seminyak Resort",
        note: "先用舒適度假飯店讓第一段節奏慢下來。"
      },
      {
        dates: "6/15 - 6/17",
        place: "Java volcano region",
        hotel: "Tour provided",
        note: "火山段由當地 tour 安排住宿與移動。"
      },
      {
        dates: "6/18",
        place: "Malang",
        hotel: "The Shalimar Boutique Hotel",
        note: "在火山段後安排一晚有質感的喘息點。"
      },
      {
        dates: "6/19 - 6/21",
        place: "Yogyakarta",
        hotel: "Aveta Hotel Malioboro",
        note: "地點方便，適合文化景點與回程銜接。"
      }
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "抵達峇里島",
        body: "搭乘華航 CI771 從台北直飛 DPS，下午抵達後建議以 check-in、放鬆與提早休息為主。",
        highlights: ["抵達 + 入住", "晚餐輕鬆安排", "調時差"]
      },
      {
        day: "Day 2",
        title: "Bali 放鬆日",
        body: "Beach club、按摩、海邊散步都很適合排在這天，讓整趟旅程先有舒服的開場。",
        highlights: ["Seminyak 海邊", "按摩", "自由活動"]
      },
      {
        day: "Day 3",
        title: "進入火山段",
        body: "開始東爪哇移動，行程重點順序是 Ijen → Sewu → Bromo，請確認 tour drop-off 在 Malang。",
        highlights: ["前往火山區", "跟團移動", "夜間節奏"]
      },
      {
        day: "Day 4",
        title: "Ijen Crater",
        body: "藍火與火山口是代表性亮點，這段通常需要凌晨出發，鞋子與保暖層很重要。",
        highlights: ["Ijen 藍火", "夜間健行", "火山體驗"]
      },
      {
        day: "Day 5",
        title: "Tumpak Sewu Waterfall",
        body: "瀑布景觀壓迫感很強，路線會有濕滑與上下坡，這天的體力需求通常最高。",
        highlights: ["瀑布地形", "防滑鞋", "換洗衣物"]
      },
      {
        day: "Day 6",
        title: "Mount Bromo Sunrise",
        body: "Bromo 日出是經典收尾，清晨氣溫偏低，火山灰與風都比想像中明顯。",
        highlights: ["清晨日出", "外套", "口罩或 Buff"]
      },
      {
        day: "Day 7",
        title: "Malang 移動到日惹",
        body: "從 Malang 搭火車前往 Yogyakarta，這天整體節奏可以放慢，補眠和整理照片都很適合。",
        highlights: ["火車移動", "城市切換", "休息日"]
      },
      {
        day: "Day 8",
        title: "Borobudur + Prambanan",
        body: "佛教與印度教兩座重量級神廟會把這趟文化層次拉滿，是非常值得保留的完整日。",
        highlights: ["婆羅浮屠", "普蘭巴南", "文化核心"]
      },
      {
        day: "Day 9",
        title: "回程日",
        body: "建議搭 06:00 左右的機場鐵路前往 YIA，保留至少 2 小時機場緩衝，再銜接回台班機。",
        highlights: ["YIA Airport Rail Link", "提早出發", "回台灣"]
      }
    ],
    budgetLabels: {
      flight: "機票",
      hotel: "住宿",
      volcanoDeposit: "火山訂金",
      volcanoBalance: "火山尾款",
      templeTour: "神廟團",
      train: "火車",
      dailySpend: "生活費"
    },
    budgetSummaryLabels: {
      total: "總預算",
      average: "日均預算",
      style: "旅程風格",
      rate: "換算基準"
    },
    budgetStyleValue: "高 CP 的完整經典路線",
    budgetRateValue: "頁面估算採 NT$1 ≈ Rp531",
    budgetPaidTotal: "已付合計",
    budgetOpenTotal: "待付估算",
    visaPoints: [
      {
        title: "最有機會使用的是 30 天旅遊入境方案",
        body: "依印尼官方 eVisa FAQ，常見旅遊方案為停留最長 30 天，可延長一次 30 天，費用為 IDR 500,000，且核發後需在 90 天內使用。"
      },
      {
        title: "台灣旅客通常可走 e-VOA / VOA 路線",
        body: "我查到的 2026 旅遊資料與 Bali 旅遊簽證整理中，台灣護照被列為可使用 Visa on Arrival 的國籍之一；但正式申請前，仍建議在官方 eVisa 系統再次確認護照國籍選項。"
      },
      {
        title: "基本文件很明確",
        body: "護照效期至少 6 個月、印尼離境機票，以及足夠旅費，是官方 FAQ 明列的核心條件。"
      },
      {
        title: "建議做法",
        body: "如果不想在抵達時排隊，建議出發前先用官方網站申請 e-VOA，並把核准信或付款證明存到手機裡。"
      }
    ],
    arrivalPoints: [
      {
        title: "峇里島旅遊稅",
        body: "Bali 官方 Love Bali FAQ 顯示，外國旅客前往峇里島需支付一次性外籍旅客稅 Rp150,000，可在抵達前線上付款，也可於機場或港口付款。"
      },
      {
        title: "付款證明要留著",
        body: "Love Bali 會寄送含 QR code 的憑證，建議截圖與下載備份。"
      },
      {
        title: "這筆費用和簽證費分開",
        body: "Bali 旅遊稅不是簽證費，兩者要分開準備。"
      },
      {
        title: "出發前最後確認",
        body: "入境規則偶爾會調整，尤其接近 2026/06/13 出發前，建議再用印尼官方 eVisa 網站與 Love Bali 官網做最後一次確認。"
      }
    ],
    transportNotes: [
      {
        title: "火山順序確認",
        body: "重點順序應為 Ijen → Sewu → Bromo，並確認 tour 最後 drop 在 Malang。"
      },
      {
        title: "YIA 機場鐵路",
        body: "你原本抓 06:00 班次是合理保守的安排，從機場鐵路進出市區大約 35 到 40 分鐘。"
      },
      {
        title: "機場緩衝",
        body: "回程建議至少提早 2 小時到機場，尤其是國際段銜接時。"
      }
    ],
    packingNotes: [
      {
        title: "火山段鞋子",
        body: "請穿有抓地力的運動鞋或登山鞋，不建議穿平底拖鞋或沒有支撐的鞋款。"
      },
      {
        title: "清晨保暖",
        body: "Bromo 與 Ijen 凌晨真的會冷，外套、薄刷毛或風衣值得帶。"
      },
      {
        title: "行李額度",
        body: "你目前整理的是去程 23kg ×2、回程 23kg ×1；出發前還是建議再核對一次訂位紀錄。"
      }
    ]
  },
  en: {
    pageTitle: "Bali × Java 2026 | Indonesia Travel Handbook",
    pageDescription: "A premium trilingual Bali and Java travel website covering route, budget, stays, and visa notes.",
    siteTag: "Travel handbook",
    siteTitle: "Bali × Java 2026",
    navOverview: "Overview",
    navHighlights: "Highlights",
    navRoute: "Route",
    navStay: "Stay",
    navBudget: "Budget",
    navVisa: "Visa",
    heroKicker: "Sea breeze, volcano glow, temple light",
    heroTitle: "An Indonesia journey that blends rest, adventure, and culture beautifully.",
    heroSummary: "Nine days, eight nights, starting with Bali ease, moving through East Java volcano drama, and ending in Yogyakarta with cultural depth and practical comfort.",
    heroChipOne: "9 days / 8 nights",
    heroChipTwo: "Bali + East Java + Yogyakarta",
    heroChipThree: "Premium mobile-first guide",
    heroPrimaryAction: "View itinerary",
    heroSecondaryAction: "Check entry notes",
    heroPanelTag: "Trip profile",
    heroPanelTitle: "High-quality DIY, not flashy luxury",
    heroPanelBody: "The route leans on strong experiences, polished stays, and calm pacing rather than expensive excess.",
    routeRibbonLabel: "Trip flow",
    routeRibbonValue: "Taipei → Bali → Ijen → Sewu → Bromo → Malang → Yogyakarta",
    showcaseKicker: "Mood system",
    showcaseTitle: "Soft first, then volcanic, then still.",
    showcaseIntro: "What makes the route feel elevated is not only the landmarks, but the emotional sequencing: coast, lava dawns, and temple stone to finish.",
    routeKicker: "Movement",
    routeTitle: "Flight and route snapshot",
    routeIntro: "The trip opens softly in Bali, turns cinematic in the volcano zone, and closes with temples, trains, and city comfort in Yogyakarta.",
    departTag: "Outbound",
    departTitle: "Taipei to Bali",
    returnTag: "Return",
    returnTitle: "Yogyakarta to Taipei via Jakarta",
    stayKicker: "Stay rhythm",
    stayTitle: "Where each segment is based",
    stayIntro: "A resort-style start, tour-arranged volcano nights in the middle, and polished city stays to finish the route with ease.",
    itineraryKicker: "Daily flow",
    itineraryTitle: "Day-by-day itinerary",
    itineraryIntro: "The pacing balances recovery, nature spectacle, transit, and major culture stops without making the trip feel overloaded.",
    budgetKicker: "Money map",
    budgetTitle: "Budget at a glance",
    budgetIntro: "Most big-ticket items are already secured, so the remaining spend is clear and manageable. IDR conversions below use a rough planning rate of NT$1 ≈ Rp531.",
    budgetPaidTag: "Already paid",
    budgetPaidTitle: "Locked-in costs",
    budgetOpenTag: "Still open",
    budgetOpenTitle: "Remaining items",
    exchangeTag: "Planning rate",
    exchangeBody: "Treat this as a planning shortcut only, and check the live rate again before exchanging cash or making transfers.",
    visaKicker: "Entry essentials",
    visaTitle: "Visa and arrival checklist",
    visaIntro: "This section adds the key Indonesia entry details relevant to a June 2026 leisure trip, plus official links for a final pre-departure check.",
    visaCardTag: "For Taiwan passport holders",
    visaCardTitle: "Indonesia tourist visa",
    arrivalCardTag: "Also remember",
    arrivalCardTitle: "Bali arrival extras",
    visaPrimaryLink: "Official Indonesia eVisa",
    visaSecondaryLink: "Official Love Bali levy site",
    notesKicker: "Field notes",
    notesTitle: "Reminders worth pinning",
    notesIntro: "These details are the ones most likely to save time, stress, or sleepy mistakes during the trip.",
    transportTitle: "Transport and timing",
    packingTitle: "Packing and safety",
    footerLine: "Designed as a pocket-friendly handbook inspired by Bali coasts, volcano dawns, and Java culture days.",
    footerCredit: "The dual-currency figures on this page are planning estimates, not live payment quotes.",
    footerRepo: "View GitHub repo",
    dockOverview: "Overview",
    dockItinerary: "Days",
    dockBudget: "Budget",
    dockVisa: "Visa",
    stats: [
      ["Traveler", "Yung Wen Cheng"],
      ["Travel dates", "2026/06/13 - 2026/06/21"],
      ["Trip style", "High-quality DIY trip, not luxury"],
      ["Summary", "Experience, relaxation, and culture"]
    ],
    flightLabels: {
      airline: "Airline",
      flight: "Flight",
      route: "Route",
      time: "Time",
      duration: "Duration"
    },
    showcaseCards: [
      {
        title: "Bali calm",
        body: "Seminyak is not filler. It is the reset and softness that gives the volcano section better contrast."
      },
      {
        title: "Volcano drama",
        body: "Ijen blue fire, Sewu waterfall, and Bromo sunrise create the strongest natural drama of the whole trip."
      },
      {
        title: "Temple finish",
        body: "Ending in Yogyakarta gives the route cultural gravity, not just adrenaline."
      }
    ],
    journeyStops: [
      ["Bali", "A slow opening in Seminyak with beach time, spa energy, and resort calm."],
      ["Ijen", "Blue fire and crater drama make this the most theatrical stretch."],
      ["Sewu", "A powerful waterfall day with a more physical rhythm."],
      ["Bromo", "Sunrise is the signature moment, and warmth matters."],
      ["Malang", "A transition stop that lets the body recover after the volcano run."],
      ["Yogyakarta", "Temples and city culture give the trip a complete finish."]
    ],
    stays: [
      {
        dates: "Jun 13 - Jun 15",
        place: "Seminyak, Bali",
        hotel: "Courtyard by Marriott Bali Seminyak Resort",
        note: "A comfortable resort opening to ease into the trip."
      },
      {
        dates: "Jun 15 - Jun 17",
        place: "Java volcano region",
        hotel: "Tour provided",
        note: "Accommodation and transfers are handled by the volcano tour."
      },
      {
        dates: "Jun 18",
        place: "Malang",
        hotel: "The Shalimar Boutique Hotel",
        note: "A polished reset night after the rugged volcano segment."
      },
      {
        dates: "Jun 19 - Jun 21",
        place: "Yogyakarta",
        hotel: "Aveta Hotel Malioboro",
        note: "Convenient for temple touring and the final departure sequence."
      }
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrive in Bali",
        body: "Fly CI771 from Taipei to DPS and keep the first afternoon light with check-in, dinner, and rest.",
        highlights: ["Arrival and hotel", "Easy dinner", "Jet lag reset"]
      },
      {
        day: "Day 2",
        title: "Slow Bali day",
        body: "A beach club, massage, and coastal wandering fit perfectly here to open the trip on a soft note.",
        highlights: ["Seminyak coast", "Massage", "Free time"]
      },
      {
        day: "Day 3",
        title: "Enter the volcano segment",
        body: "The East Java section begins here. The key order is Ijen → Sewu → Bromo, with drop-off ideally confirmed for Malang.",
        highlights: ["Transfer inland", "Tour logistics", "Night rhythm"]
      },
      {
        day: "Day 4",
        title: "Ijen Crater",
        body: "Blue fire and crater scenery are the headliners, usually requiring a very early departure and proper layers.",
        highlights: ["Blue fire", "Night hike", "Volcano experience"]
      },
      {
        day: "Day 5",
        title: "Tumpak Sewu Waterfall",
        body: "This is the most physically demanding day, with wet surfaces, descents, and dramatic waterfall terrain.",
        highlights: ["Waterfall terrain", "Grip shoes", "Change of clothes"]
      },
      {
        day: "Day 6",
        title: "Mount Bromo sunrise",
        body: "The classic finale of the volcano run. Expect cold dawn air, wind, and volcanic dust.",
        highlights: ["Sunrise", "Jacket", "Mask or buff"]
      },
      {
        day: "Day 7",
        title: "Malang to Yogyakarta",
        body: "Take the train from Malang to Yogyakarta and use the day as a softer reset after the adventure-heavy segment.",
        highlights: ["Train ride", "City switch", "Recovery day"]
      },
      {
        day: "Day 8",
        title: "Borobudur and Prambanan",
        body: "A strong culture day built around Indonesia's most iconic Buddhist and Hindu temple landmarks.",
        highlights: ["Borobudur", "Prambanan", "Culture focus"]
      },
      {
        day: "Day 9",
        title: "Departure day",
        body: "The YIA airport rail around 06:00 remains the safest plan, keeping a two-hour airport buffer before the flight home.",
        highlights: ["YIA Airport Rail Link", "Early start", "Fly home"]
      }
    ],
    budgetLabels: {
      flight: "Flights",
      hotel: "Hotels",
      volcanoDeposit: "Volcano deposit",
      volcanoBalance: "Volcano balance",
      templeTour: "Temple tour",
      train: "Train",
      dailySpend: "Daily spend"
    },
    budgetSummaryLabels: {
      total: "Total budget",
      average: "Daily average",
      style: "Trip profile",
      rate: "Rate used"
    },
    budgetStyleValue: "Classic route with strong value",
    budgetRateValue: "Planning estimate uses NT$1 ≈ Rp531",
    budgetPaidTotal: "Paid so far",
    budgetOpenTotal: "Remaining estimate",
    visaPoints: [
      {
        title: "The likely fit is the 30-day tourist entry option",
        body: "Indonesia's official eVisa FAQ shows a common leisure option allowing up to 30 days, extendable once for another 30 days, with a fee of IDR 500,000 and a 90-day use window after issuance."
      },
      {
        title: "Taiwan travelers are generally treated as eligible for VOA / e-VOA",
        body: "The 2026 travel information I found lists Taiwan among the nationalities able to use Visa on Arrival. I still recommend confirming the passport nationality option directly in the official Indonesia eVisa system before paying."
      },
      {
        title: "Core documents are straightforward",
        body: "A passport valid for at least six months and an onward or return ticket are specifically listed in the official immigration FAQ."
      },
      {
        title: "Best practical move",
        body: "If you want a smoother arrival, apply online in advance and keep the approval or payment proof saved on your phone."
      }
    ],
    arrivalPoints: [
      {
        title: "Bali tourist levy",
        body: "The official Love Bali FAQ states that foreign visitors to Bali pay a one-time levy of Rp150,000, either online before arrival or at payment counters in Bali."
      },
      {
        title: "Keep the QR voucher",
        body: "Love Bali sends proof of payment with a QR code, and it is smart to keep both a screenshot and a downloaded copy."
      },
      {
        title: "This is separate from the visa fee",
        body: "The Bali levy is not the same thing as your Indonesia visa cost."
      },
      {
        title: "Check once more before June 13, 2026",
        body: "Entry rules can shift, so a final review on the official Indonesia eVisa site and the Love Bali site right before departure is still the safest move."
      }
    ],
    transportNotes: [
      {
        title: "Confirm the volcano order",
        body: "The route should stay Ijen → Sewu → Bromo, with final drop-off confirmed for Malang."
      },
      {
        title: "YIA airport rail",
        body: "Your 06:00-ish airport train plan is sensible. Travel time is usually around 35 to 40 minutes."
      },
      {
        title: "Airport buffer",
        body: "Aim to arrive at the airport at least two hours early for the return sequence."
      }
    ],
    packingNotes: [
      {
        title: "Footwear for volcano days",
        body: "Wear shoes with proper grip and support. Flat sandals are a bad idea for this section."
      },
      {
        title: "Cold pre-dawn air",
        body: "Bromo and Ijen can feel genuinely cold before sunrise, so bring a jacket or windproof layer."
      },
      {
        title: "Baggage allowance",
        body: "Your current note is 23 kg x2 outbound and 23 kg x1 inbound. It is still worth checking the live booking record once more."
      }
    ]
  },
  id: {
    pageTitle: "Bali × Jawa 2026 | Buku Perjalanan Indonesia",
    pageDescription: "Website perjalanan premium tiga bahasa untuk rute Bali, gunung api Jawa, budget, dan catatan visa.",
    siteTag: "Buku perjalanan",
    siteTitle: "Bali × Jawa 2026",
    navOverview: "Ringkasan",
    navHighlights: "Sorotan",
    navRoute: "Rute",
    navStay: "Menginap",
    navBudget: "Budget",
    navVisa: "Visa",
    heroKicker: "Angin laut, cahaya gunung api, dan siluet candi",
    heroTitle: "Perjalanan Indonesia yang memadukan santai, petualangan, dan budaya dengan indah.",
    heroSummary: "Sembilan hari delapan malam, dimulai dengan ritme santai di Bali, lalu masuk ke dramatisnya gunung api di Jawa Timur, dan ditutup dengan sisi budaya Yogyakarta.",
    heroChipOne: "9 hari / 8 malam",
    heroChipTwo: "Bali + Jawa Timur + Yogyakarta",
    heroChipThree: "Panduan mobile premium",
    heroPrimaryAction: "Lihat itinerary",
    heroSecondaryAction: "Cek catatan masuk",
    heroPanelTag: "Profil perjalanan",
    heroPanelTitle: "Mandiri berkualitas, bukan mewah berlebihan",
    heroPanelBody: "Trip ini terasa mahal di pengalaman, bukan di pemborosan: santai di depan, dramatis di tengah, dan rapi di akhir.",
    routeRibbonLabel: "Alur perjalanan",
    routeRibbonValue: "Taipei → Bali → Ijen → Sewu → Bromo → Malang → Yogyakarta",
    showcaseKicker: "Sistem suasana",
    showcaseTitle: "Lembut dulu, lalu vulkanik, lalu tenang.",
    showcaseIntro: "Yang membuat rute ini terasa mewah bukan hanya destinasinya, tetapi transisi suasananya: pantai, fajar lava, lalu penutup candi dan kota.",
    routeKicker: "Pergerakan",
    routeTitle: "Ringkasan penerbangan dan rute",
    routeIntro: "Perjalanan dimulai dengan ringan di Bali, lalu masuk ke bagian paling spektakuler di area gunung api, dan berakhir dengan candi serta kenyamanan kota di Yogyakarta.",
    departTag: "Pergi",
    departTitle: "Taipei ke Bali",
    returnTag: "Pulang",
    returnTitle: "Yogyakarta ke Taipei via Jakarta",
    stayKicker: "Irama menginap",
    stayTitle: "Basis di tiap segmen",
    stayIntro: "Awal dengan resort nyaman, tengah diatur oleh tur gunung api, lalu ditutup dengan hotel kota yang rapi dan praktis.",
    itineraryKicker: "Alur harian",
    itineraryTitle: "Rencana hari per hari",
    itineraryIntro: "Ritmenya seimbang antara istirahat, alam yang dramatis, perpindahan kota, dan sorotan budaya besar tanpa terasa terlalu padat.",
    budgetKicker: "Peta biaya",
    budgetTitle: "Budget dalam sekali lihat",
    budgetIntro: "Biaya terbesar sudah terkunci, jadi sisa pengeluaran sekarang terlihat cukup jelas dan mudah dikendalikan. Konversi IDR di bawah memakai kurs perkiraan NT$1 ≈ Rp531.",
    budgetPaidTag: "Sudah dibayar",
    budgetPaidTitle: "Biaya yang sudah pasti",
    budgetOpenTag: "Belum dibayar",
    budgetOpenTitle: "Item yang tersisa",
    exchangeTag: "Kurs perkiraan",
    exchangeBody: "Anggap ini sebagai angka bantu untuk perencanaan, lalu cek lagi kurs live sebelum tukar uang atau transfer.",
    visaKicker: "Masuk ke Indonesia",
    visaTitle: "Checklist visa dan kedatangan",
    visaIntro: "Bagian ini menambahkan poin masuk Indonesia yang paling relevan untuk perjalanan wisata Juni 2026, plus tautan resmi untuk cek akhir sebelum berangkat.",
    visaCardTag: "Untuk paspor Taiwan",
    visaCardTitle: "Visa wisata Indonesia",
    arrivalCardTag: "Juga perlu diingat",
    arrivalCardTitle: "Tambahan saat tiba di Bali",
    visaPrimaryLink: "eVisa resmi Indonesia",
    visaSecondaryLink: "Situs resmi Love Bali",
    notesKicker: "Catatan lapangan",
    notesTitle: "Pengingat yang layak dipasang",
    notesIntro: "Ini detail yang paling mungkin menghemat waktu, stres, atau kesalahan kecil saat hari perjalanan tiba.",
    transportTitle: "Transportasi dan waktu",
    packingTitle: "Pakaian dan keamanan",
    footerLine: "Dirancang sebagai buku saku perjalanan yang terinspirasi dari pantai Bali, fajar gunung api, dan hari budaya di Jawa.",
    footerCredit: "Angka dua mata uang di halaman ini adalah estimasi perencanaan, bukan kutipan pembayaran langsung.",
    footerRepo: "Lihat GitHub repo",
    dockOverview: "Ringkas",
    dockItinerary: "Hari",
    dockBudget: "Budget",
    dockVisa: "Visa",
    stats: [
      ["Traveler", "Yung Wen Cheng"],
      ["Tanggal", "2026/06/13 - 2026/06/21"],
      ["Gaya trip", "Mandiri berkualitas, bukan mewah"],
      ["Inti trip", "Pengalaman, relaksasi, dan budaya"]
    ],
    flightLabels: {
      airline: "Maskapai",
      flight: "Penerbangan",
      route: "Rute",
      time: "Waktu",
      duration: "Durasi"
    },
    showcaseCards: [
      {
        title: "Calm Bali",
        body: "Seminyak bukan pengisi. Ini ruang napas yang membuat segmen gunung api terasa lebih kontras dan istimewa."
      },
      {
        title: "Drama gunung api",
        body: "Blue fire Ijen, air terjun Sewu, dan sunrise Bromo membentuk ketegangan visual terkuat dari seluruh trip."
      },
      {
        title: "Penutup candi",
        body: "Berakhir di Yogyakarta membuat perjalanan ini punya bobot budaya, bukan hanya adrenalin."
      }
    ],
    journeyStops: [
      ["Bali", "Pembukaan yang santai di Seminyak dengan pantai, spa, dan nuansa resort."],
      ["Ijen", "Blue fire dan kawah membuat bagian ini paling dramatis."],
      ["Sewu", "Hari air terjun yang kuat secara visual dan lebih menuntut fisik."],
      ["Bromo", "Matahari terbit adalah momen ikonik, jadi pakaian hangat penting."],
      ["Malang", "Titik transisi untuk memulihkan tenaga setelah segmen gunung api."],
      ["Yogyakarta", "Candi dan budaya kota memberi penutup yang lengkap."]
    ],
    stays: [
      {
        dates: "13 Jun - 15 Jun",
        place: "Seminyak, Bali",
        hotel: "Courtyard by Marriott Bali Seminyak Resort",
        note: "Awal yang nyaman agar ritme perjalanan langsung terasa santai."
      },
      {
        dates: "15 Jun - 17 Jun",
        place: "Area gunung api Jawa",
        hotel: "Tour provided",
        note: "Akomodasi dan perpindahan diatur oleh tur gunung api."
      },
      {
        dates: "18 Jun",
        place: "Malang",
        hotel: "The Shalimar Boutique Hotel",
        note: "Satu malam yang lebih rapi untuk recovery setelah bagian petualangan."
      },
      {
        dates: "19 Jun - 21 Jun",
        place: "Yogyakarta",
        hotel: "Aveta Hotel Malioboro",
        note: "Lokasi praktis untuk candi dan urusan pulang."
      }
    ],
    itinerary: [
      {
        day: "Hari 1",
        title: "Tiba di Bali",
        body: "Naik CI771 dari Taipei ke DPS dan jaga sore pertama tetap ringan: check-in, makan malam santai, lalu istirahat.",
        highlights: ["Tiba dan hotel", "Makan malam santai", "Adaptasi waktu"]
      },
      {
        day: "Hari 2",
        title: "Hari santai di Bali",
        body: "Beach club, pijat, dan jalan di tepi pantai cocok sekali ditempatkan di hari ini untuk membuka trip dengan lembut.",
        highlights: ["Pantai Seminyak", "Pijat", "Waktu bebas"]
      },
      {
        day: "Hari 3",
        title: "Masuk segmen gunung api",
        body: "Bagian Jawa Timur dimulai. Urutan pentingnya adalah Ijen → Sewu → Bromo, dengan drop-off sebaiknya dipastikan di Malang.",
        highlights: ["Transfer darat", "Logistik tur", "Ritme malam"]
      },
      {
        day: "Hari 4",
        title: "Kawah Ijen",
        body: "Blue fire dan pemandangan kawah jadi sorotan utama, biasanya butuh berangkat sangat dini dan pakaian berlapis.",
        highlights: ["Blue fire", "Hiking malam", "Pengalaman vulkanik"]
      },
      {
        day: "Hari 5",
        title: "Air Terjun Tumpak Sewu",
        body: "Ini biasanya hari paling berat secara fisik, dengan jalur basah, turunan, dan lanskap air terjun yang dramatis.",
        highlights: ["Medan air terjun", "Sepatu grip", "Baju ganti"]
      },
      {
        day: "Hari 6",
        title: "Sunrise Bromo",
        body: "Penutup klasik untuk segmen gunung api. Udara subuh dingin, berangin, dan berdebu vulkanik.",
        highlights: ["Matahari terbit", "Jaket", "Masker atau buff"]
      },
      {
        day: "Hari 7",
        title: "Malang ke Yogyakarta",
        body: "Naik kereta dari Malang ke Yogyakarta dan gunakan hari ini sebagai reset yang lebih lembut setelah bagian petualangan.",
        highlights: ["Naik kereta", "Ganti suasana kota", "Hari recovery"]
      },
      {
        day: "Hari 8",
        title: "Borobudur dan Prambanan",
        body: "Hari budaya yang kuat, berpusat pada dua landmark candi Buddha dan Hindu paling ikonik di Indonesia.",
        highlights: ["Borobudur", "Prambanan", "Fokus budaya"]
      },
      {
        day: "Hari 9",
        title: "Hari pulang",
        body: "Kereta bandara YIA sekitar jam 06.00 tetap pilihan paling aman, dengan buffer sekitar dua jam di bandara sebelum pulang.",
        highlights: ["YIA Airport Rail Link", "Berangkat pagi", "Pulang"]
      }
    ],
    budgetLabels: {
      flight: "Tiket pesawat",
      hotel: "Hotel",
      volcanoDeposit: "Deposit gunung api",
      volcanoBalance: "Sisa tur gunung api",
      templeTour: "Tur candi",
      train: "Kereta",
      dailySpend: "Biaya harian"
    },
    budgetSummaryLabels: {
      total: "Total budget",
      average: "Rata-rata harian",
      style: "Profil trip",
      rate: "Kurs yang dipakai"
    },
    budgetStyleValue: "Rute klasik dengan value tinggi",
    budgetRateValue: "Estimasi halaman memakai NT$1 ≈ Rp531",
    budgetPaidTotal: "Sudah dibayar",
    budgetOpenTotal: "Perkiraan sisa",
    visaPoints: [
      {
        title: "Pilihan yang paling mungkin adalah skema wisata 30 hari",
        body: "FAQ resmi eVisa Indonesia menunjukkan opsi wisata umum dengan masa tinggal hingga 30 hari, bisa diperpanjang sekali 30 hari, biaya IDR 500.000, dan harus dipakai dalam 90 hari setelah diterbitkan."
      },
      {
        title: "Pemegang paspor Taiwan umumnya bisa memakai VOA / e-VOA",
        body: "Informasi perjalanan 2026 yang saya temukan mencantumkan Taiwan sebagai salah satu kewarganegaraan yang bisa memakai Visa on Arrival. Tetap paling aman untuk cek lagi opsi kewarganegaraan langsung di sistem resmi eVisa sebelum bayar."
      },
      {
        title: "Dokumen inti cukup jelas",
        body: "Paspor dengan masa berlaku minimal enam bulan dan tiket keluar dari Indonesia tercantum langsung di FAQ imigrasi resmi."
      },
      {
        title: "Langkah paling praktis",
        body: "Kalau ingin tiba lebih mulus, ajukan online lebih dulu dan simpan bukti persetujuan atau pembayaran di ponsel."
      }
    ],
    arrivalPoints: [
      {
        title: "Levy wisata Bali",
        body: "FAQ resmi Love Bali menyebut wisatawan asing yang datang ke Bali membayar levy satu kali sebesar Rp150.000, bisa online sebelum tiba atau di konter pembayaran di Bali."
      },
      {
        title: "Simpan voucher QR",
        body: "Love Bali mengirim bukti pembayaran dengan QR code, jadi sebaiknya simpan screenshot dan file unduhannya."
      },
      {
        title: "Terpisah dari biaya visa",
        body: "Levy Bali bukan biaya visa Indonesia, jadi keduanya perlu disiapkan terpisah."
      },
      {
        title: "Cek lagi sebelum 13 Juni 2026",
        body: "Aturan masuk bisa berubah, jadi tetap paling aman melakukan pengecekan akhir di situs resmi eVisa Indonesia dan Love Bali tepat sebelum keberangkatan."
      }
    ],
    transportNotes: [
      {
        title: "Pastikan urutan gunung api",
        body: "Rute sebaiknya tetap Ijen → Sewu → Bromo, dengan drop-off terakhir dipastikan di Malang."
      },
      {
        title: "Kereta bandara YIA",
        body: "Rencana kereta sekitar jam 06.00 sudah masuk akal. Waktu tempuh biasanya sekitar 35 sampai 40 menit."
      },
      {
        title: "Buffer bandara",
        body: "Usahakan tiba di bandara setidaknya dua jam lebih awal untuk rangkaian penerbangan pulang."
      }
    ],
    packingNotes: [
      {
        title: "Sepatu untuk hari gunung api",
        body: "Gunakan sepatu dengan grip dan penopang yang baik. Sandal datar sangat tidak disarankan."
      },
      {
        title: "Dingin sebelum matahari terbit",
        body: "Bromo dan Ijen bisa terasa cukup dingin sebelum sunrise, jadi jaket atau lapisan anti angin penting."
      },
      {
        title: "Bagasi",
        body: "Catatanmu sekarang adalah 23 kg x2 saat berangkat dan 23 kg x1 saat pulang. Tetap bagus untuk cek ulang booking aktifnya."
      }
    ]
  }
};

const state = {
  lang: localStorage.getItem("bali-java-lang") || "zh-Hant"
};

function formatNumber(value, lang) {
  return new Intl.NumberFormat(LOCALES[lang]).format(value);
}

function formatCurrency(code, value, lang) {
  const formatted = formatNumber(value, lang);
  if (code === "TWD") {
    return `NT$${formatted}`;
  }

  return `Rp${formatted}`;
}

function formatRange(code, min, max, lang) {
  return `${formatCurrency(code, min, lang)} - ${formatNumber(max, lang)}`;
}

function formatDualCurrency(item, lang) {
  if (item.twdRange) {
    const [min, max] = item.twdRange;
    const idrMin = Math.round(min * EXCHANGE_RATE);
    const idrMax = Math.round(max * EXCHANGE_RATE);
    return `${formatRange("TWD", min, max, lang)} / ${formatRange("IDR", idrMin, idrMax, lang)}`;
  }

  const idr = Math.round(item.twd * EXCHANGE_RATE);
  return `${formatCurrency("TWD", item.twd, lang)} / ${formatCurrency("IDR", idr, lang)}`;
}

function sumBudget(items) {
  return items.reduce(
    (totals, item) => {
      if (item.twdRange) {
        totals.min += item.twdRange[0];
        totals.max += item.twdRange[1];
        return totals;
      }

      totals.min += item.twd;
      totals.max += item.twd;
      return totals;
    },
    { min: 0, max: 0 }
  );
}

function totalLabel(prefix, totals, lang) {
  const twdLabel =
    totals.min === totals.max
      ? formatCurrency("TWD", totals.min, lang)
      : formatRange("TWD", totals.min, totals.max, lang);
  const idrMin = Math.round(totals.min * EXCHANGE_RATE);
  const idrMax = Math.round(totals.max * EXCHANGE_RATE);
  const idrLabel =
    idrMin === idrMax
      ? formatCurrency("IDR", idrMin, lang)
      : formatRange("IDR", idrMin, idrMax, lang);

  return `${prefix}: ${twdLabel} / ${idrLabel}`;
}

function budgetSummary(copy, lang) {
  const paid = sumBudget(BUDGET.paid);
  const open = sumBudget(BUDGET.open);
  const grand = {
    min: paid.min + open.min,
    max: paid.max + open.max
  };
  const perDay = {
    min: Math.round(grand.min / TRIP_DAYS),
    max: Math.round(grand.max / TRIP_DAYS)
  };

  return [
    [
      copy.budgetSummaryLabels.total,
      `${formatRange("TWD", grand.min, grand.max, lang)} / ${formatRange("IDR", grand.min * EXCHANGE_RATE, grand.max * EXCHANGE_RATE, lang)}`
    ],
    [
      copy.budgetSummaryLabels.average,
      `${formatRange("TWD", perDay.min, perDay.max, lang)} / ${formatRange("IDR", perDay.min * EXCHANGE_RATE, perDay.max * EXCHANGE_RATE, lang)}`
    ],
    [copy.budgetSummaryLabels.style, copy.budgetStyleValue],
    [copy.budgetSummaryLabels.rate, copy.budgetRateValue]
  ];
}

function makeInfoGrid(labels, info) {
  return `
    <div class="flight-grid">
      ${Object.entries(info)
        .map(
          ([key, value]) => `
            <div class="info-block">
              <span class="meta-label">${labels[key]}</span>
              <strong>${value}</strong>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function makeSummary(items) {
  return items
    .map(
      ([label, value]) => `
        <article class="summary-card">
          <span>${label}</span>
          <strong>${value}</strong>
        </article>
      `
    )
    .join("");
}

function makeShowcase(items) {
  return items
    .map(
      (item) => `
        <article>
          <span class="eyebrow">${item.title}</span>
          <p>${item.body}</p>
        </article>
      `
    )
    .join("");
}

function makeJourneyBand(stops) {
  return stops
    .map(
      ([title, body], index) => `
        <article class="journey-stop">
          <span class="meta-label">${String(index + 1).padStart(2, "0")}</span>
          <strong>${title}</strong>
          <p>${body}</p>
        </article>
      `
    )
    .join("");
}

function makeStayCards(items) {
  return items
    .map(
      (item) => `
        <article class="card stay-card">
          <div class="stay-meta">
            <span class="pill">${item.dates}</span>
            <span class="pill">${item.place}</span>
          </div>
          <h3>${item.hotel}</h3>
          <p>${item.note}</p>
        </article>
      `
    )
    .join("");
}

function makeItinerary(items) {
  return items
    .map(
      (item) => `
        <article class="card day-card">
          <span class="day-index">${item.day}</span>
          <h3>${item.title}</h3>
          <p>${item.body}</p>
          <div class="item-list">
            ${item.highlights
              .map((highlight) => `<span class="pill">${highlight}</span>`)
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function makeBudgetList(items, copy, lang) {
  return `
    <div class="item-list">
      ${items
        .map(
          (item) => `
            <div class="money-row">
              <strong>${copy.budgetLabels[item.id]}</strong>
              <span>${formatDualCurrency(item, lang)}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function makeBulletCards(items) {
  return `
    <div class="bullet-list">
      ${items
        .map(
          (item) => `
            <div class="bullet-item">
              <strong>${item.title}</strong>
              <p>${item.body}</p>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function makeNotes(items) {
  return `
    <div class="note-stack">
      ${items
        .map(
          (item) => `
            <div class="note-item">
              <strong>${item.title}</strong>
              <p>${item.body}</p>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderLanguage(lang) {
  const copy = translations[lang];
  if (!copy) {
    return;
  }

  document.documentElement.lang = lang;
  document.title = copy.pageTitle;
  document.querySelector('meta[name="description"]').setAttribute("content", copy.pageDescription);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = copy[key];
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  document.getElementById("hero-stats").innerHTML = makeSummary(copy.stats);
  document.getElementById("showcase-cards").innerHTML = makeShowcase(copy.showcaseCards);
  document.getElementById("depart-flight").innerHTML = makeInfoGrid(copy.flightLabels, FLIGHTS.depart);
  document.getElementById("return-flight").innerHTML = makeInfoGrid(copy.flightLabels, FLIGHTS.return);
  document.getElementById("journey-band").innerHTML = makeJourneyBand(copy.journeyStops);
  document.getElementById("stay-list").innerHTML = makeStayCards(copy.stays);
  document.getElementById("itinerary-grid").innerHTML = makeItinerary(copy.itinerary);
  document.getElementById("paid-list").innerHTML = makeBudgetList(BUDGET.paid, copy, lang);
  document.getElementById("open-list").innerHTML = makeBudgetList(BUDGET.open, copy, lang);
  document.getElementById("paid-total").textContent = totalLabel(copy.budgetPaidTotal, sumBudget(BUDGET.paid), lang);
  document.getElementById("open-total").textContent = totalLabel(copy.budgetOpenTotal, sumBudget(BUDGET.open), lang);
  document.getElementById("budget-summary").innerHTML = makeSummary(budgetSummary(copy, lang));
  document.getElementById("visa-points").innerHTML = makeBulletCards(copy.visaPoints);
  document.getElementById("arrival-points").innerHTML = makeBulletCards(copy.arrivalPoints);
  document.getElementById("transport-notes").innerHTML = makeNotes(copy.transportNotes);
  document.getElementById("packing-notes").innerHTML = makeNotes(copy.packingNotes);
  document.getElementById("exchange-rate").textContent = `NT$1 ≈ Rp${formatNumber(EXCHANGE_RATE, lang)}`;
}

function setupLanguageButtons() {
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      localStorage.setItem("bali-java-lang", state.lang);
      renderLanguage(state.lang);
    });
  });
}

function setupSectionObserver() {
  const sections = document.querySelectorAll("[data-section]");
  const links = document.querySelectorAll("[data-section-link]");
  const linkMap = new Map(
    [...links].map((link) => [link.getAttribute("href").slice(1), link])
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => link.classList.remove("is-active"));
          linkMap.get(entry.target.id)?.classList.add("is-active");
        }
      });
    },
    {
      threshold: 0.36,
      rootMargin: "-15% 0px -45% 0px"
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupRevealObserver() {
  const cards = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14
    }
  );

  cards.forEach((card) => observer.observe(card));
}

setupLanguageButtons();
setupSectionObserver();
setupRevealObserver();
renderLanguage(state.lang);
