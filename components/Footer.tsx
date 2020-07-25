import React from 'react'
import { Icon, Link as _Link, styled, breakpoint, css } from 'bumbag'

import { Wrapper as _Wrapper, Container as _Container } from './Common'
import FooterSocial from './FooterSocial'

const Wrapper = styled(_Wrapper)`
  background: #e6e8eb;
`

const Container = styled(_Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoint(
    'min-desktop',
    css`
      align-items: unset;
      flex-direction: row-reverse;
    `
  )}
`

const FooterCredits = styled.div`
  flex: 1;
  p {
    font-size: 0.875rem;
    font-weight: 400;
    color: #8190a2;
    text-align: center;
    margin: 0;

    ${breakpoint(
      'min-desktop',
      css`
        text-align: left;
      `
    )}

    &:not(:last-child) {
      margin-bottom: 2px;
    }
  }

  p.long-divide {
    margin-top: 24px;
  }
`

const Link = styled(_Link)`
  font-weight: 600;
  text-decoration: none;
  color: #718196;

  &:hover {
    text-decoration: underline;
  }

  svg {
    height: auto;
    margin-right: 4px;
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
            <Icon label="love" icon="solid-heart" color="#e53935" /> in
            Melbourne, Australia
          </p>
          <p>
            Hero Image:{' '}
            <Link href="https://unsplash.com/photos/wugv2enoD6Q">
              Madeline Ong/Unsplash
            </Link>
          </p>
          <p>
            Built with <Link href="https://bumbag.style">Bumbag</Link> and{' '}
            <Link href="https://nextjs.org/">Next.js</Link>
          </p>
          <p className="long-divide">
            Like this site? Consider{' '}
            <Link href="https://buymeacoffee.com/terencehuynh">
              <Icon label="coffee mug" icon="solid-coffee" />
              buying me a coffee
            </Link>
            .
          </p>
        </FooterCredits>
      </Container>
    </Wrapper>
  )
}

export default Footer
