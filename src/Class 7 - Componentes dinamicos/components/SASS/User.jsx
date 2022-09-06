import React from 'react'
import styles from './user.module.scss'

const User = ({ user }) => {
  return (
    <div className={styles.user}>
      <h4 title={user.username}>
        {user.username}
      </h4>
      <h6 title={user.name}>
        {user.name}
      </h6>
    </div>
  )
}

export default User
