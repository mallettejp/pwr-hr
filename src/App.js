import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import theme from './theme';
import Layout from './components/Layout';
import Logotype from './components/Logotype';
import GameSettings from './components/GameSettings';
import GameTimer from './components/GameTimer';
import GameRules from './components/GameRules';
import Footer from './components/Footer';
import { useGlobalContext } from './context/context';

function App() {
  const { isPlaying } = useGlobalContext();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Logotype />
        <Container maxWidth="sm">
          {isPlaying ? <GameTimer /> : <GameSettings />}
        </Container>

        <GameRules />

        <Footer />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
