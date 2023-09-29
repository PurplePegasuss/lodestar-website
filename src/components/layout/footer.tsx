import { Link, Spacer, Stack, Text, VStack } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';
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
      <Link as={RouteLink} to="/">
        Главная
      </Link>
      <Link as={RouteLink} to="/projects">
        Проекты
      </Link>
      <Link as={RouteLink} to="/about">
        О компании
      </Link>
      <Link as={RouteLink} to="/contact">
        Контакты
      </Link>
    </Stack>
  </Stack>
);

export default Footer;
