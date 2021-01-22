import React, { useState } from 'react';
import { useGlobalContext } from '../context/context';

const GameTimer = () => {
  const { isPaused, setIsPaused, gameTime, drinkSound } = useGlobalContext();
  const [secondCount, setSecondCount] = useState(60);
  const [drinkCount, setDrinkCount] = useState(0);

  return <div>gametimer</div>;
};

export default GameTimer;
