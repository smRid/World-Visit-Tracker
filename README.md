<div align="center">

# 🌍 World Visit Tracker

### Track Every Country You've Explored

A beautiful, interactive web application that lets you browse all 250 countries and territories around the world — and mark the ones you've visited.

[![Live Demo](https://img.shields.io/badge/▶_Live_Demo-Visit_Now-2ea44f?style=for-the-badge)](https://world-visit-tracker.vercel.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

---

## 📸 Preview

<div align="center">

| Desktop View |
| :---: |
| ![World Visit Tracker - Desktop](https://world-visit-tracker.vercel.app/favicon.svg) |

</div>

> **🔗 Live Site:** [https://world-visit-tracker.vercel.app/](https://world-visit-tracker.vercel.app/)

---

## ✨ Features

| Feature | Description |
| :--- | :--- |
| 🗺️ **250 Countries** | Browse a comprehensive list of every country and territory worldwide |
| 🏳️ **National Flags** | High-quality flag images for every country with smart fallback loading |
| ✅ **Visit Tracking** | Mark countries as "Visited" or "Not Visited" with a single click |
| 🔤 **Alphabetical Sort** | Countries are sorted A–Z for quick and easy browsing |
| 📊 **Country Details** | View capital city, continent, population, and area for each country |
| 🏷️ **Size Classification** | Automatic "Big Country" / "Small Country" labels based on area |
| 🌗 **Dark Mode** | Automatic dark/light theme based on system preference |
| 📱 **Responsive Design** | Fully responsive grid layout that adapts to any screen size |

---

## 🛠️ Tech Stack

<div align="center">

| Technology | Purpose |
| :---: | :---: |
| **React 19** | UI library with modern `use()` hook & Suspense |
| **Vite 8** | Lightning-fast build tool & dev server |
| **Vanilla CSS** | Custom styling with CSS variables & dark mode |
| **REST API** | Country data from Programming Hero Open API |
| **Vercel** | Production deployment & hosting |

</div>

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `v18+`
- **npm** `v9+`

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/World-Visit-Tracker.git
   cd World-Visit-Tracker
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in your browser**

   Navigate to `http://localhost:5173` to see the app running locally.

### Build for Production

```bash
npm run build
```

The optimized output will be in the `dist/` directory, ready for deployment.

---

## 📁 Project Structure

```
World-Visit-Tracker/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   └── Countries/
│   │       ├── Countries.jsx      # Grid container & data fetching
│   │       ├── Countries.css       # Grid layout styles
│   │       ├── Country.jsx         # Individual country card
│   │       └── Country.css         # Card styles & visited state
│   ├── App.jsx                     # Root component with Suspense
│   ├── App.css                     # App-level styles
│   ├── index.css                   # Global styles & CSS variables
│   └── main.jsx                    # Entry point
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🎨 Design Highlights

- **CSS Custom Properties** — Centralized theming with `--text`, `--bg`, `--accent` and more
- **Automatic Dark Mode** — Respects `prefers-color-scheme` system setting
- **Responsive Grid** — 3-column layout that gracefully adapts to smaller screens
- **Visual Visit Feedback** — Cards glow green when marked as visited
- **Smart Flag Fallback** — If a flag fails to load, an alternate CDN source is used automatically

---

## 🌐 API Reference

Country data is fetched from the **Programming Hero Open API**:

```
GET https://openapi.programming-hero.com/api/all
```

Returns data for **250 countries** including name, flag, capital, region, population, and area.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**⭐ If you found this project useful, please give it a star!**

Made with ❤️ using React + Vite

</div>
