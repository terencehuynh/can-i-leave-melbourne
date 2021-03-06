import React from 'react'
import { Box, styled, css, breakpoint } from 'bumbag'

import Location from './Location'
import Tldr from '../Tldr'
import { Wrapper, Container } from '../Common'
import { LocationMarkdown } from '../../utils/content'

export type TravellingProps = {
  locations: LocationMarkdown[]
}

const Disclaimer = styled.p`
  margin: 16px 0 0;
  font-size: 0.875rem;
  line-height: 1.5rem;
  opacity: 0.5;
  text-align: left;
  max-width: 800px;

  ${breakpoint(
    'min-tablet',
    css`
      margin: 24px auto 0;
      text-align: center;
    `
  )}
`

const LocationsList = styled(Box)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;

  ${breakpoint(
    'min-desktop',
    css`
      grid-template-columns: repeat(2, 1fr);
    `
  )}
`

const Travelling = ({ locations }: TravellingProps) => {
  return (
    <Wrapper>
      <Container>
        <h2>Looking to Travel?</h2>
        <Tldr>
          Unless you are an essential traveller, Victorians cannot travel
          interstate due to border restrictions placed by other states and
          territories. Australian citizens cannot travel abroad.
        </Tldr>
        <LocationsList>
          {locations.map(
            ({ content, meta }: LocationMarkdown, index: number) => {
              return (
                <div key={index}>
                  <Location
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
          It is strongly urged you visit the relevant authority's website to
          re-confirm the information.
        </Disclaimer>
      </Container>
    </Wrapper>
  )
}

export default Travelling
