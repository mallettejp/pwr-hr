import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    // justifyItems: 'end',
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.root}>
      {children}
    </Container>
  );
};

export default Layout;
