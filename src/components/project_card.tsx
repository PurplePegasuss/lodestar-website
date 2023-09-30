import {
  Center,
  Heading,
  Icon,
  Image,
  LinkBox,
  LinkOverlay,
  SlideFade,
  Text,
  VStack,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { MdArrowForward } from 'react-icons/md';
import RouteLink from './routelink';
import { type Project } from '../data/projects';

const ProjectCard = ({
  project: {
    name,
    short_description: description,
    photos: [photo_url],
    slug,
  },
}: {
  project: Project;
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [canHover] = useMediaQuery('(hover: hover) and (pointer: fine)');

  return (
    <LinkBox
      position="relative"
      onPointerEnter={onOpen}
      onPointerLeave={onClose}
      flex="1"
      minWidth={{ base: '100%', md: 'auto' }}
    >
      {photo_url ? (
        <Image src={photo_url} width="100%" />
      ) : (
        <Center minHeight="96">
          <Text>Нет фотографий</Text>
        </Center>
      )}
      <VStack
        position={canHover ? 'absolute' : 'initial'}
        inset="0"
        padding={10}
        alignItems="left"
        justifyContent="end"
        as={SlideFade}
        in={!canHover || isOpen}
        background="linear-gradient(#0000 30%, #191718)"
      >
        <Heading>{name}</Heading>
        <Text>{description}</Text>
        <LinkOverlay
          as={RouteLink}
          to={`/projects/${slug}`}
          alignSelf="end"
          fontSize="lg"
          color="red.300"
        >
          <Text as="span">Подробнее</Text>
          <Icon as={MdArrowForward} display="inline-block" verticalAlign="middle" />
        </LinkOverlay>
      </VStack>
    </LinkBox>
  );
};

export default ProjectCard;
