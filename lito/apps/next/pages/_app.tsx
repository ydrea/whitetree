import { Provider } from 'app/provider'
import Head from 'next/head'
import 'raf/polyfill'
import React from 'react'
import type { SolitoAppProps } from 'solito'

const fixReanimatedIssue = () => {
  // FIXME remove this once this reanimated fix gets released
  // https://github.com/software-mansion/react-native-reanimated/issues/3355
  if (process.browser) {
    // @ts-ignore
    window._frameTimestamp = null
  }
}

fixReanimatedIssue()

function MyApp({ Component, pageProps }: SolitoAppProps) {
  const [boo, booSet]=React.useState()
  return (
    <>
      <Head>
        <title>Solito App</title>
        <meta
          name="description"
          content="Expo + Next.js with Solito. By Fernando Rojo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
