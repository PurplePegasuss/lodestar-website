import { Center, HStack, Image, Text } from '@chakra-ui/react';
import Project from './project';

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
  </>
);

export default Home;
