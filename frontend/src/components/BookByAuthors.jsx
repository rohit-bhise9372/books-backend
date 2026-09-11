import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://books-backend-j8ot.vercel.app/";

export default function BookByAuthors() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/books/author/Harper%20Lee`)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Books by Harper Lee</h2>

      {books.map((book) => (
        <div key={book._id}>
          <p>{book.title}</p>

        </div>
      ))}
    </div>
  );
}