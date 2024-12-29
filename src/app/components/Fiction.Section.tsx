"use client";
import React, { useEffect, useState } from "react";
import { Book } from "../types/type";
import BookCard from "./BookCard";
import Link from "next/link";

const FictionSection = () => {
  const [fictionBooks, setFictionBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/api/books/fiction");
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setFictionBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <section className="bg-white py-12 px-6 text-black  rounded-lg shadow-md ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Fiction Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {fictionBooks.slice(0, 5).map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/fiction">
            <button className="bg-[#D96846] text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-[#c7573e] transition">
              Show More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FictionSection;
