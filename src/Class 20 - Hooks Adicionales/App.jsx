import { Button } from 'antd'
import React, { useCallback } from 'react'
import Child from './Child'

const App = () => {
  const [stateActive, setActive] = React.useState(false)
  const [tagActive, setTagActive] = React.useState()

  const toggleActive = () => {
    setActive(!stateActive)
  }

  const handleCLickTag = useCallback((tag) => {
    setTagActive(tag)
  }, [])

  return (
    <div>
      <div>
        App state: <Button onClick={toggleActive}>{stateActive ? 'desactivar' : 'activar'}</Button>
      </div>
      <div>
        Selected tag: {tagActive}
      </div>
      <hr />
      <Child onClickTag={handleCLickTag} />
    </div>
  )
}

export default App
