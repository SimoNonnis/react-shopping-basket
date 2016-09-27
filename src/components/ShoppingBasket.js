import React, { PropTypes} from 'react';

import ItemInBasket from './ItemInBasket';

import styles from './shoppingBasket.css';

const ShoppingBasket = ({basket}) => {
  const msg = (
    <div>
      <h2>Shopping Basket is empty</h2>
      <p>Add some item</p>
    </div>
  );

  function randomKey()  {
    return new Date().getTime();
  }

  const itemsInBasket = basket.map((item) => (
    <ItemInBasket
      key={randomKey()}
      name={item.name}
      price={item.price}
    />
  ));

  const shoppingBasket = (
    <div>
      {itemsInBasket}
      <div className={styles.totalBox}>
        <span>Total:</span>
        <span>234ct</span>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
    {basket.length ? shoppingBasket : msg}
    </div>
  )
};

ShoppingBasket.propTypes = {
  basket: PropTypes.array
}

export default ShoppingBasket;
