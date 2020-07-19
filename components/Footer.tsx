import React from 'react'
import { Icon, Paragraph, Link, styled, theme } from 'fannypack'

import { Wrapper as _Wrapper, Container as _Container } from './Common'
import FooterSocial from './FooterSocial'

const Wrapper = styled(_Wrapper)`
  background: #e6e8eb;
`

const Container = styled(_Container)`
  display: flex;
  flex-direction: row-reverse;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    flex-direction: column;
    align-items: center;
  }
`

const FooterCredits = styled.div`
  flex: 1;
  p {
    font-size: 0.875rem;
    font-weight: 400;
    color: #8190a2;
    margin: 0;

    @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
      text-align: center;
    }

    &:not(:last-child) {
      margin-bottom: 2px;
    }
  }

  a {
    font-weight: 600;
    text-decoration: none;
    color: #718196;
  }

  a:hover {
    text-decoration: underline;
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FooterSocial />
        <FooterCredits>
          <p>
            Built by <Link href="https://terencehuynh.com">Terence Huynh</Link>{' '}
            and made with{' '}
            <Icon a11yLabel="love" icon="solid-heart" color="#e53935" /> in
            Melbourne, Australia
          </p>
          <p>
            Hero Image:{' '}
            <Link href="https://unsplash.com/photos/wugv2enoD6Q">
              Madeline Ong/Unsplash
            </Link>
          </p>
          <p>
            Built with <Link href="https://fannypack.style">Fannypack</Link> and{' '}
            <Link href="https://www.gatsbyjs.org/">Gatsby</Link>
          </p>
        </FooterCredits>
      </Container>
    </Wrapper>
  )
}

export default Footer
