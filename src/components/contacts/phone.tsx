import { Link } from '@chakra-ui/react';

const PhoneLink = ({ number }: { number: string }) => (
  <Link href={`tel:${number}`} color="red.300">
    {number}
  </Link>
);

export const DefaultPhoneLink = () => <PhoneLink number="+79876543210" />;

export default PhoneLink;
