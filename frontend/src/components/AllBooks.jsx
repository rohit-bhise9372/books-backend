import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:3000";

export default function AllBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${API}/books`);
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

      {books.map((book) => (
        <div key={book._id}>
          <p>{book.title}</p>
          {/* <p>Author: {book.author}</p> */}
        
        </div>
      ))}
    </div>
  );
}