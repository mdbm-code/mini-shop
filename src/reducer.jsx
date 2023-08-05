const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOAD_GOODS':
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    case 'CHANGE_QUALITY':
      const newOrder = state.order.map((item) => {
        if (item.id === payload.id) {
          const newQuantity = item.quantity + payload.value;
          if (newQuantity <= 0) {
            item.quantity = 1;
          } else {
            item.quantity = newQuantity;
          }
        }
        return item;
      });
      return {
        ...state,
        order: newOrder,
      };
    case 'SHOW_BASKET':
      return { ...state, isBasketShow: !state.isBasketShow };
    case 'CLOSE_ALERT':
      return { ...state, alertName: '' };
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter((item) => item.id !== payload),
      };
    case 'ADD_TO_BASKET':
      const itemIndex = state.order.findIndex((el) => el.id === payload.id);
      if (itemIndex < 0) {
        return {
          ...state,
          order: [...state.order, { ...payload, quantity: 1 }],
          alertName: payload.name,
        };
      } else {
        const newOrder = state.order.map((el, index) => {
          if (index === itemIndex) {
            return {
              ...el,
              quantity: el.quantity + 1,
            };
          } else {
            return el;
          }
        });
        return {
          ...state,
          order: newOrder,
          alertName: payload.name,
        };
      }
    default:
      return state;
  }
};

export default reducer;
