import {
  Button,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  SlideFade,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { MdArrowForward } from 'react-icons/md';
import RouteLink from '../../components/routelink';

const Project = ({
  name,
  description,
  photo_url,
  url,
}: {
  name: string;
  description: string;
  photo_url: string;
  url: string;
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <LinkBox
      as={RouteLink}
      to={url}
      position="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      flex="1"
    >
      <LinkOverlay />
      <Image src={photo_url} width="100%" />
      <VStack
        position="absolute"
        inset="0"
        padding={10}
        alignItems="left"
        justifyContent="end"
        as={SlideFade}
        in={isOpen}
        background="linear-gradient(#0000 30%, #191718)"
      >
        <Heading>{name}</Heading>
        <Text>{description}</Text>
        <Button alignSelf="end" rightIcon={<MdArrowForward />} colorScheme="red">
          Подробнее
        </Button>
      </VStack>
    </LinkBox>
  );
};

export default Project;
