import React from 'react'
import styles from './SecondNavigation.module.css';

export default function SecondNavigation() {
    return (
        <div className = { styles.secondNav }>
            <div className = { styles.secondNav1section } >            
                <div className = { styles.text }>Etusivu</div>
                <div className = { styles.text }>HS Visio</div>
                <div className = { styles.text }>Luetuimmat</div>
                <div className = { styles.text }>Uusimmat</div>
                <div className = { styles.text }>Politiikka</div>
                <div className = { styles.text }>Kaupunki</div>
                <div className = { styles.text }>Kulttuuri</div>
                <div className = { styles.text }>Tiede</div>
                <div className = { styles.text }>Hyvinvointi</div>
                <div className = { styles.text }>Ruoka</div>
                <div className = { styles.text }>Nyt</div>
            </div>


        </div>
    )
}