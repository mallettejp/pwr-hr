import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import { makeStyles, useTheme, materialStyled } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    display: 'block',
  },
  label: { color: 'var(--color-text-light)' },
});

const StyledContainer = styled(Container)`
  margin-top: auto;
  margin-bottom: 6rem;

  @media screen and (max-height: 800px) {
    margin-bottom: 5rem;
  }

  @media screen and (max-height: 750px) {
    margin-bottom: 4rem;
  }

  @media screen and (max-height: 720px) {
    margin-bottom: 3rem;
  }

  @media screen and (max-height: 700px) {
    margin-bottom: 2.5rem;
  }

  @media screen and (max-height: 650px) {
    margin-bottom: 2rem;
  }

  @media screen and (max-height: 575px) {
    margin-bottom: 1.5rem;
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
