import { Button, Center, HStack, Link } from '@chakra-ui/react';
import { MdArrowForward } from 'react-icons/md/index';
import ProjectCard from '../../components/project_card';
import NamedSection from '../../components/layout/named_section';
import projects from '../../data/projects';
import VideoIntroduction from './components/video_introduction';
import Partners from './components/partners';
import Team from './components/team';

const Home = () => (
  <>
    <VideoIntroduction>
      <source src="/media/render.webm" type="video/webm" />
      <source src="/media/render.mp4" type="video/mp4" />
    </VideoIntroduction>
    <HStack spacing="0" flexWrap="wrap" alignItems="stretch">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </HStack>
    <NamedSection name="Команда">
      <Team />
      <Center margin="10">
        <Button
          as={Link}
          href="/about"
          alignSelf="end"
          rightIcon={<MdArrowForward />}
          colorScheme="red"
        >
          Подробнее
        </Button>
      </Center>
    </NamedSection>
    <NamedSection name="Партнеры">
      <Partners />
    </NamedSection>
  </>
);

export default Home;
