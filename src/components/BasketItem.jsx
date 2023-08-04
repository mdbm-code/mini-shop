import React from 'react';

const BasketItem = (props) => {
  const {
    id,
    name,
    price,
    quantity,
    removeGoodFromBasket = Function.prototype,
    changeQuantity = Function.prototype,
  } = props;
  return (
    <li className='collection-item' id={id}>
      {name} :{' '}
      <span className='counter'>
        <button onClick={() => changeQuantity(id, -1)}>-</button>
        {quantity} шт.
        <button onClick={() => changeQuantity(id, 1)}>+</button>
      </span>{' '}
      х {price} руб.
      <span className='secondary-content'>
        <i
          onClick={() => removeGoodFromBasket(id)}
          style={{ cursor: 'pointer' }}
          className='material-icons'
        >
          clear
        </i>
      </span>
      <span className='right'>{price * quantity}</span>
    </li>
  );
};

export default BasketItem;
