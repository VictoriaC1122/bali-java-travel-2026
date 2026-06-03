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
    heroKicker: "印尼旅程筆記",
    heroTitle: "Bali × Java",
    heroSubtitle: "前段留給海，中段留給火山，最後留給神廟與城市",
    heroDates: "2026 / 06 / 13 - 2026 / 06 / 21",
    heroDestinations: "水明漾 • 伊真火山 • Tumpak Sewu • 婆羅摩火山 • 瑪琅 • 日惹",
    heroPrimaryCta: "先看每日行程",
    heroSecondaryCta: "看行前資訊",
    footerCopy: "把 2026 年 6 月這趟印尼旅行整理成一份手機和電腦都好查的旅遊手冊。",
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
    overviewTitle: "一條節奏很好的印尼路線：先放鬆，再冒險，最後慢慢收尾",
    overviewLead:
      "這趟安排不是把景點塞滿，而是把每一段放在對的位置。峇里島負責放鬆，東爪哇負責記憶點，日惹負責把旅程收得完整。",
    coverLabel: "手冊篇章",
    coverTitle: "這趟旅行好看的地方，在於安排得剛剛好",
    coverLead:
      "前兩天先把身體和心情都放鬆，接著進入火山與瀑布的凌晨節奏，最後回到日惹，用神廟、街區和比較安靜的步調收尾。整體讀起來順，也真的很適合照這個節奏走。",
    coverPoints: [
      ["前段放鬆", "Seminyak 這兩天不需要排太滿，好好住、好好吃、好好休息，後面會更有餘裕。"],
      ["中段冒險", "Ijen、Sewu、Bromo 各有自己的畫面，順著走下去，強度會慢慢堆上來。"],
      ["結尾收束", "到日惹後節奏自然慢下來，神廟和市區剛好讓整趟旅程收得穩。"]
    ],
    volcanoCaption: "Bromo 晨光",
    volcanoCredit: "Photo by Arya Krisdyantara / Unsplash",
    beachCaption: "Bali 海色",
    beachCredit: "Photo by Santhosh Mocharla / Unsplash",
    routeLabel: "航班與路線",
    routeTitle: "航班與移動路線",
    routeLead: "把班機、行李和主要移動方式放在一起，出發前或回程前都能很快對一遍。",
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
      ["出發提醒", "國際線還是建議提早到機場，護照、電子機票和付款憑證前一晚先整理好最省事。"],
      ["轉機說明", "真正的國際回程段是 CI762；YIA → CGK 是前段接駁，實際承運仍以票面和現場資訊為準。"],
      ["資訊取捨", "頁面只保留查行程真的會用到的資訊，不放訂位代碼等敏感內容。"]
    ],
    trainLabel: "鐵道篇章",
    trainTitle: "火車移動",
    trainLead:
      "Day 7 比較像修復日，不是硬趕路。這裡把 Argo Semeru 的艙等重點和購票方向整理清楚，之後查起來比較快。",
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
    trainBuyLead: "下面只保留實際購票最需要知道的幾件事，查起來會更直接。",
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
    toursLead: "已訂和準備要訂的包套行程都放在這裡，之後要回來核對內容、價格或連結會更省時間。",
    tourLinkLabel: "查看行程",
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
    stayLabel: "住宿篇章",
    stayTitle: "住宿安排",
    stayLead: "每一段住宿都有自己的角色：前面度假，中段補體力，最後讓城市行程和回程都更順。每個飯店都附上 Google Maps 連結。",
    stayMapLabel: "Google Maps",
    stayTourLabel: "Tour 頁面",
    linksLabel: "實用連結",
    linksTitle: "官方連結整理",
    linksLead: "把會反覆打開的網站集中在同一頁，出發前和旅途中都比較不會手忙腳亂。",
    resourceLinkCta: "前往查看",
    linksHighlights: [
      ["共用文件", "雲端資料夾與行前資料集中放在一起"],
      ["交通", "火山 tour、火車與機場鐵路"],
      ["入境", "eVisa、Love Bali 與 All Indonesia"]
    ],
    infoLabel: "印尼資訊",
    infoTitle: "印尼實用資訊",
    infoLead: "把真正會反覆查的資訊整理在這裡，臨時要確認時，不用再翻聊天紀錄或雲端文件。",
    infoPanelOneTitle: "出發前與當地基礎資訊",
    infoPanelTwoTitle: "旅途中提醒",
    infoCostsLabel: "花費備忘",
    infoCostsTitle: "目前已知花費與代墊紀錄",
    infoCostsLead: "先把目前已記下來的金額集中放好，之後只要再補餐飲、計程車和購物，就差不多完整了。",
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
    transportTitle: "交通與時間安排",
    packingTitle: "穿著與安全",
    itineraryLabel: "每日行程",
    itineraryTitle: "每日行程",
    itineraryLead: "每天只保留真正有用的重點，出門前快速看一遍就能抓到節奏。",
    itineraryHighlights: [
      ["路線節奏", "先放鬆、再火山、最後文化收尾"],
      ["最硬的一天", "Sewu 瀑布日通常最吃體力"],
      ["最穩的回程", "YIA 機場鐵路抓 06:00 左右"]
    ],
    dayFocusLabel: "今日重點",
    budgetLabel: "預算整理",
    budgetTitle: "預算整理",
    budgetLead: "以下以 NT$1 ≈ Rp531 粗估，只作行前抓預算用，不代表即時匯率。",
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
    mapLead: "主要住宿、景點和機場動線都放在這裡，手機上切換查看也很方便。",
    mapRouteLink: "看完整路線",
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
    visaLead: "入境前要做的事情其實不多，照順序處理好，再把憑證都留在手機裡，到現場會輕鬆很多。",
    visaPanelTitle: "印尼旅遊簽證",
    arrivalPanelTitle: "峇里島入境附加事項",
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
      ["Day 1", "抵達峇里島", "搭乘 CI771 由台北直飛 DPS，抵達後以 check-in、晚餐與休息為主。", ["抵達 + 入住", "輕鬆晚餐", "調時差"], [["起床時間", "建議最晚 05:30 起床；峇里島與台灣同時區。"], ["出門時間", "依住處到機場距離回推，建議 06:00 前後出門最穩。"], ["集合時間", "今天沒有固定集合；機場報到以班機時間往前抓就好。"], ["最晚睡覺時間", "建議 22:30 前躺平，先把旅程節奏拉順。"], ["節奏", "第一天不建議排太滿，讓身體先適應濕熱氣候與移動疲勞。"], ["建議安排", "入住後可在 Seminyak 周邊簡單散步、吃飯，早點休息。"]]],
      ["Day 2", "Bali 放鬆日", "安排 beach club、按摩與自由活動，讓旅程先從舒服開始。", ["Seminyak", "按摩", "自由活動"], [["起床時間", "08:30 前後起床即可；想睡晚一點也可以。"], ["出門時間", "如果要去吃早午餐或 beach club，10:00 前後出門最剛好。"], ["集合時間", "今天沒有固定集合，自由安排即可。"], ["最晚睡覺時間", "建議 23:00 前休息，隔天開始進入移動段。"], ["玩法", "這天最適合把行程壓鬆，重點不是跑點，而是把度假感做滿。"], ["小提醒", "海邊日照強，記得防曬，也可以順便補買後面火山段需要的小物。"]]],
      ["Day 3", "進入火山段", "開始東爪哇移動，重點順序是 Ijen → Sewu → Bromo。", ["跟團移動", "進入火山區", "確認 Malang drop"], [["起床時間", "08:00 起床最剛好；最晚不要超過 08:30。"], ["出門時間", "09:45 前把行李和早餐處理好，準備在飯店外等車。"], ["集合時間", "10:00 和 JVTO 司機會合，建議 09:50 就在飯店大廳待命。"], ["最晚睡覺時間", "建議 19:30 前睡，因為今晚其實只是在等隔天半夜起床。"], ["關鍵確認", "和 tour 再次確認行程順序與最後 drop-off 是否在 Malang。"], ["隨身物品", "把護照影本、行動電源、水與簡單零食放在最容易拿的位置。"]]],
      ["Day 4", "Ijen Crater", "藍火與火山口是這段的代表亮點，通常需要凌晨出發。", ["藍火", "夜間健行", "火山體驗"], [["起床時間", "當地時間 23:45 起床；台灣時間 00:45。"], ["出門時間", "00:20 前完成退房與上車準備，00:30 準時出發。"], ["集合時間", "00:20 在住宿點門口或大廳集合最保險。"], ["最晚睡覺時間", "建議前一晚 20:30 前就寢，能睡多少算多少。"], ["看點", "藍火與天亮後的火山湖是 Ijen 最有記憶點的兩個畫面。"], ["裝備", "頭燈、抓地鞋、薄外套與口罩都很重要。"]]],
      ["Day 5", "Tumpak Sewu", "瀑布地形壯觀但偏體力型，鞋子與換洗衣物很重要。", ["瀑布", "防滑鞋", "體力日"], [["起床時間", "當地時間 02:45 起床；台灣時間 03:45。"], ["出門時間", "03:20 前把行李收好，03:30 直接上車。"], ["集合時間", "03:20 在住宿點門口集合最穩。"], ["最晚睡覺時間", "建議前一晚 20:30 前休息，這天體力消耗會很大。"], ["地形", "這天通常有濕滑路段、上下坡與水氣，整體最吃體力。"], ["準備", "建議多帶一套可替換衣物與防水袋，手機也最好先做防護。"]]],
      ["Day 6", "Mount Bromo Sunrise", "經典火山日出收尾，清晨會冷，也可能有火山灰。", ["日出", "外套", "口罩或 Buff"], [["起床時間", "當地時間 01:15 起床；台灣時間 02:15。"], ["出門時間", "01:50 前穿好保暖層，02:00 準時搭 Jeep 出發。"], ["集合時間", "01:50 在飯店外等 Jeep，避免臨時找人。"], ["最晚睡覺時間", "建議前一晚 19:30 前就寢，這樣至少能補一小段睡眠。"], ["看點", "Bromo 是整段火山行程最經典的收尾，視野與光線都很有戲。"], ["小提醒", "凌晨風大且冷，保暖與遮塵用品都很值得帶。"]]],
      ["Day 7", "Malang → Yogyakarta", "搭火車前往日惹，這天可以當作比較放鬆的轉場日。", ["火車移動", "休息", "城市切換"], [["起床時間", "當地時間 07:00 起床；台灣時間 08:00。"], ["出門時間", "08:00 從飯店出發去車站最剛好，還有時間進 VIP 貴賓室。"], ["集合時間", "今天沒有另外集合，08:00 直接從飯店搭車去車站。"], ["最晚睡覺時間", "建議 22:30 前休息，隔天神廟日還要早起。"], ["節奏", "火山段結束後，這天很適合補眠、整理照片與重新回到比較舒服的旅行狀態。"], ["交通", "火車時間建議預留緩衝，並注意行李上下車的節奏。"]]],
      ["Day 8", "Borobudur + Prambanan", "目前改用你提供的 Klook 婆羅浮屠（登塔＋導覽）和普蘭巴南寺廟之旅，直接把 Day 8 的文化行程定成這個版本。", ["婆羅浮屠", "普蘭巴南", "Klook 神廟一日遊"], [["起床時間", "當地時間 05:15 起床；台灣時間 06:15。"], ["出門時間", "06:20 前到大廳等車最穩，接駁通常落在 06:30 到 07:30 之間。"], ["集合時間", "建議 06:20 在飯店大廳集合，避免司機提早到。"], ["最晚睡覺時間", "建議前一晚 22:00 前休息，文化日也會走滿一整天。"], ["文化重點", "這天會以婆羅浮屠登塔導覽加上普蘭巴南寺廟作為主軸，內容比一般單點參觀更完整。"], ["穿著建議", "神廟區白天偏熱，建議穿透氣衣物並隨身帶水。"]]],
      ["Day 9", "回程日", "搭早班機場鐵路前往 YIA，預留至少 2 小時緩衝再銜接班機。", ["機場鐵路", "提早出發", "回台灣"], [["起床時間", "當地時間 04:40 起床收行李；台灣時間 05:40。"], ["出門時間", "05:25 從飯店出發去機場最穩，抓早不抓晚。"], ["集合時間", "今天沒有固定集合，05:25 準時離開飯店即可。"], ["最晚睡覺時間", "建議前一晚 21:30 前休息，回程日會很早開始。"], ["時間安排", "06:00 左右的機場鐵路是偏穩的選擇，能把風險壓低。"], ["最後檢查", "出門前確認房卡、充電器、轉接頭和伴手禮都已收好。"]]]
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
    navItinerary: "Rencana",
    navMap: "Map",
    navBudget: "Biaya",
    navVisa: "Visa",
    overviewLabel: "Ringkasan perjalanan",
    overviewTitle: "A well-paced Indonesia route: easy at first, adventurous in the middle, quiet at the end",
    overviewLead: "The point of this route is not to cram in more places. It gives each stretch a job: Bali for rest, East Java for the big moments, and Yogyakarta for a calmer finish.",
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
    routeLabel: "Penerbangan dan rute",
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
    stayLabel: "Rencana menginap",
    stayTitle: "Where you stay",
    stayLead: "Each stay has a clear role: rest at the start, recovery in the middle, and a smoother city finish at the end. Every hotel includes a Google Maps link.",
    stayMapLabel: "Google Maps",
    stayTourLabel: "Tour page",
    linksLabel: "Tautan resmi",
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
    itineraryLabel: "Rencana harian",
    itineraryTitle: "Daily itinerary",
    itineraryLead: "Each day keeps only the practical essentials, so it is easy to skim before heading out.",
    itineraryHighlights: [
      ["Route rhythm", "Relax first, volcanoes next, temples to finish"],
      ["Hardest day", "Sewu waterfall is likely the most physical day"],
      ["Safest return", "The 06:00-ish YIA airport rail remains the safest plan"]
    ],
    dayFocusLabel: "Today's focus",
    budgetLabel: "Ringkasan budget",
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
    mapLabel: "Peta perjalanan",
    mapTitle: "Map overview",
    mapLead: "Hotels, major stops, and the airport route are collected here so the map is easy to check on desktop or on your phone.",
    mapRouteLink: "View full route",
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
      ["Day 1", "Arrive in Bali", "Fly CI771 from Taipei to DPS, then keep the first day easy with check-in, dinner, and rest.", ["Arrival", "Easy dinner", "Rest"], [["Wake-up", "Aim to be up by 05:30 at the latest. Bali is on the same time as Taiwan."], ["Leave by", "Work backward from your home-to-airport transfer and aim to leave around 06:00 for a safer start."], ["Meet-up", "No fixed meet-up today. Just follow airport check-in timing."], ["Sleep by", "Try to be in bed by 22:30 so the trip starts on a steady rhythm."], ["Pacing", "Keep the first day intentionally light so the trip opens in a calm way."], ["Suggested plan", "Check in, walk nearby, have dinner, and sleep early."]]],
      ["Day 2", "Slow Bali day", "Use this day for beach clubs, massage, and free time in Seminyak.", ["Seminyak", "Massage", "Free time"], [["Wake-up", "Around 08:30 is a comfortable start, though sleeping in a little is fine."], ["Leave by", "If brunch or a beach club is on the plan, leaving around 10:00 is a good rhythm."], ["Meet-up", "No fixed meet-up today. Keep it flexible."], ["Sleep by", "Try to rest by 23:00 so the transfer day starts more smoothly tomorrow."], ["Style", "This day works best as a mood-setting leisure day rather than a packed sightseeing run."], ["Reminder", "Strong sun, beach time, and last-minute shopping make this a good prep day too."]]],
      ["Day 3", "Enter the volcano segment", "The East Java route begins here, with the key order Ijen → Sewu → Bromo.", ["Tour transfer", "Volcano region", "Malang drop"], [["Wake-up", "08:00 is the best target, and 08:30 should be the latest. Daytime timing here is still the same as Taiwan."], ["Leave by", "Have breakfast and luggage ready by 09:45 so you can wait outside in time."], ["Meet-up", "Meet the JVTO driver at 10:00, and aim to be in the hotel lobby by 09:50."], ["Sleep by", "Try to sleep by 19:30, because tonight is really just a pause before the midnight wake-up stretch begins."], ["Key check", "Reconfirm the tour order and whether the final drop-off is in Malang."], ["Bag setup", "Keep water, snacks, power bank, and key documents easy to reach."]]],
      ["Day 4", "Ijen Crater", "Blue fire and crater views make this one of the signature highlights.", ["Blue fire", "Night hike", "Volcano"], [["Wake-up", "23:45 local time, which is 00:45 in Taiwan time."], ["Leave by", "Finish check-out and get ready by 00:20 so the 00:30 departure stays on time."], ["Meet-up", "Gather at the hotel entrance or lobby by 00:20."], ["Sleep by", "Try to sleep by 20:30 the night before. Any extra rest helps."], ["Highlight", "The blue fire and daylight crater lake are the defining visuals here."], ["Gear", "A headlamp, grip shoes, light jacket, and mask all help."]]],
      ["Day 5", "Tumpak Sewu", "A dramatic waterfall day with physical terrain and slippery paths.", ["Waterfall", "Grip shoes", "High-energy day"], [["Wake-up", "02:45 local time, which is 03:45 in Taiwan time."], ["Leave by", "Pack up by 03:20 so you can get straight into the 03:30 departure."], ["Meet-up", "Meet outside the stay by 03:20."], ["Sleep by", "Try to rest by 20:30 the night before because this is one of the most physical days."], ["Terrain", "Expect wet steps, descents, and one of the most physical days of the trip."], ["Pack note", "A change of clothes and waterproof protection for phones are worth bringing."]]],
      ["Day 6", "Mount Bromo Sunrise", "The classic sunrise finale with cold air and possible volcanic dust.", ["Sunrise", "Jacket", "Mask or buff"], [["Wake-up", "01:15 local time, which is 02:15 in Taiwan time."], ["Leave by", "Have warm layers on and be ready by 01:50 so the 02:00 Jeep departure stays clean."], ["Meet-up", "Meet outside the hotel by 01:50 to avoid rushing for the Jeep."], ["Sleep by", "Try to sleep by 19:30 the night before so you still get a short recovery window."], ["Highlight", "Bromo is the iconic finale of the volcano sequence."], ["Reminder", "It can be windy, cold, and dusty before sunrise."]]],
      ["Day 7", "Malang → Yogyakarta", "Take the train to Yogyakarta and use this as a softer transition day.", ["Train", "Rest", "City switch"], [["Wake-up", "07:00 local time, or 08:00 in Taiwan time."], ["Leave by", "Leaving the hotel at 08:00 works well and still gives time for the VIP lounge."], ["Meet-up", "No separate meet-up today. Head to the station from the hotel at 08:00."], ["Sleep by", "Try to rest by 22:30 because the temple day starts early tomorrow."], ["Pacing", "This is a good recovery day after the high-intensity volcano stretch."], ["Transport", "Leave enough buffer for the train and keep luggage handling easy."]]],
      ["Day 8", "Borobudur + Prambanan", "This day now uses the Klook Borobudur climb and guided visit with Prambanan temple tour from your link, so the culture day is locked to that version.", ["Borobudur", "Prambanan", "Klook temple day tour"], [["Wake-up", "05:15 local time, or 06:15 in Taiwan time."], ["Leave by", "Be in the lobby by 06:20 so you are ready if the pickup comes early within the 06:30 to 07:30 window."], ["Meet-up", "A 06:20 hotel-lobby meet-up is the safest plan."], ["Sleep by", "Try to sleep by 22:00 the night before because this is still a full walking day."], ["Culture note", "This version centers on Borobudur climb access with guiding, followed by Prambanan, which makes the day more complete than a simple walk-through."], ["Clothing note", "Breathable clothes, water, and sun protection help on this long temple day."]]],
      ["Day 9", "Departure day", "Take the early airport rail to YIA and keep at least a 2-hour buffer.", ["Airport rail", "Early start", "Fly home"], [["Wake-up", "04:40 local time to pack and get moving, or 05:40 in Taiwan time."], ["Leave by", "Leaving the hotel at 05:25 is the safer plan. Earlier is better than late today."], ["Meet-up", "No fixed meet-up today. Just be ready to leave the hotel at 05:25."], ["Sleep by", "Try to rest by 21:30 the night before because the return day starts very early."], ["Timing", "The 06:00-ish airport rail remains the safer low-stress option."], ["Last check", "Before leaving, make sure chargers, adapters, and souvenirs are packed."]]]
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
    itineraryLead: "Setiap hari hanya menyimpan bagian yang paling penting, jadi mudah dibaca cepat sebelum keluar.",
    itineraryHighlights: [
      ["Ritme rute", "Santai dulu, lalu gunung api, lalu penutup budaya"],
      ["Hari terberat", "Hari Sewu biasanya paling menguras tenaga"],
      ["Pulang paling aman", "Kereta YIA sekitar 06.00 tetap opsi paling aman"]
    ],
    dayFocusLabel: "Fokus hari ini",
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
      ["Hari 1", "Tiba di Bali", "Naik CI771 dari Taipei ke DPS, lalu jalani hari pertama dengan check-in, makan malam, dan istirahat.", ["Tiba", "Makan malam", "Istirahat"], [["Waktu bangun", "Usahakan bangun paling lambat pukul 05.30. Bali satu zona waktu dengan Taiwan."], ["Waktu berangkat", "Hitung mundur dari jarak rumah ke bandara, lalu usahakan keluar sekitar pukul 06.00 supaya lebih aman."], ["Waktu kumpul", "Hari ini tidak ada titik kumpul khusus. Cukup ikuti ritme check-in bandara."], ["Paling lambat tidur", "Usahakan sudah istirahat sekitar pukul 22.30 supaya ritme perjalanan langsung rapi."], ["Ritme", "Hari pertama paling enak dibuat ringan supaya tubuh menyesuaikan dulu."], ["Saran", "Check-in, jalan sebentar di sekitar hotel, makan malam, lalu istirahat lebih awal."]]],
      ["Hari 2", "Hari santai di Bali", "Gunakan hari ini untuk beach club, pijat, dan waktu bebas di Seminyak.", ["Seminyak", "Pijat", "Waktu bebas"], [["Waktu bangun", "Sekitar pukul 08.30 sudah pas, tapi bangun lebih siang sedikit juga tidak masalah."], ["Waktu berangkat", "Kalau mau brunch atau beach club, berangkat sekitar pukul 10.00 biasanya paling pas."], ["Waktu kumpul", "Hari ini tidak ada titik kumpul tetap. Jalani dengan fleksibel saja."], ["Paling lambat tidur", "Usahakan istirahat sekitar pukul 23.00 agar besok lebih enak saat mulai pindah kota."], ["Gaya hari", "Hari ini paling bagus dipakai untuk suasana santai, bukan lari ke terlalu banyak spot."], ["Pengingat", "Cocok juga untuk beli kebutuhan kecil sebelum masuk segmen gunung api."]]],
      ["Hari 3", "Masuk segmen gunung api", "Rute Jawa Timur dimulai di sini dengan urutan Ijen → Sewu → Bromo.", ["Transfer tour", "Area gunung api", "Drop Malang"], [["Waktu bangun", "Pukul 08.00 paling pas, dan paling lambat 08.30. Siang hari ini masih sama dengan waktu Taiwan."], ["Waktu berangkat", "Selesaikan sarapan dan koper sebelum 09.45 supaya tinggal menunggu mobil."], ["Waktu kumpul", "Bertemu sopir JVTO pukul 10.00, dan paling aman sudah standby di lobi pukul 09.50."], ["Paling lambat tidur", "Usahakan tidur sekitar pukul 19.30, karena malam ini sebenarnya cuma jeda sebelum bangun tengah malam."], ["Cek penting", "Pastikan lagi urutan tour dan drop-off terakhir di Malang."], ["Tas kecil", "Air minum, snack, power bank, dan dokumen sebaiknya mudah diambil."]]],
      ["Hari 4", "Kawah Ijen", "Blue fire dan pemandangan kawah jadi salah satu sorotan utama.", ["Blue fire", "Hiking malam", "Gunung api"], [["Waktu bangun", "Bangun pukul 23.45 waktu lokal, atau 00.45 waktu Taiwan."], ["Waktu berangkat", "Selesaikan check-out dan siap naik mobil sebelum 00.20 supaya keberangkatan 00.30 tetap lancar."], ["Waktu kumpul", "Kumpul di pintu masuk hotel atau lobi sekitar pukul 00.20."], ["Paling lambat tidur", "Usahakan malam sebelumnya sudah tidur sekitar pukul 20.30. Tambahan istirahat sekecil apa pun tetap berguna."], ["Sorotan", "Blue fire dan danau kawah saat terang adalah dua visual paling kuat di sini."], ["Perlengkapan", "Headlamp, sepatu grip, jaket ringan, dan masker sangat membantu."]]],
      ["Hari 5", "Tumpak Sewu", "Hari air terjun yang dramatis dengan jalur fisik dan cukup licin.", ["Air terjun", "Sepatu grip", "Hari aktif"], [["Waktu bangun", "Bangun pukul 02.45 waktu lokal, atau 03.45 waktu Taiwan."], ["Waktu berangkat", "Rapikan barang sebelum 03.20 supaya bisa langsung masuk keberangkatan 03.30."], ["Waktu kumpul", "Kumpul di depan penginapan sekitar pukul 03.20."], ["Paling lambat tidur", "Usahakan istirahat sekitar pukul 20.30 malam sebelumnya karena hari ini termasuk paling menguras tenaga."], ["Medan", "Hari ini biasanya paling berat secara fisik dengan jalur turun, basah, dan licin."], ["Catatan", "Baju ganti dan pelindung untuk HP sangat layak dibawa."]]],
      ["Hari 6", "Sunrise Bromo", "Penutup klasik dengan udara dingin dan kemungkinan debu vulkanik.", ["Sunrise", "Jaket", "Masker atau buff"], [["Waktu bangun", "Bangun pukul 01.15 waktu lokal, atau 02.15 waktu Taiwan."], ["Waktu berangkat", "Pakai layer hangat dan siap sebelum 01.50 supaya Jeep 02.00 bisa langsung jalan."], ["Waktu kumpul", "Kumpul di luar hotel pukul 01.50 supaya tidak terburu-buru saat Jeep datang."], ["Paling lambat tidur", "Usahakan tidur sekitar pukul 19.30 malam sebelumnya agar masih sempat dapat sedikit waktu pulih."], ["Sorotan", "Bromo adalah penutup paling ikonik untuk segmen gunung api."], ["Pengingat", "Sebelum matahari terbit bisa berangin, dingin, dan berdebu."]]],
      ["Hari 7", "Malang → Yogyakarta", "Naik kereta ke Yogyakarta dan jadikan ini hari transisi yang lebih lembut.", ["Kereta", "Istirahat", "Ganti kota"], [["Waktu bangun", "Pukul 07.00 waktu lokal, atau 08.00 waktu Taiwan."], ["Waktu berangkat", "Keluar dari hotel pukul 08.00 sudah pas dan masih sempat menikmati VIP lounge."], ["Waktu kumpul", "Hari ini tidak ada titik kumpul terpisah. Langsung berangkat dari hotel ke stasiun pukul 08.00."], ["Paling lambat tidur", "Usahakan istirahat sekitar pukul 22.30 karena besok hari candi dimulai cukup pagi."], ["Ritme", "Hari ini pas untuk recovery setelah rangkaian petualangan yang berat."], ["Transportasi", "Sisakan buffer waktu dan buat urusan bagasi tetap ringan."]]],
      ["Hari 8", "Borobudur + Prambanan", "Hari ini sekarang memakai tur Klook Borobudur naik candi dan berpemandu lalu lanjut ke Prambanan dari link yang kamu kirim, jadi versi harinya sudah disesuaikan ke sana.", ["Borobudur", "Prambanan", "Tur candi Klook"], [["Waktu bangun", "Pukul 05.15 waktu lokal, atau 06.15 waktu Taiwan."], ["Waktu berangkat", "Sudah di lobi sebelum 06.20 paling aman, karena jendela jemput biasanya antara 06.30 sampai 07.30."], ["Waktu kumpul", "Rencana paling aman adalah kumpul di lobi hotel pukul 06.20."], ["Paling lambat tidur", "Usahakan tidur sekitar pukul 22.00 malam sebelumnya karena hari ini tetap penuh jalan kaki."], ["Catatan budaya", "Versi ini menaruh fokus pada akses naik ke Borobudur dengan panduan, lalu disambung Prambanan, jadi isi harinya terasa lebih lengkap."], ["Pakaian", "Karena panas dan panjang, pakaian ringan, air minum, dan sun protection penting."]]],
      ["Hari 9", "Hari pulang", "Naik kereta bandara pagi ke YIA dan sisakan buffer minimal 2 jam.", ["Kereta bandara", "Berangkat pagi", "Pulang"], [["Waktu bangun", "Bangun pukul 04.40 waktu lokal untuk beres-beres dan berangkat, atau 05.40 waktu Taiwan."], ["Waktu berangkat", "Keluar dari hotel pukul 05.25 adalah rencana yang lebih aman. Hari ini lebih baik terlalu awal daripada terlalu mepet."], ["Waktu kumpul", "Hari ini tidak ada titik kumpul tetap. Cukup siap meninggalkan hotel pukul 05.25."], ["Paling lambat tidur", "Usahakan istirahat sekitar pukul 21.30 malam sebelumnya karena hari pulang dimulai sangat pagi."], ["Waktu", "Kereta sekitar jam 06.00 tetap pilihan yang paling aman."], ["Cek terakhir", "Sebelum keluar hotel, cek charger, adaptor, dan oleh-oleh sekali lagi."]]]
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

const state = {
  lang: localStorage.getItem("bali-java-lang") || "zh-Hant",
  mapQuery: "Seminyak Beach Bali"
};

const dom = {
  heroFacts: document.getElementById("hero-facts"),
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
  infoHighlights: document.getElementById("info-highlights"),
  infoChecklist: document.getElementById("info-checklist"),
  infoBasics: document.getElementById("info-basics"),
  infoTips: document.getElementById("info-tips"),
  infoCosts: document.getElementById("info-costs"),
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
  footerCopy: document.getElementById("footer-copy"),
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
      ([day, title, desc, tags, details]) => {
        const primaryDetail = details[0];
        const secondaryDetails = details.slice(1);
        const isWakeupDetail = (label) =>
          ["起床時間", "Wake-up", "Waktu bangun"].includes(label);

        return `
        <article class="day-card">
          <div class="day-header">
            <div class="day-index">${day}</div>
            <div class="day-title">${title}</div>
            <div class="day-summary">${desc}</div>
          </div>
          ${
            primaryDetail
              ? `
                <div class="day-primary-strip ${isWakeupDetail(primaryDetail[0]) ? "is-wakeup" : ""}">
                  <div class="day-primary-label">${primaryDetail[0]}</div>
                  <div class="day-primary-value">${primaryDetail[1]}</div>
                </div>
              `
              : ""
          }
          <div class="day-content-top">
            <div class="day-focus-label">${focusLabel}</div>
            <div class="day-focus-text">${desc}</div>
          </div>
          <div class="day-detail-list">
            ${secondaryDetails
              .map(
                ([detailTitle, detailDesc]) => `
                  <div class="day-detail-item ${isWakeupDetail(detailTitle) ? "is-wakeup" : ""}">
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
      `;
      }
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

  dom.heroFacts.innerHTML = renderHeroFacts(copy.overviewStats);
  dom.footerCopy.textContent = copy.footerCopy;

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
          <a href="${url}" target="_blank" rel="noreferrer">${copy.resourceLinkCta}</a>
        </article>
      `
    )
    .join("");
  dom.linksHighlights.innerHTML = renderMiniHighlights(copy.linksHighlights);
  dom.infoHighlights.innerHTML = renderMiniHighlights(copy.infoHighlights);
  dom.infoChecklist.innerHTML = renderFlightNotes(copy.infoChecklist);
  dom.infoBasics.innerHTML = renderBulletRows(copy.infoBasics);
  dom.infoTips.innerHTML = renderBulletRows(copy.infoTips);
  dom.infoCosts.innerHTML = renderBulletRows(copy.infoCosts);

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
