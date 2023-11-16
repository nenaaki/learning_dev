import { MainTemplate } from '@/components/templates/Main';
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from "../components/atoms/theme";

const login = true

export default function App({ Component, pageProps }: AppProps) {
  if (login) {
    return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    )
  } else {
    return (
      <ChakraProvider theme={theme}>
        <MainTemplate><Component {...pageProps} /></MainTemplate>
      </ChakraProvider>
    )
  }
}
