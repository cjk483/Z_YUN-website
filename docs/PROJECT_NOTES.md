# Z_YUN網站 工作筆記

## 2026-05-19 專案初始化

目前工作區：

`C:\Users\cjk48\.claude\projects\Z_YUN網站`

目前網站結構：

- `index.html`：主頁 HTML。
- `content.js`：內容資料來源。
- `css/style.css`：版面樣式。
- `js/main.js`：輪播、Projects、燈箱互動。
- `案件照片/`：作品圖片素材。

本次初始化補齊：

- `AGENTS.md`
- `README.md`
- `docs/PROJECT_NOTES.md`

已完成檢查：

- Git repository 已存在，分支為 `master`。
- 已確認 `content.js` 中所有非空作品圖片路徑都存在。
- 已修正竹北辦公大樓相關圖片路徑，使作品圖片可正常載入。
- 本機預覽網址使用 `http://127.0.0.1:4173/`。

待確認：

- 是否要把目前 `.claude\projects` 工作區作為正式維護路徑，取代舊工作台記錄中的 `.codex\2026_project` 路徑。
- 是否建立 GitHub remote / GitHub Pages。
- 社群連結與正式文案是否要補齊。

## 2026-05-19 收工：作品名稱、文案與 Contact 可讀性調整

本次完成：

- 修正竹北辦公大樓四個作品名稱，移除不自然的「的」字。
- 移除首頁左側直排標語「時間，慢慢醞釀成一個作品」。
- 更新首頁右側詩性文案。
- 擴充 About 內容，補入生活節奏、尺度、材料、光線與時間感的品牌敘述。
- 依每案照片先寫第一版 Project 燈箱文案。
- Contact 新增 Facebook、Instagram、Threads 社群入口；正式連結待補。
- Contact 底部資訊加深並改為更清楚的 footer 視覺。
- 全站文字色階加深，改善小字閱讀性。
- 修正移除直排標語後側邊導覽上移的問題，讓桌機版導覽回到底部。

驗證：

- 本機頁面可正常載入。
- Projects 仍為 7 個作品。
- `content.js` 中所有非空圖片路徑均存在。
- 未發現非空圖片來源破圖。

目前狀態：

- 尚未 commit。
- 尚未設定 Git remote。
- 本輪社群連結仍為 placeholder，待使用者提供正式 URL。

## 2026-05-19 部署前圖片整理

本次完成：

- 建立 `public/images/` 作為 GitHub Pages 部署用圖片資料夾。
- 將網站實際引用的 62 張 `案件照片/` 原始圖轉為網站版 JPG。
- 原始引用圖片總量：約 321 MB。
- 部署版圖片總量：約 16.9 MB。
- 更新 `content.js`，將圖片路徑由 `案件照片/...` 改為 `public/images/...`。
- 保留 `案件照片/` 作為本機原始素材，仍由 `.gitignore` 排除。

驗證：

- `content.js` 目前引用 62 張 `public/images/` 圖片。
- 62 張部署圖皆存在。
- `content.js`、`index.html`、`css/style.css`、`js/main.js` 已不再引用 `案件照片/`。
- `public/images/` 未被 `.gitignore` 排除，可納入 Git。
- 本機頁面重新載入後，首頁與 Projects 圖片沒有破圖。

部署提醒：

- 下一次 commit 必須包含 `public/images/`。
- 不要把原始 `案件照片/` 直接加入 Git。

## 2026-05-20 GitHub Pages 部署

本次完成：

- 建立公開 GitHub repo：`https://github.com/cjk483/Z_YUN-website`
- 推送本地 commit：`e9a0cf2 Prepare Z-YUN website for GitHub Pages`
- 啟用 GitHub Pages，來源為 `master` 分支根目錄。
- 正式網址：`https://cjk483.github.io/Z_YUN-website/`

驗證：

- GitHub Pages build 狀態：built。
- 正式網址可載入。
- 頁面標題：`時蘊設計 Z-YUN A+U DESIGN`。
- Projects 數量：7。
- 首頁與 Projects 當前 DOM 圖片無破圖。
- Facebook 與 Instagram 連結正確。

目前狀態：

- 本地 `master` 已追蹤 `origin/master`。
- 工作區乾淨。
- 尚未設定自訂網域。

## 2026-05-20 手機版優化

本次完成：

- 強化同一網址的手機版響應式版型，不新增獨立手機網址。
- 手機 header 改為上下兩層：品牌列與導覽列分開，提高點擊穩定性。
- 手機首頁 hero 圖片與右側文案區改為上下排列，改善閱讀節奏。
- 手機 Projects 字級、行高、間距與卡片觸控感加強。
- About 手機版文字加大並放寬行距。
- Contact 手機版電話、Email、地址與社群按鈕加大，社群按鈕改為滿寬觸控。
- 手機燈箱改為圖片在上、資訊在下，並加大左右切換箭頭與文案字級。
- 針對 420px 以下再補一層窄螢幕調整。

驗證：

- 本機手機寬度預覽可載入。
- Projects 數量仍為 7。
- 社群入口仍為 Facebook / Instagram 兩個。
- 非空圖片來源無破圖。
