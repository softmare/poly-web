import Header from "@components/header";
import "@styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const gid = process.env.NEXT_PUBLIC_GA_TRACKING_ID as string;
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${gid}`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gid}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
      <SessionProvider session={session}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
