# Interview Scheduler Backend

This is the **backend server** for the Interview Scheduler project.  
It is built with **Node.js**, **Express**, **TypeScript**, and **MongoDB**.  

The backend provides **REST APIs** for user authentication, interview scheduling, and management.

---

## 🛠 Tech Stack

- **Node.js** (v18+)
- **TypeScript**
- **Express.js**
- **MongoDB** (via Mongoose)
- **JWT** for authentication
- **bcrypt** for password hashing
- **Jest + Supertest** (for testing, introduced later)

---

## ⚡ Features

- User registration and login with JWT authentication
- Role-based users: `interviewer` and `candidate`
- CRUD operations for interviews:
  - Create interview
  - Read / list interviews
  - Update interview
  - Delete interview
- Environment variable configuration
- Production-ready folder structure:
