import React from 'react'

const Timer = (props) => {
  const [seconds, setSeconds] = React.useState(0)
  const ref = React.useRef(null)
  ref.current = seconds

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(ref.current + 1)
    } , 1000)

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
