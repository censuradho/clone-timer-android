import React from 'react'

import styles from './styles.module.css'

interface CounterProps {
  visible?: boolean
}

function Counter (props: CounterProps) {
  return (
    <div className={`${styles.counter} ${props.visible ? styles.visible : styles.hidden}`}>
      <div className={styles.circle}>
        <span>Marcador</span>
        <strong>50</strong>
      </div>
    </div>
  )
}

export default Counter