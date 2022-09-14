import styled from 'styled-components'
import { colorPalette } from './variables'

export const Message = styled.div`
  font-size: 32px;
  padding: 16px;
`

export const PrimaryMessage = styled(Message)`
  color: ${colorPalette.primary};
  font-size: 36px;
`

export const SuccessMessage = styled(Message)`
  color: ${colorPalette.success};
`

export const WarningMessage = styled(Message)`
  color: ${colorPalette.warning};
`

export const ErrorMessage = styled(Message)`
  color: ${colorPalette.error};
`
