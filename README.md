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

---

## Architecure

```text
src/
 ├── app.ts                 # express app setup
 ├── server.ts              # server bootstrap
 ├── config/                # env, db, constants
 │    ├── db.ts
 │    ├── env.ts
 │    └── index.ts
 │
 ├── routes/                # route definitions
 │    └── user.routes.ts
 │
 ├── controllers/           # HTTP layer
 │    └── user.controller.ts
 │
 ├── services/              # business logic
 │    └── user.service.ts
 │
 ├── repositories/          # DB access (optional but scalable)
 │    └── user.repository.ts
 │
 ├── models/                # Mongoose schemas
 │    └── user.model.ts
 │
 ├── interfaces/            # TS contracts
 │    └── user.interface.ts
 │
 ├── middlewares/           # express middlewares
 │    ├── auth.middleware.ts
 │    ├── error.middleware.ts
 │    └── validate.middleware.ts
 │
 ├── utils/                 # reusable helpers
 │    ├── hash.ts
 │    ├── jwt.ts
 │    ├── logger.ts
 │    └── response.ts
 │
 ├── validators/            # DTO / request validation
 │    └── user.validator.ts
 │
 ├── types/                 # global types
 │    └── express.d.ts
 │
 └── tests/
```
---

# 🧩 How Your Backend API Works 
```text
Client (Frontend / Postman)
        |
        v
   HTTP Request
        |
        v
┌────────────────────┐
│   Express Router   │  ← routes/user.routes.ts
└────────────────────┘
        |
        v
┌────────────────────┐
│ Validation Layer   │  ← validators + validate.middleware
└────────────────────┘
        |
        v
┌────────────────────┐
│   Controller       │  ← controllers/user.controller.ts
│  (HTTP handling)  │
└────────────────────┘
        |
        v
┌────────────────────┐
│    Service         │  ← services/user.service.ts
│ (Business logic)  │
└────────────────────┘
        |
        v
┌────────────────────┐
│  Repository        │  ← repositories/user.repository.ts
│ (DB interaction)  │
└────────────────────┘
        |
        v
┌────────────────────┐
│   MongoDB          │  ← Mongoose Models
└────────────────────┘
        |
        v
   Response flows back
   (via utils/response.ts)
```
