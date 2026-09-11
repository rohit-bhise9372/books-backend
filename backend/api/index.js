const express = require("express");
const cors = require("cors");

const app = express();

const { initializeDatabase } = require("../db/db.connect");
const Book = require("../model/book.models");

// Connect Database
initializeDatabase();

// CORS Configuration
const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// Add new books
async function createBook(newBook) {
  try {
    const book = new Book(newBook);
    const savedBook = await book.save();
    return savedBook;
  } catch (error) {
    throw error;
  }
}

app.post("/books", async (req, res) => {
  try {
    const savedBook = await createBook(req.body);
    res.status(201).json({ message: "Book added successfully.", book: savedBook });
  } catch (error) {
    res.status(500).json({ error: "Failed to add book." });
  }
});

// Read all books
async function readAllBooks() {
  try {
    const books = await Book.find();
    return books;
  } catch (error) {
    throw error;
  }
}

app.get("/books", async (req, res) => {
  try {
    const books = await readAllBooks();
    if (books.length !== 0) {
      res.json(books);
    } else {
      res.status(404).json({ error: "No books found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books." });
  }
});

// GET book by author
app.get("/books/author/:authorName", async (req, res) => {
  try {
    const books = await Book.find({ author: req.params.authorName });
    if (books.length !== 0) {
      res.json(books);
    } else {
      res.status(404).json({ error: "No books found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books." });
  }
});

// GET books by genre/business — 
app.get("/books/genre/business", async (req, res) => {
  try {
    const books = await Book.find({ genre: "Business" });
    if (books.length !== 0) {
      res.json(books);
    } else {
      res.status(404).json({ error: "No books found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books." });
  }
});

// GET books by year —
app.get("/books/year/:year", async (req, res) => {
  try {
    const books = await Book.find({ publishedYear: Number(req.params.year) });
    if (books.length !== 0) {
      res.json(books);
    } else {
      res.status(404).json({ error: "No books found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books." });
  }
});

// GET book by title
app.get("/books/:bookTitle", async (req, res) => {
  try {
    const book = await Book.findOne({ title: req.params.bookTitle });
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: "Book not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch book." });
  }
});

// Update book by ID
app.post("/books/:bookId", async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.bookId,
      req.body,
      { new: true }
    );
    if (updatedBook) {
      res.status(200).json({ message: "Book updated successfully.", book: updatedBook });
    } else {
      res.status(404).json({ error: "Book does not exist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update book." });
  }
});

// Update book by title
app.post("/books/title/:bookTitle", async (req, res) => {
  try {
    const updatedBook = await Book.findOneAndUpdate(
      { title: req.params.bookTitle },
      req.body,
      { new: true }
    );
    if (updatedBook) {
      res.status(200).json({ message: "Book updated successfully.", book: updatedBook });
    } else {
      res.status(404).json({ error: "Book does not exist" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update book." });
  }
});

// Delete book by ID
app.delete("/books/:bookId", async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.bookId);
    if (deletedBook) {
      res.status(200).json({ message: "Book deleted successfully." });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete book." });
  }
});

// Local pe chalega, Vercel pe nahi
if (require.main === module) {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

module.exports = app;