import React, { PropTypes } from 'react';

import styles from './itemInBasket.css';

const ItemInBasket = ({name, price}) => {
  return (
    <div className={styles.itemBox}>
      <span>{name}</span>
      <span>{price}ct</span>
    </div>
  )
}

ItemInBasket.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number
}

export default ItemInBasket;
