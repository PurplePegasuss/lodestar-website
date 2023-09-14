import { chakra } from '@chakra-ui/react';
import RouteLink from '../routelink';

const NavLink = chakra(RouteLink, {
  baseStyle: {
    fontFamily: 'heading',
    textTransform: 'uppercase',
  },
});

export default NavLink;
