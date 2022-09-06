import React from 'react'
import './user.css'

const User = ({ user }) => {
  return (
    <div className={'user'}>
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
