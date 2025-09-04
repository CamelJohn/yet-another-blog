import { Outlet } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import type { IArticleCardFooterProps } from '../layouts/ArticleCardFooter/ArticleCardFooter';
interface FeatureCardData {
  title: string;
  description: string;
  articles: IArticleCardFooterProps[];
}

function timeAgo(date: Date) {
  const now = new Date();
  const diff = now.getTime() - date.getTime(); // milliseconds

  const minutes = Math.floor(diff / (1000 * 60));
  if (minutes < 60) return `${minutes} minutes ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hours ago`;

  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} days ago`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months} months ago`;

  const years = Math.floor(months / 12);
  return `${years} years ago`;
}

const generateArticle = (): IArticleCardFooterProps => {
  const randomDate = faker.date.recent();
  return {
    title: faker.book.title(),
    author: faker.book.author(),
    likes: faker.number.int({ min: 0, max: 500 }),
    posted: timeAgo(randomDate),
  };
};

const generateFeature = (title: string, description: string, count = faker.number.int({ min: 9, max: 100})): FeatureCardData => ({
  title,
  description,
  articles: Array.from({ length: count }, generateArticle),
});

export const featureCardsData: Record<string, FeatureCardData> = {
  tech: generateFeature('Tech', 'Latest articles, guides, and news about technology.'),
  finance: generateFeature('Finance', 'Insights and updates from the finance world.'),
  fintech: generateFeature('Fintech', 'Innovations at the intersection of finance and technology.'),
};

export type FeatureCardsContext = Record<string, FeatureCardData>;

export const PostsPage = () => {
  return <Outlet context={{ featureCardsData }} />;
};
