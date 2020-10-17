import React from 'react'
import { styled, breakpoint, css, Link } from 'bumbag'
import { Wrapper as _Wrapper, Container } from '../Common'
import { ReasonsList, ReasonCardItem, ReasonCardBigItem } from './ReasonsList'

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
  margin: 24px 0 0;
  text-align: left;
  font-size: 0.875rem;
  line-height: 1.5rem;
  max-width: 800px;

  ${breakpoint(
    'min-tablet',
    css`
      margin: 36px auto 0;
      text-align: center;
    `
  )}
`

// <ReasonCardItem
//   icon="solid-shopping-bag"
//   name="Shopping for food (including take-away) and other essentials in your local area"
// />
// <ReasonCardItem
//   icon="solid-running"
//   name="Exercise outside in your local area (with only one other person) within 5km of your home"
// />

const GoingOutside = () => {
  return (
    <Wrapper>
      <Container>
        <h2 id="going-outside">Going outside?</h2>
        <Paragraph>
          You <strong>must</strong> wear a fitted face mask.
        </Paragraph>
        <Paragraph>
          These are the <strong>only reasons</strong> when you can leave home.
        </Paragraph>
        <ReasonsList desktopGrid={2} tabletGrid={1}>
          <ReasonCardBigItem
            icon="solid-shopping-bag"
            title="Shopping for food and essentials"
            link="https://www.dhhs.vic.gov.au/stage-4-restrictions-covid-19#necessary-goods-and-services"
          >
            <p>
              Must be within 5km from your home, or at the nearest
              available supermarket.
            </p>
          </ReasonCardBigItem>
          <ReasonCardBigItem
            icon="solid-running"
            title="Exercise"
            link="https://www.dhhs.vic.gov.au/stage-4-restrictions-covid-19#exercise"
          >
            <p>Must be within 5km from your home.</p>
            <p>Limited to two hours per day, which can be split into two different one hour sessions.</p>
            <p>
              You can exercise with members of your household, or up to five people (including you) from a maximum of two households
            </p>
          </ReasonCardBigItem>
        </ReasonsList>
        <ReasonsList>
          <ReasonCardItem
            icon="solid-briefcase"
            name="Work, if you cannot do so from home"
            link="https://www.vic.gov.au/coronavirus-covid-19-restrictions-victoria#announcement-on-how-stage-4-restrictions-affect-businesses-and-workplaces"
          />
          <ReasonCardItem
            icon="solid-clinic-medical"
            name="Access medical services, or visiting a doctor or health professional"
            link="https://www.dhhs.vic.gov.au/stage-4-restrictions-covid-19#care-and-health-care"
          />
          <ReasonCardItem
            icon="solid-paw"
            name="Take your pet to the vet, or for a bathroom break (near your home)"
            link="https://www.dhhs.vic.gov.au/stage-4-restrictions-covid-19#i-live-in-an-apartment-am-i-allowed-to-take-my-dog-out-for-a-bathroom-break-more-than-once-a-day"
          />
          <ReasonCardItem
            icon="solid-place-of-worship"
            name="Attending a funeral (whilst maintaining social distancing)"
            link="https://www.dhhs.vic.gov.au/stage-4-restrictions-covid-19#i-live-in-metropolitan-melbourne--can-i-attend-a-funeral"
          />
          <ReasonCardItem
            icon="solid-heart"
            name="Visiting someone who you are in an intimate personal relationship"
            link="https://www.dhhs.vic.gov.au/stage-4-restrictions-covid-19#can-i-still-visit-my-partner"
          />
          <ReasonCardItem
            icon="solid-syringe"
            name="Donate blood"
            link="https://www.lifeblood.com.au/coronavirus-update"
          />
          <ReasonCardItem
            icon="solid-hands-helping"
            name="Providing caregiving (including child support) or on compassionate reasons"
          />
          <ReasonCardItem
            icon="solid-exclamation"
            name="When your life is in danger, or it is an emergency"
          />
        </ReasonsList>
        <Paragraph>
          Otherwise, you must <strong>stay at home</strong>.
        </Paragraph>
        <Disclaimer>
          Not all reasons are listed here. The full exhaustive list of allowed
          reasons to leave your house can be found in the{' '}
          <Link href="https://www.dhhs.vic.gov.au/second-step-restrictions-metropolitan-melbourne-covid-19">
          Second Step restrictions - Metropolitan Melbourne
          </Link>{' '}
          issued by the Department of Health and Human Services.
        </Disclaimer>
      </Container>
    </Wrapper>
  )
}

export default GoingOutside
