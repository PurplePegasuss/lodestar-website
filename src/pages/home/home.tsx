import { Button, Center, HStack, Image, Text } from '@chakra-ui/react';
import { MdArrowForward } from 'react-icons/md';
import ProjectCard from '../../components/project_card';
import NamedSection from '../../components/layout/named_section';
import TeamMemberPhoto from './components/team_member_photo';
import RouteLink from '../../components/routelink';
import projects from '../../data/projects';

const Home = () => (
  <>
    <Center
      flexDirection="column"
      width="100%"
      padding="20"
      borderWidth="2px"
      borderColor="logo.red"
      borderStyle="solid"
    >
      <Image src="/img/logo.svg" width="30%" />
      <Text>Тут видос должен быть</Text>
    </Center>
    <HStack spacing="0">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </HStack>
    <NamedSection name="Команда">
      <HStack spacing="10">
        <TeamMemberPhoto photo_url="/img/logo.svg" />
        <TeamMemberPhoto photo_url="/img/logo.svg" />
        <TeamMemberPhoto photo_url="/img/logo.svg" />
        <TeamMemberPhoto photo_url="/img/logo.svg" />
        <TeamMemberPhoto photo_url="/img/logo.svg" />
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
        <TeamMemberPhoto photo_url="/img/logo.svg" />
        <TeamMemberPhoto photo_url="/img/logo.svg" />
        <TeamMemberPhoto photo_url="/img/logo.svg" />
        <TeamMemberPhoto photo_url="/img/logo.svg" />
      </HStack>
    </NamedSection>
  </>
);

export default Home;
