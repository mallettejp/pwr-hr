import React, { useState } from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useGlobalContext } from '../../context/context';
import moduleName from './SoundBtn';
import styledComp from 'styled-components';

const sounds = ['Boxing Bell', 'Ding', 'Drink!', 'No Sound'];

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
    },
  },
});

const SoundPicker = ({ children }) => {
  const { drinkSound, setDrinkSound } = useGlobalContext();
  let selected = false;
  return (
    <StyledGroup
      orientation="vertical"
      color="secondary"
      aria-label="vertical outlined primary button group"
      fullWidth
    >
      {sounds.map((sound) => {
        return (
          <Button
            variant={drinkSound === sound ? 'contained' : 'outlined'}
            color="secondary"
            onClick={() => setDrinkSound(sound)}
          >
            {sound}
          </Button>
        );
      })}
    </StyledGroup>
  );
};

export default SoundPicker;
