import React from 'react'
import Login from './components/Login'
import UserList from './components/UserList'
import { useUsersApi } from './api/usersApi'

const App = () => {
  /**
   * Esto es un custom hook
   * Lo que hacemos es agrupar funcionalidades, como hariamos con una funcion comun y corriente
   * Pero esta tiene la particularidad de tener hooks adentro
   * Por lo tanto, y por convencion, es recomendable que el nombre de las funciones empiece con (use...)
   * Solo vamos a poder acceder a las variables que nos exponga esta funcion
   * 
   * El estado de esta funcion NO ES global
   * la idea idea es solo agrupar
   */
  const api = useUsersApi()

  console.log('app', api)

  return (
    <>
      <header>
        <img src={`${process.env.PUBLIC_URL}/images/vapor.png`} alt='Vapor' />
        Vaporeon
      </header>
      <button onClick={api.getDataWithThen}>getData Then</button>
      <button onClick={api.getDataWithAsync}>getData Async</button>
      {api.loading ? 'Loading...' : 'Ready'}
      {/* {userData ? (
        <div>
          <div>
            Bienvenidoa {userData.firstName} {userData.lastName}
          </div>
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <Login onLogin={login} />
      )} */}
      <UserList items={api.users} />
    </>
  )
}

export default App
