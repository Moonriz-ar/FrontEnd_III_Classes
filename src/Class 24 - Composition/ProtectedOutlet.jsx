import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedOutlet = (props) => {
  const isAuthenticated = true
  return (
    <div>
      {isAuthenticated ? props.children : <Navigate to="login" />}
    </div>
  )
}

export default ProtectedOutlet
