import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    textAlign: 'right',
    fontWeight: '700',
    color: 'var(--color-text-light)',
  },
});

const Logotype = () => {
  const classes = useStyles();
  return (
    <Box py={2}>
      <Typography variant="h5" component="h1" className={classes.root}>
        PwrHr.
      </Typography>
    </Box>
  );
};

export default Logotype;
