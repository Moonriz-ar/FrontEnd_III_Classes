import { Button } from 'antd'
import React from 'react'
import RepoDetail from './RepoDetail'
import RepoList from './RepoList'

const App = () => {
  const [stateActive, setActive] = React.useState(false)

  const toggleActive = () => {
    setActive(!stateActive)
  }

  return (
    <div>
      <div>
        App state: <Button onClick={toggleActive}>{stateActive ? 'desactivar' : 'activar'}</Button>
      </div>
      <hr />
      {/* <RepoList /> */}
      <hr />
      <RepoDetail />
    </div>
  )
}

export default App
