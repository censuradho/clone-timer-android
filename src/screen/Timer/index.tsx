import React, { useCallback, useState } from 'react'

import SetTimer from '../../components/Timer'
import Counter from '../../components/Timer/Counter'

import styles from './styles.module.css'

function Timer () {
  const [state, setState] = useState(0)
  const [time, setTime] = useState('')
  const [pause, setPause] = useState(false)

  console.log(state, pause)

  const handlePlay = useCallback(() => {
    setPause(false)
    setState(1)
  }, [])

  const handleRemoveTimer = useCallback(() => {
    setTime('')
    setState(0)
    setPause(false)
  }, [])

  return (
    <main className={styles.timer}>
      <SetTimer 
        visible={state === 0}
        onPlay={() => setState(1)}
        onChange={value => setTime(value)}
      />
      <Counter 
        visible={state === 1}
        time={time}
      />
      <div className={styles['button-field']}>
        <button 
          className={`${styles.play} ${state === 0 && time.length > 0 ? styles['is-active'] : styles.inactive} ${pause ? styles['is-active'] : styles.inactive}`}
          onClick={handlePlay}
        >
          <svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/></svg>
        </button>

        <button 
          onClick={handleRemoveTimer}
          className={`${state === 1 ? styles['is-active'] : styles.inactive}`}
        >Excluir</button>
        <button
          className={`${styles.play} ${state === 1 ? styles['is-active'] : styles.inactive} ${pause ? styles.inactive : ''}`}
          onClick={() => setPause(true)}
        >
          <svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
        </button>
        <button 
          className={`${state === 1 ? styles['is-active'] : styles.inactive}`}
        >Adicionar timer</button>
      </div>      
    </main>
  )
}

export default Timer
