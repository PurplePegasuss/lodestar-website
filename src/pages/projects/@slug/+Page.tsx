import { useMemo } from 'react';
// wtf is this error
// eslint-disable-next-line import/no-unresolved
import { usePageContext } from 'vike-react/usePageContext';
import { render } from 'vike/abort';
import type { PageContext } from 'vike/types';
import { ListItem, Text, UnorderedList } from '@chakra-ui/react';
import NamedSection from '../../../components/layout/named_section';
import projects from '../../../data/projects';
import WhyUsSection from '../components/why_us_section';
import OrderSection from '../components/order_section';
import Carousel from '../../../components/carousel/carousel';

const Project = () => {
  const pageContext = usePageContext() as PageContext;

  const slug = useMemo(() => pageContext.routeParams?.slug, [pageContext]);

  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);
  if (project === undefined) {
    throw render(404);
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
