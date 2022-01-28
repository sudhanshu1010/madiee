import React from 'react';
import styles from './Rulescard.module.css';

const Rulescard = ({ text }) => {

    return (
        <div className={styles.rulescard_container}>
            <div className={styles.rulescard_card1}>
                <div className={styles.rulescard_card2}>
                    <h1>RULE {text}</h1>
                    <p>take them and haggle to make a valueable set</p>
                </div>
            </div>
        </div>
    )
}

export default Rulescard;