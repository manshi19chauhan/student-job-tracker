
# 🎓 Student Job Tracker

A full-stack web application to manage and track job applications efficiently. Built using the **MERN stack** with clean, modular code and deployed for production use.

---

## 📌 Features

- ✅ Add new job applications
- 📋 View a list of all applications
- 🔄 Update the status (Applied / Interview / Offer / Rejected)
- 🗑️ Delete an application
- 🔍 Filter and sort jobs by date or status
- 🌐 Deployed on **Vercel**, **Render**, and **MongoDB Atlas**

---

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

### Deployment
- **Frontend**: Vercel
- **Backend**: Render or Railway
- **Database**: MongoDB Atlas

---

## 📁 Folder Structure

```
root/
│
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── api/            # API interaction layer
│   │   └── App.js          # Main app file
│   └── package.json        # React dependencies and scripts
│
├── server/                 # Node + Express backend
│   ├── models/             # Mongoose schema
│   ├── routes/             # API routes
│   ├── index.js            # Entry point
│   └── .env                # Environment variables (MongoDB URI, etc.)
│
└── README.md               # You're here 🙂
```

---

## 🚀 Getting Started (Development)

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/your-username/student-job-tracker.git
cd student-job-tracker
```

### 2️⃣ Setup Backend

```bash
cd server
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

## 🌍 Deployment

### Frontend (Vercel)

1. Push `client/` to a GitHub repo
2. Connect to [Vercel](https://vercel.com/)
3. Configure build command: `npm run build`
4. Set output directory: `build`

### Backend (Render or Railway)

1. Push `server/` to a GitHub repo
2. Connect to [Render](https://render.com/)
3. Set environment variable: `MONGODB_URI`
4. Start command: `node index.js`

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

## 🧠 Future Improvements

- User Authentication (JWT)
- Export to CSV
- Pagination + Search
- Admin dashboard

---



