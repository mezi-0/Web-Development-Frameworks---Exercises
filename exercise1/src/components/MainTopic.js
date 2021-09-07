import React from 'react'
import styles from './MainTopic.module.css';

export default function MainTopic() {
    return (
        <div className = { styles.header }>
            <h3 className = { styles.category }>Politiikka</h3><h3 className = { styles.theme }>Lorem ipsum</h3>
            
            <h1 className = { styles.topicTitle }>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
            </h1>

            <h2 className = { styles.topicSecondTitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>

            <p className = { styles.topicText }> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </p>
        </div>
    )
}