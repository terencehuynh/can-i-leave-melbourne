import React from 'react'
import { styled } from 'bumbag'
import { Wrapper, Container as _Container } from './Common'

const Container = styled(_Container)`
  h2,
  p {
    color: white;
    text-align: left;
  }

  p {
    margin: 0 0 16px;
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
    <Wrapper palette="gray800">
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
