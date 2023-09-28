import { Outlet } from 'react-router-dom';
import { Spacer, VStack } from '@chakra-ui/react';
import Header from './header';
import Footer from './footer';

const Layout = () => (
  <VStack spacing="0" minHeight="100vh" alignItems="stretch">
    <Header />
    <Outlet />
    <Spacer />
    <Footer />
  </VStack>
);

export default Layout;
