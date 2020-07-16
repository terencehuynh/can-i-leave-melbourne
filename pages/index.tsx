import { styled, palette, Icon, theme } from 'fannypack'

const Warning = styled.a`
  background: ${palette('warningBg')};
  color: ${palette('yellow')};
  display: flex;
  padding: 16px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: ${palette('warningHover')};
  }

  span {
    display: flex;
    flex-basis: content;
    align-items: center;
    margin: 0 auto;
    width: 100%;
  }

  svg {
    margin-right: 8px;
    font-size: 16px;
    min-width: 16px;
  }
`

const Hero = styled.div`
  position: relative;
  background: url('/img/hero-image.jpg') center center no-repeat;
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
  padding: 16px;
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

const Content = styled.div`
  min-height: 80vh;
  padding: 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  z-index: 10;
  position: relative;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    min-height: 600px;
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
  font-weight: 600;
  font-size: 0.875rem;
  color: white;

  &:hover {
    color: ${palette('danger')}
    background: white;
  }

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    width: 100%;
  }

`

const Home = () => {
  return (
    <>
      <Hero>
        <Header>
          <h1>Can I Leave Melbourne?</h1>
        </Header>
        <Content>
          <BigScreamingLetters>No</BigScreamingLetters>
          <Status>
            Wear a mask. Wash your hands.{' '}
            <strong>Stay the f**k at home.</strong>
          </Status>
          <Button>Where can I go?</Button>
        </Content>
      </Hero>
      <Warning href="https://www.dhhs.vic.gov.au/coronavirus" target="_blank">
        <span>
          <Icon a11yLabel="Disclaimer" icon="danger" size="16" />
          Click here for for up-to-date information about COVID-19 from the
          Victorian Government.
        </span>
      </Warning>
    </>
  )
}

export default Home
