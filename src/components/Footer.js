import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    // marginTop: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
  label: { color: 'var(--color-text-light)' },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Box mb={1} className={classes.root}>
      <Typography variant="caption" className={classes.label}>
        Made by mallettejp
      </Typography>
      <Typography variant="caption" className={classes.label}>
        Buy me a beer?
      </Typography>
    </Box>
  );
};

export default Footer;
