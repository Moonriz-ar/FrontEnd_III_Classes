import React from 'react'
import { GameI } from '../../Api/api'

interface IProps {
  game: GameI
}

const Game: React.FC<IProps> = (props) => {
  const [playing, setPlaying] = React.useState(false)
  return (
    <div className='game'>
      <div className='title' title={props.game.name}>
        {props.game.name}
      </div>
      <img src={props.game.image} alt={props.game.name} />
      <button onClick={() => setPlaying(!playing)}>{playing ? 'Parar' : 'Jugar'}</button>
    </div>
  )
}

export default Game
