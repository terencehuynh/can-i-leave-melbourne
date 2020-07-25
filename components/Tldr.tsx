import React from 'react'
import { styled, breakpoint, css, palette } from 'bumbag'

const Wrapper = styled.p`
  border: 1px solid #d0d0d0;
  padding: 16px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;

  ${breakpoint(
    'min-tablet',
    css`
      flex-direction: row;
    `
  )}
`

const Label = styled.strong`
  color: ${palette('danger')};
  font-weight: 700;
  margin-right: 16px;
  margin-bottom: 8px;
`

type Props = {
  children: React.ReactNode
}

const Tldr: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Label>TL;DR.</Label>
      {children}
    </Wrapper>
  )
}

export default Tldr
