import { Box, Center, Icon, IconButton } from '@chakra-ui/react';
import { ReactNode, useCallback, useRef } from 'react';
import { BsChevronCompactDown } from 'react-icons/bs';

const VideoIntroduction = ({ children }: { children: ReactNode }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToContent = useCallback(
    () =>
      bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' }),
    [],
  );

  return (
    <Center marginTop="-32" position="relative" maxHeight="100vh" overflow="clip">
      <Box ref={bottomRef} position="absolute" top="100%" />
      <Center position="absolute" insetX="0" bottom="5" padding="5" zIndex="1">
        <IconButton
          _hover={{ color: 'logo.red' }}
          height="10"
          overflow="hidden"
          onClick={scrollToContent}
          variant="link"
          icon={<Icon as={BsChevronCompactDown} boxSize="32" />}
          aria-label="Scroll down"
        />
      </Center>
      <Box as="video" autoPlay muted loop disablePictureInPicture>
        {children}
      </Box>
    </Center>
  );
};
export default VideoIntroduction;
