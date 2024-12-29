// app/api/urdu-novels/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const books = [
    {
      id: 1,
      title: "Urdu Novel 1",
      author: "Author 1",
      price: "$40",
      image: "/images/book7.jpg",
      category: "urdu-novels",
      categoryId: 4, 
    },
    {
      id: 2,
      title: "Urdu Novel 2",
      author: "Author 2",
      price: "$50",
      image: "/images/book8.jpg",
      category: "urdu-novels",
      categoryId: 4, 
    },
    {
      id: 3,
      title: " Book 3",
      author: "Author 2",
      price: "$18",
      image: "/images/book6.jpg",
      category: "urdu-novels",
      categoryId: 4, 
    },
    {
      id: 4,
      title: "Book 4",
      author: "Author 2",
      price: "$18",
      image: "/images/book6.jpg",
      category: "urdu-novels",
      categoryId: 4, 
    },
    {
      id: 5,
      title: "Book 5",
      author: "Author 2",
      price: "$18",
      image: "/images/book6.jpg",
      category: "urdu-novels",
      categoryId: 4, 
    },
    {
      id: 6,
      title: "Book 6",
      author: "Author 2",
      price: "$18",
      image: "/images/book6.jpg",
      category: "urdu-novels",
      categoryId: 4, 
    },
    {
      id: 7,
      title: "Book 7",
      author: "Author 2",
      price: "$18",
      image: "/images/book6.jpg",
      category: "urdu-novels",
      categoryId: 4, 
    },
    {
      id: 8,
      title: "Book 8",
      author: "Author 2",
      price: "$18",
      image: "/images/book6.jpg",
      category: "urdu-novels",
      categoryId: 4, 
    },
  ];

  return NextResponse.json(books);
}
