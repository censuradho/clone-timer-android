import React, { useCallback, useEffect, useState } from 'react'

import './styles.css'

interface DisplayProps {
  time: number
}


function Display (props: DisplayProps) {
  const [state, setState] = useState<number[]>([])
  
  const handleState = useCallback(() => {
    setState(prev => prev.length !== 7 ? ([props.time, ...prev]) : prev)
  }, [props.time])

  useEffect(() => {
    handleState()
  }, [handleState])

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div className="display">
      <div className="numbers-display">
        <p>{state[5] ?? 0}{state[4] ?? 0}<span>h</span></p>
        <p>{state[3] ?? 0}{state[2] ?? 0}<span>m</span></p>
        <p>{state[1] ?? 0}{state[0] ?? 0}<span>s</span></p>
      </div>
      <button>
      <svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"/></svg>
      </button>
    </div>
  )
}

export default React.memo(Display)