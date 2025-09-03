import { RouterProvider, createBrowserRouter, type RouteObject } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';

const routes: RouteObject[] = [
    {
        path: '',
        element: <RootLayout />,
        children: [{
            index: true,
            element: <div>hi</div>
        }, {
            path: 'posts',
            element: <div>posts page</div>
        }]
    }
];

const router = createBrowserRouter(routes);

const Routes = () => <RouterProvider router={router} />

export default Routes;