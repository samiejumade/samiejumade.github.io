## 🌐 Portfolio (Vite + React + TypeScript)

Single Page Application for a Blockchain Developer (3.5+ years experience) built with Vite, React, TypeScript, and React Router.

---

## 📍 Routes

* `/about` (default)
* `/projects`
* `/experience`
* `/contact`

---

## ⚙️ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

---

## 🎨 Customize

* Update content in `src/pages/*`
* Modify layout/styles in `src/App.css`
* Update site name, navigation, and links in `src/App.tsx`

---

## 🚀 Deployment (GitHub Pages)

This project is deployed using GitHub Pages via the `gh-pages` branch.

### 🔁 Steps to update the live website

Whenever you make changes locally, follow these steps:

### 1. Test locally

```bash
npm run dev
```

### 2. Commit & push changes

```bash
git add .
git commit -m "update portfolio"
git push origin main
```

### 3. Deploy to GitHub Pages

```bash
npm run deploy
```

### 4. View your website

👉 https://samiejumade.github.io/

If updates are not visible, perform a hard refresh:

```bash
Ctrl + Shift + R
```

---

## 🧠 Important Notes

* `main` branch → contains source code (React, TypeScript)
* `gh-pages` branch → contains production build (static files)
* GitHub Pages serves only static files (HTML, CSS, JS)
* Always run `npm run deploy` after making changes

---

## ⚠️ Common Issues & Fixes

### 🔴 Blank page / white screen

👉 Cause: Deployment not done
✅ Fix: Run

```bash
npm run deploy
```

---

### 🔴 MIME type error (main.tsx)

👉 Cause: GitHub serving source files instead of build
✅ Fix:

* Ensure deployment to `gh-pages` branch
* Do not serve from `main`

---

### 🔴 Changes not reflecting

👉 Cause: Browser cache
✅ Fix:

```bash
Ctrl + Shift + R
```

---

## 📌 Tech Stack

* React
* TypeScript
* Vite
* React Router

---

## 📬 Contact

Feel free to connect for opportunities or collaborations.
