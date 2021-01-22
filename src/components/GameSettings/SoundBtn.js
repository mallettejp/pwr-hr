import React from 'react';
import Button from '@material-ui/core/Button';
import { useGlobalContext } from '../../context/context';

const SoundBtn = ({ sound }) => {
  const { drinkSound } = useGlobalContext();
  let selected = false;
  if (drinkSound === sound) selected = true;
  return <Button variant={selected ? 'contained' : 'outlined'}>{sound}</Button>;
};

export default SoundBtn;
