import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div>
      <div className={styles.navbar}>
        {/* AREA DE TRABAJO */}
        <Link to='home'>Home</Link>
        <Link to='about'>About</Link>
      </div>
      <Outlet />
    </div>
  )
}
