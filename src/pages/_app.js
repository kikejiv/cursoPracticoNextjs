import Header from "@components/Header";
import Script from "next/script";
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/globals.css';

export default function App({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Header />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-JJFPQ46BGE" />
      <Script id="google-analytics" strategy="afterInterative" />
      {
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-JJFPQ46BGE');`
      }
  <Component {...pageProps} />
  </AppContext.Provider>
  );
}
