import { useEffect, useState } from 'react';
import useTicket from '../../hooks/api/useTicket';
import { TicketTypeContainer } from './ticketType';
export default function TicketType() {
  const { ticket } = useTicket();
  const [ticketType, setTicketType] = useState();
  const urlParams = new URLSearchParams(window.location.search);
  const ticketTypeIp = urlParams.get('id');

  useEffect(() => {
    setTicketType(ticket?.filter((tickets) => tickets.id === Number(ticketTypeIp))[0]);
  }, [ticket]);
  
  return ticketType ? (
    <TicketTypeContainer>
      {!ticketType.isRemote ? (
        <div>
          <h1>Presencial +{ticketType?.includesHotel ? 'Com Hotel' : 'Sem Hotel'}</h1>
          <p>R$ {ticketType?.price}</p>
        </div>
      ) : (
        <div>
          <h1>Online </h1>
          <p>R$ {ticketType?.price}</p>
        </div>
      )}
    </TicketTypeContainer>
  ) : (
    <TicketTypeContainer>
      <h1> Escolha a Modalidade de Ingresso e Pagamento</h1>
    </TicketTypeContainer>
  );
}
