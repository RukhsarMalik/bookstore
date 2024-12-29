"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import clsx from "clsx";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineArrowRight } from "react-icons/md";
import {useCart} from "../context/CartContext"; 

const Header = () => {


  const { cartItems } = useCart(); 

  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [isEnglishBooksOpen, setEnglishBooksOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const categoryTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const englishBooksTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnterCategory = () => {
    if (categoryTimeoutRef.current) {
      clearTimeout(categoryTimeoutRef.current);
    }
    setCategoryOpen(true);
  };

  const handleMouseLeaveCategory = () => {
    categoryTimeoutRef.current = setTimeout(() => {
      setCategoryOpen(false);
    }, 200);
  };

  const handleMouseEnterEnglishBooks = () => {
    if (englishBooksTimeoutRef.current) {
      clearTimeout(englishBooksTimeoutRef.current);
    }
    setEnglishBooksOpen(true);
  };

  const handleMouseLeaveEnglishBooks = () => {
    englishBooksTimeoutRef.current = setTimeout(() => {
      setEnglishBooksOpen(false);
    }, 200);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-[#D96846] text-white shadow-md sticky top-0 z-50 ">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">FictionFlux</Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 relative z-50">
          <Link href="/">Home</Link>
          <div
            className="relative"
            onMouseEnter={handleMouseEnterCategory}
            onMouseLeave={handleMouseLeaveCategory}
          >
            <button className="text-white cursor-pointer flex items-center space-x-2">
              <span>Categories</span>
              <IoMdArrowDropdown className="w-4 h-4" />
            </button>
            {isCategoryOpen && (
              <div className="absolute left-0 mt-2 bg-gray-700 shadow-lg rounded-md w-48 z-50">
                <ul className="py-2">
                  <li
                    className="px-4 py-2 hover:bg-gray-600 relative"
                    onMouseEnter={handleMouseEnterEnglishBooks}
                    onMouseLeave={handleMouseLeaveEnglishBooks}
                  >
                    <button className="text-white w-full text-left flex items-center space-x-2">
                      <span>English Books</span>
                      <MdOutlineArrowRight className="w-4 h-4" />
                    </button>
                    {isEnglishBooksOpen && (
                      <div className="absolute left-full top-0 bg-gray-700 shadow-lg rounded-md w-48">
                        <ul className="py-2">
                          <li className="px-4 py-2 hover:bg-gray-600">
                            <Link href="/fiction">Fiction</Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-gray-600">
                            <Link href="/non-fiction">Non-Fiction</Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-600">
                    <Link href="/urdu">Urdu Books</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-600">
                    <Link href="/academic">Academic Books</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>

          {/* Cart Link */}
          <Link href="/cart" className="flex items-center space-x-2">
            <FiShoppingCart className="w-5 h-5" />
            {/* Show cart count */}
            <span>
              Cart ({cartItems.length})
            </span>
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          <FiMenu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 z-40",
          {
            "-translate-x-full": !isMobileMenuOpen,
            "translate-x-0": isMobileMenuOpen,
          }
        )}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={toggleMobileMenu}
        >
          <FiX className="w-6 h-6" />
        </button>
        <nav className="p-4 space-y-4">
        <Link href="/" className="block text-[#D96846]" >
            Home
          </Link>
          <Link href="/categories" className="block text-[#D96846]" >
            Categories
          </Link>
          <Link href="/fiction" className="block">
            Fiction
          </Link>
          <Link href="/non-fiction" className="block">
            Non-Fiction
          </Link>
          <Link href="/academic" className="block">
            Academic
          </Link>
          <Link href="/urdu" className="block">
            Urdu Novels
          </Link>
          <Link href="/login" className="block text-[#D96846]">
            Login
          </Link>
          <Link href="/register" className="block text-[#D96846]">
            Register
          </Link>
          <Link href="/cart" className="md:block flex text-[#D96846] items-center space-x-2">
            <FiShoppingCart className="w-5 h-5" />
            <span>
              Cart ({cartItems.length}) {/* Display cart item count */}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
