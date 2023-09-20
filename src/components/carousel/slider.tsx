import { BoxProps, Center, HStack, Image, Text, forwardRef } from '@chakra-ui/react';
import { memo } from 'react';

/* eslint-disable react/jsx-props-no-spreading */
const CarouselSlider = memo(
  forwardRef<Omit<BoxProps, 'children'> & { photos: string[] }, 'div'>(
    ({ photos, ...props }, ref) => {
      if (photos.length === 0) {
        return (
          <Center height="100%" {...props}>
            <Text>Нет фотографий</Text>
          </Center>
        );
      }
      return (
        <HStack spacing={0} ref={ref} height="100%" {...props}>
          {[photos.at(-1), ...photos, photos.at(0)].map((photo, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Center flex="1 0 100%" height="100%" key={i}>
              <Image src={photo} height="100%" draggable="false" />
            </Center>
          ))}
        </HStack>
      );
    },
  ),
);

CarouselSlider.displayName = 'CarouselSlider';

export default CarouselSlider;
