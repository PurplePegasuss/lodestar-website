import { HStack, Image, Stack } from '@chakra-ui/react';
import NavLink from './navlink';

const Header = () => (
  <HStack position="relative" height="32" spacing="20" justifyContent="center" zIndex={1}>
    <NavLink href="/">
      <Image src="/media/logo.svg" height="20" />
    </NavLink>
    <Stack
      columnGap={{ base: '10', md: '20' }}
      direction={{ base: 'column', sm: 'row' }}
      whiteSpace="nowrap"
    >
      <NavLink href="/projects">Проекты</NavLink>
      <NavLink href="/about">О нас</NavLink>
      <NavLink href="/contact">Контакты</NavLink>
    </Stack>
  </HStack>
);

export default Header;
