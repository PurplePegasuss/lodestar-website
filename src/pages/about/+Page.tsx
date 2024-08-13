import { Text, VStack } from '@chakra-ui/react';
import NamedSection from '../../components/layout/named_section';
import TeamMember from './components/team_member';
import team_members from '../../data/team_members';

const About = () => (
  <>
    <Image src="/media/lodestar_team.jpg"/>
    <NamedSection name="О Lodestar">
    Наша команда объединяет высококвалифицированных специалистов, каждый из которых играет ключевую роль в развитии стартапа.
    Руководитель команды отвечает за производственно-хозяйственную и финансово-экономическую деятельность компании, а также за внедрение 
    системы навигации на базе ROS. Инженеры-разработчики реализуют алгоритмы локализации и картографирования, интегрируют аппаратное 
    обеспечение в ROS-систему, работают с файлами xacro и urdf, занимаются дизайном 3D моделей, а также создают алгоритмы компьютерного 
    зрения с использованием лидара и камер. Команда разрабатывает системы управления мобильными роботами, которые обеспечивают контроль 
    за движением, обмен информацией, визуальное распознавание объектов и интеграцию различных технологий, включая GPS-навигацию, машинное 
    зрение и сенсоры для определения расстояния и скорости.
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
