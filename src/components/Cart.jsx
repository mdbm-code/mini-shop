import React from 'react';

const Cart = ({ quantity, handleBasketShow }) => {
  return (
    <div
      className='cart pink accent-1 white-text'
      onClick={() => handleBasketShow()}
    >
      <i className='material-icons'>shopping_cart</i>
      <span className='cart-quantity'>{quantity}</span>
    </div>
  );
};

export default Cart;
