import React from 'react'
import { Grid, styled, theme } from 'fannypack'

import Location from './Location'
import Tldr from '../Tldr'
import { Wrapper, Container } from '../Common'
import { LocationMarkdown } from '../../utils/content'

export type TravellingProps = {
  locations: LocationMarkdown[]
}

const Disclaimer = styled.p`
  margin: 24px auto 0;
  font-size: 0.875rem;
  line-height: 1.125rem;
  text-align: center;
  max-width: 800px;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    margin: 16px 0 0;
    text-align: left;
  }
`

const LocationsList = styled(Grid)<{}>`
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  @media (max-width: ${theme('fannypack.layout.tabletBreakpoint')}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Travelling = ({ locations }: TravellingProps) => {
  return (
    <Wrapper>
      <Container>
        <h2>Looking to Travel?</h2>
        <Tldr>
          You cannot travel interstate due to border restrictions imposed on
          Victorians. You cannot travel internationally because the Australian
          Government has banned it.
        </Tldr>
        <LocationsList>
          {locations.map(
            ({ content, meta }: LocationMarkdown, index: number) => {
              return (
                <div>
                  <Location
                    key={index}
                    title={meta?.title}
                    status={meta?.status}
                    content={content}
                  />
                </div>
              )
            }
          )}
        </LocationsList>
        <Disclaimer>
          Please note, while every effort has been made to ensure this is
          factual information, this website is not and does not replace official
          government advice. Information may have changed and it is strongly
          advised you re-confirm the information provided before leaving.
        </Disclaimer>
      </Container>
    </Wrapper>
  )
}

export default Travelling
