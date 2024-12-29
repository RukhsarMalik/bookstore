"use client";
import { useState } from "react";

const CheckoutForm = ({ cartItems, handlePlaceOrder }: { cartItems: any[], handlePlaceOrder: () => void }) => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
  });

  const shipmentCharges = 5; // Shipment charges in USD

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const priceString = item.price.replace('$', '').trim();
      const price = parseFloat(priceString);

      if (isNaN(price)) {
        console.error(`Invalid price for item with title: ${item.title}`, item.price);
        return total;
      }

      return total + price * item.quantity;
    }, 0);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setUserDetails((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
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
          onChange={(e) => handleFormChange(e, "phone")}
          className="w-full p-4 border border-gray-300 rounded-lg mb-4"
          placeholder="Your Phone"
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
  );
};

export default CheckoutForm;
