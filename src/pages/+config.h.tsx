import vikeReact from 'vike-react';
import type { Config } from 'vike/types';
import Head from './layout/Head';
import Body from './layout/Body';

export default {
  Layout: Body,
  Head,
  title: 'Lodestar',
  favicon: '/favicon.ico',
  extends: vikeReact,
  clientRouting: true,
  prerender: true,
} satisfies Config;
