"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useCart } from "../../context/CartContext"; 
import { Book } from "../../types/type";
import { useRouter } from "next/navigation";  
import Image from "next/image";

const NonFictionBookDetail = () => {
  const { id } = useParams();  
  const [book, setBook] = useState<Book | null>(null);  
  const [error, setError] = useState<string>(""); 

  const { addToCart } = useCart();  
  const router = useRouter(); 

  // Fetch the book details based on the dynamic ID
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`/api/books/non-fiction/${id}`);
        if (!response.ok) throw new Error("Book not found");
        const data = await response.json();
        setBook(data);
      } catch (error) {
        setError("Failed to fetch book details.");
        console.error(error);
      }
    };

    if (id) fetchBookDetails();  
  }, [id]);

  const handleBuyNow = () => {
    addToCart(book!);  // Add the current book to the cart
    router.push("/checkout");  // Redirect to the checkout page
  };

  const handleAddToCart = () => {
    addToCart(book!);  
  };

  if (error) return <div>{error}</div>;
  if (!book) return <div>Loading...</div>;


  const paragraphs = book.description?.split("\n\n").map((paragraph, index) => {
    const parts = paragraph.split(/(\*\*.*?\*\*)/g); // Split on **...** markers
    return (
      <p key={index} className="text-sm text-gray-700">
        {parts.map((part, subIndex) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <span key={subIndex} className="font-bold">
              {part.slice(2, -2)} {/* Remove the ** markers */}
            </span>
          ) : (
            <span key={subIndex}>{part}</span>
          )
        )}
      </p>
    );
  });
  
  return (
    <div className="container bg-white text-black mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side: Book Image */}
        <div className="flex justify-center">
          <Image
            src={book.image}
            alt={book.title}
            width={300}
            height={450}
            objectFit="cover" 
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right side: Book Details */}
        <div className="flex flex-col mb-4">
          <h1 className="md:text-4xl text-3xl font-bold text-gray-800">{book.title}</h1>
          <p className="text-xl font-semibold text-gray-600 mt-1">{book.author}</p>
          <p className="text-lg text-gray-500 mt-2 mb-2">Price: {book.price}</p>
          
         
          {paragraphs}

 
          <div className="mt-6 flex space-x-4">
            <button
              className="bg-[#D96846] text-white py-2 px-6 rounded-lg hover:bg-[#B75B39] transition duration-300"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
            <button
              className="bg-white text-[#D96846] py-2 px-6 border border-[#D96846] rounded-lg hover:bg-[#D96846] hover:text-white transition duration-300"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonFictionBookDetail;
