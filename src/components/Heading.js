import React from 'react';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';

const StyledTypography = styled(Typography)({
  textTransform: 'uppercase',
  fontWeight: '700',
  marginBottom: '0.5em',
  '&:not(:first-of-type)': {
    marginTop: '2em',
    '@media screen and (max-width: 340px)': {
      marginTop: '1em',
    },
  },
});

const Heading = ({ children }) => {
  return <StyledTypography>{children}</StyledTypography>;
};

export default Heading;
