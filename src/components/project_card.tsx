import { useContext, useRef } from 'react';
import { useInView } from 'framer-motion';
import {
  Box,
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
} from '@chakra-ui/react';
import { MdArrowForward } from 'react-icons/md/index';
import { type Project } from '../data/projects';
import { LayoutContext } from './layout/layout';

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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const { supportsHover } = useContext(LayoutContext);

  return (
    <LinkBox
      position="relative"
      onPointerEnter={onOpen}
      onPointerLeave={onClose}
      flex="1"
      minWidth={{ base: '100%', md: 'auto' }}
    >
      <Box position="relative" ref={ref}>
        {photo_url ? (
          <Image src={photo_url} width="100%" />
        ) : (
          <Center minHeight="36" height="100%">
            <Text>Нет фотографий</Text>
          </Center>
        )}
        <Center
          position="absolute"
          inset="0"
          opacity={(supportsHover && isOpen) || isInView ? 1 : 0}
          transition="opacity 1s"
        >
          <Box width="80%" boxShadow="0 0 1em 1em rgba(255, 200, 0, 0.6)" />
        </Center>
      </Box>
      <VStack
        position={supportsHover ? 'absolute' : 'initial'}
        inset="0"
        padding={10}
        alignItems="left"
        justifyContent="end"
        as={SlideFade}
        in={!supportsHover || isOpen}
        background="linear-gradient(#0000 30%, #191718)"
      >
        <Heading>{name}</Heading>
        <Text>{description}</Text>
        <LinkOverlay href={`/projects/${slug}`} alignSelf="end" fontSize="lg" color="red.300">
          <Text as="span">Подробнее</Text>
          <Icon as={MdArrowForward} display="inline-block" verticalAlign="middle" />
        </LinkOverlay>
      </VStack>
    </LinkBox>
  );
};

export default ProjectCard;
