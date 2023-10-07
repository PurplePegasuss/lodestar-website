import { Box, Center, IconButton } from '@chakra-ui/react';
import { ReactNode, useCallback, useRef } from 'react';
import WideArrow from '../../../components/wide_arrow';

const VideoIntroduction = ({ children }: { children: ReactNode }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  const scrollToContent = useCallback(
    () =>
      bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' }),
    [],
  );

  return (
    <Center marginTop="-32" position="relative" height="100svh" overflow="clip" background="black">
      <Box ref={bottomRef} position="absolute" top="100%" />
      <Center position="absolute" insetX="0" bottom="5" padding="5" zIndex="1">
        <IconButton
          _hover={{ color: 'logo.red' }}
          height="10"
          overflow="clip"
          onClick={scrollToContent}
          variant="link"
          icon={<WideArrow boxSize="32" />}
          aria-label="Scroll down"
        />
      </Center>
      <Center height="100%" position="relative">
        <Box
          position="absolute"
          width="100%"
          aspectRatio="2540/1640"
          boxShadow="inset 0 0 1em 1em black"
        />
        <Box as="video" autoPlay muted loop disablePictureInPicture maxHeight="100%">
          {children}
        </Box>
      </Center>
    </Center>
  );
};
export default VideoIntroduction;
