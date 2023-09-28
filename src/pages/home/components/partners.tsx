import { Box, HStack, Image, Text } from '@chakra-ui/react';
import partners from '../../../data/partners';

const Partners = () => (
  <HStack spacing="10" alignItems="start" flexWrap="wrap" justify="center">
    {partners.map(({ name, photo }, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Box width="40" textAlign="center" key={i}>
        <Image src={photo} alt={name} marginBottom="4" />
        <Text>{name}</Text>
      </Box>
    ))}
  </HStack>
);

export default Partners;
