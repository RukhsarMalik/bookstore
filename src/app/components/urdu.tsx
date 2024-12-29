"use client";
import React, { useEffect, useState } from "react";
import { Book } from "../types/type";
import BookCard from "./BookCard";
import Link from "next/link";

const UrduSection = () => {
  const [urduBooks, setUrduBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books/urdu");
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setUrduBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <section className="bg-gray-50 py-12 px-6 rounded-lg shadow-md">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Urdu Books</h2>
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
          {urduBooks.slice(0, 5).map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/urdu">
            <button className="bg-[#D96846] text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-[#c7573e] transition">
              Show More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UrduSection;
