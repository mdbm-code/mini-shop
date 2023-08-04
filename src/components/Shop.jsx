import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../config';
import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import BasketList from './BasketList';
import Alert from './Alert';

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alert, setAlert] = useState('');

  const closeAlert = () => {
    setAlert('');
  };

  const changeQuantity = (id, value) => {
    const newOrder = order.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + value;
        if (newQuantity <= 0) {
          item.quantity = 1;
        } else {
          item.quantity = newQuantity;
        }
      }
      return item;
    });
    setOrder(newOrder);
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const removeGoodFromBasket = (id) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const addGoodToBasket = (item) => {
    const itemIndex = order.findIndex((el) => el.id === item.id);
    if (itemIndex < 0) {
      setOrder([...order, { ...item, quantity: 1 }]);
    } else {
      const newOrder = order.map((el, index) => {
        if (index === itemIndex) {
          return {
            ...el,
            quantity: el.quantity + 1,
          };
        } else {
          return el;
        }
      });
      setOrder(newOrder);
    }
    setAlert(item.name);
  };

  useEffect(function loadGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main className='container content'>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addGoodToBasket={addGoodToBasket} />
      )}

      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeGoodFromBasket={removeGoodFromBasket}
          changeQuantity={changeQuantity}
        />
      )}
      {alert && <Alert name={alert} close={closeAlert} />}
    </main>
  );
};

export default Shop;
