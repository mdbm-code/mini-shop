import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: '',
};

export const ShopContext = createContext();

const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  state.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  state.removeGoodFromBasket = (id) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: id });
  };

  state.addGoodToBasket = (item) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: item });
  };

  state.handleBasketShow = () => {
    dispatch({ type: 'SHOW_BASKET' });
  };

  state.changeQuantity = (id, value) => {
    dispatch({ type: 'CHANGE_QUALITY', payload: { id: id, value: value } });
  };

  state.loadGoods = (data) => {
    dispatch({ type: 'LOAD_GOODS', payload: data });
  };

  return (
    <ShopContext.Provider value={state}>{props.children}</ShopContext.Provider>
  );
};

export default ContextProvider;
