import '@mantine/core/styles.css';

import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { MantineProvider } from '@mantine/core';

import Routes from './routes';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <MantineProvider forceColorScheme="dark">
      <Routes />
    </MantineProvider>
  </HelmetProvider>
);
