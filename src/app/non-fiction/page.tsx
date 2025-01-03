"use client";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { Book } from "../types/type";

const NonFictionPage = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books/non-fiction");
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
    <h1 className="text-3xl font-bold mb-8">Non Fiction Books</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} /> 
          ))}
        </div>
  
  </div>
  );
};

export default NonFictionPage;
