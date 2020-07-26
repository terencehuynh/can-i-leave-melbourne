import React, { useEffect, useState } from 'react'
import { styled, Button, Set, breakpoint, css } from 'bumbag'
import {
  Wrapper as _Wrapper,
  Container as _Container,
  WrapperProps,
} from './Common'

import { SHARE_DATA } from '../constants'

const Wrapper = styled(_Wrapper)<WrapperProps>`
  padding-top: 24px;
  padding-bottom: 24px;
`

const Container = styled(_Container)`
  h2 {
    color: white;
    font-size: 1.3125rem;
    font-weight: 300;
    letter-spacing: 0;
    line-height: 1.5rem;
    text-align: left;

    ${breakpoint(
      'min-tablet',
      css`
        font-size: 1.5rem;
        font-weight: 300;
        line-height: 1.75rem;
      `
    )}
  }
`

type ShareType = (data: ShareData) => Promise<void>

const Share = () => {
  const [share, setShare] = useState<ShareType | null>(null)

  // The hackest way to get this to work on next js
  useEffect(() => {
    const share = navigator?.share ?? null
    setShare(share)
  }, [])

  const handleShare = async () => {
    if (!share) return null
    const { title, desc: text, url } = SHARE_DATA
    await share({ title, text, url })
  }

  const twitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${SHARE_DATA.desc} ${SHARE_DATA.url} (h/t ${SHARE_DATA.tag})`
  )}`

  const facebook = `https:/facebook.com/share.php?u=${SHARE_DATA.url}&quote=${SHARE_DATA.desc}`

  return (
    <Wrapper palette="gray700">
      <Container>
        <h2>Spread the word!</h2>
        <Set verticalBelow="tablet" isFilled={true}>
          {!!share && (
            <Button
              use="a"
              iconBefore="solid-share-alt"
              variant="inverted-outline"
              palette="gray700"
              onClick={handleShare}
            >
              Share to your friends!
            </Button>
          )}
          <Button
            use="a"
            iconBefore="brand-twitter"
            variant="inverted-outline"
            palette="gray700"
            // @ts-ignore
            href={twitter}
          >
            Twitter
          </Button>
          <Button
            use="a"
            iconBefore="brand-facebook"
            variant="inverted-outline"
            palette="gray700"
            // @ts-ignore
            href={facebook}
          >
            Facebook
          </Button>
        </Set>
      </Container>
    </Wrapper>
  )
}

export default Share
