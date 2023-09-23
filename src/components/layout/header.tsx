import { HStack, Image } from '@chakra-ui/react';
import NavLink from './navlink';

const Header = () => (
  <HStack position="relative" height="32" spacing="20" justifyContent="center" zIndex={1}>
    <NavLink to="/">
      <Image src="/media/logo.svg" height="20" />
    </NavLink>
    <NavLink to="/projects">Проекты</NavLink>
    <NavLink to="/about">О нас</NavLink>
    <NavLink to="/contact">Контакты</NavLink>
  </HStack>
);

export default Header;
