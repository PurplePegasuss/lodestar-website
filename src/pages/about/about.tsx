import { Text, VStack } from '@chakra-ui/react';
import NamedSection from '../../components/layout/named_section';
import TeamMember from './components/team_member';

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
        <TeamMember
          name="Несуществующая Девушка"
          position="Оператор колл-центра"
          description={`Возможно она и существует, но она работает из дома, поэтому мы не можем быть уверены, 
                      что она не написала нейросеть которая работает вместо нее.`}
          photo_url="/logo.svg"
        />
        <TeamMember
          name="Точно-не Билл-Гейтс"
          position="Оператор-монтажер"
          description={`В 20 лет спиратил Sony Vegas и открыл канал на YouTube, на деньги с рекламы купил себе 
                      профессиональную камеру и теперь делает нам контент`}
          photo_url="/logo.svg"
        />
      </VStack>
    </NamedSection>
  </>
);

export default About;