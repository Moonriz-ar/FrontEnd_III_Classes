import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.playing ? 'red' : 'green'};
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${props => props.playing ? 'orange' : 'lime'};
  }
`

export default Button
