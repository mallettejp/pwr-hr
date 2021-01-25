import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import theme from './theme';
import Layout from './components/Layout';
import TopBar from './components/TopBar';
import GameSettings from './components/GameSettings';
import GameTimer from './components/GameTimer/GameTimer';
import Footer from './components/Footer';
import { useGlobalContext } from './context/context';
import GameInfo from './components/GameInfo';

function App() {
  const { isPlaying } = useGlobalContext();

  /* Modal logic */
  const [isModalOpen, setIsModalOpen] = useState(true);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <TopBar openModal={openModal} />
        <GameInfo isModalOpen={isModalOpen} closeModal={closeModal} />
        <Container maxWidth="sm">
          {isPlaying ? <GameTimer /> : <GameSettings />}
        </Container>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
