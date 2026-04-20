# Notes

## 🏗 Project Architecture

### Stack
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Resend（contact form 的 email 服務）
- Vercel（hosting + 自動部署）

### 專案結構
- `/app` — Next.js 的頁面（App Router 模式）
  - `/` — 首頁（Hero + About + Projects + Skills）
  - `/contact` — 聯絡表單
  - `/api/contact` — 處理 email 發送的 API route
- `/components` — 可重用的 UI 元件（Nav、Hero、About 等）
- `/public` — 靜態資源（圖片等）

### 部署流程
- Push 到 `main` → Vercel 自動部署到正式網站
- 開 PR → Vercel 自動建 preview 部署
- 絕不直接 commit 到 main，永遠走 feature branch → PR 的流程


## 🚀 Future Ideas

（想到什麼新功能就丟這裡，不用急著做）
- [ ] 加上部落格功能（可能要接 CMS，像 Sanity 或 Contentful）
- [ ] Projects 區塊做成可以用 tag 篩選
- [ ] 加上 scroll-triggered 動畫
- [ ] 中英文切換
- [ ] 加上 analytics（看誰造訪、從哪來）

