import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import NavBar from './Navbar';
import ExtendedButton from './ExtendedButton';
import ProtectedRoute from './ProtectedRoute';
import ProtectedOutlet from './ProtectedOutlet';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<div>Login</div>} />
      <Route
        path="/"
        element={
          <ProtectedOutlet>
            <NavBar />
          </ProtectedOutlet>
        }
      >
        <Route index element={<WelcomePage />} />
        <Route path="info" element={<Info />} />
        <Route path="repos" element={<ReposList />} />
      </Route>
    </Routes>
  );
}

export default App

function WelcomePage() {
  function handleClick() {
    console.log('clicked')
  }
  return <div>
    <ExtendedButton onClick={handleClick}>
      Welcome
    </ExtendedButton>
    <ExtendedButton loading onClick={handleClick}>
      Welcome
    </ExtendedButton>
  </div>
}
function Info() {
  return <div>Info</div>
}
function ReposList() {
  return <div>ReposList</div>
}