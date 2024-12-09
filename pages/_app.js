import '../styles/globals.css';
import { ChakraProvider, extendTheme  } from '@chakra-ui/react'
import { Analytics } from '@vercel/analytics/react';

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: '#1c1d1d',
        color: "#747578"
      },
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
    </ChakraProvider>
  )
}

export default MyApp
