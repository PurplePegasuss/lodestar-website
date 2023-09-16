import { VStack } from '@chakra-ui/react';
import ProjectCard from '../../components/project_card';
import NamedSection from '../../components/layout/named_section';
import projects from '../../data/projects';

const Projects = () => (
  <NamedSection name="Проекты">
    <VStack spacing="20">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </VStack>
  </NamedSection>
);

export default Projects;
