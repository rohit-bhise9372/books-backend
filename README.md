# 📚 Books Library – Full Stack MERN Project

A full-stack Books Library application built with **React**, **Node.js**, **Express**, **MongoDB**, and **Vercel**. Users can view books, search books, filter by author, and add new books to the database through a React form.

---

## 🚀 Live Demo

- **Frontend:** https://books-frontend-c.vercel.app

- **Backend:** https://books-backend-c.vercel.app/books

---

## ✨ Features

- 📖 View all books
- 🔍 View book details by title
- 👨‍💼 Get books by author
- ➕ Add a new book using a React form
- 💾 Store data in MongoDB Atlas
- 🌐 Fully deployed on Vercel

---

## 🛠️ Tech Stack

### Frontend
- React JS
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

---

## 📁 Project Structure

```text
books-library/
│
├── backend/
│   ├── api/
│   │   └── index.js
│   ├── db/
│   │   └── db.connect.js
│   ├── model/
│   │   └── book.models.js
│   ├── package.json
│   └── vercel.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddBookForm.jsx
│   │   │   ├── AllBooks.jsx
│   │   │   ├── BookByAuthors.jsx
│   │   │   └── BookDetails.jsx
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
│
└── README.md
```

---

## 📚 Book Model

```js
{
  title: String,
  author: String,
  publishedYear: Number,
  genre: [String],
  language: String,
  country: String,
  rating: Number,
  summary: String,
  coverImageUrl: String
}
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/books` | Get all books |
| GET | `/books/:bookTitle` | Get book by title |
| GET | `/books/author/:authorName` | Get books by author |
| GET | `/books/genre/business` | Get Business books |
| GET | `/books/year/:year` | Get books by published year |
| POST | `/books` | Add a new book |
| POST | `/books/:bookId` | Update book by ID |
| POST | `/books/title/:bookTitle` | Update book by title |
| DELETE | `/books/:bookId` | Delete book by ID |

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/rohit-bhise9372/books-backend.git
```

### 2. Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file:

```env
MONGODB=your_mongodb_connection_string
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🧪 Screens Included

- Add New Book Form
- All Books List
- Book Details
- Books by Harper Lee

---

## 👨‍💻 Author

**Rohit Bhise**

- GitHub: https://github.com/rohit-bhise9372/books-backend

---
