import useTicket from '../../hooks/api/useTicket';
import { TicketTypeContainer } from './ticketType';
export default function TicketType() {
  const { ticket } = useTicket();
  console.log(ticket);
  return ticket ? (
    <TicketTypeContainer>
      {!ticket.TicketType.isRemote ? (
        <div>
          <h1>Presencial + {ticket.TicketType.includesHotel ? 'Com Hotel' : 'Sem Hotel'} </h1>
          <p>R$ {ticket.TicketType.price}</p>
        </div>
      ) : (
        <h1>Online </h1>
      )}
    </TicketTypeContainer>
  ) : (
    <TicketTypeContainer>Escolha a Modalidade de Ingresso e Pagamento</TicketTypeContainer>
  );
}
