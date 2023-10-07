import { ReactNode, StrictMode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../../components/layout/layout';
import theme from '../theme';

const Body = ({ children }: { children: ReactNode }) => (
  <StrictMode>
    <ChakraProvider theme={theme}>
      <Layout>{children}</Layout>
    </ChakraProvider>
  </StrictMode>
);

export default Body;
