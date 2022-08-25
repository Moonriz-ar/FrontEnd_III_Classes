import React from 'react'

const Timer = (props) => {
  const [seconds, setSeconds] = React.useState(0)

  const tick = () => {
    console.log('tick', seconds)
    setSeconds(seconds + 1)
  }

  React.useEffect(() => {
    const interval = setInterval(tick , 1000)

    return () => {
      console.log('cleaning up')
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
