import React, { Component } from 'react'

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      {/* AREA DE TRABAJO */}
      <a href='/'>Home</a>
      <a href='/about'>About</a>
    </div>
  )
}
