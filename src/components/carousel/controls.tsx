import { memo } from 'react';
import { HStack, IconButton } from '@chakra-ui/react';
// React icons won't import on build without "index"
import { MdArrowBack, MdArrowForward } from 'react-icons/md/index';

const CarouselControls = memo(
  ({ onBack, onForward }: { onBack: () => void; onForward: () => void }) => (
    <HStack position="absolute" inset="0" justify="space-between" zIndex="1" pointerEvents="none">
      <IconButton
        aria-label="Previous"
        icon={<MdArrowBack />}
        onClick={onBack}
        pointerEvents="all"
      />
      <IconButton
        aria-label="Next"
        icon={<MdArrowForward />}
        onClick={onForward}
        pointerEvents="all"
      />
    </HStack>
  ),
);

CarouselControls.displayName = 'CarouselControls';

export default CarouselControls;
