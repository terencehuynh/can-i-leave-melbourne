import React from 'react'
import { Icon, styled, palette, theme } from 'fannypack'

const StyledLink = styled.a`
  background: ${palette('warningBg')};
  color: ${palette('yellow')};
  display: flex;
  padding: 16px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: ${palette('warningHover')};
  }

  span {
    display: flex;
    flex-basis: content;
    align-items: center;
    margin: 0 auto;
    width: 100%;
  }

  svg {
    margin-right: 10px;
    font-size: 16px;
    min-width: 16px;
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 0.875rem;
  }
`

const GovLink = () => {
  return (
    <StyledLink href="https://www.dhhs.vic.gov.au/coronavirus" target="_blank">
      <span>
        <Icon a11yLabel="Disclaimer" icon="danger" size="16" />
        Click here for for up-to-date information about COVID-19 from the
        Victorian Government.
      </span>
    </StyledLink>
  )
}

export default GovLink
