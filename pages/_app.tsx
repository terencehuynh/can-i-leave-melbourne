import React from 'react'
import { AppProps } from 'next/app'
import { Provider as BumbagProvider } from 'bumbag'
import theme from '../utils/theme'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <BumbagProvider theme={theme}>
      <Component {...pageProps} />
    </BumbagProvider>
  )
}

export default App
