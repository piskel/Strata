import { ChakraComponent, ChakraProps, ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react"
import './_app.css';

interface IProps {
    Component: ChakraComponent<any, any>,
    pageProps: ChakraProps
}
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false
}
const theme = extendTheme({config})


export default function MyApp({ Component, pageProps }: IProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
