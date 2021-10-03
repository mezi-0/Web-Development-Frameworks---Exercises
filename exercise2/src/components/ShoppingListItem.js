import React from "react";
import styles from './ShoppingListItem.module.css';
import cx from 'classnames';

const ShoppingListItem = props => {
  return <li className={ cx(styles.flex, styles.item) }>
    <div className={ cx(styles.flex, styles.itemQtyUnit) }>
      <div>
        { props.qty }
      </div>
      <div>
        { props.unit }
      </div>
    </div>
    <div className = { styles.value }>
      { props.value}
    </div>
  </li>
}

export default ShoppingListItem;