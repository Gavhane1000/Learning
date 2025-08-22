import React from 'react'
import CartContainer from '../component.jsx/CartContainer'

const Cart = () => {
    const products = [{
        id: 1,
        image: "https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Apple", 
        price: 20, 
        total: 0, 
        quantity: 0
    },
    {
        id: 2,
        image:"https://images.unsplash.com/photo-1523667864248-fc55f5bad7e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        name:"Banana", 
        price: 10, 
        total: 0, 
        quantity: 0
    },
    {
        id: 3,
        image:"https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name:"Orange", 
        price: 7, 
        total: 0, 
        quantity: 0
    }
    ]
  return (
    <div className="cart-container p-6">
  <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
    🛒 Shopping Cart
  </h1>

  <div className="cart-item-cart">
    <CartContainer product={products} />
  </div>
</div>
  )
}

export default Cart
