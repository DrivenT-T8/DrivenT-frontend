import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import ChooseRoom from './ChooseRoom';
import { useState } from 'react';

export default function HotelComponents() {
  return (
    <>
      <StyledTypography variant="h4">Choose Hotel</StyledTypography>

      <ChooseRoom />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
