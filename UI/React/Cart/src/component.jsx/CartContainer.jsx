import React, { useState } from "react";

const CartContainer = ({ product }) => {
  const [cart, setCart] = useState(product);

  function removeItemCount(index) {
    const productUpdate = [...cart];
    if (productUpdate[index].quantity > 0) {
      productUpdate[index].quantity -= 1;
      setCart(productUpdate);
    }
  }

  function addItemCount(index) {
    const productUpdate = [...cart];
    productUpdate[index].quantity += 1;
    setCart(productUpdate);
  }

  return (
    <>
      <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-xl shadow-md space-y-6">
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center space-x-4">
              {/* Item Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-22 object-cover rounded-lg"
              />
              <div className="flex flex-col space-y-2">
                <span className="font-semibold text-lg text-gray-800">
                  {item.name}
                </span>
                <span className="text-sm text-gray-500">
                  {" "}
                  Price/Quantity: ₹{item.price}
                </span>

                <div className="flex items-center space-x-3">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                    onClick={() => removeItemCount(index)}
                  >
                    -
                  </button>
                  <span className="text-lg font-medium">{item.quantity}</span>
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition"
                    onClick={() => addItemCount(index)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Right: item total (centered vertically now) */}
            <div className="font-semibold text-gray-700 flex items-center">
              <span>Item Total: ₹{item.price * item.quantity}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Cart total */}
      <div className="text-center text-xl font-bold text-gray-800 pt-4">
        Total: ₹
        {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </div>
    </>
  );
};

export default CartContainer;
