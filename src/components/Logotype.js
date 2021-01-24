import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import { MdInfoOutline } from 'react-icons/md';
import styled from 'styled-components';

const Logo = styled(Typography)`
  text-align: right;
  font-weight: 700;
  color: var(--color-text-light);
`;

const InfoButton = styled(IconButton)`
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  color: var(--color-primary-light);
  font-size: 1.5em;
  line-height: 0;
`;

const Logotype = ({ openModal }) => {
  return (
    <Box
      pt={1}
      pb={1}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <InfoButton aria-label="Game Info" onClick={openModal}>
        <MdInfoOutline />
      </InfoButton>

      <Logo variant="h5" component="h1" aria-label="Power Hour">
        PwrHr.
      </Logo>
    </Box>
  );
};

export default Logotype;
