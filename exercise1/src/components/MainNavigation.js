import React from 'react'
import styles from './MainNavigation.module.css';

export default function MainNavigation() {
    
    return (
        
        <div className = { styles.navBackground }>        

            <div className = { styles.mainNav }>

                <div className = { styles.mainNav1section } >                
                    <div className = { styles.hs }>HELSINGIN SANOMAT</div>
                    <div className = { styles.text }>Uutiset</div>
                    <div className = { styles.text }>Lehdet</div>
                </div>

                <div className = { styles.mainNav2section } >                
                    <div className = { styles.tilaa }>Tilaa</div>
                    <div className = { styles.text }>Kirjaudu</div>
                    <div className = { styles.text }>Hae</div>
                    <div className = { styles.text }>Valikko</div>
                </div>

        
            </div>

        </div>
    )
}