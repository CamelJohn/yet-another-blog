import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import { ActionIcon, Avatar, Card, Group, Text } from '@mantine/core';
import classes from './ArticleCardFooter.module.css';
import { faker } from '@faker-js/faker';
import { NavLink } from 'react-router-dom';

export interface IArticleCardFooterProps {
  title: string;
  author: string;
  likes?: number;
  posted: string;
}

export function ArticleCardFooter({ title, author, likes = 0, posted }: IArticleCardFooterProps) {
  const avatar = faker.number.int({ min: 1, max: 10 });
  return (
    <Card component={NavLink} to="view" withBorder padding="lg" radius="md" className={classes.card}>
      <Text className={classes.title}>{title}</Text>

      <Group mt="lg">
        <Avatar
          src={`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-${avatar}.png`}
          radius="sm"
        />
        <div>
          <Text fw={500}>{author}</Text>
          <Text fz="xs" c="dimmed">
            {posted}
          </Text>
        </div>
      </Group>

      <Card.Section className={classes.footer}>
        <Group justify="space-between">
          <Text fz="xs" c="dimmed">
            {likes} people liked this
          </Text>
          <Group gap={0}>
            <ActionIcon variant="subtle" color="gray">
              <IconHeart size={20} color="var(--mantine-color-red-6)" stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray">
              <IconBookmark size={20} color="var(--mantine-color-yellow-6)" stroke={1.5} />
            </ActionIcon>
            <ActionIcon variant="subtle" color="gray">
              <IconShare size={20} color="var(--mantine-color-blue-6)" stroke={1.5} />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
}
