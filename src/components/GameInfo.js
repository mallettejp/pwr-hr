import React from 'react';
import styled from 'styled-components';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@material-ui/core';

const Content = styled(DialogContent)`
  max-width: 400px;
`;

const Text = styled(DialogContentText)`
  color: #fff;

  &:first-of-type {
    margin-bottom: 2em;
  }
`;

const GameInfo = ({ isModalOpen, closeModal }) => {
  return (
    <Dialog open={isModalOpen} onClose={closeModal}>
      <DialogTitle>POWER HOUR</DialogTitle>
      <Content>
        <Text>
          <Typography>Take one sip/shot of beer every minute.</Typography>
          <Typography>Drink responsibly. Obey your local laws.</Typography>
          <Typography>NEVER drink and drive.</Typography>
        </Text>

        <Text>
          <Typography variant="body2">
            Due to the way iOS handles web applications, this game doesn't work
            properly on iPhone unless the web browser is open.
          </Typography>
        </Text>
        <Text>
          <Typography variant="body2">
            If you enjoyed this project and are feeling generous, you can donate
            a couple bucks to my{' '}
            <a href="https://ko-fi.com/mallettedesign">beer fund</a>.
          </Typography>
        </Text>
        <Text>
          <Typography variant="body2">
            Timer and drink counter numbers are set with{' '}
            <a href="https://fonts.google.com/specimen/Rubik+Mono+One">
              Rubik Mono One
            </a>
            . All other type is set in{' '}
            <a href="https://fonts.google.com/specimen/Rubik">Rubik</a>.
          </Typography>
        </Text>
      </Content>
      <DialogActions>
        <Button color="primary" onClick={closeModal}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GameInfo;
