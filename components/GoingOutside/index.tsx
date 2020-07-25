import React from 'react'
import { styled, breakpoint, css } from 'bumbag'
import { Wrapper as _Wrapper, Container } from '../Common'
import { ReasonsList, ReasonCardItem } from './ReasonsList'

const Wrapper = styled(_Wrapper)`
  border-bottom: 1px solid #f0f0f0;
  background: #f7f7f7;
`

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  margin: 0 0 16px;
  text-align: left;

  ${breakpoint(
    'min-tablet',
    css`
      font-size: 1.3125rem;
      font-weight: 300;
      line-height: 1.75rem;
      margin: 0 0 24px;
      text-align: center;
    `
  )}

  &:last-child {
    margin: 0;
  }

  strong {
    font-weight: 600;
  }
`

const Disclaimer = styled.p`
  margin: 0 0 24px;
  text-align: left;
  font-size: 0.875rem;
  line-height: 1.5rem;
  max-width: 800px;
  opacity: 0.5;

  ${breakpoint(
    'min-tablet',
    css`
      margin: 0 auto 36px;
      text-align: center;
    `
  )}
`

const GoingOutside = () => {
  return (
    <Wrapper>
      <Container>
        <h2 id="going-outside">Going outside?</h2>
        <Paragraph>
          These are the <strong>only reasons</strong> when you can leave home:
        </Paragraph>
        <Disclaimer>
          Clicking on one of the reasons will take you to the relevant page or
          section on the Department of Health and Human Services website.
        </Disclaimer>
        <ReasonsList>
          <ReasonCardItem
            icon="solid-shopping-bag"
            name="Shopping for food (including take-away) and other essentials in your local area"
            link="https://www.dhhs.vic.gov.au/shopping-and-retail-metropolitan-melbourne-and-mitchell-shire-covid-19"
          />
          <ReasonCardItem
            icon="solid-briefcase"
            name="Work or study, if you cannot do so from home"
            link="https://www.dhhs.vic.gov.au/work-and-study-metropolitan-melbourne-and-mitchell-shire-covid-19"
          />
          <ReasonCardItem
            icon="solid-running"
            name="Exercise outside in your local area (with only one other person or your household)"
            link="https://www.dhhs.vic.gov.au/sport-and-exercise-metropolitan-melbourne-and-mitchell-shire-covid-19"
          />
          <ReasonCardItem
            icon="solid-clinic-medical"
            name="Access medical services, or visiting a doctor or health professional"
            link="https://www.dhhs.vic.gov.au/stay-home-metropolitan-melbourne-and-mitchell-shire-covid-19#access-medical-services"
          />
          <ReasonCardItem
            icon="solid-ring"
            name="Getting married; or being a witness or the celebrant of a wedding"
            link="https://www.dhhs.vic.gov.au/religion-and-ceremony-metropolitan-melbourne-and-mitchell-shire-covid-19#can-i-attend-a-wedding"
          />
          <ReasonCardItem
            icon="solid-place-of-worship"
            name="Attending a funeral (whilst maintaining social distancing)"
            link="https://www.dhhs.vic.gov.au/religion-and-ceremony-metropolitan-melbourne-and-mitchell-shire-covid-19#summary-of-restrictions"
          />
          <ReasonCardItem
            icon="solid-hands-helping"
            name="Providing caregiving or on compassionate reasons"
            link="https://www.dhhs.vic.gov.au/stay-home-metropolitan-melbourne-and-mitchell-shire-covid-19#caregiving-or-compassionate-reasons"
          />
          <ReasonCardItem
            icon="solid-exclamation"
            name="When your life is in danger, or it is an emergency"
            link="https://www.dhhs.vic.gov.au/stay-home-metropolitan-melbourne-and-mitchell-shire-covid-19#are-there-any-other-special-reasons-that-allow-me-to-leave-my-home"
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
