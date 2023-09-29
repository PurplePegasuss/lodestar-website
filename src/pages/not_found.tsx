import { Icon, Text, VStack } from '@chakra-ui/react';
import { MdArrowForward } from 'react-icons/md';
import RouteLink from '../components/routelink';

const NotFound = () => (
  <VStack marginBottom="10">
    <Text fontFamily="mono" fontSize="9xl">
      404
    </Text>
    <Text>Такой страницы нет</Text>
    <RouteLink to="/" color="red.300">
      <Text as="span">На главную</Text>
      <Icon marginLeft="1" as={MdArrowForward} display="inline-block" verticalAlign="middle" />
    </RouteLink>
  </VStack>
);

export default NotFound;
