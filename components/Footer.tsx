import React from 'react'
import { Icon, Link, styled, theme } from 'fannypack'

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

  p.long-divide {
    margin-top: 24px;
  }

  a {
    font-weight: 600;
    text-decoration: none;
    color: #718196;
  }

  a svg {
    height: auto;
    margin-right: 4px;
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
            <Link href="https://nextjs.org/">Next.js</Link>
          </p>
          <p className="long-divide">
            Like this site? Consider{' '}
            <a href="https://buymeacoffee.com/terencehuynh">
              <Icon a11yHidden={true} icon="solid-coffee" />
              buying me a coffee
            </a>
            .
          </p>
        </FooterCredits>
      </Container>
    </Wrapper>
  )
}

export default Footer
