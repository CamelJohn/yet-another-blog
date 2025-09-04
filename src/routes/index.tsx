import { RouterProvider, createBrowserRouter, type RouteObject } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import { PostsPage } from '../pages/posts.page';
import { NotFoundPage } from '../pages/404/404.page';
import { FeatureCardsWrapper } from '../layouts/FeatureCards/FeatureCardsWrapper';
import MarkdownPost from '../posts/test.md';
const routes: RouteObject[] = [
  {
    path: '',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <div>welcome page</div>,
      },
      {
        path: 'blogposts',
        element: <PostsPage />,
        children: [
          {
            path: ':feature',
            element: <FeatureCardsWrapper />,
          },
          {
            path: ':feature/view',
            element: <MarkdownPost />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
