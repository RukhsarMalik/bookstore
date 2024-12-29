"use client";
import { useState } from "react";
import { useCart } from "../context/CartContext"; // Import the CartContext

// Define the type for a cart item
interface CartItem {
  title: string;
  price: string;
  quantity: number;
}

// Define the type for userDetails
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
  // Ensure that cartItems is typed properly using CartItem[]
  const { cartItems, clearCart } = useCart();

  // Initialize the userDetails with the appropriate type
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: "",
    phone: "",
    address: "",
    city: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
  });

  const shipmentCharges = 5; // Shipment charges in USD

  // Explicitly type calculateSubtotal to return a number
  const calculateSubtotal = (): number => {
    return cartItems.reduce((total: number, item: CartItem) => {
      const priceString = item.price.replace('$', '').trim();
      const price = parseFloat(priceString);

      if (isNaN(price)) {
        console.error(`Invalid price for item with title: ${item.title}`, item.price);
        return total;
      }

      return total + price * item.quantity;
    }, 0);
  };

  // Explicitly type the event handler parameter `field`
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof UserDetails
  ): void => {
    setUserDetails((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // Allow only numbers and limit to 11 digits
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 11);
    setUserDetails((prev) => ({ ...prev, phone: value }));
  };

  // Explicitly type the event handler parameter `field`
  const handleCardChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof UserDetails
  ): void => {
    setUserDetails((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handlePlaceOrder = (): void => {
    // Validate phone number
    if (userDetails.phone.length !== 11) {
      alert("Phone number must be exactly 11 digits.");
      return;
    }

    // Validate card details (assuming only basic validation for length here)
    if (userDetails.cardNumber.length !== 16) {
      alert("Card number must be 16 digits.");
      return;
    }

    if (userDetails.cardCVV.length !== 3) {
      alert("CVV must be 3 digits.");
      return;
    }

    // Clear the cart using the context method
    clearCart();

    // Reset form fields
    setUserDetails({
      name: "",
      phone: "",
      address: "",
      city: "",
      cardNumber: "",
      cardExpiry: "",
      cardCVV: "",
    });

    // Show success message or redirect
    alert("Order placed successfully!");
  };

  return (
    <div className="container mx-auto p-6">
      {cartItems.length === 0 ? (
        <div className="text-center mt-20">
          <h2 className="text-2xl font-bold">Your cart is empty</h2>
          <p className="mt-4">Add items to your cart to proceed to checkout.</p>
        </div>
      ) : (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
          <div>
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
              onChange={handlePhoneChange} // Use the custom handler for phone
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

          <div className="mt-6 flex justify-between items-center">
            <div>
              <p className="text-xl font-semibold">
                Subtotal: ${calculateSubtotal().toFixed(2)} USD
              </p>
              <p className="text-xl font-semibold">
                Shipment: ${shipmentCharges.toFixed(2)} USD
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold">
                Total: ${(calculateSubtotal() + shipmentCharges).toFixed(2)} USD
              </p>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="bg-[#D96846] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#c25439] transition mt-6"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
