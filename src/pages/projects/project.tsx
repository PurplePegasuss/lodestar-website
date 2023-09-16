import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Center, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import NamedSection from '../../components/layout/named_section';
import projects from '../../data/projects';
import NotFound from '../not_found';
import WhyUsSection from './components/why_us_section';
import OrderSection from './components/order_section';

const Project = () => {
  const { slug } = useParams();

  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);
  if (project === undefined) {
    return <NotFound />;
  }
  return (
    <>
      <Center flexDirection="column" width="100%">
        <Image src={project.photos[0]} width="100%" />
        <Text>Тут будет карусель</Text>
      </Center>
      <NamedSection name={project.name}>
        <Text>{project.long_description}</Text>
      </NamedSection>
      <NamedSection name="Особенности">
        <UnorderedList>
          {project.features.map((feature) => (
            <ListItem key={feature}>{feature}</ListItem>
          ))}
        </UnorderedList>
      </NamedSection>
      <WhyUsSection />
      <OrderSection project_slug={project.slug} />
    </>
  );
};

export default Project;
