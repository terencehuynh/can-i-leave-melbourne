import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'fannypack'
import theme from '../utils/theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
