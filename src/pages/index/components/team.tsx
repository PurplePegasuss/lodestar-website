import { Box, HStack, Image } from '@chakra-ui/react';
import team_members from '../../../data/team_members';

const Team = () => (
  <HStack spacing="10" alignItems="start" flexWrap="wrap" justify="center">
    {team_members.map(({ name, photo }, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Box width="40" key={i}>
        <Image src={photo} alt={name} marginBottom="4" />
      </Box>
    ))}
  </HStack>
);

export default Team;
