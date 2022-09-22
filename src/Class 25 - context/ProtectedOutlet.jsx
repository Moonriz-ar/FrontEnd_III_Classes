import React from 'react'
import { Navigate } from 'react-router-dom'
import UserContext from './usercontext'

const ProtectedOutlet = (props) => {
  const { user } = React.useContext(UserContext)
  console.log(user)
  const isAuthenticated = !!user
  return (
    <div>
      {isAuthenticated ? props.children : <Navigate to="login" />}
    </div>
  )
}

export default ProtectedOutlet
