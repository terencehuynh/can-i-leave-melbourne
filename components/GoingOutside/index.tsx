import React, { useState, useEffect } from 'react'
import { styled, breakpoint, css, applyTheme, Tabs, Alert, Link } from 'bumbag'
import { Wrapper as _Wrapper, Container } from '../Common'
import { ReasonsList, ReasonCardItem, ReasonCardBigItem } from './ReasonsList'

const Wrapper = styled(_Wrapper)`
  border-bottom: 1px solid #f0f0f0;
  background: #f7f7f7;
`

const CurfewAlert = applyTheme(Alert, {
  styles: {
    base: {
      margin: { default: '0 0 24px', 'min-tablet': '0 0 36px' },
      padding: '16px',
    },
  },
  Title: {
    styles: {
      base: {
        fontSize: { default: '1rem', 'min-tablet': '1.3125rem' },
        lineHeight: { default: '1.5rem', 'min-tablet': '1.75rem' },
        fontWeight: '700',
      },
    },
  },
  Description: {
    styles: {
      base: {
        fontSize: { default: '1rem', 'min-tablet': '1.3125rem' },
        lineHeight: { default: '1.5rem', 'min-tablet': '1.75rem' },
        fontWeight: '300',
      },
    },
  },
})

const StyledTab = applyTheme(Tabs.Tab, {
  styles: {
    selected: {
      borderBottomColor: '#f7f7f7',
    },
  },
})

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
  const [preselect, setPreselect] = useState<string | null>(null)

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 5 || hour >= 20) {
      setPreselect('night')
    } else {
      setPreselect('day')
    }
  }, [])

  return preselect ? (
    <Wrapper>
      <Container>
        <h2 id="going-outside">Going outside?</h2>
        <Tabs isFitted selectedId={preselect}>
          <Tabs.List variant="boxed">
            <StyledTab tabId="day">Between 5am - 8pm</StyledTab>
            <StyledTab tabId="night">Between 8pm - 5am</StyledTab>
          </Tabs.List>
          <Tabs.Panel tabId="day">
            <Paragraph>
              These are the <strong>only reasons</strong> when you can leave
              home:
            </Paragraph>
            <ReasonsList desktopGrid={2} tabletGrid={1}>
              <ReasonCardBigItem
                icon="solid-shopping-bag"
                title="Shopping for food and essentials"
                link="https://www.vic.gov.au/coronavirus-covid-19-restrictions-victoria"
              >
                <p>
                  Must be within 5km from your home, or at the nearest available
                  supermarket.
                </p>
                <p>
                  Only one member of your household can leave to get supplies.
                </p>
                <p>Each household can only leave for supplies once per day</p>
              </ReasonCardBigItem>
              <ReasonCardBigItem
                icon="solid-running"
                title="Exercise"
                link="https://www.vic.gov.au/coronavirus-covid-19-restrictions-victoria"
              >
                <p>Must be within 5km from your home.</p>
                <p>Limited to one hour, once per day.</p>
                <p>
                  Max group size of two people (unless with young children or
                  at-risk people that cannot be left at home)
                </p>
              </ReasonCardBigItem>
            </ReasonsList>
            <ReasonsList>
              <ReasonCardItem
                icon="solid-briefcase"
                name="Work, if you cannot do so from home"
              />
              <ReasonCardItem
                icon="solid-clinic-medical"
                name="Access medical services, or visiting a doctor or health professional"
              />
              <ReasonCardItem
                icon="solid-place-of-worship"
                name="Attending a funeral (whilst maintaining social distancing)"
              />
              <ReasonCardItem
                icon="solid-hands-helping"
                name="Providing caregiving or on compassionate reasons"
              />
              <ReasonCardItem
                icon="solid-exclamation"
                name="When your life is in danger, or it is an emergency"
              />
            </ReasonsList>
          </Tabs.Panel>
          <Tabs.Panel tabId="night">
            <CurfewAlert variant="fill" title="Curfew in place">
              You can only leave for the following reasons outlined below.
            </CurfewAlert>
            <ReasonsList desktopGrid={2}>
              <ReasonCardItem
                icon="solid-briefcase"
                name="Work, if you cannot do so from home"
              />
              <ReasonCardItem
                icon="solid-clinic-medical"
                name="Access medical services"
              />
              <ReasonCardItem
                icon="solid-hands-helping"
                name="Providing caregiving or on compassionate reasons"
              />
              <ReasonCardItem
                icon="solid-exclamation"
                name="When your life is in danger, or it is an emergency"
              />
            </ReasonsList>
          </Tabs.Panel>
        </Tabs>
        <Paragraph>
          Otherwise, you must <strong>stay at home</strong>.
        </Paragraph>
        <Disclaimer>
          The Department of Health and Human Services website has not been
          updated with the latest directions. The following information comes
          from the{' '}
          <Link href="https://twitter.com/DanielAndrewsMP/status/1289795907186122752">
            State Government's press release.
          </Link>
        </Disclaimer>
      </Container>
    </Wrapper>
  ) : null
}

export default GoingOutside
