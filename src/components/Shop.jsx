import React, { useContext, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';
import { ShopContext } from '../context';

const Shop = () => {
  const { alertName, loading, loadGoods, isBasketShow } =
    useContext(ShopContext);

  useEffect(function loadData() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        loadGoods(data.shop);
      });
    //eslint-disable-next-line
  }, []);

  return (
    <main className='container content'>
      <Cart />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
};

export default Shop;
