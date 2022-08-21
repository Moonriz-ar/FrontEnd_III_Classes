import React, { useCallback, useEffect } from 'react'
import Button from './Button'

const Timer = (props) => {
  const [time, setTime] = React.useState(0)

  const incrementarSegundos = useCallback(() => {
    console.log(time)
    setTime(time + 1)
  }, [time])

  useEffect(() => {
    const interval = setInterval(incrementarSegundos, 1000)
    return () => clearInterval(interval)
  } , [incrementarSegundos])

  return (
    <div>
      <div>{time}</div>
      <Button onClick={incrementarSegundos}>TICK</Button>
    </div>
  )
}

export default Timer
