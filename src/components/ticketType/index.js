import { useEffect, useState } from 'react';
import useTicket from '../../hooks/api/useTicket';
import useTypeTicket from '../../hooks/api/useTypeTicket';
import { TicketTypeContainer } from './ticketType';
export default function TicketType() {
  const { typeTicket } = useTypeTicket();
  const [ticketType, setTicketType] = useState();
  const urlParams = new URLSearchParams(window.location.search);
  const ticketTypeIp = urlParams.get('id');

  useEffect(() => {
    setTicketType(typeTicket?.filter((tickets) => tickets.id === Number(ticketTypeIp))[0]);
  }, [typeTicket]);

  return ticketType ? (
    <TicketTypeContainer>
      {!ticketType.isRemote ? (
        <div>
          <h1>Presencial +{ticketType?.includesHotel ? 'Com Hotel' : 'Sem Hotel'}</h1>
          <p>R$ {ticketType?.price / 100}</p>
        </div>
      ) : (
        <div>
          <h1>Online </h1>
          <p>R$ {ticketType?.price / 100}</p>
        </div>
      )}
    </TicketTypeContainer>
  ) : (
    <TicketTypeContainer>
      <h1> Escolha a Modalidade de Ingresso e Pagamento</h1>
    </TicketTypeContainer>
  );
}
