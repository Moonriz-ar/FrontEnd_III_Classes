import React from 'react'
import User from './User'
import styles from './userList.module.css'

const UserList = (props) => {
  return (
    <ul className={styles.list}>
      {props.items.map((item) => (
        <li key={item.id}>
          <User user={item} />
        </li>
      ))}
    </ul>
  )
}

export default UserList
