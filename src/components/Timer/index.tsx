import React, { useMemo, useState, useCallback, useEffect } from 'react'

import styles from './styles.module.css'

interface SetTimerProps {
  visible?: boolean,
  onPlay?: () => void
  onChange?: (value: string) => void,
}

function SetTimer (props: SetTimerProps) {
  const [milliseconds, setMilliseconds] = useState('')

  const values = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], [])

    const handleMilliseconds = useCallback((value: number) => {
      if (milliseconds.length > 5) return;

      setMilliseconds(prev => prev + value)
  }, [milliseconds])



  const handleRemove = useCallback(() => {
    setMilliseconds(prevState => 
      prevState
        .split('')
        .filter((value, index) => index !== 0)
        .join('')
      )
    
  }, [])

  const lengthState = useMemo(() => milliseconds?.length !== 0, [milliseconds])
  const state = useMemo(() => milliseconds?.split?.('').reverse(), [milliseconds])

  useEffect(() => {    
    props?.onChange?.(milliseconds)    
  }, [milliseconds, props.onChange])

  const renderButtons = useMemo(() => values.map(value => 
    <button 
      key={value}
      value={value}
      onClick={() => handleMilliseconds(value)}  
    >{value}</button>
  ), [values, handleMilliseconds])

  return (
    <div className={`${styles['set-timer']} ${props?.visible ? 'visible' : 'hidden'}`}>
      <div className={styles.display}>
        <div className={`${styles['numbers-display']} ${lengthState ? styles.active : ''}`}>
          <p>{state?.[5] ?? 0}{state?.[4] ?? 0}<span>h</span></p>
          <p>{state?.[3] ?? 0}{state?.[2] ?? 0}<span>m</span></p>
          <p>{state?.[1] ?? 0}{state?.[0] ?? 0}<span>s</span></p>
        </div>
        <button onClick={handleRemove}>
        <svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"/></svg>
        </button>
      </div>
      <section>
        <div className={styles.numbers}>
          { renderButtons }
        </div>
      </section>
    </div>
  )
}

export default React.memo(SetTimer)
