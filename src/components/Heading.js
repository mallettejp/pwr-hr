import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, styled } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: '0.5em',
    '&:not(:first-of-type)': {
      marginTop: '2em',
      '@media screen and (max-width: 340px)': {
        marginTop: '1em',
      },
    },
  },
});

const Heading = ({ variant, component, children }) => {
  const classes = useStyles();
  return (
    <Typography
      variant={variant}
      component={component}
      className={classes.root}
    >
      {children}
    </Typography>
  );
};

export default Heading;
