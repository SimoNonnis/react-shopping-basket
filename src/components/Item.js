import React, { PropTypes } from 'react';

import styles from './item.css';

const Item = ({name, price}) => {
  return (
    <div className={styles.itemContainer}>
      <h2>{name}
        <span className={styles.price}>{price}ct each</span>
      </h2>
      <input
        className={styles.input}
        defaultValue={1}
        type="number"
        required
      />
      <button className={styles.addCartBtn}>Add to Cart</button>
    </div>
  )
}

Item.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number
}

export default Item;
