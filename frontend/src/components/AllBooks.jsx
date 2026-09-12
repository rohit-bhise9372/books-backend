import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://books-backend-c.vercel.app";

export default function AllBooks() {
  const [books, setBooks] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${API}/books`);
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(`${API}/books/${bookId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw "Failed to delete book.";
      }

      const data = await response.json();

      if (data) {
        setSuccessMessage("Book deleted successfully");
        fetchBooks(); // Refresh list after delete
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
  <div className="books-container">
    <h2>All Books</h2>

    {successMessage && (
      <p className="success-banner">{successMessage}</p>
    )}

    {books.length === 0 ? (
      <p className="status-text">Loading...</p>
    ) : (
      <ul className="book-list">
        {books.map((book) => (
          <li key={book._id} className="book-item">
            <span>{book.title}</span>
            <button onClick={() => handleDelete(book._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
);
}