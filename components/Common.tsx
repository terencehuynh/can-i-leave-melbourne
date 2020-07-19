import { theme, styled } from 'fannypack'

export const Wrapper = styled.div`
  padding: 48px 10px;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    padding: 36px 10px;
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    padding: 24px 10px;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  > h2 {
    font-size: 2.25rem;
    line-height: 2rem;
    margin: 0 0 24px;
    text-align: center;
    font-weight: 700;
    letter-spacing: -1px;
    @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
      margin: 0 0 16px;
      font-size: 1.75rem;
      line-height: 1.5rem;
      text-align: left;
    }
  }
`
