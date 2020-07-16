import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'fannypack'

const theme = {
  palette: {
    yellow: '#FFEA00',
    warningBg: '#263238',
    warningHover: '#37474f',
  },
}

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
