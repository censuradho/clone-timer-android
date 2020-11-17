import React, { useMemo, useState } from 'react'

import Display from './Display'

import './styles.css'

function SetTimer () {
  const [milliseconds, setMilliseconds] = useState(0)

  const values = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], [])

  const renderButtons = useMemo(() => values.map(value => 
    <button 
      key={value}
      value={value}
      onClick={() => setMilliseconds(value)}  
    >{value}</button>
  ), [values])

  return (
    <div className="set-timer">
      <Display time={milliseconds} />
      <section>
        <div className="numbers">
          { renderButtons }
        </div>
        <button className="play">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"/></svg>
        </button>
      </section>
    </div>
  )
}

export default React.memo(SetTimer)
