import { useContext, useState } from 'react';
import styled from 'styled-components';
import TicketContext, { TicketProvider } from '../../contexts/TicketContext';
import useTypeTicket from '../../hooks/api/useTypeTicket';
import useCreateTicket from '../../hooks/api/useCreateTicket';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function FormChooseTicketBooking() {
  const { typeTicket } = useTypeTicket();
  const { saveTicket, dados } = useCreateTicket();
  const { typeTicketSelected, setTypeTicketSelected } = useContext(TicketContext);
  const [colorButtonSelected, setColorButtonSelected] = useState({});
  const [selectedId, setSelectedId] = useState([]);
  const [typeTicketInPerson, setTypeTicketInPerson] = useState([]);
  const [colorButtonSubSelected, setColorButtonSubSelected] = useState({});

  const navigate = useNavigate();
  async function createTicket(id) {
    try {
      const data = { ticketTypeId: id };
      await saveTicket(data);
      toast('Ticket salvo com sucesso!');
      navigate(`/dashboard/credcard?id=${selectedId[0]}`);
    } catch (err) {
      toast('Não foi possível salvar o ticket!');
    }
  }
  localStorage.setItem('ticketId', dados?.id);

  function getTicketTypeAndPrice(e) {
    if (e.name === 'Presencial') {
      setSelectedId([]);
    } else {
      setSelectedId([e.id]);
      setColorButtonSubSelected({});
    }
    setTypeTicketSelected(e);
  }
  function getTicketTypeInPerson(e) {
    setSelectedId([e.id]);
    setTypeTicketInPerson(e);
  }

  let onlineTicket;
  let inPersonTicket;

  if (typeTicket) {
    const online = typeTicket.filter((t) => t.name === 'Online')[0];
    const inPerson = typeTicket.filter((t) => !t.includesHotel && !t.isRemote)[0];
    const inPersonWithHotel = typeTicket.filter((t) => t.includesHotel)[0];

    onlineTicket = {
      id: online.id,
      name: online.name,
      price: online.price / 100,
    };

    inPersonTicket = {
      id: 0,
      name: inPerson.name,
      price: inPerson.price / 100,
      options: [
        {
          id: inPerson.id,
          name: 'Sem Hotel',
          price: 0,
        },
      ],
    };
    if (inPersonWithHotel) {
      inPersonTicket.options.push({
        id: inPersonWithHotel.id,
        name: 'Com Hotel',
        price: (inPersonWithHotel.price - inPerson.price) / 100,
      });
    }
  }

  const ticketOptions = [onlineTicket, inPersonTicket];
  const hostOptions = inPersonTicket?.options;

  return (
    <>
      {typeTicket ? (
        <TicketOption>
          <span>Primeiro, escolha sua modalidade de ingresso</span>
          <TicketType>
            {ticketOptions.map((e, index) => (
              <ButtonType
                key={index}
                data-type={e}
                isColorButtonSelected={colorButtonSelected.id === e.id}
                onClick={() => {
                  getTicketTypeAndPrice(e);
                  setColorButtonSelected(e);
                }}
              >
                <p>{e.name}</p>
                <p>R$ {e.price}</p>
              </ButtonType>
            ))}
          </TicketType>
        </TicketOption>
      ) : (
        ''
      )}

      {typeTicket && typeTicketSelected.name === 'Presencial' ? (
        <TicketOption>
          <span>Ótimo! Agora escolha a sua modalidade de hospedagem</span>
          <TicketType>
            {hostOptions.map((e, index) => (
              <ButtonSubType
                key={index}
                data-type={e}
                isColorButtonSubSelected={colorButtonSubSelected.id === e.id}
                onClick={() => {
                  getTicketTypeInPerson(e);
                  setColorButtonSubSelected(e);
                }}
              >
                <p>{e.name}</p>
                <p>+ R$ {e.price}</p>
              </ButtonSubType>
            ))}
          </TicketType>
        </TicketOption>
      ) : (
        ''
      )}

      {/* Depois que os TicketsOptions tiverem sido selecionados, aparece esse botão para reservar o ingresso */}
      {selectedId.length !== 0 ? (
        <SendTicket>
          <span>
            {`Fechado! O total ficou em R$ ${
              typeTicketSelected.name === 'Online'
                ? typeTicketSelected.price
                : typeTicketSelected.price + typeTicketInPerson.price
            }. Agora é só
            confirmar:`}
          </span>
          <button onClick={() => createTicket(selectedId[0])}>RESERVAR INGRESSO</button>
        </SendTicket>
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

const SendTicket = styled.div`
  display: flex;
  flex-direction: column;
  > span {
    color: #8e8e8e;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    font-size: 20px;
  }
  > button {
    cursor: pointer;
    border: none;
    margin-top: 20px;
    width: 162px;
    height: 37px;
    background: #e0e0e0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;

    color: #000000;
  }
`;

const TicketType = styled.div`
  margin: 17px 0 35px 0;
  display: flex;
  gap: 5%;
`;

const ButtonType = styled.button`
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

const ButtonSubType = styled.button`
  background: ${(props) => (props.isColorButtonSubSelected ? '#FFEED2' : '#FFFFFF')};

  border: ${(props) => (props.isColorButtonSubSelected ? 'none' : '1px solid #CECECE')};
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
