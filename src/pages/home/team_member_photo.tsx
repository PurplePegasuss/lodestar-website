import { Image } from '@chakra-ui/react';

const TeamMemberPhoto = ({ photo_url }: { photo_url: string }) => (
  <Image src={photo_url} width="100%" />
);

export default TeamMemberPhoto;
