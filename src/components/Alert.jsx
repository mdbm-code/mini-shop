import React, { useEffect } from 'react';

const Alert = ({ name, close = Function.prototype }) => {
  useEffect(() => {
    const timerId = setTimeout(close, 3000);

    return () => {
      clearTimeout(timerId);
    };

    //eslint-disable-next-line
  }, [name]);

  return (
    <div id='toast-container'>
      <div className='toast'>{name} добавлен в корзину</div>
    </div>
  );
};

export default Alert;
