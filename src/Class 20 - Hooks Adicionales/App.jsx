import { Button } from 'antd'
import React, { useCallback } from 'react'
import RepoDetail from './RepoDetail'
import RepoList from './RepoList'

const App = () => {
  const [stateActive, setActive] = React.useState(false)
  const [tagActive, setTagActive] = React.useState()

  const toggleActive = () => {
    setActive(!stateActive)
  }

  const handleClickTag = React.useCallback(
    (tag) => {
      setTagActive(tag)
    }
    , []
  )

  return (
    <div>
      <div>
        App state: <Button onClick={toggleActive}>{stateActive ? 'desactivar' : 'activar'}</Button>
      </div>
      <div>
        Selected tag: {tagActive}
      </div>
      <hr />
      {/* <RepoList /> */}
      <hr />
      <RepoDetail onClickTag={handleClickTag} />
    </div>
  )
}

export default App
