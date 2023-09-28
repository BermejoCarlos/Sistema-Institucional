import { ThemeProvider } from 'next-themes'


// C O N T E X   P R O V I D E R
import { StateProvider } from '@/context/ContextProvider'


// S T Y L E S
import '@/styles/globals.css'
import '@/styles/fonts.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" forcedTheme={Component.theme || undefined}>
      <StateProvider>
        <Component {...pageProps} />
      </StateProvider>
    </ThemeProvider>
  )
}