import React from 'react'
import { styled, breakpoint, css, Button } from 'bumbag'
import { Container as _Container } from './Common'

const Wrapper = styled.div`
  position: relative;
  background: #c62128 url('/img/hero-image.jpg') center center no-repeat;
  background-size: cover;

  &:before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #c62128;
    background-image: linear-gradient(147deg, #c62128 0%, #a00000 74%);
    opacity: 0.7;
    z-index: 1;
  }
`

const Header = styled.header`
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding: 10px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: relative;

  h1 {
    font-size: 1rem;
    text-align: center;
    margin: 0;
    color: white;
  }
`

const Container = styled(_Container)`
  min-height: calc(90vh - 64px);
  max-height: 600px;
  padding: 0 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  z-index: 10;
  position: relative;

  ${breakpoint(
    'min-desktop',
    css`
      min-height: calc(80vh - 64px);
      max-height: unset;
    `
  )}
`

const BigScreamingLetters = styled.p`
  font-size: 18rem;
  line-height: 1;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 18px;
  color: white;
  font-size: 8rem;
  margin: 0 0 9px;

  ${breakpoint(
    'min-tablet',
    css`
      font-size: 18rem;
      margin: 0 0 18px;
    `
  )}
`
const LastUpdated = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0;
  font-weight: 150;
  margin: 0 10 24px;
  text-align: center;
  color: white;
    

`

const Status = styled.p`
  font-size: 1.5rem;
  line-height: 2rem;
  letter-spacing: 0;
  font-weight: 200;
  margin: 0 0 24px;
  text-align: center;
  color: white;

  ${breakpoint(
    'min-tablet',
    css`
      font-size: 2rem;
      line-height: 2.5rem;
      letter-spacing: -1px;
      margin: 0 0 48px;
    `
  )}

  strong {
    font-weight: 600;
    color: white;
    display: block;

    ${breakpoint(
      'min-desktop',
      css`
        display: inline;
      `
    )}
  }
`

const StyledButton = styled(Button)`
  width: 100%;
  font-size: 0.875rem;

  ${breakpoint(
    'min-tablet',
    css`
      font-size: 1rem;
      width: unset;
    `
  )}
`

let date = new Date()
let month = date.getMonth() + 1
let updatedDate = date.getDate() + "/" + month + "/" + date.getFullYear() 

const Hero = () => {
  return (
    <Wrapper>
      <Header>
        <h1>Can I Leave Melbourne?</h1>
      </Header>
      <Container>
        <BigScreamingLetters>No</BigScreamingLetters>
        <Status>
          Wear a mask. Wash your hands. <strong>Stay at home.</strong>
        </Status>
        <StyledButton
          use="a"
          href="#going-outside"
          variant="inverted-outline"
          palette="danger"
        >
          Where can I go?
        </StyledButton>
        <LastUpdated> Last Updated: {updatedDate} </LastUpdated>
      </Container>
    </Wrapper>
  )
}

export default Hero
