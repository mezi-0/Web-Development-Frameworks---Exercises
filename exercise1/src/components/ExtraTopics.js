import React from 'react'
import styles from './ExtraTopics.module.css';

export default function ExtraTopics() {
    return (
        <div className = { styles.headerSection }>

            <div className = { styles.topicSection }>
                <span className = { styles.header1 }> SIJOITTAMINEN: </span>
                    Osakkeiden tuotot voivat painua jopa nollaan, varoittaa Danske: "Nyt ei ole oikea aika sijoittajana lisätä riskiä"
            </div>
            
            <div className = { styles.topicSection }>
                <span className = { styles.header1 }> PÄIVÄN TIMANTTI: </span> 
                    Maailman tunnetuimmassa kuntosaliohjelmassa on vain kuusi liikettä - Tällainen on Arnold Schwarzeneggerin "kultainen kuusikko", jonka teho on edelleen kiistaton
            </div>
            
            <div className = { styles.topicSection }>
                <span className = { styles.header1 }> MAINOS: </span> 
                    Aloita aamusi Hesarilla. Tutustu nyt 2 viikkoa maksutta!
            </div>
            

        </div>
    )
}