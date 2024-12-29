"use client"; // Ensure this is client-side code
import { useCart } from "../context/CartContext"; // Import useCart hook
import { Book } from "../types/type";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import Link from "next/link"; // Import Link from Next.js for routing

type BookCardProps = {
  book: Book;
};

const BookCard = ({ book }: BookCardProps) => {
  // Get addToCart function from the CartContext
  const { addToCart } = useCart();
  const router = useRouter(); // Initialize the router to programmatically navigate

  const handleBuyNow = () => {
    addToCart(book); // Add the current book to the cart
    router.push("/checkout"); // Redirect to the checkout page
  };

  const handleAddToCart = () => {
    addToCart(book); // Add the current book to the cart
  };

  return (
    // Wrap the entire BookCard in a Link to navigate to the book details page
    
      <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out w-full sm:w-72 md:w-72 lg:w-72 cursor-pointer transform hover:scale-105">
      <Link href={`/fiction/${book.id}`} passHref>
        {/* Image Section */}
        <div className="relative w-full h-48 mb-4 flex justify-center items-center overflow-hidden rounded-lg">
          <Image
            src={book.image}
            alt={book.title}
            width={130}
            height={200} // You can adjust the height here as per your design
            objectFit="cover" // Ensures the image covers the container without distortion
            className="rounded-t-lg transform transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>

        {/* Book Data Section */}
        <h3 className="text-lg font-semibold mb-1 transition-colors duration-300 ease-in-out group-hover:text-[#D96846] text-center sm:text-left">{book.title}</h3>
        <p className="text-sm text-gray-600 mb-2 transition-colors duration-300 ease-in-out group-hover:text-gray-800 text-center sm:text-left">{book.author}</p>
        <p className="text-md font-semibold text-green-600 mb-4 text-center sm:text-left">{book.price}</p>
      </Link>
        {/* Button Section */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-2 sm:space-y-0">
          <button
            className="flex-1 bg-[#D96846] text-white py-2 px-3 rounded hover:bg-white hover:text-[#D96846] transition-colors duration-300 ease-in-out"
            onClick={handleBuyNow} // Add the item to the cart and redirect to checkout
          >
            Buy Now
          </button>
          <button
            className="flex-1 text-[#D96846] bg-white py-2 px-3 border border-[#D96846] rounded hover:bg-[#D96846] hover:text-white transition-colors duration-300 ease-in-out"
            onClick={handleAddToCart} // Add the item to the cart without redirecting
          >
            Add to Cart
          </button>
        </div>
      </div>

  );
};

export default BookCard;
