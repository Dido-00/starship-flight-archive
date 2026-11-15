/*
  Starship 飛行測試資料（截至台灣時間 2026-11-15 21:00）
  新增任務：在陣列最後加入一個物件即可，畫面會自動新增圓點與計數。
  launchDate 使用台灣時間 YYYY-MM-DD；所有結果應先經可靠來源查證。
  image 為可選欄位：沒有已確認可用且屬於本次任務的照片，請填 null。
*/
window.STARSHIP_FLIGHTS = [
  {
    id: 1, launchDate: '2023-04-20', vehicle: 'Starship / Super Heavy（第一代）',
    goal: '首次以星艦上級與超重型助推器完整組合升空，驗證整合發射與飛行表現。',
    process: '火箭成功離開發射台、爬升至約 39 公里，但未完成級間分離，隨後失去控制並啟動終止飛行系統。',
    outcome: '完成首次整合升空，未完成原訂飛行路徑。',
    improvement: '調整推進系統的洩漏與防火措施，並強化發射台及飛行終止系統。',
    image: null,
    source: 'SpaceX 官方更新', sourceUrl: 'https://www.spacex.com/updates'
  },
  {
    id: 2, launchDate: '2023-11-18', vehicle: 'Starship / Super Heavy（第一代）',
    goal: '測試熱分離技術，讓上級引擎在分離時點火，並延長飛行時間。',
    process: '成功完成熱分離；助推器在返回燃燒時解體，上級繼續爬升後失去訊號。',
    outcome: '首次完成級間熱分離，但兩級火箭均未完成預定路徑。',
    improvement: '持續改善助推器返回過程與上級推進系統的可靠性。',
    image: null,
    source: 'SpaceX 官方更新', sourceUrl: 'https://www.spacex.com/updates'
  },
  {
    id: 3, launchDate: '2024-03-14', vehicle: 'Starship / Super Heavy（第一代）',
    goal: '測試長時間上級燃燒、太空中艙門操作與推進劑轉移展示。',
    process: '上級完成主要爬升燃燒，進行多項太空操作；返回大氣層時失去聯繫，助推器也未完成落海前減速。',
    outcome: '達成更長的飛行階段與部分太空測試，未完成受控返回。',
    improvement: '改善再入姿態控制、熱防護及助推器降落燃燒。',
    image: null,
    source: 'SpaceX 官方更新', sourceUrl: 'https://www.spacex.com/updates'
  },
  {
    id: 4, launchDate: '2024-06-06', vehicle: 'Starship / Super Heavy（第一代）',
    goal: '以受控方式讓助推器與星艦上級分別返回指定海域。',
    process: '完成上升與分離後，助推器在墨西哥灣受控濺落，上級穿越再入高溫區並在印度洋濺落。',
    outcome: '首次兩級都完成受控海上返回，取得重要再入數據。',
    improvement: '上級襟翼及隔熱瓦受到高溫損傷，仍需提升熱防護與耐用性。',
    image: null,
    source: 'SpaceX 官方更新', sourceUrl: 'https://www.spacex.com/updates'
  },
  {
    id: 5, launchDate: '2024-10-13', vehicle: 'Starship / Super Heavy（第一代）',
    goal: '首次嘗試用發射塔機械臂接住返回的超重型助推器。',
    process: '升空及分離後，助推器返回發射場並降速；上級繼續飛行，最後於印度洋受控濺落。',
    outcome: '首次成功以「筷子」機械臂捕捉助推器，成為回收技術的里程碑。',
    improvement: '持續檢驗捕捉程序、再入熱防護及重複使用所需的可靠性。',
    image: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Flight_5_Website_Desktop_2_4cf00f2071.jpg',
    imageCredit: '圖片：SpaceX 官方 Flight 5 頁面（需連線載入）',
    source: 'SpaceX Flight 5', sourceUrl: 'https://www.spacex.com/launches/starship-flight-5'
  },
  {
    id: 6, launchDate: '2024-11-20', vehicle: 'Starship / Super Heavy（第一代）',
    goal: '再次測試回收判斷，並驗證上級在太空中重新點燃引擎。',
    process: '助推器因捕捉條件不符改在海上濺落；上級成功於太空中重啟一具 Raptor 引擎。',
    outcome: '完成首次上級太空重點火，助推器則未進行發射塔捕捉。',
    improvement: '進一步確認捕捉的安全門檻與上級返回控制能力。',
    image: null,
    source: 'SpaceX Starship 內容中心', sourceUrl: 'https://www.spacex.com/content'
  },
  {
    id: 7, launchDate: '2025-01-17', vehicle: 'Starship V2 / Super Heavy',
    goal: '驗證新一代星艦上級的結構與推進系統，持續執行助推器回收。',
    process: '助推器成功返回塔架捕捉；上級在爬升期間發生異常並解體。',
    outcome: '完成助推器捕捉，但新版本上級沒有完成預定任務。',
    improvement: '調查上級推進區的火災與相關硬體問題，改善安全設計。',
    image: null,
    source: 'SpaceX Starship 內容中心', sourceUrl: 'https://www.spacex.com/content'
  },
  {
    id: 8, launchDate: '2025-03-07', vehicle: 'Starship V2 / Super Heavy',
    goal: '驗證改進後的 V2 上級，並再次執行助推器捕捉。',
    process: '助推器返回塔架並成功捕捉；上級爬升中發生推進系統異常，未完成飛行。',
    outcome: '助推器捕捉成功，上級再次在爬升階段損失。',
    improvement: '針對上級推進系統振動、洩漏與火災風險持續改進。',
    image: null,
    source: 'SpaceX 官方更新', sourceUrl: 'https://www.spacex.com/updates'
  },
  {
    id: 9, launchDate: '2025-05-28', vehicle: 'Starship V2 / 再次使用的 Super Heavy',
    goal: '首次重飛已使用的助推器，並測試上級部署酬載與再入。',
    process: '助推器完成上升與分離後，在返回過程中損失；上級酬載艙門未正常開啟，之後於下降階段解體。',
    outcome: '首次測試助推器重飛，但酬載部署和兩級返回未完成。',
    improvement: '檢討艙門機構、上級姿態控制與助推器返回問題。',
    image: null,
    source: 'SpaceX Starship 內容中心', sourceUrl: 'https://www.spacex.com/content'
  },
  {
    id: 10, launchDate: '2025-08-27', vehicle: 'Starship V2 / Super Heavy',
    goal: '測試 Starlink 模擬衛星部署、太空引擎重啟與可控再入。',
    process: '助推器在指定海域減速濺落；上級成功部署 8 顆模擬衛星、再次點火，並返回印度洋。',
    outcome: '主要測試目標均達成，改善此前連續幾次上級失敗的情況。',
    improvement: '持續從極端熱防護及結構測試中收集數據，優化下一代設計。',
    image: null,
    source: 'SpaceX Flight 10', sourceUrl: 'https://www.spacex.com/launches/starship-flight-10'
  },
  {
    id: 11, launchDate: '2025-10-14', vehicle: 'Starship V2 / Super Heavy（第一代）',
    goal: '完成 V2 上級與第一代助推器的最後一次整合測試。',
    process: '兩級成功升空分離；上級完成模擬部署、再入與受控海上濺落，助推器也完成預定海上返回。',
    outcome: '主要任務目標達成，為後續 V3 版本測試累積資料。',
    improvement: '依照測試資料持續改善下一代火箭；本次未公布重大新增故障。',
    image: null,
    source: 'SpaceX Flight 11', sourceUrl: 'https://www.spacex.com/launches/starship-flight-11'
  },
  {
    id: 12, launchDate: '2026-05-23', vehicle: 'Starship V3 / Super Heavy V3',
    goal: '首次測試 V3 火箭、Raptor 3 引擎與第二座發射台。',
    process: '兩級完成分離；助推器返回燃燒未全部成功，最後硬著水；上級繼續完成主要飛行測試。',
    outcome: '首次完成 V3 整合發射，但助推器的返回測試未達預定目標。',
    improvement: 'FAA 調查指出需修正推進部件受熱與引擎警示設定等問題。',
    image: null,
    source: 'SpaceX Flight 12', sourceUrl: 'https://www.spacex.com/launches/starship-flight-12'
  },
  {
    id: 13, launchDate: '2026-07-25', vehicle: 'Starship V3 / Super Heavy V3',
    goal: '驗證 V3 改進成果，並首次部署新一代 Starlink V3 衛星。',
    process: '成功升空與級間分離，上級完成衛星部署和再入測試；助推器返回階段仍未完成軟著水。',
    outcome: '上級任務取得進展，助推器回收表現仍待改善。',
    improvement: '繼續調整 V3 助推器返回燃燒及上級重複使用相關技術。',
    image: null,
    source: 'SpaceX Flight 13', sourceUrl: 'https://www.spacex.com/launches/starship-flight-13'
  },
  {
    id: 14, launchDate: '2026-09-28', vehicle: 'Starship V3 / Super Heavy V3',
    goal: '首次讓星艦真正進入地球軌道，並部署 26 顆 Starlink V3 衛星。',
    process: '上級成功進入軌道並部署衛星，但任務提早結束；之後進行離軌與太平洋受控濺落。',
    outcome: '首次完成軌道飛行與正式衛星部署，是計畫的重要里程碑。',
    improvement: '任務時長短於原訂計畫，後續需持續改善引擎及在軌運作可靠性。',
    image: null,
    source: 'SpaceX Flight 14', sourceUrl: 'https://www.spacex.com/launches/starship-flight-14'
  },
  {
    id: 15, launchDate: '2026-11-14', vehicle: 'Starship V3 / Super Heavy V3',
    goal: '首次嘗試兩級返回發射塔捕捉，並部署 26 顆 Starlink V3 衛星。',
    process: '上級入軌並繞地球約 14 圈，完成衛星部署和再入；助推器返航異常，轉向海上安全區域。',
    outcome: '首次成功由發射塔捕捉從軌道返回的 Starship 上級；助推器未能捕捉。',
    improvement: '助推器返回燃燒因燃料量不足提早結束，根本原因截至截止時間仍在調查。',
    image: null,
    source: 'SpaceX Flight 15', sourceUrl: 'https://www.spacex.com/launches/starship-flight-15'
  }
];
