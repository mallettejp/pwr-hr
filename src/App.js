import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Layout>
        <Logotype />
      <GameSettings />
      <GameTimer />
      <GameRules />
      <Footer />
    </Layout> */}
      <Typography variant="h2">POOPO!!</Typography>
    </ThemeProvider>
  );
}

export default App;
