import React, { useState } from 'react'
import styles from './EditMode.module.css';

export default function EditMode(props) {

  const onDeleteItemClick = (itemId) => {
    props.deleteItem(itemId);
  }

  return (
    <div className = { styles.itemsList }>

        <button className = { styles.disableButton } onClick={ props.disableDeleteMode }>Disable Edit Mode</button>
        

        <div className = { styles.list }> Items </div>
        { props.items.map((item, index) =>
          <div key={index}>
            <button onClick={() => onDeleteItemClick(item.id)}>x</button> {item.id}, {item.name},  {item.desc_processor}, {item.price}€,
          </div>)}
    </div>
  )
}