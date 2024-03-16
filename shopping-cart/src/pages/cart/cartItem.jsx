import React, { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext'

export const CartItem = (props) => {

    const { id, productName, price, productImage, updateCartItemCount } = props.data;

    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

    const[quantity, setQuantity] = useState(cartItems[id] || 0);

    const handleInputChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        setQuantity(newQuantity);
        updateCartItemCount(newQuantity, id);
    }

    return (
    <div className='cart-item'>
        <img className='product-image' src={productImage} />
        <div className="description">
            <div>
                <p><b>{productName}</b></p>
            </div>
            <div>
                <p>${price}</p>
            </div>
            <div className='countHandler'>
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={handleInputChange} />
                <button onClick={() => addToCart(id)} > + </button>    
            </div>            
        </div>
    </div>
    )
}
