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

  const itemsInBasket = basket.map((item, i) => (
    <ItemInBasket
      key={Math.random() + i}
      name={item.name}
      price={item.price}
    />
  ));

  const shoppingBasket = (
    <div>
      {itemsInBasket}
      <div className={styles.totalBox}>
        <span>Total:</span>
        <span>{getTotal()}ct</span>
      </div>
    </div>
  );

  function getTotal() {
    return basket.reduce((tot, item) => {
      let finalTotal = tot + item.price;
      return finalTotal;
    }, 0)
  }

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
