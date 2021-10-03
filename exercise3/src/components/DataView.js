import React from 'react';
import styles from './DataView.module.css';
import DataResult from './DataResult';


export default function DataView(props) {
    return (
        <div>
            <div className = { styles.dataShow }>
                {
                    props.items.map(item => <DataResult key={item.id} {...item} />)
                }
            </div>
        </div>
    )
}