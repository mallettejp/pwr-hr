import React from 'react';
import { useGlobalContext } from '../../context/context';
import Box from '@material-ui/core/Box';
import { styled as materialStyled } from '@material-ui/core/styles';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import TimePicker from './TimePicker';
import SoundPicker from './SoundPicker';
import Heading from '../Heading';

// Styled with Material UI API
const StartButton = materialStyled(Button)({
  color: '#fff',
});

// Styled with styled-components
const SettingsSection = styled.section`
  margin-top: 3em;

  & .MuiButtonGroup-groupedOutlinedVertical:not(:last-child) {
    border-bottom: 0;
  }
  & .MuiButton-root {
    border-width: 3px;
  }

  @media screen and (max-height: 680px) {
    margin-top: 0;
  }
`;

const GameSettings = () => {
  const { isPlaying, setIsPlaying, setIsPaused, setGameOver } = useGlobalContext();

  const handleClick = () => {
    setIsPlaying(true);
    setIsPaused(false);
    setGameOver(false);
  }

  return (
    <Fade in={!isPlaying} timeout={1500}>
      <SettingsSection>
        <Heading>HOW THIRSTY ARE YOU?</Heading>
        <TimePicker />

        <Heading>choose drink sound</Heading>
        <SoundPicker />

        <Box display="flex" justifyContent="center" mt={2}>
          <StartButton
            variant="contained"
            color="primary"
            size="large"
            onClick={handleClick}
          >
            Start
          </StartButton>
        </Box>
      </SettingsSection>
    </Fade>
  );
};

export default GameSettings;
