// app/api/academic/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const books = [
    {
      id: 1,
      title: "Academic Book 1",
      author: "Author 1",
      price: "$15",
      image: "/images/book5.jpg",
      category: "academic",
      categoryId: 3, 
    },
    {
      id: 2,
      title: "Academic Book 2",
      author: "Author 2",
      price: "$18",
      image: "/images/book6.jpg",
      category: "academic",
      categoryId: 3, 
    },
    {
      id: 3,
      title: "Academic Book 3",
      author: "Author 2",
      price: "$18",
      image: "/images/book6.jpg",
      category: "academic",
      categoryId: 3, 
    },
    {
      id: 4,
      title: "Academic Book 4",
      author: "Author 2",
      price: "$18",
      image: "/images/book6.jpg",
      category: "academic",
      categoryId: 3, 
    },
    {
      id: 5,
      title: "Academic Book 5",
      author: "Author 2",
      price: "$18",
      image: "/images/book6.jpg",
      category: "academic",
      categoryId: 3, 
    },
    {
      id: 6,
      title: "Academic Book 6",
      author: "Author 2",
      price: "$18",
      image: "/images/book6.jpg",
      category: "academic",
      categoryId: 3, 
    },
    {
      id: 7,
      title: "Academic Book 7",
      author: "Author 2",
      price: "$18",
      image: "/images/book6.jpg",
      category: "academic",
      categoryId: 3, 
    },
    {
      id: 8,
      title: "Academic Book 8",
      author: "Author 2",
      price: "$18",
      image: "/images/book6.jpg",
      category: "academic",
      categoryId: 3, 
    },
    {
      id: 9,
      title: "Academic Book 9",
      author: "Author 2",
      price: "$18",
      image: "/images/book6.jpg",
      category: "academic",
      categoryId: 3, 
    },
  ];

  return NextResponse.json(books);
}
