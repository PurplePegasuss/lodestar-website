import { Button, Center, HStack } from '@chakra-ui/react';
import { MdArrowForward } from 'react-icons/md';
import ProjectCard from '../../components/project_card';
import NamedSection from '../../components/layout/named_section';
import TeamMemberPhoto from './components/team_member_photo';
import RouteLink from '../../components/routelink';
import projects from '../../data/projects';
import VideoIntroduction from './components/video_introduction';

const Home = () => (
  <>
    <VideoIntroduction>
      <source src="/media/render.webm" type="video/webm" />
      <source src="/media/render.mp4" type="video/mp4" />
    </VideoIntroduction>
    <HStack spacing="0">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </HStack>
    <NamedSection name="Команда">
      <HStack spacing="10">
        <TeamMemberPhoto photo_url="/media/logo.svg" />
        <TeamMemberPhoto photo_url="/media/logo.svg" />
        <TeamMemberPhoto photo_url="/media/logo.svg" />
        <TeamMemberPhoto photo_url="/media/logo.svg" />
        <TeamMemberPhoto photo_url="/media/logo.svg" />
      </HStack>
      <Center margin="10">
        <Button
          as={RouteLink}
          to="/about"
          alignSelf="end"
          rightIcon={<MdArrowForward />}
          colorScheme="red"
        >
          Подробнее
        </Button>
      </Center>
    </NamedSection>
    <NamedSection name="Партнеры">
      <HStack spacing="10">
        <TeamMemberPhoto photo_url="/media/logo.svg" />
        <TeamMemberPhoto photo_url="/media/logo.svg" />
        <TeamMemberPhoto photo_url="/media/logo.svg" />
        <TeamMemberPhoto photo_url="/media/logo.svg" />
      </HStack>
    </NamedSection>
  </>
);

export default Home;
