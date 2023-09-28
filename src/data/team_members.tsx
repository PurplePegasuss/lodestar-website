export interface TeamMember {
  name: string;
  position: string;
  description: string;
  photo: string;
}

const team_members: TeamMember[] = [
  {
    name: 'Несуществующая Девушка',
    position: 'Оператор колл-центра',
    description:
      'Возможно она и существует, но она работает из дома, поэтому мы не можем быть уверены, что она не написала нейросеть которая работает вместо нее.',
    photo: '/media/logo.svg',
  },
  {
    name: 'Точно-не Билл-Гейтс',
    position: 'Оператор-монтажер',
    description:
      'В 20 лет спиратил Sony Vegas и открыл канал на YouTube, на деньги с рекламы купил себе профессиональную камеру и теперь делает нам контент',
    photo: '/media/logo.svg',
  },
];

export default team_members;
