import projects from '../../../data/projects';

const onBeforePrerenderStart = () => projects.map(({ slug }) => `/projects/${slug}`);

export default onBeforePrerenderStart;
