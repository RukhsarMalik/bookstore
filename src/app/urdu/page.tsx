"use client";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { Book } from "../types/type";

const UrduPage = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books/urdu");
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Urdu Novels</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default UrduPage;
