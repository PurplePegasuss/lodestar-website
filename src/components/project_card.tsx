import {
  Heading,
  Icon,
  Image,
  LinkBox,
  LinkOverlay,
  SlideFade,
  Text,
  VStack,
  useDisclosure,
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
  return (
    <LinkBox position="relative" onMouseEnter={onOpen} onMouseLeave={onClose} width="100%">
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
