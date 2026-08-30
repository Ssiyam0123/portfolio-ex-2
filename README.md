# Esthiyak Ahmmed — Developer Portfolio 🚀

[![Live Demo](https://img.shields.io/badge/Live%20Demo-siyam--three.vercel.app-brightgreen?style=for-the-badge&logo=vercel)](https://siyam-three.vercel.app)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com)

A high-performance, modern full-stack developer portfolio showcasing interactive web projects, skills, professional experience, and contact forms. Designed with a sleek dark-mode glassmorphic interface and dynamic backend API integration.

🔗 **Live Website:** [https://siyam-three.vercel.app](https://siyam-three.vercel.app)

---

## 🌟 Key Features

- **⚡ Modern & Responsive UI:** Built with React, Tailwind CSS, and Framer Motion for smooth animations and ambient lighting effects.
- **💼 Highlighted Projects:** Features top engineering builds including **Clothing E-Commerce** and **Chat Z** with live demo & GitHub repository links.
- **🛠️ Interactive Skills Circle & Timeline:** Visual display of core technologies (React, Node.js, Express, MongoDB, Tailwind CSS, Git, etc.).
- **📨 Contact & Messaging:** Integrated contact form with instant message submission saved to MongoDB database.
- **🔐 Admin Dashboard:** Dedicated admin portal (`/admin`) with JWT authentication to manage portfolio data dynamically.

---

## 🛠️ Tech Stack

### Frontend (`/web`)
- **Core:** React 18, Vite
- **Styling:** Tailwind CSS, DaisyUI, Glassmorphism design system
- **Animations:** Framer Motion
- **Icons:** React Icons (Feather, FontAwesome, SimpleIcons)

### Backend (`/backend`)
- **Runtime:** Node.js, Express.js
- **Database:** MongoDB Atlas with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens) & Bcrypt password hashing
- **Deployment:** Serverless deployment ready for Vercel

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas Database URI

### 1. Clone Repository
```bash
git clone https://github.com/siyam-io/portfolio-2.git
cd portfolio-2
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file inside `/backend`:
```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
```

Run database seeder and start server:
```bash
node seed.js
npm run dev
```

### 3. Frontend Setup
```bash
cd ../web
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).