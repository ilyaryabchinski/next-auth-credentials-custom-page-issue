import '@/styles/globals.css'
import { MantineProvider } from '@mantine/core';
import type { AppType } from 'next/app'
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

const App: AppType<{ session: Session | null }> = (
  { Component, pageProps: { session, ...pageProps }, }) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
    >
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </MantineProvider>
  )
}
export default App;