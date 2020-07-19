import React from 'react'
import { styled, palette, theme } from 'fannypack'
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
  min-height: calc(80vh - 64px);
  padding: 0 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  z-index: 10;
  position: relative;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    min-height: calc(90vh - 64px);
    max-height: 600px;
  }
`

const BigScreamingLetters = styled.p`
  font-size: 18rem;
  line-height: 1;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 18px;
  color: white;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 8rem;
    margin: 0 0 9px;
  }
`

const Status = styled.p`
  font-size: 2rem;
  line-height: 2.5rem;
  letter-spacing: -1px;
  font-weight: 200;
  margin: 0 0 48px;
  text-align: center;
  color: white;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 1.5rem;
    line-height: 2rem;
    letter-spacing: 0;
    margin: 0 0 24px;
  }

  strong {
    font-weight: 600;
    color: white;
    @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
      display: block;
    }
  }
`

const Button = styled.a`
  display: inline-block;
  padding: 16px;
  text-align: center;
  border: 2px solid white;
  line-height: 1rem;
  border-radius: 4px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  color: white;

  &:hover {
    color: ${palette('danger')}
    background: white;
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    width: 100%;
    font-size: 0.875rem;
  }

`

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
        <Button href="#going-outside">Where can I go?</Button>
      </Container>
    </Wrapper>
  )
}

export default Hero
