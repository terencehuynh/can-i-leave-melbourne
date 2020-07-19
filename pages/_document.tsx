import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <html lang="en">
        <Head key="head-in-doc">
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>Can I Leave Melbourne?</title>
          <meta property="og:title" content="Can I Leave Melbourne?" />
          <meta property="og:description" content="canileave.melbourne" />
          <meta property="og:url" content="https://canileave.melbourne" />
          <meta
            property="og:image"
            content="https://canileave.melbourne/img/og-image-no.png"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Can I Leave Melbourne?" />
          <meta name="twitter:description" content="canileave.melbourne" />
          <meta
            name="twitter:image"
            content="https://canileave.melbourne/img/og-image-no.png"
          />
          <meta name="twitter:image:alt" content="Can I Leave Melbourne?" />
          <meta name="twitter:creator" content="@terencehuynh" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
