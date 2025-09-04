import {
  IconHomeEdit,
  IconMessageHeart,
  IconAugmentedReality,
  IconChartHistogram,
  IconBrandBinance
} from '@tabler/icons-react';

const navlinks = [
  { label: 'Homepage', link: '/', icon: IconHomeEdit },
  {
    label: 'Posts',
    icon: IconMessageHeart,
    initiallyOpened: false,
    links: [
      { label: 'Tech', link: '/blogposts/tech', icon: IconAugmentedReality },
      { label: 'Finance', link: '/blogposts/finance', icon: IconChartHistogram },
      { label: 'Fintech', link: '/blogposts/fintech', icon: IconBrandBinance },
    ],
  },
];

export default navlinks;