import styled, { css } from 'styled-components'
import { colorPalette } from './variables'

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  ${(props) => {
    switch (props.styleType) {
      case 'primary':
        return css`
          background-color: ${colorPalette.primary};
        `
      case 'danger':
        return css`
          background-color: ${colorPalette.error};
        `
      default:
        return css`
          background-color: ${colorPalette.defaultButton};
        `
    }
  }}
`