// app/api/non-fiction/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const books = [
    {
      id: 1,
      title: "Non-fiction Book 1",
      author: "Author 1",
      price: "$30",
      image: "/images/book3.jpg",
      category: "non-fiction",
      categoryId: 2, 
    },
    {
      id: 2,
      title: "Non-fiction Book 2",
      author: "Author 2",
      price: "$25",
      image: "/images/book4.jpg",
      category: "non-fiction",
      categoryId: 2, 
    },
    {
      id: 3,
      title: "Non-fiction Book 3",
      author: "Author 2",
      price: "$25",
      image: "/images/book4.jpg",
      category: "non-fiction",
      categoryId: 2, 
    },
    {
      id: 4,
      title: "Non-fiction Book 4",
      author: "Author 2",
      price: "$25",
      image: "/images/book4.jpg",
      category: "non-fiction",
      categoryId: 2, 
    },
    {
      id: 5,
      title: "Non-fiction Book 5",
      author: "Author 2",
      price: "$25",
      image: "/images/book4.jpg",
      category: "non-fiction",
      categoryId: 2, 
    },
    {
      id: 6,
      title: "Non-fiction Book 6",
      author: "Author 2",
      price: "$25",
      image: "/images/book4.jpg",
      category: "non-fiction",
      categoryId: 2, 
    },
    {
      id: 7,
      title: "Non-fiction Book 7",
      author: "Author 2",
      price: "$25",
      image: "/images/book4.jpg",
      category: "non-fiction",
      categoryId: 2, 
    }
  

  ];

  return NextResponse.json(books);
}
