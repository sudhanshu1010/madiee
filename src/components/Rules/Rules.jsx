import React from 'react';
import styles from './Rules.module.css'
import BG from '../../Images/Group 405.svg'
import Rulescard from '../Rulescard/Rulescard'

const left = '<'
const right = '>'

const Rules = () => {
    return (
        <div className={styles.rules_container}>
            <img src={BG} />
            <div className={styles.rules_card_text}>Rule Cards</div>
            <div className={styles.rules_card_container}>
                <div className={styles.rules_card}>
                    <Rulescard text={1} />
                    <Rulescard text={3} />
                </div>
                <p>you have : 1, 3</p>
                <small>Close X</small>
                <div className={styles.rules_left}>{left}</div>
                <div className={styles.rules_right}>{right}</div>
            </div>
        </div>
    )
}

export default Rules;