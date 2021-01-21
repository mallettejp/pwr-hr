import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: 'hsl(200, 33%, 62%)',
      main: 'hsl(200, 47%, 18%)',
      dark: 'hsl(200, 60%, 9%)',
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
});

theme.palette.background = { default: theme.palette.primary.main };

export default theme;
