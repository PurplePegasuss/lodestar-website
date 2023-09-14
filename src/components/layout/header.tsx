import { HStack, Image } from '@chakra-ui/react';
import NavLink from './navlink';

const Header = () => (
  <HStack padding="10" spacing="20" justifyContent="center">
    <NavLink to="/">
      <Image src="/logo.svg" height="20" />
    </NavLink>
    <NavLink to="/projects">Проекты</NavLink>
    <NavLink to="/about">О нас</NavLink>
    <NavLink to="/contact">Связаться с нами</NavLink>
  </HStack>
);

export default Header;
