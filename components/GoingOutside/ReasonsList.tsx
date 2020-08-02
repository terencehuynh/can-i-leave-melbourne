import React from 'react'
import { Icon, styled, css, breakpoint, palette } from 'bumbag'

type ReasonCardItemProps = {
  name: string
  link?: string
  icon: string
}

type ReasonCardBigItemProps = {
  title: string
  children?: React.ReactNode
  link?: string
  icon: string
}

type ReasonsListProps = {
  tabletGrid?: number
  desktopGrid?: number
}

export const ReasonsList = styled.ul<ReasonsListProps>`
  display: grid;
  list-style: none;
  margin: 0 0 24px;
  padding: 0;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 16px;

  ${(props) =>
    breakpoint(
      'min-tablet',
      css`
        grid-template-columns: repeat(${props.tabletGrid || '2'}, 1fr);
      `
    )}

  ${(props) =>
    breakpoint(
      'min-desktop',
      css`
        grid-template-columns: repeat(${props.desktopGrid || '3'}, 1fr);
      `
    )}
`

const ReasonsCard = styled.li`
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;
  position: relative;
  padding: 0;
  background: white;
  display: flex;

  p {
    flex: 1;
    display: block;
    margin: 0 0 12px;
  }

  p:last-child {
    margin: 0;
  }

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
    display: flex;
    font-size: 1.5rem;
    line-height: 48px;
    margin: 0 auto 12px;
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
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 16px;
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

  h3 {
    font-weight: 700;
    margin: 0 0 12px;
  }
`

export const ReasonCardBigItem: React.FC<ReasonCardBigItemProps> = ({
  icon,
  title,
  children,
  link,
}) => {
  return (
    <ReasonsCard>
      <a href={link ?? '#'} target="_blank">
        <span className="icon">
          <Icon icon={icon} />
        </span>
        <h3>{title}</h3>
        {children}
        {link && <span className="read-more">Click for more info</span>}
      </a>
    </ReasonsCard>
  )
}

export const ReasonCardItem: React.FC<ReasonCardItemProps> = ({
  icon,
  name,
  link,
}) => {
  return (
    <ReasonsCard>
      <a href={link ?? '#'} target="_blank">
        <span className="icon">
          <Icon icon={icon} />
        </span>
        <p>{name}</p>
        {link && <span className="read-more">Click for more info</span>}
      </a>
    </ReasonsCard>
  )
}
