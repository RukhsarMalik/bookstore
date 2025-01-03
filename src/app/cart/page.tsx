"use client";
import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CartPage = () => {
  const { cartItems, removeFromCart, updateCartQuantity } = useCart();
  const [orderNotes, setOrderNotes] = useState("");
  const router = useRouter(); 

  useEffect(() => {
    console.log("Cart Items:", cartItems); 
  }, [cartItems]);

  const handleQuantityChange = (id: number, category: string, quantity: number) => {
    if (quantity < 1) return;
    updateCartQuantity(id, category, quantity);
  };

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

  const calculateTotalWithShipping = () => {
    const subtotal = calculateSubtotal();
    const shippingCharge = 5; 
    return subtotal + shippingCharge;
  };

  const handleCheckout = () => {
    router.push("/checkout"); 
  };

  return (
    <div className="flex flex-col min-h-screen text-black bg-gray-50">
      <main className="flex-grow container mx-auto px-4 py-6">
        {cartItems.length === 0 ? (
          <div className="text-center">
            <h2 className="text-xl font-medium">Your cart is empty!</h2>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-semibold mb-8 ">Cart</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-4 border border-gray-200">Product</th>
                    <th className="p-4 border border-gray-200">Price</th>
                    <th className="p-4 border border-gray-200">Quantity</th>
                    <th className="p-4 border border-gray-200">Total</th>
                    <th className="p-4 border border-gray-200"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={`${item.id}-${item.title}-${item.category}`}>
                      <td className="flex flex-col md:flex-row items-center p-4 border border-gray-200">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={100}
                          height={100}
                          className="w-20 h-20 object-cover rounded mr-4"
                        />
                        <div className="mt-2 md:mt-0">
                          <h3 className="font-bold">{item.title}</h3>
                        </div>
                      </td>
                      <td className="text-center p-4 border border-gray-200">
                        {item.price}
                      </td>
                      <td className="text-center p-4 border border-gray-200">
                        <div className="flex items-center justify-center">
                          {/* Decrease Quantity */}
                          <button
                            onClick={() => handleQuantityChange(item.id, item.category, item.quantity - 1)}
                            className="w-8 h-8 text-center border border-gray-300 rounded-l-lg bg-gray-100 hover:bg-gray-200"
                          >
                            -
                          </button>
                          
                          {/* Quantity Input */}
                          <input
                            type="number"
                            value={item.quantity && !isNaN(item.quantity) ? item.quantity : 1}
                            onChange={(e) => handleQuantityChange(item.id, item.category, parseInt(e.target.value) || 1)}
                            className="w-12 text-center text-black border-t border-b border-gray-300"
                          />
                          
                          {/* Increase Quantity */}
                          <button
                            onClick={() => handleQuantityChange(item.id, item.category, item.quantity + 1)}
                            className="w-8 h-8 text-center border border-gray-300 rounded-r-lg bg-gray-100 hover:bg-gray-200"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="text-center p-4 border border-gray-200">
                        {(() => {
                          const priceString = item.price.replace('$', '').trim();
                          const price = parseFloat(priceString);
                          const quantity = item.quantity && !isNaN(item.quantity) ? item.quantity : 1;

                          if (isNaN(price) || isNaN(quantity)) {
                            return '$0.00';
                          }

                          return `$${(price * quantity).toFixed(2)}`;
                        })()}
                      </td>
                      <td className="text-center p-4 border border-gray-200">
                        <button
                          onClick={() => removeFromCart(item.id, item.category)}
                          className="text-red-500 hover:text-red-700"
                        >
                          ✕
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <label
                htmlFor="order-notes"
                className="block text-lg font-medium mb-2"
              >
                Special instructions
              </label>
              <textarea
                id="order-notes"
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-lg"
                placeholder="Add any special instructions for your order..."
              />
            </div>

            <div className="flex justify-between items-center mt-8 flex-wrap">
              <div>
                <p className="md:text-xl text-lg font-semibold">
                  Subtotal: ${calculateSubtotal().toFixed(2)} USD
                </p>
                <p className="md:text-xl text-lg font-semibold">
                  Shipping: $5 USD
                </p>
                <p className="md:text-xl text-lg font-semibold mb-5">
                  Total: ${calculateTotalWithShipping()}
                </p>
              </div>
              <button
                onClick={handleCheckout}
                className="bg-[#D96846] text-white md:px-6 md:py-3 px-3 py-5 rounded-lg text-lg font-medium hover:bg-[#c25439] transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default CartPage;
