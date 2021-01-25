import React from 'react';
import { useGlobalContext } from '../../context/context';
import {
  Button as MuiButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

const QuitModal = ({ isQuitModalOpen, setIsQuitModalOpen }) => {
  const { setIsPaused, setIsPlaying } = useGlobalContext();

  const handleGoBack = () => {
    setIsQuitModalOpen(false);
    setIsPaused(false);
  };

  const handleQuit = () => {
    setIsPlaying(false);
    setIsQuitModalOpen(false);
  };

  return (
    <Dialog open={isQuitModalOpen} onClose={handleGoBack}>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogContent>
        <DialogContentText
          style={{
            color: 'white',
          }}
        >
          All game progress will be lost.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <MuiButton color="primary" onClick={handleGoBack}>
          Go Back
        </MuiButton>
        <MuiButton color="primary" onClick={handleQuit}>
          Continue
        </MuiButton>
      </DialogActions>
    </Dialog>
  );
};

export default QuitModal;
