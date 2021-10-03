import React from 'react';
import styles from './DataResult.module.css';

export default function DataResult(props) {
    return (
        <div className = { styles.allItems }>

            <div className={ styles.item }>

                <div>
                    <div>   <img src={`/images/${props.image}`} width="300" height="300"/>  </div>
                    <div className = { styles.name }>   {props.name}    </div>
                    <div className = { styles.price }>   {props.price} €   </div>

                    <div className = { styles.desc }>
                        <div>   {props.desc_processor}  </div>
                        <div>   {props.desc_graphCard} </div>
                    </div>

                </div>

            </div>
        </div>
    )
}