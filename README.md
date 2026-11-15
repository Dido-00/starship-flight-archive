# Starship 飛行測試紀錄 | 一頁式靜態網站

以互動式折返時間軸展示 SpaceX Starship Flight 1–15。資料時間基準：2026-11-15 21:00（台灣時間）。

## 直接開啟

直接以瀏覽器開啟 `index.html` 即可操作，不需 Node.js、資料庫或安裝額外套件。此網站也可以部署到 GitHub Pages。

## 檔案

- `index.html`：網站結構、標頭及頁尾資料來源。
- `style.css`：漸層、字體、時間軸、資訊卡、動畫與 RWD 版型。
- `script.js`：建立折返路線、15 個任務圓圈、點擊切換與資訊卡。
- `data/flights.js`：15 筆任務資料；更新新任務只需在陣列尾端新增物件。
- `assets/starship-background.png`：使用者提供的網站背景圖片。
- `assets/spacex-logo-user.png`：使用者提供的透明 SpaceX Logo（透過 CSS 裁切顯示與反白，原始檔未更動）。
- `AGENTS.md`：AI 延續專案的固定版型、檔案規則、資料格式、來源查證與更新步驟。

## 將網站發布到 GitHub Pages

1. 在 GitHub 建立公開 repository。
2. 將整個資料夾內所有檔案與子資料夾上傳至 repository 根目錄（`index.html` 必須位於根目錄）。
3. 於 Settings → Pages → Build and deployment 選擇 `Deploy from a branch`，並設定 `main / (root)`。
4. 等 GitHub Pages 發布後，由該頁取得網站網址。不要把 README 裡的範例連結當成已部署的真實網址。

## 增加 Flight 16

1. 先查證 SpaceX 官方公告與實際發射結果，日期換算為台灣時間。
2. 在 `data/flights.js` 的陣列末尾新增 `id:16` 資料，含 `launchDate`、`vehicle`、`goal`、`process`、`outcome`、`improvement`、`source`、`sourceUrl`。
3. `image` 只能使用對應任務且確認可用的照片，無法確認則填 `null`。圖片如使用外部網址，離線時可能不顯示。
4. `script.js` 會自動增加圓圈、折返斜線、顯示累計次數；通常不必更改 HTML 或 CSS。
5. 手動更新 `index.html` 最下方資料截止時間，以及頁面中的次要介紹文字（例如年度範圍）。
6. 發射前若官方僅公布預定時程，不應先增加「已完成」數量或虛構飛行結果。

## 注意

- 任務內容為便於閱讀的繁體中文摘要；技術細節請再參考頁尾列出的官方資料。
- 網站不是 SpaceX 官方作品。背景圖由本專題使用者提供，其公開再利用權利應由上傳者自行確認。
- Flight 5 資訊卡使用連結到 SpaceX 官方伺服器的圖片，只有在網路連線且來源允許存取時才顯示，未連線時不影響其他功能。其他任務的圖片暫時留空，避免將不屬於該次任務的照片錯誤標示。
- 已確認日期顯示「發射日」，統一台灣時間（UTC+8），不是美國德州當地日期。
- `AGENTS.md` 已依確認後的設計規則建立，位於 Repository 根目錄。

## GitHub Repository 連結如何顯示

網站放上 GitHub Pages 並使用 `username.github.io/repository` 後，頁尾的 Repository 連結會自動依網址建立；用本機瀏覽時不顯示，以免誤連。

## Logo 使用提醒

本網站不是 SpaceX 官方網站。使用者提供的透明圖片是 SpaceX 商標，放在頁首供辨識主題，不代表 SpaceX 背書或授權。公開分享前可參考 https://www.spacex.com/trademark 。
