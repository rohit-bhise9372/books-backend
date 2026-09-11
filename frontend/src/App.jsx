import AddBookForm from "./components/AddBookForm";
import AllBooks from "./components/AllBooks";
import BookDetails from "./components/BookDetails";
import BookByAuthors from "./components/BookByAuthors";

function App() {
  return (
    <div>
      <AddBookForm />

      <hr />

      <AllBooks />

      <hr />

      <BookDetails />

      <hr />

      <BookByAuthors />
    </div>
  );
}

export default App;