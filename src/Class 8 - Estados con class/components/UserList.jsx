import React from 'react'
import User from './User'
import styled, { css } from 'styled-components'

const listCommonStyles = css`
  margin: 0;
  padding: 0;
  list-style-type: none;
`

const List = styled.ul`
  ${listCommonStyles}
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap}px;

  > li {
    padding: 10px;
    border: 1px solid #333;
    background-color: #111;
    border-radius: 10px;
  }
`


const UserList = (props) => {
  return (
    <List gap={20}>
      {props.items.map((item) => (
        <li key={item.id}>
          <User user={item} />
        </li>
      ))}
    </List>
  )
}

export default UserList
