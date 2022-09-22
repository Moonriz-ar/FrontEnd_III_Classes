import React from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

const ProtectedRoute = (props) => {
  const isAuthenticated = false
  return (
    <Route {...props} element={isAuthenticated ? props.element : <Navigate to='/login' />} />
  )
}

export default ProtectedRoute
