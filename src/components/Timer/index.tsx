import React, { useMemo, useState, useCallback, useEffect } from 'react'

import Display from './Display'

import './styles.css'

function SetTimer () {
  const [isActive, setIsActive] = useState(false)
  const [state, setState] = useState<number[]>([])
  const [milliseconds, setMilliseconds] = useState('')

  const values = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], [])

    const handleState = useCallback((value: number) => {
      setState(prev => prev?.length !== 7 ? ([value, ...prev]) : prev)
      setMilliseconds(prev => prev + value)
  }, [])

  const handleRemove = useCallback(() => {
    const popLastOne = state.filter((value, index) => index !== state.length - 1)
    setState(popLastOne)
  }, [state])

  const handlePlay = useCallback(() => {
    
    console.log(milliseconds)
  }, [milliseconds])

  useEffect(() => {
    state.length > 0 ? setIsActive(true) : setIsActive(false)
  }, [state])

  const renderButtons = useMemo(() => values.map(value => 
    <button 
      key={value}
      value={value}
      onClick={() => handleState(value)}  
    >{value}</button>
  ), [values])

  return (
    <div className="set-timer">
      <Display 
        state={state}
        onRemove={handleRemove}
      />
      <section>
        <div className="numbers">
          { renderButtons }
        </div>
        <button 
          className={`play ${isActive ? 'active-play' : 'inactive-play'}`}
          onClick={handlePlay}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/></svg>
        </button>
      </section>
    </div>
  )
}

export default React.memo(SetTimer)
