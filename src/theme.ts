import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: '"Outfit", sans-serif',
    body: '"Sora", sans-serif',
    mono: '"JetBrains Mono", monospace',
  },
  colors: {
    apollo: {
      secondary: '#142134',
    },
  },
  styles: {
    global: {
      'html, body': {
        bg: 'black',
        color: 'white',
        scrollBehavior: 'smooth',
      },
      '*::selection': {
        bg: 'white',
        color: 'black',
      },
    },
  },
});

export default theme;
