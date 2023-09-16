import { Center, Image } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

const CarouselItem = ({
  photo,
  onMount: onLoad,
}: {
  photo: string;
  onMount: (offset: number) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (node === null) {
      return;
    }
    onLoad(node.offsetLeft);
  }, [onLoad]);
  return (
    <Center ref={ref} flex="1 0 100%" height="100%">
      <Image src={photo} height="100%" draggable="false" />
    </Center>
  );
};

export default CarouselItem;
