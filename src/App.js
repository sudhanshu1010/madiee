import React from 'react'
import styles from './App.module.css';
import Leaderboard from '../src/components/Leaderboard/Leaderboard'
import BG from '../src/Images/bg 2.svg'
import Rules from './components/Rules/Rules'
import Selection from './components/CardSelection/Selection'

const App = () => {
  return (
    <div className={styles.app_main_container}>
      {/* <div>
        <img src={BG} />
        <Leaderboard />
      </div> */}

      <Rules/>
      {/* <Selection/> */}
    </div>
  )
}

export default App;
