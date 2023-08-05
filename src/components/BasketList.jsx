import React, { useContext } from 'react';
import BasketItem from './BasketItem';
import { ShopContext } from '../context';

const BasketList = (props) => {
  const { order, handleBasketShow } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div className=' basket-list'>
      <ul className='collection'>
        <li className='collection-item active deep-purple'>
          Корзина
          <i
            style={{ cursor: 'pointer' }}
            onClick={handleBasketShow}
            className='material-icons right'
          >
            close
          </i>
        </li>
        {order.length ? (
          order.map((item) => {
            return <BasketItem key={item.id} {...item} />;
          })
        ) : (
          <li className='collection-item'>Корзина пуста.</li>
        )}
      </ul>
      <div className='basket-footer deep-purple'>
        <span className='total-price white-text'>
          Общая стоимость:
          <br /> {totalPrice} руб.
        </span>
        <button className='btn btn-small pink accent-1'> Оформить заказ</button>
      </div>
    </div>
  );
};

export default BasketList;
