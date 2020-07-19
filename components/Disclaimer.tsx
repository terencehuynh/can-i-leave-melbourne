import React from 'react'
import { styled, palette, theme } from 'fannypack'
import { Wrapper as _Wrapper, Container as _Container } from './Common'

const Wrapper = styled(_Wrapper)`
  background: ${palette('danger600')};
`

const Container = styled(_Container)`
  h2,
  p {
    color: white;
  }

  p {
    margin: 0 0 16px;
    text-align: center;
    font-weight: 300;

    @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
      text-align: left;
    }
  }

  strong {
    font-weight: 600;
  }

  p:last-child {
    margin: 0;
  }
`

const Disclaimer = () => {
  return (
    <Wrapper>
      <Container>
        <h2>Disclaimer</h2>
        <p>
          While every effort has been made to ensure this is factual information
          and sources to information have been provided, this website{' '}
          <strong>
            is not and does not replace official government advice
          </strong>
          .
        </p>
        <p>
          This information is also <strong>not legal advice</strong> if you are
          fined or arrested for breaching health directions.
        </p>
      </Container>
    </Wrapper>
  )
}

export default Disclaimer
