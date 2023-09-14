import { Link, LinkProps, forwardRef } from '@chakra-ui/react';
import { Link as RouteLink, type LinkProps as RouteLinkProps } from 'react-router-dom';

const NavLink = forwardRef<LinkProps & RouteLinkProps, 'a'>((props, ref) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid, react/jsx-props-no-spreading
  <Link fontFamily="heading" textTransform="uppercase" ref={ref} as={RouteLink} {...props} />
));

export default NavLink;
