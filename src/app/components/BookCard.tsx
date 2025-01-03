"use client"; 
import { useCart } from "../context/CartContext";
import { Book } from "../types/type";
import Image from "next/image";
import { useRouter } from "next/navigation"; 
import Link from "next/link";

type BookCardProps = {
  book: Book;
};

const BookCard = ({ book }: BookCardProps) => {
 
  const { addToCart } = useCart();
  const router = useRouter(); 

  const handleBuyNow = () => {
    addToCart(book);
    router.push("/checkout"); 
  };

  const handleAddToCart = () => {
    addToCart(book); 
  };

  return (

    
      <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl text-black transition-all duration-300 ease-in-out w-full sm:w-72 md:w-72 lg:w-72 cursor-pointer transform hover:scale-105">
      <Link href={`/${book.category}/${book.id}`} passHref>
        {/* Image Section */}
        <div className="relative w-full h-48 mb-4 flex justify-center items-center overflow-hidden rounded-lg">
          <Image
            src={book.image}
            alt={book.title}
            width={130}
            height={200}
            objectFit="cover" 
            className="rounded-t-lg transform transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>

        {/* Book Data Section */}
        <h3 className="text-lg font-semibold text-black mb-1 transition-colors duration-300 ease-in-out group-hover:text-[#D96846] text-center sm:text-left">{book.title}</h3>
        <p className="text-sm text-gray-600 mb-2 transition-colors duration-300 ease-in-out group-hover:text-gray-800 text-center sm:text-left">{book.author}</p>
        <p className="text-md font-semibold text-green-600 mb-4 text-center sm:text-left">{book.price}</p>
      </Link>
        {/* Button Section */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-2 sm:space-y-0">
          <button
            className="flex-1 bg-[#D96846] text-white py-2 px-3 rounded hover:bg-white hover:text-[#D96846] transition-colors duration-300 ease-in-out"
            onClick={handleBuyNow} 
          >
            Buy Now
          </button>
          <button
            className="flex-1 text-[#D96846] bg-white py-2 px-3 border border-[#D96846] rounded hover:bg-[#D96846] hover:text-white transition-colors duration-300 ease-in-out"
            onClick={handleAddToCart} 
          >
            Add to Cart
          </button>
        </div>
      </div>

  );
};

export default BookCard;
