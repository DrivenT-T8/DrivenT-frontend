import { useContext, useState } from 'react';
import styled from 'styled-components';
import TicketContext from '../../contexts/TicketContext';
import useTypeTicket from '../../hooks/api/useTypeTicket';
import useCreateTicket from '../../hooks/api/useCreateTicket';

export default function FormChooseTicketBooking() {
  const { typeTicket } = useTypeTicket();
  const { createTicket } = useCreateTicket();
  const { typeTicketSelected, setTypeTicketSelected } = useContext(TicketContext);
  const [colorButtonSelected, setColorButtonSelected] = useState({});
  const [selectedId, setSelectedId] = useState([]);

  function getTicketTypeAndPrice(e) {
    if (!colorButtonSelected.id) return;

    if (e.name === 'Presencial' || e.name === 'Online') {
      setTypeTicketSelected([e.name, e.price]);
    }
  }

  let onlineTicket, inPersonTicket;

  if (typeTicket) {
    const online = typeTicket.filter((t) => t.name === 'Online');
    const inPerson = typeTicket.filter((t) => !t.includesHotel && !t.isRemote);
    const inPersonWithHotel = typeTicket.filter((t) => t.includesHotel);

    onlineTicket = {
      id: online.id,
      name: online.name,
      price: online.price / 100,
    };

    inPersonTicket = {
      name: inPerson.name,
      price: inPerson.price / 100,
      options: [
        {
          id: inPerson.id,
          name: inPerson.name,
          price: 0,
        },
        {
          id: inPersonWithHotel.id,
          name: inPersonWithHotel.name,
          price: inPersonWithHotel.price - inPerson.price / 100,
        },
      ],
    };
  }

  const ticketOptions = [onlineTicket, inPersonTicket];
  const hostOptions = inPersonTicket.options;

  return (
    <>
      {typeTicket ? (
        <TicketOption>
          <span>Primeiro, escolha sua modalidade de ingresso</span>
          <TicketType>
            {typeTicket.map((e, index) => (
              <Button
                key={index}
                data-type={e}
                isColorButtonSelected={colorButtonSelected.id === e.id}
                onClick={() => {
                  getTicketTypeAndPrice(e);
                  setColorButtonSelected(e);
                }}
              >
                <p>{e.name}</p>
                <p>R$ {e.price / 100}</p>
              </Button>
            ))}
          </TicketType>
        </TicketOption>
      ) : (
        ''
      )}

      {typeTicket && typeTicketSelected[0] === 'Presencial' ? (
        <TicketOption>
          <span>
            Depois EXCLUA essa primeira frase, pfvr, mas aqui mostra o tipo de ticket que você clicou com o preço
            (coloquei num array, vai ser nessa ordem sempre):{typeTicketSelected}. Ótimo! Agora escolha sua modalidade
            de hospedagem{' '}
          </span>
          <div>
            <button>
              <p>Sem Hotel</p>
              <p>+ R$ 0</p>
            </button>
            <button>
              <p>Com Hotel</p>
              <p>+ R$ 350</p>
            </button>
          </div>
        </TicketOption>
      ) : (
        ''
      )}

      {/* Depois que os TicketsOptions tiverem sido selecionados, aparece esse botão para reservar o ingresso */}
      {selectedId.length !== 0 ? (
        <div>
          <span>Fechado! O total ficou em R$ XXX. Agora é só confirmar:</span>
          <button onClick={() => createTicket(selectedId[0])}>RESERVAR INGRESSO</button>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

const TicketOption = styled.div`
  > span {
    color: #8e8e8e;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    font-size: 20px;
  }
`;

const TicketType = styled.div`
  margin: 17px 0 35px 0;
  display: flex;
  gap: 5%;
`;

const Button = styled.button`
  background: ${(props) => (props.isColorButtonSelected ? '#FFEED2' : '#FFFFFF')};

  border: ${(props) => (props.isColorButtonSelected ? 'none' : '1px solid #CECECE')};
  border-radius: 20px;

  height: 145px;
  width: 145px;

  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;

  cursor: pointer;

  p:first-of-type {
    color: #454545;
    font-size: 16px;
  }

  p:last-child {
    color: #898989;
    font-size: 14px;
  }
`;
