import { Container, SimpleGrid, Text, Title } from '@mantine/core';
import classes from './FeatureCards.module.css';
import {
  ArticleCardFooter,
  type IArticleCardFooterProps,
} from '../ArticleCardFooter/ArticleCardFooter';

interface IFeaturesCardsProps {
  title: string;
  description: string;
  articles?: IArticleCardFooterProps[];
}

export function FeaturesCards({ title, description, articles }: IFeaturesCardsProps) {
  const cards = articles?.map((article) => <ArticleCardFooter key={article.title} {...article} />);

  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        {title}
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        {description}
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}
