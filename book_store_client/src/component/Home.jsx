import { useState, useEffect } from "react";
import ShoppingItem from "../shopping_Item/ShoppingItem";

export default function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <>
      <div className="container mx-auto my-8">
        <div className="grid grid-cols-1 mx-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {books.map((book) => (
            <ShoppingItem key={book._id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
}
