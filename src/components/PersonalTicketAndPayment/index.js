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
        <section>
          <div>
            <span>Ingresso escolhido</span>
            {/* DESKTOP 6 E 7 DO FIGMA */}
          </div>
        </section>
      </div>

      <section>
        <p>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</p>
      </section>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
