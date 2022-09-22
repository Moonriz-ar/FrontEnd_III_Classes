import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Login from './Login';
import NavBar from './Navbar';
import ProtectedOutlet from './ProtectedOutlet';
import UserContext, { UserProvider } from './usercontext';

function App() {
  return (
    <div>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
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
      </UserProvider>
    </div>
  );
}

export default App

function WelcomePage() {
  return <div>
    Welcome to the app
  </div>
}
function Info() {
  return <div>Info</div>
}
function ReposList() {
  return <div>ReposList</div>
}