# 🎓 College Management System

A full-stack College Management System built using Node.js, Express, MongoDB, and EJS.

This project allows students to register and log in, while admins can manage courses, notices, and students through a secure dashboard.

---

## 🚀 Features

### 👨‍🎓 Student
- Student Registration with validation
- Secure Login (bcrypt password hashing)
- Student Dashboard
- View Courses
- View Notices
- Responsive UI

### 🛠 Admin
- Secure Admin Login
- Admin Dashboard with statistics
- Add / Edit / Delete Courses
- Add / Edit / Delete Notices
- View Registered Students
- Session-based Authentication

### 🌐 Public
- Modern Home Page
- About Page
- Courses Page
- Notices Page
- Notice Detail View

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- EJS (Server-Side Rendering)
- Bootstrap 5
- Express-Session
- Bcrypt
- Connect-Flash

---

## 📂 Project Structure

CollegeWeb/
│
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── config/
├── app.js
├── package.json
└── README.md

---

## ⚙️ Installation

1. Clone the repository

git clone https://github.com/Mohammad-Adeeb-11/college-management-system.git


2. Install dependencies

3. Create a `.env` file and add:
MONGO_URL=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
PORT=3000

4. Run the server

5. Open in browser:
http://localhost:3000

---

## 🔐 Environment Variables

| Variable | Description |
|----------|------------|
| MONGO_URL | MongoDB Atlas connection string |
| SESSION_SECRET | Secret key for session |
| PORT | Server port |

---

## 🌍 Deployment

The project can be deployed on:

- Render
- Railway
- Cyclic
- VPS

MongoDB Atlas is used as the cloud database.

---

## 📌 Future Improvements

- Profile picture upload
- Role-based middleware
- Search & Pagination
- Dashboard analytics (charts)
- Email verification
- Payment integration

---

## 👨‍💻 Author

Mohammad Adeeb  
BCA Student  
Swami Ramanand Tirth Marathwada University, Nanded

---

⭐ If you like this project, give it a star!


