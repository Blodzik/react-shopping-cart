import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { CartItem } from './cartItem';
import { PRODUCTS } from '../../products';
import './cart.css';

export const Cart = () => {

  const { addTocart, cartItems } = useContext(ShopContext);

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
    </div>
  )
}
