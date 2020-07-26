import { Box, applyTheme, styled, breakpoint, css } from 'bumbag'

export type WrapperProps = {
  noHorizontal?: boolean
  palette?: string
}

const WrapperPaddingHorizontal = {
  default: '24px',
  'min-tablet': '36px',
  'min-desktop': '48px',
}

export const Wrapper = applyTheme(Box, {
  styles: {
    base: (props: WrapperProps) => ({
      paddingTop: props.noHorizontal ? '0px' : WrapperPaddingHorizontal,
      paddingBottom: props.noHorizontal ? '0px' : WrapperPaddingHorizontal,
      paddingLeft: '16px',
      paddingRight: '16px',
      backgroundColor: props.palette,
    }),
  },
})

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  > h2 {
    margin: 0 0 16px;
    font-size: 1.75rem;
    line-height: 1.5rem;
    text-align: left;
    font-weight: 700;
    letter-spacing: -1px;

    ${breakpoint(
      'min-tablet',
      css`
        font-size: 2.25rem;
        line-height: 2rem;
        margin: 0 0 24px;
        text-align: center;
      `
    )}
  }
`
