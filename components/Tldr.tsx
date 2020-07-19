import React from 'react'
import { styled, theme, palette } from 'fannypack'

const Wrapper = styled.p`
  border: 1px solid #d0d0d0;
  padding: 16px;
  border-radius: 4px;
  display: flex;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    flex-direction: column;
  }
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
