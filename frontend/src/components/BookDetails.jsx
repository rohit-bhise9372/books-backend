import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://books-backend-c.vercel.app";

export default function BookDetails() {
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`${API}/books/Lean%20In`)
      .then((res) => {
        console.log(res.data);
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h2>Book Details</h2>

      <h2>{book.title}</h2>

      <p>
        <strong>Author:</strong> {book.author}
      </p>

      <p>
        <strong>Published Year:</strong> {book.publishedYear}
      </p>

      <p>
        <strong>Genre:</strong> {book.genre.join(", ")}
      </p>
    </div>
  );
}