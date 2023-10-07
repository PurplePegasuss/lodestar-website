import { Link, Spacer, Stack, Text, VStack } from '@chakra-ui/react';
import { DefaultEmailLink } from '../contacts/email';

const Footer = () => (
  <Stack
    direction={{ base: 'column', sm: 'row' }}
    spacing="10"
    padding="10"
    bgColor="logo.dark"
    alignItems="stretch"
  >
    <VStack alignItems="start">
      <Text>
        ООО «Путеводная Звезда»
        <br />
        ИНН 1234567890
      </Text>
      <Spacer />
      <DefaultEmailLink />
    </VStack>
    <Stack
      flexWrap="wrap"
      whiteSpace="nowrap"
      columnGap="6"
      direction={{ base: 'row', sm: 'column' }}
      justifyContent={{ base: 'start', sm: 'start' }}
      alignItems="start"
    >
      <Link href="/">Главная</Link>
      <Link href="/projects">Проекты</Link>
      <Link href="/about">О компании</Link>
      <Link href="/contact">Контакты</Link>
    </Stack>
  </Stack>
);

export default Footer;
