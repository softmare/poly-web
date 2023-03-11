import Header from "@components/header";
import "@styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ReactGA from "react-ga";

ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID as string);

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [router.asPath]);

  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
