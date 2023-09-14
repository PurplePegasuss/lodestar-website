import { extendTheme, type ThemeConfig, type Colors } from '@chakra-ui/react';
import '@fontsource/source-sans-pro/400-italic.css';
import '@fontsource/source-sans-pro/400.css';
import '@fontsource/source-sans-pro/700.css';
import '@fontsource/source-code-pro/400.css';
import '@fontsource/oswald/400.css';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const colors: Colors = {
  gray: {
    bg: '#191718',
    50: '#fbf0f2',
    100: '#dcd8d9',
    200: '#bfbfbf',
    300: '#a6a6a6',
    400: '#8c8c8c',
    500: '#737373',
    600: '#595959',
    700: '#404040',
    800: '#282626',
    900: '#150a0d',
  },
  red: {
    50: '#ffe5e7',
    100: '#fbbabf',
    200: '#f18e95',
    300: '#ea626d',
    400: '#e33643',
    500: '#c91c29',
    600: '#9d141f',
    700: '#710d16',
    800: '#46050c',
    900: '#1e0002',
  },
  logo: {
    dark: '#333333',
    main: '#595959',
    light: '#e6e7e9',
    red: '#db1f2d',
  },
};

const fonts = {
  heading: "'Oswald', Arial, Helvetica, sans-serif",
  body: "'Source Sans Pro', Arial, Helvetica, sans-serif",
  mono: "'Source Code Pro', 'Courier New', Courier, monospace",
};

const theme = extendTheme({
  config,
  colors,
  fonts,
});

export default theme;
