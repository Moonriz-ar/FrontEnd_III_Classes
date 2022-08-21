import styled, { css } from 'styled-components'

const Button = styled.button`
  background-color: green;
  padding: 10px;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: lime;
  }

  ${(props) => props.playing ? css`
    background-color: red;
    &:hover {
      background-color: orange;
    }
  ` : undefined}
`

export default Button;