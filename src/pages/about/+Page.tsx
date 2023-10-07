import { Text, VStack } from '@chakra-ui/react';
import NamedSection from '../../components/layout/named_section';
import TeamMember from './components/team_member';
import team_members from '../../data/team_members';

const About = () => (
  <>
    <Text textAlign="center">Тут бы фото/видео</Text>
    <NamedSection name="О Lodestar">
      Описание команды такой крутой и вообще и вот в общем-то что еще сказать-то ну вот мы все
      молодцы а что еще надо ну а вообще тут можно еще много теста поэтому просто скопипащу все что
      есть сейчас. Описание команды такой крутой и вообще и вот в общем-то что еще сказать-то ну вот
      мы все молодцы а что еще надо ну а вообще тут можно еще много теста поэтому просто скопипащу
      все что есть сейчас. Описание команды такой крутой и вообще и вот в общем-то что еще
      сказать-то ну вот мы все молодцы а что еще надо ну а вообще тут можно еще много теста поэтому
      просто скопипащу все что есть сейчас. Описание команды такой крутой и вообще и вот в общем-то
      что еще сказать-то ну вот мы все молодцы а что еще надо ну а вообще тут можно еще много теста
      поэтому просто скопипащу все что есть сейчас.
    </NamedSection>
    <NamedSection name="Наша команда">
      <VStack spacing="5">
        {team_members.map((member, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <TeamMember member={member} key={i} />
        ))}
      </VStack>
    </NamedSection>
  </>
);

export default About;
