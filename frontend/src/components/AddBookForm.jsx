import { useState } from "react";
import axios from "axios";

const API = "https://books-backend-c.vercel.app";

export default function AddBookForm() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: "",
    language: "",
    country: "",
    rating: "",
    summary: "",
    coverImageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBook = {
      ...formData,
      publishedYear: Number(formData.publishedYear),
      rating: Number(formData.rating),
      genre: formData.genre.split(",").map((g) => g.trim()),
    };

    try {
      const response = await axios.post(`${API}/books`, newBook);

      console.log("Book Added:", response.data);
      alert("Book added successfully!");

      setFormData({
        title: "",
        author: "",
        publishedYear: "",
        genre: "",
        language: "",
        country: "",
        rating: "",
        summary: "",
        coverImageUrl: "",
      });
    } catch (error) {
      console.log(error);
      alert("Failed to add book.");
    }
  };

  return (
    <div>
      <h2>Add New Book</h2>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <br />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Author:</label>
        <br />
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Published Year:</label>
        <br />
        <input
          type="number"
          name="publishedYear"
          value={formData.publishedYear}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Genre:</label>
        <br />
        <input
          type="text"
          name="genre"
          placeholder="Fiction, Drama"
          value={formData.genre}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Language:</label>
        <br />
        <input
          type="text"
          name="language"
          value={formData.language}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Country:</label>
        <br />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Rating:</label>
        <br />
        <input
          type="number"
          step="0.1"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Summary:</label>
        <br />
        <textarea
          name="summary"
          rows="3"
          value={formData.summary}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Cover Image URL:</label>
        <br />
        <input
          type="text"
          name="coverImageUrl"
          value={formData.coverImageUrl}
          onChange={handleChange}
        />
        <br />
        <br />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}