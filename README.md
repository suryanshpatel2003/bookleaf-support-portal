# 📚 BookLeaf AI Support & Communication Portal

An AI-powered MERN Stack support portal developed for BookLeaf Publishing as part of the Full Stack Developer Technical Assignment.

The platform enables authors to raise publishing-related support tickets while allowing admins to manage, prioritize, and respond using AI-assisted workflows.

---

# 🚀 Live Features

## 👨‍💻 Author Features

- Secure Login & Authentication
- View Published Books
- Create Support Tickets
- View Ticket History
- Real-Time Style Conversation Interface
- Track Ticket Status
- Dashboard with Book & Royalty Insights

---

## 🛠️ Admin Features

- View All Support Tickets
- AI-Powered Ticket Classification
- AI-Based Priority Detection
- AI Draft Reply Generation
- Manual Ticket Reply
- Ticket Status Management
- Internal Notes System
- Assign Ticket to Self
- Ticket Filters
  - Status
  - Priority
  - Category
  - Search
- Dashboard Analytics

---

# 🤖 AI Features

Integrated using:

- Groq API
- LLaMA 3.1 Model

AI Handles:

- Ticket Categorization
- Priority Detection
- Professional Response Generation

---

# 🧠 AI Prompt Engineering

Custom prompt engineering was implemented for:

- Context-aware support responses
- Professional publishing communication tone
- Knowledge-base-driven replies
- Author-specific personalization

---

# 🏗️ Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Socket.io
- Groq AI API

---

# 📂 Project Structure

## Backend

```bash
backend/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── prompts/
│   ├── routes/
│   ├── seed/
│   ├── services/
│   ├── sockets/
│   ├── utils/
│   ├── app.js
│   └── server.js
```

---

## Frontend

```bash
frontend/
│
├── src/
│   ├── api/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── routes/
│   ├── context/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
```

---

# 🔐 Authentication

JWT-based authentication with role-based access:

- Author
- Admin

Protected routes implemented on both frontend and backend.

---

# 📊 Ticket Workflow

## Ticket Lifecycle

```txt
OPEN → IN_PROGRESS → RESOLVED
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone <your_repo_url>
```

---

# 2️⃣ Backend Setup

```bash
cd backend

npm install
```

Create `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key

GROQ_API_KEY=your_groq_api_key
```

Run backend:

```bash
npm run dev
```

---

# 3️⃣ Seed Sample Data

```bash
npm run seed
```

---

# 4️⃣ Frontend Setup

```bash
cd frontend

npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Run frontend:

```bash
npm run dev
```

---

# 👤 Demo Credentials

## Admin

```txt
Email:
admin@bookleaf.com

Password:
123456
```

---

## Author

```txt
Email:
priya@example.com

Password:
123456
```

---

# 📸 Screenshots

## Recommended Screenshots

- Login Page
- Author Dashboard
- Submit Ticket
- Admin Dashboard
- AI Reply Generation
- Ticket Detail Page
- Filters & Status Management

---

# 🌐 Deployment

## Frontend

Deploy using:

- Vercel

---

## Backend

Deploy using:

- Render / Railway

---

# 🧪 API Testing

API endpoints tested using:

- Postman

---

# ✨ Key Highlights

- AI-integrated support workflow
- Scalable MERN architecture
- Professional admin management system
- Clean and responsive UI
- Production-style folder structure
- Role-based secure access

---

# 📌 Assumptions

- Real-time communication implemented in refresh-based workflow.
- AI responses may vary depending on prompt quality.
- File attachments were treated as optional scope.

---

# 👨‍💻 Developed By

Suryansh Patel

Technical Assignment Submission for:
BookLeaf Publishing