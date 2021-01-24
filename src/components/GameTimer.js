import React, { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../context/context';
import MuiBox from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import Heading from './Heading';
import styled from 'styled-components';
import MuiButton from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
  breakSm,
  breakLg,
  bpMaxWidth,
  bpMaxHeight,
} from '../utils/breakpoints';

console.log(breakSm);

const Timer = styled.h2`
  font-size: 170px;
  font-family: 'Rubik Mono One', monospace;
  line-height: 1;
  margin: 0;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${breakLg} {
    font-size: 200px;
  }
  ${breakSm} {
    font-size: 150px;
  }
`;

const ButtonGrid = styled(Grid)`
  margin-top: 4em;

  ${breakSm} {
    margin-top: 3em;
  }
`;

const Button = styled(MuiButton)`
  width: 120px;
  &,
  &:active,
  &:hover,
  &:focus {
    border-width: 3px;
  }
`;

const Box = styled(MuiBox)`
  margin-top: 8em;

  ${bpMaxWidth(360)} {
    margin-top: 4em;
  }
  ${bpMaxHeight(700)} {
    margin-top: 4em;
  }
`;

const DrinkNum = styled.span`
  font-family: 'Rubik Mono One', monospace;
`;

const DrinkText = styled.span`
  font-size: 2em;
  font-weight: 700;
  margin-top: 8px;
`;

const GameTimer = () => {
  /* Global context state */
  const {
    isPlaying,
    setIsPlaying,
    isPaused,
    setIsPaused,
    gameTime,
    drinkSound,
  } = useGlobalContext();

  /* Local component state */
  const [secondCount, setSecondCount] = useState(3);
  const [drinkCount, setDrinkCount] = useState(0);

  /* Audio logic */
  const audio = useRef(null);
  let soundSrc;
  if (drinkSound === 'Boxing Bell') soundSrc = '../audio/boxingbell.mp3';
  if (drinkSound === 'Ding') soundSrc = '../audio/ding.mp3';
  if (drinkSound === 'No Sound') soundSrc = null;
  // Playing audio needs to be outside of useEffect to play at the right time
  if (secondCount === 0) audio.current.play();

  /* Counting logic */
  useEffect(() => {
    while (!isPaused) {
      const timeout = setTimeout(() => {
        let newSecondCount, newDrinkCount;
        if (secondCount === 0) {
          newSecondCount = 60;
          newDrinkCount = drinkCount + 1;
          setDrinkCount(newDrinkCount);
        } else {
          newSecondCount = secondCount - 1;
        }
        setSecondCount(newSecondCount);
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [secondCount, isPlaying, isPaused, drinkCount]);

  return (
    <Fade in={isPlaying} timeout={1500}>
      <Box display="flex" flexDirection="column" alignItems="center" mt={0}>
        <Timer>{secondCount}</Timer>
        <Heading variant="h5" component="p">
          <DrinkNum>{drinkCount}</DrinkNum> of <DrinkNum>{gameTime}</DrinkNum>{' '}
          drinks
        </Heading>
        <ButtonGrid
          container
          spacing={2}
          alignContent="center"
          alignItems="center"
          justify="center"
        >
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => setIsPaused(!isPaused)}
            >
              {!isPaused ? 'Pause' : 'Resume'}
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => setIsPlaying(false)}
            >
              Quit
            </Button>
          </Grid>
        </ButtonGrid>
        {secondCount < 1 && <DrinkText>DRINK!</DrinkText>}
        <audio ref={audio}>
          <source src={soundSrc} />
        </audio>
      </Box>
    </Fade>
  );
};

export default GameTimer;
