import { useEffect, useMemo } from 'react';
import { Box, BoxProps, Center, HStack, IconButton, Image, forwardRef } from '@chakra-ui/react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { Transition, useAnimate } from 'framer-motion';
import useCarouselState from './use_carousel_state';

const transition: Transition = {
  type: 'tween',
  duration: 0.2,
  ease: 'anticipate',
};

// TODO: check for 0 photos and handle window resize event

const Carousel = forwardRef<Omit<BoxProps, 'children'> & { photos: string[] }, 'div'>(
  ({ photos, ...props }, ref) => {
    const [animationScope, animate] = useAnimate();
    const { state, goBack, goForward } = useCarouselState({ count: photos.length });

    const lastItemOffset = useMemo(() => `-${(photos.length + 1) * 100}%`, [photos.length]);

    useEffect(() => {
      const value = `-${(state.step + 1) * 100}%`;
      if (state.crossedBoundary === null) {
        animate(animationScope.current, { x: value }, transition);
        return;
      }
      if (state.crossedBoundary === 'right') {
        animate(animationScope.current, { x: lastItemOffset }, transition).then(() =>
          animate(animationScope.current, { x: '-100%' }, { ...transition, duration: 0 }),
        );
        return;
      }
      animate(animationScope.current, { x: '0%' }, transition).then(() =>
        animate(animationScope.current, { x: value }, { ...transition, duration: 0 }),
      );
    }, [animate, animationScope, state, lastItemOffset]);

    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Box ref={ref} position="relative" overflow="hidden" {...props}>
        <HStack
          position="absolute"
          inset="0"
          justify="space-between"
          zIndex="1"
          pointerEvents="none"
        >
          <IconButton
            aria-label="Previous"
            icon={<MdArrowBack />}
            onClick={goBack}
            pointerEvents="all"
          />
          <IconButton
            aria-label="Next"
            icon={<MdArrowForward />}
            onClick={goForward}
            pointerEvents="all"
          />
        </HStack>
        <HStack spacing={0} ref={animationScope} height="100%">
          {[photos.at(-1), ...photos, photos.at(0)].map((photo, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Center flex="1 0 100%" height="100%" key={i}>
              <Image src={photo} height="100%" draggable="false" />
            </Center>
          ))}
        </HStack>
      </Box>
    );
  },
);

Carousel.displayName = 'Carousel';

export default Carousel;
