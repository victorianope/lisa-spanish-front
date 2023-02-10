import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import React, { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

const Layout = ({
  children,
  title,
  showFooter,
}: {
  children: ReactNode;
  title: string;
  showFooter?: boolean;
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="robots" content="noindex" />
    </Head>

    <Header />

    <Box>{children}</Box>

    {showFooter && (
      <Box /* position={'fixed'} left={0} bottom={0} width={'100%'} */>
        <Footer />
      </Box>
    )}
  </div>
);

export default Layout;
