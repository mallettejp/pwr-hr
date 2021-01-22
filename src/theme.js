import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'hsl(199, 30%, 45%)',
    },
    secondary: {
      main: 'hsl(200, 60%, 9%)',
    },
    background: {
      default: 'hsl(200, 47%, 18%)',
    },
  },
  typography: {
    fontFamily: ['Rubik', 'sans-serif'].join(','),
    allVariants: {
      color: '#fff',
    },
    h2: {
      fontFamily: ['Rubik Mono One', 'sans-serif'].join(','),
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiButton: {
      borderWidth: '3px',
    },
  },
});

export default theme;
