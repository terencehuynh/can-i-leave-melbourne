import React from 'react'
import { styled, palette, Icon, Disclosure, DisclosureProps } from 'bumbag'
import ReactMarkdown from 'react-markdown'

type VisibleProp = {
  visible: boolean
  baseColor: string
}

type LocationProps = {
  title?: string
  status?: string
  content: string
}

const Wrapper = styled.div<VisibleProp>`
  border-radius: 4px;
  padding: 14px;
  border: 2px solid ${(props) => props.baseColor};
  background: ${(props) => (props.visible ? 'white' : props.baseColor)};
`

const Header = styled.div<VisibleProp>`
  cursor: pointer;
  padding: 14px;
  margin: ${(props) => (props.visible ? '-14px -14px 14px' : '-14px')};
  user-select: none;
  display: block;
  color: ${(props) => (props.visible ? props.baseColor : 'white')};
  border-bottom-style: solid;
  border-bottom-width: ${(props) => (props.visible ? '2px' : '0px')};
  border-bottom-color: ${(props) =>
    props.visible ? props.baseColor : 'unset'};
  display: flex;
  align-items: center;
  font-weight: 600;
  line-height: 1.125rem;
  font-size: 1rem;
  outline: none;

  svg {
    margin-right: 10px;
    font-size: 1.5rem;
  }
`

const LocationContent = styled.div`
  ul {
    margin: 0;
    padding: 0 0 0 16px;
  }

  li {
    margin: 0 0 16px;
    padding: 0 0 0 10px;
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  li p {
    margin: 0 0 2px;
  }

  li ol,
  li ul {
    margin: 0;
    padding: 0 0 0 18px;
  }

  li li {
    margin: 0 0 2px;
  }

  a {
    color: ${palette('primary')};
  }

  a.source {
  }

  li:last-child {
    margin: 0;
  }
`

const Location: React.FC<LocationProps> = ({ title, status, content }) => {
  const disclosure = Disclosure.useState()
  const baseColor: string =
    status === 'NO'
      ? ((palette('danger') as unknown) as string)
      : ((palette('success') as unknown) as string)
  const icon = status === 'NO' ? 'solid-times-circle' : 'success'

  return (
    <>
      <Wrapper {...disclosure} baseColor={baseColor}>
        <Disclosure {...disclosure}>
          {(props: DisclosureProps) => (
            <Header
              {...props}
              visible={disclosure.visible}
              baseColor={baseColor}
            >
              <Icon label="Status" icon={icon} />
              {title}
            </Header>
          )}
        </Disclosure>
        <Disclosure.Content {...disclosure}>
          <LocationContent>
            <ReactMarkdown source={content} />
          </LocationContent>
        </Disclosure.Content>
      </Wrapper>
    </>
  )
}

export default Location
