import React from 'react'
import { styled, palette, css, Icon } from 'fannypack'
import Hidden from 'reakit/Hidden'
import ReactMarkdown from 'react-markdown'

type VisibleProp = {
  visible: boolean
  palette: string
}

type LocationProps = {
  title?: string
  status?: string
  content: string
}

const Wrapper = styled.div<VisibleProp>`
  border-radius: 4px;
  padding: 14px;
  border: 2px solid ${(props) => palette(props.palette)};
  background: ${(props) => palette(props.palette)};

  ${(props) =>
    props.visible &&
    css`
      background: white;
      border: 2px solid ${palette(props.palette)};
    `};
`

const Header = styled.div<VisibleProp>`
  cursor: pointer;
  padding: 14px;
  margin: -14px;
  user-select: none;

  ${(props) =>
    props.visible &&
    css`
      border-bottom: 1px solid ${palette(props.palette)};
      margin: -14px -14px 14px;
    `};

  h3 {
    display: flex;
    align-items: center;
    margin: 0;
    font-weight: 600;
    line-height: 1.125rem;
    font-size: 1rem;
    color: white;

    ${(props) =>
      props.visible &&
      css`
        color: ${palette(props.palette)};
      `}
  }

  svg {
    margin-right: 10px;
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
  const palette = status === 'NO' ? 'danger' : 'success'
  return (
    <Hidden.Container>
      {(hidden) => (
        <Wrapper {...hidden} palette={palette}>
          <Hidden.Toggle {...hidden} use={Header} palette={palette}>
            <h3>
              <Icon a11yLabel="Disclaimer" icon="danger" size="16" />
              {title}
            </h3>
          </Hidden.Toggle>
          <Hidden {...hidden}>
            <LocationContent>
              <ReactMarkdown source={content} />
            </LocationContent>
          </Hidden>
        </Wrapper>
      )}
    </Hidden.Container>
  )
}

export default Location
