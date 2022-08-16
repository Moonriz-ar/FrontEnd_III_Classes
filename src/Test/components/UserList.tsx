import React from 'react'
import { UserI } from '../../Api/users'
import User from './User'
import styles from './userList.module.css'

interface IProps {
  items: Array<UserI>
}

const UserList: React.FC<IProps> = (props) => {
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
