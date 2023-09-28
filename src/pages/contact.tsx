import { Box, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import NamedSection from '../components/layout/named_section';
import { DefaultEmailLink } from '../components/contacts/email';
import { DefaultPhoneLink } from '../components/contacts/phone';

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
          <DefaultEmailLink />
        </Box>
        <Box>
          <Heading as="h3" size="lg">
            Телефон
          </Heading>
          <DefaultPhoneLink />
        </Box>
        <Box>
          <Heading as="h3" size="lg">
            Социальные сети
          </Heading>
          <Text>....</Text>
        </Box>
      </VStack>
      <Image src="/media/map.png" />
    </HStack>
  </NamedSection>
);

export default Contact;
