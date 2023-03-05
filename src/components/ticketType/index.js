import useTicket from '../../hooks/api/useTicket';
import { TicketTypeContainer } from './ticketType';
export default function TicketType() {
  const { ticket } = useTicket();
  return ticket ? (
    <TicketTypeContainer>
      {!ticket?.TicketType?.isRemote ? (
        <div>
          <h1>Presencial + {ticket?.TicketType?.includesHotel ? 'Com Hotel' : 'Sem Hotel'} </h1>
          <p>R$ {ticket?.TicketType?.price}</p>
        </div>
      ) : (
        <div>
          <h1>Online </h1>
          <p>R$ {ticket?.TicketType?.price}</p>
        </div>
      )}
    </TicketTypeContainer>
  ) : (
    <TicketTypeContainer>
      <h1> Escolha a Modalidade de Ingresso e Pagamento</h1>
    </TicketTypeContainer>
  );
}
