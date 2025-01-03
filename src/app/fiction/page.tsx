"use client";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard"; 
import { Book } from "../types/type"; 

const FictionPage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string>("");

  // Fetch books on component mount
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books/fiction"); 
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setBooks(data); 
      } catch (error) {
        setError("Error fetching books: " + (error instanceof Error ? error.message : "Unknown error"));
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Fiction Books</h1>
      {/* Display a message if no books are found */}
      {books.length === 0 ? (
        <div className="text-center text-lg text-gray-500">No books available</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} /> 
          ))}
        </div>
 
      )}
    </div>
  );
};

export default FictionPage;
