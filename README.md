# 🏛️ Egyptian Grand Museum

A modern, immersive web experience for the **Egyptian Grand Museum** — showcasing Egypt's magnificent heritage through stunning visuals, interactive statue viewers, and rich historical content.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

---

## ✨ Features

- **Home Page** — Hero section with animated elements and featured exhibits
- **Ramesses II Page** — Dedicated page for the legendary pharaoh
- **Statue Viewer** — Unified interactive viewer for museum statues
- **About Page** — Museum information and history
- **Reusable Components** — Shared Navigation, Footer, and UI primitives
- **Responsive Design** — Fully responsive across mobile, tablet, and desktop
- **Custom Typography** — Egyptian-themed fonts (Aniron, Goudy)

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **TypeScript** | Type safety |
| **Vite 8** | Build tool & dev server |
| **Tailwind CSS 4** | Utility-first styling |
| **Lucide React** | Icon library |

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/egyptian-grand-museum.git

# Navigate to the project
cd egyptian-grand-museum

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI primitives (Button, Card)
│   ├── figma/           # Figma-exported components
│   ├── Navigation.tsx   # Top navigation bar
│   ├── Footer.tsx       # Shared footer component
│   ├── HomePage.tsx     # Home page with hero & featured exhibits
│   ├── RamessesPage.tsx # Ramesses II dedicated page
│   ├── AboutPage.tsx    # About the museum
│   ├── UnifiedStatueViewer.tsx  # Interactive statue viewer
│   └── BookTicketButton.tsx     # Ticket booking CTA
├── lib/
│   └── utils.ts         # Utility functions
├── styles/
│   └── globals.css      # Global styles & CSS variables
├── App.tsx              # Root component with routing
└── main.tsx             # Entry point
```

## 🎨 Design System

The project uses CSS custom properties for a cohesive Egyptian theme:

- `--egyptian-gold` — Accent color for headings and borders
- `--egyptian-green` — Primary dark background
- `--egyptian-cream` — Light text and backgrounds

## 📄 License

© 2024 Egyptian Grand Museum. All rights reserved.
