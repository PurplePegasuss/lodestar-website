import { createHashRouter } from 'react-router-dom';
import Layout from './components/layout/layout';
import Home from './pages/home/home';
import NotFound from './pages/not_found';
import Projects from './pages/projects';
import About from './pages/about/about';
import Contact from './pages/contact';

const routes = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
