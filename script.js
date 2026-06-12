const EXCHANGE_RATE = 531;
const TRIP_DAYS = 9;

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
    heroSubtitle: "先把步調交給海風，再一路走進火山、瀑布與神廟",
    heroDates: "2026 / 06 / 13 - 2026 / 06 / 21",
    heroDestinations: "水明漾 • 伊真火山 • Tumpak Sewu • 婆羅摩火山 • 瑪琅 • 日惹",
    heroIntro:
      "從峇里島的海風與寺廟開始，穿過爪哇的高原與火山夜路，在天亮前一路往山脊前進，等雲海、火山口與晨光慢慢展開。",
    heroSignals: ["海島放鬆", "火山健行", "凌晨出發", "長途轉場", "保暖外套必帶"],
    heroFacts: [
      ["旅程天數", "9天8夜"],
      ["主題節奏", "海島 × 火山 × 文化"],
      ["關鍵提醒", "早起、保暖、補水"]
    ],
    heroPrimaryCta: "先看每日行程",
    heroSecondaryCta: "看行前資訊",
    footerCopy: "把 2026 年 6 月這趟印尼旅行整理成一份邊走邊查、也值得慢慢讀的旅遊手冊。",
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
    overviewLabel: "旅程總覽",
    overviewTitle: "從海邊開始，穿過火山，最後在日惹安靜收尾",
    overviewLead:
      "這趟安排不是把景點一股腦塞滿，而是讓每一段都各司其職。峇里島負責把步調放慢，東爪哇負責留下最強的畫面，日惹則替整趟旅程收出餘韻。",
    snapshotLabel: "旅程摘要",
    snapshotTitle: "一眼看懂這趟旅程的體力、裝備與移動節奏",
    snapshotLead:
      "這不是只靠美景撐起來的路線，還包含凌晨出發、長途轉場與火山健行。先把這些關鍵節奏看清楚，旅途中會從容很多。",
    snapshotChips: ["Bali + Java", "3 個清晨火山 / 瀑布日", "2 段長距離轉場", "抓地鞋與保暖外套必帶", "腸胃敏感者保留彈性"],
    snapshotCards: [
      {
        label: "主要地點",
        value: "Bali / East Java / Yogyakarta",
        note: "Seminyak、Ijen、Tumpak Sewu、Bromo、Malang、Yogyakarta 串成一條很完整的路線。"
      },
      {
        label: "旅行主題",
        value: "海島、火山、日出、文化",
        note: "前段讓身體慢下來，中段把畫面拉滿，最後用神廟與城市把情緒收好。"
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
        note: "這趟不只是住在不同城市，移動本身就是旅程的一部分。"
      },
      {
        label: "住宿節奏",
        value: "海邊放鬆 → 火山補眠 → 城市收尾",
        note: "每一段住宿都在替下一段做準備，不只是找個地方過夜而已。"
      },
      {
        label: "必備裝備",
        value: "抓地鞋、保暖層、雨水防護",
        note: "火山和瀑布日比造型更看重機能，尤其是鞋子、外套與防水裝備。"
      },
      {
        label: "特別留意",
        value: "補水、腸胃、曬傷、山區低溫",
        note: "火山日前一晚吃清爽一點，長途移動日多補水，峇里島白天日照也很強。"
      }
    ],
    highlightsLabel: "旅程亮點",
    highlightsTitle: "整趟旅程最值得期待的幾個段落",
    highlightsLead:
      "這趟好看的地方，不在於一天塞了多少點，而是每個高光都被放在很剛好的位置上。",
    journeyHighlights: [
      {
        kicker: "06/13 - 06/14｜Bali",
        title: "海風、飯店與慢下來的前段",
        desc: "先把峇里島留給睡眠、海邊、按摩與度假節奏，不急著證明自己去了多少地方，後面的冒險才會走得舒服。",
        tags: ["海島日", "度假節奏", "Seminyak"]
      },
      {
        kicker: "06/15｜跨島轉場",
        title: "從海邊一路切進火山線",
        desc: "上午還在 Bali 的度假感裡，下午就開始往東爪哇前進。這一天像是旅程正式翻頁，從柔軟進到冒險。",
        tags: ["長途移動", "跟團接送", "火山序章"]
      },
      {
        kicker: "06/16｜Ijen",
        title: "摸黑上山，等藍火和天色一起亮",
        desc: "Ijen 的迷人，不只在藍火，而是在黑夜、硫磺氣味、冷風和晨光交錯時，整座山慢慢顯形的那段過程。",
        tags: ["凌晨出發", "藍火", "火山健行"]
      },
      {
        kicker: "06/17 - 06/18｜Sewu + Bromo",
        title: "瀑布谷底與火山高原的雙重高潮",
        desc: "先把腳踩進水氣和泥地裡，再把視線拉到高原日出。這兩天會累，但也幾乎撐起整趟旅行最強的畫面。",
        tags: ["偏累", "瀑布日", "日出高原"]
      },
      {
        kicker: "06/19｜火車轉場",
        title: "從凌晨與塵土回到城市的呼吸感",
        desc: "火山段結束後，用一段舒服的火車時間讓身體回魂，旅程也從冒險模式慢慢切回城市節奏。",
        tags: ["恢復日", "火車包廂", "城市切換"]
      },
      {
        kicker: "06/20 - 06/21｜Yogyakarta",
        title: "神廟、石塔與回程前的安靜收尾",
        desc: "最後把一天留給婆羅浮屠和普蘭巴南，再把隔天清晨留給回家的節奏。這樣的收尾會讓整趟旅行更完整。",
        tags: ["文化日", "神廟", "安靜收尾"]
      }
    ],
    previewLabel: "每日預覽",
    previewTitle: "每日故事卡",
    previewLead:
      "先看每一天的主題、體力節奏和最值得期待的畫面，再進詳細行程，旅途中會更知道自己今天該怎麼走。",
    practicalLabel: "實用資訊",
    practicalTitle: "旅途中會一直翻的實用資訊",
    practicalLead:
      "這一區把航班、住宿、火山健行、穿搭、補給和腸胃提醒收成好翻的手冊頁，而不是堆成一整面資料庫。",
    practicalSections: [
      {
        title: "航班與接送",
        intro: "把出發和回程的關鍵節點抓穩，整趟旅程會輕鬆很多。",
        chips: ["華航直飛去程", "回程兩段式", "提早到機場"],
        items: [
          ["去程節奏", "台北直飛峇里島，抵達時間適合直接進飯店與晚餐節奏。"],
          ["回程重點", "YIA 到雅加達是接續段，真正的國際長程段是雅加達回台北。"],
          ["接送習慣", "抵達日、跨島日和回程日都建議把飯店地址、接送點和付款憑證放在同一個手機資料夾。"]
        ]
      },
      {
        title: "城市間移動",
        intro: "這趟不是定點旅行，長途轉場本身就是一段風景與節奏切換。",
        chips: ["包車", "渡輪", "Jeep", "火車"],
        items: [
          ["火山順序", "目前主線是 Ijen → Tumpak Sewu → Bromo，走法清楚，節奏也最好。"],
          ["轉場心法", "長途車程日別把每一小時都排滿，留一點空白，旅程會更舒服。"],
          ["回程緩衝", "YIA 機場鐵路建議抓 06:00 左右的穩定班次，並至少提早 2 小時到機場。"]
        ]
      },
      {
        title: "今晚落腳",
        intro: "每一段住宿都各有角色：前段放鬆，中段補眠，後段收尾。",
        chips: ["Seminyak", "火山段", "Malang", "Yogyakarta"],
        items: [
          ["Bali 前段", "Seminyak 的飯店重點是把身體和心情都放鬆，好好睡、好好吃。"],
          ["火山段住宿", "這幾晚不是走奢華路線，而是讓凌晨出發前後都能順順接上。"],
          ["城市段收尾", "Malang 和 Yogyakarta 的住宿更偏向補體力與方便移動。"]
        ]
      },
      {
        title: "火山健行提醒",
        intro: "火山日最重要的不是意志力，而是前一晚準備得夠不夠好。",
        chips: ["凌晨出發", "保暖", "抓地鞋", "補水"],
        items: [
          ["出發前確認", "外套、水、行動電源、現金、口罩與手機電量，前一晚先整包放好。"],
          ["體感溫度", "Ijen 與 Bromo 的清晨會冷，建議採洋蔥式穿搭，比只帶一件厚外套更靈活。"],
          ["腳下條件", "路面可能有碎石、灰塵、坡度或濕滑路段，鞋底抓地力比造型重要。"]
        ]
      },
      {
        title: "穿搭與隨身裝備",
        intro: "不同天氣和地形要換不同思路，不需要帶很多，但要帶對。",
        chips: ["海島日", "城市日", "火山日", "長途移動日"],
        items: [
          ["海島日", "透氣衣物、防曬、墨鏡與涼鞋或好走的拖鞋最實用。"],
          ["城市日", "好走鞋、輕便衣物和一件薄外套，白天走路和晚上回飯店都舒服。"],
          ["火山日", "保暖外套、長褲、抓地力好的鞋、防風層、口罩和雨水防護都很值得帶。"],
          ["長途移動日", "舒服的衣物、薄外套、腸胃備品與簡單零食，會比漂亮穿搭更有感。"]
        ]
      },
      {
        title: "餐食與補給",
        intro: "吃得舒服，比吃得滿更重要，尤其火山日前後會很有感。",
        chips: ["補水", "簡單零食", "清爽飲食"],
        items: [
          ["火山日前一晚", "避免太油、太辣或太重口味，身體會比較願意早起。"],
          ["長途移動日", "水、電解質飲料或小零食放在最容易拿的位置，車上會很需要。"],
          ["腸胃敏感者", "不用勉強跟著大家每餐都吃一樣，保留一點彈性，旅途反而更順。"]
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
        intro: "這一區不是要嚇人，只是把真正有用的提醒放在你會找到的地方。",
        chips: ["Bali Belly", "防曬", "塞車", "保留彈性"],
        items: [
          ["補水與腸胃", "瓶裝水比僥倖更便宜；冰塊、生食與半熟海鮮保守一點會比較安心。"],
          ["交通真實感", "峇里島塞車真的很常見，車程比地圖久很多是正常的，所以留緩衝很重要。"],
          ["身體節奏", "如果哪天真的累了，優先調整節奏，不必硬撐著把每一個點都完成。"]
        ]
      }
    ],
    previewCta: "查看當日指南",
    dayGuideAtGlanceLabel: "今日概覽",
    dayGuideFlowLabel: "今日路線",
    dayGuideDetailLabel: "時間與節奏",
    dayGuideReminderLabel: "特別提醒",
    dayGuideLinksLabel: "相關連結",
    coverLabel: "旅程敘事",
    coverTitle: "真正迷人的，不是去了多少地方，而是這段路怎麼被安排",
    coverLead:
      "前兩天先讓海邊和飯店把身心調順，接著進入火山與瀑布的凌晨節奏，再回到日惹，用神廟、街區和比較安靜的步調把旅程收尾。整條線讀起來很順，也很適合真的照著走。",
    coverPoints: [
      ["前段放鬆", "Seminyak 這兩天不用把行程塞滿，好好住、好好吃、好好休息，後面才有餘裕。"],
      ["中段冒險", "Ijen、Sewu、Bromo 各有自己的高點，順著走下去，氣氛和強度會慢慢堆起來。"],
      ["結尾收束", "到日惹後步調自然慢下來，神廟和市區剛好替整趟旅程收得安穩。"]
    ],
    volcanoCaption: "Bromo 晨光",
    volcanoCredit: "Photo by Arya Krisdyantara / Unsplash",
    beachCaption: "Bali 海色",
    beachCredit: "Photo by Santhosh Mocharla / Unsplash",
    routeLabel: "航班與路線",
    routeTitle: "航班與移動路線",
    routeLead: "把班機、行李和主要轉場整理在一起，出發前或回程前快速對一遍，心裡會穩很多。",
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
      ["資訊取捨", "頁面只保留查行程真的會用到的資訊，不放訂位代碼等敏感內容。"]
    ],
    trainLabel: "鐵道路線",
    trainTitle: "火車移動",
    trainLead:
      "Day 7 比較像一段修復時光，不是硬趕路。這裡把 Argo Semeru 最值得知道的艙等重點和購票方向整理好，之後查起來會更快。",
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
      "如果這段想坐得舒服一點，Argo Semeru 的最高等級艙位很值得看。Journey.tw 整理的重點很明確：Compartment Suites 是 16 間獨立包廂、1-1 配置，座椅可旋轉，也能接近平躺，適合把這段當成真正的休息時間。",
    trainFacts: [
      ["建議路線", "Malang / Surabaya 端銜接 → Yogyakarta"],
      ["最高等級", "Compartment Suites"],
      ["空間結構", "16 個獨立包廂、1 人 1 間"],
      ["座椅特色", "可旋轉、可躺平、私密性較高"],
      ["參考票價", "約 Rp2,050,000 - Rp2,250,000"]
    ],
    trainNotes: [
      "火山段結束後接這種比較安靜的移動方式，身體會舒服很多。",
      "如果 Day 7 想過得輕鬆一點，直接選最高等級艙位會比較有感。",
      "票價和艙等仍可能調整，接近出發日再查一次最準。"
    ],
    trainBuyTitle: "如何買票",
    trainBuyLead: "這裡只留下真正訂票時會用到的重點，查起來比較不累。",
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
    toursLabel: "包套行程",
    toursTitle: "已訂與待訂行程",
    toursLead: "把這趟真正會影響旅程節奏的包套行程收在一起，之後要核對內容、費用或連結，不必再回頭翻聊天紀錄。",
    tourLinkLabel: "看行程內容",
    toursList: [
      {
        dates: "4D3N",
        area: "已訂火山團",
        hotel: "Ijen • Papuma • Tumpak Sewu • Bromo",
        localName: "Java Volcano Tour Operator",
        stars: "火山冒險",
        image: "./assets/tours/jvto-volcano-tour.jpg",
        note: "這是整趟最累、也最值得的一段。重點不是住得豪華，而是把藍火、瀑布和火山日出順順接起來。",
        details: [
          "從 Bali 出發的 4 日團",
          "公開頁面常見住宿：Luminor / Doho / Joglo Kecombrang",
          "行程順序是 Ijen → Papuma / Sewu → Bromo"
        ],
        url: "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n",
        linkLabel: "JVTO 行程頁",
        extraLinks: [["我們的訂單", "https://javavolcano-touroperator.com/my-booking/622ade825711ac21113a8d292da3dbdf"]]
      },
      {
        dates: "私人一日遊",
        area: "計畫預訂",
        hotel: "Borobudur（登塔＋導覽）＋ Prambanan",
        localName: "Klook 婆羅浮屠與普蘭巴南寺廟之旅",
        stars: "文化日",
        image: "./assets/tours/klook-borobudur-prambanan.webp",
        note: "這團就是目前 Day 8 要用的版本，重點很明確：婆羅浮屠登塔加導覽，再接普蘭巴南寺廟，一天把文化核心收完整。",
        details: [
          "婆羅浮屠登塔＋導覽",
          "普蘭巴南寺廟行程",
          "適合直接放在 Day 8 的文化重點日"
        ],
        url: "https://s.klook.com/c/4yVrZ02036",
        linkLabel: "Klook 頁面",
        extraLinks: []
      }
    ],
    stayLabel: "住宿安排",
    stayTitle: "住宿安排",
    stayLead: "每一段住宿都有自己的角色：前面讓人放鬆，中段撐住體力，最後讓城市行程和回程都更從容。每個飯店都附上 Google Maps 連結。",
    stayMapLabel: "Google Maps",
    stayTourLabel: "Tour 頁面",
    linksLabel: "常用連結",
    linksTitle: "常用連結整理",
    linksLead: "把旅途中最常反覆打開的網站集中收好，出發前和路上都不用手忙腳亂。",
    resourceLinkCta: "前往查看",
    linksHighlights: [
      ["共用文件", "雲端資料夾與行前資料集中放在一起"],
      ["交通", "火山 tour、火車與機場鐵路"],
      ["入境", "eVisa、Love Bali 與 All Indonesia"]
    ],
    infoLabel: "實用資訊",
    infoTitle: "印尼實用資訊",
    infoLead: "把真正會反覆查的資訊都收進這一頁，臨時要確認時，不用再翻聊天紀錄或雲端文件。",
    infoPanelOneTitle: "出發前先知道的事",
    infoPanelTwoTitle: "旅途中會用到的提醒",
    infoCostsLabel: "花費筆記",
    infoCostsTitle: "目前已知花費與代墊筆記",
    infoCostsLead: "先把目前已記下來的金額集中放好，之後只要再補餐飲、計程車和購物，整趟旅程的花費輪廓就會很完整。",
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
      ["婆羅浮屠", "Borobudur 每週一休館，購票時也要分清楚是否包含登塔；能登塔的票通常比較值得。"],
      ["火山與瀑布裝備", "火山段記得帶保暖外套、口罩、護目鏡與防沙包包；瀑布段則要準備短褲、朔溪鞋、防水外套和替換衣物。"],
      ["服飾尺寸", "如果打算買當地服飾，版型常會比台灣小 1 到 2 個尺寸，試穿時可以先往大一號拿。"],
      ["支付方式", "目前整理可用的有實體信用卡、Line Pay、PX Pay、台灣 Pay 與 Apple Pay，但仍建議備少量現金。"]
    ],
    infoCosts: [
      ["機票", "NT$20,494，華航往返。"],
      ["住宿", "每人約 NT$9,202，尚未把稅金完全補進去。"],
      ["簽證與旅遊稅", "簽證 NT$941 + 峇里島旅遊稅 NT$280，共 NT$1,221。"],
      ["eSIM", "NT$469。"],
      ["KAI 個人隔間火車", "Rp2,614,500，文件換算約 NT$4,738 / 2 人，也就是每人約 NT$2,369；目前標記為陽代墊。"],
      ["日惹神廟一日遊", "NT$2,610 / 2 人，約每人 NT$1,305；目前標記為陽代墊。"],
      ["火山 4 日團", "訂金約 NT$3,994；2026/05/30 已付剩餘 80% 尾款 Rp8,433,700，約 NT$14,838，文件標記為陽代墊待對帳。"],
      ["仍待補項目", "計程車、吃飯、伴手禮、零食、服飾、換匯與機捷停車場，之後再補就會完整。"]
    ],
    transportTitle: "移動節奏",
    packingTitle: "穿著與隨身準備",
    itineraryLabel: "每日行程",
    itineraryTitle: "每日行程",
    itineraryLead: "這一頁不是把行程拆成待辦清單，而是把每天真正的節奏寫清楚：什麼時候出發、今天的主題是什麼、最值得期待的畫面在哪裡。",
    itineraryHighlights: [
      ["旅程走法", "先讓身體慢下來，再把高潮留給火山與瀑布，最後回到日惹安靜收尾"],
      ["最有記憶點", "Ijen 藍火、Tumpak Sewu 谷底和 Bromo 日出會把整趟旅程的畫面撐起來"],
      ["閱讀方式", "先看起床與集合，再看今日旅程和貼心提醒"]
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
    budgetStyleNote: "高品質自由行，非奢華，但體驗非常完整",
    budgetTableStatus: "狀態",
    budgetTableItem: "項目",
    budgetTableDetail: "說明",
    budgetTableAmount: "金額",
    budgetStatusPaid: "已支付",
    budgetStatusOpen: "未支付",
    mapLabel: "旅行地圖",
    mapTitle: "旅程地圖",
    mapLead: "把住宿、景點和機場動線攤開來看，移動時比較不容易慌，也更能掌握每天的距離感。",
    mapRouteLink: "看整段路線",
    mapDayLabel: "每日動線",
    mapDayRoutes: [
      ["第 1 天", "水明漾悠閒度假日", DAY_ROUTE_URLS.day1],
      ["第 2 天", "Seminyak 慢慢放鬆", DAY_ROUTE_URLS.day2],
      ["第 3 天", "離開海邊，進入火山線", DAY_ROUTE_URLS.day3],
      ["第 4 天", "Ijen 的藍火與天光", DAY_ROUTE_URLS.day4],
      ["第 5 天", "走進 Tumpak Sewu 谷底", DAY_ROUTE_URLS.day5],
      ["第 6 天", "Bromo 日出與高原冷風", DAY_ROUTE_URLS.day6],
      ["第 7 天", "從火山回到城市", DAY_ROUTE_URLS.day7],
      ["第 8 天", "神廟與石塔的一天", DAY_ROUTE_URLS.day8],
      ["第 9 天", "把旅程好好帶回家", DAY_ROUTE_URLS.day9]
    ],
    visaLabel: "入境準備",
    visaTitle: "簽證與入境",
    visaLead: "入境前要做的事情其實不多，只要照順序處理、把憑證收好，抵達那天就會輕鬆很多。",
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
      ["雲端共用文件", "SharePoint 行前資料夾", "https://nkustedutw-my.sharepoint.com/my?id=%2Fpersonal%2F2103104122%5Fnkust%5Fedu%5Ftw%2FDocuments%2FShare%2F%E5%8D%B0%E5%B0%BC%E6%96%87%E4%BB%B6&viewid=2a3a1f21%2D456e%2D419a%2D955a%2Dd3c3e1c5e692"],
      ["Seminyak 飯店", "Courtyard by Marriott Bali Seminyak Resort 官方網站", "https://www.marriott.com/en-us/hotels/dpssm-courtyard-bali-seminyak-resort/"],
      ["Malang 飯店", "The Shalimar Boutique Hotel 官方網站", "https://theshalimarhotel.co.id/"],
      ["日惹飯店", "Aveta Hotel Malioboro 官方網站", "https://avetahotelmalioboro.com/"],
      ["火山 tour", "Java Volcano Tour Operator 官方頁面", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
      ["火山 tour 訂單", "JVTO 我的訂單頁面", "https://javavolcano-touroperator.com/my-booking/622ade825711ac21113a8d292da3dbdf"],
      ["婆羅浮屠行程", "Klook 婆羅浮屠（登塔＋導覽）和普蘭巴南寺廟之旅", "https://s.klook.com/c/4yVrZ02036"],
      ["Argo Semeru 介紹", "Journey.tw 的火車艙位文章", "https://journey.tw/ka-argo-semeru/"],
      ["機場鐵路", "YIA Airport Rail Link 官方訂票頁", "https://reservation.railink.co.id/"],
      ["印尼 eVisa", "印尼官方簽證申請入口", "https://evisa.imigrasi.go.id/"],
      ["Love Bali", "峇里島旅遊稅官方網站", "https://lovebali.baliprov.go.id/"],
      ["All Indonesia", "印尼官方入境整合系統", "https://allindonesia.imigrasi.go.id/"]
    ],
    overviewStats: [
      ["旅程天數", "9天8夜", "前段 Bali、中央火山線、尾段日惹，節奏很完整。"],
      ["主要區域", "Seminyak / East Java / Yogyakarta", "海邊、火山、瀑布、神廟和城市都在這條線上。"],
      ["體力節奏", "2 天輕鬆、3 天偏累、1 天恢復", "最硬的是 Ijen、Tumpak Sewu、Bromo 連續段。"],
      ["早起程度", "3 個凌晨 / 清晨日", "抓地鞋、保暖外套、補水與睡眠都要提早準備。"]
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
      ["Day 1", "水明漾悠閒度假日", "第一天下午不需要逞強，把抵達、入住、夕陽、晚餐、逛街和按摩排成一條順順的路線，反而更像真正的巴里島開場。", ["機場抵達", "海灘夕陽", "Beach Club", "SPA"], [["抵達時間", "14:35 抵達 DPS（Ngurah Rai International Airport）。"], ["入境完成", "15:05 完成入境與領行李。"], ["搭車時間", "15:15 搭 Grab 前往飯店，約 15:45 抵達 Courtyard by Marriott Bali Seminyak Resort。"], ["入住時間", "16:00 完成 Check-in，先回房換上度假服裝。"], ["飯店放鬆", "16:00–17:30 先享受泳池、池畔酒吧、房間休息，把第一天下午留給放鬆。"], ["夕陽時間", "17:30 步行約 5 分鐘到 Seminyak Beach，6 月日落約 18:05。"], ["晚餐安排", "18:30–20:00 推薦 Potato Head Beach Club，海景夕陽、晚餐、調酒和 DJ 音樂一次收齊。"], ["逛街安排", "20:00–21:30 可逛 The Flea Market 與 Kayu Aya Street，找洋裝、草編包、香氛和度假服飾。"], ["SPA 時段", "21:30–23:00 推薦 Ssamaya Balinese Spa，可做 60 分鐘 Balinese Massage 或 90 分鐘 Aromatherapy Massage。"], ["最晚睡覺時間", "23:00 回飯店睡覺，第一天不要排太滿，把體力留給後面的火山段。"]], {
        date: "06 / 13 Sat",
        region: "峇里島｜Seminyak",
        theme: "機場抵達、夕陽、Beach Club 與 SPA",
        effort: "輕鬆｜度假日",
        tone: "beach",
        badges: ["海灘夕陽", "Beach Club", "SPA"],
        preview: "這天的重點不是趕景點，而是讓抵達、夕陽、晚餐和按摩自然接起來，輕鬆把身體切進巴里島節奏。",
        guide: "Day 1 最適合做成一條毫不費力的度假動線：機場進飯店、飯店走到海邊、海邊接晚餐、晚餐接逛街、最後用按摩把飛行疲勞收掉。",
        atGlance: [
          ["抵達時間", "14:35 抵達 DPS，約 16:00 完成飯店 Check-in"],
          ["主要移動", "DPS → Grab → Courtyard Seminyak → 步行海邊 / 晚餐 / 逛街 / SPA"],
          ["體力節奏", "輕鬆，以消化飛行疲勞和進入度假模式為主"],
          ["今日穿著", "入住後可直接換上度假服裝，晚上海邊與逛街都以輕便涼爽為主"],
          ["餐食與補給", "Beach Club 晚餐為主，下午和晚間都記得補水"],
          ["今晚落腳", "Courtyard by Marriott Bali Seminyak Resort"]
        ],
        routeFlow: [
          ["14:35–16:00｜抵達、入境與入住", "14:35 抵達 DPS，15:05 完成入境和領行李，15:15 搭 Grab，約 16:00 完成飯店 Check-in。"],
          ["16:00–17:30｜飯店放鬆", "先把下午留給泳池、池畔酒吧、房間休息和換上度假服裝，不建議第一天排太滿。"],
          ["17:30–18:30｜Seminyak Beach 夕陽", "從飯店步行約 5 分鐘就能到海邊，6 月日落約 18:05，剛好適合散步和拍照。"],
          ["18:30–20:00｜Potato Head Beach Club 晚餐", "把第一晚留給海景夕陽、晚餐、調酒與 DJ 音樂，這樣的 Bali 開場會很完整。"],
          ["20:00–21:30｜The Flea Market / Kayu Aya Street", "晚餐後剛好順路逛水明漾街區，洋裝、草編包、香氛、泳裝和手工藝品都很適合這段時間慢慢看。"],
          ["21:30–23:00｜SPA 收尾", "最後用 Ssamaya Balinese Spa 把飛行和舟車勞頓洗掉，按完直接回飯店睡覺。"]
        ],
        reminders: [
          "第一天下午以放鬆為主，不建議再塞遠距離景點，替後面的火山段留體力更值得。",
          "6 月日落約 18:05，17:30 從飯店步行去海邊最剛好。",
          "如果確定要去 Potato Head 或晚間 SPA，先訂位 / 預約會更安心。"
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
      ["Day 2", "Seminyak 慢慢過的一天", "這天適合把鬧鐘放鬆一點，把 beach club、按摩、散步和好好吃飯留給 Seminyak，讓度假的感覺真正開始。", ["海邊放空", "brunch", "慢慢過"], [["起床時間", "08:30 前後起床即可；想睡晚一點也可以。"], ["出門時間", "如果要去吃早午餐或 beach club，10:00 前後出門最剛好。"], ["集合時間", "今天沒有固定集合，自由安排即可。"], ["最晚睡覺時間", "建議 23:00 前休息，隔天開始進入移動段。"], ["今日亮點", "把一天交給海邊、按摩和自在發呆，讓 Seminyak 的度假感慢慢長出來。"], ["貼心提醒", "海邊日照很強，也可以趁今天把火山段要用的小物補齊。"]], {
        date: "06 / 14 Sun",
        region: "峇里島｜Seminyak",
        theme: "海岸放鬆、按摩與補給的一天",
        effort: "輕鬆",
        tone: "beach",
        badges: ["防曬", "自由安排", "補給日"],
        preview: "睡晚一點、慢慢吃、再把喜歡的海邊或按摩排進去，這一天就是要把度假感做滿。",
        guide: "今天不是證明體力的日子，而是把步調放鬆，替後面幾天的火山與瀑布做準備。",
        atGlance: [
          ["出發時間", "10:00 前後出門最剛好"],
          ["主要移動", "Seminyak 周邊短距離移動為主"],
          ["體力節奏", "輕鬆，可以自由調整節奏"],
          ["今日穿著", "防曬、透氣衣物、涼鞋或好走拖鞋"],
          ["餐食與補給", "適合吃早午餐，也可以順手補零食和水"],
          ["今晚落腳", "Courtyard by Marriott Bali Seminyak Resort"]
        ],
        routeFlow: [
          ["上午｜慢慢醒來", "把睡眠睡飽一點，讓身體真的進入度假模式。"],
          ["午後｜海邊與按摩", "挑一個想待久一點的地方，比多跑幾個點更適合今天。"],
          ["夜晚｜收好火山段節奏", "把明後天的衣物、藥品、行動電源和防水小物先整理好。"]
        ],
        reminders: [
          "海邊日照和濕熱都很明顯，防曬與補水比想像中更重要。",
          "如果要買 eSIM、零食或腸胃藥，今天是最舒服的補貨時間。"
        ],
        links: [["今晚落腳", HOTEL_MAPS.seminyak]]
      }],
      ["Day 3", "離開海邊，進入火山線", "上午還在 Bali 的海邊節奏裡，下午就會一路往東爪哇前進。這是旅程從放鬆轉向冒險的分水嶺。", ["跨島轉場", "火山序章", "跟團移動"], [["起床時間", "08:00 起床最剛好；最晚不要超過 08:30。"], ["出門時間", "09:45 前把行李和早餐處理好，準備在飯店外等車。"], ["集合時間", "10:00 和 JVTO 司機會合，建議 09:50 就在飯店大廳待命。"], ["最晚睡覺時間", "建議 19:30 前睡，因為今晚其實只是在等隔天半夜起床。"], ["接送路線", "10:00 從 Bali 飯店出發後，會先前往 Gilimanuk Port，再搭 ferry crossing 到 Ketapang Port。"], ["午餐安排", "JVTO 公開行程沒有寫午餐 included，早餐吃飽一點，車上零食和水先準備好。"], ["今晚落腳", "約 14:30 左右入住 @ Luminor Hotel Banyuwangi，傍晚以休息為主，晚餐需自行安排。"]], {
        date: "06 / 15 Mon",
        region: "Bali → 東爪哇火山線",
        theme: "跨島轉場與冒險開場",
        effort: "普通｜長途移動",
        tone: "transfer",
        badges: ["包車接送", "渡輪", "早睡準備"],
        preview: "今天真正的目的地不是某一個景點，而是把自己穩穩送進東爪哇的火山節奏裡。",
        guide: "上午離開 Bali，下午切進東爪哇。這一天像旅程翻頁，從度假模式切換到冒險模式。",
        atGlance: [
          ["出發時間", "10:00 與 JVTO 司機會合"],
          ["主要移動", "包車 → Gilimanuk Port → ferry crossing → Ketapang Port → Banyuwangi"],
          ["體力節奏", "普通，但會坐很久，重點是保存精神"],
          ["今日穿著", "舒服衣物、薄外套、好坐車的鞋"],
          ["餐食與補給", "早餐先吃飽；午餐未含，零食與水放隨身包最實際"],
          ["今晚落腳", "Luminor Hotel Banyuwangi"]
        ],
        routeFlow: [
          ["上午｜10:00 Bali 接車", "JVTO 司機會從飯店接人，接著一路往 Gilimanuk Port 前進，正式離開海島度假段。"],
          ["中午｜港口與渡輪 crossing", "從 Gilimanuk Port 搭 ferry crossing 到 Ketapang Port，這一段就是旅程切進東爪哇的分界點。"],
          ["午後｜Ketapang → Banyuwangi", "抵港後再轉車約 30 分鐘進 Banyuwangi 市區，14:30 左右可入住 Luminor Hotel Banyuwangi。"],
          ["夜晚｜補眠優先", "今晚沒有硬塞景點，晚餐自理，真正重要的是整理裝備、洗好澡、提早睡。"]
        ],
        reminders: [
          "今晚先把外套、口罩、頭燈或手機照明、水和行動電源放到最容易拿的位置。",
          "明天是半夜起床日，別把晚餐拖太晚，能提早休息就提早休息。"
        ],
        links: [
          ["JVTO 四日遊", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
          ["我們的訂單", "https://javavolcano-touroperator.com/my-booking/622ade825711ac21113a8d292da3dbdf"],
          ["Luminor Hotel Banyuwangi", HOTEL_MAPS.luminor]
        ]
      }],
      ["Day 4", "Ijen 的藍火與天光", "半夜離開住宿點，摸黑往 Ijen 前進。先看藍火，再等火山湖和天色一起亮起來，整天都像在夢裡。", ["藍火", "夜行", "火山湖天光"], [["起床時間", "當地時間 23:45 起床；台灣時間 00:45。"], ["出門時間", "00:20 前完成退房與上車準備，00:30 準時出發。"], ["集合時間", "00:20 在住宿點門口或大廳集合最保險。"], ["最晚睡覺時間", "建議前一晚 20:30 前就寢，能睡多少算多少。"], ["健行起點", "約 02:00 抵達 Ijen 區，從 Paltuding 開始健行，單程抓 1.5 到 2 小時。"], ["午餐安排", "12:00 午餐 included，地點是 @ Baratha Hotel & Resto。"], ["午後行程", "16:00 會接上 Papuma Beach Sunset Tour，看完夕陽後再前往今晚住宿。"], ["今晚落腳", "約 20:00 入住 @ Doho Homestay；晚餐未含，需自行安排。"]], {
        date: "06 / 16 Tue",
        region: "東爪哇｜Ijen",
        theme: "凌晨出發、藍火與火山湖",
        effort: "偏累｜火山健行",
        tone: "volcano",
        badges: ["凌晨出發", "保暖", "抓地鞋"],
        preview: "深夜出發、清晨看藍火與火山湖，是整趟最有『冒險真的開始了』感覺的一天。",
        guide: "今天的關鍵不是走多快，而是保暖、補水、穩穩走，讓自己有餘裕迎接整段黑夜到清晨的變化。",
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
          ["清晨｜Paltuding 起登 Ijen", "約 02:00 從 Paltuding 開始健行，先追藍火，再等火山湖和天色一起亮起來。"],
          ["中午｜Baratha 補給", "12:00 午餐 included @ Baratha Hotel & Resto，下山後先補水和熱量，讓身體回神。"],
          ["午後｜Papuma Beach Sunset Tour", "16:00 接上 Papuma 海灘日落段，今天不是只有火山，還會在海邊收一個傍晚。"],
          ["夜晚｜入住 Doho Homestay", "約 20:00 抵達 Doho Homestay，晚餐自理，先把休息擺第一位。"]
        ],
        reminders: [
          "火山區清晨氣溫低，洋蔥式穿搭會比只帶一件厚外套更有彈性。",
          "硫磺區口罩真的會用到，晚餐又是自理，記得留一點體力和胃口給晚上。"
        ],
        links: [
          ["JVTO 四日遊", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
          ["我們的訂單", "https://javavolcano-touroperator.com/my-booking/622ade825711ac21113a8d292da3dbdf"],
          ["Doho Homestay", HOTEL_MAPS.doho]
        ]
      }],
      ["Day 5", "走進 Tumpak Sewu 谷底", "今天是腳力和意志都會被叫醒的一天。沿著濕滑山徑一路下到谷底，瀑布真正出現在眼前時，辛苦就有了答案。", ["瀑布谷底", "水霧", "最費腿的一天"], [["起床時間", "當地時間 02:45 起床；台灣時間 03:45。"], ["出門時間", "03:20 前把行李收好，03:30 直接上車。"], ["集合時間", "03:20 在住宿點門口集合最穩。"], ["最晚睡覺時間", "建議前一晚 20:30 前休息，這天體力消耗會很大。"], ["早餐安排", "06:30 Breakfast included，先把熱量補起來，後面下切瀑布區會比較穩。"], ["瀑布段", "07:30 開始 Tumpak Sewu Waterfall Tour，下切步道約 30 到 45 分鐘。"], ["午餐安排", "12:00 午餐 included，下山後可以先換乾衣服再補給。"], ["午後轉場", "13:00 離開瀑布區，約 4 小時車程前往 Bromo 一帶住宿。"], ["今晚落腳", "約 17:00 入住 @ Joglo Kecombrang Bromo；晚餐需自行安排。"]], {
        date: "06 / 17 Wed",
        region: "東爪哇｜Tumpak Sewu",
        theme: "瀑布谷底、水霧與長下坡",
        effort: "偏累｜瀑布健行",
        tone: "waterfall",
        badges: ["濕滑地形", "換洗衣物", "補水"],
        preview: "今天會累，也會濕，但當你真的站進瀑布谷底，看見整片水霧和千瀑之谷時，就會知道這段值得。",
        guide: "這一天比速度更重要的是穩定下坡、保護膝蓋和把防水裝備帶齊，讓自己舒服地走完。",
        atGlance: [
          ["出發時間", "03:30 直接出發前往瀑布"],
          ["主要移動", "包車 → Tumpak Sewu 步道 → 午餐 → 4 小時車程 → Bromo 住宿"],
          ["體力節奏", "偏累，今天最吃腿力與耐心"],
          ["今日穿著", "短褲或快乾褲、抓地鞋、防潑水外套"],
          ["餐食與補給", "早餐與午餐皆 included；回程後記得補水和換乾衣服"],
          ["今晚落腳", "Joglo Kecombrang Bromo"]
        ],
        routeFlow: [
          ["清晨｜06:30 早餐 included", "先在出發後把早餐吃好，這樣進瀑布區時體力和專注度都會比較穩。"],
          ["上午｜07:30 Tumpak Sewu Waterfall Tour", "沿著濕滑步道一路下切，官方描述下切段約 30 到 45 分鐘，但整段體感會比數字更累。"],
          ["中午｜12:00 午餐補給", "離開瀑布區後先補午餐，再整理濕衣物和手機防水裝備。"],
          ["午後｜13:00 轉往 Bromo", "接著是約 4 小時車程前往 Bromo，一路顛簸下來，能睡就盡量睡。"],
          ["傍晚｜入住 Joglo Kecombrang", "約 17:00 check in，晚餐自理，今晚的主題只有一件事：早睡。"]
        ],
        reminders: [
          "鞋底抓地力比造型重要，瀑布步道真的會滑。",
          "下午還有長車程到 Bromo，換乾衣服、先吃飽、先補水，晚上才比較不會整個虛掉。"
        ],
        links: [
          ["JVTO 四日遊", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
          ["我們的訂單", "https://javavolcano-touroperator.com/my-booking/622ade825711ac21113a8d292da3dbdf"],
          ["Joglo Kecombrang Bromo", HOTEL_MAPS.kecombrang]
        ]
      }],
      ["Day 6", "Bromo 日出與高原冷風", "Jeep、寒風、火山灰與日出會在同一個清晨一起出現。Bromo 不是單一觀景點，而是一整片高原地景慢慢甦醒的過程。", ["Jeep", "冷風", "日出視野"], [["起床時間", "當地時間 01:15 起床；台灣時間 02:15。"], ["出門時間", "01:50 前穿好保暖層，02:00 準時搭 Jeep 出發。"], ["集合時間", "01:50 在飯店外等 Jeep，避免臨時找人。"], ["最晚睡覺時間", "建議前一晚 19:30 前就寢，這樣至少能補一小段睡眠。"], ["觀景段", "03:30 開始 Bromo Sunrise Tour，先看星空 / 銀河，再等日出把火山高原慢慢照亮。"], ["早餐安排", "10:00 回到飯店早餐 @ Joglo Kecombrang Bromo。"], ["下午送達", "16:00 左右結束 Bromo 段，包車會繼續送往 Surabaya 市區飯店或機場，車程約 2 到 3 小時。"], ["住宿提醒", "JVTO 四日遊今天結束，今晚住宿需要自行安排。"]], {
        date: "06 / 18 Thu",
        region: "東爪哇｜Bromo → 城市段",
        theme: "高原日出、Jeep 與下山後的回神",
        effort: "偏累｜凌晨出發",
        tone: "volcano",
        badges: ["Jeep", "高原冷風", "下山補眠"],
        preview: "今天會很早、很冷，也很值得。等光線慢慢掃過火山高原時，前幾天的辛苦會突然變得很合理。",
        guide: "Bromo 日出真正考驗的不是拍照，而是凌晨的保暖、補水與精神管理；下山後記得把恢復體力當成行程的一部分。",
        atGlance: [
          ["出發時間", "02:00 Jeep 出發"],
          ["主要移動", "Jeep 上山 → Bromo Sunrise Tour → 回飯店早餐 → 下午送往 Surabaya"],
          ["體力節奏", "偏累，但比昨天更冷、更需要保暖"],
          ["今日穿著", "保暖外套、長褲、口罩或 Buff、抓地鞋"],
          ["餐食與補給", "10:00 回飯店早餐；午後長車程前可再備簡單零食"],
          ["今晚落腳", "JVTO 行程結束後，自行安排城市住宿"]
        ],
        routeFlow: [
          ["凌晨｜02:00 搭 Jeep 上山", "天還沒亮就出發，冷風、灰塵和顛簸都會一起來，先把保暖和口罩顧好。"],
          ["清晨｜03:30 Bromo Sunrise Tour", "先看星空 / 銀河，再等晨光慢慢把整片火山高原照亮，這是東爪哇段很經典的收尾。"],
          ["上午｜10:00 回飯店早餐", "回到 Joglo Kecombrang Bromo 後先吃早餐，把身體從冷風裡慢慢拉回來。"],
          ["午後｜16:00 送往 Surabaya", "四日遊最後會接一段 2 到 3 小時車程，送往 Surabaya 市區飯店或機場，真正的重點是別再硬排多餘行程。"]
        ],
        reminders: [
          "凌晨風很直，保暖層、口罩和帽子都會有感。",
          "今天不只要看日出，還要把後續 drop-off 和今晚住宿銜接想好，行程才不會在最後一段亂掉。"
        ],
        links: [
          ["JVTO 四日遊", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
          ["我們的訂單", "https://javavolcano-touroperator.com/my-booking/622ade825711ac21113a8d292da3dbdf"],
          ["Joglo Kecombrang Bromo", HOTEL_MAPS.kecombrang]
        ]
      }],
      ["Day 7", "從火山回到城市步調", "把凌晨與塵土留在身後，接著用一段舒服的火車時間滑進日惹。這天的任務不是趕路，而是把身體和心情重新安頓好。", ["火車包廂", "城市轉場", "把步調放回來"], [["起床時間", "當地時間 07:00 起床；台灣時間 08:00。"], ["出門時間", "08:00 從飯店出發去車站最剛好，還有時間進 VIP 貴賓室。"], ["集合時間", "今天沒有另外集合，08:00 直接從飯店搭車去車站。"], ["最晚睡覺時間", "建議 22:30 前休息，隔天神廟日還要早起。"], ["今日亮點", "火山段結束後，這一天像一口長呼吸，讓旅程從極限早起模式切回比較從容的城市旅行。"], ["移動方式", "火車這段的重點是舒服、準時和不狼狽，行李與到站接駁先想好就會很順。"]], {
        date: "06 / 19 Fri",
        region: "瑪琅 / 泗水 → 日惹",
        theme: "火車轉場與城市回穩",
        effort: "普通｜長途移動",
        tone: "city",
        badges: ["火車包廂", "恢復日", "VIP lounge"],
        preview: "這一天比較像修復日，用一段舒服的火車時間把身體和心情從火山模式慢慢帶回城市節奏。",
        guide: "今天不必再硬撐熱血，把舒服、準時和不狼狽當成主題，旅程會突然變得很高級。",
        atGlance: [
          ["出發時間", "08:00 從飯店前往車站"],
          ["主要移動", "飯店 → 車站 → Argo Semeru → Yogyakarta"],
          ["體力節奏", "普通，重點是恢復與整理"],
          ["今日穿著", "舒服衣物、薄外套、好坐車的鞋"],
          ["餐食與補給", "早餐吃好、車上補水、抵達後再安排晚餐"],
          ["今晚落腳", "Aveta Hotel Malioboro"]
        ],
        routeFlow: [
          ["上午｜前往車站", "提早到會比壓線舒服很多，也比較有餘裕進 VIP lounge 慢慢等車。"],
          ["白天｜火車上的長呼吸", "把這段路程當成修復時間，整理照片、補眠或單純看風景都很適合。"],
          ["午後｜回到城市", "抵達日惹後節奏自然慢下來，今晚不需要太貪心，把體力留給明天的神廟日。"]
        ],
        reminders: [
          "火山段後的疲勞通常這天才會真正浮上來，所以補水和坐下休息都很重要。",
          "行李上車前先確認最常拿的東西放外層，列車上會輕鬆很多。"
        ],
        links: [
          ["Argo Semeru 介紹", "https://journey.tw/ka-argo-semeru/"],
          ["今晚落腳", HOTEL_MAPS.yogyakarta]
        ]
      }],
      ["Day 8", "神廟與石塔的一天", "火山之後，把一天留給婆羅浮屠和普蘭巴南剛剛好。石塔、尖塔與導覽裡的故事，會替整趟旅程補上文化的厚度。", ["婆羅浮屠", "普蘭巴南", "文化收尾"], [["起床時間", "當地時間 05:15 起床；台灣時間 06:15。"], ["出門時間", "06:20 前到大廳等車最穩，接駁通常落在 06:30 到 07:30 之間。"], ["集合時間", "建議 06:20 在飯店大廳集合，避免司機提早到。"], ["最晚睡覺時間", "建議前一晚 22:00 前休息，文化日也會走滿一整天。"], ["文化亮點", "婆羅浮屠的層層石塔和普蘭巴南的尖塔線條，會讓這趟旅程多出完全不同的記憶點。"], ["穿著與補給", "白天會熱、走路也多，衣服穿輕一點，水和防曬不要省。"]], {
        date: "06 / 20 Sat",
        region: "日惹｜Borobudur + Prambanan",
        theme: "文化日、石塔與寺廟故事",
        effort: "普通",
        tone: "temple",
        badges: ["早起", "導覽行程", "白天偏熱"],
        preview: "今天的高潮不是刺激，而是讓步調慢下來，走進婆羅浮屠和普蘭巴南的石塔、故事與尺度感裡。",
        guide: "經過前幾天的山路和清晨後，今天的節奏會比較安靜，但走路時間一樣不少，水和防曬還是很重要。",
        atGlance: [
          ["出發時間", "06:20 在大廳等車最穩"],
          ["主要移動", "Klook 接駁 → Borobudur → Prambanan → 回飯店"],
          ["體力節奏", "普通，走路多但不會像火山日那樣硬"],
          ["今日穿著", "透氣衣物、好走鞋、帽子或防曬用品"],
          ["餐食與補給", "早餐先吃，白天隨身帶水，午餐留彈性"],
          ["今晚落腳", "Aveta Hotel Malioboro"]
        ],
        routeFlow: [
          ["清晨｜接駁出發", "今天一樣要早起，但節奏比火山日溫和很多，把早餐和水先處理好就很夠。"],
          ["上午｜婆羅浮屠", "跟著導覽慢慢看石塔、層次和視角，會比匆忙拍照更有記憶點。"],
          ["午後｜普蘭巴南", "寺廟線條和氣氛和婆羅浮屠很不一樣，剛好讓一天的文化感受更完整。"],
          ["夜晚｜城市收尾", "回到日惹後，留一點時間給晚餐和安靜整理，隔天就要準備回程了。"]
        ],
        reminders: [
          "白天會熱、走路會多，水、防曬和舒服的鞋比造型更重要。",
          "如果腸胃容易敏感，中午別吃太刺激，保持輕盈一點會比較舒服。"
        ],
        links: [["Klook 行程", "https://s.klook.com/c/4yVrZ02036"]]
      }],
      ["Day 9", "把旅程好好帶回家", "回程雖然很早，但只要前一晚收得整齊，今天其實只剩穩穩銜接每一段移動，把這趟印尼的記憶平安帶回家。", ["清晨移動", "機場銜接", "回家"], [["起床時間", "當地時間 04:40 起床收行李；台灣時間 05:40。"], ["出門時間", "05:25 從飯店出發去機場最穩，抓早不抓晚。"], ["集合時間", "今天沒有固定集合，05:25 準時離開飯店即可。"], ["最晚睡覺時間", "建議前一晚 21:30 前休息，回程日會很早開始。"], ["回程節奏", "今天的關鍵不是再塞一個景點，而是穩穩把每個銜接抓好，讓回程不要慌。"], ["出發前檢查", "護照、手機、充電器、轉接頭和伴手禮出門前再看一次，少一樣都麻煩。"]], {
        date: "06 / 21 Sun",
        region: "日惹 → 雅加達 → 台北",
        theme: "清晨移動與平安回家",
        effort: "普通｜回程日",
        tone: "return",
        badges: ["早起", "機場銜接", "回家"],
        preview: "今天不需要再追最後一個景點，把每一段銜接抓穩，回程反而會走得很漂亮。",
        guide: "回程日最重要的不是速度，而是穩定。東西前一晚先收好，清晨就只要照節奏移動。",
        atGlance: [
          ["出發時間", "05:25 從飯店出發去機場"],
          ["主要移動", "飯店 → YIA → 雅加達 → 台北"],
          ["體力節奏", "普通，但精神上容易疲累"],
          ["今日穿著", "舒服衣物、薄外套、好活動的鞋"],
          ["餐食與補給", "機場與轉機段記得補水，隨身留點零食"],
          ["今晚落點", "飛機上，回到台灣"]
        ],
        routeFlow: [
          ["清晨｜離開飯店", "今天的節奏很早，但只要前一晚收得整齊，就不會手忙腳亂。"],
          ["上午｜機場與接續段", "國內段接國際段時，把護照、登機證和充電設備一直放在手邊。"],
          ["夜晚｜把旅程收好", "回到台灣後真正要做的只有一件事：好好休息，讓這趟旅程留在身體裡。"]
        ],
        reminders: [
          "轉機日比平常更需要補水，也別等到餓過頭才找東西吃。",
          "出門前確認護照、手機、充電器、轉接頭和伴手禮都在，今天少一樣都會很麻煩。"
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
    heroSubtitle: "Beach first, volcano mornings next, temples at the end",
    heroDates: "2026 / 06 / 13 - 2026 / 06 / 21",
    heroDestinations: "Seminyak • Ijen • Tumpak Sewu • Bromo • Malang • Yogyakarta",
    heroIntro:
      "Start with Bali's sea air and temple silhouettes, then move into East Java's night roads, crater rims, waterfall valleys, and sunrise viewpoints before easing into Yogyakarta.",
    heroSignals: ["Island reset", "Volcano hikes", "Pre-dawn starts", "Long transfer days", "Warm layer required"],
    heroFacts: [
      ["Trip length", "9 days / 8 nights"],
      ["Travel mood", "Coast × volcanoes × temples"],
      ["Pack first", "Grip shoes, warm layer, water"]
    ],
    heroPrimaryCta: "Open the itinerary",
    heroSecondaryCta: "Check practical info",
    footerCopy: "A June 2026 Bali and Java trip guide organized for quick checks on both phone and desktop.",
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
    overviewLabel: "Journey overview",
    overviewTitle: "A well-paced Indonesia route: easy at first, adventurous in the middle, quiet at the end",
    overviewLead: "The point of this route is not to cram in more places. It gives each stretch a job: Bali for rest, East Java for the big moments, and Yogyakarta for a calmer finish.",
    snapshotLabel: "Trip snapshot",
    snapshotTitle: "A quick read on the pace, gear, and effort this route really asks for",
    snapshotLead:
      "This is not only a scenic route. It also comes with pre-dawn starts, long transfers, and a few physically demanding days, so it helps to read the rhythm before you go.",
    snapshotChips: ["Bali + Java", "3 early waterfall / volcano mornings", "2 major transfer days", "Grip shoes and a warm layer matter", "Leave room for weather and stomach changes"],
    snapshotCards: [
      {
        label: "Main areas",
        value: "Bali / East Java / Yogyakarta",
        note: "Seminyak, Ijen, Tumpak Sewu, Bromo, Malang, and Yogyakarta form one clean line."
      },
      {
        label: "Trip theme",
        value: "Island, volcano, sunrise, culture",
        note: "The early days soften the pace, the middle stretch delivers the strongest views, and the end settles into a calmer city mood."
      },
      {
        label: "Effort level",
        value: "Moderate to tiring",
        note: "Day 4 to Day 6 is the hardest run, especially the midnight and pre-dawn departures."
      },
      {
        label: "Early starts",
        value: "3 serious wake-up days",
        note: "Ijen, Sewu, and Bromo all work better if you respect sleep the night before."
      },
      {
        label: "Transport mix",
        value: "Flights, private car, ferry, Jeep, train",
        note: "The movement itself is part of the trip, not just a way to get between hotels."
      },
      {
        label: "Stay rhythm",
        value: "Resort ease → short recovery stays → city finish",
        note: "Each hotel is there to support the next part of the route, not simply to fill a night."
      },
      {
        label: "Useful gear",
        value: "Grip shoes, warm layer, rain protection",
        note: "The volcano and waterfall days reward function much more than style."
      },
      {
        label: "Watch for",
        value: "Hydration, traffic, stomach, cold mornings",
        note: "Eat lighter before the volcano days, keep water close, and expect mountain mornings to feel cold."
      }
    ],
    highlightsLabel: "Journey highlights",
    highlightsTitle: "The stretches that give this route its shape",
    highlightsLead:
      "What makes this trip memorable is not how many places fit on the map, but how each high point arrives at the right moment.",
    journeyHighlights: [
      {
        kicker: "06/13 - 06/14｜Bali",
        title: "A soft opening by the sea",
        desc: "Seminyak gives the trip room to settle in: good sleep, slower mornings, and enough coast-and-cafe time to arrive properly before the tougher stretch begins.",
        tags: ["Island days", "Resort pace", "Seminyak"]
      },
      {
        kicker: "06/15｜Transfer day",
        title: "Leaving the coast for the volcano line",
        desc: "The route turns here. Bali's resort ease gives way to ferry crossings, long roads, and the feeling that the real adventure chapter has started.",
        tags: ["Long transfer", "Tour pickup", "Adventure chapter"]
      },
      {
        kicker: "06/16｜Ijen",
        title: "A night walk into blue fire and dawn light",
        desc: "Ijen is not only about the blue fire. It is about cold wind, sulfur air, darkness, and the strange moment the crater slowly appears with daylight.",
        tags: ["Pre-dawn start", "Blue fire", "Volcano hike"]
      },
      {
        kicker: "06/17 - 06/18｜Sewu + Bromo",
        title: "Waterfall canyon first, volcanic plateau next",
        desc: "The trip peaks physically here: wet footing, valley descents, Jeep tracks, and then the open highland view at sunrise.",
        tags: ["Tiring stretch", "Waterfall day", "Sunrise plateau"]
      },
      {
        kicker: "06/19｜Train day",
        title: "A gentler day to come back to yourself",
        desc: "After the dust and midnight wake-ups, the train segment lets the body reset and the trip step back into a city rhythm again.",
        tags: ["Recovery day", "Train suite", "City reset"]
      },
      {
        kicker: "06/20 - 06/21｜Yogyakarta",
        title: "Temples, stone terraces, and a quiet finish",
        desc: "Borobudur and Prambanan bring a different kind of depth, then the final morning carries the whole trip home in a steadier tone.",
        tags: ["Culture day", "Temple line", "Quiet finish"]
      }
    ],
    previewLabel: "Day-by-day preview",
    previewTitle: "Daily story cards",
    previewLead:
      "Read the theme, effort, and most memorable image of each day first. It makes the detailed itinerary much easier to use on the road.",
    practicalLabel: "Practical info",
    practicalTitle: "The pages you will keep reopening during the trip",
    practicalLead:
      "Flights, transfers, volcano prep, clothing, food, and stomach notes are grouped here in a way that feels like a handbook instead of a database.",
    practicalSections: [
      {
        title: "Flights and airport flow",
        intro: "If the departure and return rhythm feels clear, the whole trip feels calmer.",
        chips: ["Direct outbound", "Two-part return", "Arrive early"],
        items: [
          ["Outbound shape", "Taipei to Bali is a clean direct leg, which makes arrival day much easier to handle."],
          ["Return structure", "Yogyakarta to Jakarta is the feeder leg; Jakarta to Taipei is the long-haul return that really matters."],
          ["What to save together", "Keep airport transfers, hotel addresses, visa records, and booking screenshots in one phone folder."]
        ]
      },
      {
        title: "Intercity movement",
        intro: "This is a moving route, not a stay-put holiday. The transfers are part of the experience.",
        chips: ["Private car", "Ferry", "Jeep", "Train"],
        items: [
          ["Volcano order", "The core route is Ijen → Tumpak Sewu → Bromo, which keeps the geography and energy flow clean."],
          ["Transfer mindset", "Do not overfill long-drive days. Leaving a little white space makes the whole trip easier to enjoy."],
          ["Airport buffer", "For the YIA airport train, a stable early-morning slot works better than trying to cut the timing too close."]
        ]
      },
      {
        title: "Where you sleep",
        intro: "Each stay has a purpose: slow down, recover, or make the next move easier.",
        chips: ["Seminyak", "Volcano segment", "Malang", "Yogyakarta"],
        items: [
          ["Bali start", "The Seminyak hotel is there to help the trip settle in with good sleep, easy meals, and softer pacing."],
          ["Volcano nights", "These are functional stays more than luxury stays. Their job is to support the early departures."],
          ["City finish", "Malang and Yogyakarta lean more toward recovery and practical movement than resort time."]
        ]
      },
      {
        title: "Volcano hiking reminders",
        intro: "The key is not toughness. The key is getting ready the night before.",
        chips: ["Pre-dawn", "Warm layer", "Grip shoes", "Hydration"],
        items: [
          ["Night-before check", "Lay out your jacket, water, power bank, mask, cash, and charged phone before sleeping."],
          ["Cold factor", "Ijen and Bromo can feel genuinely cold before sunrise, so light layers work better than one heavy piece."],
          ["Footing", "Expect dust, gravel, slopes, and occasional wet ground. Traction matters more than how the shoes look."]
        ]
      },
      {
        title: "Clothing and day gear",
        intro: "You do not need to overpack, but each part of the route asks for something different.",
        chips: ["Island days", "City days", "Volcano days", "Transfer days"],
        items: [
          ["Island days", "Breathable clothes, sun protection, sunglasses, and sandals or easy walking shoes are enough."],
          ["City days", "Comfortable shoes, lighter clothing, and a thin outer layer are usually the right balance."],
          ["Volcano days", "Bring long pants, a warm layer, grip shoes, a windproof layer, and simple rain or dust protection."],
          ["Transfer days", "Soft clothing, a light jacket, stomach supplies, and easy snacks feel more useful than a dressed-up look."]
        ]
      },
      {
        title: "Meals and small supplies",
        intro: "Feeling good matters more than eating ambitiously, especially around the volcano days.",
        chips: ["Hydration", "Light snacks", "Lighter dinner"],
        items: [
          ["Before volcano mornings", "Avoid overly greasy or spicy food the night before if you want the wake-up to feel easier."],
          ["On long movement days", "Keep water, electrolyte drinks, or small snacks where you can reach them quickly."],
          ["If your stomach is sensitive", "Do not force every meal to be shared. A little flexibility keeps the trip smoother."]
        ]
      },
      {
        title: "Payment and data",
        intro: "Cards cover a lot, while cash is still useful for small food stops, quick transport, and small local payments.",
        chips: ["Gojek", "eSIM", "Light cash"],
        items: [
          ["Data plan", "Installing the eSIM before leaving Taiwan saves time and stress after landing."],
          ["Ride apps", "Gojek is genuinely useful, and Grab still works well as a price check."],
          ["Cash strategy", "Do not rush to exchange too much at once. Smaller, useful amounts are usually enough to start."]
        ]
      },
      {
        title: "Health and safety",
        intro: "This section is meant to help, not to make the trip feel tense.",
        chips: ["Bali Belly", "Sun", "Traffic", "Flexibility"],
        items: [
          ["Water and stomach", "Bottled water is the easy choice. Be more cautious with ice, raw food, and half-cooked seafood."],
          ["Traffic reality", "Bali traffic regularly takes longer than the map suggests, so buffer time matters a lot."],
          ["Body rhythm", "If a day feels too heavy, it is fine to adjust the pace. This trip does not need to be won."]
        ]
      }
    ],
    previewCta: "Open day guide",
    dayGuideAtGlanceLabel: "Today at a glance",
    dayGuideFlowLabel: "Route flow",
    dayGuideDetailLabel: "Timing and rhythm",
    dayGuideReminderLabel: "Special reminders",
    dayGuideLinksLabel: "Useful links",
    coverLabel: "Narasi perjalanan",
    coverTitle: "What makes this trip work is the pacing",
    coverLead:
      "The early Bali days give the trip room to breathe. East Java brings the hardest starts and the strongest views. Yogyakarta closes things out in a steadier way, with temples, city walks, and a slower rhythm.",
    coverPoints: [
      ["Soft opening", "Seminyak works best when it stays light: good sleep, good meals, and time to settle in before the tougher days."],
      ["Adventure core", "Ijen, Sewu, and Bromo each bring a different kind of effort and a different payoff."],
      ["Clean finish", "Yogyakarta naturally slows the pace down again and gives the trip a more grounded ending."]
    ],
    volcanoCaption: "Bromo dawn",
    volcanoCredit: "Photo by Arya Krisdyantara / Unsplash",
    beachCaption: "Bali shoreline",
    beachCredit: "Photo by Santhosh Mocharla / Unsplash",
    routeLabel: "Flights and route",
    routeTitle: "Flights and route",
    routeLead: "Flights, baggage, and major transfers are grouped here so they are easy to check before departure and again on the way home.",
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
      ["Departure note", "For the international leg, arriving early is still the calmer option. Keep passport, e-ticket, and payment records together the night before."],
      ["Connection note", "The main international return sector is CI762. The YIA → CGK portion is the feeder segment, and the operating carrier should still be confirmed on the final ticket and airport display."],
      ["What is included here", "This page keeps the practical flight details, but leaves out sensitive information such as the booking code."]
    ],
    trainLabel: "Rail chapter",
    trainTitle: "Train transfer",
    trainLead:
      "Day 7 is more of a recovery day than a rush day. This page keeps the Argo Semeru notes practical: which class matters and how to buy it.",
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
      "If you want this transfer to feel genuinely comfortable, Argo Semeru's top class is the one to look at. Journey.tw notes that Compartment Suites has 16 private cabins in a 1-1 layout, with seats that rotate and recline close to flat, so the experience feels much closer to a small private room than a standard train seat.",
    trainFacts: [
      ["Suggested use", "East Java transfer day toward Yogyakarta"],
      ["Highest class", "Compartment Suites"],
      ["Layout", "16 private cabins, one traveler per room"],
      ["Seat feature", "Rotates and reclines nearly flat"],
      ["Reference fare", "About Rp2,050,000 - Rp2,250,000"]
    ],
    trainNotes: [
      "This is a very sensible place to spend a little more after the rougher volcano days.",
      "If comfort is the point, the highest class is the upgrade that actually changes the experience.",
      "Fares and availability can still move, so it is worth checking again close to departure."
    ],
    trainBuyTitle: "How to buy it",
    trainBuyLead: "These notes are stripped down to the parts that actually matter when you go to book.",
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
    toursLead: "Booked and planned tours live here in one place, which makes later re-checks much easier.",
    tourLinkLabel: "View details",
    toursList: [
      {
        dates: "4D3N",
        area: "Booked volcano tour",
        hotel: "Ijen • Papuma • Tumpak Sewu • Bromo",
        localName: "Java Volcano Tour Operator",
        stars: "Adventure core",
        image: "./assets/tours/jvto-volcano-tour.jpg",
        note: "This is the hardest stretch of the trip and probably the most memorable, with blue fire, waterfall terrain, and a sunrise volcano finish.",
        details: [
          "4-day route starting from Bali",
          "Public page shows sample stays: Luminor / Doho / Joglo Kecombrang",
          "Core order is Ijen → Papuma / Sewu → Bromo"
        ],
        url: "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n",
        linkLabel: "JVTO tour page",
        extraLinks: [["Our booking", "https://javavolcano-touroperator.com/my-booking/622ade825711ac21113a8d292da3dbdf"]]
      },
      {
        dates: "Private day tour",
        area: "Planned booking",
        hotel: "Borobudur climb + guided visit + Prambanan",
        localName: "Klook Borobudur and Prambanan temple day tour",
        stars: "Culture day",
        image: "./assets/tours/klook-borobudur-prambanan.webp",
        note: "This is now the Day 8 version in use: Borobudur with climb and guided access, then Prambanan, all kept in one cleaner temple day flow.",
        details: [
          "Borobudur climb with guided visit",
          "Prambanan temple stop",
          "A clean fit for the main culture day"
        ],
        url: "https://s.klook.com/c/4yVrZ02036",
        linkLabel: "Klook page",
        extraLinks: []
      }
    ],
    stayLabel: "Stay plan",
    stayTitle: "Where you stay",
    stayLead: "Each stay has a clear role: rest at the start, recovery in the middle, and a smoother city finish at the end. Every hotel includes a Google Maps link.",
    stayMapLabel: "Google Maps",
    stayTourLabel: "Tour page",
    linksLabel: "Useful links",
    linksTitle: "Useful official links",
    linksLead: "This page gathers the websites you are most likely to reopen before departure or during the trip.",
    resourceLinkCta: "Visit site",
    linksHighlights: [
      ["Shared docs", "Cloud folder for all prep notes and files"],
      ["Transport", "Volcano tour, train, and airport rail"],
      ["Entry", "eVisa, Love Bali, and All Indonesia"]
    ],
    infoLabel: "Practical info",
    infoTitle: "Indonesia practical notes",
    infoLead: "This page keeps the practical details together: entry steps, money shortcuts, apps, time zones, and a few local habits worth remembering.",
    infoPanelOneTitle: "Before departure and local basics",
    infoPanelTwoTitle: "On-the-ground reminders",
    infoCostsLabel: "Cost notes",
    infoCostsTitle: "Known costs and shared advances",
    infoCostsLead: "These amounts are kept here as a working expense note. Once food, taxis, and shopping are added, the picture will be much more complete.",
    infoHighlights: [
      ["Prep order", "Shared folder → eVisa → Bali levy → All Indonesia"],
      ["Payment style", "Cards are useful in formal places, so cash can stay light"],
      ["Useful app", "Gojek is worth setting up, with Grab as a quick price check"],
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
      ["Shared folder", "Keeping the whole prep pack in one SharePoint folder makes the trip much easier to manage on both phone and desktop."],
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
      ["KAI compartment train", "Rp2,614,500 total, noted as roughly NT$4,738 for 2 people, or about NT$2,369 per person, currently marked as advanced by Yang."],
      ["Temple day tour", "NT$2,610 for 2 people, or about NT$1,305 per person, currently marked as advanced by Yang."],
      ["4-day volcano tour", "The deposit is noted at about NT$3,994. The remaining 80% was paid on 2026-05-30 as Rp8,433,700, or about NT$14,838, and is still marked as advanced by Yang for reconciliation."],
      ["Still to add", "Taxis, meals, souvenirs, snacks, clothes, exchanged cash, and airport parking are still open."]
    ],
    transportTitle: "Transport and timing",
    packingTitle: "Packing and safety",
    itineraryLabel: "Day by day",
    itineraryTitle: "Daily itinerary",
    itineraryLead: "Each day now reads more like a real travel handbook: first the rhythm, then the timing, then the part worth looking forward to.",
    itineraryHighlights: [
      ["Trip arc", "Sea first, volcanoes next, temples and city at the end"],
      ["Most cinematic", "Ijen blue fire, Sewu, and Bromo dawn each peak in a different way"],
      ["How to use this page", "Check wake-up and meet-up times first, then read what the day is really about"]
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
    budgetStyleNote: "High-quality DIY trip, not luxury, but very complete",
    budgetTableStatus: "Status",
    budgetTableItem: "Item",
    budgetTableDetail: "Detail",
    budgetTableAmount: "Amount",
    budgetStatusPaid: "Paid",
    budgetStatusOpen: "Open",
    mapLabel: "Map overview",
    mapTitle: "Map overview",
    mapLead: "Hotels, major stops, and the airport route are collected here so the map is easy to check on desktop or on your phone.",
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
    visaLead: "There are only a few entry steps to take care of. Do them in order, keep the records on your phone, and arrival should feel much easier.",
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
      ["Shared folder", "SharePoint prep folder", "https://nkustedutw-my.sharepoint.com/my?id=%2Fpersonal%2F2103104122%5Fnkust%5Fedu%5Ftw%2FDocuments%2FShare%2F%E5%8D%B0%E5%B0%BC%E6%96%87%E4%BB%B6&viewid=2a3a1f21%2D456e%2D419a%2D955a%2Dd3c3e1c5e692"],
      ["Seminyak hotel", "Official site for Courtyard by Marriott Bali Seminyak Resort", "https://www.marriott.com/en-us/hotels/dpssm-courtyard-bali-seminyak-resort/"],
      ["Malang hotel", "Official site for The Shalimar Boutique Hotel", "https://theshalimarhotel.co.id/"],
      ["Yogyakarta hotel", "Official site for Aveta Hotel Malioboro", "https://avetahotelmalioboro.com/"],
      ["Volcano tour", "Official Java Volcano Tour Operator page", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
      ["Volcano tour booking", "Our JVTO booking page", "https://javavolcano-touroperator.com/my-booking/622ade825711ac21113a8d292da3dbdf"],
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
      ["Day 1", "Seminyak arrival and easy first night", "Let the first Bali afternoon stay easy: land, check in, watch sunset, have dinner by the sea, browse Seminyak a little, then finish with a massage and real sleep.", ["Airport arrival", "Sunset", "Beach club", "Spa"], [["Arrival", "14:35 at DPS (Ngurah Rai International Airport)."], ["Immigration", "15:05 to clear arrival formalities and collect luggage."], ["Transfer", "15:15 Grab to the hotel, with arrival around 15:45 at Courtyard by Marriott Bali Seminyak Resort."], ["Check-in", "16:00 check-in, then change into lighter resort clothes."], ["Hotel break", "16:00–17:30 for the pool, pool bar, room rest, and a soft reset after the flight."], ["Sunset", "17:30–18:30 at Seminyak Beach, with sunset around 18:05 in mid-June."], ["Dinner", "18:30–20:00 at Potato Head Beach Club for dinner, drinks, and the evening sea view."], ["Seminyak walk", "20:00–21:30 around The Flea Market and Kayu Aya Street for dresses, woven bags, scent, swimwear, and resort pieces."], ["Spa", "21:30–23:00 at Ssamaya Balinese Spa, with either a 60-minute Balinese Massage or a 90-minute Aromatherapy Massage."], ["Sleep by", "Back at the hotel by 23:00. Keep the first day light and save energy for the volcano stretch."]]],
      ["Day 2", "Seminyak, unhurried", "Keep this day for beach time, massage, and the pleasure of moving slowly. Bali works best when it is allowed to feel easy.", ["Seminyak", "Beach club", "Slow day"], [["Wake-up", "Around 08:30 is a comfortable start, though sleeping in a little is fine."], ["Leave by", "If brunch or a beach club is on the plan, leaving around 10:00 is a good rhythm."], ["Meet-up", "No fixed meet-up today. Keep it flexible."], ["Sleep by", "Try to rest by 23:00 so the transfer day starts more smoothly tomorrow."], ["Style", "Treat this as a real resort day: sleep a little later, eat slowly, and stay where the mood feels right."], ["Reminder", "The sun is strong, and this is also a good day to pick up any last small items for the volcano stretch."]]],
      ["Day 3", "Into the volcano stretch", "Leave Bali in the morning and spend the afternoon moving east. This is where the trip turns from soft resort energy into the adventure chapter.", ["Tour transfer", "Adventure opens", "Cross-island move"], [["Wake-up", "08:00 is the best target, and 08:30 should be the latest. Daytime timing here is still the same as Taiwan."], ["Leave by", "Have breakfast and luggage ready by 09:45 so you can wait outside in time."], ["Meet-up", "Meet the JVTO driver at 10:00, and aim to be in the hotel lobby by 09:50."], ["Sleep by", "Try to sleep by 19:30, because tonight is really just a pause before the midnight wake-up stretch begins."], ["Key check", "Before leaving Bali, reconfirm the pickup flow, the route order, and the final drop-off so the next few days stay smooth."], ["Bag setup", "Keep water, snacks, power bank, and key documents within easy reach. You will keep using them on the road."]]],
      ["Day 4", "Ijen blue-fire night", "Set out after midnight for Ijen, chase the blue fire first, then watch the crater lake appear with daylight. It is one of the strangest and most memorable days of the trip.", ["Blue fire", "Night hike", "Crater lake"], [["Wake-up", "23:45 local time, which is 00:45 in Taiwan time."], ["Leave by", "Finish check-out and get ready by 00:20 so the 00:30 departure stays on time."], ["Meet-up", "Gather at the hotel entrance or lobby by 00:20."], ["Sleep by", "Try to sleep by 20:30 the night before. Any extra rest helps."], ["Highlight", "First comes the blue fire, then the crater lake as the sky brightens. The visuals keep changing all the way into morning."], ["Gear", "A headlamp, grip shoes, light jacket, and mask all matter here. This is not the day to pretend it is a casual stroll."]]],
      ["Day 5", "Down into Tumpak Sewu", "This is the hard-working waterfall day, but the moment you reach the valley and see the falls for real, the effort pays for itself.", ["Waterfall canyon", "Slippery terrain", "Change of clothes"], [["Wake-up", "02:45 local time, which is 03:45 in Taiwan time."], ["Leave by", "Pack up by 03:20 so you can get straight into the 03:30 departure."], ["Meet-up", "Meet outside the stay by 03:20."], ["Sleep by", "Try to rest by 20:30 the night before because this is one of the most physical days."], ["Terrain", "This is the day that feels most like stepping into a gorge and waterfall basin: wet, steep, tiring, and completely worth it."], ["Pack note", "A change of clothes, dry bags, and phone protection will feel like excellent decisions by the end of the day."]]],
      ["Day 6", "Bromo at first light", "Jeep tracks, cold air, volcanic dust, and sunrise all arrive together here. This is the classic East Java finale.", ["Jeep ride", "Dawn views", "Volcano finale"], [["Wake-up", "01:15 local time, which is 02:15 in Taiwan time."], ["Leave by", "Have warm layers on and be ready by 01:50 so the 02:00 Jeep departure stays clean."], ["Meet-up", "Meet outside the hotel by 01:50 to avoid rushing for the Jeep."], ["Sleep by", "Try to sleep by 19:30 the night before so you still get a short recovery window."], ["Highlight", "Bromo is not only about sunrise. It is about watching the whole volcanic landscape slowly appear out of the cold."], ["Reminder", "It can be genuinely cold before dawn, and masks or buffs help because the wind and dust do not stay gentle."]]],
      ["Day 7", "From volcanoes back to the city", "Leave the dust and midnight starts behind, then let a comfortable train ride ease you back into the city tempo of Yogyakarta.", ["Train day", "VIP lounge", "City switch"], [["Wake-up", "07:00 local time, or 08:00 in Taiwan time."], ["Leave by", "Leaving the hotel at 08:00 works well and still gives time for the VIP lounge."], ["Meet-up", "No separate meet-up today. Head to the station from the hotel at 08:00."], ["Sleep by", "Try to rest by 22:30 because the temple day starts early tomorrow."], ["Pacing", "This is the day the body gets to come back to itself, and the trip shifts from survival mode into a calmer city rhythm again."], ["Transport", "The goal here is comfort, punctuality, and not dragging luggage around in a panic. A little planning makes this leg feel very smooth."]]],
      ["Day 8", "Temple day", "Save one full day for Borobudur and Prambanan. After the volcano stretch, this is where the trip gains depth and calm.", ["Borobudur", "Prambanan", "Climb + guide"], [["Wake-up", "05:15 local time, or 06:15 in Taiwan time."], ["Leave by", "Be in the lobby by 06:20 so you are ready if the pickup comes early within the 06:30 to 07:30 window."], ["Meet-up", "A 06:20 hotel-lobby meet-up is the safest plan."], ["Sleep by", "Try to sleep by 22:00 the night before because this is still a full walking day."], ["Culture note", "Borobudur's layered stone terraces and Prambanan's sharp temple lines give the trip a completely different kind of memory."], ["Clothing note", "It will be hot and there is plenty of walking, so keep clothes light and do not skip water or sun protection."]]],
      ["Day 9", "Homeward, early and steady", "The day starts before dawn, but if the night before is packed well, all that remains is to move steadily and bring the trip home cleanly.", ["Early transfer", "Airport link", "Fly home"], [["Wake-up", "04:40 local time to pack and get moving, or 05:40 in Taiwan time."], ["Leave by", "Leaving the hotel at 05:25 is the safer plan. Earlier is better than late today."], ["Meet-up", "No fixed meet-up today. Just be ready to leave the hotel at 05:25."], ["Sleep by", "Try to rest by 21:30 the night before because the return day starts very early."], ["Timing", "Today is not about squeezing in one last stop. It is about keeping every connection calm and unhurried."], ["Last check", "Before you leave, check passport, phone, chargers, adapters, and souvenirs one more time. Missing even one item is annoying today."]]]
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
    heroKicker: "Catatan perjalanan Indonesia",
    heroTitle: "Bali × Jawa",
    heroSubtitle: "Mulai dari laut, lanjut ke gunung api, lalu ditutup dengan candi dan kota",
    heroDates: "2026 / 06 / 13 - 2026 / 06 / 21",
    heroDestinations: "Seminyak • Ijen • Tumpak Sewu • Bromo • Malang • Yogyakarta",
    heroIntro:
      "Perjalanan ini dimulai dari angin laut dan ritme santai Bali, lalu masuk ke jalan malam, lereng gunung api, air terjun, dan pemandangan fajar di Jawa sebelum berakhir lebih tenang di Yogyakarta.",
    heroSignals: ["Santai di pulau", "Hiking gunung api", "Berangkat dini hari", "Transfer panjang", "Jaket hangat wajib"],
    heroFacts: [
      ["Durasi", "9 hari / 8 malam"],
      ["Nuansa trip", "Pantai × gunung api × candi"],
      ["Barang penting", "Sepatu grip, layer hangat, air minum"]
    ],
    heroPrimaryCta: "Buka rencana harian",
    heroSecondaryCta: "Lihat info penting",
    footerCopy: "Panduan perjalanan Bali dan Jawa untuk Juni 2026 yang enak dicek cepat dari HP maupun desktop.",
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
    overviewLabel: "Ringkasan perjalanan",
    overviewTitle: "Rute Indonesia dengan ritme yang enak: santai dulu, lalu petualangan, lalu penutup yang tenang",
    overviewLead: "Rute ini bukan soal memasukkan sebanyak mungkin tempat. Setiap bagian punya perannya sendiri: Bali untuk istirahat, Jawa Timur untuk momen terbesar, dan Yogyakarta untuk penutup yang rapi.",
    snapshotLabel: "Ringkasan cepat",
    snapshotTitle: "Biar cepat paham ritme tenaga, perlengkapan, dan pola pindah kotanya",
    snapshotLead:
      "Rute ini bukan hanya indah, tetapi juga punya hari bangun dini hari, transfer panjang, dan beberapa hari yang cukup menguras tenaga. Lebih enak dibaca dulu sebelum jalan.",
    snapshotChips: ["Bali + Jawa", "3 pagi gunung api / air terjun", "2 transfer utama", "Sepatu grip dan jaket hangat penting", "Sisakan ruang untuk cuaca dan kondisi perut"],
    snapshotCards: [
      {
        label: "Area utama",
        value: "Bali / Jawa Timur / Yogyakarta",
        note: "Seminyak, Ijen, Tumpak Sewu, Bromo, Malang, dan Yogyakarta tersusun jadi satu jalur yang rapi."
      },
      {
        label: "Tema perjalanan",
        value: "Pulau, gunung api, sunrise, budaya",
        note: "Awalnya dipakai untuk menurunkan ritme, tengahnya untuk pemandangan terkuat, dan akhirnya untuk suasana kota yang lebih tenang."
      },
      {
        label: "Ritme tenaga",
        value: "Sedang sampai cukup berat",
        note: "Hari 4 sampai Hari 6 adalah segmen paling berat, terutama karena berangkat tengah malam atau sebelum subuh."
      },
      {
        label: "Seberapa pagi",
        value: "3 hari bangun serius",
        note: "Ijen, Sewu, dan Bromo akan jauh lebih nyaman kalau malam sebelumnya benar-benar dipakai untuk istirahat."
      },
      {
        label: "Transportasi utama",
        value: "Pesawat, mobil, ferry, Jeep, kereta",
        note: "Perpindahan antar kota di sini memang bagian dari pengalaman, bukan cuma selingan."
      },
      {
        label: "Ritme menginap",
        value: "Santai resort → recovery singkat → penutup kota",
        note: "Setiap hotel dipilih untuk mendukung bagian berikutnya, bukan sekadar tempat tidur."
      },
      {
        label: "Perlengkapan penting",
        value: "Sepatu grip, layer hangat, pelindung hujan",
        note: "Hari gunung api dan air terjun jauh lebih menghargai fungsi daripada gaya."
      },
      {
        label: "Yang perlu dijaga",
        value: "Air minum, macet, perut, dingin pagi",
        note: "Makan lebih ringan sebelum hari gunung api, simpan air dekat tangan, dan anggap pagi di gunung memang dingin."
      }
    ],
    highlightsLabel: "Sorotan perjalanan",
    highlightsTitle: "Bagian-bagian yang paling membentuk rasa trip ini",
    highlightsLead:
      "Yang membuat perjalanan ini terasa kuat bukan jumlah tempatnya, tetapi cara tiap momen utama datang di saat yang pas.",
    journeyHighlights: [
      {
        kicker: "13/06 - 14/06｜Bali",
        title: "Pembuka yang lembut di tepi laut",
        desc: "Seminyak memberi ruang untuk benar-benar tiba: tidur yang cukup, pagi yang tidak terburu-buru, dan ritme resort sebelum bagian yang lebih berat dimulai.",
        tags: ["Hari pulau", "Ritme resort", "Seminyak"]
      },
      {
        kicker: "15/06｜Hari transfer",
        title: "Meninggalkan pantai, masuk ke jalur gunung api",
        desc: "Di sinilah arah perjalanan berubah. Nuansa santai Bali pelan-pelan diganti jalan jauh, penyeberangan, dan rasa bahwa bab petualangan akhirnya benar-benar dimulai.",
        tags: ["Transfer jauh", "Penjemputan tour", "Bab petualangan"]
      },
      {
        kicker: "16/06｜Ijen",
        title: "Berjalan dalam gelap menuju blue fire dan cahaya pagi",
        desc: "Daya tarik Ijen bukan hanya blue fire, tetapi campuran udara dingin, bau belerang, gelap, dan momen saat kawah mulai muncul bersama terang pagi.",
        tags: ["Berangkat dini hari", "Blue fire", "Hiking gunung api"]
      },
      {
        kicker: "17/06 - 18/06｜Sewu + Bromo",
        title: "Lembah air terjun dulu, dataran tinggi gunung api sesudahnya",
        desc: "Bagian ini adalah puncak tenaga: jalan basah, turunan ke lembah, Jeep, lalu bentang tinggi gunung api saat matahari mulai muncul.",
        tags: ["Segmen berat", "Hari air terjun", "Dataran fajar"]
      },
      {
        kicker: "19/06｜Hari kereta",
        title: "Hari yang lebih lembut untuk mengembalikan napas",
        desc: "Sesudah debu dan alarm tengah malam, perjalanan kereta membuat tubuh punya waktu untuk pulih dan ritme kota datang kembali secara alami.",
        tags: ["Hari recovery", "Suite kereta", "Reset kota"]
      },
      {
        kicker: "20/06 - 21/06｜Yogyakarta",
        title: "Candi, teras batu, dan penutup yang tenang",
        desc: "Borobudur dan Prambanan memberi kedalaman yang berbeda, lalu pagi terakhir membawa seluruh perjalanan pulang dengan nada yang lebih tenang.",
        tags: ["Hari budaya", "Jalur candi", "Penutup tenang"]
      }
    ],
    previewLabel: "Preview harian",
    previewTitle: "Kartu cerita per hari",
    previewLead:
      "Lihat dulu tema, ritme tenaga, dan gambaran paling menarik dari tiap hari. Setelah itu, detail itinerary akan terasa lebih mudah dipakai saat di jalan.",
    practicalLabel: "Info praktis",
    practicalTitle: "Halaman yang paling sering akan dibuka ulang saat perjalanan",
    practicalLead:
      "Penerbangan, transfer, persiapan gunung api, pakaian, makanan, dan catatan perut dirangkum seperti buku pegangan, bukan seperti tumpukan data.",
    practicalSections: [
      {
        title: "Penerbangan dan alur bandara",
        intro: "Kalau ritme berangkat dan pulangnya jelas, seluruh perjalanan terasa jauh lebih tenang.",
        chips: ["Pergi langsung", "Pulang dua segmen", "Datang lebih awal"],
        items: [
          ["Struktur pergi", "Taipei ke Bali adalah penerbangan langsung yang sederhana, jadi hari tiba lebih mudah diatur."],
          ["Struktur pulang", "Yogyakarta ke Jakarta adalah segmen penghubung; bagian Jakarta ke Taipei adalah penerbangan utama yang paling penting."],
          ["Yang disimpan bersama", "Alamat hotel, bukti visa, transport bandara, dan screenshot pemesanan sebaiknya ada di satu folder HP."]
        ]
      },
      {
        title: "Pindah kota",
        intro: "Ini bukan liburan diam di satu tempat. Perpindahan kotanya memang bagian dari pengalaman.",
        chips: ["Mobil", "Ferry", "Jeep", "Kereta"],
        items: [
          ["Urutan gunung api", "Rute utama Ijen → Tumpak Sewu → Bromo paling enak karena alur geografis dan energinya rapi."],
          ["Cara melihat transfer", "Hari berkendara jauh jangan dipadati terlalu banyak hal. Sedikit ruang kosong justru membuat trip lebih enak."],
          ["Buffer bandara", "Untuk kereta bandara YIA, slot pagi yang stabil lebih aman daripada memotong waktu terlalu tipis."]
        ]
      },
      {
        title: "Tempat tidur tiap malam",
        intro: "Setiap hotel punya fungsi: melambat, memulihkan tenaga, atau memudahkan gerak berikutnya.",
        chips: ["Seminyak", "Segmen gunung api", "Malang", "Yogyakarta"],
        items: [
          ["Awal di Bali", "Hotel Seminyak dipakai untuk benar-benar tiba, tidur nyenyak, dan makan dengan ritme santai."],
          ["Malam gunung api", "Fungsinya lebih ke praktis daripada mewah. Yang penting sambung dengan baik ke jadwal berangkat dini hari."],
          ["Penutup kota", "Malang dan Yogyakarta lebih fokus ke recovery dan kemudahan pindah daripada suasana resort."]
        ]
      },
      {
        title: "Pengingat hiking gunung api",
        intro: "Kuncinya bukan sok kuat. Kuncinya justru beres malam sebelumnya.",
        chips: ["Dini hari", "Layer hangat", "Sepatu grip", "Air minum"],
        items: [
          ["Cek malam sebelumnya", "Susun jaket, air, power bank, masker, uang tunai, dan HP yang sudah diisi daya sebelum tidur."],
          ["Faktor dingin", "Ijen dan Bromo bisa terasa benar-benar dingin sebelum matahari naik, jadi layer tipis bertumpuk lebih berguna."],
          ["Kondisi pijakan", "Debu, batu kecil, tanjakan, dan kadang tanah basah adalah hal normal. Daya cengkeram sepatu lebih penting daripada model."]
        ]
      },
      {
        title: "Pakaian dan perlengkapan harian",
        intro: "Tidak perlu bawa terlalu banyak, tetapi tiap segmen memang meminta hal yang berbeda.",
        chips: ["Hari pulau", "Hari kota", "Hari gunung api", "Hari transfer"],
        items: [
          ["Hari pulau", "Pakaian adem, sun protection, kacamata hitam, dan sandal atau sepatu santai sudah cukup."],
          ["Hari kota", "Sepatu enak jalan, pakaian ringan, dan jaket tipis biasanya paling pas."],
          ["Hari gunung api", "Bawa celana panjang, layer hangat, sepatu grip, pelindung angin, dan perlindungan sederhana dari hujan atau debu."],
          ["Hari transfer", "Pakaian nyaman, jaket tipis, obat perut, dan snack kecil terasa lebih berguna daripada berpakaian terlalu rapi."]
        ]
      },
      {
        title: "Makan dan bekal kecil",
        intro: "Badan yang terasa enak lebih penting daripada makan terlalu ambisius, terutama di sekitar hari gunung api.",
        chips: ["Air minum", "Snack ringan", "Makan malam ringan"],
        items: [
          ["Sebelum hari gunung api", "Hindari makanan terlalu berminyak atau pedas malam sebelumnya kalau ingin bangun terasa lebih ringan."],
          ["Saat pindah jauh", "Simpan air, minuman elektrolit, atau snack kecil di tempat yang paling mudah dijangkau."],
          ["Kalau perut sensitif", "Tidak perlu memaksa semua makan bareng dengan menu yang sama. Sedikit fleksibel biasanya lebih baik."]
        ]
      },
      {
        title: "Pembayaran dan internet",
        intro: "Kartu cukup berguna di banyak tempat, tetapi uang tunai tetap berguna untuk makan kecil, transport cepat, dan pembayaran lokal sederhana.",
        chips: ["Gojek", "eSIM", "Uang tunai seperlunya"],
        items: [
          ["Internet", "Pasang eSIM sebelum berangkat dari Taiwan supaya setelah mendarat tidak perlu repot lagi."],
          ["Aplikasi transport", "Gojek sangat berguna, dan Grab tetap enak dipakai untuk banding harga."],
          ["Strategi uang tunai", "Tidak perlu langsung menukar terlalu banyak. Mulai dari jumlah kecil yang praktis biasanya cukup."]
        ]
      },
      {
        title: "Kesehatan dan keamanan",
        intro: "Bagian ini dibuat untuk membantu, bukan membuat perjalanan terasa tegang.",
        chips: ["Bali Belly", "Matahari", "Macet", "Fleksibel"],
        items: [
          ["Air dan perut", "Air botolan adalah pilihan paling mudah. Untuk es, makanan mentah, dan seafood setengah matang, lebih hati-hati biasanya lebih nyaman."],
          ["Realita macet", "Macet Bali sering lebih parah dari perkiraan peta, jadi waktu buffer benar-benar penting."],
          ["Ritme badan", "Kalau ada hari yang terasa terlalu berat, wajar untuk menurunkan tempo. Perjalanan ini tidak perlu dimenangkan."]
        ]
      }
    ],
    previewCta: "Buka panduan hari ini",
    dayGuideAtGlanceLabel: "Gambaran cepat",
    dayGuideFlowLabel: "Alur hari ini",
    dayGuideDetailLabel: "Waktu dan ritme",
    dayGuideReminderLabel: "Pengingat khusus",
    dayGuideLinksLabel: "Tautan berguna",
    coverLabel: "Narasi perjalanan",
    coverTitle: "Yang membuat perjalanan ini terasa pas adalah ritmenya",
    coverLead:
      "Dua hari awal di Bali memberi ruang untuk bernapas. Jawa Timur membawa bagian paling berat sekaligus paling mengesankan. Yogyakarta menutup semuanya dengan tempo yang lebih tenang, lewat candi, jalan kota, dan suasana sore.",
    coverPoints: [
      ["Pembuka lembut", "Seminyak paling enak dijalani tanpa terlalu padat: tidur cukup, makan enak, lalu pelan-pelan masuk ke ritme liburan."],
      ["Inti petualangan", "Ijen, Sewu, dan Bromo masing-masing punya tantangan dan hadiahnya sendiri."],
      ["Penutup rapi", "Yogyakarta membuat ritme perjalanan turun lagi dengan cara yang alami dan terasa pas."]
    ],
    volcanoCaption: "Fajar Bromo",
    volcanoCredit: "Photo by Arya Krisdyantara / Unsplash",
    beachCaption: "Laut Bali",
    beachCredit: "Photo by Santhosh Mocharla / Unsplash",
    routeLabel: "Penerbangan dan rute",
    routeTitle: "Penerbangan dan rute",
    routeLead: "Penerbangan, bagasi, dan perpindahan utama dikumpulkan di sini supaya gampang dicek sebelum berangkat dan sebelum pulang.",
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
      ["Catatan berangkat", "Untuk penerbangan internasional, datang lebih awal tetap pilihan yang lebih tenang. Siapkan paspor, e-ticket, dan bukti pembayaran sejak malam sebelumnya."],
      ["Catatan transit", "Segmen internasional utama adalah CI762. Bagian YIA → CGK adalah feeder segment, dan maskapai operasionalnya tetap perlu dicek lagi di tiket final dan layar bandara."],
      ["Yang ditampilkan di sini", "Halaman ini hanya menyimpan detail yang benar-benar berguna, tanpa menaruh informasi sensitif seperti kode booking."]
    ],
    trainLabel: "Bab kereta",
    trainTitle: "Transfer kereta",
    trainLead:
      "Hari ke-7 lebih cocok dipakai untuk recovery daripada buru-buru. Halaman ini merangkum hal penting tentang Argo Semeru: kelas yang layak dilihat dan cara belinya.",
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
      "Kalau transfer ini ingin terasa benar-benar nyaman, kelas tertinggi Argo Semeru layak dipertimbangkan. Menurut ringkasan Journey.tw, Compartment Suites punya 16 kabin privat dengan susunan 1-1, dan kursinya bisa diputar serta direbahkan hampir rata, jadi rasanya lebih dekat ke ruang pribadi kecil daripada kursi kereta biasa.",
    trainFacts: [
      ["Pemakaian ideal", "Hari transfer Jawa Timur menuju Yogyakarta"],
      ["Kelas tertinggi", "Compartment Suites"],
      ["Tata letak", "16 kabin privat, 1 orang per ruang"],
      ["Fitur kursi", "Bisa diputar dan direbahkan hampir rata"],
      ["Harga acuan", "Sekitar Rp2.050.000 - Rp2.250.000"]
    ],
    trainNotes: [
      "Ini memang paling cocok dipakai sebagai segmen recovery setelah hari-hari gunung api yang berat.",
      "Kalau yang dicari kenyamanan, kelas tertinggi adalah upgrade yang paling terasa bedanya.",
      "Harga dan ketersediaan masih bisa berubah, jadi tetap cek lagi mendekati hari berangkat."
    ],
    trainBuyTitle: "Cara beli tiket",
    trainBuyLead: "Ringkasan ini hanya menyisakan bagian yang paling berguna saat benar-benar akan membeli tiket.",
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
    toursLead: "Tur yang sudah dipesan dan yang masih direncanakan dikumpulkan di sini supaya nanti mudah dicek lagi tanpa harus mencari-cari link.",
    tourLinkLabel: "Lihat detail",
    toursList: [
      {
        dates: "4H3M",
        area: "Tur gunung api sudah dipesan",
        hotel: "Ijen • Papuma • Tumpak Sewu • Bromo",
        localName: "Java Volcano Tour Operator",
        stars: "Inti petualangan",
        image: "./assets/tours/jvto-volcano-tour.jpg",
        note: "Inilah bagian paling berat sekaligus paling membekas dari perjalanan ini: blue fire, medan air terjun, dan penutup sunrise gunung api.",
        details: [
          "Rute 4 hari berangkat dari Bali",
          "Halaman publik menampilkan contoh hotel: Luminor / Doho / Joglo Kecombrang",
          "Urutan utama adalah Ijen → Papuma / Sewu → Bromo"
        ],
        url: "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n",
        linkLabel: "Halaman JVTO",
        extraLinks: [["Pesanan kami", "https://javavolcano-touroperator.com/my-booking/622ade825711ac21113a8d292da3dbdf"]]
      },
      {
        dates: "Tur privat sehari",
        area: "Rencana booking",
        hotel: "Borobudur naik candi + tur berpemandu + Prambanan",
        localName: "Tur Klook Borobudur dan Prambanan",
        stars: "Hari budaya",
        image: "./assets/tours/klook-borobudur-prambanan.webp",
        note: "Ini sekarang jadi versi yang dipakai untuk Hari ke-8: Borobudur dengan naik candi dan panduan, lalu lanjut ke Prambanan, jadi hari budaya terasa lebih utuh.",
        details: [
          "Borobudur naik candi dengan panduan",
          "Kunjungan ke Candi Prambanan",
          "Cocok dipakai sebagai inti Hari ke-8"
        ],
        url: "https://s.klook.com/c/4yVrZ02036",
        linkLabel: "Halaman Klook",
        extraLinks: []
      }
    ],
    stayLabel: "Rencana menginap",
    stayTitle: "Rencana menginap",
    stayLead: "Setiap tempat menginap punya peran yang jelas: santai di awal, recovery di tengah, lalu penutup kota yang lebih praktis. Setiap hotel diberi link Google Maps.",
    stayMapLabel: "Google Maps",
    stayTourLabel: "Halaman tour",
    linksLabel: "Tautan resmi",
    linksTitle: "Tautan resmi",
    linksLead: "Semua situs yang kemungkinan akan sering dibuka sebelum berangkat atau saat perjalanan dikumpulkan di satu tempat.",
    resourceLinkCta: "Buka situs",
    linksHighlights: [
      ["Dokumen bersama", "Folder cloud untuk semua catatan dan file persiapan"],
      ["Transportasi", "Tour gunung api, kereta, dan kereta bandara"],
      ["Masuk", "eVisa, Love Bali, dan All Indonesia"]
    ],
    infoLabel: "Info praktis",
    infoTitle: "Info praktis Indonesia",
    infoLead: "Halaman ini menyimpan hal-hal praktis yang paling sering dicek ulang: urutan masuk, hitung uang, aplikasi, zona waktu, dan beberapa kebiasaan lokal.",
    infoPanelOneTitle: "Sebelum berangkat dan info dasar",
    infoPanelTwoTitle: "Pengingat saat di perjalanan",
    infoCostsLabel: "Catatan biaya",
    infoCostsTitle: "Biaya yang sudah diketahui",
    infoCostsLead: "Angka-angka ini dipindahkan dari dokumen planning sebagai memo biaya kerja. Setelah biaya makan, taksi, dan belanja ditambahkan, gambarnya akan jauh lebih lengkap.",
    infoHighlights: [
      ["Urutan persiapan", "Folder bersama → eVisa → levy Bali → All Indonesia"],
      ["Gaya bayar", "Tempat formal bisa pakai kartu, jadi uang tunai tidak perlu terlalu banyak"],
      ["Aplikasi penting", "Gojek sangat berguna, dan Grab bisa dipakai untuk banding harga"],
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
      ["Kereta kabin KAI", "Total Rp2.614.500, dicatat sekitar NT$4.738 untuk 2 orang, atau sekitar NT$2.369 per orang, saat ini ditandai sebagai talangan Yang."],
      ["Tur candi", "NT$2.610 untuk 2 orang, atau sekitar NT$1.305 per orang, saat ini ditandai sebagai talangan Yang."],
      ["Tur gunung api 4 hari", "Deposit dicatat sekitar NT$3.994. Sisa 80% dibayar pada 2026/05/30 sebesar Rp8.433.700, sekitar NT$14.838, dan masih ditandai sebagai talangan Yang untuk dicocokkan nanti."],
      ["Yang masih harus ditambah", "Taksi, makan, oleh-oleh, camilan, pakaian, hasil tukar uang, dan parkir bandara masih belum dimasukkan."]
    ],
    transportTitle: "Transportasi dan waktu",
    packingTitle: "Pakaian dan keamanan",
    itineraryLabel: "Rencana harian",
    itineraryTitle: "Rencana harian",
    itineraryLead: "Setiap hari sekarang dibaca seperti buku pegangan perjalanan sungguhan: lihat dulu ritmenya, lalu waktunya, lalu hal yang paling layak ditunggu.",
    itineraryHighlights: [
      ["Alur perjalanan", "Dimulai dari laut, lanjut gunung api, lalu ditutup candi dan kota"],
      ["Paling berkesan", "Blue fire Ijen, Sewu, dan fajar Bromo punya puncak rasa yang berbeda"],
      ["Cara pakai halaman ini", "Lihat dulu jam bangun dan jam kumpul, lalu baca inti hari itu"]
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
    budgetStyleNote: "Trip mandiri berkualitas, bukan mewah, tapi sangat lengkap",
    budgetTableStatus: "Status",
    budgetTableItem: "Item",
    budgetTableDetail: "Detail",
    budgetTableAmount: "Nominal",
    budgetStatusPaid: "Sudah",
    budgetStatusOpen: "Belum",
    mapLabel: "Peta perjalanan",
    mapTitle: "Ringkasan peta",
    mapLead: "Hotel, titik utama, dan rute ke bandara dikumpulkan di sini supaya mudah dicek, termasuk saat dibuka dari HP.",
    mapRouteLink: "Lihat rute lengkap",
    mapDayLabel: "Rute Harian",
    mapDayRoutes: [
      ["Hari 1", "Seminyak santai: sunset, makan malam, dan spa", DAY_ROUTE_URLS.day1],
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
    visaLead: "Langkah masuknya sebenarnya singkat. Urus satu per satu, simpan semua bukti di HP, lalu proses tiba biasanya akan terasa jauh lebih ringan.",
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
      ["Folder bersama", "Folder persiapan SharePoint", "https://nkustedutw-my.sharepoint.com/my?id=%2Fpersonal%2F2103104122%5Fnkust%5Fedu%5Ftw%2FDocuments%2FShare%2F%E5%8D%B0%E5%B0%BC%E6%96%87%E4%BB%B6&viewid=2a3a1f21%2D456e%2D419a%2D955a%2Dd3c3e1c5e692"],
      ["Hotel Seminyak", "Situs resmi Courtyard by Marriott Bali Seminyak Resort", "https://www.marriott.com/en-us/hotels/dpssm-courtyard-bali-seminyak-resort/"],
      ["Hotel Malang", "Situs resmi The Shalimar Boutique Hotel", "https://theshalimarhotel.co.id/"],
      ["Hotel Yogyakarta", "Situs resmi Aveta Hotel Malioboro", "https://avetahotelmalioboro.com/"],
      ["Tour gunung api", "Halaman resmi Java Volcano Tour Operator", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
      ["Pesanan tour gunung api", "Halaman pesanan JVTO kami", "https://javavolcano-touroperator.com/my-booking/622ade825711ac21113a8d292da3dbdf"],
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
      ["Hari 1", "Hari santai di Seminyak", "Biarkan sore pertama di Bali berjalan ringan: mendarat, check-in, melihat sunset, makan malam di tepi laut, jalan sedikit di Seminyak, lalu menutup hari dengan pijat dan tidur nyenyak.", ["Tiba di bandara", "Sunset", "Beach club", "Spa"], [["Tiba", "14.35 tiba di DPS (Ngurah Rai International Airport)."], ["Imigrasi", "Sekitar 15.05 selesai imigrasi dan ambil bagasi."], ["Naik kendaraan", "15.15 naik Grab ke hotel, lalu sekitar 15.45 tiba di Courtyard by Marriott Bali Seminyak Resort."], ["Check-in", "16.00 selesai check-in dan bisa langsung ganti ke pakaian liburan yang lebih ringan."], ["Istirahat hotel", "16.00–17.30 dipakai untuk kolam renang, pool bar, istirahat di kamar, dan menurunkan ritme setelah penerbangan."], ["Sunset", "17.30–18.30 jalan sekitar 5 menit ke Seminyak Beach; sunset bulan Juni sekitar 18.05."], ["Makan malam", "18.30–20.00 di Potato Head Beach Club untuk makan malam, minum, dan suasana tepi laut."], ["Jalan malam", "20.00–21.30 bisa ke The Flea Market dan Kayu Aya Street untuk baju, tas anyaman, aroma, swimwear, dan barang resort."], ["Spa", "21.30–23.00 di Ssamaya Balinese Spa, bisa pilih 60 menit Balinese Massage atau 90 menit Aromatherapy Massage."], ["Tidur", "Sekitar 23.00 kembali ke hotel dan tidur. Hari pertama sebaiknya tetap ringan supaya tenaga tersimpan untuk segmen gunung api."]]],
      ["Hari 2", "Seminyak tanpa buru-buru", "Simpan hari ini untuk pantai, pijat, dan menikmati waktu tanpa terburu-buru. Bali biasanya paling terasa indah saat ritmenya dibiarkan ringan.", ["Seminyak", "Beach club", "Hari santai"], [["Waktu bangun", "Sekitar pukul 08.30 sudah pas, tapi bangun lebih siang sedikit juga tidak masalah."], ["Waktu berangkat", "Kalau mau brunch atau beach club, berangkat sekitar pukul 10.00 biasanya paling pas."], ["Waktu kumpul", "Hari ini tidak ada titik kumpul tetap. Jalani dengan fleksibel saja."], ["Paling lambat tidur", "Usahakan istirahat sekitar pukul 23.00 agar besok lebih enak saat mulai pindah kota."], ["Gaya hari", "Anggap ini hari resort sungguhan: tidur agak lebih lama, makan pelan-pelan, lalu tinggal di tempat yang suasananya paling enak."], ["Pengingat", "Matahari cukup kuat, dan hari ini juga pas untuk membeli kebutuhan kecil sebelum masuk segmen gunung api."]]],
      ["Hari 3", "Masuk jalur gunung api", "Pagi meninggalkan Bali, sore bergerak ke arah Jawa Timur. Di sinilah perjalanan berubah dari nuansa resor menjadi bab petualangan.", ["Transfer tour", "Bab petualangan", "Pindah pulau"], [["Waktu bangun", "Pukul 08.00 paling pas, dan paling lambat 08.30. Siang hari ini masih sama dengan waktu Taiwan."], ["Waktu berangkat", "Selesaikan sarapan dan koper sebelum 09.45 supaya tinggal menunggu mobil."], ["Waktu kumpul", "Bertemu sopir JVTO pukul 10.00, dan paling aman sudah standby di lobi pukul 09.50."], ["Paling lambat tidur", "Usahakan tidur sekitar pukul 19.30, karena malam ini sebenarnya cuma jeda sebelum bangun tengah malam."], ["Cek penting", "Sebelum meninggalkan Bali, pastikan alur jemput, urutan rute, dan titik drop terakhir sudah benar agar hari-hari berikutnya terasa lancar."], ["Tas kecil", "Simpan air minum, snack, power bank, dan dokumen di tempat yang paling mudah diambil."]]],
      ["Hari 4", "Malam Ijen dan blue fire", "Berangkat setelah tengah malam menuju Ijen, mengejar blue fire lebih dulu, lalu melihat danau kawah muncul bersama cahaya pagi. Ini salah satu hari paling sureal dalam perjalanan.", ["Blue fire", "Hiking malam", "Danau kawah"], [["Waktu bangun", "Bangun pukul 23.45 waktu lokal, atau 00.45 waktu Taiwan."], ["Waktu berangkat", "Selesaikan check-out dan siap naik mobil sebelum 00.20 supaya keberangkatan 00.30 tetap lancar."], ["Waktu kumpul", "Kumpul di pintu masuk hotel atau lobi sekitar pukul 00.20."], ["Paling lambat tidur", "Usahakan malam sebelumnya sudah tidur sekitar pukul 20.30. Tambahan istirahat sekecil apa pun tetap berguna."], ["Sorotan", "Awalnya blue fire, lalu danau kawah saat langit mulai terang. Visualnya berubah terus sampai pagi."], ["Perlengkapan", "Headlamp, sepatu grip, jaket ringan, dan masker sangat penting. Ini bukan hari untuk menganggap semuanya santai."]]],
      ["Hari 5", "Turun ke Tumpak Sewu", "Hari ini memang melelahkan, tetapi begitu sampai ke dasar lembah dan melihat air terjun dari dekat, rasanya langsung terasa sepadan.", ["Lembah air terjun", "Medan licin", "Baju ganti"], [["Waktu bangun", "Bangun pukul 02.45 waktu lokal, atau 03.45 waktu Taiwan."], ["Waktu berangkat", "Rapikan barang sebelum 03.20 supaya bisa langsung masuk keberangkatan 03.30."], ["Waktu kumpul", "Kumpul di depan penginapan sekitar pukul 03.20."], ["Paling lambat tidur", "Usahakan istirahat sekitar pukul 20.30 malam sebelumnya karena hari ini termasuk paling menguras tenaga."], ["Medan", "Inilah hari yang paling terasa seperti benar-benar masuk ke jurang dan badan air terjun: basah, curam, melelahkan, dan sangat layak dijalani."], ["Catatan", "Baju ganti, dry bag, dan pelindung HP akan terasa seperti keputusan terbaik saat hari ini selesai."]]],
      ["Hari 6", "Bromo saat fajar", "Jeep, udara dingin, debu vulkanik, dan matahari terbit datang bersamaan di sini. Ini penutup klasik yang paling ikonik untuk segmen Jawa Timur.", ["Jeep", "Pemandangan fajar", "Final gunung api"], [["Waktu bangun", "Bangun pukul 01.15 waktu lokal, atau 02.15 waktu Taiwan."], ["Waktu berangkat", "Pakai layer hangat dan siap sebelum 01.50 supaya Jeep 02.00 bisa langsung jalan."], ["Waktu kumpul", "Kumpul di luar hotel pukul 01.50 supaya tidak terburu-buru saat Jeep datang."], ["Paling lambat tidur", "Usahakan tidur sekitar pukul 19.30 malam sebelumnya agar masih sempat dapat sedikit waktu pulih."], ["Sorotan", "Kekuatan Bromo bukan cuma sunrise, tetapi momen saat seluruh lanskap gunung apinya perlahan muncul dari dingin."], ["Pengingat", "Sebelum matahari terbit bisa sangat dingin, dan masker atau buff akan sangat membantu menghadapi angin serta debu."]]],
      ["Hari 7", "Dari gunung api kembali ke kota", "Tinggalkan debu dan jam bangun tengah malam di belakang, lalu biarkan perjalanan kereta yang nyaman membawa ritme perjalanan kembali pelan ke Yogyakarta.", ["Hari kereta", "VIP lounge", "Ganti kota"], [["Waktu bangun", "Pukul 07.00 waktu lokal, atau 08.00 waktu Taiwan."], ["Waktu berangkat", "Keluar dari hotel pukul 08.00 sudah pas dan masih sempat menikmati VIP lounge."], ["Waktu kumpul", "Hari ini tidak ada titik kumpul terpisah. Langsung berangkat dari hotel ke stasiun pukul 08.00."], ["Paling lambat tidur", "Usahakan istirahat sekitar pukul 22.30 karena besok hari candi dimulai cukup pagi."], ["Ritme", "Hari ini memberi tubuh kesempatan untuk kembali tenang, dan perjalanan juga berpindah dari mode bertahan hidup ke ritme kota yang lebih santai."], ["Transportasi", "Kuncinya adalah nyaman, tepat waktu, dan tidak repot dengan koper. Sedikit persiapan akan membuat segmen ini terasa sangat rapi."]]],
      ["Hari 8", "Hari candi", "Simpan satu hari penuh untuk Borobudur dan Prambanan. Setelah segmen gunung api, di sinilah perjalanan terasa lebih dalam dan lebih tenang.", ["Borobudur", "Prambanan", "Naik candi + pemandu"], [["Waktu bangun", "Pukul 05.15 waktu lokal, atau 06.15 waktu Taiwan."], ["Waktu berangkat", "Sudah di lobi sebelum 06.20 paling aman, karena jendela jemput biasanya antara 06.30 sampai 07.30."], ["Waktu kumpul", "Rencana paling aman adalah kumpul di lobi hotel pukul 06.20."], ["Paling lambat tidur", "Usahakan tidur sekitar pukul 22.00 malam sebelumnya karena hari ini tetap penuh jalan kaki."], ["Catatan budaya", "Teras batu Borobudur dan garis menara Prambanan memberi jenis kenangan yang benar-benar berbeda dari alam dan petualangan."], ["Pakaian", "Cuacanya akan panas dan jalannya banyak, jadi pakai pakaian ringan dan jangan lupa air minum serta sun protection."]]],
      ["Hari 9", "Pulang, pagi-pagi tapi tenang", "Hari ini memang dimulai sebelum fajar, tetapi kalau malam sebelumnya sudah rapi, sisanya tinggal bergerak tenang dan membawa seluruh perjalanan pulang dengan bersih.", ["Transfer pagi", "Sambung bandara", "Pulang"], [["Waktu bangun", "Bangun pukul 04.40 waktu lokal untuk beres-beres dan berangkat, atau 05.40 waktu Taiwan."], ["Waktu berangkat", "Keluar dari hotel pukul 05.25 adalah rencana yang lebih aman. Hari ini lebih baik terlalu awal daripada terlalu mepet."], ["Waktu kumpul", "Hari ini tidak ada titik kumpul tetap. Cukup siap meninggalkan hotel pukul 05.25."], ["Paling lambat tidur", "Usahakan istirahat sekitar pukul 21.30 malam sebelumnya karena hari pulang dimulai sangat pagi."], ["Waktu", "Hari ini bukan soal menambah satu tempat lagi, tetapi soal menjaga semua sambungan tetap tenang dan tidak tergesa-gesa."], ["Cek terakhir", "Sebelum keluar hotel, cek paspor, HP, charger, adaptor, dan oleh-oleh sekali lagi. Kehilangan satu saja hari ini akan merepotkan."]]]
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
      badges: ["Slow day", "Beach pace", "Flexible hours"],
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
        ["JVTO tour page", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
        ["Our booking", "https://javavolcano-touroperator.com/my-booking/622ade825711ac21113a8d292da3dbdf"]
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
        ["JVTO tour page", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
        ["Our booking", "https://javavolcano-touroperator.com/my-booking/622ade825711ac21113a8d292da3dbdf"]
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
        ["JVTO tour page", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
        ["Our booking", "https://javavolcano-touroperator.com/my-booking/622ade825711ac21113a8d292da3dbdf"]
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
        ["JVTO tour page", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
        ["Our booking", "https://javavolcano-touroperator.com/my-booking/622ade825711ac21113a8d292da3dbdf"]
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
      badges: ["Hari santai", "Ritme pantai", "Jam fleksibel"],
      guide: "Hari ini memang sebaiknya dibiarkan longgar. Kopi, jalan ke pantai, makan pelan, atau pijat justru lebih cocok daripada jadwal yang terlalu rapat."
    },
    {
      date: "15 / 06 Sen",
      region: "Bali → Jawa Timur",
      theme: "Perjalanan mulai masuk jalur gunung api",
      effort: "Sedang | transfer jauh",
      tone: "transfer",
      badges: ["Hari jemput", "Naik ferry", "Bab petualangan"],
      guide: "Di sinilah bentuk perjalanan berubah. Begitu Bali selesai, jalur ini mulai terasa lebih liar dan lebih jelas mengarah ke segmen gunung api.",
      links: [
        ["Halaman JVTO", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
        ["Pesanan kami", "https://javavolcano-touroperator.com/my-booking/622ade825711ac21113a8d292da3dbdf"]
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
        ["Halaman JVTO", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
        ["Pesanan kami", "https://javavolcano-touroperator.com/my-booking/622ade825711ac21113a8d292da3dbdf"]
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
        ["Halaman JVTO", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
        ["Pesanan kami", "https://javavolcano-touroperator.com/my-booking/622ade825711ac21113a8d292da3dbdf"]
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
        ["Halaman JVTO", "https://javavolcano-touroperator.com/tours/from-bali/ijen-papuma-tumpak-sewu-bromo-4d3n"],
        ["Pesanan kami", "https://javavolcano-touroperator.com/my-booking/622ade825711ac21113a8d292da3dbdf"]
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
  mapQuery: "Seminyak Beach Bali"
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
  itineraryList: document.getElementById("itinerary-list"),
  budgetSummaryStrip: document.getElementById("budget-summary-strip"),
  budgetTableBody: document.getElementById("budget-table-body"),
  visaHighlights: document.getElementById("visa-highlights"),
  visaTutorial: document.getElementById("visa-tutorial"),
  visaPoints: document.getElementById("visa-points"),
  arrivalPoints: document.getElementById("arrival-points"),
  footerCopy: document.getElementById("footer-copy"),
  pageProgress: document.getElementById("pageProgress")
};

const FALLBACK_LANG = "zh-Hant";

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
      最晚睡覺時間: "今晚睡眠"
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

function renderTimeline(days, copy, lang) {
  return days
    .map(([day, title, desc, tags, details], index) => {
        const meta = resolveDayMeta(days, index, lang);
        const primaryDetail = details[0];
        const secondaryDetails = details.slice(1);
        const isWakeupDetail = (label) =>
          ["起床時間", "Wake-up", "Waktu bangun"].includes(label);
        const anchorId = buildDayAnchorId(day);
        const badges = [meta.effort, ...(meta.badges || [])].filter(Boolean);

        return `
        <article class="day-card tone-${meta.tone || "default"}" id="${anchorId}">
          <div class="day-card-top">
            <div class="day-meta-block">
              <div class="day-index">${day}</div>
              <div class="day-date-line">${meta.date || ""}</div>
              <div class="day-region-line">${meta.region || ""}</div>
            </div>
            <div class="day-status-row">
              ${badges.map((badge) => `<span class="day-status-chip">${badge}</span>`).join("")}
            </div>
          </div>
          <div class="day-header">
            ${meta.theme ? `<div class="day-theme">${meta.theme}</div>` : ""}
            <div class="day-title">${title}</div>
            <div class="day-summary">${desc}</div>
            ${meta.guide ? `<div class="day-guide-intro">${meta.guide}</div>` : ""}
          </div>
          ${
            primaryDetail
              ? `
                <div class="day-primary-strip ${isWakeupDetail(primaryDetail[0]) ? "is-wakeup" : ""}">
                  <div class="day-primary-label">${normalizeDetailLabel(primaryDetail[0], lang)}</div>
                  <div class="day-primary-value">${primaryDetail[1]}</div>
                </div>
              `
              : ""
          }
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
          ${
            meta.routeFlow?.length
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
              : ""
          }
          <section class="day-block">
            <div class="day-block-title">${pick(copy, "dayFocusLabel")}</div>
            <div class="day-content-top">
              <div class="day-focus-text">${desc}</div>
            </div>
          </section>
          <section class="day-block">
            <div class="day-block-title">${pick(copy, "dayGuideDetailLabel")}</div>
            <div class="day-detail-list">
              ${secondaryDetails
                .map(
                  ([detailTitle, detailDesc]) => `
                    <div class="day-detail-item ${isWakeupDetail(detailTitle) ? "is-wakeup" : ""}">
                      <div class="day-detail-title">${normalizeDetailLabel(detailTitle, lang)}</div>
                      <div class="day-detail-desc">${detailDesc}</div>
                    </div>
                  `
                )
                .join("")}
            </div>
          </section>
          ${
            meta.reminders?.length
              ? `
                <section class="day-reminder-card">
                  <div class="day-block-title">${pick(copy, "dayGuideReminderLabel")}</div>
                  <div class="day-reminder-list">
                    ${meta.reminders.map((reminder) => `<div class="day-reminder-item">${reminder}</div>`).join("")}
                  </div>
                </section>
              `
              : ""
          }
          ${
            meta.links?.length
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
              : ""
          }
          <div class="highlight-tags">
            ${tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </article>
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
    button.classList.toggle("active", button.dataset.lang === state.lang);
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
  dom.mapFrame.src = mapEmbedUrl(state.mapQuery);
  dom.fullRouteLink.href = MAP_ROUTE_URL;
  dom.mapDayRoutes.innerHTML = renderMapDayRoutes(pick(copy, "mapDayRoutes"));
  document.querySelectorAll(".map-location-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.mapQuery = button.dataset.query;
      renderLanguage();
    });
  });

  dom.itineraryHighlights.innerHTML = renderMiniHighlights(pick(copy, "itineraryHighlights"));
  dom.itineraryList.innerHTML = renderTimeline(itinerary, copy, state.lang);
  bindDayPreviewLinks();

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
}

function bindDayPreviewLinks() {
  document.querySelectorAll("[data-open-day]").forEach((button) => {
    button.addEventListener("click", () => {
      const sectionTarget = button.getAttribute("data-open-section") || "itinerary";
      const anchorId = button.getAttribute("data-open-day");
      const navButton = document.querySelector(`.nav-item[data-target="${sectionTarget}"]`);

      if (navButton) {
        navButton.click();
      }

      window.setTimeout(() => {
        const anchor = document.getElementById(anchorId);
        anchor?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    });
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
      document.querySelectorAll(".nav-item").forEach((item) => {
        item.classList.remove("active");
        item.removeAttribute("aria-current");
      });
      document.querySelectorAll(".page-section").forEach((section) => section.classList.remove("active"));
      button.classList.add("active");
      button.setAttribute("aria-current", "page");
      document.getElementById(button.dataset.target).classList.add("active");
      button.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function bindHeroActions() {
  document.querySelectorAll("[data-hero-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-hero-target");
      const navButton = document.querySelector(`.nav-item[data-target="${target}"]`);
      if (navButton) {
        navButton.click();
      }
    });
  });
}

function updateScrollState() {
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = windowHeight > 0 ? (window.scrollY / windowHeight) * 100 : 0;
  dom.pageProgress.style.width = `${scrolled}%`;
  document.body.classList.toggle("mobile-controls-compact", window.innerWidth <= 768 && window.scrollY > 72);
}

window.addEventListener("scroll", updateScrollState);
window.addEventListener("resize", updateScrollState);

bindLanguageButtons();
bindNav();
bindHeroActions();
renderLanguage();
updateScrollState();
