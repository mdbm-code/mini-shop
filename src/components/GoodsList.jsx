import React from 'react';
import GoodsItem from './GoodsItem';

const GoodsList = (props) => {
  const { goods = [], addGoodToBasket = Function.prototype } = props;

  if (!goods.length) {
    return <h3>Товары не найдены</h3>;
  }

  return (
    <div className='goods'>
      {goods.map((item) => (
        <GoodsItem
          key={item.mainId}
          {...item}
          addGoodToBasket={addGoodToBasket}
        />
      ))}
    </div>
  );
};

export default GoodsList;
