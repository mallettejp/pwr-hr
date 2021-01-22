import React, { useState } from 'react';
import { useGlobalContext } from '../context/context';
import MuiBox from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';
import Heading from './Heading';
import styled from 'styled-components';
import MuiButton from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { styled as materialStyled } from '@material-ui/core/styles';

const breakpoint = (condition) => (width) =>
  `@media screen and (${condition}-width: ${width}px)`;
const breakpointMax = breakpoint('max');
const breakpointMin = breakpoint('min');
const breakSm = breakpointMax(340);
const breakLg = breakpointMin(960);

const Timer = styled.h2`
  font-size: 170px;
  font-family: 'Rubik Mono One', monospace;
  line-height: 1;
  margin: 0;
  margin-bottom: 8px;

  ${breakSm} {
    font-size: 150px;
  }

  ${breakLg} {
    font-size: 200px;
  }
`;

const ButtonGrid = styled(Grid)`
  margin-top: 5em;

  ${breakSm} {
    margin-top: 4em;
  }
`;

const Button = styled(MuiButton)`
  width: 120px;
  border-width: 3px;
`;

const Box = styled(MuiBox)`
  margin-top: 8em;

  @media screen and (max-width: 340px) {
    margin-top: 4em;
  }
`;

const DrinkNum = styled.span`
  font-family: 'Rubik Mono One', monospace;
`;

const GameTimer = () => {
  const {
    setIsPlaying,
    // isPaused,
    // setIsPaused,
    // gameTime,
    // drinkSound
  } = useGlobalContext();
  // const [secondCount, setSecondCount] = useState(60);
  // const [drinkCount, setDrinkCount] = useState(0);

  return (
    <Fade in={true} timeout={1500}>
      <Box display="flex" flexDirection="column" alignItems="center" mt={0}>
        <Timer>60</Timer>
        <Heading variant="h5" component="p">
          <DrinkNum>14</DrinkNum> of <DrinkNum>60</DrinkNum> drinks
        </Heading>
        <ButtonGrid
          container
          spacing={2}
          alignContent="center"
          alignItems="center"
          justify="center"
        >
          <Grid item>
            <Button variant="contained" color="primary" size="large">
              Pause
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
      </Box>
    </Fade>
  );
};

export default GameTimer;
