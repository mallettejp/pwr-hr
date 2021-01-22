import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
  },
  label: { color: 'var(--color-text-light)' },
});

const GameRules = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.label} variant="body1">
        Take one sip/shot of beer every minute for a set amount of time.
      </Typography>
      <Typography className={classes.label} variant="body1">
        NEVER drink and drive.
      </Typography>
    </Box>
  );
};

export default GameRules;
