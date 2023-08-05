import React, { useContext } from 'react';
import GoodsItem from './GoodsItem';
import { ShopContext } from '../context';

const GoodsList = (props) => {
  const { goods } = useContext(ShopContext);

  if (!goods.length) {
    return <h3>Товары не найдены</h3>;
  }

  return (
    <div className='goods'>
      {goods.map((item) => (
        <GoodsItem key={item.mainId} {...item} />
      ))}
    </div>
  );
};

export default GoodsList;
