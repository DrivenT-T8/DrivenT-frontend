import useTickets from '../../hooks/api/useTicketSummary';
import { TicketTypeContainer } from './ticketType';
export default function TicketType() {
  const { ticketType } = useTickets();
  return ticketType ? (
    <TicketTypeContainer>
      {!ticketType.TicketType.isRemote ? (
        <h1>Presencial + {ticketType.TicketType.includesHotel ? 'Com Hotel' : 'Sem Hotel'} </h1>
      ) : (
        <h1>Online </h1>
      )}
    </TicketTypeContainer>
  ) : (
    <TicketTypeContainer>Escolha a Modalidade de Ingresso e Pagamento</TicketTypeContainer>
  );
}
