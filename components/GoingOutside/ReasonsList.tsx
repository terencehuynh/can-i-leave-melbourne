import React from 'react'
import { Icon, styled, theme, palette } from 'fannypack'

type ReasonCardItemProps = {
  name: string
  link: string
  icon: string
}

export const ReasonsList = styled.ul`
  display: grid;
  list-style: none;
  margin: 0 0 24px;
  padding: 0;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const ReasonsCard = styled.li`
  margin: 24px 0 0;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;
  position: relative;
  padding: 0;
  background: white;

  a span.read-more {
    display: block;
    margin-top: 16px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${palette('gray100')};
  }

  span.icon {
    position: absolute;
    left: 0;
    right: 0;
    top: -24px;
    display: flex;
    font-size: 1.5rem;
    line-height: 48px;
    margin: 0 auto;
    color: white;
    background: ${palette('info300')};
    width: 48px;
    height: 48px;
    text-align: center;
    border-radius: 48px;
    justify-content: center;
    align-items: center;
  }

  a {
    display: block;
    border-top: 5px solid ${palette('info300')};
    padding: calc(8px + 24px) 16px 16px;
    text-decoration: none;
    font-size: 1rem;
    text-align: center;
    font-weight: 300;
    color: ${palette('text')};
  }

  a:hover {
    border-top-color: ${palette('info600')};
    span.icon {
      background: ${palette('info600')};
    }
    span.read-more {
      color: ${palette('info600')};
    }
  }
`

export const ReasonCardItem: React.FC<ReasonCardItemProps> = ({
  icon,
  name,
  link = '#',
}) => {
  return (
    <ReasonsCard>
      <a href={link} target="_blank">
        <span className="icon">
          <Icon icon={icon} a11yHidden={true} />
        </span>
        {name}

        <span className="read-more">Click for more info</span>
      </a>
    </ReasonsCard>
  )
}