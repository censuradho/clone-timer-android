import React, { useMemo } from 'react'

import styles from './styles.module.css'

interface CounterProps {
  visible?: boolean,
  time: string
}

function Counter ({ time, visible }: CounterProps) {
  const fontSize = useMemo(() => time.length > 3 ? '3rem' : '4rem', [time])

  return (
    <div className={`${styles.counter} ${visible ? styles.visible : styles.hidden}`}>
      <div className={styles.circle}>
        <span>Marcador</span>
        <strong style={{ fontSize }}>
          <span>{`${time?.[0] ?? ''}${time?.[1] ?? ''}${time.length > 2 ? ':' : ''}`}</span>
          <span>{`${time?.[2] ?? ''}${time?.[3] ?? ''}${time.length > 4 ? ':' : ''}`}</span>
          <span>{`${time?.[4] ?? ''}${time?.[5] ?? ''}`}</span>
        </strong>
      </div>
    </div>
  )
}

export default Counter