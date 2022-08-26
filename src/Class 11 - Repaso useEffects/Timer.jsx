import React from 'react'

let state = 1

function setState(callback) {
  let newState = callback(state)
  state = newState
}

const Timer = (props) => {
  const [seconds, setSeconds] = React.useState(0)

  React.useEffect(() => {
    const tick = () => {
      //se usa el valor que tenia seconds al momento de entrar al useEffect
      //console.log('tick', seconds)
      /** Imagen Mental!!!
       * esto es como si setSeconds recibiera un callback, y lo llamara con el valor actual de seconds
       * 
       * Dentro de react habria algo como
       * 
       * let seconds = 1
       * 
       * function setSeconds(ValueOrcallback) {
       *   if ( typeof ValueOrcallback = 'function') {
       *     let newSeconds = callback(seconds)
       *     seconds = newSeconds
       *   } else {
       *    seconds = ValueOrcallback
       *   }
       * }
       * 
       * (^) No se si lo de arriba es exactamente asi, pero imaginense algo asi
       */
      setSeconds((prevState) => prevState + 1)
    }

    const interval = setInterval(tick , 1000)

    return () => {
      clearInterval(interval)
    }
  } , [])

  return (
    <div>
      Pasaron {seconds} segundos
    </div>
  )
}

export default Timer
