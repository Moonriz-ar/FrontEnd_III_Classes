import styled from 'styled-components'
import { breakpoints, mediaQueries } from './variables';

export const Grid = styled.div`
  display: grid;
  gap: 16px;

  ${mediaQueries.isTablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mediaQueries.isMobile} {
    grid-template-columns: repeat(1, 1fr);
  }

  ${mediaQueries.isDesktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`