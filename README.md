# 時蘊設計 Z-YUN A+U DESIGN 網站

這是一個靜態作品集網站，用於展示時蘊設計的品牌形象、作品案例與聯絡資訊。

## 專案結構

```text
.
├── index.html
├── content.js
├── css/
│   └── style.css
├── js/
│   └── main.js
├── public/
│   └── images/
├── 案件照片/
└── 時蘊設計LOGO.png
```

## 常用修改位置

- 修改作品、輪播圖片、聯絡資訊：`content.js`
- 修改版面與手機版：`css/style.css`
- 修改輪播、作品渲染、燈箱互動：`js/main.js`
- 正式部署圖片：`public/images/`
- 原始作品圖片：`案件照片/`

## 本機預覽

可用任何靜態檔案伺服器預覽本資料夾，例如：

```powershell
python -m http.server 4173
```

然後開啟：

```text
http://127.0.0.1:4173/
```

## 目前狀態

- 網站為單頁靜態作品集。
- 作品資料集中在 `content.js`。
- `案件照片/` 為大型本機素材資料夾，不納入 Git。
- `public/images/` 為部署用壓縮圖片，需納入 GitHub Pages。
- GitHub remote 與正式部署目標尚未設定。
## Firebase Hosting

- 正式網站：https://zyun-design.web.app/
- Firebase 專案：`zyun-design-website`
- Hosting site：`zyun-design`
- Firestore collection：`consultationRequests`
- `firebase-site/` 是部署輸出資料夾，不提交到 Git。
- 部署前需同步 `index.html`、`content.js`、`css/`、`js/`、`public/images/` 到 `firebase-site/`，並將 `時蘊設計LOGO.png` 複製為 `firebase-site/logo.png`。
- 目前未啟用 Cloud Functions Email 通知；預約資料先到 Firebase Firestore 查看。
