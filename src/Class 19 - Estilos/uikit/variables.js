export const colorPalette = {
  primary: 'cyan',
  success: 'green',
  warning: 'orange',
  error: 'red',
  defaultButton: 'grey',
}

export const breakpoints = {
  mobile: 600,
  tablet: 1200,
}

export const mediaQueries = {
  isMobile: `@media (max-width: ${breakpoints.mobile}px)`,
  isTablet: `@media (min-width: ${breakpoints.mobile}px) and (max-width: ${breakpoints.tablet}px)`,
  isDesktop: `@media (min-width: ${breakpoints.tablet}px)`,
}
