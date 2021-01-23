import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import { bpMaxHeight } from '../utils/breakpoints';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    display: 'block',
  },
  label: { color: 'var(--color-text-light)' },
});

const StyledContainer = styled(Container)`
  margin-top: auto;
  margin-bottom: 20rem;

  ${bpMaxHeight(1200)} {
    margin-bottom: 12rem;
  }

  ${bpMaxHeight(850)} {
    margin-bottom: 7rem;
  }

  ${bpMaxHeight(800)} {
    margin-bottom: 6rem;
  }

  ${bpMaxHeight(750)} {
    margin-bottom: 5rem;
  }

  ${bpMaxHeight(720)} {
    margin-bottom: 4rem;
  }

  ${bpMaxHeight(700)} {
    margin-bottom: 2.5.rem;
  }

  ${bpMaxHeight(650)} {
    margin-bottom: 3rem;
  }

  ${bpMaxHeight(575)} {
    margin-bottom: 2.5rem;
  }
`;

const GameRules = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();

  return (
    <Fade in={true} timeout={1500}>
      <StyledContainer maxWidth="sm">
        <Box className={classes.root} display="flex" flexDirection="column">
          <Typography
            className={classes.label}
            variant={matches ? 'body2' : 'body1'}
          >
            Take one sip/shot of beer every minute.
          </Typography>
          <Typography
            className={classes.label}
            variant={matches ? 'body2' : 'body1'}
          >
            NEVER drink and drive.
          </Typography>
        </Box>
      </StyledContainer>
    </Fade>
  );
};

export default GameRules;
