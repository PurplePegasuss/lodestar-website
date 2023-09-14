import { Link, LinkProps, forwardRef } from '@chakra-ui/react';
import { Link as RouterLink, type LinkProps as RouterLinkProps } from 'react-router-dom';

const RouteLink = forwardRef<LinkProps & RouterLinkProps, 'a'>((props, ref) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid, react/jsx-props-no-spreading
  <Link ref={ref} as={RouterLink} {...props} />
));

export default RouteLink;
