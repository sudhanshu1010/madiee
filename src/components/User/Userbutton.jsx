import React from 'react';
import styles from './Userbutton.module.css';

const Userbutton = ({user}) => {
    return (
        <div className={styles.userbutton_main_container}>
            <div className={styles.userbutton_name}>User name {user}</div>
            <div className={styles.userbutton_score}>Score: 3</div>
        </div>
    )
}

export default Userbutton;