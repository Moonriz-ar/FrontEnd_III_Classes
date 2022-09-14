import styled, { css } from 'styled-components';
import { colorPalette } from './variables';

const inputStyles = css`
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  font-weight: bold;

  &:focus {
    outline: 4px solid ${colorPalette.primary};
    border-color: #000;
  }
`

export const Input = styled.input`
  ${inputStyles}
`

export const Select = styled.select`
  ${inputStyles}

  > option {
    font-weight: normal;
    background-color: green;
  }

  &.nombredeclase {
    padding: 8px 16px;
  }
`

/**
 * select {
 *  padding: 8px 16px;  
 * }
 * 
 * select.nombredeclase {
 *    padding: 8px 16px;
 * }
 * 
 * 
 * select > option {
 *  font-weight: normal;  
 * }
 */