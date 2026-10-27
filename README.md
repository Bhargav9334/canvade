# 🎓 Canvade — Online Course Marketplace

> An online course marketplace where learners discover, compare and purchase courses from institutes.

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

**🔗 Live Demo:** [canvade-one.vercel.app](https://canvade-one.vercel.app)

## 📖 Overview

Canvade is a responsive e-learning marketplace front end. Learners can browse course categories, view course and institute pages, compare courses side by side, and complete purchases through a cart and checkout flow. It also includes onboarding, notifications, chat and help-centre pages for a complete product experience.

## ✨ Features

- **Course discovery** — home page, categories and detailed course views
- **Institute pages** — dedicated profiles for course providers
- **Compare courses** — side-by-side comparison to help learners decide
- **Cart & checkout** — complete purchase flow
- **Authentication & onboarding** — login and guided onboarding screens
- **Engagement** — chat, notifications, newsletter and countdown/promotion pages
- **Course creation form** for institutes
- Help centre, privacy policy, about page and custom 404 page
- Fully responsive UI with toast notifications and smooth animations

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, Vite, React Router |
| Styling | Tailwind CSS, Headless UI, Radix UI, Framer Motion |
| Utilities | Axios, Recharts, jsPDF, PapaParse, React Hot Toast |
| Deployment | Vercel |

## 📁 Project Structure

```
canvade/
└── canvade/
    └── src/
        ├── components/   # Navbar, Footer, Auth, Home sections, onboarding
        ├── pages/        # Home, Categories, CourseView, InstituteView, Cart, Checkout, CompareCourses…
        ├── utils/
        ├── App.jsx
        └── main.jsx
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
git clone https://github.com/Bhargav9334/canvade.git
cd canvade
cd canvade
npm install
npm run dev
```

## 🔐 Environment Variables

Create a `.env` file in `canvade/`:

```env
VITE_API_URL=https://your-api-url.com
```

> Never commit `.env` files — keep them listed in `.gitignore`.

## 👤 Author

**Bhargav Sinha** — Software Engineer · Full-Stack MERN Developer

- GitHub: [@Bhargav9334](https://github.com/Bhargav9334)
- Portfolio: [portfolio-blush-sigma-22.vercel.app](https://portfolio-blush-sigma-22.vercel.app)
- Email: bhargavsinha93@gmail.com

If you found this project useful, consider giving it a ⭐
