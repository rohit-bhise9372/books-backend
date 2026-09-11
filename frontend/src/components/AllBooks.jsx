import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://books-backend-c.vercel.app";

export default function AllBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${API}/books`);
        console.log(response.data);   
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>All Books</h2>

      {books.length === 0 ? (
        <p>Loading...</p>
      ) : (
        books.map((book) => (
          <div key={book._id}>
            <p>{book.title}</p>
          </div>
        ))
      )}
    </div>
  );
}