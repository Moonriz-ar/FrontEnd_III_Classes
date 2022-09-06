import React from 'react'
import User from './User'
import './userList.css'

const UserList = (props) => {
  return (
    <ul className={'list'}>
      {props.items.map((item) => (
        <li key={item.id}>
          <User user={item} />
        </li>
      ))}
    </ul>
  )
}

export default UserList
