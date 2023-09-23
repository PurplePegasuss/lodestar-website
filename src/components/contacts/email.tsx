import { Link } from '@chakra-ui/react';

const EmailLink = ({ address }: { address: string }) => (
  <Link href={`mailto:${address}`} color="red.300">
    {address}
  </Link>
);

export const DefaultEmailLink = () => (
  <EmailLink address="lodestar@please-replace-this-address.com" />
);

export default EmailLink;
