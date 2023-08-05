import React, { useContext } from 'react';
import { ShopContext } from '../context';

const BasketItem = (props) => {
  const { removeGoodFromBasket, changeQuantity } = useContext(ShopContext);
  const { id, name, price, quantity } = props;

  return (
    <li className='collection-item avatar'>
      <span className='title'>{name}</span>
      <p className='counter'>
        <button
          className='btn btn-small pink accent-1'
          onClick={() => changeQuantity(id, -1)}
        >
          <i className='material-icons'>remove</i>
        </button>
        <span className='quantity'>{quantity} шт.</span>
        <button
          className='btn btn-small pink accent-1'
          onClick={() => changeQuantity(id, 1)}
        >
          <i className='material-icons'>add</i>
        </button>
        <span className='price'>
          х {price} руб.= {price * quantity} руб.
        </span>
      </p>
      <a href='#!' className='secondary-content'>
        <i
          onClick={() => removeGoodFromBasket(id)}
          style={{ cursor: 'pointer' }}
          className='material-icons delete-item'
        >
          clear
        </i>
      </a>
    </li>
  );
};

export default BasketItem;
