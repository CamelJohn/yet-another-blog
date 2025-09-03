import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.tsx';
import { HelmetProvider } from 'react-helmet-async';
// import TextPost from './posts/test.md'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      {/* <Helmet> */}
        {/* <TextPost /> */}
      {/* </Helmet> */}
    </HelmetProvider>
  </StrictMode>
);
