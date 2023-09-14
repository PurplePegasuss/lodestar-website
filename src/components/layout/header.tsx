import { HStack, Image } from '@chakra-ui/react';
import NavLink from './navlink';

const Header = () => (
  <HStack padding="10" spacing="20" justifyContent="center">
    <Image src="/logo.svg" height="20" />
    <NavLink to="#projects">Проекты</NavLink>
    <NavLink to="/about">О нас</NavLink>
    <NavLink to="/about#contact">Связаться с нами</NavLink>
  </HStack>
);

export default Header;
