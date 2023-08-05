import React, { useContext } from 'react';
import { ShopContext } from '../context';

const Cart = () => {
  const { order, handleBasketShow } = useContext(ShopContext);
  return (
    <div
      className='cart pink accent-1 white-text'
      onClick={() => handleBasketShow()}
    >
      <i className='material-icons'>shopping_cart</i>
      <span className='cart-quantity'>{order.length}</span>
    </div>
  );
};

export default Cart;
