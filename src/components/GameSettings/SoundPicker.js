import React, { useState } from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useGlobalContext } from '../../context/context';
import sounds from '../../sounds';

const StyledGroup = styled(ButtonGroup)({
  '&,&:active,&:hover,&:focus': {
    borderWidth: '3px',
    borderColor: 'var(--color-primary-dark)',
  },
  '& > *': {
    justifyContent: 'start',
    color: '#fff',
    fontWeight: '500',
    '&,&:active,&:hover,&:focus': {
      border: '3px solid var(--color-primary-dark)',
      borderTopWidth: '0',
    },
  },
});

const StyledButton = styled(Button)({
  border: '3px solid var(--color-primary-dark)',
});

const SoundPicker = () => {
  const { drinkSound, setDrinkSound } = useGlobalContext();
  return (
    <StyledGroup
      orientation="vertical"
      color="secondary"
      aria-label="vertical outlined primary button group"
      fullWidth
      disableElevation
    >
      {sounds.map((sound) => {
        return (
          <StyledButton
            variant={drinkSound === sound ? 'contained' : 'outlined'}
            color="secondary"
            onClick={() => setDrinkSound(sound)}
          >
            {sound}
          </StyledButton>
        );
      })}
    </StyledGroup>
  );
};

export default SoundPicker;
