import { useState } from 'react';
import { IconChevronRight } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';
import { Box, Collapse, Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import classes from './NavbarLinksGroup.module.css';

interface ILink {
  label: string;
  link: string;
  icon: React.FC<any>;
}

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  link?: string;
  initiallyOpened?: boolean;
  links?: ILink[];
}

export function LinksGroup({ icon: Icon, label, initiallyOpened, links, link }: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Text component={NavLink} className={classes.link} to={link.link} key={link.label}>
      <Group justify="space-between" gap={0}>
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <ThemeIcon variant="light" size={30} style={{ borderRadius: 50 }}>
            <link.icon size={18} />
          </ThemeIcon>
          <Box ml="md">{link.label}</Box>
        </Box>
      </Group>
    </Text>
  ));

  return (
    <>
      <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
        <Group justify="space-between" gap={0}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30} style={{ borderRadius: 4 }}>
              <Icon size={18} />
            </ThemeIcon>
            {link ? <Box component={NavLink} className={classes.rootLink} to={link} ml="md">{label}</Box> : <Box ml="md">{label}</Box>}
          </Box>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              size={16}
              style={{ transform: opened ? 'rotate(-90deg)' : 'none' }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
