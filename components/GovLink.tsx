import React from 'react'
import { Icon, styled, palette, breakpoint, css } from 'bumbag'

const StyledLink = styled.a`
  background: ${palette('warningBg')};
  color: ${palette('yellow')};
  display: flex;
  padding: 16px;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;

  ${breakpoint(
    'min-tablet',
    css`
      font-size: 1rem;
    `
  )}

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
`

const GovLink = () => {
  return (
    <StyledLink href="https://www.dhhs.vic.gov.au/coronavirus" target="_blank">
      <span>
        <Icon label="Disclaimer" icon="danger" fontSize="16" />
        Click here for for up-to-date information about COVID-19 from the
        Victorian Government.
      </span>
    </StyledLink>
  )
}

export default GovLink
