const EXCHANGE_RATE = 531;
const TRIP_DAYS = 9;

const BUDGET = {
  paid: [
    { key: "flight", twd: 20494 },
    { key: "hotel", twd: 9202 },
    { key: "volcanoDeposit", twd: 3935 }
  ],
  open: [
    { key: "volcanoBalance", twd: 7684, idr: 4080000 },
    { key: "templeTour", twd: 2000 },
    { key: "train", twd: 1000 },
    { key: "dailySpend", twdRange: [6000, 10000] }
  ]
};

const HOTEL_MAPS = {
  seminyak: "https://www.google.com/maps/search/?api=1&query=Courtyard+by+Marriott+Bali+Seminyak+Resort",
  malang: "https://www.google.com/maps/search/?api=1&query=The+Shalimar+Boutique+Hotel+Malang",
  yogyakarta: "https://www.google.com/maps/search/?api=1&query=Aveta+Hotel+Malioboro+Yogyakarta",
  volcanoTour: "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n",
  luminor: "https://www.google.com/maps/search/?api=1&query=Luminor+Hotel+Banyuwangi",
  doho: "https://www.google.com/maps/search/?api=1&query=Doho+Homestay+Papuma",
  kecombrang: "https://www.google.com/maps/search/?api=1&query=Joglo+Kecombrang+Bromo"
};

const MAP_ROUTE_URL =
  "https://www.google.com/maps/dir/Seminyak+Beach+Bali/Courtyard+by+Marriott+Bali+Seminyak+Resort/Ijen+Crater/Tumpak+Sewu+Waterfall/Mount+Bromo/The+Shalimar+Boutique+Hotel+Malang/Aveta+Hotel+Malioboro+Yogyakarta/Yogyakarta+International+Airport";

const DAY_ROUTE_URLS = {
  day1: "https://www.google.com/maps/dir/Ngurah+Rai+International+Airport/Courtyard+by+Marriott+Bali+Seminyak+Resort/Seminyak+Beach+Bali",
  day2: "https://www.google.com/maps/dir/Courtyard+by+Marriott+Bali+Seminyak+Resort/Seminyak+Beach+Bali/Seminyak+Village/Courtyard+by+Marriott+Bali+Seminyak+Resort",
  day3: "https://www.google.com/maps/dir/Courtyard+by+Marriott+Bali+Seminyak+Resort/Gilimanuk+Port/Ijen+Crater",
  day4: "https://www.google.com/maps/dir/Ijen+Crater/Paltuding+Ijen/Banyuwangi",
  day5: "https://www.google.com/maps/dir/Banyuwangi/Tumpak+Sewu+Waterfall/Lumajang",
  day6: "https://www.google.com/maps/dir/Lumajang/Mount+Bromo/The+Shalimar+Boutique+Hotel+Malang",
  day7: "https://www.google.com/maps/dir/The+Shalimar+Boutique+Hotel+Malang/Malang+Station/Aveta+Hotel+Malioboro+Yogyakarta",
  day8: "https://www.google.com/maps/dir/Aveta+Hotel+Malioboro+Yogyakarta/Borobudur+Temple/Prambanan+Temple/Aveta+Hotel+Malioboro+Yogyakarta",
  day9: "https://www.google.com/maps/dir/Aveta+Hotel+Malioboro+Yogyakarta/Yogyakarta+International+Airport"
};

const content = {
  "zh-Hant": {
    heroKicker: "印尼旅行手冊",
    heroTitle: "Bali × Java",
    heroSubtitle: "海島放鬆、火山晨光、神廟收尾",
    heroDates: "2026 / 06 / 13 - 2026 / 06 / 21",
    heroDestinations: "水明漾 • 伊真火山 • Tumpak Sewu • 婆羅摩火山 • 瑪琅 • 日惹",
    navOverview: "總覽",
    navFlights: "航班",
    navTrain: "火車",
    navTours: "包套團",
    navStay: "住宿",
    navLinks: "連結",
    navItinerary: "行程",
    navMap: "地圖",
    navBudget: "預算",
    navVisa: "簽證",
    overviewLabel: "旅程總覽",
    overviewTitle: "一趟完整、舒服、而且很會安排情緒節奏的印尼經典路線",
    overviewLead:
      "旅程不是把地名一一收集，而是讓海風、火山與神廟依序走進記憶裡，慢慢形成一條有起伏、也有餘韻的路線。",
    coverLabel: "手冊篇章",
    coverTitle: "有些旅行，不是離開，而是把自己重新打開",
    coverLead:
      "這一趟最迷人的地方，不在於排得多滿，而在於它懂得留白。先讓峇里島的海把心情放鬆，再走進東爪哇微冷的凌晨，最後把腳步停在日惹，讓神廟與城市的輪廓替旅程慢慢收尾。",
    coverPoints: [
      ["前段放鬆", "在 Seminyak，光線是柔的，海風是慢的，連晚餐與散步都像是在替旅程寫下溫柔的序。"],
      ["中段冒險", "Ijen、Sewu、Bromo 像三個遞進的章節，從黑夜、霧氣到日出，把記憶一層一層推高。"],
      ["結尾收束", "到了日惹，節奏重新安靜下來，神廟、街道與黃昏一起把這趟路線收成餘韻。"]
    ],
    volcanoCaption: "Bromo 晨光",
    volcanoCredit: "Photo by Arya Krisdyantara / Unsplash",
    beachCaption: "Bali 海色",
    beachCredit: "Photo by Santhosh Mocharla / Unsplash",
    routeLabel: "航班與路線",
    routeTitle: "航班與移動路線",
    routeLead: "把航段、行李與整體動線獨立整理，出發前和回程前都比較好快速核對。",
    departTag: "去程",
    departTitle: "台北飛峇里島",
    returnTag: "回程",
    returnTitle: "日惹經雅加達回台北",
    tripFlowLabel: "整體動線",
    tripFlowValue: "台北 → 峇里島 → 伊真 → Sewu → 婆羅摩 → 瑪琅 → 日惹",
    flightHighlights: [
      ["去程結構", "CI771 直飛 DPS，華航主飛"],
      ["回程結構", "CI9761 聯營段 + CI762 華航回台"],
      ["行李重點", "去程 23kg ×2，回程 23kg ×1"]
    ],
    flightNotes: [
      ["出發提醒", "國際線建議至少提前 2 小時到機場，護照與電子機票資訊前一晚先整理好。"],
      ["轉機責任", "回程真正的國際段是 CI762；YIA → CGK 則是華航票號下的前段接駁，實際承運請依票面與現場為準。"],
      ["不要放上訂位代碼", "網站上只保留班機、路線與承運結構，不放訂位代碼或其他敏感資訊。"]
    ],
    trainLabel: "鐵道篇章",
    trainTitle: "火車移動",
    trainLead:
      "Day 7 的重點不是趕路，而是把火山段的疲累換成一段更舒服的移動。這裡整理的是 Argo Semeru 的最高等級艙位與實際購票方向。",
    trainHighlights: [
      ["列車定位", "Day 7 最適合拿來做恢復與轉場"],
      ["最高等級", "Compartment Suites 為 16 個獨立個人間"],
      ["價格區間", "約 Rp2,050,000 - Rp2,250,000"]
    ],
    trainCoverCaption: "Argo Semeru 列車外觀",
    trainCoverCredit: "Photo via Journey.tw",
    trainSuiteCaption: "Compartment Suites 個人間",
    trainSuiteCredit: "Photo via Journey.tw",
    trainSummary:
      "如果這段想搭得漂亮一點，Argo Semeru 的最高等級艙位是很值得留意的選擇。Journey.tw 文章整理指出，Compartment Suites 是 16 間獨立包廂、1-1 配置，座椅可旋轉也可幾乎完全攤平，整體更像可以安靜休息的個人間。",
    trainFacts: [
      ["建議路線", "Malang / Surabaya 端銜接 → Yogyakarta"],
      ["最高等級", "Compartment Suites"],
      ["空間結構", "16 個獨立包廂、1 人 1 間"],
      ["座椅特色", "可旋轉、可躺平、私密性較高"],
      ["參考票價", "約 Rp2,050,000 - Rp2,250,000"]
    ],
    trainNotes: [
      "這一段最適合放在火山冒險結束後，讓身體真正坐下來休息。",
      "如果你想把 Day 7 做成高級恢復日，直接選最高等級艙位會最有感。",
      "文章中提到的票價與艙等可能調整，接近出發日仍建議再查一次。"
    ],
    trainBuyTitle: "如何買票",
    trainBuyLead: "以下整理以 Journey.tw 文章內容為主，目標是把買票這件事變得很直接。",
    trainBuySteps: [
      ["步驟一", "先確認 Day 7 想搭的路段與出發站，通常會以東爪哇端銜接到日惹方向為主。"],
      ["步驟二", "找 Argo Semeru，艙等直接看最高等級 Compartment Suites。它不是一般大座位，而是個人包廂型艙位。"],
      ["步驟三", "Journey.tw 文中提到可透過 tiket.com 預訂，也可在車站透過自助取票機處理。"],
      ["步驟四", "若行程想更穩，建議提早訂，因為最高等級艙位只有 16 間。"]
    ],
    trainLinks: [
      ["Journey.tw 鐵道文章", "https://journey.tw/ka-argo-semeru/"],
      ["tiket.com 火車訂票", "https://www.tiket.com/kereta-api"]
    ],
    toursLabel: "包套章節",
    toursTitle: "包套旅遊團",
    toursLead: "把已訂與準備要訂的包套團獨立整理，之後核對內容、價格與連結都更直覺。",
    tourLinkLabel: "查看頁面",
    toursList: [
      {
        dates: "4D3N",
        area: "已訂火山團",
        hotel: "Ijen • Papuma • Tumpak Sewu • Bromo",
        localName: "Java Volcano Tour Operator",
        stars: "火山冒險",
        image: "./assets/tours/jvto-volcano-tour.jpg",
        note: "這是整趟旅程最硬也最有記憶點的段落，重點不是奢華，而是把藍火、瀑布與日出火山順順地串起來。",
        details: [
          "從 Bali 出發的 4 日團",
          "公開頁面常見住宿：Luminor / Doho / Joglo Kecombrang",
          "行程順序是 Ijen → Papuma / Sewu → Bromo"
        ],
        url: "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n",
        linkLabel: "JVTO 行程頁"
      },
      {
        dates: "私人一日遊",
        area: "計畫預訂",
        hotel: "Dagi Hill + Borobudur + Prambanan",
        localName: "Klook 日惹神廟私人包車團",
        stars: "文化日",
        image: "./assets/tours/klook-borobudur-prambanan.webp",
        note: "這團很適合放在 Day 8，直接把佛教與印度教兩座重量級神廟收進同一天，節奏完整又省心。",
        details: [
          "Dagi Hill 貴賓日出 / 早晨體驗",
          "Borobudur + Prambanan 兩大神廟",
          "私人包車型行程，適合文化核心日"
        ],
        url: "https://www.klook.com/zh-TW/activity/91895-dagi-hill-borobudur-temple-prambanan-temple-private-day-tour-yogyakarta/",
        linkLabel: "Klook 頁面",
        extraLinks: [["Klook 印尼頁", "https://www.klook.com/id/activity/91895-dagi-hill-borobudur-temple-prambanan-temple-private-day-tour-yogyakarta/"]]
      }
    ],
    stayLabel: "住宿篇章",
    stayTitle: "住宿安排",
    stayLead: "每一段住宿都對應不同節奏：度假、冒險後休息、文化城市收尾。每個飯店都附上 Google Maps 連結。",
    stayMapLabel: "Google Maps",
    stayTourLabel: "Tour 頁面",
    linksLabel: "實用連結",
    linksTitle: "官方連結整理",
    linksLead: "把飯店、火山 tour、機場鐵路與入境網站集中在同一頁，出發前會很好找。",
    linksHighlights: [
      ["住宿", "3 間飯店官方網站"],
      ["交通", "火山 tour 與機場鐵路"],
      ["入境", "eVisa 與 Love Bali"]
    ],
    transportTitle: "交通與時間安排",
    packingTitle: "穿著與安全",
    itineraryLabel: "每日行程",
    itineraryTitle: "每日行程",
    itineraryLead: "用時間線整理每一天的重點，讀起來會更像真正可以帶著走的旅遊手冊。",
    itineraryHighlights: [
      ["路線節奏", "先放鬆、再火山、最後文化收尾"],
      ["最硬的一天", "Sewu 瀑布日通常最吃體力"],
      ["最穩的回程", "YIA 機場鐵路抓 06:00 左右"]
    ],
    dayFocusLabel: "今日重點",
    budgetLabel: "預算整理",
    budgetTitle: "預算整理",
    budgetLead: "以下印尼盾換算以 NT$1 ≈ Rp531 粗估，方便旅行規劃，不代表即時換匯價格。",
    paidTitle: "已支付",
    openTitle: "尚未支付",
    totalBudgetLabel: "總預算",
    budgetRateNote: "匯率參考：NT$1 ≈ Rp531",
    dailyAverageLabel: "日均預算",
    budgetStyleNote: "高品質自由行，非奢華，但體驗非常完整",
    budgetTableStatus: "狀態",
    budgetTableItem: "項目",
    budgetTableDetail: "說明",
    budgetTableAmount: "金額",
    budgetStatusPaid: "已支付",
    budgetStatusOpen: "未支付",
    mapLabel: "旅行地圖",
    mapTitle: "地圖總覽",
    mapLead: "把主要住宿、火山、神廟與機場路線集中到同一頁，手機上也能直接切換看大圖地圖。",
    mapRouteLink: "開啟完整路線",
    mapDayLabel: "每日路線",
    mapDayRoutes: [
      ["第 1 天", "抵達與入住", DAY_ROUTE_URLS.day1],
      ["第 2 天", "水明漾放鬆日", DAY_ROUTE_URLS.day2],
      ["第 3 天", "進入火山段", DAY_ROUTE_URLS.day3],
      ["第 4 天", "伊真火山路線", DAY_ROUTE_URLS.day4],
      ["第 5 天", "Sewu 瀑布路線", DAY_ROUTE_URLS.day5],
      ["第 6 天", "婆羅摩日出路線", DAY_ROUTE_URLS.day6],
      ["第 7 天", "瑪琅到日惹", DAY_ROUTE_URLS.day7],
      ["第 8 天", "雙神廟文化日", DAY_ROUTE_URLS.day8],
      ["第 9 天", "飯店到機場", DAY_ROUTE_URLS.day9]
    ],
    visaLabel: "簽證入境",
    visaTitle: "簽證與入境提醒",
    visaLead: "先申請 eVisa，再補 Bali 旅遊稅，最後把 QR code 與付款憑證留在手機裡，現場會輕鬆很多。",
    visaPanelTitle: "印尼旅遊簽證",
    arrivalPanelTitle: "峇里島入境附加事項",
    visaLinkOne: "印尼官方 eVisa",
    visaLinkTwo: "Love Bali 官方網站",
    visaHighlights: [
      ["第一步", "先做 eVisa / e-VOA"],
      ["第二步", "再付 Bali 旅遊稅 Rp150,000"],
      ["最後", "QR code、護照、回程機票一起存好"]
    ],
    visaTutorial: [
      ["步驟一", "截至 2026/04/04，印尼官方 eVisa / e-VOA 說明頁的適用護照名單已列出台灣，可先走 e-VOA / VOA 路線，再建立申請資料。"],
      ["步驟二", "準備護照、離境機票、住宿資訊與信用卡。護照效期至少要有 6 個月。"],
      ["步驟三", "完成付款後，把 eVisa 或 e-VOA 憑證存到手機，也建議另外截圖一份。"],
      ["步驟四", "再到 Love Bali 官方網站繳 Bali 旅遊稅 Rp150,000，完成後同樣保存 QR code。"],
      ["步驟五", "出發前一天把護照、簽證憑證、Love Bali QR code、回程機票放在同一個手機資料夾。"]
    ],
    resourceLinks: [
      ["Seminyak 飯店", "Courtyard by Marriott Bali Seminyak Resort 官方網站", "https://www.marriott.com/en-us/hotels/dpssm-courtyard-bali-seminyak-resort/"],
      ["Malang 飯店", "The Shalimar Boutique Hotel 官方網站", "https://theshalimarhotel.co.id/"],
      ["日惹飯店", "Aveta Hotel Malioboro 官方網站", "https://avetahotelmalioboro.com/"],
      ["火山 tour", "Java Volcano Tour Operator 官方頁面", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
      ["神廟包車團", "Klook Dagi Hill + Borobudur + Prambanan 私人一日遊", "https://www.klook.com/zh-TW/activity/91895-dagi-hill-borobudur-temple-prambanan-temple-private-day-tour-yogyakarta/"],
      ["Argo Semeru 介紹", "Journey.tw 的火車艙位文章", "https://journey.tw/ka-argo-semeru/"],
      ["機場鐵路", "YIA Airport Rail Link 官方訂票頁", "https://reservation.railink.co.id/"],
      ["印尼 eVisa", "印尼官方簽證申請入口", "https://evisa.imigrasi.go.id/"],
      ["Love Bali", "峇里島旅遊稅官方網站", "https://lovebali.baliprov.go.id/"]
    ],
    overviewStats: [
      ["天數", "9天8夜"],
      ["旅程定位", "高品質自由行"],
      ["一句話", "有體驗、有放鬆、有文化"],
      ["旅行區域", "峇里島 + 東爪哇 + 日惹"]
    ],
    flightData: {
      depart: {
        summary: "台北直飛峇里島，整段由中華航空主飛，結構單純，適合把抵達日留給休息。",
        segments: [
          {
            route: "TPE → DPS",
            flight: "CI771",
            marketingCarrier: "中華航空",
            operatingCarrier: "中華航空",
            time: "09:10 → 14:35",
            duration: "直飛 5 小時 25 分",
            baggage: "23kg ×2"
          }
        ],
        notes: [
          "這一段是最乾淨的直飛結構，不用轉機。",
          "抵達時間在下午，適合直接進飯店與晚餐節奏。",
          "若前一晚先完成線上報到與文件整理，出發日會輕鬆很多。"
        ]
      },
      return: {
        summary: "回程是兩段式：先從日惹飛雅加達，再接中華航空長程回台北，節奏比去程更需要留緩衝。",
        segments: [
          {
            route: "YIA → CGK",
            flight: "CI9761",
            marketingCarrier: "中華航空票號接續段",
            operatingCarrier: "依電子機票與機場顯示為準",
            time: "09:45 → 當日銜接",
            duration: "印尼國內接駁段",
            baggage: "回程總託運額度 23kg ×1"
          },
          {
            route: "CGK → TPE",
            flight: "CI762",
            marketingCarrier: "中華航空",
            operatingCarrier: "中華航空",
            time: "當日銜接 → 21:05 抵達",
            duration: "國際回程主段",
            baggage: "23kg ×1"
          }
        ],
        notes: [
          "CI9761 是中華航空票號下的接續段，實際承運公司請依電子機票與機場顯示為準。",
          "真正的國際長程段是雅加達出發的 CI762，由中華航空承接回台北。",
          "因為是國內段接國際段，回程當天一定要把 YIA 機場鐵路和轉機緩衝抓穩。"
        ]
      }
    },
    flightSegmentLabels: {
      route: "航段",
      flight: "航班",
      marketingCarrier: "票號 / 開票航空",
      operatingCarrier: "實際承運",
      time: "時間",
      duration: "段落說明",
      baggage: "行李"
    },
    stays: [
      {
        dates: "6/13 - 6/15",
        area: "峇里島・水明漾",
        hotel: "Courtyard by Marriott Bali Seminyak Resort",
        localName: "峇里島水明漾萬怡度假村",
        stars: "五星級",
        image: "./assets/stays/seminyak-resort.jpg",
        note: "用帶著海風的度假節奏，把這趟旅程開成一個柔軟而明亮的序章。",
        details: [
          "步行可接近 Seminyak Beach",
          "三層泳池、Spa、餐廳完整",
          "住兩晚很適合把時差與心情一起調順"
        ],
        url: HOTEL_MAPS.seminyak
      },
      {
        dates: "6/15 - 6/17",
        area: "東爪哇火山區",
        hotel: "Tour provided",
        localName: "火山段住宿（由旅遊團安排）",
        stars: "團體安排",
        image: "./assets/stays/luminor-bwi.jpeg",
        note: "這一段不追求奢華，而是把體力、移動與凌晨出發的節奏安穩地接住。以下為 JVTO 公開行程頁常見住宿安排示意。",
        details: [
          "第 1 晚：Luminor Hotel（Ijen Crater）",
          "第 2 晚：Doho Homestay（Papuma Beach）",
          "第 3 晚：Joglo Kecombrang Bromo（Mount Bromo）"
        ],
        url: HOTEL_MAPS.volcanoTour,
        linkLabel: "Tour 頁面",
        extraLinks: [
          ["Luminor", HOTEL_MAPS.luminor],
          ["Doho", HOTEL_MAPS.doho],
          ["Kecombrang", HOTEL_MAPS.kecombrang]
        ]
      },
      {
        dates: "6/18",
        area: "瑪琅",
        hotel: "The Shalimar Boutique Hotel",
        localName: "沙利馬精品飯店",
        stars: "五星級",
        image: "./assets/stays/shalimar-front.jpg",
        note: "像把一夜休息放進殖民老宅裡，讓火山段之後的身體與情緒都慢慢回來。",
        details: [
          "1930 年代殖民建築改造",
          "花園、泳池與老派精品感很完整",
          "很適合當冒險段落後的修復夜"
        ],
        url: HOTEL_MAPS.malang
      },
      {
        dates: "6/19 - 6/21",
        area: "日惹",
        hotel: "Aveta Hotel Malioboro",
        localName: "阿維塔馬利歐波羅飯店",
        stars: "四星級",
        image: "./assets/stays/aveta-suite1.jpg",
        note: "把城市的便利與旅程尾聲需要的從容放在一起，適合文化日也適合回程前一晚。",
        details: [
          "緊貼 Malioboro 主街，地點非常順",
          "Sky pool、Sky Lounge 與現代房型",
          "去神廟、逛街、回機場都很省力"
        ],
        url: HOTEL_MAPS.yogyakarta
      }
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
    mapLocations: [
      ["Seminyak Beach", "Seminyak Beach Bali", "Bali 段最適合開場的海灘與散步地點。"],
      ["Seminyak 飯店", "Courtyard by Marriott Bali Seminyak Resort", "抵達後的主要住宿點。"],
      ["Ijen Crater", "Ijen Crater East Java", "藍火與火山湖的代表地點。"],
      ["Tumpak Sewu", "Tumpak Sewu Waterfall", "整段最壯觀的瀑布景點之一。"],
      ["Mount Bromo", "Mount Bromo", "火山日出與觀景台核心地點。"],
      ["Malang 飯店", "The Shalimar Boutique Hotel Malang", "火山段後較舒服的休息夜。"],
      ["Yogyakarta 飯店", "Aveta Hotel Malioboro Yogyakarta", "神廟日與回程前的基地。"],
      ["YIA 機場", "Yogyakarta International Airport", "回程當天的最終移動點。"]
    ],
    itinerary: [
      ["Day 1", "抵達峇里島", "搭乘 CI771 由台北直飛 DPS，抵達後以 check-in、晚餐與休息為主。", ["抵達 + 入住", "輕鬆晚餐", "調時差"], [["節奏", "第一天不建議排太滿，讓身體先適應濕熱氣候與移動疲勞。"], ["建議安排", "入住後可在 Seminyak 周邊簡單散步、吃飯，早點休息。"], ["今天適合", "把飯店、附近超商與回房後的隔天用品先整理好。"]]],
      ["Day 2", "Bali 放鬆日", "安排 beach club、按摩與自由活動，讓旅程先從舒服開始。", ["Seminyak", "按摩", "自由活動"], [["玩法", "這天最適合把行程壓鬆，重點不是跑點，而是把度假感做滿。"], ["小提醒", "海邊日照強，記得防曬，也可以順便補買後面火山段需要的小物。"], ["延伸建議", "如果精神不錯，晚餐可以挑一間氣氛比較好的餐廳，把 Bali 段做得更完整。"]]],
      ["Day 3", "進入火山段", "開始東爪哇移動，重點順序是 Ijen → Sewu → Bromo。", ["跟團移動", "進入火山區", "確認 Malang drop"], [["關鍵確認", "和 tour 再次確認行程順序與最後 drop-off 是否在 Malang。"], ["體力準備", "從這天開始睡眠會比較破碎，建議提前整理好小背包與保暖層。"], ["隨身物品", "把護照影本、行動電源、水與簡單零食放在最容易拿的位置。"]]],
      ["Day 4", "Ijen Crater", "藍火與火山口是這段的代表亮點，通常需要凌晨出發。", ["藍火", "夜間健行", "火山體驗"], [["看點", "藍火與天亮後的火山湖是 Ijen 最有記憶點的兩個畫面。"], ["裝備", "頭燈、抓地鞋、薄外套與口罩都很重要。"], ["節奏", "夜出早歸會很累，白天若有空檔可以盡量補眠。"]]],
      ["Day 5", "Tumpak Sewu", "瀑布地形壯觀但偏體力型，鞋子與換洗衣物很重要。", ["瀑布", "防滑鞋", "體力日"], [["地形", "這天通常有濕滑路段、上下坡與水氣，整體最吃體力。"], ["準備", "建議多帶一套可替換衣物與防水袋，手機也最好先做防護。"], ["拍照提醒", "瀑布水氣重，鏡頭布或小毛巾會很有用。"]]],
      ["Day 6", "Mount Bromo Sunrise", "經典火山日出收尾，清晨會冷，也可能有火山灰。", ["日出", "外套", "口罩或 Buff"], [["看點", "Bromo 是整段火山行程最經典的收尾，視野與光線都很有戲。"], ["小提醒", "凌晨風大且冷，保暖與遮塵用品都很值得帶。"], ["回程感受", "這天結束後通常會有一種大段冒險終於完成的放鬆感。"]]],
      ["Day 7", "Malang → Yogyakarta", "搭火車前往日惹，這天可以當作比較放鬆的轉場日。", ["火車移動", "休息", "城市切換"], [["節奏", "火山段結束後，這天很適合補眠、整理照片與重新回到比較舒服的旅行狀態。"], ["交通", "火車時間建議預留緩衝，並注意行李上下車的節奏。"], ["晚上安排", "如果不累，可以先在 Malioboro 周邊熟悉一下街區與隔天動線。"]]],
      ["Day 8", "Borobudur + Prambanan", "預計使用 Klook 的 Dagi Hill＋Borobudur＋Prambanan 私人一日遊，把文化核心日一次收完整。", ["婆羅浮屠", "普蘭巴南", "Klook 私人包車"], [["文化重點", "Borobudur 與 Prambanan 分別代表不同宗教與建築氣質，很值得完整保留一天。"], ["包車安排", "這天預計改用 Klook 私人一日團，會比自己拆交通更省力也更完整。"], ["穿著建議", "神廟區白天偏熱，建議穿透氣衣物並隨身帶水。"]]],
      ["Day 9", "回程日", "搭早班機場鐵路前往 YIA，預留至少 2 小時緩衝再銜接班機。", ["機場鐵路", "提早出發", "回台灣"], [["時間安排", "06:00 左右的機場鐵路是偏穩的選擇，能把風險壓低。"], ["收尾提醒", "前一晚先把護照、車票、航班資訊與退稅或付款憑證整理好。"], ["最後檢查", "出門前確認房卡、充電器、轉接頭和伴手禮都已收好。"]]]
    ],
    budgetLabels: {
      flight: ["機票", "華航往返"],
      hotel: ["住宿", "Seminyak、Malang、Yogyakarta"],
      volcanoDeposit: ["火山訂金", "Ijen / Sewu / Bromo tour"],
      volcanoBalance: ["火山尾款", "剩餘 80%，兩人總價 Rp8,160,000，已拆成每人"],
      templeTour: ["神廟團", "Borobudur + Prambanan"],
      train: ["火車", "Malang → Yogyakarta"],
      dailySpend: ["生活費", "餐飲、按摩、零用"]
    },
    visaPoints: [
      ["30 天旅遊方案", "印尼官方 eVisa FAQ 常見旅遊方案為停留 30 天，可延長一次 30 天，費用 IDR 500,000。"],
      ["台灣旅客", "截至 2026/04/04，印尼官方 eVisa / e-VOA 說明頁的適用護照名單已列出台灣，可申請 e-VOA / VOA。"],
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
    heroKicker: "Panduan perjalanan Indonesia",
    heroTitle: "Bali × Java",
    heroSubtitle: "Island ease, volcano dawns, temple endings",
    heroDates: "2026 / 06 / 13 - 2026 / 06 / 21",
    heroDestinations: "Seminyak • Ijen • Tumpak Sewu • Bromo • Malang • Yogyakarta",
    navOverview: "Overview",
    navFlights: "Flights",
    navTrain: "Train",
    navTours: "Tours",
    navStay: "Stays",
    navLinks: "Links",
    navItinerary: "Rencana",
    navMap: "Map",
    navBudget: "Biaya",
    navVisa: "Visa",
    overviewLabel: "Ringkasan perjalanan",
    overviewTitle: "A very complete Indonesia classic route with rest, drama, and culture in the right order",
    overviewLead: "This route is less about collecting places and more about letting sea light, volcanic dawns, and temple silhouettes settle into memory in the right order.",
    coverLabel: "Narasi perjalanan",
    coverTitle: "Some trips do not begin with departure, but with softening",
    coverLead:
      "What makes this route beautiful is not density, but rhythm. Bali opens the heart gently, East Java brings the dramatic edge of dawn and stone, and Yogyakarta lets the journey exhale into culture and evening light.",
    coverPoints: [
      ["Soft opening", "In Seminyak, the mornings feel unhurried and the sea seems to teach the body how to slow down again."],
      ["Adventure core", "Ijen, Sewu, and Bromo arrive like three rising chapters, each one sharper, colder, and more unforgettable than the last."],
      ["Elegant ending", "Yogyakarta gathers the journey back into stone, prayer, streets, and a quieter afterglow."]
    ],
    volcanoCaption: "Bromo dawn",
    volcanoCredit: "Photo by Arya Krisdyantara / Unsplash",
    beachCaption: "Bali shoreline",
    beachCredit: "Photo by Santhosh Mocharla / Unsplash",
    routeLabel: "Penerbangan dan rute",
    routeTitle: "Flights and route",
    routeLead: "This page keeps the flight legs, baggage allowance, and travel flow together so they are easier to re-check before departure.",
    departTag: "Outbound",
    departTitle: "Taipei to Bali",
    returnTag: "Return",
    returnTitle: "Yogyakarta to Taipei via Jakarta",
    tripFlowLabel: "Alur perjalanan",
    tripFlowValue: "Taipei → Bali → Ijen → Sewu → Bromo → Malang → Yogyakarta",
    flightHighlights: [
      ["Outbound shape", "CI771 direct to DPS on China Airlines"],
      ["Return shape", "CI9761 feeder segment + CI762 long-haul return"],
      ["Baggage", "23kg ×2 outbound, 23kg ×1 inbound"]
    ],
    flightNotes: [
      ["Departure reminder", "For the international leg, arriving at the airport at least 2 hours early remains the safer plan."],
      ["Transfer responsibility", "The true long-haul international sector is CI762; the YIA → CGK portion is a China Airlines ticketed feeder segment and the operating carrier should be confirmed on the live ticket and airport display."],
      ["Privacy choice", "The site keeps the flight structure and carrier notes, but deliberately does not display the booking code."]
    ],
    trainLabel: "Rail chapter",
    trainTitle: "Train transfer",
    trainLead:
      "Day 7 is the right place to let the trip breathe again. This page focuses on Argo Semeru, its top-class private suites, and the most practical buying flow.",
    trainHighlights: [
      ["Trip role", "A soft reset day after the volcano stretch"],
      ["Top class", "Compartment Suites with 16 private cabins"],
      ["Fare range", "About Rp2,050,000 - Rp2,250,000"]
    ],
    trainCoverCaption: "Argo Semeru exterior",
    trainCoverCredit: "Photo via Journey.tw",
    trainSuiteCaption: "Compartment Suites private cabin",
    trainSuiteCredit: "Photo via Journey.tw",
    trainSummary:
      "If you want Day 7 to feel premium instead of merely functional, Argo Semeru's highest class is the one worth aiming for. Journey.tw notes that Compartment Suites has a 1-1 layout with 16 private cabins, and the seat can rotate and recline nearly flat, so it feels much closer to a private room than a standard train seat.",
    trainFacts: [
      ["Suggested use", "East Java transfer day toward Yogyakarta"],
      ["Highest class", "Compartment Suites"],
      ["Layout", "16 private cabins, one traveler per room"],
      ["Seat feature", "Rotates and reclines nearly flat"],
      ["Reference fare", "About Rp2,050,000 - Rp2,250,000"]
    ],
    trainNotes: [
      "This works especially well as the recovery leg after the rougher volcano days.",
      "If the goal is a high-comfort transfer, the highest class is the meaningful upgrade here.",
      "Fare and availability may change, so do one final check close to departure."
    ],
    trainBuyTitle: "How to buy it",
    trainBuyLead: "These notes are based mainly on the Journey.tw article and trimmed into a practical checklist.",
    trainBuySteps: [
      ["Step 1", "Confirm your Day 7 station pairing first, then look for the transfer segment that best fits your East-Java-to-Yogyakarta flow."],
      ["Step 2", "Choose Argo Semeru and go straight for Compartment Suites if you want the highest-class private-cabin experience."],
      ["Step 3", "Journey.tw mentions tiket.com as a booking route, and station self-service ticket pickup as part of the process."],
      ["Step 4", "Book earlier if possible, because there are only 16 private cabins in this class."]
    ],
    trainLinks: [
      ["Journey.tw rail article", "https://journey.tw/ka-argo-semeru/"],
      ["tiket.com rail booking", "https://www.tiket.com/kereta-api"]
    ],
    toursLabel: "Tour chapter",
    toursTitle: "Curated tours",
    toursLead: "This page keeps the booked and planned package tours together so the links and structure stay easy to re-check later.",
    tourLinkLabel: "Open page",
    toursList: [
      {
        dates: "4D3N",
        area: "Booked volcano tour",
        hotel: "Ijen • Papuma • Tumpak Sewu • Bromo",
        localName: "Java Volcano Tour Operator",
        stars: "Adventure core",
        image: "./assets/tours/jvto-volcano-tour.jpg",
        note: "This is the roughest and most unforgettable stretch of the trip, built around blue fire, waterfall terrain, and a sunrise volcano finish.",
        details: [
          "4-day route starting from Bali",
          "Public page shows sample stays: Luminor / Doho / Joglo Kecombrang",
          "Core order is Ijen → Papuma / Sewu → Bromo"
        ],
        url: "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n",
        linkLabel: "JVTO tour page"
      },
      {
        dates: "Private day tour",
        area: "Planned booking",
        hotel: "Dagi Hill + Borobudur + Prambanan",
        localName: "Klook Yogyakarta private temple tour",
        stars: "Culture day",
        image: "./assets/tours/klook-borobudur-prambanan.webp",
        note: "This fits Day 8 beautifully by turning the temple day into one private-car package rather than a fragmented DIY transfer day.",
        details: [
          "Dagi Hill sunrise / morning access",
          "Borobudur and Prambanan in one route",
          "Private day-tour structure, good for the culture core"
        ],
        url: "https://www.klook.com/zh-TW/activity/91895-dagi-hill-borobudur-temple-prambanan-temple-private-day-tour-yogyakarta/",
        linkLabel: "Klook page",
        extraLinks: [["Klook ID page", "https://www.klook.com/id/activity/91895-dagi-hill-borobudur-temple-prambanan-temple-private-day-tour-yogyakarta/"]]
      }
    ],
    stayLabel: "Rencana menginap",
    stayTitle: "Where you stay",
    stayLead: "Each stay matches a different mood: resort ease, recovery after the volcano leg, then a city finish. Every hotel includes a Google Maps link.",
    stayMapLabel: "Google Maps",
    stayTourLabel: "Tour page",
    linksLabel: "Tautan resmi",
    linksTitle: "Useful official links",
    linksLead: "This page keeps the hotel, volcano tour, airport rail, and entry websites together in one place.",
    linksHighlights: [
      ["Stays", "Official sites for all 3 hotels"],
      ["Transport", "Volcano tour and airport rail"],
      ["Entry", "eVisa and Love Bali"]
    ],
    transportTitle: "Transport and timing",
    packingTitle: "Packing and safety",
    itineraryLabel: "Rencana harian",
    itineraryTitle: "Daily itinerary",
    itineraryLead: "Each day is arranged as a simple vertical timeline so it reads more like a practical handbook.",
    itineraryHighlights: [
      ["Route rhythm", "Relax first, volcanoes next, temples to finish"],
      ["Hardest day", "Sewu waterfall is likely the most physical day"],
      ["Safest return", "The 06:00-ish YIA airport rail remains the safest plan"]
    ],
    dayFocusLabel: "Today's focus",
    budgetLabel: "Ringkasan budget",
    budgetTitle: "Budget breakdown",
    budgetLead: "IDR conversions below use a rough planning rate of NT$1 ≈ Rp531, meant for planning only.",
    paidTitle: "Already paid",
    openTitle: "Still open",
    totalBudgetLabel: "Total budget",
    budgetRateNote: "Planning rate: NT$1 ≈ Rp531",
    dailyAverageLabel: "Daily average",
    budgetStyleNote: "High-quality DIY trip, not luxury, but very complete",
    budgetTableStatus: "Status",
    budgetTableItem: "Item",
    budgetTableDetail: "Detail",
    budgetTableAmount: "Amount",
    budgetStatusPaid: "Paid",
    budgetStatusOpen: "Open",
    mapLabel: "Peta perjalanan",
    mapTitle: "Map overview",
    mapLead: "Hotels, volcano stops, and the airport flow are collected here so you can switch to a large Google map view quickly on mobile too.",
    mapRouteLink: "Open full route",
    mapDayLabel: "Daily Routes",
    mapDayRoutes: [
      ["Day 1", "Arrival and check-in", DAY_ROUTE_URLS.day1],
      ["Day 2", "Seminyak slow day", DAY_ROUTE_URLS.day2],
      ["Day 3", "Bali to volcano leg", DAY_ROUTE_URLS.day3],
      ["Day 4", "Ijen route", DAY_ROUTE_URLS.day4],
      ["Day 5", "Sewu waterfall route", DAY_ROUTE_URLS.day5],
      ["Day 6", "Bromo sunrise route", DAY_ROUTE_URLS.day6],
      ["Day 7", "Malang to Yogyakarta", DAY_ROUTE_URLS.day7],
      ["Day 8", "Temple day route", DAY_ROUTE_URLS.day8],
      ["Day 9", "Hotel to airport", DAY_ROUTE_URLS.day9]
    ],
    visaLabel: "Visa & Entry",
    visaTitle: "Visa and entry notes",
    visaLead: "Apply for the eVisa first, then pay the Bali tourist levy, and keep every QR code and receipt saved on your phone.",
    visaPanelTitle: "Indonesia tourist visa",
    arrivalPanelTitle: "Bali arrival extras",
    visaLinkOne: "Official Indonesia eVisa",
    visaLinkTwo: "Official Love Bali site",
    visaHighlights: [
      ["Step one", "Handle eVisa / e-VOA first"],
      ["Step two", "Pay the Bali levy of Rp150,000"],
      ["Final check", "Save QR codes, passport, and onward ticket together"]
    ],
    visaTutorial: [
      ["Step 1", "As of 2026-04-04, the official Indonesia eVisa / e-VOA eligibility list explicitly includes Taiwan, so a Taiwan passport can proceed through the e-VOA / VOA path before starting the application."],
      ["Step 2", "Prepare your passport, onward flight, hotel details, and a payment card. Passport validity should still be at least 6 months."],
      ["Step 3", "After payment, save the eVisa or e-VOA proof on your phone and keep a screenshot backup."],
      ["Step 4", "Go to the official Love Bali site and pay the Bali tourist levy of Rp150,000, then save that QR code too."],
      ["Step 5", "The night before departure, keep passport, visa proof, Love Bali QR code, and return flight details in one easy-to-open folder."]
    ],
    resourceLinks: [
      ["Seminyak hotel", "Official site for Courtyard by Marriott Bali Seminyak Resort", "https://www.marriott.com/en-us/hotels/dpssm-courtyard-bali-seminyak-resort/"],
      ["Malang hotel", "Official site for The Shalimar Boutique Hotel", "https://theshalimarhotel.co.id/"],
      ["Yogyakarta hotel", "Official site for Aveta Hotel Malioboro", "https://avetahotelmalioboro.com/"],
      ["Volcano tour", "Official Java Volcano Tour Operator page", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
      ["Temple day tour", "Klook Dagi Hill + Borobudur + Prambanan private day tour", "https://www.klook.com/zh-TW/activity/91895-dagi-hill-borobudur-temple-prambanan-temple-private-day-tour-yogyakarta/"],
      ["Argo Semeru guide", "Journey.tw review of the train and suite class", "https://journey.tw/ka-argo-semeru/"],
      ["Airport rail", "Official YIA Airport Rail Link booking page", "https://reservation.railink.co.id/"],
      ["Indonesia eVisa", "Official Indonesia visa application site", "https://evisa.imigrasi.go.id/"],
      ["Love Bali", "Official Bali tourist levy site", "https://lovebali.baliprov.go.id/"]
    ],
    overviewStats: [
      ["Length", "9 days / 8 nights"],
      ["Trip type", "High-quality DIY"],
      ["Summary", "Experience, rest, culture"],
      ["Region", "Bali + East Java + Yogyakarta"]
    ],
    flightData: {
      depart: {
        summary: "This outbound leg flies directly from Taipei to Bali on China Airlines, with no transfer complexity in between.",
        segments: [
          {
            route: "TPE → DPS",
            flight: "CI771",
            marketingCarrier: "China Airlines",
            operatingCarrier: "China Airlines",
            time: "09:10 → 14:35",
            duration: "Direct, 5h 25m",
            baggage: "23kg ×2"
          }
        ],
        notes: [
          "This is the cleanest part of the ticket because it is nonstop.",
          "Landing in the afternoon makes the first day better suited to check-in, dinner, and rest.",
          "If online check-in and documents are sorted the night before, departure day feels much easier."
        ]
      },
      return: {
        summary: "The return is a two-part structure: a feeder flight from Yogyakarta to Jakarta, then the main China Airlines international sector back to Taipei.",
        segments: [
          {
            route: "YIA → CGK",
            flight: "CI9761",
            marketingCarrier: "China Airlines ticketed segment",
            operatingCarrier: "Check the final e-ticket and airport display",
            time: "09:45 → same-day connection",
            duration: "Domestic feeder leg",
            baggage: "Total return allowance 23kg ×1"
          },
          {
            route: "CGK → TPE",
            flight: "CI762",
            marketingCarrier: "China Airlines",
            operatingCarrier: "China Airlines",
            time: "same-day connection → 21:05 arrival",
            duration: "Main international return leg",
            baggage: "23kg ×1"
          }
        ],
        notes: [
          "CI9761 is a China Airlines ticketed feeder sector; the actual operating carrier should be confirmed on the final ticket and at the airport.",
          "The true long-haul international segment back to Taipei is CI762 out of Jakarta.",
          "Because this is a domestic-to-international connection day, buffer time at both YIA and Jakarta matters."
        ]
      }
    },
    flightSegmentLabels: {
      route: "Sector",
      flight: "Flight",
      marketingCarrier: "Ticketed carrier",
      operatingCarrier: "Operating carrier",
      time: "Time",
      duration: "Leg note",
      baggage: "Baggage"
    },
    stays: [
      {
        dates: "Jun 13 - Jun 15",
        area: "Seminyak, Bali",
        hotel: "Courtyard by Marriott Bali Seminyak Resort",
        localName: "Courtyard Bali Seminyak Resort",
        stars: "5-star",
        image: "./assets/stays/seminyak-resort.jpg",
        note: "A bright, sea-breezed opening that lets the whole trip begin softly instead of abruptly.",
        details: [
          "Walkable to Seminyak Beach",
          "Three-tier pool, spa, and strong resort facilities",
          "A very good two-night opening for rest and reset"
        ],
        url: HOTEL_MAPS.seminyak
      },
      {
        dates: "Jun 15 - Jun 17",
        area: "Java volcano region",
        hotel: "Tour provided",
        localName: "Volcano stay arranged by tour",
        stars: "Tour arranged",
        image: "./assets/stays/luminor-bwi.jpeg",
        note: "This segment is less about luxury and more about holding the sleep-deprived volcano rhythm together. The stays below are the sample accommodation plan shown on JVTO's public tour page.",
        details: [
          "Night 1: Luminor Hotel near Ijen",
          "Night 2: Doho Homestay near Papuma",
          "Night 3: Joglo Kecombrang Bromo"
        ],
        url: HOTEL_MAPS.volcanoTour,
        linkLabel: "Tour page",
        extraLinks: [
          ["Luminor", HOTEL_MAPS.luminor],
          ["Doho", HOTEL_MAPS.doho],
          ["Kecombrang", HOTEL_MAPS.kecombrang]
        ]
      },
      {
        dates: "Jun 18",
        area: "Malang",
        hotel: "The Shalimar Boutique Hotel",
        localName: "The Shalimar Boutique Hotel",
        stars: "5-star",
        image: "./assets/stays/shalimar-front.jpg",
        note: "A colonial-era boutique pause after the rugged days, made more for exhaling than for rushing.",
        details: [
          "1930s colonial architecture",
          "Garden, pool, and heritage-boutique atmosphere",
          "Ideal as the recovery night after the volcano stretch"
        ],
        url: HOTEL_MAPS.malang
      },
      {
        dates: "Jun 19 - Jun 21",
        area: "Yogyakarta",
        hotel: "Aveta Hotel Malioboro",
        localName: "Aveta Hotel Malioboro",
        stars: "4-star",
        image: "./assets/stays/aveta-suite1.jpg",
        note: "A city stay that keeps the ending easy: temples by day, Malioboro by evening, airport flow the morning after.",
        details: [
          "Right on Malioboro Street",
          "Sky pool, rooftop dining, modern rooms",
          "Makes temple day and departure logistics much easier"
        ],
        url: HOTEL_MAPS.yogyakarta
      }
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
    mapLocations: [
      ["Seminyak Beach", "Seminyak Beach Bali", "The beach zone that opens the Bali part of the trip."],
      ["Seminyak hotel", "Courtyard by Marriott Bali Seminyak Resort", "Main base for the first two nights."],
      ["Ijen Crater", "Ijen Crater East Java", "The signature blue-fire crater stop."],
      ["Tumpak Sewu", "Tumpak Sewu Waterfall", "One of the most dramatic waterfall stops of the route."],
      ["Mount Bromo", "Mount Bromo", "The iconic sunrise volcano viewpoint."],
      ["Malang hotel", "The Shalimar Boutique Hotel Malang", "A softer recovery stay after the rugged stretch."],
      ["Yogyakarta hotel", "Aveta Hotel Malioboro Yogyakarta", "City base for temples and departure flow."],
      ["YIA airport", "Yogyakarta International Airport", "Final transfer point on the way home."]
    ],
    itinerary: [
      ["Day 1", "Arrive in Bali", "Fly CI771 from Taipei to DPS, then keep the first day easy with check-in, dinner, and rest.", ["Arrival", "Easy dinner", "Rest"], [["Pacing", "Keep the first day intentionally light so the trip opens in a calm way."], ["Suggested plan", "Check in, walk nearby, have dinner, and sleep early."], ["Useful task", "Settle hotel basics, nearby stores, and next-day essentials on the first night."]]],
      ["Day 2", "Slow Bali day", "Use this day for beach clubs, massage, and free time in Seminyak.", ["Seminyak", "Massage", "Free time"], [["Style", "This day works best as a mood-setting leisure day rather than a packed sightseeing run."], ["Reminder", "Strong sun, beach time, and last-minute shopping make this a good prep day too."], ["Optional upgrade", "A nicer dinner spot can make the Bali segment feel more complete."]]],
      ["Day 3", "Enter the volcano segment", "The East Java route begins here, with the key order Ijen → Sewu → Bromo.", ["Tour transfer", "Volcano region", "Malang drop"], [["Key check", "Reconfirm the tour order and whether the final drop-off is in Malang."], ["Prep", "Sleep may get fragmented from here, so keep warm layers and essentials ready."], ["Bag setup", "Keep water, snacks, power bank, and key documents easy to reach."]]],
      ["Day 4", "Ijen Crater", "Blue fire and crater views make this one of the signature highlights.", ["Blue fire", "Night hike", "Volcano"], [["Highlight", "The blue fire and daylight crater lake are the defining visuals here."], ["Gear", "A headlamp, grip shoes, light jacket, and mask all help."], ["Energy note", "The overnight rhythm can be tiring, so any spare daytime rest is worth taking."]]],
      ["Day 5", "Tumpak Sewu", "A dramatic waterfall day with physical terrain and slippery paths.", ["Waterfall", "Grip shoes", "High-energy day"], [["Terrain", "Expect wet steps, descents, and one of the most physical days of the trip."], ["Pack note", "A change of clothes and waterproof protection for phones are worth bringing."], ["Photo note", "Mist and spray are strong here, so a cloth for lenses helps a lot."]]],
      ["Day 6", "Mount Bromo Sunrise", "The classic sunrise finale with cold air and possible volcanic dust.", ["Sunrise", "Jacket", "Mask or buff"], [["Highlight", "Bromo is the iconic finale of the volcano sequence."], ["Reminder", "It can be windy, cold, and dusty before sunrise."], ["Mood", "This is usually the point where the adventure section feels fully accomplished."]]],
      ["Day 7", "Malang → Yogyakarta", "Take the train to Yogyakarta and use this as a softer transition day.", ["Train", "Rest", "City switch"], [["Pacing", "This is a good recovery day after the high-intensity volcano stretch."], ["Transport", "Leave enough buffer for the train and keep luggage handling easy."], ["Evening idea", "If energy allows, walk around Malioboro to get familiar with the area."]]],
      ["Day 8", "Borobudur + Prambanan", "Plan this as the Klook Dagi Hill + Borobudur + Prambanan private day tour so the culture day feels complete in one flow.", ["Borobudur", "Prambanan", "Klook private tour"], [["Culture note", "The two temple sites give the trip a much deeper finish beyond nature and adventure."], ["Tour setup", "This day is planned around the Klook private day tour, which is smoother than splitting the transport yourself."], ["Clothing note", "Breathable clothes, water, and sun protection help on this long temple day."]]],
      ["Day 9", "Departure day", "Take the early airport rail to YIA and keep at least a 2-hour buffer.", ["Airport rail", "Early start", "Fly home"], [["Timing", "The 06:00-ish airport rail remains the safer low-stress option."], ["Final reminder", "Prepare passport, tickets, and payment proofs the night before."], ["Last check", "Before leaving, make sure chargers, adapters, and souvenirs are packed."]]]
    ],
    budgetLabels: {
      flight: ["Flights", "China Airlines round trip"],
      hotel: ["Hotels", "Seminyak, Malang, Yogyakarta"],
      volcanoDeposit: ["Volcano deposit", "Ijen / Sewu / Bromo tour"],
      volcanoBalance: ["Volcano balance", "Remaining 80%; Rp8,160,000 total for 2 people, shown here per person"],
      templeTour: ["Temple tour", "Borobudur + Prambanan"],
      train: ["Train", "Malang → Yogyakarta"],
      dailySpend: ["Daily spend", "Food, massage, incidentals"]
    },
    visaPoints: [
      ["30-day tourist option", "Indonesia's official eVisa FAQ shows a common 30-day tourist stay, extendable once, with a fee of IDR 500,000."],
      ["Taiwan passport holders", "As of 2026-04-04, Taiwan appears on the official Indonesia eVisa / e-VOA eligible passport list, so a Taiwan passport is eligible for e-VOA / VOA."],
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
    navFlights: "Penerbangan",
    navTrain: "Kereta",
    navTours: "Tur",
    navStay: "Hotel",
    navLinks: "Tautan",
    navItinerary: "Rencana",
    navMap: "Peta",
    navBudget: "Biaya",
    navVisa: "Visa",
    overviewLabel: "Ringkasan perjalanan",
    overviewTitle: "Rute klasik Indonesia yang lengkap, nyaman, dan punya ritme emosi yang rapi",
    overviewLead: "Perjalanan ini bukan sekadar mengumpulkan tempat, tetapi membiarkan laut, fajar gunung api, dan siluet candi masuk ke ingatan dengan ritme yang indah.",
    coverLabel: "Narasi perjalanan",
    coverTitle: "Ada perjalanan yang tidak dimulai saat berangkat, tetapi saat hati mulai melunak",
    coverLead:
      "Yang membuat rute ini terasa istimewa bukan karena padat, melainkan karena tahu kapan harus tenang dan kapan harus megah. Bali membuka dengan lembut, Jawa Timur memberi dramanya, lalu Yogyakarta menutup dengan budaya dan cahaya sore yang lebih pelan.",
    coverPoints: [
      ["Pembuka lembut", "Di Seminyak, pagi terasa pelan, angin laut terasa ringan, dan tubuh seperti diajari santai lagi."],
      ["Inti petualangan", "Ijen, Sewu, dan Bromo datang seperti tiga bab yang makin dingin, makin megah, dan makin sulit dilupakan."],
      ["Penutup rapi", "Yogyakarta menampung semuanya kembali dalam candi, jalan kota, dan sisa cahaya yang tenang."]
    ],
    volcanoCaption: "Fajar Bromo",
    volcanoCredit: "Photo by Arya Krisdyantara / Unsplash",
    beachCaption: "Laut Bali",
    beachCredit: "Photo by Santhosh Mocharla / Unsplash",
    routeLabel: "Penerbangan dan rute",
    routeTitle: "Penerbangan dan rute",
    routeLead: "Halaman ini merangkum segmen penerbangan, bagasi, dan alur perjalanan agar lebih mudah dicek ulang sebelum berangkat.",
    departTag: "Pergi",
    departTitle: "Taipei ke Bali",
    returnTag: "Pulang",
    returnTitle: "Yogyakarta ke Taipei via Jakarta",
    tripFlowLabel: "Alur perjalanan",
    tripFlowValue: "Taipei → Bali → Ijen → Sewu → Bromo → Malang → Yogyakarta",
    flightHighlights: [
      ["Struktur pergi", "CI771 langsung ke DPS dengan China Airlines"],
      ["Struktur pulang", "Segmen feeder CI9761 + CI762 kembali ke Taipei"],
      ["Bagasi", "23kg ×2 saat pergi, 23kg ×1 saat pulang"]
    ],
    flightNotes: [
      ["Pengingat berangkat", "Untuk penerbangan internasional, datang minimal 2 jam lebih awal tetap lebih aman."],
      ["Tanggung jawab transit", "Segmen internasional utama adalah CI762; bagian YIA → CGK adalah segmen feeder dengan kode tiket China Airlines, sedangkan maskapai operasional sebaiknya dicek lagi di tiket final dan layar bandara."],
      ["Privasi", "Halaman ini hanya menampilkan struktur penerbangan dan maskapai, tanpa menaruh kode booking."]
    ],
    trainLabel: "Bab kereta",
    trainTitle: "Transfer kereta",
    trainLead:
      "Hari ke-7 paling enak dipakai untuk memulihkan tenaga. Halaman ini merangkum Argo Semeru, kabin kelas tertingginya, dan alur beli tiket yang paling praktis.",
    trainHighlights: [
      ["Peran hari ini", "Hari reset yang lebih lembut setelah segmen gunung api"],
      ["Kelas tertinggi", "Compartment Suites dengan 16 kabin privat"],
      ["Kisaran harga", "Sekitar Rp2.050.000 - Rp2.250.000"]
    ],
    trainCoverCaption: "Eksterior Argo Semeru",
    trainCoverCredit: "Foto via Journey.tw",
    trainSuiteCaption: "Kabin privat Compartment Suites",
    trainSuiteCredit: "Foto via Journey.tw",
    trainSummary:
      "Kalau Hari ke-7 ingin dibuat senyaman mungkin, kelas tertinggi Argo Semeru adalah opsi yang paling menarik. Journey.tw mencatat bahwa Compartment Suites memakai tata letak 1-1 dengan 16 kabin privat, dan kursinya bisa diputar serta direbahkan hampir datar, jadi rasanya jauh lebih dekat ke kamar pribadi daripada kursi kereta biasa.",
    trainFacts: [
      ["Pemakaian ideal", "Hari transfer Jawa Timur menuju Yogyakarta"],
      ["Kelas tertinggi", "Compartment Suites"],
      ["Tata letak", "16 kabin privat, 1 orang per ruang"],
      ["Fitur kursi", "Bisa diputar dan direbahkan hampir rata"],
      ["Harga acuan", "Sekitar Rp2.050.000 - Rp2.250.000"]
    ],
    trainNotes: [
      "Ini sangat cocok dijadikan segmen recovery setelah hari-hari gunung api yang berat.",
      "Kalau tujuanmu transfer yang nyaman dan terasa premium, kelas tertinggi inilah upgrade yang paling terasa.",
      "Harga dan ketersediaan bisa berubah, jadi tetap cek lagi mendekati hari berangkat."
    ],
    trainBuyTitle: "Cara beli tiket",
    trainBuyLead: "Ringkasan ini terutama mengikuti artikel Journey.tw, lalu disusun ulang jadi checklist yang lebih praktis.",
    trainBuySteps: [
      ["Langkah 1", "Pastikan dulu pasangan stasiun untuk Hari ke-7, lalu cari segmen transfer yang paling cocok dari sisi alur Jawa Timur ke Yogyakarta."],
      ["Langkah 2", "Pilih Argo Semeru dan langsung incar Compartment Suites kalau ingin pengalaman kabin privat kelas tertinggi."],
      ["Langkah 3", "Journey.tw menyebut tiket bisa dicari lewat tiket.com, lalu alur ambil tiket mandiri di stasiun juga perlu diperhitungkan."],
      ["Langkah 4", "Kalau bisa, pesan lebih awal karena kelas ini hanya punya 16 kabin privat."]
    ],
    trainLinks: [
      ["Artikel kereta Journey.tw", "https://journey.tw/ka-argo-semeru/"],
      ["Pemesanan kereta tiket.com", "https://www.tiket.com/kereta-api"]
    ],
    toursLabel: "Bab tur",
    toursTitle: "Tur paket",
    toursLead: "Tur yang sudah dipesan dan yang masih direncanakan dikumpulkan di sini supaya link dan struktur perjalanannya lebih mudah dicek lagi nanti.",
    tourLinkLabel: "Buka halaman",
    toursList: [
      {
        dates: "4H3M",
        area: "Tur gunung api sudah dipesan",
        hotel: "Ijen • Papuma • Tumpak Sewu • Bromo",
        localName: "Java Volcano Tour Operator",
        stars: "Inti petualangan",
        image: "./assets/tours/jvto-volcano-tour.jpg",
        note: "Inilah bagian paling keras sekaligus paling membekas dari perjalanan ini: blue fire, medan air terjun, dan penutup sunrise gunung api.",
        details: [
          "Rute 4 hari berangkat dari Bali",
          "Halaman publik menampilkan contoh hotel: Luminor / Doho / Joglo Kecombrang",
          "Urutan utama adalah Ijen → Papuma / Sewu → Bromo"
        ],
        url: "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n",
        linkLabel: "Halaman JVTO"
      },
      {
        dates: "Tur privat sehari",
        area: "Rencana booking",
        hotel: "Dagi Hill + Borobudur + Prambanan",
        localName: "Tur privat candi Yogyakarta via Klook",
        stars: "Hari budaya",
        image: "./assets/tours/klook-borobudur-prambanan.webp",
        note: "Paket ini sangat pas untuk Hari ke-8 karena membuat hari candi terasa utuh dalam satu alur private car, bukan pecah menjadi banyak perpindahan kecil.",
        details: [
          "Akses sunrise / pagi di Dagi Hill",
          "Borobudur dan Prambanan dalam satu rute",
          "Format tur privat, cocok untuk inti hari budaya"
        ],
        url: "https://www.klook.com/zh-TW/activity/91895-dagi-hill-borobudur-temple-prambanan-temple-private-day-tour-yogyakarta/",
        linkLabel: "Halaman Klook",
        extraLinks: [["Klook ID", "https://www.klook.com/id/activity/91895-dagi-hill-borobudur-temple-prambanan-temple-private-day-tour-yogyakarta/"]]
      }
    ],
    stayLabel: "Rencana menginap",
    stayTitle: "Rencana menginap",
    stayLead: "Setiap tempat menginap punya fungsi ritmenya sendiri: santai, recovery setelah gunung api, lalu penutup kota. Setiap hotel diberi link Google Maps.",
    stayMapLabel: "Google Maps",
    stayTourLabel: "Halaman tour",
    linksLabel: "Tautan resmi",
    linksTitle: "Tautan resmi",
    linksLead: "Halaman ini mengumpulkan hotel, tour gunung api, kereta bandara, dan situs masuk Indonesia dalam satu tempat.",
    linksHighlights: [
      ["Hotel", "Situs resmi untuk 3 hotel"],
      ["Transportasi", "Tour gunung api dan kereta bandara"],
      ["Masuk", "eVisa dan Love Bali"]
    ],
    transportTitle: "Transportasi dan waktu",
    packingTitle: "Pakaian dan keamanan",
    itineraryLabel: "Rencana harian",
    itineraryTitle: "Rencana harian",
    itineraryLead: "Setiap hari kini disusun sebagai timeline vertikal agar terasa lebih rapi dan praktis dibaca.",
    itineraryHighlights: [
      ["Ritme rute", "Santai dulu, lalu gunung api, lalu penutup budaya"],
      ["Hari terberat", "Hari Sewu biasanya paling menguras tenaga"],
      ["Pulang paling aman", "Kereta YIA sekitar 06.00 tetap opsi paling aman"]
    ],
    dayFocusLabel: "Fokus hari ini",
    budgetLabel: "Ringkasan budget",
    budgetTitle: "Ringkasan budget",
    budgetLead: "Konversi IDR di bawah memakai kurs perkiraan NT$1 ≈ Rp531, untuk planning saja.",
    paidTitle: "Sudah dibayar",
    openTitle: "Belum dibayar",
    totalBudgetLabel: "Total biaya",
    budgetRateNote: "Kurs perkiraan: NT$1 ≈ Rp531",
    dailyAverageLabel: "Rata-rata harian",
    budgetStyleNote: "Trip mandiri berkualitas, bukan mewah, tapi sangat lengkap",
    budgetTableStatus: "Status",
    budgetTableItem: "Item",
    budgetTableDetail: "Detail",
    budgetTableAmount: "Nominal",
    budgetStatusPaid: "Sudah",
    budgetStatusOpen: "Belum",
    mapLabel: "Peta perjalanan",
    mapTitle: "Ringkasan peta",
    mapLead: "Hotel, titik gunung api, dan alur ke bandara dikumpulkan di sini supaya mudah dibuka sebagai peta besar, termasuk di HP.",
    mapRouteLink: "Buka rute lengkap",
    mapDayLabel: "Rute Harian",
    mapDayRoutes: [
      ["Hari 1", "Tiba dan check-in", DAY_ROUTE_URLS.day1],
      ["Hari 2", "Hari santai Seminyak", DAY_ROUTE_URLS.day2],
      ["Hari 3", "Bali ke segmen gunung api", DAY_ROUTE_URLS.day3],
      ["Hari 4", "Rute Ijen", DAY_ROUTE_URLS.day4],
      ["Hari 5", "Rute air terjun Sewu", DAY_ROUTE_URLS.day5],
      ["Hari 6", "Rute sunrise Bromo", DAY_ROUTE_URLS.day6],
      ["Hari 7", "Malang ke Yogyakarta", DAY_ROUTE_URLS.day7],
      ["Hari 8", "Rute hari candi", DAY_ROUTE_URLS.day8],
      ["Hari 9", "Hotel ke bandara", DAY_ROUTE_URLS.day9]
    ],
    visaLabel: "Visa dan masuk",
    visaTitle: "Catatan visa dan masuk",
    visaLead: "Urus eVisa lebih dulu, lalu bayar levy wisata Bali, dan simpan semua QR code serta bukti pembayaran di HP.",
    visaPanelTitle: "Visa wisata Indonesia",
    arrivalPanelTitle: "Tambahan saat tiba di Bali",
    visaLinkOne: "eVisa resmi Indonesia",
    visaLinkTwo: "Situs resmi Love Bali",
    visaHighlights: [
      ["Langkah 1", "Urus eVisa / e-VOA dulu"],
      ["Langkah 2", "Bayar levy Bali Rp150.000"],
      ["Cek akhir", "Simpan QR code, paspor, dan tiket pulang jadi satu"]
    ],
    visaTutorial: [
      ["Langkah 1", "Per 2026-04-04, daftar paspor yang memenuhi syarat pada halaman resmi eVisa / e-VOA Indonesia sudah mencantumkan Taiwan, jadi paspor Taiwan bisa memakai jalur e-VOA / VOA sebelum mulai mengajukan."],
      ["Langkah 2", "Siapkan paspor, tiket keluar, data hotel, dan kartu pembayaran. Masa berlaku paspor harus minimal 6 bulan."],
      ["Langkah 3", "Setelah pembayaran selesai, simpan bukti eVisa atau e-VOA di HP dan backup dengan screenshot."],
      ["Langkah 4", "Masuk ke situs resmi Love Bali lalu bayar levy wisata Bali Rp150.000, lalu simpan QR code-nya juga."],
      ["Langkah 5", "Malam sebelum berangkat, taruh paspor, bukti visa, QR code Love Bali, dan detail tiket pulang di satu folder yang mudah dibuka."]
    ],
    resourceLinks: [
      ["Hotel Seminyak", "Situs resmi Courtyard by Marriott Bali Seminyak Resort", "https://www.marriott.com/en-us/hotels/dpssm-courtyard-bali-seminyak-resort/"],
      ["Hotel Malang", "Situs resmi The Shalimar Boutique Hotel", "https://theshalimarhotel.co.id/"],
      ["Hotel Yogyakarta", "Situs resmi Aveta Hotel Malioboro", "https://avetahotelmalioboro.com/"],
      ["Tour gunung api", "Halaman resmi Java Volcano Tour Operator", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
      ["Tur candi", "Tur privat Klook Dagi Hill + Borobudur + Prambanan", "https://www.klook.com/zh-TW/activity/91895-dagi-hill-borobudur-temple-prambanan-temple-private-day-tour-yogyakarta/"],
      ["Panduan Argo Semeru", "Ulasan Journey.tw tentang kereta dan suite tertinggi", "https://journey.tw/ka-argo-semeru/"],
      ["Kereta bandara", "Halaman resmi pemesanan YIA Airport Rail Link", "https://reservation.railink.co.id/"],
      ["eVisa Indonesia", "Situs resmi pengajuan visa Indonesia", "https://evisa.imigrasi.go.id/"],
      ["Love Bali", "Situs resmi levy wisata Bali", "https://lovebali.baliprov.go.id/"]
    ],
    overviewStats: [
      ["Durasi", "9 hari / 8 malam"],
      ["Jenis trip", "Mandiri berkualitas"],
      ["Ringkas", "Pengalaman, santai, budaya"],
      ["Area", "Bali + Jawa Timur + Yogyakarta"]
    ],
    flightData: {
      depart: {
        summary: "Taipei terbang langsung ke Bali, seluruh segmen utama dioperasikan oleh China Airlines dan ritmenya cukup sederhana.",
        segments: [
          {
            route: "TPE → DPS",
            flight: "CI771",
            marketingCarrier: "China Airlines",
            operatingCarrier: "China Airlines",
            time: "09:10 → 14:35",
            duration: "Langsung 5 jam 25 menit",
            baggage: "23kg ×2"
          }
        ],
        notes: [
          "Segmen pergi ini paling sederhana karena tanpa transit.",
          "Tiba di siang menuju sore, jadi cocok langsung check-in dan istirahat.",
          "Kalau dokumen dan check-in online sudah dirapikan malam sebelumnya, hari berangkat terasa jauh lebih ringan."
        ]
      },
      return: {
        summary: "Rute pulang terdiri dari dua bagian: terbang dulu dari Yogyakarta ke Jakarta, lalu lanjut penerbangan internasional China Airlines ke Taipei.",
        segments: [
          {
            route: "YIA → CGK",
            flight: "CI9761",
            marketingCarrier: "Segmen berkode tiket China Airlines",
            operatingCarrier: "Cek lagi di e-ticket dan layar bandara",
            time: "09:45 → sambungan hari yang sama",
            duration: "Segmen domestik penghubung",
            baggage: "Total bagasi pulang 23kg ×1"
          },
          {
            route: "CGK → TPE",
            flight: "CI762",
            marketingCarrier: "China Airlines",
            operatingCarrier: "China Airlines",
            time: "sambungan hari yang sama → tiba 21:05",
            duration: "Segmen internasional utama",
            baggage: "23kg ×1"
          }
        ],
        notes: [
          "CI9761 adalah segmen penghubung dengan kode tiket China Airlines; maskapai operasionalnya sebaiknya dicek lagi di dokumen akhir dan di bandara.",
          "Segmen internasional utama yang benar-benar membawa pulang ke Taipei adalah CI762 dari Jakarta.",
          "Karena ada sambungan domestik ke internasional, buffer waktu di YIA dan Jakarta perlu dijaga baik-baik."
        ]
      }
    },
    flightSegmentLabels: {
      route: "Segmen",
      flight: "Penerbangan",
      marketingCarrier: "Maskapai pada tiket",
      operatingCarrier: "Maskapai operasional",
      time: "Waktu",
      duration: "Catatan segmen",
      baggage: "Bagasi"
    },
    stays: [
      {
        dates: "13 Jun - 15 Jun",
        area: "Seminyak, Bali",
        hotel: "Courtyard by Marriott Bali Seminyak Resort",
        localName: "Courtyard Bali Seminyak Resort",
        stars: "Bintang 5",
        image: "./assets/stays/seminyak-resort.jpg",
        note: "Pembuka yang lembut, terang, dan dekat laut, cocok untuk membuat tubuh santai dulu.",
        details: [
          "Bisa jalan ke Seminyak Beach",
          "Kolam bertingkat, spa, dan fasilitas resort lengkap",
          "Pas untuk dua malam pembuka sebelum ritme jadi lebih berat"
        ],
        url: HOTEL_MAPS.seminyak
      },
      {
        dates: "15 Jun - 17 Jun",
        area: "Area gunung api Jawa",
        hotel: "Tour provided",
        localName: "Akomodasi segmen gunung api",
        stars: "Diatur oleh tur",
        image: "./assets/stays/luminor-bwi.jpeg",
        note: "Bagian ini bukan soal mewah, tetapi soal tidur secukupnya dan bergerak efisien saat ritme sangat pagi. Berikut adalah contoh akomodasi yang ditampilkan pada halaman publik JVTO.",
        details: [
          "Malam 1: Luminor Hotel dekat Ijen",
          "Malam 2: Doho Homestay dekat Papuma",
          "Malam 3: Joglo Kecombrang Bromo"
        ],
        url: HOTEL_MAPS.volcanoTour,
        linkLabel: "Halaman tour",
        extraLinks: [
          ["Luminor", HOTEL_MAPS.luminor],
          ["Doho", HOTEL_MAPS.doho],
          ["Kecombrang", HOTEL_MAPS.kecombrang]
        ]
      },
      {
        dates: "18 Jun",
        area: "Malang",
        hotel: "The Shalimar Boutique Hotel",
        localName: "The Shalimar Boutique Hotel",
        stars: "Bintang 5",
        image: "./assets/stays/shalimar-front.jpg",
        note: "Tempat singgah yang terasa lebih anggun setelah hari-hari yang kasar dan penuh debu.",
        details: [
          "Bangunan kolonial era 1930-an",
          "Taman, kolam, dan nuansa boutique heritage",
          "Cocok untuk malam recovery setelah segmen gunung api"
        ],
        url: HOTEL_MAPS.malang
      },
      {
        dates: "19 Jun - 21 Jun",
        area: "Yogyakarta",
        hotel: "Aveta Hotel Malioboro",
        localName: "Aveta Hotel Malioboro",
        stars: "Bintang 4",
        image: "./assets/stays/aveta-suite1.jpg",
        note: "Tempat menginap yang membuat penutup perjalanan tetap ringan: dekat candi, dekat jalan utama, dan dekat ritme pulang.",
        details: [
          "Menempel di Malioboro Street",
          "Sky pool, rooftop dining, dan kamar modern",
          "Memudahkan hari candi dan keberangkatan pulang"
        ],
        url: HOTEL_MAPS.yogyakarta
      }
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
    mapLocations: [
      ["Pantai Seminyak", "Seminyak Beach Bali", "Area pantai untuk membuka perjalanan Bali dengan santai."],
      ["Hotel Seminyak", "Courtyard by Marriott Bali Seminyak Resort", "Basis utama dua malam pertama."],
      ["Kawah Ijen", "Ijen Crater East Java", "Titik utama blue fire dan danau kawah."],
      ["Tumpak Sewu", "Tumpak Sewu Waterfall", "Salah satu titik air terjun paling dramatis di rute ini."],
      ["Gunung Bromo", "Mount Bromo", "Titik sunrise paling ikonik di segmen gunung api."],
      ["Hotel Malang", "The Shalimar Boutique Hotel Malang", "Malam recovery yang lebih nyaman setelah petualangan."],
      ["Hotel Yogyakarta", "Aveta Hotel Malioboro Yogyakarta", "Basis kota untuk candi dan hari pulang."],
      ["Bandara YIA", "Yogyakarta International Airport", "Titik transfer terakhir sebelum pulang."]
    ],
    itinerary: [
      ["Hari 1", "Tiba di Bali", "Naik CI771 dari Taipei ke DPS, lalu jalani hari pertama dengan check-in, makan malam, dan istirahat.", ["Tiba", "Makan malam", "Istirahat"], [["Ritme", "Hari pertama paling enak dibuat ringan supaya tubuh menyesuaikan dulu."], ["Saran", "Check-in, jalan sebentar di sekitar hotel, makan malam, lalu istirahat lebih awal."], ["Yang berguna", "Rapikan kebutuhan hotel, minimarket sekitar, dan barang penting untuk besok."]]],
      ["Hari 2", "Hari santai di Bali", "Gunakan hari ini untuk beach club, pijat, dan waktu bebas di Seminyak.", ["Seminyak", "Pijat", "Waktu bebas"], [["Gaya hari", "Hari ini paling bagus dipakai untuk suasana santai, bukan lari ke terlalu banyak spot."], ["Pengingat", "Cocok juga untuk beli kebutuhan kecil sebelum masuk segmen gunung api."], ["Tambahan seru", "Kalau tenaga masih bagus, makan malam yang lebih spesial bisa bikin segmen Bali terasa lebih lengkap."]]],
      ["Hari 3", "Masuk segmen gunung api", "Rute Jawa Timur dimulai di sini dengan urutan Ijen → Sewu → Bromo.", ["Transfer tour", "Area gunung api", "Drop Malang"], [["Cek penting", "Pastikan lagi urutan tour dan drop-off terakhir di Malang."], ["Persiapan", "Dari sini ritme tidur bisa berantakan, jadi perlengkapan penting sebaiknya sudah rapi."], ["Tas kecil", "Air minum, snack, power bank, dan dokumen sebaiknya mudah diambil."]]],
      ["Hari 4", "Kawah Ijen", "Blue fire dan pemandangan kawah jadi salah satu sorotan utama.", ["Blue fire", "Hiking malam", "Gunung api"], [["Sorotan", "Blue fire dan danau kawah saat terang adalah dua visual paling kuat di sini."], ["Perlengkapan", "Headlamp, sepatu grip, jaket ringan, dan masker sangat membantu."], ["Energi", "Karena ritmenya malam sampai pagi, waktu istirahat siang sangat berharga."]]],
      ["Hari 5", "Tumpak Sewu", "Hari air terjun yang dramatis dengan jalur fisik dan cukup licin.", ["Air terjun", "Sepatu grip", "Hari aktif"], [["Medan", "Hari ini biasanya paling berat secara fisik dengan jalur turun, basah, dan licin."], ["Catatan", "Baju ganti dan pelindung untuk HP sangat layak dibawa."], ["Foto", "Kabut air cukup tebal, jadi lap lensa atau handuk kecil akan sangat membantu."]]],
      ["Hari 6", "Sunrise Bromo", "Penutup klasik dengan udara dingin dan kemungkinan debu vulkanik.", ["Sunrise", "Jaket", "Masker atau buff"], [["Sorotan", "Bromo adalah penutup paling ikonik untuk segmen gunung api."], ["Pengingat", "Sebelum matahari terbit bisa berangin, dingin, dan berdebu."], ["Suasana", "Biasanya di titik ini rasa puas perjalanan petualangan mulai terasa penuh."]]],
      ["Hari 7", "Malang → Yogyakarta", "Naik kereta ke Yogyakarta dan jadikan ini hari transisi yang lebih lembut.", ["Kereta", "Istirahat", "Ganti kota"], [["Ritme", "Hari ini pas untuk recovery setelah rangkaian petualangan yang berat."], ["Transportasi", "Sisakan buffer waktu dan buat urusan bagasi tetap ringan."], ["Ide malam", "Kalau masih ada tenaga, jalan santai di Malioboro bisa membantu kenal area lebih dulu."]]],
      ["Hari 8", "Borobudur + Prambanan", "Rencananya hari ini memakai tur privat Klook Dagi Hill + Borobudur + Prambanan supaya hari budaya terasa utuh dalam satu alur.", ["Borobudur", "Prambanan", "Tur privat Klook"], [["Catatan budaya", "Dua candi ini memberi penutup yang jauh lebih dalam daripada sekadar petualangan alam."], ["Setup tur", "Hari ini direncanakan memakai tur privat Klook, jadi lebih halus dibanding memecah transportasi sendiri."], ["Pakaian", "Karena panas dan panjang, pakaian ringan, air minum, dan sun protection penting."]]],
      ["Hari 9", "Hari pulang", "Naik kereta bandara pagi ke YIA dan sisakan buffer minimal 2 jam.", ["Kereta bandara", "Berangkat pagi", "Pulang"], [["Waktu", "Kereta sekitar jam 06.00 tetap pilihan yang paling aman."], ["Pengingat akhir", "Siapkan paspor, tiket, dan bukti pembayaran sejak malam sebelumnya."], ["Cek terakhir", "Sebelum keluar hotel, cek charger, adaptor, dan oleh-oleh sekali lagi."]]]
    ],
    budgetLabels: {
      flight: ["Tiket pesawat", "China Airlines pulang pergi"],
      hotel: ["Hotel", "Seminyak, Malang, Yogyakarta"],
      volcanoDeposit: ["Deposit gunung api", "Tour Ijen / Sewu / Bromo"],
      volcanoBalance: ["Sisa gunung api", "Sisa 80%; total Rp8.160.000 untuk 2 orang, ditampilkan di sini per orang"],
      templeTour: ["Tur candi", "Borobudur + Prambanan"],
      train: ["Kereta", "Malang → Yogyakarta"],
      dailySpend: ["Biaya harian", "Makan, pijat, pengeluaran kecil"]
    },
    visaPoints: [
      ["Opsi wisata 30 hari", "FAQ resmi eVisa Indonesia menunjukkan opsi wisata umum 30 hari, bisa diperpanjang sekali, dengan biaya IDR 500.000."],
      ["Pemegang paspor Taiwan", "Per 2026-04-04, Taiwan tercantum pada daftar paspor yang memenuhi syarat di halaman resmi eVisa / e-VOA Indonesia, sehingga paspor Taiwan bisa memakai e-VOA / VOA."],
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
  lang: localStorage.getItem("bali-java-lang") || "zh-Hant",
  mapQuery: "Seminyak Beach Bali"
};

const dom = {
  overviewStats: document.getElementById("overview-stats"),
  coverPoints: document.getElementById("cover-points"),
  departFlight: document.getElementById("depart-flight"),
  returnFlight: document.getElementById("return-flight"),
  flightHighlights: document.getElementById("flight-highlights"),
  flightNotes: document.getElementById("flight-notes"),
  trainHighlights: document.getElementById("train-highlights"),
  trainOverview: document.getElementById("train-overview"),
  trainPurchase: document.getElementById("train-purchase"),
  trainLinks: document.getElementById("train-links"),
  tourList: document.getElementById("tour-list"),
  stayList: document.getElementById("stay-list"),
  resourceLinks: document.getElementById("resource-links"),
  linksHighlights: document.getElementById("links-highlights"),
  packingNotes: document.getElementById("packing-notes"),
  mapList: document.getElementById("map-list"),
  mapFrame: document.getElementById("map-frame"),
  fullRouteLink: document.getElementById("full-route-link"),
  mapDayRoutes: document.getElementById("map-day-routes"),
  itineraryHighlights: document.getElementById("itinerary-highlights"),
  itineraryList: document.getElementById("itinerary-list"),
  budgetSummaryStrip: document.getElementById("budget-summary-strip"),
  budgetTableBody: document.getElementById("budget-table-body"),
  visaHighlights: document.getElementById("visa-highlights"),
  visaTutorial: document.getElementById("visa-tutorial"),
  visaPoints: document.getElementById("visa-points"),
  arrivalPoints: document.getElementById("arrival-points"),
  pageProgress: document.getElementById("pageProgress")
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
    return `${twd(min)} - ${formatNumber(max)} / ${idr((item.idrRange && item.idrRange[0]) || min * EXCHANGE_RATE)} - ${formatNumber((item.idrRange && item.idrRange[1]) || max * EXCHANGE_RATE)}`;
  }
  return `${twd(item.twd)} / ${idr(item.idr || item.twd * EXCHANGE_RATE)}`;
}

function renderKeyValueRows(items) {
  return `
    <div class="flight-segment-card">
      ${items
        .map(
          ([label, value]) => `
            <div class="info-line">
              <div class="info-line-label">${label}</div>
              <div class="info-line-value">${value}</div>
            </div>
          `
        )
        .join("")}
    </div>
  `;
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

function renderFlightCard(labels, flight) {
  return `
    <div class="flight-summary-copy">${flight.summary}</div>
    <div class="flight-segment-list">
      ${flight.segments
        .map(
          (segment) => `
            <article class="flight-segment-card">
              ${Object.entries(segment)
                .map(
                  ([key, value]) => `
                    <div class="info-line">
                      <div class="info-line-label">${labels[key]}</div>
                      <div class="info-line-value">${value}</div>
                    </div>
                  `
                )
                .join("")}
            </article>
          `
        )
        .join("")}
    </div>
    <div class="flight-subnotes">
      ${flight.notes
        .map((note) => `<div class="flight-subnote">${note}</div>`)
        .join("")}
    </div>
  `;
}

function mapEmbedUrl(query) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

function renderMiniHighlights(items) {
  return items
    .map(
      ([label, value]) => `
        <article class="mini-highlight">
          <div class="mini-highlight-label">${label}</div>
          <div class="mini-highlight-value">${value}</div>
        </article>
      `
    )
    .join("");
}

function renderBulletRows(items, detailClass = "bullet-desc") {
  return items
    .map(
      ([title, desc]) => `
        <div class="bullet-item">
          <div>
            <div class="bullet-title">${title}</div>
            <div class="${detailClass}">${desc}</div>
          </div>
        </div>
      `
    )
    .join("");
}

function renderFlightNotes(items) {
  return items
    .map(
      ([title, desc]) => `
        <article class="flight-note-card">
          <div>
            <div class="flight-note-title">${title}</div>
            <div class="flight-note-desc">${desc}</div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderStayRows(items, linkLabel) {
  return items
    .map(
      ({ dates, area, hotel, localName, stars, image, note, details, url, linkLabel: customLabel, extraLinks = [] }) => `
        <article class="stay-card-rich">
          ${
            image
              ? `<div class="stay-card-image-wrap">
                  <img class="stay-card-image" src="${image}" alt="${hotel}" loading="lazy" />
                </div>`
              : ""
          }
          <div class="stay-card-top">
            <div class="stay-card-head">
              <div class="stay-card-kicker">${area}</div>
              <div class="stay-card-local">${localName}</div>
              <div class="stay-title">${hotel}</div>
            </div>
            <div class="stay-card-meta">
              <div class="stay-meta">${dates}</div>
              <div class="stay-stars">${stars}</div>
            </div>
          </div>
          <div class="stay-card-note">${note}</div>
          <div class="stay-detail-chips">
            ${details.map((detail) => `<span>${detail}</span>`).join("")}
          </div>
          <div class="stay-card-actions">
            <a class="stay-map-link" href="${url}" target="_blank" rel="noreferrer">${customLabel || linkLabel}</a>
            ${extraLinks
              .map(
                ([label, href]) =>
                  `<a class="stay-map-link stay-map-link-secondary" href="${href}" target="_blank" rel="noreferrer">${label}</a>`
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderMapLocations(items, activeQuery) {
  return items
    .map(
      ([title, query, note]) => `
        <button class="map-location-button ${activeQuery === query ? "active" : ""}" type="button" data-query="${query}">
          <span class="map-location-title">${title}</span>
          <span class="map-location-note">${note}</span>
        </button>
      `
    )
    .join("");
}

function renderMapDayRoutes(items) {
  return items
    .map(
      ([title, note, url]) => `
        <a class="map-day-route-link" href="${url}" target="_blank" rel="noreferrer">
          <span class="map-day-route-title">${title}</span>
          <span class="map-day-route-note">${note}</span>
        </a>
      `
    )
    .join("");
}

function renderTimeline(days, focusLabel) {
  return days
    .map(
      ([day, title, desc, tags, details]) => `
        <article class="day-card">
          <div class="day-header">
            <div class="day-index">${day}</div>
            <div class="day-title">${title}</div>
            <div class="day-summary">${desc}</div>
          </div>
          <div class="day-content-top">
            <div class="day-focus-label">${focusLabel}</div>
            <div class="day-focus-text">${desc}</div>
          </div>
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
        </article>
      `
    )
    .join("");
}

function renderLanguage() {
  const copy = content[state.lang];
  const flights = copy.flightData;

  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = copy[node.dataset.i18n];
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });

  dom.overviewStats.innerHTML = copy.overviewStats
    .map(
      ([label, value]) => `
        <article class="overview-stat">
          <div class="overview-stat-label">${label}</div>
          <div class="overview-stat-value">${value}</div>
        </article>
      `
    )
    .join("");

  dom.coverPoints.innerHTML = copy.coverPoints
    .map(
      ([title, desc]) => `
        <article class="cover-point">
          <div class="cover-point-title">${title}</div>
          <div class="cover-point-desc">${desc}</div>
        </article>
      `
    )
    .join("");

  dom.departFlight.innerHTML = renderFlightCard(copy.flightSegmentLabels, flights.depart);
  dom.returnFlight.innerHTML = renderFlightCard(copy.flightSegmentLabels, flights.return);
  dom.flightHighlights.innerHTML = renderMiniHighlights(copy.flightHighlights);
  dom.flightNotes.innerHTML = renderFlightNotes(copy.flightNotes);

  dom.trainHighlights.innerHTML = renderMiniHighlights(copy.trainHighlights);
  dom.trainOverview.innerHTML = `
    <div class="flight-summary-copy">${copy.trainSummary}</div>
    ${renderKeyValueRows(copy.trainFacts)}
    <div class="flight-subnotes">
      ${copy.trainNotes.map((note) => `<div class="flight-subnote">${note}</div>`).join("")}
    </div>
  `;
  dom.trainPurchase.innerHTML = renderFlightNotes(copy.trainBuySteps);
  dom.trainLinks.innerHTML = copy.trainLinks
    .map(([
      label,
      url
    ]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`)
    .join("");

  dom.tourList.innerHTML = renderStayRows(copy.toursList, copy.tourLinkLabel);

  dom.stayList.innerHTML = renderStayRows(copy.stays, copy.stayMapLabel);

  dom.resourceLinks.innerHTML = copy.resourceLinks
    .map(
      ([title, desc, url]) => `
        <article class="resource-card">
          <div>
            <div class="resource-card-title">${title}</div>
            <div class="resource-card-desc">${desc}</div>
          </div>
          <a href="${url}" target="_blank" rel="noreferrer">Open</a>
        </article>
      `
    )
    .join("");
  dom.linksHighlights.innerHTML = renderMiniHighlights(copy.linksHighlights);

  dom.packingNotes.innerHTML = renderBulletRows(copy.packingNotes, "note-desc");

  if (!copy.mapLocations.some(([, query]) => query === state.mapQuery)) {
    state.mapQuery = copy.mapLocations[0][1];
  }

  dom.mapList.innerHTML = renderMapLocations(copy.mapLocations, state.mapQuery);
  dom.mapFrame.src = mapEmbedUrl(state.mapQuery);
  dom.fullRouteLink.href = MAP_ROUTE_URL;
  dom.mapDayRoutes.innerHTML = renderMapDayRoutes(copy.mapDayRoutes);
  document.querySelectorAll(".map-location-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.mapQuery = button.dataset.query;
      renderLanguage();
    });
  });

  dom.itineraryHighlights.innerHTML = renderMiniHighlights(copy.itineraryHighlights);
  dom.itineraryList.innerHTML = renderTimeline(copy.itinerary, copy.dayFocusLabel);

  const paid = sumRange(BUDGET.paid);
  const open = sumRange(BUDGET.open);
  const totalMin = paid.min + open.min;
  const totalMax = paid.max + open.max;
  const avgMin = Math.round(totalMin / TRIP_DAYS);
  const avgMax = Math.round(totalMax / TRIP_DAYS);
  dom.budgetSummaryStrip.innerHTML = `
    <article class="budget-summary-card">
      <div class="budget-summary-label">${copy.paidTitle}</div>
      <div class="budget-summary-value">${twd(paid.min)} / ${idr(paid.min * EXCHANGE_RATE)}</div>
    </article>
    <article class="budget-summary-card">
      <div class="budget-summary-label">${copy.totalBudgetLabel}</div>
      <div class="budget-summary-value">${twd(totalMin)} - ${formatNumber(totalMax)}</div>
    </article>
    <article class="budget-summary-card">
      <div class="budget-summary-label">${copy.dailyAverageLabel}</div>
      <div class="budget-summary-value">${twd(avgMin)} - ${formatNumber(avgMax)}</div>
    </article>
  `;
  const budgetRows = [
    ...BUDGET.paid.map((item) => ({ ...item, status: "paid" })),
    ...BUDGET.open.map((item) => ({ ...item, status: "open" }))
  ];
  dom.budgetTableBody.innerHTML = budgetRows
    .map((item) => {
      const [title, desc] = copy.budgetLabels[item.key];
      const statusText = item.status === "paid" ? copy.budgetStatusPaid : copy.budgetStatusOpen;
      return `
        <tr>
          <td data-label="${copy.budgetTableStatus}"><span class="budget-status ${item.status}">${statusText}</span></td>
          <td data-label="${copy.budgetTableItem}"><div class="budget-item-title">${title}</div></td>
          <td data-label="${copy.budgetTableDetail}"><div class="budget-item-desc">${desc}</div></td>
          <td data-label="${copy.budgetTableAmount}"><div class="budget-amount">${formatBudget(item)}</div></td>
        </tr>
      `;
    })
    .join("");

  dom.visaHighlights.innerHTML = renderMiniHighlights(copy.visaHighlights);
  dom.visaTutorial.innerHTML = renderFlightNotes(copy.visaTutorial);
  dom.visaPoints.innerHTML = renderBulletRows(copy.visaPoints);
  dom.arrivalPoints.innerHTML = renderBulletRows(copy.arrivalPoints);
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
      button.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

window.addEventListener("scroll", () => {
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  dom.pageProgress.style.width = `${scrolled}%`;
});

bindLanguageButtons();
bindNav();
renderLanguage();
