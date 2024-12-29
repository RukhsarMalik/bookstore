"use client";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";

interface CartItem {
  title: string;
  price: string;
  quantity: number;
}

interface UserDetails {
  name: string;
  phone: string;
  address: string;
  city: string;
  cardNumber: string;
  cardExpiry: string;
  cardCVV: string;
}

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: "",
    phone: "",
    address: "",
    city: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const shipmentCharges = 5;

  const calculateSubtotal = (): number => {
    return cartItems.reduce((total: number, item: CartItem) => {
      const priceString = item.price.replace("$", "").trim();
      const price = parseFloat(priceString);

      if (isNaN(price)) {
        console.error(`Invalid price for item with title: ${item.title}`, item.price);
        return total;
      }

      return total + price * item.quantity;
    }, 0);
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof UserDetails
  ): void => {
    setUserDetails((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 11);
    setUserDetails((prev) => ({ ...prev, phone: value }));
  };

  const handleCardChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof UserDetails
  ): void => {
    setUserDetails((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handlePlaceOrder = (): void => {
    const emptyFields = Object.keys(userDetails).filter(
      (key) => userDetails[key as keyof UserDetails].trim() === ""
    );
  
    if (emptyFields.length > 0) {
      alert("Please fill out all the fields in the form.");
      return;
    }
    if (userDetails.phone.length !== 11) {
      alert("Phone number must be exactly 11 digits.");
      return;
    }

    if (userDetails.cardNumber.length !== 16) {
      alert("Card number must be 16 digits.");
      return;
    }

    if (userDetails.cardCVV.length !== 3) {
      alert("CVV must be 3 digits.");
      return;
    }

    clearCart();
    setUserDetails({
      name: "",
      phone: "",
      address: "",
      city: "",
      cardNumber: "",
      cardExpiry: "",
      cardCVV: "",
    });
    setOrderPlaced(true);
  };

  return (
    <div className="container mx-auto text-black p-6 min-h-screen bg-white flex flex-col">
      {orderPlaced ? (
        <div className="text-center mt-20 flex flex-col items-center justify-center flex-grow">
          <h2 className="text-2xl font-bold text-gray-800">Order placed successfully!</h2>
          <p className="mt-4">Thank you for shopping with us.</p>
          <Link href="/">
            <button className="bg-[#D96846] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#c25439] transition mt-6">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex-grow">
          <h2 className="text-2xl text-black font-semibold mb-4">Checkout</h2>
          <div>
            {/* User Details */}
            <label className="block mb-2">Name</label>
            <input
              type="text"
              value={userDetails.name}
              onChange={(e) => handleFormChange(e, "name")}
              className="w-full p-4 border border-gray-300 rounded-lg mb-4"
              placeholder="Your Name"
            />
            <label className="block mb-2">Phone</label>
            <input
              type="text"
              value={userDetails.phone}
              onChange={handlePhoneChange}
              maxLength={11}
              className="w-full p-4 border border-gray-300 rounded-lg mb-4"
              placeholder="Your Phone (11 digits)"
            />
            <label className="block mb-2">Address</label>
            <input
              type="text"
              value={userDetails.address}
              onChange={(e) => handleFormChange(e, "address")}
              className="w-full p-4 border border-gray-300 rounded-lg mb-4"
              placeholder="Your Address"
            />
            <label className="block mb-2">City</label>
            <input
              type="text"
              value={userDetails.city}
              onChange={(e) => handleFormChange(e, "city")}
              className="w-full p-4 border border-gray-300 rounded-lg mb-4"
              placeholder="Your City"
            />
          </div>

          {/* Payment Details */}
          <h3 className="text-xl font-semibold mt-6">Payment Details</h3>
          <div>
            <label className="block mb-2">Card Number</label>
            <input
              type="text"
              value={userDetails.cardNumber}
              onChange={(e) => handleCardChange(e, "cardNumber")}
              maxLength={16}
              className="w-full p-4 border border-gray-300 rounded-lg mb-4"
              placeholder="Your Card Number (16 digits)"
            />
            <label className="block mb-2">Expiry Date</label>
            <input
              type="text"
              value={userDetails.cardExpiry}
              onChange={(e) => handleCardChange(e, "cardExpiry")}
              className="w-full p-4 border border-gray-300 rounded-lg mb-4"
              placeholder="MM/YY"
            />
            <label className="block mb-2">CVV</label>
            <input
              type="text"
              value={userDetails.cardCVV}
              onChange={(e) => handleCardChange(e, "cardCVV")}
              maxLength={3}
              className="w-full p-4 border border-gray-300 rounded-lg mb-4"
              placeholder="CVV (3 digits)"
            />
          </div>

          {/* Totals */}
          <div className="mt-6 flex justify-between items-center">
            <div>
              <p className="md:text-xl font-semibold">
                Subtotal: ${calculateSubtotal().toFixed(2)} USD
              </p>
              <p className="md:text-xl font-semibold">
                Shipment: ${shipmentCharges.toFixed(2)} USD
              </p>
            </div>
            <div>
              <p className="md:text-xl font-semibold">
                Total: ${(calculateSubtotal() + shipmentCharges).toFixed(2)} USD
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-between">
            <button
              onClick={handlePlaceOrder}
              className="bg-[#D96846] text-white md:px-6 py-3 px-3  rounded-lg text-lg font-medium hover:bg-[#c25439] transition"
            >
              Place Order
            </button>
            <Link href="/">
              <button className="bg-[#D96846] text-white md:px-6 px-3 py-3 rounded-lg text-lg font-medium hover:bg-[#c25439] transition">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
