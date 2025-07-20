import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tanisha Hasan – Portfolio</title>
        <meta name="description" content="Crafting human-centered AI and digital experiences." />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
