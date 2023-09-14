import { Center, Image } from '@chakra-ui/react';
import { Navigate, createHashRouter } from 'react-router-dom';

const routes = createHashRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: (
          <Center height="100vh">
            <Image src="/logo.svg" width="50%" />
          </Center>
        ),
      },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
]);

export default routes;
