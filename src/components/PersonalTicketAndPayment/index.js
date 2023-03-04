import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import FormChooseTicketBooking from './FormChooseTicketBooking';

export default function PersonalTicketAndPayment() {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {/* Se tiver inscrição, vai aparecer essa primeira div abaixo para escolher o ticket e hotel, se não, vai aparecer a última section com a mensagem que não tem inscrição ainda */}
      <div>
        <FormChooseTicketBooking />

        {/* Depois que apertar no botão de reservar ingresso do form de cima, vai aparecer essa section abaixo na tela para o pagamento */}
      </div>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
