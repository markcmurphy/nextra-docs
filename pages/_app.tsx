import { Fragment } from 'react';

import type { AppProps } from 'next/app';
import type { Page } from 'types/page';

import 'nextra-theme-docs/style.css';
import '@styles/global.scss';
import '@styles/tailwind.scss';

import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';

type Props = AppProps & {
  Component: Page;
  session: Session;
};

export default function Nextra({
  Component,
  pageProps: { session, ...pageProps },
}: Props) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout ?? Fragment;

  return (
    <SessionProvider session={session}>
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </SessionProvider>
  );
}
