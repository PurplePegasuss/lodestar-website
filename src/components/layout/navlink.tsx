import { Link, chakra } from '@chakra-ui/react';

const NavLink = chakra(Link, {
  baseStyle: {
    fontFamily: 'heading',
    textTransform: 'uppercase',
  },
});

export default NavLink;
