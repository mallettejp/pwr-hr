import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameTime, setGameTime] = useState(60);
  const [drinkSound, setDrinkSound] = useState('Boxing Bell');

  return (
    <AppContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        isPaused,
        setIsPaused,
        gameOver,
        setGameOver,
        gameTime,
        setGameTime,
        drinkSound,
        setDrinkSound,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
