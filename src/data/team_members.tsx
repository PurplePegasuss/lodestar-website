export interface TeamMember {
  name: string;
  position: string;
  description: string;
  photo: string;
}

const team_members: TeamMember[] = [
  {
    name: 'Глинский Кирилл',
    position: 'Генеральный директор',
    description: 'Руководит производственно-хозяйственной и финансово-экономической деятельностью стартапа. Также отвечает за имплементацию системы навигации на базе системы ROS.',
      photo: '/media/kirill.jpg',
  },
  {
    name: 'Бугуев Антон',
    position: 'Инженер-разработчик',
    description: 'Реализует алгоритмы локализации и картографирования, интегрирует аппаратное обеспечение в ROS-систему, работает с xacro, urdf файлами, занимается дизайном 3D моделей.',    
    photo: '/media/anton.jpg',
  },
  {
    name: 'Кованова Елизавета',
    position: 'Инженер-разработчик',
    description: 'Реализует алгоритмы компьютерного зрения на базе ROS с использованием лидара.',    
    photo: '/media/elizaveta.jpg',
  },
  {
    name: 'Назаров Артём',
    position: 'Инженер-разработчик',
    description: 'Реализует алгоритмы компьютерного зрения на базе ROS с использованием камер.',    
    photo: '/media/artem.jpg',
  },
];

export default team_members;
