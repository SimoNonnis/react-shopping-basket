import React, { Component } from 'react';

import Item from './Item';

import styles from './app.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      itemsList: [
        { name: 'Apples', price: 25 },
        { name: 'Oranges', price: 30 },
        { name: 'Bananas', price: 15 },
        { name: 'Papayas', price: 50 }
      ]
    }
  }

  render () {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Let's Shop!</h1>
        <div className={styles.itemsList}>
          {this.state.itemsList.map(({name, price}, i) => (
            <Item
              key={i+1}
              name={name}
              price={price}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App;
