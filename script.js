const EXCHANGE_RATE = 531;
const TRIP_DAYS = 9;

const IMAGE_DIMENSIONS = {
  "./assets/stays/seminyak-resort.jpg": [1600, 1000],
  "./assets/stays/luminor-bwi.jpeg": [1280, 960],
  "./assets/stays/doho-homestay.jpg": [700, 467],
  "./assets/stays/joglo-kecombrang.jpg": [1024, 683],
  "./assets/stays/shalimar-front.jpg": [1600, 1066],
  "./assets/stays/aveta-suite1.jpg": [1600, 1067],
  "./assets/tours/jvto-volcano-tour.jpg": [1200, 675],
  "./assets/tours/klook-borobudur-prambanan.webp": [1200, 1600]
};

const PRIMARY_NAV_TARGETS = new Set(["overview", "itinerary", "map", "stay"]);

const BUDGET = {
  paid: [
    { key: "flight", twd: 20494 },
    { key: "hotel", twd: 9202 },
    { key: "volcanoDeposit", twd: 3994 },
    { key: "volcanoBalance", twd: 14838, idr: 8433700 }
  ],
  open: [
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

const PLACE_MAPS = {
  seminyakBeach: "https://www.google.com/maps/search/?api=1&query=Seminyak+Beach+Bali",
  potatoHead: "https://www.google.com/maps/search/?api=1&query=Potato+Head+Beach+Club+Bali",
  fleaMarket: "https://www.google.com/maps/search/?api=1&query=The+Flea+Market+Seminyak",
  kayuAya: "https://www.google.com/maps/search/?api=1&query=Jalan+Kayu+Aya+Seminyak",
  ssamayaSpa: "https://www.google.com/maps/search/?api=1&query=Ssamaya+Balinese+Spa+Seminyak"
};

const MAP_ROUTE_URL =
  "https://www.google.com/maps/dir/Seminyak+Beach+Bali/Courtyard+by+Marriott+Bali+Seminyak+Resort/Ijen+Crater/Tumpak+Sewu+Waterfall/Mount+Bromo/The+Shalimar+Boutique+Hotel+Malang/Aveta+Hotel+Malioboro+Yogyakarta/Yogyakarta+International+Airport";

const DAY_ROUTE_URLS = {
  day1: "https://www.google.com/maps/dir/Ngurah+Rai+International+Airport/Courtyard+by+Marriott+Bali+Seminyak+Resort/Seminyak+Beach+Bali/Potato+Head+Beach+Club+Bali/The+Flea+Market+Seminyak/Ssamaya+Balinese+Spa+Seminyak/Courtyard+by+Marriott+Bali+Seminyak+Resort",
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
    heroKicker: "印尼旅程筆記",
    heroTitle: "Bali × Java",
    heroSubtitle: "先在峇里島海邊兩天，再去東爪哇看火山和瀑布，最後到日惹看神廟",
    heroDates: "2026 / 06 / 13 - 2026 / 06 / 21",
    heroDestinations: "水明漾 • 伊真火山 • Tumpak Sewu • 婆羅摩火山 • 瑪琅 • 日惹",
    heroIntro:
      "九天八夜。前兩天住水明漾，第三天跟團過海到東爪哇，連三天凌晨出發看伊真火山、Tumpak Sewu 瀑布和婆羅摩火山，再搭火車到日惹看婆羅浮屠和普蘭巴南。",
    heroSignals: ["海邊兩天", "火山健行", "凌晨出發", "長途轉場", "保暖外套必帶"],
    heroFacts: [
      ["旅程天數", "9天8夜"],
      ["主題節奏", "海島 × 火山 × 文化"],
      ["關鍵提醒", "早起、保暖、補水"]
    ],
    heroPrimaryCta: "先看每日行程",
    heroSecondaryCta: "看行前資訊",
    footerCopy: "2026 年 6 月峇里島、爪哇旅行手冊。",
    navOverview: "總覽",
    navFlights: "航班",
    navTrain: "火車",
    navTours: "包套團",
    navStay: "住宿",
    navLinks: "連結",
    navInfo: "資訊",
    navItinerary: "行程",
    navMap: "地圖",
    navBudget: "預算",
    navVisa: "簽證",
    navMore: "更多",
    navMoreTitle: "更多旅程資訊",
    languageLabel: "顯示語言",
    travelModeLabel: "旅途速查",
    travelModeTitle: "今天先看這裡",
    travelModeLead: "選今天是第幾天，就會列出起床、出發、集合和睡覺時間，還有當天要確認的事。",
    travelDayLabel: "選擇日期",
    travelOpenDay: "打開完整當日指南",
    travelOpenMap: "查看今日地圖",
    travelOpenStay: "查看住宿",
    travelOpenInfo: "查看行前資訊",
    travelOfflineNote: "第一次連網開啟後，主要手冊內容可離線閱讀；Google Maps 與外部網站仍需網路。",
    travelAlertLabel: "出發前要確認",
    travelAlertText: "6/18 JVTO 公開行程寫 Surabaya，但 Day 6 住宿與 Day 7 火車目前以 Malang 規劃。請先確認最終下車點，再核對車站與火車票。",
    dayJumpLabel: "快速切換",
    dayExpandLabel: "展開完整指南",
    dayCollapseLabel: "收起完整指南",
    overviewLabel: "旅程總覽",
    overviewTitle: "峇里島兩天、東爪哇火山四天、日惹三天",
    overviewLead:
      "前段在峇里島休息，中段是火山和瀑布，最累；最後在日惹看神廟。",
    snapshotLabel: "旅程摘要",
    snapshotTitle: "體力、裝備和移動",
    snapshotLead:
      "這趟有三天要凌晨出發，兩段長途移動，還有火山健行，先看清楚哪幾天比較累。",
    snapshotChips: ["Bali + Java", "3 個清晨火山 / 瀑布日", "2 段長距離轉場", "抓地鞋與保暖外套必帶", "腸胃敏感者保留彈性"],
    snapshotCards: [
      {
        label: "主要地點",
        value: "Bali / East Java / Yogyakarta",
        note: "路線：Seminyak、Ijen、Tumpak Sewu、Bromo、Malang、Yogyakarta。"
      },
      {
        label: "旅行主題",
        value: "海島、火山、日出、文化",
        note: "前段休息，中段火山，最後神廟。"
      },
      {
        label: "體力節奏",
        value: "普通到偏累",
        note: "Day 4 到 Day 6 是強度最高的連續段，尤其凌晨出發的火山與瀑布日最吃體力。"
      },
      {
        label: "早起程度",
        value: "3 個凌晨／清晨日",
        note: "Ijen、Tumpak Sewu、Bromo 都要提早起床，前一晚早睡比硬撐重要。"
      },
      {
        label: "主要交通",
        value: "飛機、包車、渡輪、Jeep、火車",
        note: "移動的時間很長，要算進行程裡。"
      },
      {
        label: "住宿節奏",
        value: "海邊度假村 → 火山區民宿 → 市區飯店",
        note: "火山段的住宿由旅行團安排。"
      },
      {
        label: "必備裝備",
        value: "抓地鞋、保暖層、雨水防護",
        note: "火山和瀑布那幾天要穿抓地的鞋，帶外套和防水裝備。"
      },
      {
        label: "特別留意",
        value: "補水、腸胃、曬傷、山區低溫",
        note: "火山日前一晚吃清爽一點，長途移動日多補水，峇里島白天日照也很強。"
      }
    ],
    highlightsLabel: "旅程亮點",
    highlightsTitle: "主要行程",
    highlightsLead:
      "照日期排的六段。",
    journeyHighlights: [
      {
        kicker: "06/13 - 06/14｜Bali",
        title: "水明漾兩天",
        desc: "睡飽、去海邊、按摩，不排遠的景點，體力留給後面的火山。",
        tags: ["海島日", "度假節奏", "Seminyak"]
      },
      {
        kicker: "06/15｜跨島轉場",
        title: "從海邊一路切進火山線",
        desc: "上午從峇里島出發，搭車和渡輪到東爪哇，下午做伊真的健康檢查。",
        tags: ["長途移動", "跟團接送", "過海到爪哇"]
      },
      {
        kicker: "06/16｜Ijen",
        title: "半夜上伊真火山看藍火",
        desc: "凌晨兩點開始爬，天亮前看藍火，天亮後看火山湖。會冷，有硫磺味。",
        tags: ["凌晨出發", "藍火", "火山健行"]
      },
      {
        kicker: "06/17 - 06/18｜Sewu + Bromo",
        title: "Tumpak Sewu 瀑布和婆羅摩日出",
        desc: "一天下到瀑布谷底，隔天凌晨搭 Jeep 上婆羅摩看日出。這兩天最累。",
        tags: ["偏累", "瀑布日", "日出高原"]
      },
      {
        kicker: "06/19｜火車轉場",
        title: "搭火車到日惹",
        desc: "火山段結束，搭 Argo Semeru 到日惹，在車上休息。",
        tags: ["恢復日", "火車包廂", "到日惹"]
      },
      {
        kicker: "06/20 - 06/21｜Yogyakarta",
        title: "婆羅浮屠和普蘭巴南",
        desc: "跟 Klook 一日團看兩座神廟，隔天清晨去機場。",
        tags: ["文化日", "神廟", "安靜收尾"]
      }
    ],
    previewLabel: "每日預覽",
    previewTitle: "每日故事卡",
    previewLead:
      "每天去哪裡、累不累，點進去看詳細時間。",
    practicalLabel: "實用資訊",
    practicalTitle: "實用資訊",
    practicalLead:
      "航班、住宿、火山健行、穿搭、補給和腸胃的提醒。",
    practicalSections: [
      {
        title: "航班與接送",
        intro: "去程直飛，回程要轉機。",
        chips: ["華航直飛去程", "回程兩段式", "提早到機場"],
        items: [
          ["去程", "台北直飛峇里島，下午抵達，直接去飯店、吃晚餐。"],
          ["回程重點", "YIA 到雅加達是接續段，真正的國際長程段是雅加達回台北。"],
          ["接送習慣", "抵達日、跨島日和回程日都建議把飯店地址、接送點和付款憑證放在同一個手機資料夾。"]
        ]
      },
      {
        title: "城市間移動",
        intro: "這趟有兩段長途移動。",
        chips: ["包車", "渡輪", "Jeep", "火車"],
        items: [
          ["火山順序", "順序是 Ijen → Tumpak Sewu → Bromo。"],
          ["長途車程", "長途車程那天不要另外排行程。"],
          ["回程緩衝", "YIA 機場鐵路建議抓 06:00 左右的穩定班次，並至少提早 2 小時到機場。"]
        ]
      },
      {
        title: "今晚落腳",
        intro: "前段住度假村，火山段住旅行團安排的民宿，後段住市區飯店。",
        chips: ["Seminyak", "火山段", "Malang", "Yogyakarta"],
        items: [
          ["Bali 前段", "Seminyak 住度假村，有泳池，走路到海邊。"],
          ["火山段住宿", "這幾晚住得簡單，都是凌晨出發前睡幾個小時。"],
          ["城市段", "Malang 和 Yogyakarta 住市區，方便休息和搭車。"]
        ]
      },
      {
        title: "火山健行提醒",
        intro: "前一晚先把裝備準備好。",
        chips: ["凌晨出發", "保暖", "抓地鞋", "補水"],
        items: [
          ["出發前確認", "外套、水、行動電源、現金、口罩與手機電量，前一晚先整包放好。"],
          ["體感溫度", "Ijen 與 Bromo 的清晨會冷，建議採洋蔥式穿搭，比只帶一件厚外套更靈活。"],
          ["腳下條件", "路面可能有碎石、灰塵、坡度或濕滑路段，鞋底抓地力比造型重要。"]
        ]
      },
      {
        title: "穿搭與隨身裝備",
        intro: "四種日子的穿法。",
        chips: ["海島日", "城市日", "火山日", "長途移動日"],
        items: [
          ["海島日", "透氣衣物、防曬、墨鏡與涼鞋或好走的拖鞋最實用。"],
          ["城市日", "好走鞋、輕便衣物，加一件薄外套。"],
          ["火山日", "保暖外套、長褲、抓地力好的鞋、防風層、口罩、雨具。"],
          ["長途移動日", "舒服的衣物、薄外套、腸胃藥、零食。"]
        ]
      },
      {
        title: "餐食與補給",
        intro: "火山日前後吃清淡一點。",
        chips: ["補水", "簡單零食", "清爽飲食"],
        items: [
          ["火山日前一晚", "不要吃太油、太辣。"],
          ["長途移動日", "水、電解質飲料或小零食放在最容易拿的位置，車上會很需要。"],
          ["腸胃敏感者", "不用每餐都跟大家吃一樣的。"]
        ]
      },
      {
        title: "付款與網路",
        intro: "正式店家以刷卡或電子支付為主，現金留給小吃、臨時交通和零用。",
        chips: ["Gojek", "eSIM", "少量現金"],
        items: [
          ["網路", "eSIM 建議在台灣先裝好，落地後直接能上網最省時間。"],
          ["叫車", "Gojek 很實用，也可以現場比價 Grab；峇里島部分區域仍可能限制線上叫車。"],
          ["現金策略", "不用一開始就換太多現金，先準備夠用的小額會比較彈性。"]
        ]
      },
      {
        title: "安全與健康提醒",
        intro: "幾件要注意的事。",
        chips: ["Bali Belly", "防曬", "塞車", "保留彈性"],
        items: [
          ["補水與腸胃", "喝瓶裝水；冰塊、生食、半熟海鮮盡量不碰。"],
          ["塞車", "峇里島塞車真的很常見，車程比地圖久很多是正常的，所以留緩衝很重要。"],
          ["累的時候", "哪天真的累了就少去一個點。"]
        ]
      }
    ],
    previewCta: "查看當日指南",
    dayGuideTimingLabel: "關鍵時間",
    dayGuideAtGlanceLabel: "今日概覽",
    dayGuideFlowLabel: "今日路線",
    dayGuideDetailLabel: "時間與節奏",
    dayGuideReminderLabel: "特別提醒",
    dayGuideLinksLabel: "相關連結",
    dayStatuses: [
      "建議安排｜依體力微調",
      "彈性安排",
      "接送已訂｜細節待通知",
      "JVTO 包套｜依導遊通知",
      "JVTO 包套｜依導遊通知",
      "JVTO 包套｜下車點待確認",
      "火車日｜依票券核對",
      "Klook 行程｜接送待通知",
      "航班日｜依電子機票核對"
    ],
    coverLabel: "旅程敘事",
    coverTitle: "行程怎麼排",
    coverLead:
      "前兩天在水明漾休息，接著三天凌晨出發看火山和瀑布，最後到日惹看神廟、逛市區。",
    coverPoints: [
      ["前段", "Seminyak 這兩天不排滿，吃好睡好。"],
      ["中段", "Ijen、Sewu、Bromo 連三天，每天都要凌晨起床。"],
      ["後段", "到日惹後不用再凌晨起床，一天看神廟，其餘在市區。"]
    ],
    volcanoCaption: "Bromo 晨光",
    volcanoCredit: "Photo by Arya Krisdyantara / Unsplash",
    beachCaption: "Bali 海色",
    beachCredit: "Photo by Santhosh Mocharla / Unsplash",
    routeLabel: "航班與路線",
    routeTitle: "航班與移動路線",
    routeLead: "班機、行李和主要的移動路段，出發前和回程前核對一次。",
    departTag: "去程",
    departTitle: "台北飛峇里島",
    returnTag: "回程",
    returnTitle: "日惹經雅加達回台北",
    tripFlowLabel: "旅程動線",
    tripFlowValue: "台北 → 峇里島 → 伊真 → Sewu → 婆羅摩 → 瑪琅 → 日惹",
    flightHighlights: [
      ["去程結構", "CI771 直飛 DPS，華航主飛"],
      ["回程結構", "CI9761 聯營段 + CI762 華航回台"],
      ["行李重點", "去程 23kg ×2，回程 23kg ×1"]
    ],
    flightNotes: [
      ["出發提醒", "國際線還是建議提早到機場，護照、電子機票和付款憑證前一晚先整理好最省事。"],
      ["轉機說明", "真正的國際回程段是 CI762；YIA → CGK 是前段接駁，實際承運仍以票面和現場資訊為準。"],
      ["沒放的資訊", "這頁沒有放訂位代碼。"]
    ],
    trainLabel: "鐵道路線",
    trainTitle: "火車移動",
    trainLead:
      "Day 7 搭 Argo Semeru 到日惹。這裡是艙等和買票方式。",
    trainHighlights: [
      ["列車定位", "Day 7 搭車兼休息"],
      ["最高等級", "Compartment Suites 為 16 個獨立個人間"],
      ["價格區間", "約 Rp2,050,000 - Rp2,250,000"]
    ],
    trainCoverCaption: "Argo Semeru 列車外觀",
    trainCoverCredit: "Photo via Journey.tw",
    trainSuiteCaption: "Compartment Suites 個人間",
    trainSuiteCredit: "Photo via Journey.tw",
    trainSummary:
      "Argo Semeru 最高等級的艙位是 Compartment Suites。根據 Journey.tw 的整理：16 間獨立包廂、1-1 配置，座椅可旋轉，接近平躺。",
    trainFacts: [
      ["建議路線", "Malang / Surabaya 端銜接 → Yogyakarta"],
      ["最高等級", "Compartment Suites"],
      ["空間結構", "16 個獨立包廂、1 人 1 間"],
      ["座椅特色", "可旋轉、可躺平、私密性較高"],
      ["參考票價", "約 Rp2,050,000 - Rp2,250,000"]
    ],
    trainNotes: [
      "火山段之後可以在車上補眠。",
      "想躺著休息就選最高等級艙位。",
      "票價和艙等仍可能調整，接近出發日再查一次最準。"
    ],
    trainBuyTitle: "如何買票",
    trainBuyLead: "訂票步驟。",
    trainBuySteps: [
      ["步驟一", "先確認 Day 7 想搭的路段與出發站，通常會以東爪哇端銜接到日惹方向為主。"],
      ["步驟二", "找 Argo Semeru，艙等直接看最高等級 Compartment Suites。它不是一般大座位，而是個人包廂型艙位。"],
      ["步驟三", "Journey.tw 文中提到可透過 tiket.com 預訂，也可在車站透過自助取票機處理。"],
      ["步驟四", "最高等級艙位只有 16 間，要提早訂。"]
    ],
    trainLinks: [
      ["Journey.tw 鐵道文章", "https://journey.tw/ka-argo-semeru/"],
      ["tiket.com 火車訂票", "https://www.tiket.com/kereta-api"]
    ],
    toursLabel: "包套行程",
    toursTitle: "已訂與待訂行程",
    toursLead: "這趟訂的兩個團，內容、費用和連結都在這裡。",
    tourLinkLabel: "看行程內容",
    toursList: [
      {
        dates: "4D3N",
        area: "已訂火山團",
        hotel: "Ijen • Papuma • Tumpak Sewu • Bromo",
        localName: "Java Volcano Tour Operator",
        stars: "火山冒險",
        image: "./assets/tours/jvto-volcano-tour.jpg",
        note: "整趟最累的一段：藍火、瀑布、火山日出連三天，住宿簡單。",
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
        hotel: "Borobudur（登塔＋導覽）＋ Prambanan",
        localName: "Klook 婆羅浮屠與普蘭巴南寺廟之旅",
        stars: "文化日",
        image: "./assets/tours/klook-borobudur-prambanan.webp",
        note: "Day 8 參加的是這一團：婆羅浮屠登塔加導覽，再去普蘭巴南。",
        details: [
          "婆羅浮屠登塔＋導覽",
          "普蘭巴南寺廟行程",
          "排在 Day 8"
        ],
        url: "https://s.klook.com/c/4yVrZ02036",
        linkLabel: "Klook 頁面",
        extraLinks: []
      }
    ],
    stayLabel: "住宿安排",
    stayTitle: "住宿安排",
    stayLead: "四段住宿，每間都附 Google Maps 連結。",
    stayMapLabel: "Google Maps",
    stayTourLabel: "Tour 頁面",
    linksLabel: "常用連結",
    linksTitle: "常用連結整理",
    linksLead: "常用的網站。",
    resourceLinkCta: "前往查看",
    linksHighlights: [
      ["住宿", "三段住宿的官方網站與地圖"],
      ["交通", "火山 tour、火車與機場鐵路"],
      ["入境", "eVisa、Love Bali 與 All Indonesia"]
    ],
    infoLabel: "實用資訊",
    infoTitle: "印尼實用資訊",
    infoLead: "行前準備和當地注意事項。",
    infoPanelOneTitle: "出發前先知道的事",
    infoPanelTwoTitle: "旅途中會用到的提醒",
    infoCostsLabel: "花費筆記",
    infoCostsTitle: "目前已知花費與費用紀錄",
    infoCostsLead: "目前記下來的金額。餐飲、計程車和購物還沒補。",
    infoHighlights: [
      ["行前順序", "共用文件 → eVisa → Bali 稅 → All Indonesia"],
      ["付款習慣", "正式店家可優先刷卡，現金不用先換太多"],
      ["交通 App", "Gojek 很實用，也可以現場順手比價 Grab"],
      ["時區重點", "峇里島和台灣同時區，雅加達與日惹慢 1 小時"]
    ],
    infoChecklist: [
      ["步驟一", "先把護照、機票、住宿、簽證與 QR code 集中到雲端共用文件，出發前比較不會手忙腳亂。"],
      ["步驟二", "先申請印尼 eVisa / e-VOA，官方費用為 Rp500,000，通常可停留 30 天、有效 90 天，並可延長一次。"],
      ["步驟三", "再到 Love Bali 繳峇里島旅遊稅 Rp150,000；不論直飛或轉機進峇里島，都是每次入境都要繳。"],
      ["步驟四", "抵達前 3 日內填寫 All Indonesia，這個系統會把移民、海關與健康檢疫申報整合在一起。"],
      ["步驟五", "確認吹風機或高功率電器是否支援 220V / 50Hz，eSIM 也建議在台灣先裝好。"],
      ["步驟六", "若搭韓籍航空，行動電源需標示 Wh，並放夾鏈袋或做好電極絕緣。"]
    ],
    infoBasics: [
      ["雲端共用文件", "所有護照、機票、住宿與行程資料都可以統一放在 SharePoint 資料夾，手機和電腦都比較好找。"],
      ["電子簽證", "實測送出申請後，大約 1 分鐘內就會收到核准文件寄到 Email，但還是建議提早處理，不要壓線。"],
      ["eSIM 與網路", "目前規劃在蝦皮先買 eSIM，落地就能直接上網，省去現場找門市的時間。"],
      ["匯率速記", "這份規劃先用 1,000 印尼盾約 NT$1.87 粗估；心算可先去掉最後三個 0，再乘以 2，或直接除以 500 到 530。"],
      ["換匯", "若要在當地換匯，可優先找合法連鎖體系，例如常被提到的 PT Valasindo Valuta（PVG），比路邊小店安心。"],
      ["現金策略", "參考過往旅行經驗，這趟現金先換少量即可，小吃、攤販或臨時交通再用現金補。"],
      ["常用 App", "Gojek 可用台灣手機號碼註冊，叫車、外送、GoPay 儲值都很好用；便利商店或司機也能幫忙儲值。"],
      ["時差", "WIB 比台灣慢 1 小時、WITA 與台灣相同、WIT 比台灣快 1 小時。峇里島在 WITA，雅加達與日惹在 WIB。"],
      ["小費文化", "印尼普遍沒有一定要給小費的文化，服務特別好再自行表示就可以。"]
    ],
    infoTips: [
      ["Bali Belly", "避免喝生水，也盡量用瓶裝水刷牙、洗水果；冰塊、生食與半熟海鮮都保守一點。"],
      ["No Online Taxi", "峇里島部分區域仍會限制線上叫車，可改搭 Bluebird 計程車，或步行到可上車區再叫 Gojek / Grab。"],
      ["交通塞車", "峇里島塞車很常見，25 分鐘車程有可能開到 45 分鐘，45 分鐘也可能拖到 2 小時。"],
      ["婆羅浮屠", "Borobudur 每週一休館，購票時也要分清楚是否包含登塔；建議買能登塔的票。"],
      ["火山與瀑布裝備", "火山段記得帶保暖外套、口罩、護目鏡與防沙包包；瀑布段則要準備短褲、朔溪鞋、防水外套和替換衣物。"],
      ["服飾尺寸", "如果打算買當地服飾，版型常會比台灣小 1 到 2 個尺寸，試穿時可以先往大一號拿。"],
      ["支付方式", "目前整理可用的有實體信用卡、Line Pay、PX Pay、台灣 Pay 與 Apple Pay，但仍建議備少量現金。"]
    ],
    infoCosts: [
      ["機票", "NT$20,494，華航往返。"],
      ["住宿", "每人約 NT$9,202，尚未把稅金完全補進去。"],
      ["簽證與旅遊稅", "簽證 NT$941 + 峇里島旅遊稅 NT$280，共 NT$1,221。"],
      ["eSIM", "NT$469。"],
      ["KAI 個人隔間火車", "Rp2,614,500，文件換算約 NT$4,738 / 2 人，也就是每人約 NT$2,369；已支付，結算請依私人對帳紀錄。"],
      ["日惹神廟一日遊", "NT$2,610 / 2 人，約每人 NT$1,305；已支付，結算請依私人對帳紀錄。"],
      ["火山 4 日團", "訂金約 NT$3,994；2026/05/30 已付剩餘 80% 尾款 Rp8,433,700，約 NT$14,838；結算請依私人對帳紀錄。"],
      ["仍待補項目", "計程車、吃飯、伴手禮、零食、服飾、換匯、機捷停車場。"]
    ],
    transportTitle: "移動節奏",
    packingTitle: "穿著與隨身準備",
    itineraryLabel: "每日行程",
    itineraryTitle: "每日行程",
    itineraryLead: "每天幾點起床、幾點出發、去哪裡。",
    itineraryHighlights: [
      ["順序", "峇里島 → 東爪哇火山和瀑布 → 日惹"],
      ["重點", "Ijen 藍火、Tumpak Sewu 谷底、Bromo 日出"],
      ["閱讀方式", "先看起床和集合時間，再看當天行程和提醒"]
    ],
    dayFocusLabel: "今日旅程",
    budgetLabel: "花費整理",
    budgetTitle: "花費整理",
    budgetLead: "以下以 NT$1 ≈ Rp531 粗估，主要拿來抓這趟旅程的大方向，不代表即時匯率。",
    paidTitle: "已支付",
    openTitle: "尚未支付",
    totalBudgetLabel: "總預算",
    budgetRateNote: "匯率參考：NT$1 ≈ Rp531",
    dailyAverageLabel: "日均預算",
    budgetStyleNote: "自由行加兩個當地團，住宿中上",
    budgetTableStatus: "狀態",
    budgetTableItem: "項目",
    budgetTableDetail: "說明",
    budgetTableAmount: "金額",
    budgetStatusPaid: "已支付",
    budgetStatusOpen: "未支付",
    mapLabel: "旅行地圖",
    mapTitle: "旅程地圖",
    mapLead: "住宿、景點和機場的位置。",
    mapRouteLink: "看整段路線",
    mapDayLabel: "每日動線",
    mapDayRoutes: [
      ["第 1 天", "抵達水明漾", DAY_ROUTE_URLS.day1],
      ["第 2 天", "Seminyak 自由活動", DAY_ROUTE_URLS.day2],
      ["第 3 天", "離開海邊，進入火山線", DAY_ROUTE_URLS.day3],
      ["第 4 天", "Ijen 藍火和火山湖", DAY_ROUTE_URLS.day4],
      ["第 5 天", "走進 Tumpak Sewu 谷底", DAY_ROUTE_URLS.day5],
      ["第 6 天", "Bromo 日出", DAY_ROUTE_URLS.day6],
      ["第 7 天", "從火山回到城市", DAY_ROUTE_URLS.day7],
      ["第 8 天", "婆羅浮屠和普蘭巴南", DAY_ROUTE_URLS.day8],
      ["第 9 天", "回台灣", DAY_ROUTE_URLS.day9]
    ],
    visaLabel: "入境準備",
    visaTitle: "簽證與入境",
    visaLead: "入境前要辦的事，照順序做，憑證都存在手機裡。",
    visaPanelTitle: "簽證這一段",
    arrivalPanelTitle: "抵達峇里島前後",
    visaLinkOne: "印尼官方 eVisa",
    visaLinkTwo: "Love Bali 官方網站",
    visaLinkThree: "All Indonesia 入境整合系統",
    visaHighlights: [
      ["第一步", "先辦 eVisa / e-VOA"],
      ["第二步", "再付 Bali 旅遊稅 Rp150,000"],
      ["第三步", "抵達前 3 日內填 All Indonesia"],
      ["最後", "把 QR code、護照和回程機票放在一起"]
    ],
    visaTutorial: [
      ["步驟一", "截至 2026/04/04，印尼官方 eVisa / e-VOA 說明頁的適用護照名單已列出台灣，可先走 e-VOA / VOA 路線，再建立申請資料。"],
      ["步驟二", "準備護照、離境機票、住宿資訊與信用卡。護照效期至少要有 6 個月。"],
      ["步驟三", "完成付款後，把 eVisa 或 e-VOA 憑證存到手機，也建議另外截圖一份；實測核准信很快，但還是不要拖到最後一天。"],
      ["步驟四", "再到 Love Bali 官方網站繳 Bali 旅遊稅 Rp150,000，完成後同樣保存 QR code。"],
      ["步驟五", "抵達前 3 日內再到 All Indonesia 完成移民、海關與健康檢疫整合申報。"],
      ["步驟六", "出發前一天把護照、簽證憑證、Love Bali QR code、All Indonesia 資料與回程機票放在同一個手機資料夾。"]
    ],
    resourceLinks: [
      ["Seminyak 飯店", "Courtyard by Marriott Bali Seminyak Resort 官方網站", "https://www.marriott.com/en-us/hotels/dpssm-courtyard-bali-seminyak-resort/"],
      ["Malang 飯店", "The Shalimar Boutique Hotel 官方網站", "https://theshalimarhotel.co.id/"],
      ["日惹飯店", "Aveta Hotel Malioboro 官方網站", "https://avetahotelmalioboro.com/"],
      ["火山 tour", "Java Volcano Tour Operator 官方頁面", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
      ["婆羅浮屠行程", "Klook 婆羅浮屠（登塔＋導覽）和普蘭巴南寺廟之旅", "https://s.klook.com/c/4yVrZ02036"],
      ["Argo Semeru 介紹", "Journey.tw 的火車艙位文章", "https://journey.tw/ka-argo-semeru/"],
      ["機場鐵路", "YIA Airport Rail Link 官方訂票頁", "https://reservation.railink.co.id/"],
      ["印尼 eVisa", "印尼官方簽證申請入口", "https://evisa.imigrasi.go.id/"],
      ["Love Bali", "峇里島旅遊稅官方網站", "https://lovebali.baliprov.go.id/"],
      ["All Indonesia", "印尼官方入境整合系統", "https://allindonesia.imigrasi.go.id/"]
    ],
    overviewStats: [
      ["旅程天數", "9天8夜", "前段 Bali，中段火山，後段日惹。"],
      ["主要區域", "Seminyak / East Java / Yogyakarta", "海邊、火山、瀑布、神廟。"],
      ["體力節奏", "2 天輕鬆、3 天偏累、1 天恢復", "最硬的是 Ijen、Tumpak Sewu、Bromo 連續段。"],
      ["早起程度", "3 個凌晨 / 清晨日", "抓地鞋、保暖外套、補水與睡眠都要提早準備。"]
    ],
    flightData: {
      depart: {
        summary: "台北直飛峇里島，中華航空。",
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
          "直飛，不用轉機。",
          "下午抵達，直接去飯店。",
          "前一晚先線上報到，文件整理好。"
        ]
      },
      return: {
        summary: "回程分兩段：日惹飛雅加達，再轉中華航空回台北，轉機時間要留夠。",
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
          "國內段接國際段，YIA 機場鐵路的班次和轉機時間要先算好。"
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
        note: "海邊的度假村，走路到 Seminyak 海灘約 5 分鐘。",
        details: [
          "步行可接近 Seminyak Beach",
          "三層泳池、Spa、餐廳完整",
          "住兩晚"
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
        note: "這幾晚的住宿由 JVTO 安排，以下是公開行程頁常見的安排，僅供參考。",
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
        note: "殖民時期老宅改的精品飯店，火山段結束後住一晚。",
        details: [
          "1930 年代殖民建築改造",
          "有花園和泳池",
          "火山段之後好好睡一晚"
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
        note: "在 Malioboro 市區，住神廟日和回程前一晚。",
        details: [
          "緊貼 Malioboro 主街，地點非常順",
          "Sky pool、Sky Lounge 與現代房型",
          "去神廟、逛街、去機場都方便"
        ],
        url: HOTEL_MAPS.yogyakarta
      }
    ],
    transportNotes: [
      ["火山順序", "Ijen → Sewu → Bromo，並確認最後 drop 在 Malang。"],
      ["YIA 機場鐵路", "搭 06:00 左右的班次，車程約 35 到 40 分鐘。"],
      ["機場緩衝", "回程至少提早 2 小時到機場。"]
    ],
    packingNotes: [
      ["鞋子", "火山與瀑布段請穿有抓地力的運動鞋或登山鞋。"],
      ["保暖", "Ijen 與 Bromo 凌晨真的會冷，外套要帶。"],
      ["行李", "目前整理為去程 23kg ×2、回程 23kg ×1。"]
    ],
    mapLocations: [
      ["Seminyak Beach", "Seminyak Beach Bali", "第一天看夕陽的海灘。"],
      ["Seminyak 飯店", "Courtyard by Marriott Bali Seminyak Resort", "抵達後的主要住宿點。"],
      ["Ijen Crater", "Ijen Crater East Java", "Day 4 看藍火和火山湖。"],
      ["Tumpak Sewu", "Tumpak Sewu Waterfall", "Day 5 的瀑布。"],
      ["Mount Bromo", "Mount Bromo", "Day 6 看日出。"],
      ["Malang 飯店", "The Shalimar Boutique Hotel Malang", "Day 6 住宿。"],
      ["Yogyakarta 飯店", "Aveta Hotel Malioboro Yogyakarta", "Day 7、8 住宿。"],
      ["YIA 機場", "Yogyakarta International Airport", "回程機場。"]
    ],
    itinerary: [
      ["Day 1", "抵達水明漾", "下午抵達，入住後走去海邊看夕陽，吃晚餐、逛街，最後去按摩。", ["機場抵達", "海灘夕陽", "Beach Club", "SPA"], [["抵達時間", "14:35 抵達 DPS（Ngurah Rai International Airport）。"], ["入境完成", "15:05 完成入境與領行李。"], ["搭車時間", "15:15 搭 Grab 前往飯店，約 15:45 抵達 Courtyard by Marriott Bali Seminyak Resort。"], ["入住時間", "16:00 完成 Check-in，先回房換上度假服裝。"], ["飯店放鬆", "16:00–17:30 泳池、池畔酒吧，或在房間休息。"], ["夕陽時間", "17:30 步行約 5 分鐘到 Seminyak Beach，6 月日落約 18:05。"], ["晚餐安排", "18:30–20:00 推薦 Potato Head Beach Club，海景夕陽、晚餐、調酒和 DJ 音樂一次收齊。"], ["逛街安排", "20:00–21:30 可逛 The Flea Market 與 Kayu Aya Street，找洋裝、草編包、香氛和度假服飾。"], ["SPA 時段", "21:30–23:00 推薦 Ssamaya Balinese Spa，可做 60 分鐘 Balinese Massage 或 90 分鐘 Aromatherapy Massage。"], ["最晚睡覺時間", "23:00 回飯店睡覺。"]], {
        date: "06 / 13 Sat",
        region: "峇里島｜Seminyak",
        theme: "機場抵達、夕陽、Beach Club 與 SPA",
        effort: "輕鬆｜度假日",
        tone: "beach",
        badges: ["海灘夕陽", "Beach Club", "SPA"],
        timingCards: [
          ["落地時間", "14:35 抵達 DPS"],
          ["入住完成", "16:00 完成 Check-in"],
          ["夕陽時段", "17:30 前往 Seminyak Beach"],
          ["今晚睡眠", "23:00 回飯店休息"]
        ],
        preview: "下午抵達，入住後走去海邊看夕陽，吃晚餐、逛街，最後去按摩。",
        guide: "機場到飯店，走路到海邊，接著晚餐、逛街、按摩，都在飯店附近。",
        atGlance: [
          ["抵達時間", "14:35 抵達 DPS，約 16:00 完成飯店 Check-in"],
          ["主要移動", "DPS → Grab → Courtyard Seminyak → 步行海邊 / 晚餐 / 逛街 / SPA"],
          ["體力節奏", "輕鬆，剛下飛機先休息"],
          ["今日穿著", "入住後可直接換上度假服裝，晚上海邊與逛街都以輕便涼爽為主"],
          ["餐食與補給", "Beach Club 晚餐為主，下午和晚間都記得補水"],
          ["今晚落腳", "Courtyard by Marriott Bali Seminyak Resort"]
        ],
        routeFlow: [
          ["14:35–16:00｜抵達、入境與入住", "14:35 抵達 DPS，15:05 完成入境和領行李，15:15 搭 Grab，約 16:00 完成飯店 Check-in。"],
          ["16:00–17:30｜飯店放鬆", "泳池、池畔酒吧，或在房間休息。第一天不排太滿。"],
          ["17:30–18:30｜Seminyak Beach 夕陽", "從飯店走路約 5 分鐘到海邊，6 月日落約 18:05。"],
          ["18:30–20:00｜Potato Head Beach Club 晚餐", "看海景吃晚餐，有調酒和 DJ。"],
          ["20:00–21:30｜The Flea Market / Kayu Aya Street", "晚餐後順路逛，有洋裝、草編包、香氛、泳裝和手工藝品。"],
          ["21:30–23:00｜SPA", "去 Ssamaya Balinese Spa 按摩，按完回飯店睡覺。"]
        ],
        reminders: [
          "第一天下午不排遠的景點，體力留給火山段。",
          "6 月日落約 18:05，17:30 從飯店走去海邊。",
          "要去 Potato Head 或晚上 SPA 的話先訂位。"
        ],
        links: [
          ["今晚落腳", HOTEL_MAPS.seminyak],
          ["Seminyak Beach", PLACE_MAPS.seminyakBeach],
          ["Potato Head Beach Club", PLACE_MAPS.potatoHead],
          ["The Flea Market", PLACE_MAPS.fleaMarket],
          ["Kayu Aya Street", PLACE_MAPS.kayuAya],
          ["Ssamaya Balinese Spa", PLACE_MAPS.ssamayaSpa]
        ]
      }],
      ["Day 2", "Seminyak 自由活動", "今天沒有固定行程，睡晚一點，去 beach club、按摩、散步、吃飯。", ["海邊放空", "brunch", "沒有固定行程"], [["起床時間", "08:30 前後起床即可；想睡晚一點也可以。"], ["出門時間", "要去吃早午餐或 beach club 的話，10:00 前後出門。"], ["集合時間", "今天沒有固定集合，自由安排即可。"], ["最晚睡覺時間", "建議 23:00 前休息，隔天開始進入移動段。"], ["今日亮點", "去海邊、按摩，沒有固定行程。"], ["貼心提醒", "海邊日照很強，也可以趁今天把火山段要用的小物補齊。"]], {
        date: "06 / 14 Sun",
        region: "峇里島｜Seminyak",
        theme: "海邊、按摩、買東西",
        effort: "輕鬆",
        tone: "beach",
        badges: ["防曬", "自由安排", "補給日"],
        preview: "睡晚一點，吃早午餐，下午去海邊或按摩。",
        guide: "今天休息，晚上把火山段的裝備整理好。",
        atGlance: [
          ["出發時間", "10:00 前後出門"],
          ["主要移動", "Seminyak 周邊短距離移動為主"],
          ["體力節奏", "輕鬆，自由安排"],
          ["今日穿著", "防曬、透氣衣物、涼鞋或好走拖鞋"],
          ["餐食與補給", "吃早午餐，順便買零食和水"],
          ["今晚落腳", "Courtyard by Marriott Bali Seminyak Resort"]
        ],
        routeFlow: [
          ["上午｜睡飽", "睡到自然醒。"],
          ["午後｜海邊與按摩", "挑一個地方待久一點，不用多跑。"],
          ["夜晚｜整理火山段裝備", "把明後天的衣物、藥品、行動電源和防水小物先整理好。"]
        ],
        reminders: [
          "海邊又曬又悶，要防曬、多喝水。",
          "要買 eSIM、零食或腸胃藥的話今天買。"
        ],
        links: [["今晚落腳", HOTEL_MAPS.seminyak]]
      }],
      ["Day 3", "離開海邊，進入火山線", "上午 JVTO 到飯店接人，搭車到港口，坐渡輪到東爪哇，下午做伊真健康檢查，晚上早睡。", ["跨島轉場", "過海到爪哇", "跟團移動"], [["起床時間", "08:00 起床，最晚 08:30。"], ["出門時間", "09:45 前把行李和早餐處理好，準備在飯店外等車。"], ["集合時間", "10:00 和 JVTO 司機會合，建議 09:50 就在飯店大廳待命。"], ["最晚睡覺時間", "建議 19:30 前睡，因為今晚其實只是在等隔天半夜起床。"], ["接送路線", "10:00 從 Bali 飯店出發後，會先前往 Gilimanuk Port，再搭 ferry crossing 到 Ketapang Port。"], ["時差切換", "抵達 Ketapang Port 之後就進入 WIB，時間會比台灣與峇里島慢 1 小時。"], ["健康檢查", "14:30 會安排 Ijen Health Screening，這是進火山區前的必要流程，記得把護照放在隨身包。"], ["晚餐安排", "19:00 晚餐為自理，JVTO 公開頁也標示今天三餐都不含。"], ["今晚落腳", "約 14:15 完成 check-in @ Luminor Hotel Banyuwangi，傍晚以休息與整理裝備為主。"]], {
        date: "06 / 15 Mon",
        region: "Bali → 東爪哇火山線",
        theme: "跨島轉場與冒險開場",
        effort: "普通｜長途移動",
        tone: "transfer",
        badges: ["包車接送", "渡輪", "早睡準備"],
        preview: "今天沒有景點，整天都在移動，目的是到東爪哇。",
        guide: "上午離開 Bali，下午到東爪哇，傍晚做健康檢查，晚上早睡。",
        atGlance: [
          ["出發時間", "10:00 與 JVTO 司機會合"],
          ["主要移動", "包車 → Gilimanuk Port → ferry crossing → Ketapang Port → Banyuwangi"],
          ["體力節奏", "普通，但要坐很久的車"],
          ["今日穿著", "舒服衣物、薄外套、好坐車的鞋"],
          ["餐食與補給", "早餐吃飽；午餐和晚餐不含，零食和水放隨身包"],
          ["今晚落腳", "Luminor Hotel Banyuwangi"]
        ],
        routeFlow: [
          ["上午｜10:00 Bali 接車", "JVTO 司機到飯店接人，開往 Gilimanuk Port。"],
          ["中午｜港口與渡輪 crossing", "14:00 左右在 Gilimanuk Port 搭渡輪到爪哇。"],
          ["午後｜Ketapang → Banyuwangi", "14:15 抵達 Ketapang Port 後，時間會慢 1 小時；接著轉往 Banyuwangi 並完成飯店 check-in。"],
          ["傍晚｜Ijen Health Screening", "14:30 做 Ijen 健康檢查，沒做隔天不能上山。"],
          ["夜晚｜早睡", "19:00 晚餐自理，整理裝備、洗澡、早點睡。"]
        ],
        reminders: [
          "一過 Ketapang Port 就進入 WIB，手機如果沒自動切換，今晚起床時間很容易算錯。",
          "Ijen 健康檢查要用到護照，別把重要文件塞進大行李最底層。",
          "今晚先把外套、口罩、頭燈或手機照明、水和行動電源放到最容易拿的位置。",
          "明天半夜就要起床，晚餐不要太晚吃，早點睡。"
        ],
        links: [
          ["JVTO 四日遊", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
          ["Luminor Hotel Banyuwangi", HOTEL_MAPS.luminor]
        ]
      }],
      ["Day 4", "Ijen 藍火和火山湖", "半夜出發，凌晨兩點開始爬 Ijen，先看藍火，天亮後看火山湖。下午去 Papuma 海灘看日落。", ["藍火", "夜行", "火山湖"], [["起床時間", "當地時間 23:45 起床；台灣時間 00:45。"], ["出門時間", "00:20 前完成退房與上車準備，00:30 準時出發。"], ["集合時間", "00:20 在住宿點門口或大廳集合。"], ["最晚睡覺時間", "建議前一晚 20:30 前就寢，能睡多少算多少。"], ["健行起點", "約 02:00 抵達 Ijen 區，從 Paltuding 開始健行，單程抓 1.5 到 2 小時。"], ["午餐安排", "12:00 午餐 included，地點是 @ Baratha Hotel & Resto。"], ["午後行程", "16:00 會接上 Papuma Beach Sunset Tour，看完夕陽後再前往今晚住宿。"], ["今晚落腳", "約 20:00 入住 @ Doho Homestay；晚餐未含，需自行安排。"]], {
        date: "06 / 16 Tue",
        region: "東爪哇｜Ijen",
        theme: "凌晨出發、藍火與火山湖",
        effort: "偏累｜火山健行",
        tone: "volcano",
        badges: ["凌晨出發", "保暖", "抓地鞋"],
        preview: "半夜出發，凌晨看藍火，天亮看火山湖，下午到 Papuma 海灘。",
        guide: "不用走快。注意保暖，多喝水。",
        atGlance: [
          ["出發時間", "00:30 準時離開住宿"],
          ["主要移動", "半夜包車 → Paltuding → Ijen 健行 → Baratha 午餐 → Papuma → Doho Homestay"],
          ["體力節奏", "偏累，凌晨起床加上山路健行"],
          ["今日穿著", "保暖外套、長褲、抓地鞋、防風層"],
          ["餐食與補給", "午餐 included；晚餐自理，水與小零食放外層"],
          ["今晚落腳", "Doho Homestay"]
        ],
        routeFlow: [
          ["凌晨｜退房與山路移動", "00:30 從飯店出發前往 Ijen 區，半夜上車前先把外套、口罩和照明確認好。"],
          ["清晨｜Paltuding 起登 Ijen", "約 02:00 從 Paltuding 開始健行，先看藍火，天亮後看火山湖。"],
          ["中午｜Baratha 補給", "12:00 午餐 included @ Baratha Hotel & Resto，下山後先喝水、吃東西。"],
          ["午後｜Papuma Beach Sunset Tour", "16:00 到 Papuma 海灘看日落。"],
          ["夜晚｜入住 Doho Homestay", "約 20:00 抵達 Doho Homestay，晚餐自理，早點休息。"]
        ],
        reminders: [
          "火山區清晨很冷，多穿幾層，比只帶一件厚外套好。",
          "硫磺區要戴口罩。晚餐自理。"
        ],
        links: [
          ["JVTO 四日遊", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
          ["Doho Homestay", HOTEL_MAPS.doho]
        ]
      }],
      ["Day 5", "走進 Tumpak Sewu 谷底", "整趟最費腿的一天。沿著濕滑的步道下到瀑布谷底，下午再坐四小時車到 Bromo。", ["瀑布谷底", "水霧", "最費腿的一天"], [["起床時間", "當地時間 02:45 起床；台灣時間 03:45。"], ["出門時間", "03:20 前把行李收好，03:30 直接上車。"], ["集合時間", "03:20 在住宿點門口集合。"], ["最晚睡覺時間", "建議前一晚 20:30 前休息，這天體力消耗會很大。"], ["早餐安排", "06:30 Breakfast included，先把熱量補起來，後面下切瀑布區會比較穩。"], ["瀑布段", "07:30 開始 Tumpak Sewu Waterfall Tour，下切步道約 30 到 45 分鐘。"], ["午餐安排", "12:00 午餐 included，下山後可以先換乾衣服再補給。"], ["午後轉場", "13:00 離開瀑布區，約 4 小時車程前往 Bromo 一帶住宿。"], ["今晚落腳", "約 17:00 入住 @ Joglo Kecombrang Bromo；晚餐需自行安排。"]], {
        date: "06 / 17 Wed",
        region: "東爪哇｜Tumpak Sewu",
        theme: "瀑布谷底、水霧與長下坡",
        effort: "偏累｜瀑布健行",
        tone: "waterfall",
        badges: ["濕滑地形", "換洗衣物", "補水"],
        preview: "會很累，也會濕。上午下到瀑布谷底，下午坐車到 Bromo。",
        guide: "下坡慢慢走，注意膝蓋，防水裝備要帶齊。",
        atGlance: [
          ["出發時間", "03:30 直接出發前往瀑布"],
          ["主要移動", "包車 → Tumpak Sewu 步道 → 午餐 → 4 小時車程 → Bromo 住宿"],
          ["體力節奏", "偏累，最費腿力"],
          ["今日穿著", "短褲或快乾褲、抓地鞋、防潑水外套"],
          ["餐食與補給", "早餐與午餐皆 included；回程後記得補水和換乾衣服"],
          ["今晚落腳", "Joglo Kecombrang Bromo"]
        ],
        routeFlow: [
          ["清晨｜06:30 早餐 included", "進瀑布區前先吃早餐。"],
          ["上午｜07:30 Tumpak Sewu Waterfall Tour", "沿著濕滑步道一路下切，官方說下切約 30 到 45 分鐘，實際走起來更累。"],
          ["中午｜12:00 午餐補給", "離開瀑布區後先補午餐，再整理濕衣物和手機防水裝備。"],
          ["午後｜13:00 轉往 Bromo", "約 4 小時車程到 Bromo，路很顛，能睡就睡。"],
          ["傍晚｜入住 Joglo Kecombrang", "約 17:00 check in，晚餐自理，早睡。"]
        ],
        reminders: [
          "瀑布步道很滑，穿抓地的鞋。",
          "下午還有長車程到 Bromo，上車前換乾衣服、吃飽、喝水。"
        ],
        links: [
          ["JVTO 四日遊", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
          ["Joglo Kecombrang Bromo", HOTEL_MAPS.kecombrang]
        ]
      }],
      ["Day 6", "Bromo 日出", "凌晨兩點搭 Jeep 上山看日出，很冷，有火山灰。回飯店吃早餐，下午送往 Surabaya。", ["Jeep", "冷風", "日出"], [["起床時間", "當地時間 01:15 起床；台灣時間 02:15。"], ["出門時間", "01:50 前穿好保暖層，02:00 準時搭 Jeep 出發。"], ["集合時間", "01:50 在飯店外等 Jeep，避免臨時找人。"], ["最晚睡覺時間", "建議前一晚 19:30 前就寢，這樣至少能補一小段睡眠。"], ["觀景段", "03:30 開始 Bromo Sunrise Tour，先看星空，再等日出。"], ["早餐安排", "10:00 回到飯店早餐 @ Joglo Kecombrang Bromo。"], ["下午送達", "16:00 左右結束 Bromo 段，包車會繼續送往 Surabaya 市區飯店或機場，車程約 2 到 3 小時。"], ["住宿提醒", "JVTO 公開頁寫的是 Surabaya city / airport drop-off；如果今晚實際住 Malang，記得再確認最後下車點與後續接駁。"]], {
        date: "06 / 18 Thu",
        region: "東爪哇｜Bromo → 城市段",
        theme: "搭 Jeep 看 Bromo 日出",
        effort: "偏累｜凌晨出發",
        tone: "volcano",
        badges: ["Jeep", "高原冷風", "下山補眠"],
        preview: "很早、很冷。凌晨搭 Jeep 上山等日出，早上回飯店吃早餐。",
        guide: "凌晨上山要保暖、喝水。下山後先休息。",
        atGlance: [
          ["出發時間", "02:00 Jeep 出發"],
          ["主要移動", "Jeep 上山 → Bromo Sunrise Tour → 回飯店早餐 → 下午送往 Surabaya"],
          ["體力節奏", "偏累，但比昨天更冷、更需要保暖"],
          ["今日穿著", "保暖外套、長褲、口罩或 Buff、抓地鞋"],
          ["餐食與補給", "10:00 回飯店早餐；午後長車程前可再備簡單零食"],
          ["今晚落腳", "JVTO 行程結束後，自行安排城市住宿"]
        ],
        routeFlow: [
          ["凌晨｜02:00 搭 Jeep 上山", "天還沒亮就出發，風大、灰塵多、路顛，穿暖、戴口罩。"],
          ["清晨｜03:30 Bromo Sunrise Tour", "先看星空，再等日出。"],
          ["上午｜10:00 回飯店早餐", "回 Joglo Kecombrang Bromo 吃早餐。"],
          ["午後｜16:00 送往 Surabaya", "四日遊最後會接一段 2 到 3 小時車程，送往 Surabaya 市區飯店或機場，今天不要再排別的。"]
        ],
        reminders: [
          "凌晨風很大，要帶保暖衣物、口罩和帽子。",
          "JVTO 公開頁預設是 Surabaya handoff；如果今晚住宿改放在 Malang，請把下車點、接駁與火車站位置一起確認好。",
          "先確認下車地點和今晚住宿怎麼接。"
        ],
        links: [
          ["JVTO 四日遊", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
          ["Joglo Kecombrang Bromo", HOTEL_MAPS.kecombrang]
        ]
      }],
      ["Day 7", "搭火車到日惹", "搭 Argo Semeru 到日惹，在車上休息。今天不用早起。", ["火車包廂", "城市轉場", "休息日"], [["起床時間", "當地時間 07:00 起床；台灣時間 08:00。"], ["出門時間", "08:00 從飯店出發去車站，還有時間進 VIP 貴賓室。"], ["集合時間", "今天沒有另外集合，08:00 直接從飯店搭車去車站。"], ["最晚睡覺時間", "建議 22:30 前休息，隔天神廟日還要早起。"], ["今日亮點", "火山段結束，今天不用早起，搭火車到日惹。"], ["移動方式", "火車這段的重點是舒服、準時和不狼狽，行李與到站接駁先想好就會很順。"]], {
        date: "06 / 19 Fri",
        region: "瑪琅 / 泗水 → 日惹",
        theme: "火車轉場與城市回穩",
        effort: "普通｜長途移動",
        tone: "city",
        badges: ["火車包廂", "恢復日", "VIP lounge"],
        preview: "休息日。搭火車到日惹，在車上補眠。",
        guide: "今天只要準時到車站，其餘時間休息。",
        atGlance: [
          ["出發時間", "08:00 從飯店前往車站"],
          ["主要移動", "飯店 → 車站 → Argo Semeru → Yogyakarta"],
          ["體力節奏", "普通，以休息為主"],
          ["今日穿著", "舒服衣物、薄外套、好坐車的鞋"],
          ["餐食與補給", "早餐吃好、車上補水、抵達後再安排晚餐"],
          ["今晚落腳", "Aveta Hotel Malioboro"]
        ],
        routeFlow: [
          ["上午｜前往車站", "提早到，可以進 VIP lounge 等車。"],
          ["白天｜火車上", "整理照片、補眠或看風景。"],
          ["午後｜回到城市", "抵達日惹，今晚不排行程，明天要早起看神廟。"]
        ],
        reminders: [
          "火山段的疲勞通常這天才出現，多喝水、多休息。",
          "上車前把常用的東西放在行李外層。"
        ],
        links: [
          ["Argo Semeru 介紹", "https://journey.tw/ka-argo-semeru/"],
          ["今晚落腳", HOTEL_MAPS.yogyakarta]
        ]
      }],
      ["Day 8", "婆羅浮屠和普蘭巴南", "跟 Klook 一日團，上午婆羅浮屠（登塔加導覽），下午普蘭巴南。", ["婆羅浮屠", "普蘭巴南", "一日團"], [["起床時間", "當地時間 05:15 起床；台灣時間 06:15。"], ["出門時間", "06:20 前到大廳等車，接駁通常在 06:30 到 07:30 之間。"], ["集合時間", "建議 06:20 在飯店大廳集合，避免司機提早到。"], ["最晚睡覺時間", "建議前一晚 22:00 前休息，文化日也會走滿一整天。"], ["接駁時段", "Klook 行程一般會在 06:30–07:30 間接客，實際時間以前一晚通知為準。"], ["神廟節奏", "約 09:30 進婆羅浮屠，13:00 接普蘭巴南，16:00 左右回程；若想中途脫隊，最好先和司機確認。"], ["穿著與補給", "白天會熱、走路也多，衣服穿輕一點，水和防曬不要省。"]], {
        date: "06 / 20 Sat",
        region: "日惹｜Borobudur + Prambanan",
        theme: "文化日、石塔與寺廟故事",
        effort: "普通",
        tone: "temple",
        badges: ["早起", "導覽行程", "白天偏熱"],
        preview: "上午婆羅浮屠，下午普蘭巴南，有導覽。",
        guide: "比火山日輕鬆，但還是要走很多路，帶水、防曬。",
        atGlance: [
          ["出發時間", "06:20 在大廳等車"],
          ["主要移動", "Klook 接駁 → Borobudur → Prambanan → 回飯店"],
          ["體力節奏", "普通，走路多，但沒有火山日累"],
          ["今日穿著", "透氣衣物、好走鞋、帽子或防曬用品"],
          ["餐食與補給", "早餐先吃，12:00 午餐自理，白天隨身帶水"],
          ["今晚落腳", "Aveta Hotel Malioboro"]
        ],
        routeFlow: [
          ["清晨｜06:30–07:30 接駁出發", "還是要早起，但比火山日輕鬆。先吃早餐、帶水。"],
          ["上午｜09:30 婆羅浮屠", "跟導覽看，約 2.5 小時。"],
          ["中午｜12:00 午餐", "午餐自理，吃清淡一點。"],
          ["午後｜13:00 普蘭巴南", "印度教寺廟，樣子和婆羅浮屠很不同，預計停留約 2 小時。"],
          ["傍晚｜16:00 回程", "回日惹吃晚餐、整理行李，明天清晨回程。"]
        ],
        reminders: [
          "白天很熱，要走很多路，帶水、防曬，穿好走的鞋。",
          "如果想在普蘭巴南多留一點時間或中途自行離隊，最好先和 Klook 司機或當天導遊確認回程方式。",
          "腸胃敏感的話，中午不要吃太辣。"
        ],
        links: [["Klook 行程", "https://s.klook.com/c/4yVrZ02036"]]
      }],
      ["Day 9", "回台灣", "清晨搭機場鐵路到 YIA，飛雅加達，轉機回台北。行李前一晚收好。", ["清晨移動", "機場銜接", "回家"], [["起床時間", "當地時間 04:40 起床收行李；台灣時間 05:40。"], ["出門時間", "05:25 從飯店出發去機場，寧可早到。"], ["集合時間", "今天沒有固定集合，05:25 準時離開飯店即可。"], ["最晚睡覺時間", "建議前一晚 21:30 前休息，回程日會很早開始。"], ["回程節奏", "今天的關鍵不是再塞一個景點，而是穩穩把每個銜接抓好，讓回程不要慌。"], ["出發前檢查", "護照、手機、充電器、轉接頭和伴手禮出門前再看一次，少一樣都麻煩。"]], {
        date: "06 / 21 Sun",
        region: "日惹 → 雅加達 → 台北",
        theme: "清晨移動與平安回家",
        effort: "普通｜回程日",
        tone: "return",
        badges: ["早起", "機場銜接", "回家"],
        preview: "今天不排景點，只要每一段都接上。",
        guide: "東西前一晚收好，清晨照時間出發。",
        atGlance: [
          ["出發時間", "05:25 從飯店出發去機場"],
          ["主要移動", "飯店 → YIA → 雅加達 → 台北"],
          ["體力節奏", "普通，但轉機很耗精神"],
          ["今日穿著", "舒服衣物、薄外套、好活動的鞋"],
          ["餐食與補給", "機場與轉機段記得補水，隨身留點零食"],
          ["今晚落點", "飛機上，回到台灣"]
        ],
        routeFlow: [
          ["清晨｜離開飯店", "很早出發，行李前一晚收好。"],
          ["上午｜機場與接續段", "國內段接國際段時，把護照、登機證和充電設備一直放在手邊。"],
          ["夜晚｜到家", "回到台灣，好好休息。"]
        ],
        reminders: [
          "轉機日比平常更需要補水，也別等到餓過頭才找東西吃。",
          "出門前確認護照、手機、充電器、轉接頭和伴手禮都帶了。"
        ],
        links: [["機場鐵路", "https://reservation.railink.co.id/"]]
      }]
    ],
    budgetLabels: {
      flight: ["機票", "華航往返"],
      hotel: ["住宿", "Seminyak、Malang、Yogyakarta"],
      volcanoDeposit: ["火山訂金", "Ijen / Sewu / Bromo tour 訂金"],
      volcanoBalance: ["火山尾款", "2026/05/30 已付剩餘 80%，實際刷卡金額 Rp8,433,700，約 NT$14,838"],
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
    heroKicker: "Indonesia trip notes",
    heroTitle: "Bali × Java",
    heroSubtitle: "Two days by the beach in Bali, volcanoes and a waterfall in East Java, then temples in Yogyakarta",
    heroDates: "2026 / 06 / 13 - 2026 / 06 / 21",
    heroDestinations: "Seminyak • Ijen • Tumpak Sewu • Bromo • Malang • Yogyakarta",
    heroIntro:
      "Nine days, eight nights. Two nights in Seminyak, then a tour across to East Java with three pre-dawn starts for Ijen, Tumpak Sewu and Bromo, and a train to Yogyakarta for Borobudur and Prambanan.",
    heroSignals: ["Two beach days", "Volcano hikes", "Pre-dawn starts", "Long transfer days", "Warm layer required"],
    heroFacts: [
      ["Trip length", "9 days / 8 nights"],
      ["Travel mood", "Coast × volcanoes × temples"],
      ["Pack first", "Grip shoes, warm layer, water"]
    ],
    heroPrimaryCta: "Open the itinerary",
    heroSecondaryCta: "Check practical info",
    footerCopy: "Bali and Java trip handbook, June 2026.",
    navOverview: "Overview",
    navFlights: "Flights",
    navTrain: "Train",
    navTours: "Tours",
    navStay: "Stays",
    navLinks: "Links",
    navInfo: "Info",
    navItinerary: "Itinerary",
    navMap: "Map",
    navBudget: "Budget",
    navVisa: "Visa",
    navMore: "More",
    navMoreTitle: "More trip information",
    languageLabel: "Display language",
    travelModeLabel: "Travel Mode",
    travelModeTitle: "Start with today's essentials",
    travelModeLead: "Pick the day you are on to see wake-up, departure, meet-up and sleep times, plus anything still to confirm.",
    travelDayLabel: "Choose a day",
    travelOpenDay: "Open the full day guide",
    travelOpenMap: "Open today's map",
    travelOpenStay: "View stays",
    travelOpenInfo: "View practical info",
    travelOfflineNote: "After the first online visit, the main guide remains available offline. Google Maps and external sites still need a connection.",
    travelAlertLabel: "Confirm before departure",
    travelAlertText: "JVTO lists a Surabaya drop-off on 18 June, while the Day 6 stay and Day 7 rail plan currently use Malang. Confirm the final stop before checking the station and ticket.",
    dayJumpLabel: "Quick day switch",
    dayExpandLabel: "Open full guide",
    dayCollapseLabel: "Close full guide",
    overviewLabel: "Journey overview",
    overviewTitle: "Two days in Bali, four in East Java, three in Yogyakarta",
    overviewLead: "Rest in Bali first. The middle stretch, volcanoes and a waterfall, is the hardest. Temples in Yogyakarta at the end.",
    snapshotLabel: "Trip snapshot",
    snapshotTitle: "Effort, gear and transfers",
    snapshotLead:
      "This trip has three pre-dawn starts, two long transfers and some volcano hiking. Check which days are the hard ones.",
    snapshotChips: ["Bali + Java", "3 early waterfall / volcano mornings", "2 major transfer days", "Grip shoes and a warm layer matter", "Leave room for weather and stomach changes"],
    snapshotCards: [
      {
        label: "Main areas",
        value: "Bali / East Java / Yogyakarta",
        note: "Seminyak, Ijen, Tumpak Sewu, Bromo, Malang, Yogyakarta, in that order."
      },
      {
        label: "Trip theme",
        value: "Island, volcano, sunrise, culture",
        note: "Rest first, volcanoes in the middle, temples at the end."
      },
      {
        label: "Effort level",
        value: "Moderate to tiring",
        note: "Day 4 to Day 6 is the hardest run, especially the midnight and pre-dawn departures."
      },
      {
        label: "Early starts",
        value: "3 serious wake-up days",
        note: "Ijen, Sewu and Bromo all start very early. Go to bed early the night before."
      },
      {
        label: "Transport mix",
        value: "Flights, private car, ferry, Jeep, train",
        note: "Travel time is long and needs to be counted in the plan."
      },
      {
        label: "Stay rhythm",
        value: "Resort ease → short recovery stays → city finish",
        note: "The stays on the volcano days are arranged by the tour."
      },
      {
        label: "Useful gear",
        value: "Grip shoes, warm layer, rain protection",
        note: "Wear grip shoes and bring a jacket and waterproof gear on the volcano and waterfall days."
      },
      {
        label: "Watch for",
        value: "Hydration, traffic, stomach, cold mornings",
        note: "Eat lighter before the volcano days, keep water close, and expect mountain mornings to feel cold."
      }
    ],
    highlightsLabel: "Journey highlights",
    highlightsTitle: "Main stops",
    highlightsLead:
      "Six parts, in date order.",
    journeyHighlights: [
      {
        kicker: "06/13 - 06/14｜Bali",
        title: "Two days in Seminyak",
        desc: "Sleep, the beach and a massage. No far-off sights; save energy for the volcanoes.",
        tags: ["Island days", "Resort pace", "Seminyak"]
      },
      {
        kicker: "06/15｜Transfer day",
        title: "Crossing to East Java",
        desc: "Pickup in Bali in the morning, then the road and the ferry to East Java, with the Ijen health check in the afternoon.",
        tags: ["Long transfer", "Tour pickup", "Adventure chapter"]
      },
      {
        kicker: "06/16｜Ijen",
        title: "Ijen at night for the blue fire",
        desc: "The hike starts around 2 a.m. Blue fire before dawn, the crater lake after sunrise. It is cold and smells of sulfur.",
        tags: ["Pre-dawn start", "Blue fire", "Volcano hike"]
      },
      {
        kicker: "06/17 - 06/18｜Sewu + Bromo",
        title: "Tumpak Sewu and the Bromo sunrise",
        desc: "One day down to the foot of the waterfall, then a pre-dawn Jeep up Bromo the next morning. These two days are the most tiring.",
        tags: ["Tiring stretch", "Waterfall day", "Sunrise plateau"]
      },
      {
        kicker: "06/19｜Train day",
        title: "Train to Yogyakarta",
        desc: "The volcano days are over. Take the Argo Semeru to Yogyakarta and rest on board.",
        tags: ["Recovery day", "Train suite", "City reset"]
      },
      {
        kicker: "06/20 - 06/21｜Yogyakarta",
        title: "Borobudur and Prambanan",
        desc: "Both temples on a Klook day tour, then an early start for the airport the next morning.",
        tags: ["Culture day", "Temple line", "Quiet finish"]
      }
    ],
    previewLabel: "Day-by-day preview",
    previewTitle: "Daily story cards",
    previewLead:
      "Where each day goes and how tiring it is. Open a day for the detailed times.",
    practicalLabel: "Practical info",
    practicalTitle: "Practical information",
    practicalLead:
      "Flights, transfers, volcano prep, clothing, food and stomach notes.",
    practicalSections: [
      {
        title: "Flights and airport flow",
        intro: "Direct on the way out, one connection on the way back.",
        chips: ["Direct outbound", "Two-part return", "Arrive early"],
        items: [
          ["Outbound", "Taipei to Bali is a direct flight landing in the afternoon."],
          ["Return structure", "Yogyakarta to Jakarta is the feeder leg; Jakarta to Taipei is the international leg."],
          ["What to save together", "Keep airport transfers, hotel addresses, visa records, and booking screenshots in one phone folder."]
        ]
      },
      {
        title: "Intercity movement",
        intro: "There are two long transfers on this trip.",
        chips: ["Private car", "Ferry", "Jeep", "Train"],
        items: [
          ["Volcano order", "The order is Ijen → Tumpak Sewu → Bromo."],
          ["Long drives", "Do not plan anything else on long-drive days."],
          ["Airport buffer", "Take an early YIA airport train rather than cutting it close."]
        ]
      },
      {
        title: "Where you sleep",
        intro: "A resort at the start, tour-arranged stays on the volcano days, city hotels at the end.",
        chips: ["Seminyak", "Volcano segment", "Malang", "Yogyakarta"],
        items: [
          ["Bali start", "The Seminyak resort has a pool and is a short walk from the beach."],
          ["Volcano nights", "Simple places for a few hours of sleep before the early departures."],
          ["City stays", "In Malang and Yogyakarta the hotels are central, for rest and easy transport."]
        ]
      },
      {
        title: "Volcano hiking reminders",
        intro: "Get the gear ready the night before.",
        chips: ["Pre-dawn", "Warm layer", "Grip shoes", "Hydration"],
        items: [
          ["Night-before check", "Lay out your jacket, water, power bank, mask, cash, and charged phone before sleeping."],
          ["Cold factor", "Ijen and Bromo are cold before sunrise. Several light layers work better than one heavy jacket."],
          ["Footing", "Expect dust, gravel, slopes, and occasional wet ground. Wear shoes with grip."]
        ]
      },
      {
        title: "Clothing and day gear",
        intro: "What to wear on each kind of day.",
        chips: ["Island days", "City days", "Volcano days", "Transfer days"],
        items: [
          ["Island days", "Breathable clothes, sun protection, sunglasses, and sandals or easy walking shoes are enough."],
          ["City days", "Comfortable shoes, light clothing and a thin outer layer."],
          ["Volcano days", "Bring long pants, a warm layer, grip shoes, a windproof layer, and simple rain or dust protection."],
          ["Transfer days", "Comfortable clothing, a light jacket, stomach medicine and snacks."]
        ]
      },
      {
        title: "Meals and small supplies",
        intro: "Eat lightly around the volcano days.",
        chips: ["Hydration", "Light snacks", "Lighter dinner"],
        items: [
          ["Before volcano mornings", "Avoid greasy or spicy food the night before."],
          ["On long movement days", "Keep water, electrolyte drinks, or small snacks where you can reach them quickly."],
          ["If your stomach is sensitive", "You do not have to eat what everyone else eats at every meal."]
        ]
      },
      {
        title: "Payment and data",
        intro: "Cards cover a lot, while cash is still useful for small food stops, quick transport, and small local payments.",
        chips: ["Gojek", "eSIM", "Light cash"],
        items: [
          ["Data plan", "Install the eSIM before leaving Taiwan so data works on landing."],
          ["Ride apps", "Use Gojek, and compare prices with Grab."],
          ["Cash strategy", "Do not rush to exchange too much at once. Smaller, useful amounts are usually enough to start."]
        ]
      },
      {
        title: "Health and safety",
        intro: "A few things to watch for.",
        chips: ["Bali Belly", "Sun", "Traffic", "Flexibility"],
        items: [
          ["Water and stomach", "Bottled water is the easy choice. Be more cautious with ice, raw food, and half-cooked seafood."],
          ["Traffic", "Bali traffic regularly takes longer than the map suggests, so buffer time matters a lot."],
          ["When tired", "If a day is too much, skip a stop."]
        ]
      }
    ],
    previewCta: "Open day guide",
    dayGuideTimingLabel: "Key timings",
    dayGuideAtGlanceLabel: "Today at a glance",
    dayGuideFlowLabel: "Route flow",
    dayGuideDetailLabel: "Timing and rhythm",
    dayGuideReminderLabel: "Special reminders",
    dayGuideLinksLabel: "Useful links",
    dayStatuses: [
      "Suggested plan | adjust to energy",
      "Flexible plan",
      "Pickup booked | details pending",
      "JVTO package | follow guide update",
      "JVTO package | follow guide update",
      "JVTO package | drop-off pending",
      "Rail day | check ticket",
      "Klook tour | pickup pending",
      "Flight day | check e-ticket"
    ],
    coverLabel: "Narasi perjalanan",
    coverTitle: "How the days are arranged",
    coverLead:
      "Two rest days in Seminyak, then three pre-dawn starts for the volcanoes and the waterfall, then Yogyakarta for the temples and the city.",
    coverPoints: [
      ["Start", "Keep the two Seminyak days light: sleep and eat well."],
      ["Middle", "Ijen, Sewu and Bromo on three consecutive days, each with a pre-dawn start."],
      ["End", "No more pre-dawn starts in Yogyakarta: one temple day, the rest in the city."]
    ],
    volcanoCaption: "Bromo dawn",
    volcanoCredit: "Photo by Arya Krisdyantara / Unsplash",
    beachCaption: "Bali shoreline",
    beachCredit: "Photo by Santhosh Mocharla / Unsplash",
    routeLabel: "Flights and route",
    routeTitle: "Flights and route",
    routeLead: "Flights, baggage and the main transfers. Check them before leaving and again before the return.",
    departTag: "Outbound",
    departTitle: "Taipei to Bali",
    returnTag: "Return",
    returnTitle: "Yogyakarta to Taipei via Jakarta",
    tripFlowLabel: "Urutan",
    tripFlowValue: "Taipei → Bali → Ijen → Sewu → Bromo → Malang → Yogyakarta",
    flightHighlights: [
      ["Outbound", "CI771 direct to DPS on China Airlines"],
      ["Return shape", "CI9761 feeder segment + CI762 long-haul return"],
      ["Baggage", "23kg ×2 outbound, 23kg ×1 inbound"]
    ],
    flightNotes: [
      ["Departure note", "Arrive early for the international leg. Keep passport, e-ticket, and payment records together the night before."],
      ["Connection note", "The main international return sector is CI762. The YIA → CGK portion is the feeder segment, and the operating carrier should still be confirmed on the final ticket and airport display."],
      ["Not shown here", "The booking code is not shown on this page."]
    ],
    trainLabel: "Rail chapter",
    trainTitle: "Train transfer",
    trainLead:
      "Day 7 is the Argo Semeru to Yogyakarta. Here are the classes and how to buy tickets.",
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
      "Argo Semeru's top class is Compartment Suites. According to Journey.tw it has 16 private cabins in a 1-1 layout, with seats that rotate and recline close to flat.",
    trainFacts: [
      ["Suggested use", "East Java transfer day toward Yogyakarta"],
      ["Highest class", "Compartment Suites"],
      ["Layout", "16 private cabins, one traveler per room"],
      ["Seat feature", "Rotates and reclines nearly flat"],
      ["Reference fare", "About Rp2,050,000 - Rp2,250,000"]
    ],
    trainNotes: [
      "A chance to catch up on sleep after the volcano days.",
      "Choose the top class if you want to lie down.",
      "Fares and availability can still move, so it is worth checking again close to departure."
    ],
    trainBuyTitle: "How to buy it",
    trainBuyLead: "Booking steps.",
    trainBuySteps: [
      ["Step 1", "Confirm the Day 7 departure and arrival stations first."],
      ["Step 2", "Choose Argo Semeru, then Compartment Suites for a private cabin."],
      ["Step 3", "Journey.tw mentions tiket.com as a booking route, and station self-service ticket pickup as part of the process."],
      ["Step 4", "Book earlier if possible, because there are only 16 private cabins in this class."]
    ],
    trainLinks: [
      ["Journey.tw rail article", "https://journey.tw/ka-argo-semeru/"],
      ["tiket.com rail booking", "https://www.tiket.com/kereta-api"]
    ],
    toursLabel: "Tour chapter",
    toursTitle: "Curated tours",
    toursLead: "The two tours booked for this trip, with contents, costs and links.",
    tourLinkLabel: "View details",
    toursList: [
      {
        dates: "4D3N",
        area: "Booked volcano tour",
        hotel: "Ijen • Papuma • Tumpak Sewu • Bromo",
        localName: "Java Volcano Tour Operator",
        stars: "Middle",
        image: "./assets/tours/jvto-volcano-tour.jpg",
        note: "The hardest stretch of the trip: blue fire, the waterfall and a volcano sunrise on three consecutive days.",
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
        hotel: "Borobudur climb + guided visit + Prambanan",
        localName: "Klook Borobudur and Prambanan temple day tour",
        stars: "Culture day",
        image: "./assets/tours/klook-borobudur-prambanan.webp",
        note: "This is the tour booked for Day 8: Borobudur with the climb and a guide, then Prambanan.",
        details: [
          "Borobudur climb with guided visit",
          "Prambanan temple stop",
          "Scheduled for Day 8"
        ],
        url: "https://s.klook.com/c/4yVrZ02036",
        linkLabel: "Klook page",
        extraLinks: []
      }
    ],
    stayLabel: "Stay plan",
    stayTitle: "Where you stay",
    stayLead: "Four stays. Every hotel has a Google Maps link.",
    stayMapLabel: "Google Maps",
    stayTourLabel: "Tour page",
    linksLabel: "Useful links",
    linksTitle: "Useful official links",
    linksLead: "Frequently used websites.",
    resourceLinkCta: "Visit site",
    linksHighlights: [
      ["Stays", "Official sites and maps for the three stay segments"],
      ["Transport", "Volcano tour, train, and airport rail"],
      ["Entry", "eVisa, Love Bali, and All Indonesia"]
    ],
    infoLabel: "Practical info",
    infoTitle: "Indonesia practical notes",
    infoLead: "Entry steps, money, apps, time zones and local notes.",
    infoPanelOneTitle: "Before departure and local basics",
    infoPanelTwoTitle: "On-the-ground reminders",
    infoCostsLabel: "Cost notes",
    infoCostsTitle: "Known costs and payment record",
    infoCostsLead: "Amounts recorded so far. Food, taxis and shopping are not included yet.",
    infoHighlights: [
      ["Prep order", "Shared folder → eVisa → Bali levy → All Indonesia"],
      ["Payment style", "Cards are useful in formal places, so cash can stay light"],
      ["Useful app", "Set up Gojek, and compare prices with Grab"],
      ["Time zone", "Bali matches Taiwan; Jakarta and Yogyakarta are one hour behind"]
    ],
    infoChecklist: [
      ["Step 1", "Keep passport scans, flights, hotels, visas, and QR codes together in the shared cloud folder before departure."],
      ["Step 2", "Apply for the Indonesia eVisa / e-VOA first. The official fee is Rp500,000, usually for a 30-day stay within a 90-day validity period, extendable once."],
      ["Step 3", "Then pay the Bali tourist levy of Rp150,000. It applies per entry into Bali whether you arrive directly or via another Indonesian city."],
      ["Step 4", "Within the 3 days before arrival, complete All Indonesia for immigration, customs, and health declaration."],
      ["Step 5", "Check whether hair dryers and other high-power devices support 220V / 50Hz, and install the eSIM before leaving Taiwan."],
      ["Step 6", "If any Korean airline sector is involved, power banks should show their Wh rating and be insulated or packed in a zip bag."]
    ],
    infoBasics: [
      ["Shared folder", "All documents are kept in one SharePoint folder, reachable from phone and desktop."],
      ["eVisa note", "In a recent test, the approval email arrived about a minute after submission, but it is still better to apply early."],
      ["eSIM plan", "The current plan is to buy the eSIM on Shopee and install it before departure so data works on arrival."],
      ["Quick money math", "The planning note uses IDR 1,000 ≈ NT$1.87 as a rough guide. A fast shortcut is to drop the last three zeroes and multiply by 2, or divide by roughly 500 to 530."],
      ["Money exchange", "If exchanging money locally, larger legitimate chains such as PT Valasindo Valuta (PVG) are generally a safer choice than small roadside counters."],
      ["Cash plan", "The current assumption is still to keep cash moderate and rely on cards in more formal places."],
      ["Useful app", "Gojek can be registered with a Taiwan phone number and is useful for rides, food delivery, and GoPay top-ups. Grab is still worth price-checking on site."],
      ["Time zones", "WIB is 1 hour behind Taiwan, WITA is the same as Taiwan, and WIT is 1 hour ahead. Bali uses WITA; Jakarta and Yogyakarta use WIB."],
      ["Tipping", "Indonesia generally does not have a strong mandatory tipping culture."]
    ],
    infoTips: [
      ["Bali Belly", "Avoid tap water, and ideally even use bottled water for brushing teeth or washing fruit. Be conservative with ice, salads, and raw seafood."],
      ["No Online Taxi zones", "Some Bali areas still discourage online ride-hailing. Bluebird taxis or a short walk to a permitted pickup point can help."],
      ["Traffic", "Bali traffic can stretch a short drive badly, so a 25-minute ride may become 45 minutes, and 45 minutes may become 2 hours."],
      ["Borobudur", "Borobudur is closed on Mondays, and tickets should be checked carefully because climbing access and non-climbing access are different."],
      ["Volcano and waterfall gear", "For the volcano segment, bring warm layers, a mask, eye protection, and a dust-friendly bag. For the waterfall day, pack shorts, water shoes, a waterproof layer, and a change of clothes."],
      ["Clothing sizes", "Local clothing can run 1 to 2 sizes smaller than Taiwan sizing."],
      ["Payments", "The notes mention physical credit cards, Line Pay, PX Pay, Taiwan Pay, and Apple Pay, but keeping some cash is still safer."]
    ],
    infoCosts: [
      ["Flights", "NT$20,494 on China Airlines."],
      ["Hotels", "About NT$9,202 per person, with taxes still to be finalized."],
      ["Visa and Bali levy", "NT$941 for the visa plus NT$280 for the Bali levy, totaling NT$1,221."],
      ["eSIM", "NT$469."],
      ["KAI compartment train", "Rp2,614,500 total, noted as roughly NT$4,738 for 2 people, or about NT$2,369 per person. It has been paid; use the private record for reconciliation."],
      ["Temple day tour", "NT$2,610 for 2 people, or about NT$1,305 per person. It has been paid; use the private record for reconciliation."],
      ["4-day volcano tour", "The deposit is noted at about NT$3,994. The remaining 80% was paid on 2026-05-30 as Rp8,433,700, or about NT$14,838; use the private record for reconciliation."],
      ["Still to add", "Taxis, meals, souvenirs, snacks, clothes, exchanged cash, and airport parking are still open."]
    ],
    transportTitle: "Transport and timing",
    packingTitle: "Packing and safety",
    itineraryLabel: "Day by day",
    itineraryTitle: "Daily itinerary",
    itineraryLead: "Wake-up time, departure time and destination for each day.",
    itineraryHighlights: [
      ["Order", "Sea first, volcanoes next, temples and city at the end"],
      ["Main sights", "Ijen blue fire, Tumpak Sewu, Bromo sunrise"],
      ["How to use this page", "Check wake-up and meet-up times first, then the plan and reminders"]
    ],
    dayFocusLabel: "Today's rhythm",
    budgetLabel: "Budget overview",
    budgetTitle: "Budget breakdown",
    budgetLead: "The IDR conversions below use a rough planning rate of NT$1 ≈ Rp531 and are meant only for trip planning.",
    paidTitle: "Already paid",
    openTitle: "Still open",
    totalBudgetLabel: "Total budget",
    budgetRateNote: "Planning rate: NT$1 ≈ Rp531",
    dailyAverageLabel: "Daily average",
    budgetStyleNote: "Independent travel plus two local tours, mid-to-upper hotels",
    budgetTableStatus: "Status",
    budgetTableItem: "Item",
    budgetTableDetail: "Detail",
    budgetTableAmount: "Amount",
    budgetStatusPaid: "Paid",
    budgetStatusOpen: "Open",
    mapLabel: "Map overview",
    mapTitle: "Map overview",
    mapLead: "Hotels, main stops and the airport route.",
    mapRouteLink: "View full route",
    mapDayLabel: "Daily Routes",
    mapDayRoutes: [
      ["Day 1", "Seminyak arrival, sunset, and spa", DAY_ROUTE_URLS.day1],
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
    visaLead: "Entry steps. Do them in order and keep the records on your phone.",
    visaPanelTitle: "Indonesia tourist visa",
    arrivalPanelTitle: "Bali arrival extras",
    visaLinkOne: "Official Indonesia eVisa",
    visaLinkTwo: "Official Love Bali site",
    visaLinkThree: "All Indonesia arrival system",
    visaHighlights: [
      ["Step one", "Handle eVisa / e-VOA first"],
      ["Step two", "Pay the Bali levy of Rp150,000"],
      ["Step three", "Fill All Indonesia within 3 days of arrival"],
      ["Final check", "Keep QR codes, passport, and onward ticket together"]
    ],
    visaTutorial: [
      ["Step 1", "As of 2026-04-04, the official Indonesia eVisa / e-VOA eligibility list explicitly includes Taiwan, so a Taiwan passport can proceed through the e-VOA / VOA path before starting the application."],
      ["Step 2", "Prepare your passport, onward flight, hotel details, and a payment card. Passport validity should still be at least 6 months."],
      ["Step 3", "After payment, save the eVisa or e-VOA proof on your phone and keep a screenshot backup. Approval can arrive quickly, but it is still better not to wait until the last day."],
      ["Step 4", "Go to the official Love Bali site and pay the Bali tourist levy of Rp150,000, then save that QR code too."],
      ["Step 5", "Within the 3 days before arrival, complete the All Indonesia integrated declaration for immigration, customs, and health screening."],
      ["Step 6", "The night before departure, keep passport, visa proof, Love Bali QR code, All Indonesia details, and return flight information in one easy-to-open folder."]
    ],
    resourceLinks: [
      ["Seminyak hotel", "Official site for Courtyard by Marriott Bali Seminyak Resort", "https://www.marriott.com/en-us/hotels/dpssm-courtyard-bali-seminyak-resort/"],
      ["Malang hotel", "Official site for The Shalimar Boutique Hotel", "https://theshalimarhotel.co.id/"],
      ["Yogyakarta hotel", "Official site for Aveta Hotel Malioboro", "https://avetahotelmalioboro.com/"],
      ["Volcano tour", "Official Java Volcano Tour Operator page", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
      ["Borobudur tour", "Klook Borobudur climb and Prambanan temple day tour", "https://s.klook.com/c/4yVrZ02036"],
      ["Argo Semeru guide", "Journey.tw review of the train and suite class", "https://journey.tw/ka-argo-semeru/"],
      ["Airport rail", "Official YIA Airport Rail Link booking page", "https://reservation.railink.co.id/"],
      ["Indonesia eVisa", "Official Indonesia visa application site", "https://evisa.imigrasi.go.id/"],
      ["Love Bali", "Official Bali tourist levy site", "https://lovebali.baliprov.go.id/"],
      ["All Indonesia", "Official integrated arrival declaration system", "https://allindonesia.imigrasi.go.id/"]
    ],
    overviewStats: [
      ["Length", "9 days / 8 nights"],
      ["Trip type", "High-quality DIY"],
      ["Summary", "Experience, rest, culture"],
      ["Region", "Bali + East Java + Yogyakarta"]
    ],
    flightData: {
      depart: {
        summary: "Direct from Taipei to Bali on China Airlines.",
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
          "Nonstop.",
          "Lands in the afternoon; go straight to the hotel.",
          "Check in online and sort the documents the night before."
        ]
      },
      return: {
        summary: "The return has two legs: Yogyakarta to Jakarta, then China Airlines back to Taipei. Leave enough connection time.",
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
          "The international leg back to Taipei is CI762 from Jakarta.",
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
        note: "A beach resort, about five minutes on foot from Seminyak Beach.",
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
        note: "These nights are arranged by JVTO. The stays below are the sample plan on its public tour page, for reference only.",
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
        note: "A boutique hotel in a colonial-era house, for one night after the volcano days.",
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
        note: "In central Malioboro, for the temple day and the night before the flight.",
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
      ["Seminyak Beach", "Seminyak Beach Bali", "Sunset beach on Day 1."],
      ["Seminyak hotel", "Courtyard by Marriott Bali Seminyak Resort", "Main base for the first two nights."],
      ["Ijen Crater", "Ijen Crater East Java", "Day 4: blue fire and the crater lake."],
      ["Tumpak Sewu", "Tumpak Sewu Waterfall", "Day 5 waterfall."],
      ["Mount Bromo", "Mount Bromo", "Day 6 sunrise."],
      ["Malang hotel", "The Shalimar Boutique Hotel Malang", "Day 6 stay."],
      ["Yogyakarta hotel", "Aveta Hotel Malioboro Yogyakarta", "Day 7 and 8 stay."],
      ["YIA airport", "Yogyakarta International Airport", "Return airport."]
    ],
    itinerary: [
      ["Day 1", "Arrive in Seminyak", "Land in the afternoon, check in, walk to the beach for sunset, then dinner, a look around the shops and a massage.", ["Airport arrival", "Sunset", "Beach club", "Spa"], [["Arrival", "14:35 at DPS (Ngurah Rai International Airport)."], ["Immigration", "15:05 to clear arrival formalities and collect luggage."], ["Transfer", "15:15 Grab to the hotel, with arrival around 15:45 at Courtyard by Marriott Bali Seminyak Resort."], ["Check-in", "16:00 check-in, then change into lighter resort clothes."], ["Hotel break", "16:00–17:30 for the pool, the pool bar or a rest in the room."], ["Sunset", "17:30–18:30 at Seminyak Beach, with sunset around 18:05 in mid-June."], ["Dinner", "18:30–20:00 at Potato Head Beach Club for dinner, drinks, and the evening sea view."], ["Seminyak walk", "20:00–21:30 around The Flea Market and Kayu Aya Street for dresses, woven bags, scent, swimwear, and resort pieces."], ["Spa", "21:30–23:00 at Ssamaya Balinese Spa, with either a 60-minute Balinese Massage or a 90-minute Aromatherapy Massage."], ["Sleep by", "Back at the hotel by 23:00. Keep the first day light and save energy for the volcano stretch."]]],
      ["Day 2", "Free day in Seminyak", "Nothing fixed today: sleep in, then a beach club, a massage, a walk and meals.", ["Seminyak", "Beach club", "Nothing fixed"], [["Wake-up", "Around 08:30, or later."], ["Leave by", "If brunch or a beach club is on the plan, leave around 10:00."], ["Meet-up", "No fixed meet-up today. Keep it flexible."], ["Sleep by", "Sleep by 23:00; tomorrow is a transfer day."], ["Style", "A resort day: sleep later, take your time over meals, stay in one place."], ["Reminder", "The sun is strong, and this is also a good day to pick up any last small items for the volcano stretch."]]],
      ["Day 3", "Bali to East Java", "JVTO pickup at the hotel in the morning, drive to the port, ferry to East Java, Ijen health check in the afternoon, early night.", ["Tour transfer", "Ferry to Java", "Cross-island move"], [["Wake-up", "08:00, and 08:30 at the latest. Daytime timing here is still the same as Taiwan."], ["Leave by", "Have breakfast and luggage ready by 09:45 so you can wait outside in time."], ["Meet-up", "Meet the JVTO driver at 10:00, and aim to be in the hotel lobby by 09:50."], ["Sleep by", "Sleep by 19:30; the wake-up is before midnight."], ["Key check", "Before leaving Bali, reconfirm the pickup, the route order and the final drop-off."], ["Bag setup", "Keep water, snacks, power bank, and key documents within easy reach. You will keep using them on the road."]]],
      ["Day 4", "Ijen blue fire and crater lake", "Leave after midnight, start the Ijen hike around 2 a.m., see the blue fire first and the crater lake after sunrise. Papuma Beach for sunset in the afternoon.", ["Blue fire", "Night hike", "Crater lake"], [["Wake-up", "23:45 local time, which is 00:45 in Taiwan time."], ["Leave by", "Finish check-out and get ready by 00:20 so the 00:30 departure stays on time."], ["Meet-up", "Gather at the hotel entrance or lobby by 00:20."], ["Sleep by", "Sleep by 20:30 the night before."], ["Highlight", "Blue fire first, then the crater lake once it is light."], ["Gear", "Bring a headlamp, grip shoes, a light jacket and a mask."]]],
      ["Day 5", "Down into Tumpak Sewu", "The hardest day on the legs. A slippery trail down to the foot of the waterfall, then a four-hour drive to Bromo in the afternoon.", ["Waterfall canyon", "Slippery terrain", "Change of clothes"], [["Wake-up", "02:45 local time, which is 03:45 in Taiwan time."], ["Leave by", "Pack up by 03:20 so you can get straight into the 03:30 departure."], ["Meet-up", "Meet outside the stay by 03:20."], ["Sleep by", "Sleep by 20:30 the night before; this is one of the most physical days."], ["Terrain", "Wet, steep and tiring."], ["Pack note", "Bring a change of clothes, dry bags and phone protection."]]],
      ["Day 6", "Bromo sunrise", "A 2 a.m. Jeep up the mountain for sunrise. It is cold and dusty. Breakfast back at the hotel, then the drive to Surabaya in the afternoon.", ["Jeep ride", "Dawn views", "Last volcano"], [["Wake-up", "01:15 local time, which is 02:15 in Taiwan time."], ["Leave by", "Have warm layers on and be ready by 01:50 for the 02:00 Jeep."], ["Meet-up", "Meet outside the hotel by 01:50 to avoid rushing for the Jeep."], ["Sleep by", "Sleep by 19:30 the night before."], ["Highlight", "Stars first, then the sunrise over the caldera."], ["Reminder", "It is cold before dawn, and windy and dusty. Bring a mask or buff."]]],
      ["Day 7", "Train to Yogyakarta", "Take the Argo Semeru to Yogyakarta and rest on board. No early start today.", ["Train day", "VIP lounge", "To Yogyakarta"], [["Wake-up", "07:00 local time, or 08:00 in Taiwan time."], ["Leave by", "Leave the hotel at 08:00, which leaves time for the VIP lounge."], ["Meet-up", "No separate meet-up today. Head to the station from the hotel at 08:00."], ["Sleep by", "Try to rest by 22:30 because the temple day starts early tomorrow."], ["Pacing", "A rest day."], ["Transport", "Get to the station on time; the rest of the day is for resting."]]],
      ["Day 8", "Temple day", "A Klook day tour: Borobudur in the morning with the climb and a guide, Prambanan in the afternoon.", ["Borobudur", "Prambanan", "Climb + guide"], [["Wake-up", "05:15 local time, or 06:15 in Taiwan time."], ["Leave by", "Be in the lobby by 06:20 so you are ready if the pickup comes early within the 06:30 to 07:30 window."], ["Meet-up", "Meet in the hotel lobby at 06:20."], ["Sleep by", "Try to sleep by 22:00 the night before because this is still a full walking day."], ["Culture note", "Borobudur is Buddhist and built in stone terraces; Prambanan is Hindu, with tall spires."], ["Clothing note", "It will be hot and there is plenty of walking, so keep clothes light and do not skip water or sun protection."]]],
      ["Day 9", "Flying home", "Airport train to YIA at dawn, a flight to Jakarta, then the connection to Taipei. Pack the night before.", ["Early transfer", "Airport link", "Fly home"], [["Wake-up", "04:40 local time to pack and get moving, or 05:40 in Taiwan time."], ["Leave by", "Leave the hotel at 05:25. Better early than late."], ["Meet-up", "No fixed meet-up today. Just be ready to leave the hotel at 05:25."], ["Sleep by", "Try to rest by 21:30 the night before because the return day starts very early."], ["Timing", "No sightseeing today; just make each connection."], ["Last check", "Before you leave, check passport, phone, chargers, adapters, and souvenirs one more time. "]]]
    ],
    budgetLabels: {
      flight: ["Flights", "China Airlines round trip"],
      hotel: ["Hotels", "Seminyak, Malang, Yogyakarta"],
      volcanoDeposit: ["Volcano deposit", "Ijen / Sewu / Bromo tour deposit"],
      volcanoBalance: ["Volcano balance", "Remaining 80% paid on 2026-05-30; actual charged amount Rp8,433,700, about NT$14,838"],
      templeTour: ["Temple tour", "Borobudur + Prambanan"],
      train: ["Train", "Malang → Yogyakarta"],
      dailySpend: ["Daily spend", "Food, massage, incidentals"]
    },
    visaPoints: [
      ["30-day tourist option", "Indonesia's official eVisa FAQ shows a common 30-day tourist stay, extendable once, with a fee of IDR 500,000."],
      ["Taiwan passport holders", "As of 2026-04-04, Taiwan appears on the official Indonesia eVisa / e-VOA eligible passport list, so a Taiwan passport is eligible for e-VOA / VOA."],
      ["Core documents", "Passport valid for at least 6 months, onward ticket, and enough funds."],
      ["Best move", "Apply in advance."]
    ],
    arrivalPoints: [
      ["Bali tourist levy", "Foreign visitors to Bali pay a one-time levy of Rp150,000, online or on arrival."],
      ["Keep proof", "Love Bali provides a QR code payment proof worth saving."],
      ["Separate from visa fee", "This is not the same as your visa cost."],
      ["Final check", "Re-check the official eVisa and Love Bali sites close to June 13, 2026."]
    ]
  },
  id: {
    heroKicker: "Catatan perjalanan Indonesia",
    heroTitle: "Bali × Jawa",
    heroSubtitle: "Dua hari di pantai Bali, gunung api dan air terjun di Jawa Timur, lalu candi di Yogyakarta",
    heroDates: "2026 / 06 / 13 - 2026 / 06 / 21",
    heroDestinations: "Seminyak • Ijen • Tumpak Sewu • Bromo • Malang • Yogyakarta",
    heroIntro:
      "Sembilan hari, delapan malam. Dua malam di Seminyak, lalu ikut tur menyeberang ke Jawa Timur dengan tiga kali berangkat dini hari untuk Ijen, Tumpak Sewu, dan Bromo, kemudian naik kereta ke Yogyakarta untuk Borobudur dan Prambanan.",
    heroSignals: ["Dua hari di pantai", "Hiking gunung api", "Berangkat dini hari", "Transfer panjang", "Jaket hangat wajib"],
    heroFacts: [
      ["Durasi", "9 hari / 8 malam"],
      ["Nuansa trip", "Pantai × gunung api × candi"],
      ["Barang penting", "Sepatu grip, layer hangat, air minum"]
    ],
    heroPrimaryCta: "Buka rencana harian",
    heroSecondaryCta: "Lihat info penting",
    footerCopy: "Buku panduan perjalanan Bali dan Jawa, Juni 2026.",
    navOverview: "Ringkasan",
    navFlights: "Penerbangan",
    navTrain: "Kereta",
    navTours: "Tur",
    navStay: "Hotel",
    navLinks: "Tautan",
    navInfo: "Info",
    navItinerary: "Rencana",
    navMap: "Peta",
    navBudget: "Biaya",
    navVisa: "Visa",
    navMore: "Lainnya",
    navMoreTitle: "Informasi perjalanan lainnya",
    languageLabel: "Bahasa tampilan",
    travelModeLabel: "Mode Perjalanan",
    travelModeTitle: "Mulai dari hal penting hari ini",
    travelModeLead: "Pilih hari perjalanan untuk melihat waktu bangun, berangkat, berkumpul, dan tidur sekaligus, termasuk hal yang masih perlu dikonfirmasi.",
    travelDayLabel: "Pilih hari",
    travelOpenDay: "Buka panduan lengkap",
    travelOpenMap: "Buka peta hari ini",
    travelOpenStay: "Lihat penginapan",
    travelOpenInfo: "Lihat informasi praktis",
    travelOfflineNote: "Setelah kunjungan online pertama, isi utama panduan dapat dibaca offline. Google Maps dan situs luar tetap memerlukan internet.",
    travelAlertLabel: "Konfirmasi sebelum berangkat",
    travelAlertText: "JVTO menuliskan drop-off Surabaya pada 18 Juni, sedangkan rencana menginap Day 6 dan kereta Day 7 memakai Malang. Konfirmasi titik akhir sebelum mengecek stasiun dan tiket.",
    dayJumpLabel: "Pindah hari cepat",
    dayExpandLabel: "Buka panduan lengkap",
    dayCollapseLabel: "Tutup panduan lengkap",
    overviewLabel: "Ringkasan perjalanan",
    overviewTitle: "Dua hari di Bali, empat hari di Jawa Timur, tiga hari di Yogyakarta",
    overviewLead: "Istirahat dulu di Bali. Bagian tengah, gunung api dan air terjun, adalah yang paling berat. Terakhir candi di Yogyakarta.",
    snapshotLabel: "Ringkasan cepat",
    snapshotTitle: "Tenaga, perlengkapan, dan perpindahan",
    snapshotLead:
      "Ada tiga kali berangkat dini hari, dua transfer panjang, dan pendakian gunung api. Cek dulu hari mana yang paling berat.",
    snapshotChips: ["Bali + Jawa", "3 pagi gunung api / air terjun", "2 transfer utama", "Sepatu grip dan jaket hangat penting", "Sisakan ruang untuk cuaca dan kondisi perut"],
    snapshotCards: [
      {
        label: "Area utama",
        value: "Bali / Jawa Timur / Yogyakarta",
        note: "Urutannya: Seminyak, Ijen, Tumpak Sewu, Bromo, Malang, Yogyakarta."
      },
      {
        label: "Tema perjalanan",
        value: "Pulau, gunung api, sunrise, budaya",
        note: "Istirahat dulu, gunung api di tengah, candi di akhir."
      },
      {
        label: "Ritme tenaga",
        value: "Sedang sampai cukup berat",
        note: "Hari 4 sampai Hari 6 adalah segmen paling berat, terutama karena berangkat tengah malam atau sebelum subuh."
      },
      {
        label: "Seberapa pagi",
        value: "3 hari bangun serius",
        note: "Ijen, Sewu, dan Bromo semuanya berangkat sangat pagi. Tidur lebih awal malam sebelumnya."
      },
      {
        label: "Transportasi utama",
        value: "Pesawat, mobil, ferry, Jeep, kereta",
        note: "Waktu perpindahannya panjang dan perlu dihitung dalam rencana."
      },
      {
        label: "Ritme menginap",
        value: "Santai resort → recovery singkat → penutup kota",
        note: "Penginapan di hari gunung api diatur oleh tur."
      },
      {
        label: "Perlengkapan penting",
        value: "Sepatu grip, layer hangat, pelindung hujan",
        note: "Di hari gunung api dan air terjun, pakai sepatu grip dan bawa jaket serta perlengkapan tahan air."
      },
      {
        label: "Yang perlu dijaga",
        value: "Air minum, macet, perut, dingin pagi",
        note: "Makan lebih ringan sebelum hari gunung api, simpan air dekat tangan, dan anggap pagi di gunung memang dingin."
      }
    ],
    highlightsLabel: "Sorotan perjalanan",
    highlightsTitle: "Perhentian utama",
    highlightsLead:
      "Enam bagian, urut tanggal.",
    journeyHighlights: [
      {
        kicker: "13/06 - 14/06｜Bali",
        title: "Dua hari di Seminyak",
        desc: "Tidur cukup, ke pantai, dan pijat. Tidak ke tempat yang jauh; simpan tenaga untuk gunung api.",
        tags: ["Hari pulau", "Ritme resort", "Seminyak"]
      },
      {
        kicker: "15/06｜Hari transfer",
        title: "Menyeberang ke Jawa Timur",
        desc: "Dijemput di Bali pagi hari, lalu jalan darat dan feri ke Jawa Timur, dengan pemeriksaan kesehatan Ijen pada sore hari.",
        tags: ["Transfer jauh", "Penjemputan tour", "Feri ke Jawa"]
      },
      {
        kicker: "16/06｜Ijen",
        title: "Mendaki Ijen malam hari untuk blue fire",
        desc: "Pendakian mulai sekitar pukul 02.00. Blue fire sebelum fajar, danau kawah setelah matahari terbit. Dingin dan berbau belerang.",
        tags: ["Berangkat dini hari", "Blue fire", "Hiking gunung api"]
      },
      {
        kicker: "17/06 - 18/06｜Sewu + Bromo",
        title: "Tumpak Sewu dan matahari terbit di Bromo",
        desc: "Satu hari turun ke dasar air terjun, lalu besok dini hari naik Jeep ke Bromo. Dua hari ini paling melelahkan.",
        tags: ["Segmen berat", "Hari air terjun", "Dataran fajar"]
      },
      {
        kicker: "19/06｜Hari kereta",
        title: "Kereta ke Yogyakarta",
        desc: "Hari-hari gunung api selesai. Naik Argo Semeru ke Yogyakarta dan istirahat di kereta.",
        tags: ["Hari recovery", "Suite kereta", "Reset kota"]
      },
      {
        kicker: "20/06 - 21/06｜Yogyakarta",
        title: "Borobudur dan Prambanan",
        desc: "Dua candi dengan tur sehari Klook, lalu berangkat pagi-pagi ke bandara keesokan harinya.",
        tags: ["Hari budaya", "Jalur candi", "Penutup tenang"]
      }
    ],
    previewLabel: "Preview harian",
    previewTitle: "Kartu cerita per hari",
    previewLead:
      "Tujuan tiap hari dan seberapa melelahkan. Buka harinya untuk jam yang lebih rinci.",
    practicalLabel: "Info praktis",
    practicalTitle: "Informasi praktis",
    practicalLead:
      "Penerbangan, transfer, persiapan gunung api, pakaian, makanan, dan catatan soal perut.",
    practicalSections: [
      {
        title: "Penerbangan dan alur bandara",
        intro: "Berangkat langsung, pulang dengan satu kali transit.",
        chips: ["Pergi langsung", "Pulang dua segmen", "Datang lebih awal"],
        items: [
          ["Struktur pergi", "Taipei ke Bali penerbangan langsung, tiba sore hari."],
          ["Struktur pulang", "Yogyakarta ke Jakarta adalah segmen penghubung; Jakarta ke Taipei adalah segmen internasional."],
          ["Yang disimpan bersama", "Alamat hotel, bukti visa, transport bandara, dan screenshot pemesanan sebaiknya ada di satu folder HP."]
        ]
      },
      {
        title: "Pindah kota",
        intro: "Ada dua transfer panjang dalam perjalanan ini.",
        chips: ["Mobil", "Ferry", "Jeep", "Kereta"],
        items: [
          ["Urutan gunung api", "Urutannya Ijen → Tumpak Sewu → Bromo."],
          ["Hari berkendara jauh", "Jangan menambah acara lain di hari berkendara jauh."],
          ["Buffer bandara", "Naik kereta bandara YIA yang pagi, jangan terlalu mepet."]
        ]
      },
      {
        title: "Tempat tidur tiap malam",
        intro: "Resor di awal, penginapan dari tur di hari gunung api, hotel kota di akhir.",
        chips: ["Seminyak", "Segmen gunung api", "Malang", "Yogyakarta"],
        items: [
          ["Awal di Bali", "Resor di Seminyak punya kolam renang dan dekat ke pantai dengan jalan kaki."],
          ["Malam gunung api", "Penginapan sederhana untuk tidur beberapa jam sebelum berangkat dini hari."],
          ["Hotel kota", "Di Malang dan Yogyakarta hotelnya di pusat kota, mudah untuk istirahat dan transportasi."]
        ]
      },
      {
        title: "Pengingat hiking gunung api",
        intro: "Siapkan perlengkapan malam sebelumnya.",
        chips: ["Dini hari", "Layer hangat", "Sepatu grip", "Air minum"],
        items: [
          ["Cek malam sebelumnya", "Susun jaket, air, power bank, masker, uang tunai, dan HP yang sudah diisi daya sebelum tidur."],
          ["Faktor dingin", "Ijen dan Bromo dingin sebelum matahari terbit. Beberapa lapis tipis lebih baik daripada satu jaket tebal."],
          ["Kondisi pijakan", "Debu, batu kecil, tanjakan, dan kadang tanah basah adalah hal normal. Pakai sepatu yang tidak licin."]
        ]
      },
      {
        title: "Pakaian dan perlengkapan harian",
        intro: "Pakaian untuk tiap jenis hari.",
        chips: ["Hari pulau", "Hari kota", "Hari gunung api", "Hari transfer"],
        items: [
          ["Hari pulau", "Pakaian adem, sun protection, kacamata hitam, dan sandal atau sepatu santai sudah cukup."],
          ["Hari kota", "Sepatu enak jalan, pakaian ringan, dan jaket tipis."],
          ["Hari gunung api", "Bawa celana panjang, layer hangat, sepatu grip, pelindung angin, dan perlindungan sederhana dari hujan atau debu."],
          ["Hari transfer", "Pakaian nyaman, jaket tipis, obat perut, dan snack."]
        ]
      },
      {
        title: "Makan dan bekal kecil",
        intro: "Makan yang ringan di sekitar hari gunung api.",
        chips: ["Air minum", "Snack ringan", "Makan malam ringan"],
        items: [
          ["Sebelum hari gunung api", "Hindari makanan berminyak atau pedas malam sebelumnya."],
          ["Saat pindah jauh", "Simpan air, minuman elektrolit, atau snack kecil di tempat yang paling mudah dijangkau."],
          ["Kalau perut sensitif", "Tidak harus makan menu yang sama dengan yang lain setiap kali."]
        ]
      },
      {
        title: "Pembayaran dan internet",
        intro: "Kartu cukup berguna di banyak tempat, tetapi uang tunai tetap berguna untuk makan kecil, transport cepat, dan pembayaran lokal sederhana.",
        chips: ["Gojek", "eSIM", "Uang tunai seperlunya"],
        items: [
          ["Internet", "Pasang eSIM sebelum berangkat dari Taiwan supaya internet langsung aktif saat mendarat."],
          ["Aplikasi transport", "Pakai Gojek, dan bandingkan harga dengan Grab."],
          ["Strategi uang tunai", "Tidak perlu langsung menukar terlalu banyak. Mulai dari jumlah kecil yang praktis biasanya cukup."]
        ]
      },
      {
        title: "Kesehatan dan keamanan",
        intro: "Beberapa hal yang perlu diperhatikan.",
        chips: ["Bali Belly", "Matahari", "Macet", "Fleksibel"],
        items: [
          ["Air dan perut", "Air botolan adalah pilihan paling mudah. Hati-hati dengan es, makanan mentah, dan seafood setengah matang."],
          ["Macet", "Macet Bali sering lebih parah dari perkiraan peta, jadi waktu buffer benar-benar penting."],
          ["Kalau lelah", "Kalau satu hari terasa terlalu berat, lewati satu tempat."]
        ]
      }
    ],
    previewCta: "Buka panduan hari ini",
    dayGuideTimingLabel: "Waktu penting",
    dayGuideAtGlanceLabel: "Gambaran cepat",
    dayGuideFlowLabel: "Alur hari ini",
    dayGuideDetailLabel: "Waktu dan ritme",
    dayGuideReminderLabel: "Pengingat khusus",
    dayGuideLinksLabel: "Tautan berguna",
    dayStatuses: [
      "Rencana saran | sesuaikan tenaga",
      "Rencana fleksibel",
      "Jemputan dipesan | detail menyusul",
      "Paket JVTO | ikuti info pemandu",
      "Paket JVTO | ikuti info pemandu",
      "Paket JVTO | drop-off belum pasti",
      "Hari kereta | cek tiket",
      "Tur Klook | jemputan menyusul",
      "Hari terbang | cek e-ticket"
    ],
    coverLabel: "Narasi perjalanan",
    coverTitle: "Susunan harinya",
    coverLead:
      "Dua hari istirahat di Seminyak, lalu tiga kali berangkat dini hari untuk gunung api dan air terjun, kemudian Yogyakarta untuk candi dan kota.",
    coverPoints: [
      ["Awal", "Dua hari di Seminyak jangan dipadati: tidur cukup dan makan enak."],
      ["Tengah", "Ijen, Sewu, dan Bromo tiga hari berturut-turut, semuanya berangkat dini hari."],
      ["Akhir", "Di Yogyakarta tidak ada lagi berangkat dini hari: satu hari candi, sisanya di kota."]
    ],
    volcanoCaption: "Fajar Bromo",
    volcanoCredit: "Photo by Arya Krisdyantara / Unsplash",
    beachCaption: "Laut Bali",
    beachCredit: "Photo by Santhosh Mocharla / Unsplash",
    routeLabel: "Penerbangan dan rute",
    routeTitle: "Penerbangan dan rute",
    routeLead: "Penerbangan, bagasi, dan perpindahan utama. Cek sebelum berangkat dan sebelum pulang.",
    departTag: "Pergi",
    departTitle: "Taipei ke Bali",
    returnTag: "Pulang",
    returnTitle: "Yogyakarta ke Taipei via Jakarta",
    tripFlowLabel: "Urutan",
    tripFlowValue: "Taipei → Bali → Ijen → Sewu → Bromo → Malang → Yogyakarta",
    flightHighlights: [
      ["Struktur pergi", "CI771 langsung ke DPS dengan China Airlines"],
      ["Struktur pulang", "Segmen feeder CI9761 + CI762 kembali ke Taipei"],
      ["Bagasi", "23kg ×2 saat pergi, 23kg ×1 saat pulang"]
    ],
    flightNotes: [
      ["Catatan berangkat", "Untuk penerbangan internasional, datang lebih awal. Siapkan paspor, e-ticket, dan bukti pembayaran sejak malam sebelumnya."],
      ["Catatan transit", "Segmen internasional utama adalah CI762. Bagian YIA → CGK adalah feeder segment, dan maskapai operasionalnya tetap perlu dicek lagi di tiket final dan layar bandara."],
      ["Tidak ditampilkan", "Kode booking tidak ditampilkan di halaman ini."]
    ],
    trainLabel: "Bab kereta",
    trainTitle: "Transfer kereta",
    trainLead:
      "Hari ke-7 naik Argo Semeru ke Yogyakarta. Berikut kelas dan cara membeli tiketnya.",
    trainHighlights: [
      ["Peran hari ini", "Hari ke-7: naik kereta sambil istirahat"],
      ["Kelas tertinggi", "Compartment Suites dengan 16 kabin privat"],
      ["Kisaran harga", "Sekitar Rp2.050.000 - Rp2.250.000"]
    ],
    trainCoverCaption: "Eksterior Argo Semeru",
    trainCoverCredit: "Foto via Journey.tw",
    trainSuiteCaption: "Kabin privat Compartment Suites",
    trainSuiteCredit: "Foto via Journey.tw",
    trainSummary:
      "Kelas tertinggi Argo Semeru adalah Compartment Suites. Menurut ringkasan Journey.tw, ada 16 kabin privat dengan susunan 1-1, dan kursinya bisa diputar serta direbahkan hampir rata.",
    trainFacts: [
      ["Pemakaian ideal", "Hari transfer Jawa Timur menuju Yogyakarta"],
      ["Kelas tertinggi", "Compartment Suites"],
      ["Tata letak", "16 kabin privat, 1 orang per ruang"],
      ["Fitur kursi", "Bisa diputar dan direbahkan hampir rata"],
      ["Harga acuan", "Sekitar Rp2.050.000 - Rp2.250.000"]
    ],
    trainNotes: [
      "Kesempatan untuk tidur setelah hari-hari gunung api.",
      "Pilih kelas tertinggi kalau ingin berbaring.",
      "Harga dan ketersediaan masih bisa berubah, jadi tetap cek lagi mendekati hari berangkat."
    ],
    trainBuyTitle: "Cara beli tiket",
    trainBuyLead: "Langkah pemesanan.",
    trainBuySteps: [
      ["Langkah 1", "Pastikan dulu stasiun berangkat dan stasiun tujuan untuk Hari ke-7."],
      ["Langkah 2", "Pilih Argo Semeru, lalu Compartment Suites kalau ingin kabin privat."],
      ["Langkah 3", "Journey.tw menyebut tiket bisa dicari lewat tiket.com, lalu alur ambil tiket mandiri di stasiun juga perlu diperhitungkan."],
      ["Langkah 4", "Kalau bisa, pesan lebih awal karena kelas ini hanya punya 16 kabin privat."]
    ],
    trainLinks: [
      ["Artikel kereta Journey.tw", "https://journey.tw/ka-argo-semeru/"],
      ["Pemesanan kereta tiket.com", "https://www.tiket.com/kereta-api"]
    ],
    toursLabel: "Bab tur",
    toursTitle: "Tur paket",
    toursLead: "Dua tur yang dipesan untuk perjalanan ini, beserta isi, biaya, dan link.",
    tourLinkLabel: "Lihat detail",
    toursList: [
      {
        dates: "4H3M",
        area: "Tur gunung api sudah dipesan",
        hotel: "Ijen • Papuma • Tumpak Sewu • Bromo",
        localName: "Java Volcano Tour Operator",
        stars: "Tengah",
        image: "./assets/tours/jvto-volcano-tour.jpg",
        note: "Bagian paling berat dari perjalanan ini: blue fire, air terjun, dan sunrise gunung api dalam tiga hari berturut-turut.",
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
        hotel: "Borobudur naik candi + tur berpemandu + Prambanan",
        localName: "Tur Klook Borobudur dan Prambanan",
        stars: "Hari budaya",
        image: "./assets/tours/klook-borobudur-prambanan.webp",
        note: "Ini tur yang dipesan untuk Hari ke-8: Borobudur dengan naik candi dan pemandu, lalu Prambanan.",
        details: [
          "Borobudur naik candi dengan panduan",
          "Kunjungan ke Candi Prambanan",
          "Dijadwalkan untuk Hari ke-8"
        ],
        url: "https://s.klook.com/c/4yVrZ02036",
        linkLabel: "Halaman Klook",
        extraLinks: []
      }
    ],
    stayLabel: "Rencana menginap",
    stayTitle: "Rencana menginap",
    stayLead: "Empat tempat menginap. Setiap hotel diberi link Google Maps.",
    stayMapLabel: "Google Maps",
    stayTourLabel: "Halaman tour",
    linksLabel: "Tautan resmi",
    linksTitle: "Tautan resmi",
    linksLead: "Situs yang sering dipakai.",
    resourceLinkCta: "Buka situs",
    linksHighlights: [
      ["Penginapan", "Situs resmi dan peta untuk tiga segmen menginap"],
      ["Transportasi", "Tour gunung api, kereta, dan kereta bandara"],
      ["Masuk", "eVisa, Love Bali, dan All Indonesia"]
    ],
    infoLabel: "Info praktis",
    infoTitle: "Info praktis Indonesia",
    infoLead: "Langkah masuk, uang, aplikasi, zona waktu, dan catatan lokal.",
    infoPanelOneTitle: "Sebelum berangkat dan info dasar",
    infoPanelTwoTitle: "Pengingat saat di perjalanan",
    infoCostsLabel: "Catatan biaya",
    infoCostsTitle: "Biaya yang sudah diketahui",
    infoCostsLead: "Angka yang sudah tercatat sejauh ini. Makan, taksi, dan belanja belum dimasukkan.",
    infoHighlights: [
      ["Urutan persiapan", "Folder bersama → eVisa → levy Bali → All Indonesia"],
      ["Gaya bayar", "Tempat formal bisa pakai kartu, jadi uang tunai tidak perlu terlalu banyak"],
      ["Aplikasi penting", "Pasang Gojek, dan bandingkan harga dengan Grab"],
      ["Zona waktu", "Bali sama dengan Taiwan; Jakarta dan Yogyakarta lebih lambat 1 jam"]
    ],
    infoChecklist: [
      ["Langkah 1", "Kumpulkan scan paspor, tiket, hotel, visa, dan QR code di folder cloud bersama sebelum berangkat."],
      ["Langkah 2", "Urus eVisa / e-VOA Indonesia dulu. Biaya resminya Rp500.000, umumnya untuk tinggal 30 hari dalam masa berlaku 90 hari, dan bisa diperpanjang sekali."],
      ["Langkah 3", "Lalu bayar levy wisata Bali Rp150.000. Biaya ini berlaku setiap kali masuk ke Bali, baik datang langsung maupun transit lewat kota lain di Indonesia."],
      ["Langkah 4", "Dalam 3 hari sebelum tiba, isi All Indonesia untuk imigrasi, bea cukai, dan deklarasi kesehatan."],
      ["Langkah 5", "Cek apakah hair dryer dan alat berdaya besar mendukung 220V / 50Hz, dan pasang eSIM sebelum berangkat dari Taiwan."],
      ["Langkah 6", "Kalau ada segmen maskapai Korea, power bank harus menampilkan Wh dan sebaiknya disimpan aman dalam zip bag atau dibuat terisolasi."]
    ],
    infoBasics: [
      ["Folder bersama", "Semua file persiapan bisa disimpan di satu folder SharePoint supaya lebih mudah dibuka dari HP maupun laptop."],
      ["Catatan eVisa", "Dalam uji coba terbaru, email persetujuan masuk sekitar satu menit setelah pengajuan, tetapi tetap lebih aman kalau diurus lebih awal."],
      ["Rencana eSIM", "Rencana saat ini adalah membeli eSIM di Shopee dan memasangnya sebelum berangkat supaya internet langsung aktif saat mendarat."],
      ["Hitung uang cepat", "Catatan planning memakai perkiraan kasar Rp1.000 ≈ NT$1,87. Shortcut mudahnya adalah buang tiga nol terakhir lalu kali 2, atau bagi sekitar 500 sampai 530."],
      ["Tukar uang", "Kalau perlu tukar uang di Indonesia, jaringan resmi seperti PT Valasindo Valuta (PVG) biasanya lebih aman daripada counter kecil di pinggir jalan."],
      ["Rencana uang tunai", "Asumsinya tetap sama: bawa uang tunai secukupnya saja, lalu pakai kartu untuk tempat yang lebih formal."],
      ["Aplikasi berguna", "Gojek bisa didaftarkan dengan nomor Taiwan dan berguna untuk transportasi, pesan makanan, serta top-up GoPay. Grab tetap bagus untuk banding harga."],
      ["Zona waktu", "WIB lebih lambat 1 jam dari Taiwan, WITA sama dengan Taiwan, dan WIT lebih cepat 1 jam. Bali memakai WITA; Jakarta dan Yogyakarta memakai WIB."],
      ["Tip", "Indonesia umumnya tidak punya budaya tip yang wajib."]
    ],
    infoTips: [
      ["Bali Belly", "Hindari air keran, dan kalau bisa pakai air botolan juga untuk sikat gigi atau mencuci buah. Es, salad, dan seafood mentah sebaiknya lebih hati-hati."],
      ["Zona No Online Taxi", "Beberapa area di Bali masih membatasi transportasi online. Bluebird atau berjalan sebentar ke titik jemput yang diizinkan bisa membantu."],
      ["Macet", "Macet Bali bisa membuat perjalanan pendek jadi panjang, jadi 25 menit bisa berubah jadi 45 menit, dan 45 menit bisa menjadi 2 jam."],
      ["Borobudur", "Borobudur tutup setiap Senin, dan tiket perlu dicek baik-baik karena akses naik ke atas dan tanpa naik itu berbeda."],
      ["Perlengkapan gunung dan air terjun", "Untuk segmen gunung api, siapkan jaket hangat, masker, pelindung mata, dan tas yang tahan debu. Untuk air terjun, bawa celana pendek, sepatu air, jaket tahan air, dan baju ganti."],
      ["Ukuran pakaian", "Ukuran pakaian lokal bisa 1 sampai 2 tingkat lebih kecil daripada ukuran Taiwan."],
      ["Pembayaran", "Catatan menyebut kartu kredit fisik, Line Pay, PX Pay, Taiwan Pay, dan Apple Pay, tetapi tetap lebih aman membawa sedikit uang tunai."]
    ],
    infoCosts: [
      ["Tiket pesawat", "NT$20.494 dengan China Airlines."],
      ["Hotel", "Sekitar NT$9.202 per orang, dengan pajak yang masih belum final."],
      ["Visa dan levy Bali", "Visa NT$941 ditambah levy Bali NT$280, total NT$1.221."],
      ["eSIM", "NT$469."],
      ["Kereta kabin KAI", "Total Rp2.614.500, dicatat sekitar NT$4.738 untuk 2 orang, atau sekitar NT$2.369 per orang. Sudah dibayar; gunakan catatan pribadi untuk rekonsiliasi."],
      ["Tur candi", "NT$2.610 untuk 2 orang, atau sekitar NT$1.305 per orang. Sudah dibayar; gunakan catatan pribadi untuk rekonsiliasi."],
      ["Tur gunung api 4 hari", "Deposit dicatat sekitar NT$3.994. Sisa 80% dibayar pada 2026/05/30 sebesar Rp8.433.700, sekitar NT$14.838; gunakan catatan pribadi untuk rekonsiliasi."],
      ["Yang masih harus ditambah", "Taksi, makan, oleh-oleh, camilan, pakaian, hasil tukar uang, dan parkir bandara masih belum dimasukkan."]
    ],
    transportTitle: "Transportasi dan waktu",
    packingTitle: "Pakaian dan keamanan",
    itineraryLabel: "Rencana harian",
    itineraryTitle: "Rencana harian",
    itineraryLead: "Jam bangun, jam berangkat, dan tujuan tiap hari.",
    itineraryHighlights: [
      ["Urutan", "Bali → gunung api dan air terjun Jawa Timur → Yogyakarta"],
      ["Tujuan utama", "Blue fire Ijen, Tumpak Sewu, sunrise Bromo"],
      ["Cara pakai halaman ini", "Lihat dulu jam bangun dan jam kumpul, lalu rencana dan pengingat hari itu"]
    ],
    dayFocusLabel: "Ritme hari ini",
    budgetLabel: "Ringkasan budget",
    budgetTitle: "Ringkasan budget",
    budgetLead: "Konversi IDR di bawah memakai kurs perkiraan NT$1 ≈ Rp531 dan hanya dipakai untuk planning.",
    paidTitle: "Sudah dibayar",
    openTitle: "Belum dibayar",
    totalBudgetLabel: "Total biaya",
    budgetRateNote: "Kurs perkiraan: NT$1 ≈ Rp531",
    dailyAverageLabel: "Rata-rata harian",
    budgetStyleNote: "Perjalanan mandiri ditambah dua tur lokal, hotel kelas menengah ke atas",
    budgetTableStatus: "Status",
    budgetTableItem: "Item",
    budgetTableDetail: "Detail",
    budgetTableAmount: "Nominal",
    budgetStatusPaid: "Sudah",
    budgetStatusOpen: "Belum",
    mapLabel: "Peta perjalanan",
    mapTitle: "Ringkasan peta",
    mapLead: "Hotel, titik utama, dan rute ke bandara.",
    mapRouteLink: "Lihat rute lengkap",
    mapDayLabel: "Rute Harian",
    mapDayRoutes: [
      ["Hari 1", "Tiba di Seminyak: sunset, makan malam, dan spa", DAY_ROUTE_URLS.day1],
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
    visaLead: "Langkah masuk. Urus berurutan dan simpan semua bukti di HP.",
    visaPanelTitle: "Visa wisata Indonesia",
    arrivalPanelTitle: "Tambahan saat tiba di Bali",
    visaLinkOne: "eVisa resmi Indonesia",
    visaLinkTwo: "Situs resmi Love Bali",
    visaLinkThree: "Sistem kedatangan All Indonesia",
    visaHighlights: [
      ["Langkah 1", "Urus eVisa / e-VOA dulu"],
      ["Langkah 2", "Bayar levy Bali Rp150.000"],
      ["Langkah 3", "Isi All Indonesia dalam 3 hari sebelum tiba"],
      ["Cek akhir", "Simpan QR code, paspor, dan tiket pulang di tempat yang sama"]
    ],
    visaTutorial: [
      ["Langkah 1", "Per 2026-04-04, daftar paspor yang memenuhi syarat pada halaman resmi eVisa / e-VOA Indonesia sudah mencantumkan Taiwan, jadi paspor Taiwan bisa memakai jalur e-VOA / VOA sebelum mulai mengajukan."],
      ["Langkah 2", "Siapkan paspor, tiket keluar, data hotel, dan kartu pembayaran. Masa berlaku paspor harus minimal 6 bulan."],
      ["Langkah 3", "Setelah pembayaran selesai, simpan bukti eVisa atau e-VOA di HP dan backup dengan screenshot. Persetujuan bisa datang cepat, tetapi tetap jangan menunggu sampai hari terakhir."],
      ["Langkah 4", "Masuk ke situs resmi Love Bali lalu bayar levy wisata Bali Rp150.000, lalu simpan QR code-nya juga."],
      ["Langkah 5", "Dalam 3 hari sebelum tiba, selesaikan deklarasi terintegrasi All Indonesia untuk imigrasi, bea cukai, dan skrining kesehatan."],
      ["Langkah 6", "Malam sebelum berangkat, taruh paspor, bukti visa, QR code Love Bali, data All Indonesia, dan detail tiket pulang di satu folder yang mudah dibuka."]
    ],
    resourceLinks: [
      ["Hotel Seminyak", "Situs resmi Courtyard by Marriott Bali Seminyak Resort", "https://www.marriott.com/en-us/hotels/dpssm-courtyard-bali-seminyak-resort/"],
      ["Hotel Malang", "Situs resmi The Shalimar Boutique Hotel", "https://theshalimarhotel.co.id/"],
      ["Hotel Yogyakarta", "Situs resmi Aveta Hotel Malioboro", "https://avetahotelmalioboro.com/"],
      ["Tour gunung api", "Halaman resmi Java Volcano Tour Operator", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
      ["Tur Borobudur", "Tur Klook Borobudur naik candi dan Prambanan", "https://s.klook.com/c/4yVrZ02036"],
      ["Panduan Argo Semeru", "Ulasan Journey.tw tentang kereta dan suite tertinggi", "https://journey.tw/ka-argo-semeru/"],
      ["Kereta bandara", "Halaman resmi pemesanan YIA Airport Rail Link", "https://reservation.railink.co.id/"],
      ["eVisa Indonesia", "Situs resmi pengajuan visa Indonesia", "https://evisa.imigrasi.go.id/"],
      ["Love Bali", "Situs resmi levy wisata Bali", "https://lovebali.baliprov.go.id/"],
      ["All Indonesia", "Sistem deklarasi kedatangan resmi", "https://allindonesia.imigrasi.go.id/"]
    ],
    overviewStats: [
      ["Durasi", "9 hari / 8 malam"],
      ["Jenis trip", "Mandiri berkualitas"],
      ["Ringkas", "Pengalaman, santai, budaya"],
      ["Area", "Bali + Jawa Timur + Yogyakarta"]
    ],
    flightData: {
      depart: {
        summary: "Langsung dari Taipei ke Bali dengan China Airlines.",
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
          "Tiba sore hari; langsung ke hotel.",
          "Check-in online dan rapikan dokumen malam sebelumnya."
        ]
      },
      return: {
        summary: "Pulang dua segmen: Yogyakarta ke Jakarta, lalu China Airlines ke Taipei. Sisakan waktu transit yang cukup.",
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
          "Segmen internasional ke Taipei adalah CI762 dari Jakarta.",
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
        note: "Resor tepi pantai, sekitar lima menit jalan kaki dari Seminyak Beach.",
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
        note: "Malam-malam ini diatur oleh JVTO. Berikut contoh akomodasi di halaman publik turnya, hanya sebagai acuan.",
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
        note: "Hotel butik di rumah era kolonial, untuk satu malam setelah hari-hari gunung api.",
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
        note: "Di pusat Malioboro, untuk hari candi dan malam sebelum pulang.",
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
      ["Pantai Seminyak", "Seminyak Beach Bali", "Pantai untuk sunset Hari 1."],
      ["Hotel Seminyak", "Courtyard by Marriott Bali Seminyak Resort", "Basis utama dua malam pertama."],
      ["Kawah Ijen", "Ijen Crater East Java", "Hari 4: blue fire dan danau kawah."],
      ["Tumpak Sewu", "Tumpak Sewu Waterfall", "Air terjun Hari 5."],
      ["Gunung Bromo", "Mount Bromo", "Sunrise Hari 6."],
      ["Hotel Malang", "The Shalimar Boutique Hotel Malang", "Menginap Hari 6."],
      ["Hotel Yogyakarta", "Aveta Hotel Malioboro Yogyakarta", "Menginap Hari 7 dan 8."],
      ["Bandara YIA", "Yogyakarta International Airport", "Bandara pulang."]
    ],
    itinerary: [
      ["Hari 1", "Tiba di Seminyak", "Mendarat sore, check-in, jalan kaki ke pantai untuk sunset, lalu makan malam, lihat-lihat toko, dan pijat.", ["Tiba di bandara", "Sunset", "Beach club", "Spa"], [["Tiba", "14.35 tiba di DPS (Ngurah Rai International Airport)."], ["Imigrasi", "Sekitar 15.05 selesai imigrasi dan ambil bagasi."], ["Naik kendaraan", "15.15 naik Grab ke hotel, lalu sekitar 15.45 tiba di Courtyard by Marriott Bali Seminyak Resort."], ["Check-in", "16.00 selesai check-in dan bisa langsung ganti ke pakaian liburan yang lebih ringan."], ["Istirahat hotel", "16.00–17.30 untuk kolam renang, pool bar, atau istirahat di kamar."], ["Sunset", "17.30–18.30 jalan sekitar 5 menit ke Seminyak Beach; sunset bulan Juni sekitar 18.05."], ["Makan malam", "18.30–20.00 di Potato Head Beach Club untuk makan malam, minum, dan suasana tepi laut."], ["Jalan malam", "20.00–21.30 bisa ke The Flea Market dan Kayu Aya Street untuk baju, tas anyaman, aroma, swimwear, dan barang resort."], ["Spa", "21.30–23.00 di Ssamaya Balinese Spa, bisa pilih 60 menit Balinese Massage atau 90 menit Aromatherapy Massage."], ["Tidur", "Sekitar 23.00 kembali ke hotel dan tidur. Hari pertama sebaiknya tetap ringan supaya tenaga tersimpan untuk segmen gunung api."]]],
      ["Hari 2", "Hari bebas di Seminyak", "Tidak ada acara tetap: bangun siang, lalu beach club, pijat, jalan-jalan, dan makan.", ["Seminyak", "Beach club", "Tanpa acara tetap"], [["Waktu bangun", "Sekitar pukul 08.30, atau lebih siang."], ["Waktu berangkat", "Kalau mau brunch atau beach club, berangkat sekitar pukul 10.00."], ["Waktu kumpul", "Hari ini tidak ada titik kumpul tetap. Jalani dengan fleksibel saja."], ["Paling lambat tidur", "Tidur sekitar pukul 23.00; besok hari transfer."], ["Gaya hari", "Hari resor: tidur lebih lama, makan santai, dan tinggal di satu tempat."], ["Pengingat", "Matahari cukup kuat, dan hari ini juga pas untuk membeli kebutuhan kecil sebelum masuk segmen gunung api."]]],
      ["Hari 3", "Bali ke Jawa Timur", "Pagi dijemput JVTO di hotel, ke pelabuhan, naik feri ke Jawa Timur, sore pemeriksaan kesehatan Ijen, lalu tidur lebih awal.", ["Transfer tour", "Feri ke Jawa", "Pindah pulau"], [["Waktu bangun", "Pukul 08.00, paling lambat 08.30. Siang hari ini masih sama dengan waktu Taiwan."], ["Waktu berangkat", "Selesaikan sarapan dan koper sebelum 09.45 supaya tinggal menunggu mobil."], ["Waktu kumpul", "Bertemu sopir JVTO pukul 10.00, dan paling aman sudah standby di lobi pukul 09.50."], ["Paling lambat tidur", "Tidur sekitar pukul 19.30; bangunnya sebelum tengah malam."], ["Cek penting", "Sebelum meninggalkan Bali, pastikan lagi penjemputan, urutan rute, dan titik drop terakhir."], ["Tas kecil", "Simpan air minum, snack, power bank, dan dokumen di tempat yang paling mudah diambil."]]],
      ["Hari 4", "Blue fire dan danau kawah Ijen", "Berangkat setelah tengah malam, mulai mendaki Ijen sekitar pukul 02.00, lihat blue fire dulu, lalu danau kawah setelah matahari terbit. Sore ke Pantai Papuma untuk sunset.", ["Blue fire", "Hiking malam", "Danau kawah"], [["Waktu bangun", "Bangun pukul 23.45 waktu lokal, atau 00.45 waktu Taiwan."], ["Waktu berangkat", "Selesaikan check-out dan siap naik mobil sebelum 00.20 supaya keberangkatan 00.30 tetap lancar."], ["Waktu kumpul", "Kumpul di pintu masuk hotel atau lobi sekitar pukul 00.20."], ["Paling lambat tidur", "Tidur sekitar pukul 20.30 malam sebelumnya."], ["Sorotan", "Blue fire dulu, lalu danau kawah saat sudah terang."], ["Perlengkapan", "Bawa headlamp, sepatu grip, jaket ringan, dan masker."]]],
      ["Hari 5", "Turun ke Tumpak Sewu", "Hari paling berat untuk kaki. Turun lewat jalur licin ke dasar air terjun, lalu sore naik mobil empat jam ke Bromo.", ["Lembah air terjun", "Medan licin", "Baju ganti"], [["Waktu bangun", "Bangun pukul 02.45 waktu lokal, atau 03.45 waktu Taiwan."], ["Waktu berangkat", "Rapikan barang sebelum 03.20 supaya bisa langsung masuk keberangkatan 03.30."], ["Waktu kumpul", "Kumpul di depan penginapan sekitar pukul 03.20."], ["Paling lambat tidur", "Tidur sekitar pukul 20.30 malam sebelumnya; ini salah satu hari paling menguras tenaga."], ["Medan", "Basah, curam, dan melelahkan."], ["Catatan", "Bawa baju ganti, dry bag, dan pelindung HP."]]],
      ["Hari 6", "Sunrise Bromo", "Naik Jeep pukul 02.00 untuk melihat sunrise. Dingin dan berdebu. Sarapan di hotel, lalu sore diantar ke Surabaya.", ["Jeep", "Pemandangan fajar", "Gunung api terakhir"], [["Waktu bangun", "Bangun pukul 01.15 waktu lokal, atau 02.15 waktu Taiwan."], ["Waktu berangkat", "Pakai layer hangat dan siap sebelum 01.50 untuk Jeep pukul 02.00."], ["Waktu kumpul", "Kumpul di luar hotel pukul 01.50 supaya tidak terburu-buru saat Jeep datang."], ["Paling lambat tidur", "Tidur sekitar pukul 19.30 malam sebelumnya."], ["Sorotan", "Bintang dulu, lalu matahari terbit di atas kaldera."], ["Pengingat", "Sebelum matahari terbit sangat dingin, berangin, dan berdebu. Bawa masker atau buff."]]],
      ["Hari 7", "Kereta ke Yogyakarta", "Naik Argo Semeru ke Yogyakarta dan istirahat di kereta. Hari ini tidak perlu bangun dini hari.", ["Hari kereta", "VIP lounge", "Ke Yogyakarta"], [["Waktu bangun", "Pukul 07.00 waktu lokal, atau 08.00 waktu Taiwan."], ["Waktu berangkat", "Keluar dari hotel pukul 08.00, masih sempat ke VIP lounge."], ["Waktu kumpul", "Hari ini tidak ada titik kumpul terpisah. Langsung berangkat dari hotel ke stasiun pukul 08.00."], ["Paling lambat tidur", "Usahakan istirahat sekitar pukul 22.30 karena besok hari candi dimulai cukup pagi."], ["Ritme", "Hari istirahat."], ["Transportasi", "Sampai di stasiun tepat waktu; sisanya untuk istirahat."]]],
      ["Hari 8", "Hari candi", "Tur sehari Klook: pagi Borobudur dengan naik candi dan pemandu, siang Prambanan.", ["Borobudur", "Prambanan", "Naik candi + pemandu"], [["Waktu bangun", "Pukul 05.15 waktu lokal, atau 06.15 waktu Taiwan."], ["Waktu berangkat", "Sudah di lobi sebelum 06.20 paling aman, karena jendela jemput biasanya antara 06.30 sampai 07.30."], ["Waktu kumpul", "Kumpul di lobi hotel pukul 06.20."], ["Paling lambat tidur", "Usahakan tidur sekitar pukul 22.00 malam sebelumnya karena hari ini tetap penuh jalan kaki."], ["Catatan budaya", "Borobudur candi Buddha dengan teras-teras batu; Prambanan candi Hindu dengan menara tinggi."], ["Pakaian", "Cuacanya akan panas dan jalannya banyak, jadi pakai pakaian ringan dan jangan lupa air minum serta sun protection."]]],
      ["Hari 9", "Pulang", "Subuh naik kereta bandara ke YIA, terbang ke Jakarta, lalu transit ke Taipei. Kemas barang malam sebelumnya.", ["Transfer pagi", "Sambung bandara", "Pulang"], [["Waktu bangun", "Bangun pukul 04.40 waktu lokal untuk beres-beres dan berangkat, atau 05.40 waktu Taiwan."], ["Waktu berangkat", "Keluar dari hotel pukul 05.25. Lebih baik terlalu awal daripada mepet."], ["Waktu kumpul", "Hari ini tidak ada titik kumpul tetap. Cukup siap meninggalkan hotel pukul 05.25."], ["Paling lambat tidur", "Usahakan istirahat sekitar pukul 21.30 malam sebelumnya karena hari pulang dimulai sangat pagi."], ["Waktu", "Hari ini tidak ada wisata; cukup pastikan setiap sambungan terkejar."], ["Cek terakhir", "Sebelum keluar hotel, cek paspor, HP, charger, adaptor, dan oleh-oleh sekali lagi. Kehilangan satu saja hari ini akan merepotkan."]]]
    ],
    budgetLabels: {
      flight: ["Tiket pesawat", "China Airlines pulang pergi"],
      hotel: ["Hotel", "Seminyak, Malang, Yogyakarta"],
      volcanoDeposit: ["Deposit gunung api", "Deposit tour Ijen / Sewu / Bromo"],
      volcanoBalance: ["Sisa gunung api", "Sisa 80% dibayar pada 2026/05/30; nominal kartu Rp8.433.700, sekitar NT$14.838"],
      templeTour: ["Tur candi", "Borobudur + Prambanan"],
      train: ["Kereta", "Malang → Yogyakarta"],
      dailySpend: ["Biaya harian", "Makan, pijat, pengeluaran kecil"]
    },
    visaPoints: [
      ["Opsi wisata 30 hari", "FAQ resmi eVisa Indonesia menunjukkan opsi wisata umum 30 hari, bisa diperpanjang sekali, dengan biaya IDR 500.000."],
      ["Pemegang paspor Taiwan", "Per 2026-04-04, Taiwan tercantum pada daftar paspor yang memenuhi syarat di halaman resmi eVisa / e-VOA Indonesia, sehingga paspor Taiwan bisa memakai e-VOA / VOA."],
      ["Dokumen inti", "Paspor minimal 6 bulan, tiket keluar, dan dana yang cukup."],
      ["Saran", "Ajukan lebih awal."]
    ],
    arrivalPoints: [
      ["Levy wisata Bali", "Wisatawan asing ke Bali membayar levy satu kali Rp150.000, bisa online atau saat tiba."],
      ["Simpan bukti", "Love Bali memberikan bukti pembayaran QR code yang sebaiknya disimpan."],
      ["Terpisah dari visa", "Biaya ini berbeda dari biaya visa."],
      ["Cek akhir", "Cek lagi situs resmi eVisa dan Love Bali mendekati 13 Juni 2026."]
    ]
  }
};

const LOCALIZED_DAY_META = {
  en: [
    {
      date: "06 / 13 Sat",
      region: "Bali / Seminyak",
      theme: "Arrival, sunset, beach club, and spa",
      effort: "Light | resort day",
      tone: "beach",
      badges: ["Sunset", "Beach Club", "Spa"],
      preview: "A soft first Bali afternoon: airport, hotel, sunset, dinner, a little Seminyak browsing, then a massage before bed.",
      guide: "Day 1 works best as one smooth Seminyak route: airport to hotel, hotel to beach, beach to dinner, dinner to a short walk, and spa before sleep.",
      atGlance: [
        ["Arrival", "14:35 at DPS, with hotel check-in around 16:00"],
        ["Main movement", "DPS → Grab → Courtyard Seminyak → beach / dinner / walk / spa"],
        ["Pace", "Light, with the focus on easing out of flight mode"],
        ["What to wear", "Lighter resort clothes after check-in work best for the evening"],
        ["Food and water", "Dinner at the beach club, with steady hydration through the afternoon"],
        ["Tonight", "Courtyard by Marriott Bali Seminyak Resort"]
      ],
      routeFlow: [
        ["14:35–16:00 | Arrival and hotel check-in", "Land at DPS, clear immigration, take a Grab, and settle into the hotel before the evening begins."],
        ["16:00–17:30 | Resort reset", "Use the first window for the pool, pool bar, room rest, and changing into something lighter."],
        ["17:30–18:30 | Seminyak Beach sunset", "Walk about five minutes to the beach and let the first Bali sunset do the real opening work."],
        ["18:30–20:00 | Potato Head dinner", "Dinner, drinks, and the sea-facing evening atmosphere all fit naturally here."],
        ["20:00–21:30 | Seminyak browse", "The Flea Market and Kayu Aya Street are an easy place to walk, browse, and stay in holiday mode."],
        ["21:30–23:00 | Spa and sleep", "A late massage turns the first evening into a proper reset before the volcano days begin."]
      ],
      reminders: [
        "Do not overfill the first day. The point is to land softly and save energy for the harder stretch later.",
        "Sunset in mid-June is around 18:05, so leaving for the beach at 17:30 works well.",
        "If you want Potato Head or a late spa slot, booking ahead is the calmer option."
      ],
      links: [
        ["Hotel", HOTEL_MAPS.seminyak],
        ["Seminyak Beach", PLACE_MAPS.seminyakBeach],
        ["Potato Head Beach Club", PLACE_MAPS.potatoHead],
        ["The Flea Market", PLACE_MAPS.fleaMarket],
        ["Kayu Aya Street", PLACE_MAPS.kayuAya],
        ["Ssamaya Balinese Spa", PLACE_MAPS.ssamayaSpa]
      ]
    },
    {
      date: "06 / 14 Sun",
      region: "Bali / Seminyak",
      theme: "A full Bali reset day",
      effort: "Light",
      tone: "beach",
      badges: ["Nothing fixed", "Beach pace", "Flexible hours"],
      guide: "This day is meant to stay open. Good coffee, a beach walk, a slow meal, or a massage all fit the rhythm better than overscheduling."
    },
    {
      date: "06 / 15 Mon",
      region: "Bali → East Java",
      theme: "The route turns toward the volcano line",
      effort: "Moderate | long transfer",
      tone: "transfer",
      badges: ["Pickup day", "Ferry crossing", "Adventure begins"],
      guide: "The trip changes shape here. Once Bali drops away, the route starts to feel more rugged and more clearly pointed toward the volcano stretch.",
      links: [
        ["JVTO tour page", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"]
      ]
    },
    {
      date: "06 / 16 Tue",
      region: "Ijen / Banyuwangi",
      theme: "Blue fire, crater rim, and a cold dawn start",
      effort: "Tiring | pre-dawn volcano day",
      tone: "volcano",
      badges: ["Midnight wake-up", "Volcano hike", "Blue fire"],
      guide: "Ijen is one of the most atmospheric days of the trip. It begins in darkness and cold, then slowly opens into sulfur air, crater views, and first light.",
      links: [
        ["JVTO tour page", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"]
      ]
    },
    {
      date: "06 / 17 Wed",
      region: "Tumpak Sewu / Lumajang",
      theme: "Waterfall canyon day",
      effort: "Tiring | wet terrain",
      tone: "waterfall",
      badges: ["Very early start", "Slippery ground", "Change of clothes"],
      guide: "Today is all about moving down into the landscape itself. Expect wet footing, steep paths, and one of the strongest visual payoffs of the trip.",
      links: [
        ["JVTO tour page", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"]
      ]
    },
    {
      date: "06 / 18 Thu",
      region: "Bromo / Malang",
      theme: "Jeep tracks and sunrise over the volcanic plain",
      effort: "Tiring | volcano sunrise day",
      tone: "volcano",
      badges: ["01:15 wake-up", "Jeep ride", "Cold morning"],
      guide: "Bromo is the big sunrise classic. The experience is as much about the cold, the dust, and the open highland view as it is about the sun itself.",
      links: [
        ["JVTO tour page", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"]
      ]
    },
    {
      date: "06 / 19 Fri",
      region: "Malang / Surabaya → Yogyakarta",
      theme: "A softer city transfer day",
      effort: "Moderate | recovery day",
      tone: "transfer",
      badges: ["Train day", "VIP lounge", "Reset rhythm"],
      guide: "After the hardest stretch, the train ride gives the body room to recover and lets the trip return to a steadier urban pace."
    },
    {
      date: "06 / 20 Sat",
      region: "Yogyakarta / Borobudur / Prambanan",
      theme: "Stone terraces, temple towers, and a cultural deep breath",
      effort: "Moderate | walking day",
      tone: "temple",
      badges: ["Early start", "Temple day", "Hot weather"],
      guide: "The mood changes completely here. After volcanoes and road days, the trip turns toward carved stone, layered terraces, and a calmer kind of wonder.",
      links: [["Klook day tour", "https://s.klook.com/c/4yVrZ02036"]]
    },
    {
      date: "06 / 21 Sun",
      region: "Yogyakarta → Jakarta → Taipei",
      theme: "A steady way home",
      effort: "Moderate | return day",
      tone: "transfer",
      badges: ["Early airport run", "Connections", "Fly home"],
      guide: "The final day is about calm transitions. If the night before was packed well, the morning becomes much easier to carry."
    }
  ],
  id: [
    {
      date: "13 / 06 Sab",
      region: "Bali / Seminyak",
      theme: "Tiba, sunset, beach club, dan spa",
      effort: "Ringan | hari resort",
      tone: "beach",
      badges: ["Sunset", "Beach club", "Spa"],
      preview: "Sore pertama di Bali dibuat pelan: bandara, hotel, sunset, makan malam, jalan sedikit di Seminyak, lalu spa sebelum tidur.",
      guide: "Hari pertama paling enak dijalani sebagai satu jalur santai di Seminyak: bandara ke hotel, hotel ke pantai, pantai ke makan malam, lalu jalan sebentar dan spa.",
      atGlance: [
        ["Tiba", "14.35 di DPS, lalu sekitar 16.00 selesai check-in hotel"],
        ["Gerak utama", "DPS → Grab → Courtyard Seminyak → pantai / makan malam / jalan / spa"],
        ["Ritme tenaga", "Ringan, fokusnya keluar dulu dari mode penerbangan"],
        ["Pakaian", "Setelah check-in, paling enak langsung ganti ke pakaian resort yang ringan"],
        ["Makan dan minum", "Makan malam di beach club, sambil tetap jaga air minum sepanjang sore"],
        ["Malam ini", "Courtyard by Marriott Bali Seminyak Resort"]
      ],
      routeFlow: [
        ["14.35–16.00 | Tiba dan check-in hotel", "Mendarat di DPS, lewat imigrasi, naik Grab, lalu masuk hotel sebelum bagian santai malam dimulai."],
        ["16.00–17.30 | Reset di resort", "Pakai jendela waktu pertama ini untuk kolam, pool bar, istirahat di kamar, dan ganti ke pakaian yang lebih ringan."],
        ["17.30–18.30 | Sunset di Seminyak Beach", "Jalan sekitar lima menit ke pantai dan biarkan sunset pertama di Bali jadi pembuka yang benar-benar terasa."],
        ["18.30–20.00 | Makan malam di Potato Head", "Makan malam, minum, dan suasana tepi laut semuanya pas diletakkan di sini."],
        ["20.00–21.30 | Jalan di Seminyak", "The Flea Market dan Kayu Aya Street enak dipakai untuk jalan santai sambil lihat-lihat."],
        ["21.30–23.00 | Spa lalu tidur", "Pijat malam membuat hari pertama benar-benar selesai dengan badan yang lebih rileks sebelum segmen gunung api."]
      ],
      reminders: [
        "Hari pertama jangan dibuat terlalu padat. Tujuannya adalah mendarat dengan lembut dan menyimpan tenaga.",
        "Sunset bulan Juni sekitar 18.05, jadi keluar ke pantai sekitar 17.30 sudah pas.",
        "Kalau ingin slot ramai di Potato Head atau spa malam, reservasi lebih awal akan terasa lebih aman."
      ],
      links: [
        ["Hotel", HOTEL_MAPS.seminyak],
        ["Seminyak Beach", PLACE_MAPS.seminyakBeach],
        ["Potato Head Beach Club", PLACE_MAPS.potatoHead],
        ["The Flea Market", PLACE_MAPS.fleaMarket],
        ["Kayu Aya Street", PLACE_MAPS.kayuAya],
        ["Ssamaya Balinese Spa", PLACE_MAPS.ssamayaSpa]
      ]
    },
    {
      date: "14 / 06 Min",
      region: "Bali / Seminyak",
      theme: "Satu hari penuh untuk menurunkan ritme",
      effort: "Ringan",
      tone: "beach",
      badges: ["Tanpa acara tetap", "Ritme pantai", "Jam fleksibel"],
      guide: "Hari ini memang sebaiknya dibiarkan longgar. Kopi, jalan ke pantai, makan pelan, atau pijat justru lebih cocok daripada jadwal yang terlalu rapat."
    },
    {
      date: "15 / 06 Sen",
      region: "Bali → Jawa Timur",
      theme: "Perjalanan mulai masuk jalur gunung api",
      effort: "Sedang | transfer jauh",
      tone: "transfer",
      badges: ["Hari jemput", "Naik ferry", "Feri ke Jawa"],
      guide: "Di sinilah bentuk perjalanan berubah. Begitu Bali selesai, jalur ini mulai terasa lebih liar dan lebih jelas mengarah ke segmen gunung api.",
      links: [
        ["Halaman JVTO", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"]
      ]
    },
    {
      date: "16 / 06 Sel",
      region: "Ijen / Banyuwangi",
      theme: "Blue fire, bibir kawah, dan fajar yang dingin",
      effort: "Berat | hari gunung api dini hari",
      tone: "volcano",
      badges: ["Bangun tengah malam", "Hiking gunung api", "Blue fire"],
      guide: "Ijen adalah salah satu hari paling atmosferik. Semuanya dimulai dari gelap dan dingin, lalu pelan-pelan terbuka jadi belerang, kawah, dan cahaya pagi.",
      links: [
        ["Halaman JVTO", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"]
      ]
    },
    {
      date: "17 / 06 Rab",
      region: "Tumpak Sewu / Lumajang",
      theme: "Hari lembah air terjun",
      effort: "Berat | medan basah",
      tone: "waterfall",
      badges: ["Bangun sangat pagi", "Jalur licin", "Baju ganti"],
      guide: "Hari ini rasanya seperti masuk ke dalam lanskap itu sendiri. Siapkan kaki untuk jalur basah dan turunan curam, dengan hadiah visual yang sangat besar di bawah.",
      links: [
        ["Halaman JVTO", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"]
      ]
    },
    {
      date: "18 / 06 Kam",
      region: "Bromo / Malang",
      theme: "Jeep dan sunrise di dataran vulkanik",
      effort: "Berat | hari sunrise gunung api",
      tone: "volcano",
      badges: ["Bangun 01.15", "Naik Jeep", "Pagi dingin"],
      guide: "Bromo adalah adegan sunrise klasik. Kekuatan harinya bukan hanya matahari terbit, tetapi juga dingin, debu, dan bentang tinggi gunung apinya.",
      links: [
        ["Halaman JVTO", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"]
      ]
    },
    {
      date: "19 / 06 Jum",
      region: "Malang / Surabaya → Yogyakarta",
      theme: "Hari transfer kota yang lebih lembut",
      effort: "Sedang | hari recovery",
      tone: "transfer",
      badges: ["Hari kereta", "VIP lounge", "Reset ritme"],
      guide: "Sesudah segmen paling berat, kereta memberi ruang bagi badan untuk pulih dan membuat perjalanan kembali masuk ke ritme kota yang lebih stabil."
    },
    {
      date: "20 / 06 Sab",
      region: "Yogyakarta / Borobudur / Prambanan",
      theme: "Teras batu, menara candi, dan jeda budaya",
      effort: "Sedang | hari jalan kaki",
      tone: "temple",
      badges: ["Mulai pagi", "Hari candi", "Cuaca panas"],
      guide: "Nuansanya benar-benar berubah di sini. Setelah gunung api dan perjalanan jalan jauh, ritme bergeser ke batu pahatan, teras berlapis, dan rasa kagum yang lebih tenang.",
      links: [["Tur Klook", "https://s.klook.com/c/4yVrZ02036"]]
    },
    {
      date: "21 / 06 Min",
      region: "Yogyakarta → Jakarta → Taipei",
      theme: "Pulang dengan ritme yang stabil",
      effort: "Sedang | hari pulang",
      tone: "transfer",
      badges: ["Bandara pagi", "Sambungan penerbangan", "Pulang"],
      guide: "Hari terakhir ini tentang transisi yang tenang. Kalau malam sebelumnya sudah rapi, pagi harinya akan terasa jauh lebih ringan."
    }
  ]
};

const state = {
  lang: localStorage.getItem("bali-java-lang") || "zh-Hant",
  mapQuery: "Seminyak Beach Bali",
  selectedDay: Math.min(TRIP_DAYS, Math.max(1, Number(localStorage.getItem("bali-java-selected-day")) || 1)),
  openDay: null
};

const dom = {
  heroSignals: document.getElementById("hero-signals"),
  heroFacts: document.getElementById("hero-facts"),
  overviewStats: document.getElementById("overview-stats"),
  snapshotChips: document.getElementById("snapshot-chips"),
  snapshotGrid: document.getElementById("snapshot-grid"),
  journeyHighlights: document.getElementById("journey-highlights"),
  dayPreview: document.getElementById("day-preview"),
  practicalAccordion: document.getElementById("practical-accordion"),
  travelDaySelect: document.getElementById("travel-day-select"),
  travelModeContent: document.getElementById("travel-mode-content"),
  travelAlert: document.getElementById("travel-alert"),
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
  infoHighlights: document.getElementById("info-highlights"),
  infoChecklist: document.getElementById("info-checklist"),
  infoBasics: document.getElementById("info-basics"),
  infoTips: document.getElementById("info-tips"),
  infoCosts: document.getElementById("info-costs"),
  mapList: document.getElementById("map-list"),
  mapFrame: document.getElementById("map-frame"),
  fullRouteLink: document.getElementById("full-route-link"),
  mapDayRoutes: document.getElementById("map-day-routes"),
  itineraryHighlights: document.getElementById("itinerary-highlights"),
  dayJumpBar: document.getElementById("day-jump-bar"),
  itineraryList: document.getElementById("itinerary-list"),
  budgetSummaryStrip: document.getElementById("budget-summary-strip"),
  budgetTableBody: document.getElementById("budget-table-body"),
  visaHighlights: document.getElementById("visa-highlights"),
  visaTutorial: document.getElementById("visa-tutorial"),
  visaPoints: document.getElementById("visa-points"),
  arrivalPoints: document.getElementById("arrival-points"),
  footerCopy: document.getElementById("footer-copy"),
  pageProgress: document.getElementById("pageProgress"),
  navMoreToggle: document.getElementById("nav-more-toggle"),
  navMoreMenu: document.getElementById("nav-more-menu")
};

const FALLBACK_LANG = "zh-Hant";
const TIMING_LABELS = {
  "zh-Hant": ["起床時間", "出門時間", "集合時間", "最晚睡覺時間"],
  en: ["Wake-up", "Leave by", "Meet-up", "Sleep by"],
  id: ["Waktu bangun", "Waktu berangkat", "Waktu kumpul", "Paling lambat tidur"]
};
const TIMING_LABEL_SET = new Set(Object.values(TIMING_LABELS).flat());

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

function pick(copy, key) {
  return copy[key] ?? content[FALLBACK_LANG][key];
}

function buildDayAnchorId(day) {
  const number = day.match(/\d+/)?.[0];
  return `itinerary-day-${number || day.toLowerCase().replace(/\s+/g, "-")}`;
}

function normalizeDetailLabel(label, lang) {
  const labelMap = {
    "zh-Hant": {
      出門時間: "出發時間",
      集合時間: "會合時間",
      最晚睡覺時間: "今晚睡眠",
      入住完成: "完成入住"
    },
    en: {
      "Leave by": "Departure",
      "Meet-up": "Meet point",
      "Sleep by": "Tonight's rest"
    },
    id: {
      "Waktu berangkat": "Waktu jalan",
      "Waktu kumpul": "Titik kumpul",
      "Paling lambat tidur": "Tidur malam ini"
    }
  };

  return labelMap[lang]?.[label] || labelMap[FALLBACK_LANG]?.[label] || label;
}

function isTimingLabel(label) {
  return TIMING_LABEL_SET.has(label);
}

function extractTimingItems(details = [], lang = FALLBACK_LANG) {
  const preferredLabels = TIMING_LABELS[lang] || TIMING_LABELS[FALLBACK_LANG];

  return preferredLabels
    .map((expectedLabel) => details.find(([label]) => label === expectedLabel))
    .filter(Boolean)
    .map(([label, value]) => [normalizeDetailLabel(label, lang), value]);
}

function compactTimingValue(value, lang = FALLBACK_LANG) {
  const text = String(value || "");
  const times = [...text.matchAll(/\b(?:[01]?\d|2[0-3])[:.]\d{2}\b/g)].map((match) => match[0].replace(".", ":"));
  const uniqueTimes = [...new Set(times)].slice(0, 2);

  if (uniqueTimes.length >= 2 && /台灣|Taiwan/i.test(text)) {
    if (lang === "en") {
      return `${uniqueTimes[0]} local · ${uniqueTimes[1]} Taiwan`;
    }
    if (lang === "id") {
      return `${uniqueTimes[0]} lokal · ${uniqueTimes[1]} Taiwan`;
    }
    return `${uniqueTimes[0]} 當地 · ${uniqueTimes[1]} 台灣`;
  }

  if (uniqueTimes.length) {
    return uniqueTimes.join(" / ");
  }

  const firstSentence = text.split(/[。.!?]/)[0].trim();
  return firstSentence.length > 48 ? `${firstSentence.slice(0, 47)}…` : firstSentence;
}

function getStickyOffset(element) {
  const navHeight = document.querySelector(".main-nav")?.offsetHeight || 0;

  if (window.innerWidth <= 768) {
    const dayJumpHeight = element?.classList.contains("day-card") ? dom.dayJumpBar?.offsetHeight || 0 : 0;
    return dayJumpHeight + 44;
  }

  return navHeight + 40;
}

function scrollToElementWithOffset(element, { behavior = "smooth" } = {}) {
  if (!element) {
    return;
  }

  const top = element.getBoundingClientRect().top + window.scrollY - getStickyOffset(element);
  window.scrollTo({ top: Math.max(top, 0), behavior });
}

function setNavMoreOpen(isOpen) {
  if (!dom.navMoreToggle || !dom.navMoreMenu) {
    return;
  }

  dom.navMoreToggle.setAttribute("aria-expanded", String(isOpen));
  dom.navMoreMenu.hidden = !isOpen;
  document.body.classList.toggle("nav-menu-open", isOpen);
}

function loadMapFrame() {
  if (!dom.mapFrame) {
    return;
  }

  const nextSource = mapEmbedUrl(state.mapQuery);
  dom.mapFrame.dataset.src = nextSource;
  if (dom.mapFrame.src !== new URL(nextSource, window.location.href).href) {
    dom.mapFrame.src = nextSource;
  }
}

function setLocationHash(hashValue) {
  const cleanHash = hashValue ? `#${hashValue}` : window.location.pathname + window.location.search;
  window.history.replaceState(null, "", cleanHash);
}

function activateSection(target, { behavior = "smooth", scroll = true, hashValue = target } = {}) {
  const nextSection = document.getElementById(target);
  if (!nextSection) {
    return;
  }

  document.querySelectorAll(".nav-item").forEach((item) => {
    const isActive = item.dataset.target === target;
    item.classList.toggle("active", isActive);
    if (isActive) {
      item.setAttribute("aria-current", "page");
    } else {
      item.removeAttribute("aria-current");
    }
  });

  const isSecondarySection = !PRIMARY_NAV_TARGETS.has(target);
  dom.navMoreToggle?.classList.toggle("active", isSecondarySection);
  if (isSecondarySection) {
    dom.navMoreToggle?.setAttribute("aria-current", "page");
  } else {
    dom.navMoreToggle?.removeAttribute("aria-current");
  }

  document.querySelectorAll(".page-section").forEach((section) => {
    section.classList.toggle("active", section.id === target);
  });

  document.body.dataset.activeSection = target;
  setNavMoreOpen(false);

  if (target === "map") {
    loadMapFrame();
  }

  const navButton = document.querySelector(`.nav-item[data-target="${target}"]`);
  navButton?.scrollIntoView({ behavior, inline: "center", block: "nearest" });

  if (scroll) {
    scrollToElementWithOffset(nextSection, { behavior });
  }

  setLocationHash(hashValue);
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

function renderOverviewStats(items) {
  return items
    .map(
      ([label, value, note]) => `
        <article class="overview-stat">
          <div class="overview-stat-label">${label}</div>
          <div class="overview-stat-value">${value}</div>
          ${note ? `<div class="overview-stat-note">${note}</div>` : ""}
        </article>
      `
    )
    .join("");
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

function renderHeroFacts(items) {
  return items
    .slice(0, 3)
    .map(
      ([label, value]) => `
        <article class="hero-fact-card">
          <div class="hero-fact-label">${label}</div>
          <div class="hero-fact-value">${value}</div>
        </article>
      `
    )
    .join("");
}

function renderSignalChips(items = []) {
  return items.map((item) => `<span class="signal-chip">${item}</span>`).join("");
}

function renderSnapshotCards(items = []) {
  return items
    .map(
      ({ label, value, note }) => `
        <article class="snapshot-card">
          <div class="snapshot-card-label">${label}</div>
          <div class="snapshot-card-value">${value}</div>
          <div class="snapshot-card-note">${note}</div>
        </article>
      `
    )
    .join("");
}

function renderJourneyHighlights(items = []) {
  return items
    .map(
      ({ kicker, title, desc, tags = [] }) => `
        <article class="journey-highlight-card">
          <div class="journey-highlight-kicker">${kicker}</div>
          <div class="journey-highlight-title">${title}</div>
          <div class="journey-highlight-desc">${desc}</div>
          <div class="journey-highlight-tags">
            ${tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
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

function renderPracticalAccordion(items = []) {
  return items
    .map(
      ({ title, intro, chips = [], items: rows = [] }, index) => `
        <details class="practical-item" ${index === 0 ? "open" : ""}>
          <summary class="practical-summary">
            <div class="practical-summary-copy">
              <div class="practical-summary-title">${title}</div>
              <div class="practical-summary-intro">${intro}</div>
            </div>
            <span class="practical-summary-icon" aria-hidden="true"></span>
          </summary>
          <div class="practical-body">
            <div class="practical-chip-row">
              ${chips.map((chip) => `<span>${chip}</span>`).join("")}
            </div>
            <div class="practical-list">
              ${rows
                .map(
                  ([rowTitle, rowDesc]) => `
                    <article class="practical-row">
                      <div class="practical-row-title">${rowTitle}</div>
                      <div class="practical-row-desc">${rowDesc}</div>
                    </article>
                  `
                )
                .join("")}
            </div>
          </div>
        </details>
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

function resolveDayMeta(days, index, lang = FALLBACK_LANG) {
  const fallbackDay = content[FALLBACK_LANG].itinerary[index] || [];
  const localizedMeta = LOCALIZED_DAY_META[lang]?.[index] || {};
  const inlineMeta = days[index]?.[5] || {};
  return lang === FALLBACK_LANG
    ? { ...(fallbackDay[5] || {}), ...inlineMeta }
    : { ...localizedMeta, ...inlineMeta };
}

function renderDayPreview(days, copy, lang) {
  return days
    .map(([day, title, desc, tags], index) => {
      const meta = resolveDayMeta(days, index, lang);
      const anchorId = buildDayAnchorId(day);
      const chips = [meta.effort, ...(meta.badges || []).slice(0, 2)].filter(Boolean);

      return `
        <article class="day-preview-card tone-${meta.tone || "default"}">
          <div class="day-preview-head">
            <div class="day-preview-index">${day}</div>
            <div class="day-preview-date">${meta.date || ""}</div>
          </div>
          <div class="day-preview-region">${meta.region || ""}</div>
          <div class="day-preview-title">${title}</div>
          <div class="day-preview-theme">${meta.theme || ""}</div>
          <div class="day-preview-copy">${meta.preview || desc}</div>
          <div class="day-preview-chip-row">
            ${chips.map((chip) => `<span>${chip}</span>`).join("")}
          </div>
          <div class="day-preview-tags">
            ${tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <button class="day-preview-link" type="button" data-open-section="itinerary" data-open-day="${anchorId}">
            ${pick(copy, "previewCta")}
          </button>
        </article>
      `;
    })
    .join("");
}

function getDayStatus(copy, index) {
  return pick(copy, "dayStatuses")?.[index] || "";
}

function getDayNumber(anchorId) {
  return Number(anchorId?.match(/itinerary-day-(\d+)/)?.[1]) || 1;
}

function renderTravelMode(days, copy, lang) {
  if (!dom.travelDaySelect || !dom.travelModeContent || !days.length) {
    return;
  }

  const index = Math.min(days.length - 1, Math.max(0, state.selectedDay - 1));
  const [day, title, desc, tags, details] = days[index];
  const meta = resolveDayMeta(days, index, lang);
  const anchorId = buildDayAnchorId(day);
  const timingItems = meta.timingCards?.length ? meta.timingCards : extractTimingItems(details, lang);
  const status = getDayStatus(copy, index);

  dom.travelDaySelect.innerHTML = days
    .map(([optionDay, optionTitle], optionIndex) => {
      const optionMeta = resolveDayMeta(days, optionIndex, lang);
      return `<option value="${optionIndex + 1}">${optionDay} · ${optionMeta.date || ""} · ${optionTitle}</option>`;
    })
    .join("");
  dom.travelDaySelect.value = String(state.selectedDay);

  if (dom.travelAlert) {
    dom.travelAlert.hidden = ![5, 6].includes(index);
    dom.travelAlert.innerHTML = `
      <div class="travel-alert-label">${pick(copy, "travelAlertLabel")}</div>
      <div class="travel-alert-text">${pick(copy, "travelAlertText")}</div>
    `;
  }

  dom.travelModeContent.innerHTML = `
    <article class="travel-day-summary tone-${meta.tone || "default"}">
      <div class="travel-day-topline">
        <div class="travel-day-date">${day} · ${meta.date || ""}</div>
        ${status ? `<div class="travel-day-status">${status}</div>` : ""}
      </div>
      <div class="travel-day-region">${meta.region || ""}</div>
      <h3>${meta.theme || title}</h3>
      <p>${meta.preview || desc}</p>
      <div class="travel-day-chip-row">
        ${[meta.effort, ...(tags || []).slice(0, 2)].filter(Boolean).map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      <div class="travel-timing-grid">
        ${timingItems
          .slice(0, 4)
          .map(
            ([label, value]) => `
              <div class="travel-timing-item">
                <div class="travel-timing-label">${normalizeDetailLabel(label, lang)}</div>
                <div class="travel-timing-value" title="${value}">${compactTimingValue(value, lang)}</div>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="travel-mode-actions">
        <button class="travel-action travel-action-primary" type="button" data-open-section="itinerary" data-open-day="${anchorId}">${pick(copy, "travelOpenDay")}</button>
        <a class="travel-action" href="${DAY_ROUTE_URLS[`day${index + 1}`]}" target="_blank" rel="noreferrer">${pick(copy, "travelOpenMap")}</a>
        <button class="travel-action" type="button" data-open-section="stay">${pick(copy, "travelOpenStay")}</button>
        <button class="travel-action" type="button" data-open-section="info">${pick(copy, "travelOpenInfo")}</button>
      </div>
    </article>
  `;
}

function renderDayJumpBar(days, copy) {
  if (!dom.dayJumpBar) {
    return;
  }

  dom.dayJumpBar.innerHTML = `
    <span class="day-jump-label">${pick(copy, "dayJumpLabel")}</span>
    <div class="day-jump-buttons">
      ${days
        .map(([day, title], index) => {
          const anchorId = buildDayAnchorId(day);
          return `<button type="button" data-open-section="itinerary" data-open-day="${anchorId}" aria-label="${day}: ${title}">${index + 1}</button>`;
        })
        .join("")}
    </div>
  `;
}

function syncSelectedDayUI() {
  if (dom.travelDaySelect) {
    dom.travelDaySelect.value = String(state.selectedDay);
  }

  document.querySelectorAll(".day-jump-buttons button").forEach((button) => {
    const isCurrent = getDayNumber(button.dataset.openDay) === state.selectedDay;
    button.classList.toggle("active", isCurrent);
    button.setAttribute("aria-current", isCurrent ? "true" : "false");
  });
}

function renderStayRows(items, linkLabel) {
  return items
    .map(({ dates, area, hotel, localName, stars, image, note, details, url, linkLabel: customLabel, extraLinks = [] }) => {
      const [imageWidth, imageHeight] = IMAGE_DIMENSIONS[image] || [1200, 800];
      return `
        <article class="stay-card-rich">
          ${
            image
              ? `<div class="stay-card-image-wrap">
                  <img class="stay-card-image" src="${image}" alt="${hotel}" width="${imageWidth}" height="${imageHeight}" loading="lazy" decoding="async" />
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
      `;
    })
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

function renderTimeline(days, copy, lang) {
  return days
    .map(([day, title, desc, tags, details], index) => {
      const meta = resolveDayMeta(days, index, lang);
      const anchorId = buildDayAnchorId(day);
      const badges = [meta.effort, ...(meta.badges || [])].filter(Boolean);
      const status = getDayStatus(copy, index);
      const timingItems = meta.timingCards?.length ? meta.timingCards : extractTimingItems(details, lang);
      const detailItems = timingItems.length ? details.filter(([label]) => !isTimingLabel(label)) : details;
      const primaryDetail = !timingItems.length ? detailItems[0] : null;
      const secondaryDetails = !timingItems.length ? detailItems.slice(1) : detailItems;
      const routeSection = meta.routeFlow?.length
        ? `
          <section class="day-block">
            <div class="day-block-title">${pick(copy, "dayGuideFlowLabel")}</div>
            <div class="day-route-flow">
              ${meta.routeFlow
                .map(
                  ([flowTitle, flowDesc]) => `
                    <article class="day-route-stop">
                      <div class="day-route-title">${flowTitle}</div>
                      <div class="day-route-desc">${flowDesc}</div>
                    </article>
                  `
                )
                .join("")}
            </div>
          </section>
        `
        : "";
      const detailSection = secondaryDetails.length
        ? `
          <section class="day-block">
            <div class="day-block-title">${pick(copy, "dayGuideDetailLabel")}</div>
            <div class="day-detail-list">
              ${secondaryDetails
                .map(
                  ([detailTitle, detailDesc]) => `
                    <div class="day-detail-item">
                      <div class="day-detail-title">${normalizeDetailLabel(detailTitle, lang)}</div>
                      <div class="day-detail-desc">${detailDesc}</div>
                    </div>
                  `
                )
                .join("")}
            </div>
          </section>
        `
        : "";
      const reminderSection = meta.reminders?.length
        ? `
          <section class="day-reminder-card">
            <div class="day-block-title">${pick(copy, "dayGuideReminderLabel")}</div>
            <div class="day-reminder-list">
              ${meta.reminders.map((reminder) => `<div class="day-reminder-item">${reminder}</div>`).join("")}
            </div>
          </section>
        `
        : "";
      const linksSection = meta.links?.length
        ? `
          <section class="day-links-block">
            <div class="day-block-title">${pick(copy, "dayGuideLinksLabel")}</div>
            <div class="day-links-row">
              ${meta.links
                .map(
                  ([label, href]) =>
                    `<a class="day-link-pill" href="${href}" target="_blank" rel="noreferrer">${label}</a>`
                )
                .join("")}
            </div>
          </section>
        `
        : "";

      return `
        <details class="day-card tone-${meta.tone || "default"}" id="${anchorId}" ${state.openDay === anchorId ? "open" : ""}>
          <summary class="day-card-summary">
            <div class="day-card-top">
              <div class="day-meta-block">
                <div class="day-index">${day}</div>
                <div class="day-date-line">${meta.date || ""}</div>
                <div class="day-region-line">${meta.region || ""}</div>
              </div>
              <div class="day-status-row">
                ${status ? `<span class="day-plan-status">${status}</span>` : ""}
                ${badges.slice(0, 1).map((badge) => `<span class="day-status-chip">${badge}</span>`).join("")}
              </div>
            </div>
            <div class="day-header">
              ${meta.theme ? `<div class="day-theme">${meta.theme}</div>` : ""}
              <div class="day-title">${title}</div>
              <div class="day-summary">${meta.preview || desc}</div>
            </div>
            ${
              timingItems.length
                ? `
                  <section class="day-block day-timing-block">
                    <div class="day-block-title">${pick(copy, "dayGuideTimingLabel")}</div>
                    <div class="day-timing-grid">
                      ${timingItems
                        .slice(0, 4)
                        .map(
                          ([timingLabel, timingValue]) => `
                            <div class="day-timing-card">
                              <div class="day-timing-label">${normalizeDetailLabel(timingLabel, lang)}</div>
                              <div class="day-timing-value" title="${timingValue}">${compactTimingValue(timingValue, lang)}</div>
                            </div>
                          `
                        )
                        .join("")}
                    </div>
                  </section>
                `
                : primaryDetail
                  ? `
                    <div class="day-primary-strip">
                      <div class="day-primary-label">${normalizeDetailLabel(primaryDetail[0], lang)}</div>
                      <div class="day-primary-value">${primaryDetail[1]}</div>
                    </div>
                  `
                  : ""
            }
            <div class="day-toggle-hint">
              <span class="day-toggle-open">${pick(copy, "dayExpandLabel")}</span>
              <span class="day-toggle-close">${pick(copy, "dayCollapseLabel")}</span>
              <span class="day-toggle-icon" aria-hidden="true"></span>
            </div>
          </summary>
          <div class="day-card-body">
            ${meta.guide ? `<div class="day-guide-intro">${meta.guide}</div>` : ""}
            ${
              meta.atGlance?.length
                ? `
                  <section class="day-block">
                    <div class="day-block-title">${pick(copy, "dayGuideAtGlanceLabel")}</div>
                    <div class="day-glance-grid">
                      ${meta.atGlance
                        .map(
                          ([glanceLabel, glanceValue]) => `
                            <article class="day-glance-card">
                              <div class="day-glance-label">${glanceLabel}</div>
                              <div class="day-glance-value">${glanceValue}</div>
                            </article>
                          `
                        )
                        .join("")}
                    </div>
                  </section>
                `
                : ""
            }
            <div class="day-manual-grid">
              <div class="day-main-column">
                ${routeSection}
              </div>
              <div class="day-side-column">
                ${detailSection}
                ${reminderSection}
                ${linksSection}
              </div>
            </div>
            <div class="highlight-tags">
              ${tags.map((tag) => `<span>${tag}</span>`).join("")}
            </div>
          </div>
        </details>
      `;
    })
    .join("");
}

function renderLanguage() {
  const copy = content[state.lang];
  const flights = pick(copy, "flightData");
  const overviewStats = pick(copy, "overviewStats");
  const itinerary = pick(copy, "itinerary");
  const mapLocations = pick(copy, "mapLocations");

  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = pick(copy, node.dataset.i18n);
    if (typeof value === "string") {
      node.textContent = value;
    }
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    const isActive = button.dataset.lang === state.lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (dom.heroSignals) {
    dom.heroSignals.innerHTML = renderSignalChips(pick(copy, "heroSignals"));
  }
  dom.heroFacts.innerHTML = renderHeroFacts(pick(copy, "heroFacts") || overviewStats);
  dom.footerCopy.textContent = pick(copy, "footerCopy");

  dom.overviewStats.innerHTML = renderOverviewStats(overviewStats);
  if (dom.snapshotChips) {
    dom.snapshotChips.innerHTML = renderSignalChips(pick(copy, "snapshotChips"));
  }
  if (dom.snapshotGrid) {
    dom.snapshotGrid.innerHTML = renderSnapshotCards(pick(copy, "snapshotCards"));
  }
  if (dom.journeyHighlights) {
    dom.journeyHighlights.innerHTML = renderJourneyHighlights(pick(copy, "journeyHighlights"));
  }
  if (dom.dayPreview) {
    dom.dayPreview.innerHTML = renderDayPreview(itinerary, copy, state.lang);
  }
  if (dom.practicalAccordion) {
    dom.practicalAccordion.innerHTML = renderPracticalAccordion(pick(copy, "practicalSections"));
  }
  renderTravelMode(itinerary, copy, state.lang);

  dom.departFlight.innerHTML = renderFlightCard(pick(copy, "flightSegmentLabels"), flights.depart);
  dom.returnFlight.innerHTML = renderFlightCard(pick(copy, "flightSegmentLabels"), flights.return);
  dom.flightHighlights.innerHTML = renderMiniHighlights(pick(copy, "flightHighlights"));
  dom.flightNotes.innerHTML = renderFlightNotes(pick(copy, "flightNotes"));

  dom.trainHighlights.innerHTML = renderMiniHighlights(pick(copy, "trainHighlights"));
  dom.trainOverview.innerHTML = `
    <div class="flight-summary-copy">${pick(copy, "trainSummary")}</div>
    ${renderKeyValueRows(pick(copy, "trainFacts"))}
    <div class="flight-subnotes">
      ${pick(copy, "trainNotes").map((note) => `<div class="flight-subnote">${note}</div>`).join("")}
    </div>
  `;
  dom.trainPurchase.innerHTML = renderFlightNotes(pick(copy, "trainBuySteps"));
  dom.trainLinks.innerHTML = pick(copy, "trainLinks")
    .map(([
      label,
      url
    ]) => `<a href="${url}" target="_blank" rel="noreferrer">${label}</a>`)
    .join("");

  dom.tourList.innerHTML = renderStayRows(pick(copy, "toursList"), pick(copy, "tourLinkLabel"));

  dom.stayList.innerHTML = renderStayRows(pick(copy, "stays"), pick(copy, "stayMapLabel"));

  dom.resourceLinks.innerHTML = pick(copy, "resourceLinks")
    .map(
      ([title, desc, url]) => `
        <article class="resource-card">
          <div>
            <div class="resource-card-title">${title}</div>
            <div class="resource-card-desc">${desc}</div>
          </div>
          <a href="${url}" target="_blank" rel="noreferrer">${pick(copy, "resourceLinkCta")}</a>
        </article>
      `
    )
    .join("");
  dom.linksHighlights.innerHTML = renderMiniHighlights(pick(copy, "linksHighlights"));
  dom.infoHighlights.innerHTML = renderMiniHighlights(pick(copy, "infoHighlights"));
  dom.infoChecklist.innerHTML = renderFlightNotes(pick(copy, "infoChecklist"));
  dom.infoBasics.innerHTML = renderBulletRows(pick(copy, "infoBasics"));
  dom.infoTips.innerHTML = renderBulletRows(pick(copy, "infoTips"));
  dom.infoCosts.innerHTML = renderBulletRows(pick(copy, "infoCosts"));

  if (!mapLocations.some(([, query]) => query === state.mapQuery)) {
    state.mapQuery = mapLocations[0][1];
  }

  dom.mapList.innerHTML = renderMapLocations(mapLocations, state.mapQuery);
  dom.mapFrame.dataset.src = mapEmbedUrl(state.mapQuery);
  dom.fullRouteLink.href = MAP_ROUTE_URL;
  dom.mapDayRoutes.innerHTML = renderMapDayRoutes(pick(copy, "mapDayRoutes"));
  document.querySelectorAll(".map-location-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.mapQuery = button.dataset.query;
      document.querySelectorAll(".map-location-button").forEach((item) => {
        item.classList.toggle("active", item === button);
      });
      loadMapFrame();
    });
  });

  dom.itineraryHighlights.innerHTML = renderMiniHighlights(pick(copy, "itineraryHighlights"));
  renderDayJumpBar(itinerary, copy);
  dom.itineraryList.innerHTML = renderTimeline(itinerary, copy, state.lang);
  bindDayAccordions();
  bindDayPreviewLinks();
  bindSectionShortcutButtons();
  syncSelectedDayUI();

  const paid = sumRange(BUDGET.paid);
  const open = sumRange(BUDGET.open);
  const totalMin = paid.min + open.min;
  const totalMax = paid.max + open.max;
  const avgMin = Math.round(totalMin / TRIP_DAYS);
  const avgMax = Math.round(totalMax / TRIP_DAYS);
  dom.budgetSummaryStrip.innerHTML = `
    <article class="budget-summary-card">
      <div class="budget-summary-label">${pick(copy, "paidTitle")}</div>
      <div class="budget-summary-value">${twd(paid.min)} / ${idr(paid.min * EXCHANGE_RATE)}</div>
    </article>
    <article class="budget-summary-card">
      <div class="budget-summary-label">${pick(copy, "totalBudgetLabel")}</div>
      <div class="budget-summary-value">${twd(totalMin)} - ${formatNumber(totalMax)}</div>
    </article>
    <article class="budget-summary-card">
      <div class="budget-summary-label">${pick(copy, "dailyAverageLabel")}</div>
      <div class="budget-summary-value">${twd(avgMin)} - ${formatNumber(avgMax)}</div>
    </article>
  `;
  const budgetRows = [
    ...BUDGET.paid.map((item) => ({ ...item, status: "paid" })),
    ...BUDGET.open.map((item) => ({ ...item, status: "open" }))
  ];
  dom.budgetTableBody.innerHTML = budgetRows
    .map((item) => {
      const [title, desc] = pick(copy, "budgetLabels")[item.key];
      const statusText = item.status === "paid" ? pick(copy, "budgetStatusPaid") : pick(copy, "budgetStatusOpen");
      return `
        <tr>
          <td data-label="${pick(copy, "budgetTableStatus")}"><span class="budget-status ${item.status}">${statusText}</span></td>
          <td data-label="${pick(copy, "budgetTableItem")}"><div class="budget-item-title">${title}</div></td>
          <td data-label="${pick(copy, "budgetTableDetail")}"><div class="budget-item-desc">${desc}</div></td>
          <td data-label="${pick(copy, "budgetTableAmount")}"><div class="budget-amount">${formatBudget(item)}</div></td>
        </tr>
      `;
    })
    .join("");

  dom.visaHighlights.innerHTML = renderMiniHighlights(pick(copy, "visaHighlights"));
  dom.visaTutorial.innerHTML = renderFlightNotes(pick(copy, "visaTutorial"));
  dom.visaPoints.innerHTML = renderBulletRows(pick(copy, "visaPoints"));
  dom.arrivalPoints.innerHTML = renderBulletRows(pick(copy, "arrivalPoints"));
  document.body.dataset.activeSection = document.querySelector(".page-section.active")?.id || "overview";
}

function bindDayPreviewLinks() {
  document.querySelectorAll("[data-open-day]").forEach((button) => {
    if (button.dataset.dayLinkBound === "true") {
      return;
    }
    button.dataset.dayLinkBound = "true";
    button.addEventListener("click", () => {
      const sectionTarget = button.getAttribute("data-open-section") || "itinerary";
      const anchorId = button.getAttribute("data-open-day");
      openDayCard(anchorId, { updateHash: false });
      activateSection(sectionTarget, { behavior: "smooth", scroll: false, hashValue: anchorId });
      window.setTimeout(() => {
        scrollToElementWithOffset(document.getElementById(anchorId), { behavior: "smooth" });
      }, 80);
    });
  });
}

function refreshTravelMode() {
  const copy = content[state.lang];
  renderTravelMode(pick(copy, "itinerary"), copy, state.lang);
  bindDayPreviewLinks();
  bindSectionShortcutButtons();
  syncSelectedDayUI();
}

function openDayCard(anchorId, { updateHash = true } = {}) {
  const target = document.getElementById(anchorId);
  if (!(target instanceof HTMLDetailsElement)) {
    return;
  }

  state.openDay = anchorId;
  state.selectedDay = getDayNumber(anchorId);
  localStorage.setItem("bali-java-selected-day", String(state.selectedDay));

  document.querySelectorAll("details.day-card").forEach((card) => {
    card.open = card === target;
  });

  refreshTravelMode();
  if (updateHash) {
    setLocationHash(anchorId);
  }
}

function bindDayAccordions() {
  document.querySelectorAll("details.day-card").forEach((card) => {
    if (card.dataset.accordionBound === "true") {
      return;
    }
    card.dataset.accordionBound = "true";

    card.addEventListener("toggle", () => {
      if (card.open) {
        state.openDay = card.id;
        state.selectedDay = getDayNumber(card.id);
        localStorage.setItem("bali-java-selected-day", String(state.selectedDay));
        document.querySelectorAll("details.day-card").forEach((otherCard) => {
          if (otherCard !== card) {
            otherCard.open = false;
          }
        });
        setLocationHash(card.id);
        refreshTravelMode();
        return;
      }

      if (state.openDay === card.id) {
        state.openDay = null;
        setLocationHash("itinerary");
      }
    });
  });
}

function bindSectionShortcutButtons() {
  document.querySelectorAll("[data-open-section]:not([data-open-day])").forEach((button) => {
    if (button.dataset.sectionLinkBound === "true") {
      return;
    }
    button.dataset.sectionLinkBound = "true";
    button.addEventListener("click", () => {
      activateSection(button.dataset.openSection, { behavior: "smooth", scroll: true });
    });
  });
}

function bindTravelDaySelect() {
  dom.travelDaySelect?.addEventListener("change", () => {
    state.selectedDay = Math.min(TRIP_DAYS, Math.max(1, Number(dom.travelDaySelect.value) || 1));
    localStorage.setItem("bali-java-selected-day", String(state.selectedDay));
    refreshTravelMode();
  });
}

function bindLanguageButtons() {
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      localStorage.setItem("bali-java-lang", state.lang);
      renderLanguage();
      setNavMoreOpen(false);
    });
  });
}

function bindNav() {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      activateSection(button.dataset.target, { behavior: "smooth", scroll: true });
    });
  });
}

function bindNavMore() {
  dom.navMoreToggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = dom.navMoreToggle.getAttribute("aria-expanded") !== "true";
    setNavMoreOpen(isOpen);
  });

  dom.navMoreMenu?.addEventListener("click", (event) => event.stopPropagation());
  document.addEventListener("click", () => setNavMoreOpen(false));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dom.navMoreToggle?.getAttribute("aria-expanded") === "true") {
      setNavMoreOpen(false);
      dom.navMoreToggle.focus();
    }
  });
}

function bindHeroActions() {
  document.querySelectorAll("[data-hero-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-hero-target");
      activateSection(target, { behavior: "smooth", scroll: true });
    });
  });
}

function syncSectionFromHash() {
  const hash = window.location.hash.replace(/^#/, "");
  if (!hash) {
    return;
  }

  const sectionTarget = document.getElementById(hash) ? hash : null;
  if (sectionTarget && document.querySelector(`.nav-item[data-target="${sectionTarget}"]`)) {
    activateSection(sectionTarget, { behavior: "auto", scroll: true, hashValue: hash });
    return;
  }

  if (hash.startsWith("itinerary-day-")) {
    openDayCard(hash, { updateHash: false });
    activateSection("itinerary", { behavior: "auto", scroll: false, hashValue: hash });
    window.setTimeout(() => {
      scrollToElementWithOffset(document.getElementById(hash), { behavior: "auto" });
    }, 80);
  }
}

function updateScrollState() {
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = windowHeight > 0 ? (window.scrollY / windowHeight) * 100 : 0;
  dom.pageProgress.style.width = `${scrolled}%`;
}

window.addEventListener("scroll", updateScrollState);
window.addEventListener("resize", updateScrollState);
window.addEventListener("hashchange", syncSectionFromHash);

bindLanguageButtons();
bindNav();
bindNavMore();
bindHeroActions();
bindTravelDaySelect();
renderLanguage();
syncSectionFromHash();
updateScrollState();

if ("serviceWorker" in navigator && window.location.protocol === "https:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // The guide still works normally if offline caching is unavailable.
    });
  });
}
