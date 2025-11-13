Linguist AI Serverless Pro (Vercel + Indian Glossaries)
======================================================

📁 What's inside:
- public/feature8.html — Your translator UI (front-end)
- vercel/api/translate.js — Serverless translation function
- glossaries/ — 22+ Indian language glossaries with common terms, names, and cultural words
- vercel.json — Routing for Vercel
- .github/workflows/deploy-vercel.yml — CI for auto-deploys to Vercel

🚀 Steps to Deploy on Vercel:
1️⃣ Create a new GitHub repo and push these files.
2️⃣ Go to https://vercel.com and import your repo.
3️⃣ In GitHub → Repo → Settings → Secrets → Actions:
    - Add a secret: VERCEL_TOKEN = your_vercel_token
   (Get it from your Vercel account → Settings → Tokens)
4️⃣ Every time you push to the 'main' branch, GitHub Actions will deploy automatically to Vercel.

🔧 Optional local test:
   npm install
   npx vercel dev
   → Visit http://localhost:3000

🇮🇳 Improving accuracy:
- Add more entries to glossaries/*.json for domain-specific names.
- Each file maps local terms to English (and vice versa if needed).
- No API key required (uses LibreTranslate public API).

✅ Default translation direction:
   auto → English (automatically detects Indian language input and outputs English)
