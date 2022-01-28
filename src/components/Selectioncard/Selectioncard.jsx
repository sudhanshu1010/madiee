import React from 'react';
import styles from './Selectioncard.module.css';


const Selectioncard = ({letter}) => {
    return (
        <div className={styles.selectioncard_main_container}>
            <h2>Movie {letter}</h2>
            <div className={styles.selectioncard_container}>
                <div className={styles.selectioncard_upper_container}></div>
            </div>
        </div>
    )
}

export default Selectioncard;