import { Flex, Text, ThemeIcon } from '@mantine/core';
import { IconBrandReact } from '@tabler/icons-react';

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
     <Flex gap="xs" {...props} direction="row" align="center">
      <ThemeIcon
        radius="xl"
        size="lg"
        variant="filled"
        color="blue"
      >
        <IconBrandReact size={20} />
      </ThemeIcon>
      <Text fw={400} size="lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
        yet another blog
      </Text>
    </Flex>
  );
}