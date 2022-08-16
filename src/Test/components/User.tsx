import React from 'react'
import { UserI } from '../../Api/users'
import styles from './user.module.css'

interface IProps {
  user: UserI
}

const Game: React.FC<IProps> = ({ user }) => {
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

export default Game
