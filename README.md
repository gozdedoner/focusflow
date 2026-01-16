# FocusFlow 🧠✨  
A modern, minimal task management app focused on productivity, clarity, and premium UX.

FocusFlow is designed as a **mini SaaS-style task manager** that goes beyond a basic to-do list by combining clean UI, smooth interactions, and thoughtful UX decisions.

---

## 🚀 Features

- ✅ Add, complete, and delete tasks
- 🏷️ Category-based tasks  
  - Work (yellow)
  - Personal (pink)
  - Study (purple)
  - Health (green)
- 🔍 Task filtering  
  - All / Active / Completed
- 📊 Progress tracking  
  - Linear progress bar
  - Circular (SVG-based) progress indicator
- 🌗 Dark / Light mode with persistence
- 💾 Persistent data using localStorage
- ✨ Smooth micro-animations for better UX
- 📱 Responsive and clean layout

---

## 🧩 Tech Stack

- **React** (Hooks & component-based architecture)
- **Tailwind CSS** (utility-first styling)
- **JavaScript (ES6+)**
- **SVG** (for circular progress)
- **LocalStorage** (data persistence)

---

## 🧠 UX & Design Approach

FocusFlow was built with the idea that:

> Productivity tools should feel **light**, **clear**, and **pleasant to use**.

Key UX decisions:
- Minimal but meaningful animations (no visual overload)
- Clear task states (active vs completed)
- Category-based visual hierarchy
- Dashboard-style progress feedback
- “Finished product” feeling rather than a demo

---

## 📦 Project Structure



src/
├─ components/
│ ├─ TaskForm.jsx
│ ├─ TaskItem.jsx
│ └─ TaskList.jsx
│
├─ pages/
│ └─ Home.jsx
│
├─ types/
│ └─ task.ts
│
├─ assets/
├─ App.jsx
└─ main.jsx


---

## ⚙️ Installation & Run Locally

```bash
git clone https://github.com/gozdedoner/focusflow.git
cd focusflow
npm install
npm run dev
Then open:
👉 http://localhost:5173

🎯 Purpose of the Project

This project was built as part of a frontend development process to demonstrate:

Clean React component architecture

State and UI synchronization

UX-focused feature decisions

Readable and maintainable code

## 🌍 Live Demo
👉 https://focusflow-task.netlify.app/


Product-oriented thinking beyond course requirements

✍️ Author

Gözde Döner
Frontend Developer
Focused on React, modern UI/UX, and product-oriented development.
