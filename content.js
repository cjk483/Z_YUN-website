/**
 * 時蘊設計 ── 網站內容設定檔
 * ════════════════════════════════════════════════════════
 *
 *  【編輯說明】
 *  用記事本（Notepad）或 VS Code 開啟這個檔案，
 *  直接修改引號 "" 或 `` 內的文字即可更新網站。
 *  儲存後，在瀏覽器按 F5 重新整理就能看到效果。
 *
 *  注意：不要刪除引號、逗號、中括號 [] 或大括號 {}。
 *
 * ════════════════════════════════════════════════════════
 */

const CONTENT = {

  // ──────────────────────────────────────────────────────
  //  首頁輪播照片（8 張，從各案件精選）
  //  ─ 修改路徑可以換圖，路徑從網站根目錄算起
  // ──────────────────────────────────────────────────────
  heroSlides: [
    "public/images/project-01-beitou/01.jpg",
    "public/images/project-01-beitou/02.jpg",
    "public/images/project-01-beitou/03.jpg",
    "public/images/project-08-yanping-chen/04.jpg",
    "public/images/project-02-banqiao/01.jpg",
    "public/images/project-03-zhubei-lobby/01.jpg",
    "public/images/project-04-zhubei-lounge/01.jpg",
    "public/images/project-07-wuhan/01.jpg",
  ],

  // ──────────────────────────────────────────────────────
  //  About 頁文字
  // ──────────────────────────────────────────────────────
  philosophy: "時間會改變光的角度，\n也會讓材料慢慢顯出它真正的表情。",

  story: "時蘊設計從生活的節奏出發，觀察人在空間裡停留、移動、收納、用餐、閱讀與相處的方式。設計不是先決定造型，而是先理解每一個日常動作背後真正需要的尺度。\n\n我們重視光線進入室內的方向，也重視材料在手邊、腳下與視線盡頭所留下的觸感。石材、木作、塗料、玻璃與金屬不只是表面，它們共同構成空間的溫度、秩序與時間感。\n\n一個好的空間不需要急著說明自己。它應該在入住後的每一天，讓使用者感覺順手、安定，也在季節與光影變化之間，慢慢累積出屬於家的輪廓。",

  // ──────────────────────────────────────────────────────
  //  設計師資訊
  // ──────────────────────────────────────────────────────
  designer: {
    role:    "主持設計師",
    name_zh: "陳　俊　凱",
    name_en: "KAI CHEN",
  },

  // ──────────────────────────────────────────────────────
  //  聯絡資訊
  // ──────────────────────────────────────────────────────
  contact: {
    phone:   "0918-562-630",
    email:   "ZYUNSTUDIO@gmail.com",
    address: "105 台北市松山區三民路 136 巷 9 號 2 樓",
    company: "時蘊室內裝修有限公司",
  },

  // ──────────────────────────────────────────────────────
  //  社群連結
  //  ─ 連結尚未確認時，先讓 url 保持空字串 ""
  // ──────────────────────────────────────────────────────
  social: [
    { name: "Facebook", label: "FB", url: "https://www.facebook.com/profile.php?id=61583165555934" },
    { name: "Instagram", label: "IG", url: "https://www.instagram.com/zyun_design/" },
  ],

  // ──────────────────────────────────────────────────────
  //  作品集
  //
  //  每個案件的欄位說明：
  //  ┌──────────────────────────────────────────────────┐
  //  │ accent      色塊顏色（HEX 色碼，如 "#B8A898"）     │
  //  │ title       作品名稱（換行用 \n）                   │
  //  │ location    地點（如 "台北・北投"）                 │
  //  │ type        空間類型（如 "住宅"、"商辦公設"）        │
  //  │ cover       封面照片路徑                           │
  //  │ description 案件說明文字（留空請填 ""）             │
  //  │ photos      所有照片路徑清單（點開後可瀏覽）         │
  //  └──────────────────────────────────────────────────┘
  //
  //  ★ 新增案件：複製一個 { ... }, 區塊貼到最後，修改內容
  //  ★ 刪除案件：把整個 { ... }, 區塊刪除即可
  //  ★ 調整順序：把 { ... }, 區塊上下移動即可
  // ──────────────────────────────────────────────────────
  projects: [

    // ── 01 北投許宅 ──────────────────────────────────
    {
      accent:      "#B8A898",
      title:       "北投許宅",
      location:    "台北・北投",
      type:        "住宅",
      cover:       "public/images/project-01-beitou/01.jpg",
      description: "以白色作為空間的共同語言，透過石材、塗料、玻璃與鐵件，分出細膩而不張揚的層次。自然光被柔和地引入室內，讓開放場域、收納量體與日常物件都保持安靜，呈現家的自然樣貌。",
      photos: [
        "public/images/project-01-beitou/01.jpg",
        "public/images/project-01-beitou/05.jpg",
        "public/images/project-01-beitou/06.jpg",
        "public/images/project-01-beitou/07.jpg",
        "public/images/project-01-beitou/02.jpg",
        "public/images/project-01-beitou/08.jpg",
        "public/images/project-01-beitou/09.jpg",
        "public/images/project-01-beitou/10.jpg",
        "public/images/project-01-beitou/11.jpg",
        "public/images/project-01-beitou/03.jpg",
        "public/images/project-01-beitou/12.jpg",
        "public/images/project-01-beitou/13.jpg",
        "public/images/project-01-beitou/14.jpg",
        "public/images/project-01-beitou/04.jpg",
        "public/images/project-01-beitou/15.jpg",
        "public/images/project-01-beitou/16.jpg",
        "public/images/project-01-beitou/17.jpg",
        "public/images/project-01-beitou/18.jpg",
        "public/images/project-01-beitou/19.jpg",
      ],
    },

    // ── 02 板橋林宅 ──────────────────────────────────
    {
      accent:      "#4A5568",
      title:       "板橋林宅",
      location:    "新北・板橋",
      type:        "住宅",
      cover:       "public/images/project-02-banqiao/01.jpg",
      description: "以深色木質格柵作為入口轉折，將外部的節奏收束進室內。開放廚房與餐敘區在溫潤木色、石材檯面與弧形天花之間展開，讓住宅保有沉穩的表情，也留住日常相聚的溫度。",
      photos: [
        "public/images/project-02-banqiao/01.jpg",
        "public/images/project-02-banqiao/02.jpg",
        "public/images/project-02-banqiao/03.jpg",
        "public/images/project-02-banqiao/04.jpg",
        "public/images/project-02-banqiao/05.jpg",
        "public/images/project-02-banqiao/06.jpg",
        "public/images/project-02-banqiao/07.jpg",
        "public/images/project-02-banqiao/08.jpg",
        "public/images/project-02-banqiao/09.jpg",
        "public/images/project-02-banqiao/10.jpg",
      ],
    },

    // ── 03 竹北 一樓 ─────────────────────────────────
    {
      accent:      "#5C5850",
      title:       "竹北辦公大樓\n一樓辦公大廳",
      location:    "新竹・竹北",
      type:        "商辦公設",
      cover:       "public/images/project-03-zhubei-lobby/01.jpg",
      description: "一樓大廳以明亮石材鋪陳公共尺度，中央深色石紋牆面成為視覺錨點。挑高比例、線性燈光與金屬分割讓進出動線保持清楚，也讓商辦入口具備穩重而開放的第一印象。",
      photos: [
        "public/images/project-03-zhubei-lobby/01.jpg",
        "public/images/project-03-zhubei-lobby/02.jpg",
        "public/images/project-03-zhubei-lobby/03.jpg",
        "public/images/project-03-zhubei-lobby/04.jpg",
        "public/images/project-03-zhubei-lobby/05.jpg",
        "public/images/project-03-zhubei-lobby/06.jpg",
        "public/images/project-03-zhubei-lobby/07.jpg",
      ],
    },

    // ── 04 竹北 十樓 ─────────────────────────────────
    {
      accent:      "#6B7280",
      title:       "竹北辦公大樓\n十樓交誼大廳",
      location:    "新竹・竹北",
      type:        "商辦公設",
      cover:       "public/images/project-04-zhubei-lounge/01.jpg",
      description: "十樓交誼空間以共享、停留與活動為主軸，透過天花幾何、石材牆面與柔和家具配置，讓大面積場域不顯空曠。座席區、長桌與展示牆彼此串連，形成可以用餐、交流與短暫休息的公共客廳。",
      photos: [
        "public/images/project-04-zhubei-lounge/01.jpg",
        "public/images/project-04-zhubei-lounge/02.jpg",
        "public/images/project-04-zhubei-lounge/03.jpg",
        "public/images/project-04-zhubei-lounge/04.jpg",
        "public/images/project-04-zhubei-lounge/05.jpg",
        "public/images/project-04-zhubei-lounge/06.jpg",
      ],
    },

    // ── 05 竹北 辦公空間 ─────────────────────────────
    {
      accent:      "#4B4540",
      title:       "竹北辦公大樓\n辦公空間",
      location:    "新竹・竹北",
      type:        "商辦公設",
      cover:       "public/images/project-05-zhubei-office/01.jpg",
      description: "辦公樓層以玻璃界定會議室與走道，讓視線穿透並保留工作區的明亮感。木質、灰階布紋與線性照明降低商辦空間的冰冷感，在效率與安定之間取得平衡。",
      photos: [
        "public/images/project-05-zhubei-office/01.jpg",
        "public/images/project-05-zhubei-office/02.jpg",
        "public/images/project-05-zhubei-office/03.jpg",
        "public/images/project-05-zhubei-office/04.jpg",
        "public/images/project-05-zhubei-office/05.jpg",
      ],
    },

    // ── 06 竹北 自助吧 ───────────────────────────────
    {
      accent:      "#4A5240",
      title:       "竹北辦公大樓\n自助用餐區",
      location:    "新竹・竹北",
      type:        "商辦公設",
      cover:       "public/images/project-06-zhubei-dining/01.jpg",
      description: "自助用餐區以綠色磁磚牆、石材地坪與明亮天花形成清爽的用餐背景。從電梯廳到餐區的動線被乾淨地收束，讓員工日常用餐與短暫交流都能在明亮、有秩序的場域中發生。",
      photos: [
        "public/images/project-06-zhubei-dining/01.jpg",
        "public/images/project-06-zhubei-dining/02.jpg",
        "public/images/project-06-zhubei-dining/03.jpg",
        "public/images/project-06-zhubei-dining/04.jpg",
        "public/images/project-06-zhubei-dining/05.jpg",
        "public/images/project-06-zhubei-dining/06.jpg",
        "public/images/project-06-zhubei-dining/07.jpg",
      ],
    },

    // ── 07 武漢民宅 ──────────────────────────────────
    {
      accent:      "#7C5C4E",
      title:       "武漢民宅",
      location:    "中國・武漢",
      type:        "住宅",
      cover:       "public/images/project-07-wuhan/01.jpg",
      description: "以淺灰石材、柔和布紋與黑色線條組成清晰的住宅骨架。客廳、餐區與端景被安排在同一條視覺軸線上，讓開放場域保有流動感，也讓日常起居呈現乾淨、克制的現代表情。",
      photos: [
        "public/images/project-07-wuhan/01.jpg",
        "public/images/project-07-wuhan/02.jpg",
        "public/images/project-07-wuhan/03.jpg",
        "public/images/project-07-wuhan/04.jpg",
        "public/images/project-07-wuhan/05.jpg",
        "public/images/project-07-wuhan/06.jpg",
        "public/images/project-07-wuhan/07.jpg",
        "public/images/project-07-wuhan/08.jpg",
      ],
    },

    // ── 08 延平北路陳宅 ───────────────────────────────
    {
      accent:      "#8A7564",
      title:       "延平北路陳宅",
      location:    "台北・延平北路",
      type:        "住宅",
      cover:       "public/images/project-08-yanping-chen/04.jpg",
      description: "以溫潤木質與柔和米白作為空間基調，讓電視牆、收納量體與客廳端景彼此連續。自然光穿過白紗進入室內，降低材質的厚重感，也讓住宅在明亮與包覆之間，形成安定而細緻的生活表情。",
      photos: [
        "public/images/project-08-yanping-chen/01.jpg",
        "public/images/project-08-yanping-chen/02.jpg",
        "public/images/project-08-yanping-chen/03.jpg",
        "public/images/project-08-yanping-chen/04.jpg",
        "public/images/project-08-yanping-chen/05.jpg",
        "public/images/project-08-yanping-chen/06.jpg",
        "public/images/project-08-yanping-chen/07.jpg",
      ],
    },

  ], // ← 最後一個案件後不加逗號也沒關係

};
