import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { ListItem, Text, UnorderedList } from '@chakra-ui/react';
import NamedSection from '../../components/layout/named_section';
import projects from '../../data/projects';
import NotFound from '../not_found';
import WhyUsSection from './components/why_us_section';
import OrderSection from './components/order_section';
import Carousel from '../../components/carousel/carousel';

const Project = () => {
  const { slug } = useParams();

  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);
  if (project === undefined) {
    return <NotFound />;
  }
  return (
    <>
      <Carousel photos={project.photos} height="96" />
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
