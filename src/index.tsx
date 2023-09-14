import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import routes from './routes';
import './i18n';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={routes} />
    </ChakraProvider>
  </StrictMode>,
);
