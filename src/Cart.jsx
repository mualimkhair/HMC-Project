import React from "react";

const Cart = () => {
  const carts = JSON.parse(localStorage.getItem("cart")) || [];

  if (!carts?.length) <div>Keranjang Kosong</div>;
  return (
    <div className="bg-gray-100 h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4 text-primary">Shopping Cart</h1>
        <h2 className="text-xl font-semibold mb-4 text-primary">{carts?.length} Items</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-3/4">
            <div className="bg-primary rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>

                {carts?.map((cart) => {
                  return (
                    <tbody>
                      <tr>
                        <td className="py-4">
                          <div className="flex items-center">
                            <img className="h-16 w-16 mr-4" src={cart?.image} alt="Product image" />
                            <span className="font-semibold">{cart?.title}</span>
                          </div>
                        </td>
                        <td className="py-4">${cart?.price}</td>
                        <td className="py-4">
                          <div className="flex items-center">
                            <button className="border rounded-md py-2 px-4 mr-2">-</button>
                            <span className="text-center w-8">1</span>
                            <button className="border rounded-md py-2 px-4 ml-2">+</button>
                          </div>
                        </td>
                        <td className="py-4">${cart?.price}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-primary rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${carts?.price}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>$1.99</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">$21.98</span>
              </div>
              <button className="bg-secondary text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
