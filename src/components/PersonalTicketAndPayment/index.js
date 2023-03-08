import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import FormChooseTicketBooking from './FormChooseTicketBooking';

export default function PersonalTicketAndPayment() {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <FormChooseTicketBooking />
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
