import { Button, Center, HStack, Image, Text } from '@chakra-ui/react';
import { MdArrowForward } from 'react-icons/md';
import Project from './project';
import NamedSection from '../../components/layout/named_section';
import TeamMemberPhoto from './team_member_photo';
import RouteLink from '../../components/routelink';

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
      <Image src="/logo.svg" width="30%" />
      <Text>Тут видос должен быть</Text>
    </Center>
    <HStack spacing="0">
      <Project
        name="Название проекта"
        description={`Описание продукта типа он вот такой крутой и вообще и вот в общем-то что еще
                      сказать-то ну вот оно умеет работать а что еще надо`}
        photo_url="/logo.svg"
        url="/projects/1"
      />
      <Project
        name="Project 2"
        description={`Описание продукта типа он вот такой крутой и вообще и вот в общем-то что еще
                      сказать-то ну вот оно умеет работать а что еще надо`}
        photo_url="/logo.svg"
        url="/projects/2"
      />
    </HStack>
    <NamedSection name="Команда">
      <HStack spacing="10">
        <TeamMemberPhoto photo_url="/logo.svg" />
        <TeamMemberPhoto photo_url="/logo.svg" />
        <TeamMemberPhoto photo_url="/logo.svg" />
        <TeamMemberPhoto photo_url="/logo.svg" />
        <TeamMemberPhoto photo_url="/logo.svg" />
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
        <TeamMemberPhoto photo_url="/logo.svg" />
        <TeamMemberPhoto photo_url="/logo.svg" />
        <TeamMemberPhoto photo_url="/logo.svg" />
        <TeamMemberPhoto photo_url="/logo.svg" />
      </HStack>
    </NamedSection>
  </>
);

export default Home;
