import React from 'react'
import Login from './components/Login'
import { useTaskApi } from './api/taskApi'

const App = () => {
  const api = useTaskApi()

  return (
    <>
      <header>
        <img src={`${process.env.PUBLIC_URL}/images/vapor.png`} alt='Vapor' />
        Vaporeon
      </header>
      {api.user ? (
        <div>
          <div>
            Bienvenidoa {api.user.firstName} {api.user.lastName}
          </div>
          <button onClick={api.logOut}>Log out</button>
        </div>
      ) : (
        <Login onLogin={api.getUser} />
      )}
    </>
  )
}

export default App
