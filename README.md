# 📚 Library Management API

This is a **Library Management System API** built with **Express**, **TypeScript**, and **MongoDB (Mongoose)**.

## 🚀 Live Link

🔗 [Live Deployment (Vercel)](https://z-l1-b2-a3-mhi7okesw-zakir-naiks-projects.vercel.app/api/books), ([](https://z-l1-b2-a3.vercel.app/api/books)),
🔗  [Github Link: https://github.com/zakir-naik-abir/Zakir_L2_B5_A3]
🎥 [Video Explanation]()

## 🔧 Tech Stack

- Express.js
- TypeScript
- MongoDB with Mongoose
- REST API
- Vercel Deployment

---

## ✅ Features

- 📘 Create, Get, Update, Delete books
- 🔍 Filter books by genre and sort by fields
- 📤 Borrow book with copy management logic
- 📊 Summary of borrowed books using MongoDB aggregation
- 🔁 Mongoose middleware (pre/post)
- 🔂 Static method for availability management
- 🔒 Proper error handling and validation

---


---

## 🔗 API Endpoints

### 📚 Book Routes

| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| POST   | /api/books          | Create a new book        |
| GET    | /api/books          | Get all books (filtering/sorting) |
| GET    | /api/books/:bookId      | Get book by ID           |
| PUT    | /api/books/:bookId      | Update book              |
| DELETE | /api/books/:bookId      | Delete book              |

### 📦 Borrow Routes

| Method | Endpoint     | Description                  |
|--------|--------------|------------------------------|
| POST   | /api/borrow  | Borrow a book                |
| GET    | /api/borrow  | Get borrow summary (aggregate) |

---

## 📦 How to Run Locally

1. Clone the repo:

```bash
https://github.com/zakir-naik-abir/Zakir_L2_B5_A3.git

// Book Creation
{
  "title": "1984",
  "author": "George Orwell",
  "genre": "FICTION",
  "isbn": "9780451524935",
  "description": "Dystopian novel",
  "copies": 5
}

// Borrow Book
{
  "book": "64ab3f9e2a4b5c6d7e8f9012",
  "quantity": 2,
  "dueDate": "2025-07-18"
}



