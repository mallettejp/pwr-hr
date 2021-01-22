import React, { useState } from 'react';
import { useGlobalContext } from '../../context/context';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import GameTimeBtn from './GameTimeBtn';
import Container from '@material-ui/core/Container';
import { styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SoundPicker from './SoundPicker';

const StyledBox = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '0.5em',
  // maxWidth: '450px',
  margin: '0 auto',
});

const Heading = styled(Typography)({
  textTransform: 'uppercase',
  fontWeight: '700',
  '&:not(:first-of-type)': {
    marginTop: '2em',
  },
});

const GameSettings = () => {
  const { setIsPlaying, setGameTime, setDrinkSound } = useGlobalContext();
  return (
    <div>
      <Heading>HOW THIRSTY ARE YOU?</Heading>
      <StyledBox>
        {/* <Grid container spacing={1} justify="center" direction="row">
            <Grid item> */}
        <GameTimeBtn
          time={30}
          desc="Half Game"
          emoji="🥃"
          onClick={() => setGameTime(30)}
        />
        {/* </Grid>
            <Grid item> */}
        <GameTimeBtn
          time={60}
          desc="Standard"
          emoji="🍺"
          onClick={() => setGameTime(60)}
        />
        {/* </Grid>
            <Grid item> */}
        <GameTimeBtn
          time={100}
          desc="Century"
          emoji="🥴"
          onClick={() => setGameTime(100)}
        />
        {/* </Grid>
          </Grid> */}
      </StyledBox>

      <Heading>choose drink sound</Heading>

      <SoundPicker />
    </div>
  );
};

export default GameSettings;
