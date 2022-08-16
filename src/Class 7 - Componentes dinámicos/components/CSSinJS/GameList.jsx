import React from 'react'
import Game from './Game'
import styled from 'styled-components'

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;

  > li {
    padding: 10px;
    border: 1px solid #333;
    background-color: #111;
    border-radius: 10px;
    width: calc(25% - 9px);
    box-sizing: border-box;

    @media (max-width: 1000px) {
      width: calc(50% - 6px);
    }

    @media (max-width: 700px) {
      width: 100%;
    }
  }
`

const GameList = (props) => {
  return (
    <List>
      {props.items.map((item) => (
        <li key={item.id}>
          <Game game={item} />
        </li>
      ))}
    </List>
  )
}

export default GameList
