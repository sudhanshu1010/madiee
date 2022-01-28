import React from 'react';
import styles from './Location.module.css'

const Location = ({location}) => {
    function myFunction(){
        console.log(document.querySelector('.location_container').innerHTML)
    }
    return (
        <div className={styles.location_container} onClick={myFunction}>
            {location}
        </div>
    )
}

export default Location;