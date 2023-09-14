import { Box, Container, ContainerProps, Heading, HeadingProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface NamedSectionProps {
  name: string;
  maxWidth?: ContainerProps['maxWidth'];
  headingSize?: HeadingProps['size'];
  children: ReactNode;
}

const NamedSection = ({ name, maxWidth, headingSize, children }: NamedSectionProps) => (
  <Container marginY="10" maxWidth={maxWidth || 'container.lg'} as="section">
    <Heading textAlign="center" textTransform="uppercase" size={headingSize} marginBottom="5">
      {name}
    </Heading>
    <Box>{children}</Box>
  </Container>
);

export default NamedSection;
