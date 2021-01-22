import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, styled } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    marginTop: 'auto',
    display: 'block',
  },
  label: { color: 'var(--color-text-light)' },
});

const StyledContainer = styled(Container)({
  marginTop: 'auto',
});

const GameRules = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const classes = useStyles();
  return (
    <StyledContainer maxWidth="sm">
      <Box className={classes.root}>
        <Typography
          className={classes.label}
          variant={matches ? 'body2' : 'body1'}
        >
          Take one sip/shot of beer every minute for a set amount of time.
        </Typography>
        <Typography
          className={classes.label}
          variant={matches ? 'body2' : 'body1'}
        >
          NEVER drink and drive.
        </Typography>
      </Box>
    </StyledContainer>
  );
};

export default GameRules;
