import React, { useState, useEffect, useRef } from 'react';
import { useGlobalContext } from '../../context/context';
import Heading from '../Heading';
import QuitModal from './QuitModal';
import ControlButtons from './ControlButtons';
import styled from 'styled-components';
import { Box as MuiBox, Fade } from '@material-ui/core';

import {
  breakSm,
  breakLg,
  bpMaxWidth,
  bpMaxHeight,
} from '../../utils/breakpoints';

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
    isPaused,
    gameTime,
    drinkSound,
    gameOver,
    setGameOver,
  } = useGlobalContext();

  /* Local component state */
  const [secondCount, setSecondCount] = useState(60);
  const [drinkCount, setDrinkCount] = useState(0);
  const [isQuitModalOpen, setIsQuitModalOpen] = useState(false);

  /* Audio logic */
  const audio = useRef(null);
  let soundSrc;
  if (drinkSound === 'Boxing Bell') soundSrc = 'audio/boxingbell.mp3';
  if (drinkSound === 'Ding') soundSrc = 'audio/ding.mp3';
  if (drinkSound === 'No Sound') soundSrc = null;

  if (drinkCount === gameTime - 1) soundSrc = 'audio/game-over.mp3';
  // Playing audio needs to be outside of useEffect to play at the right time
  if (secondCount === 0) audio.current.play();

  /* Counting logic */
  useEffect(() => {
    while (!isPaused && !gameOver) {
      const timeout = setTimeout(() => {
        let newSecondCount, newDrinkCount;
        if (secondCount === 0) {
          newSecondCount = 60;
          newDrinkCount = drinkCount + 1;
          setDrinkCount(newDrinkCount);
          if (newDrinkCount === gameTime) {
            setGameOver(true);
            audio.current.play();
          }
        } else {
          newSecondCount = secondCount - 1;
        }
        setSecondCount(newSecondCount);
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [
    secondCount,
    isPlaying,
    isPaused,
    drinkCount,
    gameOver,
    gameTime,
    setGameOver,
  ]);

  return (
    <Fade in={isPlaying} timeout={1500}>
      <Box display="flex" flexDirection="column" alignItems="center" mt={0}>
        <QuitModal
          isQuitModalOpen={isQuitModalOpen}
          setIsQuitModalOpen={setIsQuitModalOpen}
        ></QuitModal>

        <Timer>{!gameOver ? secondCount : '🍾'}</Timer>
        <Heading variant="h5" component="p">
          <DrinkNum>{drinkCount}</DrinkNum> of <DrinkNum>{gameTime}</DrinkNum>{' '}
          drinks
        </Heading>
        <ControlButtons
          setSecondCount={setSecondCount}
          setDrinkCount={setDrinkCount}
          setIsQuitModalOpen={setIsQuitModalOpen}
        ></ControlButtons>
        {gameOver && <DrinkText>ALL DONE!</DrinkText>}
        {secondCount < 1 && <DrinkText>DRINK!</DrinkText>}
        <audio ref={audio}>
          <source src={soundSrc} />
        </audio>
      </Box>
    </Fade>
  );
};

export default GameTimer;
