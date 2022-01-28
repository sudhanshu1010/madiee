import React from 'react';
import styles from './Leaderboard.module.css';
import Userbutton from '../User/Userbutton'
import Location from '../Location/Location'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

const Leaderboard = () => {
    function myFunction() {
        alert('hi')
    }
    return (
        <div className={styles.leaderboard_main_container}>
            <PerfectScrollbar>
                <div className={styles.leaderboard_user}>
                    <h1>Leader board</h1>
                    <Userbutton user={1} />
                    <Userbutton user={2} />
                    <Userbutton user={3} />
                    <Userbutton user={4} />
                    <Userbutton user={5} />
                    <Userbutton user={6} />
                    <Userbutton user={7} />
                    <Userbutton user={8} />
                    <Userbutton user={9} />
                    <Userbutton user={10} />
                    <Userbutton user={11} />
                    <Userbutton user={12} />
                    <Userbutton user={13} />
                    <Userbutton user={14} />
                    <Userbutton user={15} />
                    <Userbutton user={16} />
                    <Userbutton user={17} />
                    <Userbutton user={18} />
                    <Userbutton user={19} />
                    <Userbutton user={20} />
                </div>
            </PerfectScrollbar>

            <div className={styles.leaderboard_game}>
                <div className={styles.leaderboard_board}>
                    <div className={styles.leaderboard_text}>
                        <h1>You've got</h1>
                        <h1>Location: <span>University</span></h1>
                        <h1>Role: <span>Student</span></h1>
                        <h3>Your objective is to find the Spy</h3>
                    </div>
                    <div className={styles.leaderboard_button}>
                        Start the game
                    </div>
                </div>
            </div>
            
            <PerfectScrollbar>
                <div className={styles.leaderboard_location}>
                    <h1>Locations</h1>
                    <Location location={'Your location'} className={styles.location_active} onClick={myFunction}/>
                    <Location location={'Location'} />
                    <Location location={'Location'} />
                    <Location location={'Location'} />
                    <Location location={'Location'} />
                    <Location location={'Location'} />
                    <Location location={'Location'} />
                    <Location location={'Location'} />
                    <Location location={'Location'} />
                    <Location location={'Location'} />
                    <Location location={'Location'} />
                    <Location location={'Location'} />
                    <Location location={'Location'} />
                    <Location location={'Location'} />
                    <Location location={'Location'} />
                    <Location location={'Location'} />

                </div>
            </PerfectScrollbar>
        </div>
    )
}

export default Leaderboard;