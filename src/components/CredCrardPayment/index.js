import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import CredCardScreen from './CredCardScreen';
import TicketType from '../ticketType';

export default function PersonalCredcard() {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      {/* Se tiver inscrição, vai aparecer essa primeira div abaixo para escolher o ticket e hotel, se não, vai aparecer a última section com a mensagem que não tem inscrição ainda */}
      <div>
        <CredCardScreen/>
        {/* Depois que apertar no botão de reservar ingresso do form de cima, vai aparecer essa section abaixo na tela para o pagamento */}
        <section>
          <div>
            {/* DESKTOP 6 E 7 DO FIGMA */}
          </div>
        </section>
      </div>

      <Enroll>
        <span>Ingresso escolhido</span>
        <TicketType/>
        <CredCardScreen/>
      </Enroll>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;
const Enroll = styled(Typography)`
  display: flex;
  flex-direction:column;
`;

