import { Code, Group, ScrollArea } from '@mantine/core';
import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
import { UserButton } from '../UserButton/UserButton';
import { Logo } from './Logo';
import classes from './NavbarNested.module.css';
import navlinks from './links';

export function NavbarNested() {
  const links = navlinks.map((navlink) => <LinksGroup {...navlink} key={navlink.label} />);

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          <Logo />
          <Code fw={700}>v1.0.0</Code>
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}