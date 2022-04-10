/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable prettier/prettier */
import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          
          <link
            rel="stylesheet"
            href="http://fonts.cdnfonts.com/css/architects-daughter"
            type="text/css"
          />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"

          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />

          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#000000" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </Head>
       <body className='0' >
          <Main />
          <NextScript />
          <script src="https://kit.fontawesome.com/41543c07e1.js"/>
        </body>
      </Html>
    )
  }
}

export default MyDocument
