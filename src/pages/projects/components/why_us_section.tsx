import { ListItem, UnorderedList } from '@chakra-ui/react';
import NamedSection from '../../../components/layout/named_section';

const WhyUsSection = () => (
  <NamedSection name="Почему мы?">
    <UnorderedList>
      <ListItem>мы крутые иннополисяне</ListItem>
      <ListItem>мы отечественные патриоты и вообще</ListItem>
    </UnorderedList>
  </NamedSection>
);

export default WhyUsSection;
