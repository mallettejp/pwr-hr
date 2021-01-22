import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import theme from './theme';
import Layout from './components/Layout';
import Logotype from './components/Logotype';
import GameSettings from './containers/GameSettings/';
import GameTimer from './containers/GameTimer';
import GameRules from './components/GameRules';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Logotype />
        <Container maxWidth="sm">
          <GameSettings />
          <GameTimer />
          <GameRules />
        </Container>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
