import React, { useContext } from 'react';
import { ShopContext } from '../context';

const GoodsItem = (props) => {
  const { addGoodToBasket } = useContext(ShopContext);
  const {
    mainId: id,
    //mainType,
    displayName: name,
    displayDescription: description,
    displayAssets,
    price,
  } = props;

  return (
    <div className='card'>
      <div className='card-image'>
        <img src={displayAssets[0].full_background} alt={name} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{name}</span>
        <p>{description}</p>
      </div>
      <div className='card-action'>
        <button
          onClick={() => addGoodToBasket({ id, name, price: price.finalPrice })}
          className='btn deep-purple'
        >
          Купить
        </button>
        <span className='right' style={{ fontSize: '1.8rem' }}>
          {price.finalPrice} руб
        </span>
      </div>
    </div>
  );
};

export default GoodsItem;
