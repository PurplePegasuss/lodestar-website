import { useCallback, useEffect, useRef } from 'react';
import { Box, BoxProps, HStack, IconButton, forwardRef } from '@chakra-ui/react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { Transition, useAnimate } from 'framer-motion';
import CarouselItem from './carousel_item';
import useCarouselState from './use_carousel_state';

const transition: Transition = {
  type: 'tween',
  duration: 0.2,
  ease: 'anticipate',
};

const Carousel = forwardRef<Omit<BoxProps, 'children'> & { photos: string[] }, 'div'>(
  ({ photos, ...props }, ref) => {
    const offsets = useRef<number[]>([]);
    const [animationScope, animate] = useAnimate();
    const {
      state: { step, crossedBoundary },
      goBack,
      goForward,
    } = useCarouselState({ count: photos.length });

    const pushOffset = useCallback((offset: number) => offsets.current.push(-offset), []);

    useEffect(() => {
      const value = offsets.current.at(step + 1);
      if (value === undefined) {
        return;
      }
      if (!crossedBoundary) {
        animate(animationScope.current, { x: value }, transition);
        return;
      }
      if (step === 0) {
        animate(animationScope.current, { x: offsets.current.at(-1) }, transition).then(() =>
          animate(
            animationScope.current,
            { x: offsets.current.at(1) },
            { ...transition, duration: 0 },
          ),
        );
        return;
      }
      animate(animationScope.current, { x: offsets.current.at(0) }, transition).then(() =>
        animate(
          animationScope.current,
          { x: offsets.current.at(-2) },
          { ...transition, duration: 0 },
        ),
      );
    }, [animate, animationScope, crossedBoundary, photos.length, step]);

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
          <CarouselItem photo={photos.at(-1) as string} onMount={pushOffset} />
          {photos.map((photo, i) => (
            <CarouselItem
              photo={photo}
              onMount={pushOffset}
              // eslint-disable-next-line react/no-array-index-key
              key={i}
            />
          ))}
          <CarouselItem photo={photos.at(0) as string} onMount={pushOffset} />
        </HStack>
      </Box>
    );
  },
);

export default Carousel;
