import { useEffect, useMemo } from 'react';
import { Box, BoxProps, forwardRef } from '@chakra-ui/react';
import { Transition, useAnimate } from 'framer-motion';
import useCarouselState from './use_carousel_state';
import CarouselSlider from './slider';
import CarouselControls from './controls';

const transition: Transition = {
  type: 'tween',
  duration: 0.2,
  ease: 'anticipate',
};

const Carousel = forwardRef<Omit<BoxProps, 'children'> & { photos: string[] }, 'div'>(
  ({ photos, ...props }, ref) => {
    const [animationScope, animate] = useAnimate();
    const { state, goBack, goForward } = useCarouselState({ count: photos.length });

    const lastItemOffset = useMemo(() => `-${(photos.length + 1) * 100}%`, [photos.length]);

    useEffect(() => {
      if (animationScope.current === null) {
        return;
      }

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
        {photos.length > 0 && <CarouselControls onBack={goBack} onForward={goForward} />}
        <CarouselSlider ref={animationScope} photos={photos} />
      </Box>
    );
  },
);

Carousel.displayName = 'Carousel';

export default Carousel;
