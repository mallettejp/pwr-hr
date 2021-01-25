import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/context';

import { breakSm } from '../../utils/breakpoints';

import { Button as MuiButton, Grid } from '@material-ui/core';

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

const ControlButtons = ({
  setDrinkCount,
  setSecondCount,
  setIsQuitModalOpen,
}) => {
  const {
    gameOver,
    isPaused,
    setGameOver,
    setIsPaused,
    setIsPlaying,
  } = useGlobalContext();

  return (
    <ButtonGrid
      container
      spacing={2}
      alignContent="center"
      alignItems="center"
      justify="center"
    >
      <Grid item>
        {!gameOver ? (
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setIsPaused(!isPaused)}
          >
            {!isPaused ? 'Pause' : 'Resume'}
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              setGameOver(false);
              setIsPaused(false);
              setIsPlaying(true);
              setDrinkCount(0);
              setSecondCount(60);
            }}
          >
            reset
          </Button>
        )}
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => {
            setIsPaused(true);
            setIsQuitModalOpen(true);
          }}
        >
          Quit
        </Button>
      </Grid>
    </ButtonGrid>
  );
};

export default ControlButtons;
