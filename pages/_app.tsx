import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { OmProvider } from './DesignYourSite/src/context/MapComponent'

export default function App({ Component, pageProps }: AppProps) {
  return <OmProvider><Component {...pageProps} /></OmProvider>
}
