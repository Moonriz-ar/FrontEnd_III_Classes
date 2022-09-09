import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { getGameById } from '../../Api/games'

export const GameCard = styled.div`
  border: 1px solid #333;
  border-radius: 8px;
  align-self: baseline;
`

export const Cell = styled.div`
  padding: 8px;
  background: #222;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 32px;
  &.score {
    flex-direction: column;
    gap: 8px;
    .label {
      width: 100%;
      > * {
        display: flex;
        justify-content: space-between;
      }
    }
    .value {
      width: 100%;
    }
  }
  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  &:nth-child(2n + 1) {
    background: #111;
  }
  .label {
    font-weight: bold;
  }
  .value {
    overflow: hidden;
    display: flex;
    justify-content: flex-end;
    > * {
      justify-content: flex-end;
    }
  }
`

const Game = (props) => {
  const params = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  console.log(params, searchParams.get('name'), searchParams.get('edad'))
  const game = getGameById(params.gameId)
  if (!game) {
    return <div>Game not found</div>
  }
  return (
    <GameCard>
      <Cell>
        <div className='label'>Name</div>
        <div className='value'>{game.name}</div>
      </Cell>
      <Cell>
        <div className='label'>Start</div>
        <div className='value'>{game.start}</div>
      </Cell>
      <Cell>
        <div className='label'>End</div>
        <div className='value'>{game.end}</div>
      </Cell>
      <Cell>
        <div className='label'>State</div>
        <div className='value'>{game.state}</div>
      </Cell>
      <Cell>
        <div className='label'>Achievements</div>
        <div className='value'>{game.achievements ? `${game.achievements[0]} / ${game.achievements[1]}` : '-'}</div>
      </Cell>
      <Cell>
        <div className='label'>Tags</div>
        <div className='value'>{game.tags.join(' ,')}</div>
      </Cell>
      <Cell>
        <div className='label'>Score</div>
        <div className='value'>{game.score?.finalMark || '-'}</div>
      </Cell>
    </GameCard>
  )
}

export default Game
