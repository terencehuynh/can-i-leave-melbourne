import React from 'react'
import { Grid, styled, theme, palette } from 'fannypack'

import Location from './Location'
import { LocationMarkdown } from '../../utils/content'

export type TravellingProps = {
  locations: LocationMarkdown[]
}

const Container = styled.div`
  padding: 36px 10px;
  max-width: 1024px;
  margin: 0 auto;
  border-bottom: 1px solid #d0d0d0;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    padding: 24px 10px;
  }

  > h2 {
    font-size: 2.25rem;
    line-height: 2rem;
    margin: 0 0 24px;
    text-align: center;
    font-weight: 700;
    letter-spacing: -1px;
    @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
      margin: 0 0 16px;
      font-size: 1.75rem;
      line-height: 1.5rem;
      text-align: left;
    }
  }

  > p {
    font-size: 1.3125rem;
    font-weight: 300;
    line-height: 1.75rem;
    margin-bottom: 24px;

    @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
      font-size: 0.875rem;
      line-height: 1.125rem;
      font-weight: 400;
      margin-bottom: 16px;
    }
  }

  > p.tldr {
    border: 1px solid #d0d0d0;
    padding: 16px;
    border-radius: 4px;
    display: flex;

    @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
      flex-direction: column;
    }

    strong.label {
      color: ${palette('danger')};
      font-weight: 700;
      margin-right: 16px;
      margin-bottom: 8px;
    }
  }

  > p.disclaimer {
    margin: 24px auto 0;
    font-size: 0.875rem;
    line-height: 1.125rem;
    text-align: center;
    max-width: 800px;

    @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
      margin: 16px 0 0;
      text-align: left;
    }
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
    <Container>
      <h2>Travelling?</h2>
      <p className="tldr">
        <strong className="label">TL;DR.</strong> You cannot travel interstate
        due to border restrictions imposed on Victorians. You cannot travel
        internationally because the Australian Government has banned it.
      </p>
      <LocationsList>
        {locations.map(({ content, meta }: LocationMarkdown, index: number) => {
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
        })}
      </LocationsList>
      <p className="disclaimer">
        Please note, while every effort has been made to ensure this is factual
        information, this website is not and does not replace official
        government advice. Information may have changed and it is strongly
        advised you re-confirm the information provided before leaving.
      </p>
    </Container>
  )
}

export default Travelling
