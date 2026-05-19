# Z_YUN網站 專案規則

## 專案定位

- 專案名稱：Z_YUN網站 / 時蘊設計網站
- 類型：靜態作品集網站
- 主要用途：展示時蘊設計品牌、作品案例、聯絡資訊
- 主要語言：繁體中文
- 目前工作區：`C:\Users\cjk48\.claude\projects\Z_YUN網站`

## 技術結構

- `index.html`：網站主頁骨架。
- `content.js`：網站內容資料，包含首頁輪播、作品清單、About、Contact。
- `css/style.css`：視覺版面與響應式樣式。
- `js/main.js`：輪播、作品列表渲染、燈箱互動。
- `案件照片/`：本機大型圖片資料夾，不納入 Git。
- `public/images/`：網站部署用壓縮圖片，需納入 Git。

## 編輯原則

- 優先修改 `content.js` 來調整文字、作品、圖片路徑。
- 只有在版面或互動需求明確時，才修改 `css/style.css` 或 `js/main.js`。
- 不搬動或批次重新命名 `案件照片/`，除非使用者明確要求。
- 新增圖片時先確認原始檔存在，輸出部署版到 `public/images/`，再更新 `content.js`。
- 維持安靜、作品集、室內設計品牌的視覺氣質，避免行銷式首頁與過度裝飾。

## 驗證流程

1. 檢查 `content.js` 內所有圖片路徑是否存在。
2. 用本機預覽開啟 `index.html`。
3. 確認首頁輪播、Projects、燈箱、About、Contact 可正常顯示。
4. 手機版或窄螢幕變更後，要檢查 768px 以下版面。
5. 部署前確認網站引用圖片來自 `public/images/`，不要引用被忽略的 `案件照片/`。

## 第二大腦同步

此專案已連到 Obsidian secondbrain：

- 主要工作台：`G:\我的雲端硬碟\secondbrain\工作記錄\Z_YUN網站\Z_YUN網站 工作台.md`
- 專案索引：`G:\我的雲端硬碟\secondbrain\創作庫\專案\專案索引.md`

重要進度更新時，優先更新工作台；不要在本地與 Obsidian 重複寫同一段長狀態。
