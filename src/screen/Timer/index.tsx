import { Console } from 'console'
import React, { useState } from 'react'

import SetTimer from '../../components/Timer'
import Counter from '../../components/Timer/Counter'

import styles from './styles.module.css'

function Timer () {
  const [state, setState] = useState(0)
  const [time, setTime] = useState('')

  console.log(time.length)
  return (
    <main className={styles.timer}>
      <SetTimer 
        visible={state === 0}
        onPlay={() => setState(1)}
        onChange={value => setTime(value)}
      />
      <Counter 
        visible={state === 1}
      />
      <button 
        className={`${styles.play} ${time.length > 0 ? styles['is-active'] : ''}`}
        onClick={() => setState(1)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/></svg>
      </button>
    </main>
  )
}

export default Timer
