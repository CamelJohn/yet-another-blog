import { Outlet, ScrollRestoration, NavLink as RouterDomNavLink } from 'react-router-dom';
import { ColorSchemeScript, mantineHtmlProps, AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavLink } from '@mantine/core';

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
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: 'sm',
            collapsed: { mobile: !opened },
          }}
        >
          <AppShell.Header style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0 1.5em'
          }}>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <div>Yet another blogposts site</div>
          </AppShell.Header>

          <AppShell.Navbar>
            <NavLink to="posts" component={RouterDomNavLink} label="posts" />
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
