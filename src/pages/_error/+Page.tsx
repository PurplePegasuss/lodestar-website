import { Icon, Link, Text, VStack } from '@chakra-ui/react';
import { MdArrowForward } from 'react-icons/md/index';

const NotFound = ({ is404 }: { is404: boolean }) => (
  <VStack marginBottom="10">
    {is404 ? (
      <>
        <Text fontFamily="mono" fontSize="9xl">
          404
        </Text>
        <Text>Такой страницы нет</Text>
      </>
    ) : (
      <>
        <Text>Ошибка.</Text>
        <Text>Что-то пошло не так.</Text>
      </>
    )}
    <Link href="/" color="red.300">
      <Text as="span">На главную</Text>
      <Icon marginLeft="1" as={MdArrowForward} display="inline-block" verticalAlign="middle" />
    </Link>
  </VStack>
);

export default NotFound;
