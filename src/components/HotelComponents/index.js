import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import useHotel from '../../hooks/api/useHotel';
import ChooseHotel from './ChooseHotel';
import ChooseRoom from './ChooseRoom';
import { useState } from 'react';

export default function HotelComponents() {
  const { hotel } = useHotel();
  console.log(hotel);

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>

      <div>
        <ChooseHotel />
        <ChooseRoom />
      </div>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
