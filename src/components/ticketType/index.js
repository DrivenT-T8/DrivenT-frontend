import useTicket from '../../hooks/api/useTicket';
import { TicketTypeContainer } from './ticketType';
export default function TicketType() {
  const { ticket } = useTicket();
  console.log(ticket.TicketType);
  const tickeType = ticket.TicketType;
  return tickeType ? (
    <TicketTypeContainer>
      {tickeType.isRemote ? (
        <div>
          <h1>Presencial + {tickeType.includesHotel ? 'Com Hotel' : 'Sem Hotel'} </h1>
          <p>R$ {tickeType.price}</p>
        </div>
      ) : (
        <h1>Online </h1>
      )}
    </TicketTypeContainer>
  ) : (
    <TicketTypeContainer>Escolha a Modalidade de Ingresso e Pagamento</TicketTypeContainer>
  );
}
