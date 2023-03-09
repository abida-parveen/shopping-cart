import React from 'react'
import './cart-item.css'

const CartItem = (props) => {
    const {imageUrl, name, quantity, price} = props.item
    return (
        <div className='cart_item'>
            <img src={imageUrl} alt='cart-item' />
            <div className='item_details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem
