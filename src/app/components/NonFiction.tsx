"use client";
import React, { useEffect, useState } from "react";
import { Book } from "../types/type";
import BookCard from "./BookCard";
import Link from "next/link";

const NonFictionSection = () => {
  const [nonFictionBooks, setNonFictionBooks] = useState<Book[]>([]);
  const [displayBooks, setDisplayBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books/non-fiction");
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setNonFictionBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    const updateDisplayBooks = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1280) {
        // Large screens (show 4 items per row)
        setDisplayBooks(nonFictionBooks.slice(0, 4));
      } else if (screenWidth >= 1024) {
        // Medium screens (show 3 items per row)
       
        setDisplayBooks(nonFictionBooks.slice(0, 3));
      } else if (screenWidth >= 640) {
        // Small screens (show 2 items per row)
        
        setDisplayBooks(nonFictionBooks.slice(0, 4));
      } else {
        // Extra small screens (show 1 item per row)
        setDisplayBooks(nonFictionBooks.slice(0, 4));
      }
    };

    // Initial setup
    updateDisplayBooks();

    // Update on window resize
    window.addEventListener("resize", updateDisplayBooks);
    return () => window.removeEventListener("resize", updateDisplayBooks);
  }, [nonFictionBooks]);

  return (
    <section className="bg-white py-12 px-6 rounded-lg shadow-md">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center sm:text-left">
          Non-Fiction Books
        </h2>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {displayBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        {/* Show More Button */}
        <div className="text-center">
          <Link href="/non-fiction">
            <button className="bg-[#D96846] text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-[#c7573e] transition">
              Show More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NonFictionSection;
