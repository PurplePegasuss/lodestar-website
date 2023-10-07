import { createContext, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { Spacer, VStack, useMediaQuery } from '@chakra-ui/react';
import Header from './header';
import Footer from './footer';

export const LayoutContext = createContext({
  supportsHover: false,
});

const Layout = () => {
  const [canHover] = useMediaQuery('(hover: hover) and (pointer: fine)');

  const contextValue = useMemo(() => ({ supportsHover: canHover }), [canHover]);

  return (
    <LayoutContext.Provider value={contextValue}>
      <VStack spacing="0" minHeight="100vh" alignItems="stretch">
        <Header />
        <Outlet />
        <Spacer />
        <Footer />
      </VStack>
    </LayoutContext.Provider>
  );
};

export default Layout;
