import React, { useState } from "react";

const Cart = () => {
  const [carts, setCarts] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const taxRate = 0.1; 
  const shippingCost = 0;

  // Hitung subtotal, pajak, dan total
  const calculateSummary = () => {
    const subtotal = carts.reduce((acc, cart) => acc + cart.price * cart.quantity, 0);
    const taxes = subtotal * taxRate;
    const total = subtotal + taxes + shippingCost;
    return { subtotal, taxes, total };
  };

  const { subtotal, taxes, total } = calculateSummary();

  if (!carts?.length) return <div>Keranjang Kosong</div>;

  return (
    <div className="h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4 text-primary">Shopping Cart</h1>
        <h2 className="text-xl font-semibold mb-4 text-primary">{carts?.length} Items</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {carts?.map((cart, index) => (
                    <tr key={index}>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img className="h-16 w-16 mr-4 object-contain" src={cart?.image} alt="Product image" />
                          <span className="font-semibold truncate w-16 md:w-full">{cart?.title}</span>
                        </div>
                      </td>
                      <td className="py-4">${cart?.price.toFixed(2)}</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button
                            className="border rounded-md py-2 px-4 mr-2"
                            onClick={() => updateQuantity(index, cart.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="text-center w-8">{cart.quantity}</span>
                          <button
                            className="border rounded-md py-2 px-4 ml-2"
                            onClick={() => updateQuantity(index, cart.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4">${(cart?.price * cart.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>${taxes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
              <button className="bg-secondary text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function updateQuantity(index, newQuantity) {
    if (newQuantity < 1) return;
    const updatedCarts = [...carts];
    updatedCarts[index].quantity = newQuantity;
    setCarts(updatedCarts);
    localStorage.setItem("cart", JSON.stringify(updatedCarts));
  }
};

export default Cart;