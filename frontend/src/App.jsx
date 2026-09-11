import "./App.css";
import AddBookForm from "./components/AddBookForm";
import AllBooks from "./components/AllBooks";
import BookDetails from "./components/BookDetails";
import BookByAuthors from "./components/BookByAuthors";

function App() {
  return (
    <main>
      
        <AddBookForm />
        <hr />
        <AllBooks />
        <hr />
        <BookDetails />
        <hr />
        <BookByAuthors />
     
    </main>
  );
}

export default App;