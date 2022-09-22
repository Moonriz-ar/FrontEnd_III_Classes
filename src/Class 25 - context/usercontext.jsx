import { message } from 'antd'
import axios from 'axios'
import React from 'react'

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(undefined)

  const login = React.useCallback(async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`)
      setUser(response.data)
      return true
    } catch (error) {
      message.error('wrong user name')
      return false
    }
  }, [])

  const logout = React.useCallback(() => {
    setUser(undefined)
  }, [])

  return (
    <UserContext.Provider value={{
      user, login, logout
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext