import { HStack } from '@chakra-ui/react';
import ProjectCard from '../../components/project_card';
import NamedSection from '../../components/layout/named_section';
import projects from '../../data/projects';

const Projects = () => (
  <NamedSection name="Проекты">
    <HStack spacing="10" flexWrap="wrap" alignItems="stretch">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </HStack>
  </NamedSection>
);

export default Projects;
