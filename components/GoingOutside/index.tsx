import React from 'react'
import { styled, theme } from 'fannypack'
import { Wrapper as _Wrapper, Container } from '../Common'
import { ReasonsList, ReasonCardItem } from './ReasonsList'

const Wrapper = styled(_Wrapper)`
  border-bottom: 1px solid #f0f0f0;
  background: #f7f7f7;
`

const Paragraph = styled.p`
  font-size: 1.3125rem;
  font-weight: 300;
  line-height: 1.75rem;
  margin: 0 0 24px;
  text-align: center;

  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 400;
    margin: 0 0 16px;
    text-align: left;
  }

  &:last-child {
    margin: 0;
  }

  strong {
    font-weight: 600;
  }
`

const Disclaimer = styled.p`
  margin: 0 auto 36px;
  font-size: 0.875rem;
  line-height: 1.5rem;
  text-align: center;
  max-width: 800px;
  opacity: 0.5;
  @media (max-width: ${theme('fannypack.layout.mobileBreakpoint')}px) {
    margin: 0 0 24px;
    text-align: left;
  }
`

const GoingOutside = () => {
  return (
    <Wrapper>
      <Container>
        <h2 id="going-outside">Going outside?</h2>
        <Paragraph>
          There are the <strong>only reasons</strong> when you can leave home:
        </Paragraph>
        <Disclaimer>
          Clicking/tapping on one of the reasons will take you to the relevant
          Department of Health and Human Services page.
        </Disclaimer>
        <ReasonsList>
          <ReasonCardItem
            icon="solid-shopping-bag"
            name="Shopping for food (including take-away) and other essentials"
            link="https://www.dhhs.vic.gov.au/shopping-and-retail-metropolitan-melbourne-and-mitchell-shire-covid-19"
          />
          <ReasonCardItem
            icon="solid-briefcase"
            name="Work or study, if you cannot do so from home"
            link="https://www.dhhs.vic.gov.au/work-and-study-metropolitan-melbourne-and-mitchell-shire-covid-19"
          />
          <ReasonCardItem
            icon="solid-running"
            name="Exercise outside (with only one other person or members of your household)"
            link="https://www.dhhs.vic.gov.au/sport-and-exercise-metropolitan-melbourne-and-mitchell-shire-covid-19"
          />
          <ReasonCardItem
            icon="solid-clinic-medical"
            name="Access medical services and going for treatment"
            link="https://www.dhhs.vic.gov.au/stay-home-metropolitan-melbourne-and-mitchell-shire-covid-19#access-medical-services"
          />
          <ReasonCardItem
            icon="solid-hands-helping"
            name="Providing caregiving or on compassionate grounds"
            link="https://www.dhhs.vic.gov.au/stay-home-metropolitan-melbourne-and-mitchell-shire-covid-19#caregiving-or-compassionate-reasons"
          />
        </ReasonsList>
        <Paragraph>
          Otherwise, you must <strong>stay at home</strong>.
        </Paragraph>
      </Container>
    </Wrapper>
  )
}

export default GoingOutside
