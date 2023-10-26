import { MainTemplate } from '@/components/templates/Main';
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from "../components/atoms/theme";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainTemplate><Component {...pageProps} /></MainTemplate>
    </ChakraProvider>
  )
}
