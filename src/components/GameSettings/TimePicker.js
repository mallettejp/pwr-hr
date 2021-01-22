import React from 'react';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TimeButton from './TimeButton';
import { useGlobalContext } from '../../context/context';

const StyledBox = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '0.5em',
  margin: '0 auto',
});

const TimeButtons = () => {
  const { setGameTime } = useGlobalContext();
  return (
    <StyledBox>
      <TimeButton
        time={30}
        desc="Half Game"
        emoji="🥃"
        onClick={() => setGameTime(30)}
      />
      <TimeButton
        time={60}
        desc="Standard"
        emoji="🍺"
        onClick={() => setGameTime(60)}
      />
      <TimeButton
        time={100}
        desc="Century"
        emoji="🥴"
        onClick={() => setGameTime(100)}
      />
    </StyledBox>
  );
};

export default TimeButtons;
