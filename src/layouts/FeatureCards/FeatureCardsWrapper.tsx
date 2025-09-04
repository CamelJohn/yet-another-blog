import { useParams, Navigate, useOutletContext } from 'react-router-dom';
import { FeaturesCards } from './FeatureCards';
import type { FeatureCardsContext } from '../../pages/posts.page';

const allowedFeatures = ['tech', 'finance', 'fintech'] as const;
type Feature = (typeof allowedFeatures)[number];

export function FeatureCardsWrapper() {
  const { feature } = useParams<{ feature: string }>();
  const {featureCardsData} = useOutletContext<{ featureCardsData: FeatureCardsContext}>();

  if (!feature || !allowedFeatures.includes(feature as Feature)) {
    return <Navigate to="../../*" replace/>;
  }

  const data = featureCardsData[feature];

  return <FeaturesCards {...data} />;
}
