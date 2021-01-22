import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { styled, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useGlobalContext } from '../../context/context';

const StyledButton = styled(Button)({
  '&,&:active,&:hover,&:focus': {
    border: '3px solid var(--color-primary-dark)',
  },
  '@media screen and (max-width: 340px)': {
    paddingLeft: '12px',
    paddingRight: '12px',
  },
});

const BtnTime = styled(Typography)({
  fontWeight: '700',
  lineHeight: '1',
  '@media screen and (max-width: 340px)': {
    fontSize: '21px',
  },
});

const BtnDesc = styled(Typography)({
  textTransform: 'capitalize',
  marginTop: '1em',
  color: 'var(--color-text-light)',
  '@media screen and (max-width: 340px)': {
    display: 'none',
  },
});

const GameTimeBtn = ({ time, desc, emoji, onClick }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  console.log(matches);
  const { gameTime } = useGlobalContext();
  let selected = false;
  if (time === gameTime) selected = true;
  return (
    <StyledButton
      variant={selected ? 'contained' : 'outlined'}
      color="secondary"
      onClick={onClick}
      fullWidth="true"
    >
      <Box py={matches ? 1 : 2}>
        <BtnTime variant={'h4'}>{time}</BtnTime>
        <BtnTime variant="h4">MIN</BtnTime>
        <BtnDesc variant="caption">{desc}</BtnDesc>
        <Typography variant="h4">{emoji}</Typography>
      </Box>
    </StyledButton>
  );
};

export default GameTimeBtn;
