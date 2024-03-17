import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { CartItem } from './cartItem';
import { PRODUCTS } from '../../products';
import './cart.css';
import { useNavigate } from 'react-router-dom'

export const Cart = () => {

  const { addTocart, cartItems, getTotalCartAmount } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div>
        <h1 className='cart-title'>Your Cart Items</h1>
      </div>

      <div className="cart-items">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>
      {totalAmount > 0 ? <div className="checkout">
        <p className='total-amount'>Subtotal: ${totalAmount}</p>
        <div className='buttons'>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      </div>
      : <h1 className='empty-cart'>Your cart is empty</h1>}
      
    </div>
  )
}
