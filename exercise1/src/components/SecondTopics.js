import React from 'react'
import styles from './SecondTopics.module.css';

export default function SecondTopics() {
    return (
        <div className = { styles.header }>
            
            <h2 className = { styles.luetuimmat }>
                Luetuimmat
            </h2>



            <div className = { styles.topic }>

                <h2 className = { styles.number }>
                    1
                </h2>

                <div className = { styles.topicSection}> 
                    <span className = { styles.topicTitle }>Lorem</span>
                    <span className = { styles.topicText }>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                </div>

            </div>



            <div className = { styles.topic }>

                <h2 className = { styles.number }>
                    1
                </h2>

                <div className = { styles.topicSection}> 
                    <span className = { styles.topicTitle }>Lorem</span>
                    <span className = { styles.topicText }>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                </div>

            </div>



        </div>
    )
}