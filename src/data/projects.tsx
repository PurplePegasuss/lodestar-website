export interface Project {
  slug: string;
  name: string;
  short_description: string;
  long_description: string;
  features: string[];
  photos: string[];
}

const projects: Project[] = [
  {
    name: 'Название проекта',
    short_description: `Описание продукта типа он вот такой крутой и вообще и вот в общем-то что еще
                  сказать-то ну вот оно умеет работать а что еще надо`,
    long_description:
      'Описание продукта типа он вот такой крутой и вообще и вот в общем-то что еще сказать-то ну вот оно умеет работать а что еще надо ну а вообще тут можно еще много теста поэтому просто скопипащу все что есть сейчас. Описание продукта типа он вот такой крутой и вообще и вот в общем-то что еще сказать-то ну вот оно умеет работать а что еще надо ну а вообще тут можно еще много теста поэтому просто скопипащу все что есть сейчас. Описание продукта типа он вот такой крутой и вообще и вот в общем-то что еще сказать-то ну вот оно умеет работать а что еще надо ну а вообще тут можно еще много теста поэтому просто скопипащу все что есть сейчас. Описание продукта типа он вот такой крутой и вообще и вот в общем-то что еще сказать-то ну вот оно умеет работать а что еще надо ну а вообще тут можно еще много теста поэтому просто скопипащу все что есть сейчас.',
    features: ['колесики', 'лидар', 'смотрит', 'ездит', 'ориентируется'],
    photos: [],
    slug: 'car',
  },
  {
    name: 'Project 2',
    short_description: `Описание продукта типа он вот такой крутой и вообще и вот в общем-то что еще
                  сказать-то ну вот оно умеет работать а что еще надо`,
    long_description:
      'Описание продукта типа он вот такой крутой и вообще и вот в общем-то что еще сказать-то ну вот оно умеет работать а что еще надо ну а вообще тут можно еще много теста поэтому просто скопипащу все что есть сейчас. Описание продукта типа он вот такой крутой и вообще и вот в общем-то что еще сказать-то ну вот оно умеет работать а что еще надо ну а вообще тут можно еще много теста поэтому просто скопипащу все что есть сейчас. Описание продукта типа он вот такой крутой и вообще и вот в общем-то что еще сказать-то ну вот оно умеет работать а что еще надо ну а вообще тут можно еще много теста поэтому просто скопипащу все что есть сейчас. Описание продукта типа он вот такой крутой и вообще и вот в общем-то что еще сказать-то ну вот оно умеет работать а что еще надо ну а вообще тут можно еще много теста поэтому просто скопипащу все что есть сейчас.',
    features: ['лазер', 'сканирует'],
    photos: ['/logo.svg', '/logo.svg', '/logo.svg'],
    slug: 'scanner',
  },
];

export default projects;
