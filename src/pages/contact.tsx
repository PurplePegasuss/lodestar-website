import { Box, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import NamedSection from '../components/layout/named_section';

const Contact = () => (
  <NamedSection name="Контакты">
    <HStack justify="center" gap="10">
      <VStack alignItems="stretch" gap="5">
        <Box>
          <Heading as="h3" size="lg">
            Адрес
          </Heading>
          <Text>г. Иннополис, ...</Text>
        </Box>
        <Box>
          <Heading as="h3" size="lg">
            Email
          </Heading>
          <Text>lodestar@please-replace-this-domain.com</Text>
        </Box>
        <Box>
          <Heading as="h3" size="lg">
            Телефон
          </Heading>
          <Text>+79876543210</Text>
        </Box>
        <Box>
          <Heading as="h3" size="lg">
            Социальные сети
          </Heading>
          <Text>....</Text>
        </Box>
      </VStack>
      <Image src="/img/map.png" />
    </HStack>
  </NamedSection>
);

export default Contact;
