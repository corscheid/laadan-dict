import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app'
import * as gtag from "../lib/ga";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageView(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
};

export default App;
