import React from 'react'
import styled from 'styled-components'

const StyledUser = styled.div`
  h6 {
    color: #ccc;
  }

  > * {
    line-height: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
` 

const User = ({ user }) => {
  return (
    <StyledUser>
      <h4 title={user.username}>
        {user.username}
      </h4>
      <h6 title={user.name}>
        {user.name}
      </h6>
    </StyledUser>
  )
}

export default User
