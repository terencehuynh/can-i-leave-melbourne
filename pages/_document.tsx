import Document, {
  Html, 
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { extractCritical } from 'emotion-server'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = extractCritical(initialProps.html)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: styles.css }}
          />
        </>
      ),
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head key="head-in-doc">
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>Can I Leave Melbourne?</title>
          <meta property="og:title" content="Can I Leave Melbourne?" />
          <meta
            property="og:description"
            content="Wear a mask. Wash your hands. Stay at home."
          />
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
          <meta
            name="twitter:description"
            content="Wear a mask. Wash your hands. Stay at home."
          />
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
      </Html>
    )
  }
}
