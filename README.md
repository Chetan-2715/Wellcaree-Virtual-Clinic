# 🌿 Wellcaree Virtual Clinic

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

**Wellcaree Virtual Clinic** is a premium, high-performance web application designed for a modern Homeopathy Clinic. It features a polished UI with advanced animations, a comprehensive medical condition directory, and a direct-to-WhatsApp appointment booking system.

---

## ✨ Features

* **🎨 High-End Visuals:** Smooth scroll effects, parallax animations, and micro-interactions powered by **Framer Motion**.
* **📱 Fully Responsive:** Mobile-first design that looks perfect on all devices.
* **📅 WhatsApp Booking System:** A serverless booking flow that gathers patient details and redirects them directly to the doctor's WhatsApp with a pre-formatted message.
* **mg SEO Optimized:** Dynamic meta tags and titles using `react-helmet-async` for better search engine visibility.
* **🩺 Comprehensive Medical Data:** Detailed catalog of treatments including Joint Diseases, Skin Disorders, Lifestyle Diseases, and more.
* **📍 Location Integration:** Direct "Get Directions" links to Google Maps for clinic branches.

---

## 🛠️ Tech Stack

* **Framework:** [React 19](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Routing:** [React Router DOM](https://reactrouter.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **SEO:** [React Helmet Async](https://github.com/staylor/react-helmet-async)

---

## 💻 Installation & Setup

Follow these steps to run the project locally on your machine.

### Prerequisites

* Node.js (v18 or higher)
* npm or yarn

### 1. Clone the Repository

```bash
git clone [https://github.com/your-username/wellcaree-virtual-clinic.git](https://github.com/your-username/wellcaree-virtual-clinic.git)
cd wellcaree-virtual-clinic

```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000` (or the port shown in your terminal).

---

## 📂 Project Structure

```bash
src/
├── components/       # Reusable UI components (Navbar, Footer, Cursor)
├── pages/            # Main route pages (Home, About, Booking, etc.)
├── data.ts           # Central content file (Clinic info, Doctors, Conditions)
├── types.ts          # TypeScript interfaces
├── App.tsx           # Main application wrapper with Routing & SEO
└── index.css         # Global styles & Tailwind imports
```

---

## 🔧 Customization

### Changing Clinic Details

All static data is centralized in `src/data.ts`. You can easily update:

* **Branch Locations & Maps:** Update the `BRANCHES` array.
* **Doctor Profiles:** Update the `DOCTORS` array.
* **Medical Conditions:** Update the `CATEGORIES` array.

### Configuring WhatsApp Number

To change the number that receives booking requests, open `src/pages/Booking.tsx` and update:

```typescript
const phoneNumber = "919511757256"; // Replace with your number
```