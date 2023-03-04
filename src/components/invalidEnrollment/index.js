import TicketType from '../ticketType';
import { PaymentContainer } from './invalidEnrollment';
export default function InvalidEnrollment() {
  return (
    <PaymentContainer> {/*  Você precisa completar sua inscrição antes <br /> de prosseguir pra escolha de ingresso */}
      <TicketType/>
    </PaymentContainer>
  );
}
