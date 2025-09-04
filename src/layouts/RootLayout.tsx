import { Outlet, ScrollRestoration } from 'react-router-dom';
import { ColorSchemeScript, mantineHtmlProps, AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavbarNested } from './NavbarNested/NavbarNested';

const RootLayout = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <ColorSchemeScript />
      </head>
      <body>
        <AppShell
          padding="md"
          // header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: 'sm',
            collapsed: { mobile: !opened },
          }}
        >
          {/* <AppShell.Header style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0 1.5em'
          }}>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <div>yet another blogpost site</div>
          </AppShell.Header> */}
          <AppShell.Navbar>
            {/* <Burger opened={opened} onClick={toggle}  size="sm" /> */}
              <NavbarNested />
          </AppShell.Navbar>
          <AppShell.Main>
            <Outlet />
          </AppShell.Main>
        </AppShell>
        <ScrollRestoration />
      </body>
    </html>
  );
};

export default RootLayout;
