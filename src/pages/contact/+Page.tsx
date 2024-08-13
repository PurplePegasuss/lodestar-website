import { Box, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react';
import NamedSection from '../../components/layout/named_section';
import { DefaultEmailLink } from '../../components/contacts/email';
import { DefaultPhoneLink } from '../../components/contacts/phone';

const Contact = () => (
  <NamedSection name="Контакты">
    <HStack flexWrap="wrap" justify="center" gap="10">
      <VStack alignItems="stretch" gap="5">
        <Box>
          <Heading as="h3" size="lg">
            Адрес
          </Heading>
          <Text> 420500, Республика Татарстан (Татарстан), м.р-н Верхнеуслонский, г.п. город Иннополис, г Иннополис, ул. Университетская, д. 5, помещ. 115, рабочее место 13/3. </Text>
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
          <Text> По запросу </Text>
        </Box>
        <Box>
          <Heading as="h3" size="lg">
            Социальные сети
          </Heading>
          <Text>lodestar-website.vercel.app</Text>
        </Box>
      </VStack>
      <Image src="/media/map.png" />
    </HStack>
  </NamedSection>
);

export default Contact;
