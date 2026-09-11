import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://books-backend-c.vercel.app";

export default function BookByAuthors() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `${API}/books/author/${encodeURIComponent("Harper Lee")}`
        );

        console.log(response.data);
        setBooks(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Books by Harper Lee</h2>

      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        books.map((book) => (
          <div key={book._id}>
            <p>
              <strong>{book.title}</strong>
            </p>
          </div>
        ))
      )}
    </div>
  );
}