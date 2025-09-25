# 🎓 Student Job Tracker

A full-stack web application to manage and track job applications efficiently. Built using the **MERN stack** with clean, modular code.

---

## 📌 Features

- ✅ Add new job applications
- 📋 View a list of all applications
- 🔄 Update the status (Applied / Interview / Offer / Rejected)
- 🗑️ Delete an application

## ⚙️ Tech Stack

### Frontend

- React.js (with Hooks)
- Tailwind CSS (Optional)
- Axios

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas (Cloud NoSQL Database)

## 🚀 Getting Started (Development)

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/your-username/student-job-tracker.git
cd student-job-tracker
```

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```
MONGODB_URI=your-mongodb-atlas-uri
```

Start the server:

```bash
npm start
```

Server will run on `http://localhost:5000`

---

### 3️⃣ Setup Frontend

```bash
cd ../client
npm install
npm start
```

Frontend will run on `http://localhost:3000`

Add this proxy to `client/package.json` for development:

```json
"proxy": "http://localhost:5000"
```

---

## 📊 Sample JSON Structure

```json
{
  "company": "Google",
  "role": "SDE Intern",
  "status": "Interview",
  "date": "2025-04-01",
  "link": "https://careers.google.com"
}
```

---

---
