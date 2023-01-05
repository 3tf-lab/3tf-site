console.time('import')
import { useState, useEffect } from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router'
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../styles/theme';
import createEmotionCache from '../styles/createEmotionCache';
import '../styles/globals.css'
import * as wasm from "utils.wasm";
console.timeEnd('import')

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const router = useRouter()
  const mobile = useMediaQuery(theme.breakpoints.down('md'))

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      console.log(`App is changing to ${url}`)
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events])
  
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component
          key={router.asPath}
          {...pageProps}
          mobile={mobile}
          utils={wasm}
          />
      </ThemeProvider>
    </CacheProvider>
  );
}