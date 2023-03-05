import { TicketTypeContainer } from './ticketType';
export default function TicketType() {
  const tickeType = { isRemote: false, includesHotel: true };
  return tickeType ? (
    <TicketTypeContainer>
      {!tickeType.isRemote ? (
        <h1>Presencial + {tickeType.includesHotel ? 'Com Hotel' : 'Sem Hotel'} </h1>
      ) : (
        <h1>Online </h1>
      )}
    </TicketTypeContainer>
  ) : (
    <TicketTypeContainer>Escolha a Modalidade de Ingresso e Pagamento</TicketTypeContainer>
  );
}
