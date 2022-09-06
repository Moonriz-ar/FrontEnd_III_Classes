import styled, { css } from 'styled-components'

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;

  a {
    color: white;
  }

  ${(props) => {
    switch (props.styleType) {
      case 'primary':
        return css`
          background-color: #080;
          &:hover {
            background-color: #0a0;
          }
        `
      case 'danger':
        return css`
          background-color: #800;
          &:hover {
            background-color: #a00;
          }
        `
      default:
        return css`
          color: #000;
          background-color: #eee;
          &:hover {
            background-color: #ddd;
          }
        `
    }
  }}
`

export default Button;